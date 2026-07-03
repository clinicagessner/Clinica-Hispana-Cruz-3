import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
// TODO(randy): reactivar cuando existan los IDs de analítica de Cruz #3
// import { GoogleAnalytics } from "@next/third-parties/google";
// import Script from "next/script";
import { SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [t, googleData] = await Promise.all([
    getTranslations({ locale, namespace: "metadata" }),
    getGooglePlaceData(),
  ]);
  const reviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const ogDescription = t("ogDescription", { reviews, rating });

  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "clínica hispana Houston",
      "médico español Houston",
      "doctor hispano Houston",
      "clínica médica Houston TX",
      "medicina familiar Houston",
      "urgencias menores Houston",
      "laboratorio clínico Houston",
      "Hispanic clinic Houston",
      "Spanish speaking doctor Houston",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: {
        es: "/",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      url: SITE_CONFIG.baseUrl,
      siteName: SITE_CONFIG.name,
      title: t("title"),
      description: ogDescription,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Clínica médica hispana en Houston TX`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: ogDescription,
      images: [`${SITE_CONFIG.baseUrl}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // TODO(randy): PENDIENTE — tokens de Google Search Console de Cruz #3
    // verification: {
    //   google: ["<TOKEN_1>", "<TOKEN_2>"],
    // },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${montserrat.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC2626" />
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        {/* TODO(randy): PENDIENTE — CallRail de Cruz #3 (script swap.js + preconnect a cdn.callrail.com) */}
        {/* TODO(randy): PENDIENTE — Meta Pixel de Cruz #3 (script + noscript + preconnect a connect.facebook.net) */}
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            {children}
            <ScrollToTop />
            <JsonLdMedicalClinic />
            <ScrollAnimations />
            <SpeedInsights />
            <Analytics />
          </TooltipProvider>
        </NextIntlClientProvider>
      </body>
      {/* TODO(randy): PENDIENTE — crear propiedad GA4 de Cruz #3 y activar:
          <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      {/* TODO(randy): PENDIENTE — Meta Pixel de Cruz #3 (fbq init + PageView) */}
      {/* TODO(randy): PENDIENTE — Google Ads (AW-XXXXXXXXX) de Cruz #3 */}
    </html>
  );
}
