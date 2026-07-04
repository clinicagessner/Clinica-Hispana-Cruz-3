import { getLocale, getTranslations } from "next-intl/server";
import {
  Stethoscope,
  FirstAid,
  Flask,
  Heartbeat,
  Drop,
  Heart,
  GenderFemale,
  Syringe,
  Clipboard,
  TestTube,
  Pulse,
  ShieldCheck,
  Wind,
  Truck,
  Scissors,
  Bone,
  Monitor,
  Pill,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { SERVICES } from "@/lib/constants";
import { getLocalizedService } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  FirstAid,
  Flask,
  Heartbeat,
  Drop,
  Heart,
  GenderFemale,
  Syringe,
  Clipboard,
  TestTube,
  Activity: Pulse,
  ShieldCheck,
  Wind,
  Truck,
  Scissors,
  Bone,
  Monitor,
  Pill,
  Shield: ShieldCheck,
};

export async function Services() {
  const [t, locale] = await Promise.all([getTranslations("services"), getLocale()]);

  const featured = [...SERVICES].sort((a, b) => a.order - b.order).slice(0, 8);

  return (
    <section id="services" aria-labelledby="services-title" className="py-16 md:py-24 bg-slate-light scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            const localized = getLocalizedService(service, locale);
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative flex flex-col bg-white rounded-2xl border border-slate-dark/10 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-primary/30 animate-on-scroll fade-up stagger-${(index % 4) + 1}`}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-red-bg text-red-primary transition-colors duration-300 group-hover:bg-red-primary group-hover:text-white">
                  <Icon className="size-6" weight="duotone" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-slate-dark text-lg leading-snug mb-2">
                  {localized.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {localized.description}
                </p>

                {/* Link footer */}
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-red-primary group-hover:gap-2.5 transition-all">
                  {t("learnMore")}
                  <ArrowRight className="size-4" weight="bold" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="gap-2">
            <Link href="/services">
              {t("viewAll")}
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
