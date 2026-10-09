import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocale } from "next-intl/server";
import { getLocalizedService } from "@/lib/utils";

// Nodo completo de la clínica: solo en la home (§7 B0.14). El resto de páginas
// lleva JsonLdMedicalClinicRef, con el mismo @id. Nunca en el layout.
export async function JsonLdMedicalClinic() {
  const [placeData, locale] = await Promise.all([getGooglePlaceData(), getLocale()]);
  const isEn = locale === "en";

  // Rating y reseñas solo si vienen de Google (Places). Si la API falla se usa
  // el respaldo comprobado solo para el conteo; nunca reseñas de relleno.
  const ratingValue = placeData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const reviewCount = placeData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  const reviewItems = placeData?.reviews.length
    ? placeData.reviews.slice(0, 5).map((r) => ({
        "@type": "Review" as const,
        author: { "@type": "Person" as const, name: r.author_name },
        datePublished: new Date(r.time * 1000).toISOString().slice(0, 10),
        reviewBody: r.text,
        reviewRating: { "@type": "Rating" as const, ratingValue: r.rating, bestRating: 5 },
        itemReviewed: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
      }))
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        // Nombre tal como aparece en la ficha de Google (sin tilde).
        alternateName: "Clinica Hispana Cruz #3",
        description: SITE_CONFIG.description,
        disambiguatingDescription: isEn
          ? "Clínica Hispana Cruz #3 is a walk-in clinic on S Braeswood Blvd in southwest Houston (5411 S Braeswood Blvd, ZIP 77096), in the Meyerland area. It is one of the four Clínica Hispana Cruz locations in Houston; the others are on Airline Dr, Kuykendahl Rd and Beechnut St."
          : "Clínica Hispana Cruz #3 es una clínica sin cita en S Braeswood Blvd, en el suroeste de Houston (5411 S Braeswood Blvd, ZIP 77096), en la zona de Meyerland. Es una de las cuatro sedes de Clínica Hispana Cruz en Houston; las otras están en Airline Dr, Kuykendahl Rd y Beechnut St.",
        url: SITE_CONFIG.baseUrl,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        priceRange: "$$",
        currenciesAccepted: "USD",
        // Formas de pago declaradas en la ficha de Google.
        paymentAccepted: "Cash, Credit Card, Debit Card",
        // Atributos de la ficha de Google (estacionamiento gratuito: regla de red).
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: isEn ? "Free parking" : "Estacionamiento gratuito", value: true },
          { "@type": "LocationFeatureSpecification", name: isEn ? "Wheelchair-accessible entrance" : "Entrada accesible para silla de ruedas", value: true },
          { "@type": "LocationFeatureSpecification", name: isEn ? "Wheelchair-accessible restroom" : "Sanitarios accesibles para silla de ruedas", value: true },
        ],
        publicAccess: true,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.state,
          postalCode: CONTACT_INFO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.coordinates.lat,
          longitude: CONTACT_INFO.coordinates.lng,
        },
        hasMap: `https://www.google.com/maps/place/?q=place_id:${CONTACT_INFO.placeId}`,
        ...(reviewCount > 0 && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue,
            reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }),
        review: reviewItems,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        availableLanguage: [
          { "@type": "Language", name: "Spanish", alternateName: "es" },
          { "@type": "Language", name: "English", alternateName: "en" },
        ],
        availableService: SERVICES.map((service) => {
          const localized = getLocalizedService(service, locale);
          return {
            "@type": "MedicalProcedure",
            "@id": `${SITE_CONFIG.baseUrl}/services/${service.slug}#procedure`,
            name: localized.title,
            description: localized.description,
            url: `${SITE_CONFIG.baseUrl}${isEn ? "/en" : ""}/services/${service.slug}`,
          };
        }),
        sameAs: [
          SOCIAL_LINKS.google,
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.tiktok,
          SOCIAL_LINKS.yelp,
        ].filter(Boolean),
        // Cruz (Airline Dr), Cruz 2, Cruz 3 y Cruz 4 comparten dueño; el sitio de Airline es el principal del grupo
        parentOrganization: {
          "@type": "MedicalOrganization",
          name: "Grupo de Clínicas Hispana Cruz de Houston",
          url: "https://www.clinicahispanacruz.com",
        },
        // Áreas de servicio de la ficha de Google (Houston y Meyerland Area).
        areaServed: [
          { "@type": "City", name: "Houston", "@id": "https://www.wikidata.org/wiki/Q16555" },
          { "@type": "Place", name: "Meyerland Area, Houston, TX" },
        ],
        // Solo lo que ejerce el equipo médico general: sin urgencias ni
        // ginecología como especialidad (no hay titulados, §9 del playbook).
        medicalSpecialty: [
          "https://schema.org/FamilyPractice",
          "https://schema.org/PrimaryCare",
          "https://schema.org/PreventiveMedicine",
          "https://schema.org/LaboratoryScience",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
        inLanguage: ["es-MX", "en-US"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Nodo ligero con el mismo @id que el completo de la home. Va en cada página
// que no es la home; nunca en el layout (§7 B0.14).
export function JsonLdMedicalClinicRef() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    telephone: CONTACT_INFO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address,
      addressLocality: CONTACT_INFO.city,
      addressRegion: CONTACT_INFO.state,
      postalCode: CONTACT_INFO.zip,
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// MedicalWebPage de un servicio (§12 B2): revisor = la clínica, sin médico
// nombrado (§9). mainEntity apunta al MedicalProcedure con @id estable.
export function JsonLdMedicalWebPage({
  url,
  slug,
  name,
  description,
  lastReviewed,
  locale,
}: {
  url: string;
  slug: string;
  name: string;
  description: string;
  lastReviewed: string;
  locale: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    lastReviewed,
    dateModified: lastReviewed,
    reviewedBy: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    publisher: { "@id": `${SITE_CONFIG.baseUrl}/#clinic` },
    about: { "@id": `${SITE_CONFIG.baseUrl}/services/${slug}#procedure` },
    isPartOf: { "@id": `${SITE_CONFIG.baseUrl}/#website` },
    mainEntity: { "@id": `${SITE_CONFIG.baseUrl}/services/${slug}#procedure` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  slug: string;
  bodyLocation?: string;
  procedureType?: string;
}

export function JsonLdMedicalProcedure({
  name,
  description,
  image,
  url,
  slug,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureSchemaProps) {
  // Mismo @id que en availableService de la home; sin `provider` (el
  // MedicalProcedure no lo admite: la clínica lo enlaza desde su nodo).
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${SITE_CONFIG.baseUrl}/services/${slug}#procedure`,
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    provider: {
      "@type": "MedicalClinic",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Nodo WebPage de la portada. Solo se emite en la home: antes vivía en el @graph global
 * y cada página del sitio declaraba una WebPage con la URL de la portada y en es-MX.
 */
export function JsonLdWebPage({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const url = isEn ? `${SITE_CONFIG.baseUrl}/en` : SITE_CONFIG.baseUrl;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    inLanguage: isEn ? "en-US" : "es-MX",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
