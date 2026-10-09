import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado (cuota de Image Optimization, /_next/image
    // → 402). Loader propio (B4): sirve las variantes pregeneradas de public/images
    // (scripts/generate-image-variants.mjs, en prebuild; manifiesto en
    // src/lib/image-variants.json) para que next/image emita srcset y el móvil no
    // descargue el archivo de escritorio. Lo que no está en el manifiesto (remotas,
    // PNG/JPG) se sirve tal cual.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1376],
    imageSizes: [128, 256, 512],
    // Calidades que usan los <Image quality> del sitio (hero 50, landing 60).
    qualities: [50, 60, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
  },
  async redirects() {
    // El dominio tuvo un sitio WordPress hasta mediados de 2026 (capturas en Wayback
    // Machine hasta 2026-06-09) y los buscadores aún indexan esas URLs. Se redirigen
    // de forma permanente a la página equivalente del sitio actual.
    const legacy: Array<[string, string]> = [
      // Páginas
      ["/inicio", "/"],
      ["/clinica-hispana", "/"],
      ["/contacto", "/#contact"],
      ["/privacy-policy", "/privacy"],
      ["/servicios", "/services"],
      ["/consulta-general", "/services"],
      ["/dermatologia", "/services"],
      // Servicios (URLs planas y bajo /servicios/)
      ["/servicios/chequeo-de-inmigracion", "/services/examenes-inmigracion"],
      ["/servicios/clinica-ginecologia", "/services/ginecologia"],
      ["/servicios/enfermedades-cronicas-diabetes-e-hipertension", "/services/condiciones-cronicas"],
      ["/servicios/sueros-vitaminados", "/services/sueros-vitaminados"],
      ["/sueros-vitaminados", "/services/sueros-vitaminados"],
      ["/alergias", "/services/alergias"],
      ["/enfermedades-cronicas-hipertension-y-diabetes", "/services/condiciones-cronicas"],
      ["/enfermedades-de-transmision-sexual", "/services/enfermedades-transmision-sexual"],
      ["/estudio-de-tiroides", "/services/tiroides"],
      ["/examen-dot", "/services/examen-dot"],
      ["/examen-inmigracion", "/services/examenes-inmigracion"],
      ["/examenes-de-embarazo", "/services/prueba-embarazo"],
      ["/examenes-de-laboratorio", "/services/examenes-sangre"],
      ["/ginecologia", "/services/ginecologia"],
      ["/ultrasonido", "/services/ultrasonido"],
      ["/urologia", "/services/salud-hombre"],
      // Blog antiguo: taxonomías y posts con equivalente claro
      ["/category/:slug*", "/blog"],
      ["/author/:slug*", "/blog"],
      ["/diabetes-como-detectarla-y-prevenir-complicaciones", "/blog/control-diabetes-houston-guia-pacientes"],
      ["/como-saber-si-necesitas-vitaminas-senales-que-tu-cuerpo-envia", "/blog/vitamina-b12-beneficios-inyecciones-houston"],
      ["/diferencias-entre-gripe-alergia-y-covid-como-identificarlas-este-otono-en-houston", "/services/enfermedades-respiratorias"],
      ["/guia-rapida-para-entender-tu-presion-arterial-y-como-controlarla", "/services/condiciones-cronicas"],
      ["/la-importancia-de-mantener-un-colesterol-saludable", "/services/condiciones-cronicas"],
      ["/la-importancia-de-los-examenes-anuales-para-detectar-enfermedades-a-tiempo", "/blog/laboratorio-clinico-houston-analisis-sangre"],
      ["/los-chequeos-medicos-que-todo-adulto-debe-hacerse-cada-ano-especialmente-en-houston", "/blog/laboratorio-clinico-houston-analisis-sangre"],
      ["/el-impacto-del-estres-en-tu-salud-fisica-y-mental", "/blog"],
      // Posts antiguos cuyo slug empezaba con un emoji (se matchea por el resto del slug)
      ["/:slug(.*sabias-que-el-clima-de-houston-puede-afectar-tu-salud-respiratoria)", "/services/enfermedades-respiratorias"],
      ["/:slug(.*5-razones-por-las-que-deberias-tener-un-medico-de-confianza-aunque-no-tengas-seguro)", "/blog/atencion-medica-sin-seguro-houston"],
      ["/:slug(.*como-prepararte-para-tu-cita-medica-y-aprovecharla-al-maximo)", "/blog"],
    ];

    return legacy.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      // Imágenes de public/: 30 días + revalidación en segundo plano. No
      // `immutable` porque los nombres no llevan hash y un flyer puede
      // reemplazarse con el mismo nombre.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
