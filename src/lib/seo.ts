import { SITE_CONFIG } from "@/lib/constants";

// <title> de ≤60 caracteres (§7 B0.16): con la marca completa si cabe, si no
// con la corta, y si tampoco, solo el título. Evita la plantilla del layout
// ("%s | Clínica Hispana Cruz #3 Houston"), que llevaba casi todos a 61-106.
// La home y las landings de Google Ads conservan su título (regla 5).
export function seoTitle(title: string): string {
  for (const brand of [SITE_CONFIG.name, "Clínica Cruz"]) {
    const full = `${title} | ${brand}`;
    if (full.length <= 60) return full;
  }
  return title;
}

export const OG_IMAGE = `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`;

// openGraph y twitter completos: el openGraph de una página reemplaza entero al
// del layout, así que cada página tiene que llevar su imagen.
export function social(title: string, description: string, url: string, image: string = OG_IMAGE) {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website" as const,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}

// Servicios que son landing de Google Ads (RED.md): título, H1 y meta solo con
// aprobación del usuario.
export const ADS_LANDING_SLUGS = ["ginecologia", "condiciones-cronicas"];

// Título y meta aprobados para las landings de Ads ("procede cruz-3", 2026-10-10).
// Solo cambian el <title> y la meta; el H1 y el texto visible siguen siendo service.title/description.
export const ADS_LANDING_META: Record<string, Partial<Record<"es" | "en", { title?: string; description?: string }>>> = {
  "condiciones-cronicas": {
    "es": {
      "title": "Control de Diabetes, Presión y Colesterol | Cruz #3",
      "description": "Control de diabetes, presión alta y colesterol en Houston, TX: laboratorio con A1C, ajuste de medicamentos y receta electrónica. Sin cita, en español."
    },
    "en": {
      "title": "Diabetes, Blood Pressure & Cholesterol Care | Cruz #3",
      "description": "Diabetes, high blood pressure and cholesterol care in Houston, TX: A1C lab work, medication adjustment and e-prescriptions. Walk-in, in Spanish."
    }
  },
  "ginecologia": {
    "es": {
      "title": "Ginecología en Español: Papanicolaou y Cultivos | Cruz #3",
      "description": "Ginecología en español en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. Sin cita, sin seguro y con precios accesibles."
    },
    "en": {
      "title": "Gynecology in Spanish: Pap Smear & Cultures | Cruz #3"
    }
  }
};
