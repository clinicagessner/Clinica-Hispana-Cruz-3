import { SERVICES, PROMOTIONS, SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS, CONTENT_LAST_MODIFIED } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { getLocalizedService } from "@/lib/utils";
import { getServiceFAQs } from "@/lib/service-faqs";
import type { Service } from "@/types";

const BASE = SITE_CONFIG.baseUrl;

const CATEGORY_LABELS: Record<Service["category"], string> = {
  "medicina-general": "General medicine and chronic conditions",
  "salud-mujer": "Women's health",
  examenes: "Exams and certificates",
  laboratorio: "Lab and diagnostics",
  tratamientos: "Treatments and procedures",
};

const SISTER_CLINICS = [
  { name: "Clínica Hispana Cruz (Airline Dr, north Houston)", url: "https://www.clinicahispanacruz.com" },
  { name: "Clínica Hispana Cruz 2 (Kuykendahl Rd)", url: "https://www.hispanac2.com" },
  { name: "Clínica Hispana Cruz 4 (Beechnut St)", url: "https://www.clinicahispanacruz4.com" },
];

function servicesByCategory() {
  const sorted = [...SERVICES].sort((a, b) => a.order - b.order);
  return (Object.keys(CATEGORY_LABELS) as Service["category"][]).map((category) => ({
    label: CATEGORY_LABELS[category],
    services: sorted.filter((s) => s.category === category),
  }));
}

/**
 * /llms.txt — índice compacto para motores de IA, generado desde los mismos datos que el sitio
 * (SERVICES, PROMOTIONS, posts del blog, CONTACT_INFO, SOCIAL_LINKS) para que nunca quede desfasado.
 */
export function buildLlmsTxt(): string {
  const posts = getBlogPosts("es");
  const promos = [...PROMOTIONS].sort((a, b) => a.order - b.order);
  const lines: string[] = [];

  lines.push(`# ${SITE_CONFIG.name} — Houston, TX`);
  lines.push("");
  lines.push(
    `> ${SITE_CONFIG.name} is a Spanish-speaking primary care and minor urgent care clinic at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip} (southwest Houston, Braeswood near Meyerland). Open every day 9:00 AM–9:00 PM. Walk-ins welcome, no health insurance required, self-pay pricing. Care is provided 100% in Spanish; staff is bilingual (Spanish/English).`
  );
  lines.push("");
  lines.push(`Site language: Spanish is the default (no URL prefix). English pages use the /en prefix, e.g. ${BASE}/en/services/examen-dot`);
  lines.push(`Content last updated: ${CONTENT_LAST_MODIFIED}. Full version: ${BASE}/llms-full.txt`);
  lines.push("");
  lines.push("## Key facts");
  lines.push(`- Address: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`);
  lines.push(`- Phone: ${CONTACT_INFO.phoneFormatted.replace("+1 ", "")}`);
  lines.push(`- WhatsApp (chat only, shared by all Clínicas Cruz locations): ${CONTACT_INFO.whatsappDisplay}`);
  lines.push(`- Email: ${CONTACT_INFO.email}`);
  lines.push("- Hours: Monday–Sunday, 9:00 AM–9:00 PM");
  lines.push("- Appointments: not required (walk-in); phone reservations available");
  lines.push("- Insurance: not required; cash and credit/debit cards accepted; payment plans available");
  lines.push("- Languages: Spanish (primary), English");
  lines.push("- Google rating: 4.9+ stars, hundreds of reviews");
  lines.push("- Access: free parking, wheelchair accessible, bus access");
  lines.push("- Areas served: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and southwest Houston");
  lines.push("- Lab, ultrasound and EKG are performed on site; lab result turnaround varies by test");
  lines.push("");
  lines.push("## Main pages");
  lines.push(`- [About the clinic (Quiénes somos)](${BASE}/blog/bienvenidos-clinica-hispana-cruz-3): who we are, clinic facts table, full service list, clinic vs. ER guidance, FAQs`);
  lines.push(`- [All services](${BASE}/services): ${SERVICES.length} services with details in Spanish and English`);
  lines.push(`- [Promotions and package prices](${BASE}/promociones): current self-pay packages with reference prices`);
  lines.push(`- [Blog](${BASE}/blog): patient guides in Spanish and English`);
  lines.push("");
  lines.push("## Services");
  for (const group of servicesByCategory()) {
    lines.push("");
    lines.push(`### ${group.label}`);
    for (const s of group.services) {
      const en = getLocalizedService(s, "en");
      lines.push(`- [${en.title}](${BASE}/services/${s.slug}): ${en.description}`);
    }
  }
  lines.push("");
  lines.push("## Current promotions (self-pay reference prices, may change without notice)");
  for (const p of promos) {
    lines.push(`- ${p.titleEn}${p.price ? ` — ${p.price}` : ""}: ${p.includesEn.join(", ")}`);
  }
  lines.push("");
  lines.push("## Patient guides (blog)");
  for (const post of posts) {
    lines.push(`- [${post.title}](${BASE}/blog/${post.slug}): ${post.description} (updated ${post.dateModified || post.date})`);
  }
  lines.push("");
  lines.push("## Sister clinics (same owner, Clínicas Hispana Cruz group, Houston)");
  for (const c of SISTER_CLINICS) lines.push(`- ${c.name}: ${c.url}`);
  lines.push(`- The WhatsApp line ${CONTACT_INFO.whatsappDisplay} is shared by all four clinics`);
  lines.push("");
  lines.push("## Profiles");
  const profiles: Array<[string, string | undefined]> = [
    ["Google Business Profile", SOCIAL_LINKS.google],
    ["Yelp", SOCIAL_LINKS.yelp],
    ["Facebook", SOCIAL_LINKS.facebook],
    ["Instagram", SOCIAL_LINKS.instagram],
    ["TikTok", SOCIAL_LINKS.tiktok],
    ["LinkedIn", SOCIAL_LINKS.linkedin],
    ["X", SOCIAL_LINKS.x],
    ["YouTube", SOCIAL_LINKS.youtube],
  ];
  for (const [label, url] of profiles) if (url) lines.push(`- ${label}: ${url}`);
  lines.push("");
  lines.push("## Website");
  lines.push(`${BASE} (sitemap: ${BASE}/sitemap.xml)`);
  lines.push("");
  return lines.join("\n");
}

/**
 * /llms-full.txt — la misma guía más el contenido completo de servicios (ES/EN) y artículos (ES/EN).
 */
export function buildLlmsFullTxt(): string {
  const parts: string[] = [buildLlmsTxt()];
  const sorted = [...SERVICES].sort((a, b) => a.order - b.order);

  parts.push("---");
  parts.push("");
  parts.push("# Full service descriptions");
  for (const s of sorted) {
    for (const locale of ["es", "en"] as const) {
      const l = getLocalizedService(s, locale);
      const url = `${BASE}${locale === "en" ? "/en" : ""}/services/${s.slug}`;
      parts.push("");
      parts.push(`## ${l.title} (${locale})`);
      parts.push(`URL: ${url}`);
      parts.push("");
      parts.push(l.longDescription);
      const faqs = getServiceFAQs(s.slug, locale);
      if (faqs.length) {
        parts.push("");
        for (const f of faqs) parts.push(`Q: ${f.question}\nA: ${f.answer}`);
      }
    }
  }

  parts.push("");
  parts.push("---");
  parts.push("");
  parts.push("# Full articles");
  for (const locale of ["es", "en"] as const) {
    for (const post of getBlogPosts(locale)) {
      const url = `${BASE}${locale === "en" ? "/en" : ""}/blog/${post.slug}`;
      parts.push("");
      parts.push(`## ${post.title} (${locale})`);
      parts.push(`URL: ${url}`);
      parts.push(`Published: ${post.date}${post.dateModified ? ` · Updated: ${post.dateModified}` : ""} · Author: ${post.author}`);
      parts.push("");
      parts.push(post.content);
    }
  }
  parts.push("");
  return parts.join("\n");
}
