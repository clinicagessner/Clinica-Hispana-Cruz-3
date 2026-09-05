import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado: la cuenta tiene topada la cuota de Image
    // Optimization (/_next/image devuelve HTTP 402). Servimos los originales,
    // ya comprimidos a mano (WebP q80 + PNG pngquant/oxipng).
    unoptimized: true,
    qualities: [50, 60, 75],
    minimumCacheTTL: 31536000,
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
