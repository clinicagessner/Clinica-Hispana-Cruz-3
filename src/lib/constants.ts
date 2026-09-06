import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Cruz #3",
  shortName: "Clínica Hispana",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, urgencias menores, laboratorio y más.",
  baseUrl: "https://www.clinicahispanacruz3.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "5411 S Braeswood Blvd",
  city: "Houston",
  state: "TX",
  zip: "77096",
  phone: "+18323232330",
  phoneFormatted: "+1 (832) 323-2330",
  // WhatsApp — número EXCLUSIVO para chat. Nunca usarlo en tel:, NAP ni schema.
  // El teléfono de llamadas sigue siendo `phone` / CallRail hace swap solo sobre ese.
  whatsapp: "12817412157", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(281) 741-2157",
  email: "clinicahcruz3@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Clinica+Hispana+Cruz+3+5411+S+Braeswood+Blvd+Houston+TX+77096&query_place_id=ChIJIb8rwELrQIYR6O6DRfXZI4o",
  // Embed "Compartir → Insertar mapa" de Google Maps: oficial, gratis y SIN API key
  // (apunta al listado exacto de Cruz #3 vía su CID 0x8640eb42c02bbf21:0x8a23d9f54583eee8)
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.4!2d-95.4774337!3d29.6756492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640eb42c02bbf21%3A0x8a23d9f54583eee8!2sClinica%20Hispana%20Cruz%20%233!5e0!3m2!1ses!2sus!4v1751500000000",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJIb8rwELrQIYR6O6DRfXZI4o",
  placeId: "ChIJIb8rwELrQIYR6O6DRfXZI4o",
  coordinates: {
    lat: 29.6756492,
    lng: -95.4774337,
  },
};

// TODO(randy): PENDIENTE — URLs reales de redes sociales de Cruz #3 (footer y JSON-LD
// las omiten automáticamente mientras estén vacías)
// Última actualización de contenido estático (home, servicios, promociones). Se usa como
// <lastmod> del sitemap en vez de la fecha del build, que cambiaba en cada deploy.
// Actualizar cuando cambie el contenido de SERVICES/PROMOTIONS o de las páginas fijas.
export const CONTENT_LAST_MODIFIED = "2026-09-05";

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/clinicahispanacruz3",
  instagram: "https://www.instagram.com/clinicahispanacruz3/",
  tiktok: "https://www.tiktok.com/@clinica.hispana.c3",
  // Ficha de Google Business (URL canónica de Maps por CID; el enlace share.google no es estable)
  google: "https://maps.google.com/?cid=9954039248875417320",
  yelp: "https://www.yelp.com/biz/cl%C3%ADnica-hispana-cruz-3-houston-2",
};

// Google Reviews data - fallback cuando la Places API no responde
// (valores reales del listado al 2026-07-03; en vivo se actualizan solos)
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 365,
  averageRating: 4.9,
  placeId: "ChIJIb8rwELrQIYR6O6DRfXZI4o",
};

// Dedicated CallRail tracking number for the Conquesting landing only.
// Used in /landing/comparacion-clinicas-houston via a route-specific layout.
// TODO(randy): PENDIENTE — número CallRail dedicado; mientras tanto usa el principal
export const CONQUESTING_PHONE = {
  phone: "+18323232330",
  phoneFormatted: "+1 (832) 323-2330",
} as const;

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "title": "Control de Diabetes, Presión Alta y Colesterol",
    "titleEn": "Diabetes, High Blood Pressure and Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, presión alta y colesterol en Houston, TX: laboratorio con A1C, ajuste de medicamentos, plan de alimentación y farmacia en el mismo lugar. Sin cita, sin seguro, en español.",
    "descriptionEn": "Diabetes, high blood pressure and cholesterol care in Houston, TX: lab work with A1C, medication adjustment, meal plan and pharmacy in one place. Walk-in, no insurance, in Spanish.",
    "longDescription": "Las enfermedades crónicas como la diabetes, la hipertensión y el colesterol alto se controlan mejor con seguimiento constante. En Clínica Hispana Cruz #3 diseñamos un plan claro, hacemos los análisis en el mismo lugar, ajustamos tus medicamentos y te acompañamos paso a paso, en español y sin necesidad de seguro.\n\n**¿Qué incluye?**\n- Evaluación inicial y exámenes de laboratorio\n- Monitoreo de glucosa, hemoglobina A1C, presión arterial, colesterol y triglicéridos\n- Ajuste de medicamentos según tu evolución\n- Plan de alimentación y actividad física adaptado a ti\n- Educación sobre tu condición en tu idioma\n- Resurtido de recetas en nuestra farmacia\n\n**¿Qué revisamos en cada visita?**\nPresión arterial, peso y glucosa en el momento. Según tu condición, análisis de sangre: A1C para conocer el promedio de azúcar de los últimos 3 meses, perfil de lípidos, función del riñón y del hígado. En diabetes revisamos también los pies y preguntamos por síntomas como visión borrosa, hormigueo o heridas que tardan en sanar.\n\n**¿Cada cuánto debo venir?**\n- Diabetes: A1C cada 3 meses hasta alcanzar la meta y después cada 6 meses\n- Presión alta: cada 1 a 3 meses mientras se ajusta el tratamiento, luego cada 3 a 6 meses\n- Colesterol: perfil de lípidos cada 6 a 12 meses, o antes si cambia el tratamiento\nEl médico adapta el calendario a tu caso y te lo deja por escrito.\n\n**Metas de referencia**\nPara la mayoría de los adultos: A1C por debajo de 7%, presión por debajo de 130/80 y colesterol LDL según tu nivel de riesgo. Son valores orientativos; tu médico define tus metas según tu edad y otras condiciones.\n\n**Empezar sin seguro**\nEl paquete Chequeo General Completo incluye examen general de sangre, A1C, examen de orina y consulta médica, y es un buen punto de partida para saber cómo estás. Después, cada control se paga por separado a precio de pago directo, y puedes surtir tu receta en nuestra farmacia al terminar.\n\n**Señales de alarma**\nGlucosa muy alta con sed intensa y vómito, glucosa muy baja con confusión o desmayo, presión de 180/120 o más, dolor en el pecho o dificultad para respirar: llama al 911 o acude a la sala de emergencias más cercana.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Chronic conditions such as diabetes, hypertension and high cholesterol are best controlled with steady follow-up. At Clínica Hispana Cruz #3 we design a clear plan, run your labs in the same place, adjust your medications and walk with you step by step, in Spanish and with no insurance required.\n\n**What's included?**\n- Initial evaluation and lab tests\n- Monitoring of glucose, hemoglobin A1C, blood pressure, cholesterol and triglycerides\n- Medication adjustment based on your progress\n- A meal and physical activity plan tailored to you\n- Education about your condition in your language\n- Prescription refills at our pharmacy\n\n**What do we check at each visit?**\nBlood pressure, weight and glucose on the spot. Depending on your condition, blood tests: A1C to learn your average sugar over the last 3 months, lipid panel, kidney and liver function. For diabetes we also check your feet and ask about symptoms such as blurred vision, tingling or wounds that are slow to heal.\n\n**How often should I come?**\n- Diabetes: A1C every 3 months until you reach your goal, then every 6 months\n- High blood pressure: every 1 to 3 months while treatment is adjusted, then every 3 to 6 months\n- Cholesterol: lipid panel every 6 to 12 months, or sooner if treatment changes\nThe doctor adapts the schedule to your case and gives it to you in writing.\n\n**Reference goals**\nFor most adults: A1C below 7%, blood pressure below 130/80 and LDL cholesterol according to your risk level. These are guidelines; your doctor sets your goals based on your age and other conditions.\n\n**Getting started without insurance**\nThe Complete General Checkup package includes a general blood panel, A1C, urinalysis and a medical consultation, and is a good starting point to know where you stand. After that, each follow-up is paid separately at self-pay pricing, and you can fill your prescription at our pharmacy when you finish.\n\n**Warning signs**\nVery high glucose with intense thirst and vomiting, very low glucose with confusion or fainting, blood pressure of 180/120 or higher, chest pain or trouble breathing: call 911 or go to the nearest emergency room.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston"
    ],
    "keywordsEn": [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston"
    ],
    "features": [
      "Laboratorio con A1C y perfil de lípidos en el mismo lugar",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos y resurtido en farmacia",
      "Plan de alimentación y hábitos",
      "Seguimiento en español, sin seguro"
    ],
    "featuresEn": [
      "Lab with A1C and lipid panel in one place",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment and pharmacy refills",
      "Meal and lifestyle plan",
      "Follow-up in Spanish, no insurance"
    ],
    "relatedPosts": ["control-diabetes-houston-guia-pacientes"],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes de Tiroides (TSH, T3, T4) y Tratamiento",
    "titleEn": "Thyroid Tests (TSH, T3, T4) and Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes de tiroides en Houston, TX sin orden médica: TSH, T3 y T4 en sangre, diagnóstico de hipotiroidismo e hipertiroidismo, tratamiento y control en español. Sin cita, sin seguro.",
    "descriptionEn": "Thyroid tests in Houston, TX with no doctor's order: TSH, T3 and T4 blood tests, diagnosis of hypothyroidism and hyperthyroidism, treatment and follow-up in Spanish. Walk-in, no insurance.",
    "longDescription": "La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana Cruz #3 evaluamos tu tiroides con análisis de sangre sin orden médica, te damos el tratamiento adecuado y hacemos el seguimiento en español.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y exploración del cuello\n- Pruebas de función tiroidea en sangre (TSH, T4 libre y T3)\n- Anticuerpos tiroideos cuando el médico sospecha una causa autoinmune\n- Diagnóstico de hipotiroidismo o hipertiroidismo\n- Inicio y ajuste del tratamiento\n- Seguimiento periódico con control de TSH\n\n**Síntomas de que la tiroides trabaja de menos (hipotiroidismo)**\nCansancio constante, aumento de peso sin explicación, frío excesivo, piel seca, caída del cabello, estreñimiento, tristeza o lentitud para pensar, y periodos menstruales irregulares.\n\n**Síntomas de que la tiroides trabaja de más (hipertiroidismo)**\nPérdida de peso sin buscarlo, palpitaciones, nerviosismo o ansiedad, temblor en las manos, calor excesivo y sudoración, insomnio y diarrea.\n\n**¿Cómo se revisa la tiroides?**\nCon un análisis de sangre. La prueba principal es la TSH; la T4 libre y la T3 completan el panel, y los anticuerpos ayudan a identificar enfermedades como Hashimoto o Graves. No requiere ayuno: tomamos la muestra en el momento, sin cita ni orden médica, y te avisamos cuando el resultado esté listo. La evaluación de tiroides también forma parte del paquete Perfil Hormonal para Mujeres.\n\n**Tratamiento y seguimiento**\nEl hipotiroidismo se trata con levotiroxina, una pastilla diaria que se toma en ayunas. Al iniciar o cambiar la dosis, la TSH se controla a las 6 u 8 semanas hasta encontrar la dosis correcta; después basta un control cada 6 a 12 meses. En el hipertiroidismo el médico indica medicamentos antitiroideos y, cuando se requiere, te refiere al endocrinólogo. Puedes surtir tu receta en nuestra farmacia.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Your thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana Cruz #3 we evaluate your thyroid with blood tests without a doctor's order, start the right treatment and follow up in Spanish.\n\n**What's included?**\n- Symptom evaluation and neck exam\n- Thyroid function blood tests (TSH, free T4 and T3)\n- Thyroid antibodies when the doctor suspects an autoimmune cause\n- Diagnosis of hypothyroidism or hyperthyroidism\n- Starting and adjusting treatment\n- Periodic follow-up with TSH monitoring\n\n**Signs your thyroid is underactive (hypothyroidism)**\nConstant fatigue, unexplained weight gain, feeling cold, dry skin, hair loss, constipation, low mood or slow thinking, and irregular periods.\n\n**Signs your thyroid is overactive (hyperthyroidism)**\nUnintended weight loss, palpitations, nervousness or anxiety, hand tremor, feeling hot and sweaty, insomnia and diarrhea.\n\n**How is the thyroid checked?**\nWith a blood test. TSH is the main test; free T4 and T3 complete the panel, and antibodies help identify conditions such as Hashimoto's or Graves' disease. No fasting is needed: we draw the sample on the spot, walk-in and without a doctor's order, and let you know when the result is ready. Thyroid evaluation is also part of our Women's Hormone Panel package.\n\n**Treatment and follow-up**\nHypothyroidism is treated with levothyroxine, a daily pill taken on an empty stomach. When starting or changing the dose, TSH is checked after 6 to 8 weeks until the right dose is found; after that a check every 6 to 12 months is enough. For hyperthyroidism the doctor prescribes antithyroid medication and, when needed, refers you to an endocrinologist. You can fill your prescription at our pharmacy.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston"
    ],
    "keywordsEn": [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston"
    ],
    "features": [
      "Pruebas de función tiroidea (TSH, T4 libre, T3)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Sin ayuno, sin cita y sin orden médica",
      "Tratamiento y ajuste de dosis",
      "Seguimiento en español"
    ],
    "featuresEn": [
      "Thyroid function tests (TSH, free T4, T3)",
      "Diagnosis of hypo- and hyperthyroidism",
      "No fasting, walk-in, no doctor's order",
      "Treatment and dose adjustment",
      "Follow-up in Spanish"
    ],
    "relatedPosts": ["laboratorio-clinico-houston-analisis-sangre"],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana Cruz #3 identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y posibles desencadenantes\n- Tratamiento de alergias estacionales y respiratorias\n- Manejo de rinitis, estornudos y congestión\n- Atención de alergias en la piel (ronchas, comezón)\n- Recomendaciones para evitar las crisis\n\n**Cuándo consultar**\nEstornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Allergies can affect your breathing, your skin and your rest. At Clínica Hispana Cruz #3 we identify what triggers them and help you control them so you feel well again.\n\n**What's included?**\n- Evaluation of symptoms and possible triggers\n- Treatment of seasonal and respiratory allergies\n- Management of rhinitis, sneezing and congestion\n- Care for skin allergies (hives, itching)\n- Recommendations to avoid flare-ups\n\n**When to seek care**\nFrequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston"
    ],
    "keywordsEn": [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston"
    ],
    "features": [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español"
    ],
    "featuresEn": [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana Cruz #3 hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.\n\n**¿Qué incluye?**\n- Prueba rápida de influenza (flu)\n- Prueba de COVID-19\n- Evaluación de síntomas respiratorios\n- Tratamiento de gripe, tos, bronquitis e infecciones de garganta\n- Indicaciones de recuperación y cuidado\n\n**No dejes que avance**\nSi la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana Cruz #3 we run rapid tests and provide same-day treatment, no appointment needed.\n\n**What's included?**\n- Rapid influenza (flu) test\n- COVID-19 test\n- Respiratory symptom evaluation\n- Treatment of flu, cough, bronchitis and throat infections\n- Recovery and care instructions\n\n**Don't let it progress**\nIf the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston"
    ],
    "keywordsEn": [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston"
    ],
    "features": [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    "descriptionEn": "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    "longDescription": "Antes de inscribirse en la escuela o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana Cruz #3 lo hacemos de forma rápida y completa, con todos los formularios listos.\n\n**¿Qué incluye?**\n- Examen físico general\n- Revisión de signos vitales (peso, talla, presión)\n- Evaluación de visión y audición\n- Llenado de los formularios requeridos\n- Recomendaciones de salud\n\n**Para la escuela y el deporte**\nCumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Before enrolling in school or playing a sport, children and teens need a physical exam. At Clínica Hispana Cruz #3 we do it quickly and thoroughly, with all the forms ready.\n\n**What's included?**\n- General physical exam\n- Vital-signs check (weight, height, blood pressure)\n- Vision and hearing screening\n- Completion of required forms\n- Health recommendations\n\n**For school and sports**\nMeet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston"
    ],
    "keywordsEn": [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston"
    ],
    "features": [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español"
    ],
    "featuresEn": [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "title": "Ginecología en Español: Papanicolaou y Cultivos",
    "titleEn": "Gynecology in Spanish: Pap Smear & Cultures",
    "shortTitle": "Ginecología",
    "description": "Ginecología en español en Houston, TX: examen de papanicolaou, cultivos vaginales y tratamiento de infecciones. Sin cita, sin seguro y con precios accesibles.",
    "descriptionEn": "Spanish-speaking gynecology in Houston, TX: Pap smear, vaginal cultures and infection treatment. Walk in, no insurance needed, affordable pricing.",
    "longDescription": "Tu salud como mujer merece un espacio de confianza. En Clínica Hispana Cruz #3 ofrecemos atención ginecológica en español, con la privacidad y el respeto que mereces.\n\n**¿Qué incluye?**\n- Examen de papanicolaou y chequeo ginecológico\n- Cultivos vaginales para identificar infecciones\n- Tratamiento de infecciones vaginales (hongos, bacterias)\n- Evaluación de molestias y flujo anormal\n- Orden de mamografía y referencias cuando se necesita un especialista\n\n**Examen de papanicolaou en Houston**\nEl papanicolaou detecta células anormales en el cuello uterino antes de que se conviertan en cáncer. Se recomienda a partir de los 21 años: cada 3 años entre los 21 y los 29, y cada 3 a 5 años entre los 30 y los 65, según si se combina con la prueba de VPH. Si tuviste un resultado anormal antes, el médico puede indicarte controles más frecuentes.\n\n**¿Cómo es el examen y cómo prepararte?**\nDura pocos minutos y puede causar una molestia leve, no dolor. Conviene hacerlo fuera de los días de sangrado menstrual y evitar relaciones sexuales, duchas vaginales, óvulos o cremas durante las 48 horas previas. La muestra se procesa en laboratorio y el resultado tarda unos días; te avisamos cuando esté listo y te explicamos qué significa en español. Pregunta por nuestro paquete Chequeo Completo de Mujer, que incluye papanicolaou, consulta ginecológica y orden de mamografía.\n\n**No te quedes con la duda**\nComezón, ardor, flujo diferente o mal olor son señales de que algo necesita atención. Un cultivo permite un diagnóstico correcto y un tratamiento que sí resuelve.\n\n**Ginecología en una clínica hispana cerca de ti**\nSi buscas ginecología en Houston, en nuestra clínica hispana te atendemos cerca de ti: en español, sin cita previa y con precios accesibles, en el suroeste de Houston.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Your health as a woman deserves a space of trust. At Clínica Hispana Cruz #3 we offer gynecology care in Spanish, with the privacy and respect you deserve.\n\n**What's included?**\n- Pap smear and gynecological checkup\n- Vaginal cultures to identify infections\n- Treatment of vaginal infections (yeast, bacteria)\n- Evaluation of discomfort and abnormal discharge\n- Mammogram order and referrals when a specialist is needed\n\n**Pap smear in Houston**\nA Pap smear detects abnormal cells in the cervix before they turn into cancer. It is recommended from age 21: every 3 years between 21 and 29, and every 3 to 5 years between 30 and 65, depending on whether it is combined with HPV testing. If you had an abnormal result before, the doctor may recommend more frequent checks.\n\n**What the exam is like and how to prepare**\nIt takes a few minutes and may cause mild discomfort, not pain. It is best done outside your period, avoiding intercourse, douching, vaginal suppositories or creams for 48 hours beforehand. The sample is processed at a lab and the result takes a few days; we let you know when it is ready and explain what it means in Spanish. Ask about our Complete Women's Checkup package, which includes a Pap smear, gynecology consultation and mammogram order.\n\n**Don't stay in doubt**\nItching, burning, unusual discharge or odor are signs that something needs attention. A culture allows an accurate diagnosis and treatment that truly resolves it.\n\n**Gynecology at a Hispanic clinic near you**\nIf you are looking for gynecology care in Houston, our Hispanic clinic is near you: care in Spanish, walk-ins welcome and affordable pricing, on the southwest side of Houston.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "papanicolau houston español",
      "examen de papanicolau cerca de mi",
      "chequeo ginecologico cerca de mi",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "pap smear near me",
      "womens checkup houston",
      "vaginal culture houston",
      "vaginal infection treatment houston"
    ],
    "features": [
      "Examen de papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Orden de mamografía",
      "Atención privada en español"
    ],
    "featuresEn": [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Mammogram order",
      "Private care in Spanish"
    ],
    "relatedPosts": ["salud-mujer-houston-servicios-ginecologia"],
    "highlighted": true,
    "order": 6
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Prueba de Embarazo de Sangre y Orina",
    "titleEn": "Pregnancy Test: Blood & Urine",
    "shortTitle": "Prueba de Embarazo",
    "description": "Prueba de embarazo de sangre y orina en Houston, TX. Sin cita ni seguro, resultado confirmado por personal médico y orientación en español, a precios accesibles.",
    "descriptionEn": "Blood and urine pregnancy test in Houston, TX. Walk in, no insurance needed, result confirmed by medical staff with guidance in Spanish and affordable pricing.",
    "longDescription": "Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Cruz #3 realizamos pruebas de embarazo de orina y de sangre sin cita previa, y te orientamos sobre lo que sigue, en español y sin juicios.\n\n**¿Qué incluye?**\n- Prueba de embarazo de orina con resultado en minutos\n- Prueba de embarazo de sangre (hCG cuantitativa) cuando se necesita mayor precisión\n- Confirmación médica del resultado\n- Orientación sobre tus siguientes pasos\n- Información sobre control prenatal y referencias\n\n**Prueba de orina o prueba de sangre: ¿cuál me conviene?**\nLa prueba de orina detecta la hormona del embarazo (hCG) y es confiable desde el primer día de retraso menstrual; el resultado lo tienes en la misma visita. La prueba de sangre mide la cantidad exacta de hCG, puede detectar el embarazo unos días antes que la de orina y sirve para confirmar un resultado dudoso o dar seguimiento cuando el médico lo indica. Si no sabes cuál elegir, te ayudamos a decidir según tus fechas y tu situación.\n\n**¿Dónde hacerme una prueba de embarazo de sangre en Houston?**\nEn nuestra clínica tomamos la muestra en el momento, sin orden médica ni seguro. Te explicamos el resultado en español y, si es positivo, te orientamos sobre el inicio del control prenatal.\n\n**Con confianza y respeto**\nTe explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Cruz #3 we perform urine and blood pregnancy tests with no appointment needed, and guide you on what comes next, in Spanish and without judgment.\n\n**What's included?**\n- Urine pregnancy test with results in minutes\n- Blood pregnancy test (quantitative hCG) when more precision is needed\n- Medical confirmation of the result\n- Guidance on your next steps\n- Information on prenatal care and referrals\n\n**Urine test or blood test: which one do I need?**\nThe urine test detects the pregnancy hormone (hCG) and is reliable from the first day of a missed period; you get the result during the same visit. The blood test measures the exact hCG level, can detect pregnancy a few days earlier than a urine test, and is used to confirm an unclear result or follow up when the doctor recommends it. If you are not sure which one to choose, we help you decide based on your dates and situation.\n\n**Where to get a blood pregnancy test in Houston?**\nAt our clinic we draw the sample on the spot, with no doctor's order or insurance required. We explain the result in Spanish and, if it is positive, guide you on starting prenatal care.\n\n**With trust and respect**\nWe explain the result clearly and support you in whatever decision you make, always with respect and privacy.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo houston",
      "prueba de embarazo de sangre houston",
      "prueba de embarazo cerca de mi",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston"
    ],
    "keywordsEn": [
      "pregnancy test houston",
      "blood pregnancy test houston",
      "pregnancy test near me",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston"
    ],
    "features": [
      "Prueba de orina con resultado en minutos",
      "Prueba de sangre (hCG cuantitativa)",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español"
    ],
    "featuresEn": [
      "Urine test with results in minutes",
      "Blood test (quantitative hCG)",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Cruz #3 te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.\n\n**¿Qué incluye?**\n- Consulta de orientación personalizada\n- Información sobre los distintos métodos\n- Pastillas anticonceptivas e inyección\n- Inicio y seguimiento del método elegido\n- Resolución de dudas y efectos secundarios\n\n**Una decisión informada**\nCada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Deciding when and how to build your family is your right. At Clínica Hispana Cruz #3 we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.\n\n**What's included?**\n- Personalized guidance visit\n- Information about the different methods\n- Birth control pills and injection\n- Starting and following up on the chosen method\n- Answers to questions and side effects\n\n**An informed decision**\nEvery body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston"
    ],
    "keywordsEn": [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston"
    ],
    "features": [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español"
    ],
    "featuresEn": [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Cruz #3 lo hacemos de forma segura, rápida y con cuidado.\n\n**¿Qué incluye?**\n- Evaluación y localización del implante\n- Extracción ambulatoria con anestesia local\n- Indicaciones claras de cuidado posterior\n- Orientación sobre tus próximos pasos de planificación\n\n**Un procedimiento sencillo**\nEl retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Cruz #3 we do it safely, quickly and with care.\n\n**What's included?**\n- Evaluation and location of the implant\n- Outpatient removal with local anesthesia\n- Clear after-care instructions\n- Guidance on your next family-planning steps\n\n**A simple procedure**\nRemoval usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston"
    ],
    "keywordsEn": [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston"
    ],
    "features": [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "title": "Salud del Hombre: Examen de Próstata (PSA) y Testosterona",
    "titleEn": "Men's Health: Prostate (PSA) & Testosterone Exams",
    "shortTitle": "Salud del Hombre",
    "description": "Examen de próstata (PSA) y prueba de testosterona en Houston, TX. Chequeo del hombre en español, sin cita ni seguro y con precios accesibles.",
    "descriptionEn": "Prostate exam (PSA) and testosterone test in Houston, TX. Men's checkup in Spanish, walk in, no insurance needed, affordable pricing.",
    "longDescription": "La salud del hombre muchas veces se posterga. En Clínica Hispana Cruz #3 facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes, con resultados explicados en español.\n\n**¿Qué incluye?**\n- Examen de próstata mediante antígeno prostático (PSA) en sangre\n- Medición del nivel de testosterona\n- Chequeo general y de signos vitales\n- Evaluación de síntomas urinarios, de energía o sexuales\n- Referencia a especialista si se requiere\n\n**Examen de próstata en Houston, en español**\nEl examen de próstata más común es el PSA (antígeno prostático específico), un análisis de sangre sencillo que ayuda a vigilar la salud de la próstata y detectar cambios a tiempo. Se recomienda conversarlo con el médico a partir de los 50 años, o desde los 40 a 45 si tienes antecedentes familiares de cáncer de próstata. Si notas dificultad para orinar, chorro débil o te levantas varias veces por la noche, no lo dejes pasar: te atendemos sin cita y te explicamos el resultado en tu idioma.\n\n**Testosterona baja: cuándo revisarla**\nCansancio persistente, ánimo bajo, pérdida de masa muscular o cambios en el deseo o el rendimiento sexual pueden estar relacionados con testosterona baja. Se diagnostica con un análisis de sangre; si el nivel está bajo, el médico te explica las opciones de tratamiento y seguimiento.\n\n**Por qué es importante**\nEl PSA ayuda a vigilar la salud de la próstata y la testosterona influye en la energía, el ánimo y la salud general. Un control sencillo te da tranquilidad. Pregunta por nuestros paquetes de examen para hombres y chequeo de próstata, que combinan laboratorio y consulta médica a un precio accesible.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Men's health is often postponed. At Clínica Hispana Cruz #3 we make it easy to get the exams that help catch important changes early, with results explained in Spanish.\n\n**What's included?**\n- Prostate exam through a prostate-specific antigen (PSA) blood test\n- Testosterone level measurement\n- General checkup and vital signs\n- Evaluation of urinary, energy or sexual symptoms\n- Referral to a specialist if needed\n\n**Prostate exam in Houston, in Spanish**\nThe most common prostate exam is the PSA (prostate-specific antigen), a simple blood test that helps monitor prostate health and catch changes early. It is recommended to discuss it with your doctor from age 50, or from 40 to 45 if you have a family history of prostate cancer. If you notice difficulty urinating, a weak stream or getting up several times at night, don't put it off: we see you walk-in and explain the result in your language.\n\n**Low testosterone: when to check it**\nPersistent fatigue, low mood, loss of muscle mass or changes in sexual desire or performance may be related to low testosterone. It is diagnosed with a blood test; if the level is low, the doctor explains treatment and follow-up options.\n\n**Why it matters**\nPSA helps monitor prostate health, and testosterone influences energy, mood and overall health. A simple check gives you peace of mind. Ask about our men's exam and prostate checkup packages, which combine lab work and a medical consultation at an affordable price.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre houston",
      "examen de prostata houston español",
      "examen de prostata cerca de mi",
      "prueba psa houston",
      "examen de prostata houston",
      "examen de testosterona houston",
      "testosterona baja houston",
      "chequeo del hombre houston"
    ],
    "keywordsEn": [
      "mens health houston",
      "prostate exam houston",
      "prostate exam near me",
      "psa test houston",
      "testosterone test houston",
      "low testosterone houston",
      "mens checkup houston"
    ],
    "features": [
      "Examen de próstata (PSA) en sangre",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Sin cita ni seguro",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate exam (PSA) blood test",
      "Testosterone level",
      "General men's checkup",
      "No appointment or insurance needed",
      "Results explained in Spanish"
    ],
    "relatedPosts": ["salud-hombre-houston-chequeos-preventivos"],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "title": "Análisis y Exámenes de Sangre: Laboratorio en Español",
    "titleEn": "Blood Tests & Lab Work: Spanish-Speaking Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Análisis de sangre en Houston, TX sin orden médica ni seguro: biometría, glucosa, colesterol, tiroides, A1C y más. Laboratorio en español, sin cita y con precios accesibles.",
    "descriptionEn": "Blood tests in Houston, TX with no doctor's order or insurance: CBC, glucose, cholesterol, thyroid, A1C and more. Spanish-speaking lab, walk-ins welcome, affordable pricing.",
    "longDescription": "Un buen diagnóstico empieza con un buen laboratorio. En Clínica Hispana Cruz #3 tomamos tu muestra de sangre en el momento, sin cita ni orden médica, y te explicamos los resultados en español, sin tecnicismos.\n\n**¿Qué exámenes de sangre hacemos?**\n- Biometría hemática completa (CBC): glóbulos rojos, blancos, hemoglobina y plaquetas\n- Química sanguínea y panel metabólico: glucosa, función del riñón y del hígado, electrolitos\n- Perfil de lípidos: colesterol total, HDL, LDL y triglicéridos\n- Hemoglobina A1C para detectar o controlar la diabetes\n- Pruebas de tiroides (TSH)\n- Vitamina B12 y otros niveles de vitaminas\n- PSA y testosterona para la salud del hombre\n- Prueba de embarazo en sangre\n- Panel de enfermedades de transmisión sexual (ETS)\n- Paneles para exámenes de trabajo, escuela o inmigración\n\n**Análisis de sangre sin orden médica**\nNo necesitas receta de otro doctor ni seguro médico. Dinos qué examen buscas o cuéntanos tus síntomas y nuestro médico te indica el panel adecuado. También puedes traer la orden de tu médico si ya la tienes.\n\n**¿Cuánto tardan los resultados?**\nVaría según el examen: algunos resultados están listos el mismo día y otros tardan unos días porque se procesan en un laboratorio de referencia. Al tomar la muestra te decimos el plazo de tu examen y, cuando esté listo, te explicamos qué significa cada valor en español.\n\n**¿Debo venir en ayunas?**\nPara la glucosa en ayunas y el perfil de lípidos se recomiendan 8 a 12 horas sin comer; puedes tomar agua. La mayoría de los demás exámenes no requieren ayuno. Si tienes dudas, llámanos antes de venir y te decimos cómo prepararte.\n\n**Para qué sirven**\nLos análisis ayudan a detectar presión alta, diabetes o colesterol alto antes de que den síntomas, dar seguimiento a una condición crónica o completar un examen de trabajo, escuela o inmigración. Pregunta por nuestros paquetes de chequeo general, que combinan examen de sangre y consulta médica a un precio accesible.\n\n**Análisis de sangre en un laboratorio hispano cerca de ti**\n¿Buscas un laboratorio de sangre en Houston que hable español? En nuestra clínica hispana te tomamos la muestra sin cita previa, de lunes a domingo, con precios accesibles y resultados explicados en tu idioma.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "A good diagnosis starts with a good lab. At Clínica Hispana Cruz #3 we draw your blood on the spot, with no appointment or doctor's order, and explain your results in Spanish, without the jargon.\n\n**Which blood tests do we offer?**\n- Complete blood count (CBC): red and white cells, hemoglobin and platelets\n- Blood chemistry and metabolic panel: glucose, kidney and liver function, electrolytes\n- Lipid panel: total cholesterol, HDL, LDL and triglycerides\n- Hemoglobin A1C to detect or monitor diabetes\n- Thyroid tests (TSH)\n- Vitamin B12 and other vitamin levels\n- PSA and testosterone for men's health\n- Blood pregnancy test\n- Sexually transmitted disease (STD) panel\n- Panels for work, school or immigration exams\n\n**Blood work without a doctor's order**\nYou don't need a prescription from another doctor or health insurance. Tell us which test you need or describe your symptoms and our physician will recommend the right panel. You can also bring your doctor's order if you already have one.\n\n**How long do results take?**\nIt depends on the test: some results are ready the same day, while others take a few days because they are processed at a reference lab. When we draw your sample we tell you the turnaround for your test and, once it is ready, we explain what each value means in Spanish.\n\n**Do I need to fast?**\nFor fasting glucose and the lipid panel we recommend 8 to 12 hours without food; water is fine. Most other tests don't require fasting. If in doubt, call us before you come and we'll tell you how to prepare.\n\n**Why they matter**\nBlood tests help detect high blood pressure, diabetes or high cholesterol before symptoms appear, follow up on a chronic condition or complete a work, school or immigration exam. Ask about our general checkup packages, which combine blood work and a medical consultation at an affordable price.\n\n**Blood work at a Spanish-speaking lab near you**\nLooking for a blood lab in Houston that speaks Spanish? At our Hispanic clinic we draw your sample walk-in, Monday through Sunday, at affordable prices, with results explained in your language.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre houston",
      "examenes de sangre cerca de mi",
      "analisis de sangre houston",
      "analisis de sangre cerca de mi",
      "analisis de sangre sin orden medica",
      "laboratorio de sangre houston español",
      "examenes de laboratorio houston",
      "laboratorio cerca de mi houston"
    ],
    "keywordsEn": [
      "blood test houston",
      "blood test near me",
      "blood work houston",
      "blood work without doctor order houston",
      "spanish speaking lab houston",
      "lab near me houston",
      "clinical lab houston"
    ],
    "features": [
      "Sin orden médica ni seguro",
      "Biometría, glucosa, colesterol y tiroides",
      "A1C, vitamina B12, PSA y más",
      "Muestra tomada en el momento, sin cita",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "No doctor's order or insurance needed",
      "CBC, glucose, cholesterol and thyroid",
      "A1C, vitamin B12, PSA and more",
      "Sample drawn on the spot, walk-in",
      "Results explained in Spanish"
    ],
    "relatedPosts": [
      "laboratorio-clinico-houston-analisis-sangre",
      "vitamina-b12-beneficios-inyecciones-houston"
    ],
    "highlighted": true,
    "order": 11
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles.",
    "descriptionEn": "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    "longDescription": "El examen de orina ayuda a detectar infecciones urinarias y otras condiciones. En Clínica Hispana Cruz #3 te hacemos la prueba y, si hay infección, empezamos el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Examen general de orina (urianálisis)\n- Evaluación de síntomas\n- Diagnóstico de infección urinaria\n- Tratamiento adecuado el mismo día\n- Indicaciones para evitar que regrese\n\n**Síntomas frecuentes**\nArdor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. No esperes: una infección sin tratar puede llegar a los riñones.\n\n**Tratamiento de infecciones urinarias en una clínica hispana cerca de ti**\nSomos una clínica hispana cerca de ti en Houston: te hacemos el examen de orina y, si hay infección, sales con tu tratamiento el mismo día, sin cita previa y en español.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "A urine test helps detect urinary infections and other conditions. At Clínica Hispana Cruz #3 we run the test and, if there's an infection, we start treatment the same day.\n\n**What's included?**\n- General urinalysis\n- Symptom evaluation\n- Diagnosis of urinary infection\n- Appropriate same-day treatment\n- Tips to prevent it from coming back\n\n**Common symptoms**\nBurning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdomen pain. Don't wait: an untreated infection can reach the kidneys.\n\n**UTI treatment at a Hispanic clinic near you**\nWe are a Hispanic clinic near you in Houston: we run your urine test and, if there is an infection, you leave with treatment the same day, no appointment needed and in Spanish.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston"
    ],
    "keywordsEn": [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Cruz #3 realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.\n\n**¿Qué incluye?**\n- Análisis general de heces fecales\n- Detección de parásitos\n- Identificación de infecciones intestinales\n- Evaluación de sangre oculta cuando se requiere\n- Resultados explicados en español\n\n**Cuándo es útil**\nDiarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Cruz #3 we perform stool tests to find the source and give you the right treatment.\n\n**What's included?**\n- General stool analysis\n- Parasite detection\n- Identification of intestinal infections\n- Occult-blood evaluation when needed\n- Results explained in Spanish\n\n**When it helps**\nPersistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston"
    ],
    "keywordsEn": [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston"
    ],
    "features": [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Cruz #3 hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Prueba rápida de estreptococo (hisopado de garganta)\n- Resultado en pocos minutos\n- Evaluación del dolor de garganta\n- Tratamiento adecuado si el resultado es positivo\n- Indicaciones de recuperación\n\n**Cuándo hacerla**\nDolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Cruz #3 we run the rapid strep test and give you the result and treatment the same day.\n\n**What's included?**\n- Rapid strep test (throat swab)\n- Result in minutes\n- Sore-throat evaluation\n- Appropriate treatment if the result is positive\n- Recovery instructions\n\n**When to get it**\nSevere sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston"
    ],
    "keywordsEn": [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston"
    ],
    "features": [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Cruz #3 la aplicamos y leemos el resultado, con todo explicado en español.\n\n**¿Qué incluye?**\n- Prueba cutánea de tuberculosis (PPD)\n- Cita de lectura del resultado (48–72 horas después)\n- Documentación del resultado para tu trámite\n- Orientación si el resultado requiere seguimiento\n\n**Para qué la piden**\nEmpleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Cruz #3 we administer it and read the result, with everything explained in Spanish.\n\n**What's included?**\n- Tuberculosis skin test (PPD)\n- Result-reading appointment (48–72 hours later)\n- Documentation of the result for your paperwork\n- Guidance if the result needs follow-up\n\n**Why it's required**\nHealthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston"
    ],
    "keywordsEn": [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston"
    ],
    "features": [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español"
    ],
    "featuresEn": [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Cruz #3 ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y factores de riesgo\n- Pruebas de las infecciones más comunes\n- Análisis de laboratorio\n- Tratamiento y orientación si el resultado es positivo\n- Total confidencialidad\n\n**Cuándo hacerte la prueba**\nSi tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Taking care of your sexual health is an act of responsibility. At Clínica Hispana Cruz #3 we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.\n\n**What's included?**\n- Symptom and risk-factor assessment\n- Testing for the most common infections\n- Laboratory analysis\n- Treatment and guidance if the result is positive\n- Complete confidentiality\n\n**When to get tested**\nIf you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston"
    ],
    "keywordsEn": [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston"
    ],
    "features": [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español"
    ],
    "featuresEn": [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Cruz #3 la realizamos de forma rápida y te entregamos la documentación que necesitas.\n\n**¿Qué incluye?**\n- Prueba de detección de drogas\n- Prueba de alcohol\n- Proceso ágil y discreto\n- Documentación del resultado para tu empleador o trámite\n\n**Para trabajo y trámites**\nAtendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and processes require an alcohol and drug test. At Clínica Hispana Cruz #3 we perform it quickly and give you the documentation you need.\n\n**What's included?**\n- Drug screening test\n- Alcohol test\n- Quick, discreet process\n- Result documentation for your employer or paperwork\n\n**For work and paperwork**\nWe handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston"
    ],
    "keywordsEn": [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston"
    ],
    "features": [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado"
    ],
    "featuresEn": [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG): Rápido, Sin Dolor y Sin Cita",
    "titleEn": "Electrocardiogram (EKG): Fast, Painless and Walk-In",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma (EKG) en Houston, TX sin cita: estudio de 12 derivaciones en minutos, sin dolor, con lectura médica el mismo día y explicación en español. Precios accesibles.",
    "descriptionEn": "Electrocardiogram (EKG) in Houston, TX, walk-in: 12-lead test in minutes, painless, read by a physician the same day and explained in Spanish. Affordable pricing.",
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Cruz #3 lo realizamos sin cita, como parte de chequeos y exámenes médicos, y el médico te explica el resultado en la misma visita.\n\n**¿Qué incluye?**\n- Electrocardiograma de 12 derivaciones en reposo\n- Estudio del ritmo y la actividad eléctrica del corazón\n- Interpretación por personal médico el mismo día\n- Útil para chequeos, exámenes de trabajo, deporte o antes de una cirugía\n- Resultados explicados en español\n\n**¿Cómo se hace y cuánto dura?**\nTe recuestas en la camilla, se colocan electrodos adhesivos en el pecho, los brazos y las piernas, y el equipo registra la señal del corazón durante unos segundos. Toda la visita toma alrededor de 10 a 15 minutos. No duele, no usa radiación y no requiere ayuno ni preparación: solo hay que descubrir el pecho para colocar los electrodos.\n\n**¿Para qué sirve el electrocardiograma?**\nPermite detectar alteraciones del ritmo (arritmias), signos de un infarto previo o en curso, crecimiento del corazón por presión alta y cambios asociados a problemas de electrolitos o de tiroides. También es parte habitual de un chequeo general en adultos con factores de riesgo.\n\n**¿Cuándo conviene hacerse uno?**\n- Si tienes palpitaciones, dolor u opresión en el pecho, falta de aire, mareos o desmayos\n- Si vives con presión alta, diabetes o colesterol elevado\n- A partir de los 40 años como parte de un chequeo preventivo\n- Antes de iniciar ejercicio intenso o de una cirugía\nAnte un dolor de pecho intenso o falta de aire súbita, llama al 911 o acude a la sala de emergencias más cercana.\n\n**Resultados y siguientes pasos**\nEl médico revisa el trazado en la misma visita y te explica qué significa. Si aparece algo que requiere estudios adicionales, te orientamos y te referimos a cardiología. El electrocardiograma se puede combinar con análisis de sangre para completar un chequeo del corazón.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "An electrocardiogram (EKG) records the electrical activity of your heart in a few minutes without any discomfort. At Clínica Hispana Cruz #3 we perform it walk-in, as part of checkups and medical exams, and the doctor explains the result during the same visit.\n\n**What's included?**\n- Resting 12-lead electrocardiogram\n- Study of the heart's rhythm and electrical activity\n- Same-day interpretation by medical staff\n- Useful for checkups, work or sports exams, or before surgery\n- Results explained in Spanish\n\n**How it is done and how long it takes**\nYou lie down, adhesive electrodes are placed on your chest, arms and legs, and the machine records your heart's signal for a few seconds. The whole visit takes about 10 to 15 minutes. It doesn't hurt, uses no radiation and requires no fasting or preparation: you only need to uncover your chest so the electrodes can be placed.\n\n**What is an EKG for?**\nIt detects rhythm disturbances (arrhythmias), signs of a previous or ongoing heart attack, heart enlargement from high blood pressure and changes linked to electrolyte or thyroid problems. It is also a routine part of a general checkup in adults with risk factors.\n\n**When should you get one?**\n- If you have palpitations, chest pain or pressure, shortness of breath, dizziness or fainting\n- If you live with high blood pressure, diabetes or high cholesterol\n- From age 40 as part of a preventive checkup\n- Before starting intense exercise or having surgery\nFor severe chest pain or sudden shortness of breath, call 911 or go to the nearest emergency room.\n\n**Results and next steps**\nThe doctor reviews the tracing during the same visit and explains what it means. If something needs further testing, we guide you and refer you to cardiology. The EKG can be combined with blood tests to complete a heart checkup.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston"
    ],
    "keywordsEn": [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish"
    ],
    "features": [
      "Electrocardiograma de 12 derivaciones",
      "Estudio de 10 a 15 minutos, sin dolor",
      "Lectura médica el mismo día",
      "Sin ayuno, sin preparación y sin cita",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "12-lead electrocardiogram",
      "10 to 15 minute test, painless",
      "Same-day physician reading",
      "No fasting, no preparation, walk-in",
      "Results explained in Spanish"
    ],
    "relatedPosts": ["salud-hombre-houston-chequeos-preventivos"],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Cruz #3 contamos con equipo moderno y personal que te explica todo en español.\n\n**¿Qué incluye?**\n- Ultrasonido abdominal (hígado, vesícula, riñones)\n- Ultrasonido pélvico\n- Ultrasonido de embarazo (control y seguimiento)\n- Evaluación de tiroides y tejidos blandos\n\n**Sin radiación y sin dolor**\nA diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Cruz #3 we have modern equipment and staff who explain everything in Spanish.\n\n**What's included?**\n- Abdominal ultrasound (liver, gallbladder, kidneys)\n- Pelvic ultrasound\n- Pregnancy ultrasound (monitoring and follow-up)\n- Thyroid and soft-tissue evaluation\n\n**No radiation, no pain**\nUnlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston"
    ],
    "keywordsEn": [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston"
    ],
    "features": [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español"
    ],
    "featuresEn": [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "title": "Examen Físico DOT (Examen Médico CDL)",
    "titleEn": "DOT Physical Exam (CDL Medical Exam)",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT y examen médico para licencia CDL en Houston, TX. Sin cita, 100% en español y certificado el mismo día. Precios accesibles para camioneros.",
    "descriptionEn": "DOT physical and CDL medical exam in Houston, TX. Walk in, 100% in Spanish, same-day certificate and affordable pricing for truck drivers.",
    "longDescription": "Si manejas vehículos comerciales necesitas tu examen físico DOT vigente. En Clínica Hispana Cruz #3 lo realizamos sin cita previa, en español, y te entregamos tu certificado médico el mismo día.\n\n**¿Qué incluye?**\n- Revisión de visión y audición\n- Toma de presión arterial\n- Análisis de orina (glucosa y proteínas, no es prueba de drogas)\n- Examen físico requerido por el DOT\n- Revisión de historial médico\n- Certificado médico DOT y tarjeta de conductor el mismo día\n\n**Para conductores comerciales**\nEl examen es obligatorio para obtener o renovar tu licencia CDL, ya sea que manejes camión, autobús o transportes materiales peligrosos. Te explicamos cada paso en español y agilizamos el proceso para que vuelvas pronto a la carretera.\n\n**Examen médico DOT cerca de ti en Houston**\nMuchos conductores lo buscan como examen médico DOT o examen físico DOT: es el mismo examen que exige el Departamento de Transporte para conductores de vehículos comerciales. Lo realizamos de lunes a domingo, sin cita, en el suroeste de Houston y con estacionamiento para vehículos grandes.\n\n**¿Qué llevar el día del examen?**\n- Identificación con foto\n- Lista de los medicamentos que tomas\n- Lentes o audífonos si los usas\n- Si tienes diabetes, presión alta o apnea del sueño, documentos o resultados recientes de tu tratamiento\n\n**Duración y vigencia del certificado**\nEl examen toma entre 30 y 45 minutos. El certificado estándar es válido por 2 años; si tienes presión alta controlada o diabetes sin insulina, el médico puede emitirlo por 1 año. Te recomendamos renovarlo al menos 2 semanas antes del vencimiento para no quedarte sin trabajar. Si tu empleador también pide examen de alcohol y drogas, lo hacemos en la misma visita.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "If you drive commercial vehicles you need a current DOT physical exam. At Clínica Hispana Cruz #3 we perform it with no appointment, in Spanish, and hand you your medical certificate the same day.\n\n**What's included?**\n- Vision and hearing screening\n- Blood-pressure check\n- Urinalysis (glucose and protein, not a drug test)\n- DOT-required physical exam\n- Medical-history review\n- Same-day DOT medical certificate and driver medical card\n\n**For commercial drivers**\nThe exam is required to obtain or renew your CDL license, whether you drive a truck, a bus or haul hazardous materials. We explain every step in Spanish and speed up the process so you get back on the road soon.\n\n**DOT medical exam near you in Houston**\nMany drivers search for a DOT medical exam or a DOT physical: it is the same exam the Department of Transportation requires for commercial vehicle drivers. We do it Monday through Sunday, walk-in, in southwest Houston, with parking for large vehicles.\n\n**What to bring on exam day**\n- Photo ID\n- A list of the medications you take\n- Glasses or hearing aids if you use them\n- If you have diabetes, high blood pressure or sleep apnea, recent documents or results from your treatment\n\n**How long it takes and how long the certificate lasts**\nThe exam takes 30 to 45 minutes. A standard certificate is valid for 2 years; if you have controlled high blood pressure or diabetes without insulin, the doctor may issue it for 1 year. We recommend renewing at least 2 weeks before it expires so you don't lose work days. If your employer also requires a drug and alcohol test, we can do it in the same visit.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot houston",
      "examen medico dot houston",
      "examen fisico dot cerca de mi",
      "examenes medicos dot cerca de mi",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español"
    ],
    "keywordsEn": [
      "dot physical houston",
      "dot physical near me",
      "dot exam houston",
      "cdl physical houston",
      "cdl medical exam houston",
      "dot medical exam houston"
    ],
    "features": [
      "Certificado DOT el mismo día",
      "Para licencia CDL nueva o renovación",
      "Examen de 30 a 45 minutos",
      "Sin cita previa",
      "Atención en español"
    ],
    "featuresEn": [
      "Same-day DOT certificate",
      "For new or renewal CDL license",
      "30 to 45 minute exam",
      "No appointment needed",
      "Care in Spanish"
    ],
    "relatedPosts": ["examen-dot-cdl-camioneros-houston"],
    "highlighted": true,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "title": "Examen Médico de Inmigración I-693 con Médico Autorizado por USCIS",
    "titleEn": "I-693 Immigration Medical Exam with a USCIS Civil Surgeon",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS (civil surgeon). Examen, laboratorio y vacunas en el mismo lugar, formulario sellado, todo en español.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-designated civil surgeon. Exam, lab work and vaccines in one place, sealed form, all in Spanish.",
    "longDescription": "El examen médico de inmigración (Formulario I-693) es un requisito para el ajuste de estatus y la residencia permanente. En Clínica Hispana Cruz #3 lo realizamos con un médico autorizado por USCIS (civil surgeon), hacemos el laboratorio y las vacunas en el mismo lugar y te entregamos el formulario sellado listo para enviar, con todo el proceso explicado en español.\n\n**¿Qué incluye?**\n- Revisión de historial médico y de vacunas\n- Examen físico completo, con visión, audición y evaluación general\n- Pruebas de laboratorio requeridas por USCIS, incluidas la de tuberculosis y la de sífilis\n- Aplicación de las vacunas que te falten según tu registro\n- Formulario I-693 completado, firmado y sellado en sobre oficial\n\n**¿Cómo es la visita y cuánto dura?**\nAtendemos sin cita. La visita completa toma entre 1 y 2 horas: revisión de documentos, examen físico, toma de muestras y vacunas. Si te faltan vacunas de varias dosis, puede hacer falta una segunda visita para completar la serie. Si tu entrevista con USCIS está cerca, llámanos para coordinar y asegurar el turno con el médico autorizado.\n\n**¿Qué traer?**\n- Pasaporte o identificación con foto\n- Cartilla o registro de vacunas, si lo tienes: evita repetir vacunas que ya tienes\n- Resultados de estudios o documentos médicos relevantes, incluidos los de condiciones crónicas\n- Formularios de USCIS relacionados con tu caso\n- Lentes o audífonos si los usas\n\n**Entrega y vigencia del formulario**\nCuando el laboratorio y las vacunas están completos, el médico firma el I-693 y lo entrega en un sobre sellado. No lo abras: USCIS rechaza los sobres abiertos o dañados. La vigencia del formulario depende de las reglas de USCIS vigentes en el momento; te las explicamos en tu visita y te recomendamos no demorar el envío.\n\n**Costo**\nManejamos un precio de pago directo que incluye el examen, el formulario y la asesoría en español. Las vacunas se cobran por separado según las que necesites. Llámanos para conocer el precio actual antes de tu visita.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "The immigration medical exam (Form I-693) is required for adjustment of status and permanent residence. At Clínica Hispana Cruz #3 it is performed by a USCIS-designated civil surgeon, we do the lab work and vaccines in the same place, and we hand you the sealed form ready to submit, with the whole process explained in Spanish.\n\n**What's included?**\n- Review of medical and vaccination history\n- Complete physical exam, including vision, hearing and general evaluation\n- Lab tests required by USCIS, including tuberculosis and syphilis\n- Any vaccines you are missing according to your records\n- Form I-693 completed, signed and sealed in the official envelope\n\n**What is the visit like and how long does it take?**\nWe see you walk-in. The full visit takes 1 to 2 hours: document review, physical exam, sample collection and vaccines. If you are missing multi-dose vaccines, a second visit may be needed to complete the series. If your USCIS interview is coming up soon, call us to coordinate and secure your slot with the civil surgeon.\n\n**What to bring**\n- Passport or photo ID\n- Vaccination card or records, if you have them: this avoids repeating vaccines you already had\n- Test results or relevant medical documents, including those for chronic conditions\n- USCIS forms related to your case\n- Glasses or hearing aids if you use them\n\n**Delivery and validity of the form**\nOnce lab work and vaccines are complete, the physician signs the I-693 and hands it to you in a sealed envelope. Do not open it: USCIS rejects opened or damaged envelopes. The form's validity depends on the USCIS rules in force at the time; we explain them at your visit and recommend not delaying your filing.\n\n**Cost**\nWe offer a self-pay price that includes the exam, the form and guidance in Spanish. Vaccines are charged separately depending on which ones you need. Call us for the current price before your visit.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston"
    ],
    "keywordsEn": [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston"
    ],
    "features": [
      "Médico autorizado por USCIS (civil surgeon)",
      "Examen, laboratorio y vacunas en el mismo lugar",
      "Visita de 1 a 2 horas, sin cita",
      "Formulario I-693 firmado y sellado",
      "Proceso explicado en español"
    ],
    "featuresEn": [
      "USCIS-designated civil surgeon",
      "Exam, lab work and vaccines in one place",
      "1 to 2 hour visit, walk-in",
      "Form I-693 signed and sealed",
      "Process explained in Spanish"
    ],
    "relatedPosts": ["guia-examen-medico-inmigracion-i693-houston"],
    "highlighted": false,
    "order": 21
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana Cruz #3 aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.\n\n**¿Qué incluye?**\n- Vacuna anual contra la influenza (flu)\n- Toxoide tetánico (refuerzo del tétanos)\n- Aplicación por personal médico\n- Orientación sobre cuándo aplicar refuerzos\n- Atención en español\n\n**Por qué vacunarte**\nLa vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Vaccines are one of the simplest ways to protect your health. At Clínica Hispana Cruz #3 we administer the influenza vaccine and tetanus toxoid safely and quickly.\n\n**What's included?**\n- Annual influenza (flu) vaccine\n- Tetanus toxoid (tetanus booster)\n- Administered by medical staff\n- Guidance on when boosters are due\n- Care in Spanish\n\n**Why get vaccinated**\nThe flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston"
    ],
    "keywordsEn": [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston"
    ],
    "features": [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados (Terapia IV) e Inyección de Vitamina B12",
    "titleEn": "Vitamin IV Therapy and Vitamin B12 Injections",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) e inyecciones de vitamina B12 en Houston, TX, aplicados por personal médico, sin cita y sin seguro. Hidratación, vitaminas y minerales en español.",
    "descriptionEn": "Vitamin IV therapy and vitamin B12 injections in Houston, TX, given by medical staff, walk-in and no insurance needed. Hydration, vitamins and minerals, in Spanish.",
    "longDescription": "Los sueros vitaminados aportan hidratación, vitaminas y minerales directamente a tu organismo. En Clínica Hispana Cruz #3 los aplicamos con personal médico, sin cita, en un ambiente cómodo y seguro, y también ofrecemos inyecciones de vitamina B12.\n\n**¿Qué incluye?**\n- Evaluación breve para elegir el suero adecuado\n- Hidratación intravenosa\n- Vitaminas y minerales según tu necesidad\n- Aplicación y monitoreo por personal médico\n- Inyección de vitamina B12 disponible\n- Atención en español\n\n**¿Qué es un suero vitaminado?**\nEs una solución de hidratación que se administra por vía intravenosa con vitaminas y minerales añadidos. Al entrar directamente al torrente sanguíneo no pasa por la digestión, por lo que el cuerpo lo aprovecha de inmediato. Es un apoyo, no un sustituto de una buena alimentación ni de un tratamiento médico.\n\n**¿Cuándo pueden ayudar?**\n- Cansancio o falta de energía después de periodos de mucho trabajo o estrés\n- Deshidratación por calor, ejercicio intenso, vómito o diarrea\n- Recuperación después de una gripe o un malestar\n- Cuando la alimentación no alcanza a cubrir las vitaminas que necesitas\n- Deficiencia de vitamina B12 detectada en un análisis de sangre\n\n**¿Cómo es la aplicación?**\nPrimero el personal médico revisa tu presión, tus antecedentes y posibles alergias para confirmar que el suero es adecuado para ti. Luego se canaliza una vena en el brazo y el suero pasa lentamente, por lo general entre 30 y 60 minutos, mientras descansas. Al terminar puedes volver a tus actividades normales. No necesitas ayuno ni preparación.\n\n**Inyección de vitamina B12**\nSi el cansancio viene de una deficiencia de B12, la inyección intramuscular es la forma más rápida de corregirla. Podemos medir tu nivel con un análisis de sangre antes de aplicarla; el paquete General de Sangre + Vitamina B12 combina ambas cosas.\n\n**Seguridad**\nLos sueros los aplica personal médico y se ajustan a tu evaluación. Si tienes enfermedad del riñón o del corazón, estás embarazada o tomas medicamentos, avísanos: el médico decide si es adecuado para ti.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Vitamin IV drips deliver hydration, vitamins and minerals directly into your body. At Clínica Hispana Cruz #3 they are given by medical staff, walk-in, in a comfortable and safe setting, and we also offer vitamin B12 injections.\n\n**What's included?**\n- Brief evaluation to choose the right drip\n- Intravenous hydration\n- Vitamins and minerals according to your needs\n- Administration and monitoring by medical staff\n- Vitamin B12 injection available\n- Care in Spanish\n\n**What is a vitamin IV drip?**\nIt is a hydration solution given through a vein with added vitamins and minerals. Because it goes straight into the bloodstream it bypasses digestion, so the body uses it right away. It is a support, not a replacement for good nutrition or medical treatment.\n\n**When can it help?**\n- Fatigue or low energy after periods of heavy work or stress\n- Dehydration from heat, intense exercise, vomiting or diarrhea\n- Recovery after the flu or an illness\n- When your diet doesn't cover the vitamins you need\n- Vitamin B12 deficiency found on a blood test\n\n**What is the session like?**\nFirst, medical staff check your blood pressure, history and possible allergies to confirm the drip is right for you. Then a vein in your arm is accessed and the drip runs slowly, usually 30 to 60 minutes, while you rest. Afterwards you can return to your normal activities. No fasting or preparation is needed.\n\n**Vitamin B12 injection**\nIf your fatigue comes from a B12 deficiency, an intramuscular injection is the fastest way to correct it. We can measure your level with a blood test before giving it; our Blood Panel + Vitamin B12 package combines both.\n\n**Safety**\nDrips are given by medical staff and tailored to your evaluation. If you have kidney or heart disease, are pregnant or take medication, let us know: the doctor decides whether it is appropriate for you.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston"
    ],
    "features": [
      "Hidratación intravenosa con vitaminas y minerales",
      "Aplicación de 30 a 60 minutos por personal médico",
      "Inyección de vitamina B12",
      "Sin cita, sin ayuno y sin seguro",
      "Atención en español"
    ],
    "featuresEn": [
      "IV hydration with vitamins and minerals",
      "30 to 60 minute session given by medical staff",
      "Vitamin B12 injection",
      "Walk-in, no fasting, no insurance",
      "Care in Spanish"
    ],
    "relatedPosts": ["vitamina-b12-beneficios-inyecciones-houston"],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Cruz #3 cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.\n\n**¿Qué incluye?**\n- Evaluación y limpieza de la herida\n- Cierre con suturas (puntos)\n- Aplicación de anestesia local\n- Indicaciones de cuidado y signos de alarma\n- Retiro de puntos cuando corresponde\n\n**Cuándo acudir**\nCortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Cruz #3 we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.\n\n**What's included?**\n- Wound evaluation and cleaning\n- Closure with sutures (stitches)\n- Local anesthesia\n- Care instructions and warning signs\n- Suture removal when appropriate\n\n**When to come in**\nDeep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston"
    ],
    "keywordsEn": [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston"
    ],
    "features": [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Cruz #3 limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.\n\n**¿Qué incluye?**\n- Limpieza y desinfección de la herida\n- Aplicación de apósitos y vendajes\n- Cambio periódico de vendajes\n- Vigilancia de signos de infección\n- Indicaciones de cuidado en casa\n\n**Para todo tipo de heridas**\nHeridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Cruz #3 we clean, treat and dress your wounds, and follow you until they heal.\n\n**What's included?**\n- Wound cleaning and disinfection\n- Application of dressings and bandages\n- Periodic dressing changes\n- Monitoring for signs of infection\n- Home-care instructions\n\n**For all kinds of wounds**\nPost-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston"
    ],
    "keywordsEn": [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston"
    ],
    "features": [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español"
    ],
    "featuresEn": [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Cruz #3 realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.\n\n**¿Qué incluye?**\n- Evaluación del lunar, quiste o lesión\n- Procedimiento ambulatorio con anestesia local\n- Extracción de lunares, quistes y lipomas\n- Indicaciones claras de cuidado posterior\n- Retiro de puntos cuando corresponde\n\n**Rápido y seguro**\nLa mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Cruz #3 we perform minor outpatient surgery with local anesthesia, in a single day.\n\n**What's included?**\n- Evaluation of the mole, cyst or lesion\n- Outpatient procedure with local anesthesia\n- Removal of moles, cysts and lipomas\n- Clear after-care instructions\n- Suture removal when appropriate\n\n**Fast and safe**\nMost of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston"
    ],
    "keywordsEn": [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston"
    ],
    "features": [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Cruz #3 lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.\n\n**¿Qué incluye?**\n- Evaluación del absceso o infección de piel\n- Drenaje con anestesia local\n- Limpieza y desinfección de la zona\n- Tratamiento de la infección cuando se requiere\n- Indicaciones de cuidado y seguimiento\n\n**No lo dejes pasar**\nUn bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Cruz #3 we treat it safely to relieve the discomfort and prevent the infection from spreading.\n\n**What's included?**\n- Evaluation of the abscess or skin infection\n- Drainage with local anesthesia\n- Cleaning and disinfection of the area\n- Treatment of the infection when needed\n- Care and follow-up instructions\n\n**Don't let it go**\nA red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston"
    ],
    "keywordsEn": [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston"
    ],
    "features": [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Cruz #3 la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.\n\n**¿Qué incluye?**\n- Evaluación de la uña y el dedo\n- Procedimiento con anestesia local\n- Extracción de la porción encarnada de la uña\n- Tratamiento de la infección si la hay\n- Indicaciones de cuidado para evitar que regrese\n\n**Cuándo acudir**\nDolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Cruz #3 we treat it with a simple procedure and local anesthesia to relieve you the same day.\n\n**What's included?**\n- Evaluation of the nail and toe\n- Procedure with local anesthesia\n- Removal of the ingrown portion of the nail\n- Treatment of the infection if present\n- Care instructions to prevent recurrence\n\n**When to come in**\nPain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston"
    ],
    "keywordsEn": [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston"
    ],
    "features": [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia en la Clínica: Surte tu Receta en Español",
    "titleEn": "In-Clinic Pharmacy: Fill Your Prescription in Spanish",
    "shortTitle": "Farmacia",
    "description": "Farmacia dentro de Clínica Hispana Cruz #3 en Houston, TX. Surte tu receta al terminar la consulta, con genéricos, medicamentos de venta libre y explicación en español.",
    "descriptionEn": "Pharmacy inside Clínica Hispana Cruz #3 in Houston, TX. Fill your prescription right after your visit, with generics, over-the-counter medicines and instructions in Spanish.",
    "longDescription": "Al terminar tu consulta en Clínica Hispana Cruz #3 puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español y sin necesidad de seguro médico.\n\n**¿Qué incluye?**\n- Surtido de tu receta justo al terminar la consulta\n- Medicamentos de marca y genéricos\n- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más\n- Asesoría del personal sobre cómo tomar tus medicamentos\n- Resurtido de recetas para tratamientos continuos\n\n**¿Cómo funciona?**\nEl médico te atiende, decide el tratamiento y la receta pasa directamente a la farmacia. Antes de irte recibes el medicamento con las indicaciones escritas y explicadas en español: cuánto tomar, a qué hora, si va con alimentos y qué hacer si olvidas una dosis. Si tienes una receta de otro médico, llámanos antes de venir para confirmar si podemos surtirla.\n\n**Medicamentos que solemos surtir**\nLos tratamientos más comunes que se recetan en la clínica: antibióticos, analgésicos y antiinflamatorios, medicamentos para la presión, la diabetes y el colesterol, tratamientos para alergias, gripe y tos, cremas y ungüentos, y vitaminas. Cuando existe versión genérica te la ofrecemos para reducir el costo, con la misma sustancia activa que la de marca.\n\n**Resurtido para condiciones crónicas**\nSi tomas medicamento para presión alta, diabetes, colesterol o tiroides, puedes resurtir tu receta en la clínica sin cita. El médico aprovecha la visita para revisar cómo vas y ajustar la dosis si hace falta, en lugar de renovar la receta a ciegas.\n\n**Farmacia en español cerca de ti**\nAbrimos de lunes a domingo de 9 AM a 9 PM, así que puedes surtir tu medicamento después del trabajo o el fin de semana. No necesitas seguro: manejamos precios de pago directo y te decimos el costo antes de pagar.\n\n**¿Por qué elegir Clínica Hispana Cruz #3?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 5411 S Braeswood Blvd, Houston, TX 77096, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el suroeste de la ciudad: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton y comunidades cercanas.",
    "longDescriptionEn": "When you finish your visit at Clínica Hispana Cruz #3 you can pick up your medications at our own pharmacy, without going anywhere else. Everything is resolved in one visit, in Spanish and with no health insurance required.\n\n**What's included?**\n- Prescription filled right after your visit\n- Brand-name and generic medications\n- Over-the-counter (OTC) medicines for flu, pain, allergies and more\n- Staff guidance on how to take your medications\n- Refills for ongoing treatments\n\n**How it works**\nThe doctor sees you, decides on the treatment and the prescription goes straight to the pharmacy. Before you leave you get the medication with written instructions explained in Spanish: how much to take, when, with or without food and what to do if you miss a dose. If you have a prescription from another doctor, call us before coming to confirm whether we can fill it.\n\n**Medications we usually fill**\nThe most common treatments prescribed at the clinic: antibiotics, pain relievers and anti-inflammatories, blood pressure, diabetes and cholesterol medications, allergy, flu and cough treatments, creams and ointments, and vitamins. When a generic version exists we offer it to lower the cost, with the same active ingredient as the brand.\n\n**Refills for chronic conditions**\nIf you take medication for high blood pressure, diabetes, cholesterol or thyroid, you can refill your prescription at the clinic without an appointment. The doctor uses the visit to check how you are doing and adjust the dose if needed, instead of renewing the prescription blindly.\n\n**A Spanish-speaking pharmacy near you**\nWe are open Monday through Sunday from 9 AM to 9 PM, so you can pick up your medication after work or on the weekend. No insurance needed: we offer self-pay pricing and tell you the cost before you pay.\n\n**Why choose Clínica Hispana Cruz #3?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 5411 S Braeswood Blvd, Houston, TX 77096, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire southwest side of the city: Meyerland, Braeswood, Westbury, Bellaire, Sharpstown, Gulfton and nearby communities.",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston"
    ],
    "features": [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Resurtido para presión, diabetes y colesterol",
      "Asesoría sobre tus medicamentos en español"
    ],
    "featuresEn": [
      "Prescription filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medicines",
      "Refills for blood pressure, diabetes and cholesterol",
      "Medication guidance in Spanish"
    ],
    "relatedPosts": ["atencion-medica-sin-seguro-houston"],
    "highlighted": false,
    "order": 29
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    slug: "examen-testosterona",
    title: "Revisa tu Testosterona",
    titleEn: "Testosterone Check",
    price: "$79",
    blurb:
      "¿Cansado, con menos energía o con menos deseo sexual? Revisa tu testosterona con examen de orina incluido y consulta médica gratis. Precio regular $220, ahora por solo $79.",
    blurbEn:
      "Tired, low on energy, or experiencing less sexual desire? Check your testosterone with a urine test included and a free medical consultation. Regular price $220, now only $79.",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/examen-testosterona.webp",
    alt: "Promoción de examen de testosterona por $79 con examen de orina y consulta médica gratis en Clínica Hispana Cruz #3 Houston",
    altEn: "Testosterone test promotion for $79 with urine test and free medical consultation at Clínica Hispana Cruz #3 Houston",
    order: 0,
  },
  {
    slug: "salud-mamaria",
    title: "Evaluación Integral de Salud Mamaria",
    titleEn: "Comprehensive Breast Health Evaluation",
    price: "$175",
    blurb:
      "¿Hace cuánto no revisas tus senos? Evaluación integral de salud mamaria con ultrasonido mamario bilateral, examen general de sangre y consulta médica gratis. Precio regular $350, ahora por solo $175.",
    blurbEn:
      "How long since your last breast check? Comprehensive breast health evaluation with bilateral breast ultrasound, general blood test and a free medical consultation. Regular price $350, now only $175.",
    includes: [
      "Ultrasonido mamario bilateral",
      "Examen general de sangre",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Bilateral breast ultrasound",
      "General blood test",
      "Free medical consultation",
    ],
    image: "/images/promotions/salud-mamaria.webp",
    alt: "Promoción de evaluación integral de salud mamaria por $175 con ultrasonido mamario bilateral, examen general de sangre y consulta médica gratis en Clínica Hispana Cruz #3 Houston",
    altEn: "Comprehensive breast health evaluation promotion for $175 with bilateral breast ultrasound, general blood test and free medical consultation at Clínica Hispana Cruz #3 Houston",
    order: 1,
  },
  {
    slug: "chequeo-prostata",
    title: "Chequeo Completo de Próstata",
    titleEn: "Complete Prostate Checkup",
    price: "$149",
    blurb:
      "Chequea tu salud hoy y gana tranquilidad: PSA en sangre, ultrasonido prostático y examen de orina, con consulta gratis. Precio regular $300, ahora en promoción por $149.",
    blurbEn:
      "Check your health today and gain peace of mind: blood PSA, prostate ultrasound and urine test, with a free consultation. Regular price $300, now on promotion for $149.",
    includes: [
      "Examen de PSA (próstata) en sangre",
      "Ultrasonido prostático",
      "Examen de orina",
      "Consulta gratis",
    ],
    includesEn: [
      "Blood PSA (prostate) test",
      "Prostate ultrasound",
      "Urine test",
      "Free consultation",
    ],
    image: "/images/promotions/chequeo-prostata.webp",
    alt: "Promoción de chequeo completo de próstata por $149 con PSA, ultrasonido prostático y examen de orina en Clínica Hispana Cruz #3 Houston",
    altEn: "Complete prostate checkup promotion for $149 with PSA, prostate ultrasound and urine test at Clínica Hispana Cruz #3 Houston",
    order: 2,
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    title: "Chequeo de la Mujer con Ultrasonido",
    titleEn: "Women's Checkup with Ultrasound",
    price: "$179",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo con ultrasonido pélvico, Papanicolaou y examen de orina, más consulta médica gratis. Precio regular $300, ahora por solo $179.",
    blurbEn:
      "How long since you last checked your feminine health? Complete checkup with a pelvic ultrasound, Pap smear and urine test, plus a free medical consultation. Regular price $300, now only $179.",
    includes: [
      "Ultrasonido pélvico",
      "Examen de Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-mujer-ultrasonido.webp",
    alt: "Promoción de chequeo completo de la mujer por $179 con ultrasonido pélvico, Papanicolaou y examen de orina en Clínica Hispana Cruz #3 Houston",
    altEn: "Complete women's checkup promotion for $179 with pelvic ultrasound, Pap smear and urine test at Clínica Hispana Cruz #3 Houston",
    order: 3,
  },
  {
    slug: "testosterona-baja",
    title: "Señales de Testosterona Baja",
    titleEn: "Signs of Low Testosterone",
    price: null,
    blurb:
      "¿Cansancio, menos deseo sexual y aumento de barriga? No siempre es la edad: podría ser testosterona baja. Un examen de sangre puede medir tus niveles, y detectar a tiempo hace la diferencia.",
    blurbEn:
      "Tiredness, less sexual desire and belly gain? It's not always your age: it could be low testosterone. A blood test can measure your levels, and catching it early makes the difference.",
    includes: [
      "Cansancio constante",
      "Menos deseo sexual",
      "Aumento de barriga",
      "Pérdida de fuerza o molestias musculares",
    ],
    includesEn: [
      "Constant tiredness",
      "Less sexual desire",
      "Belly gain",
      "Loss of strength or muscle discomfort",
    ],
    image: "/images/promotions/testosterona-baja.webp",
    alt: "Señales de testosterona baja como cansancio, menos deseo sexual y aumento de barriga, información de Clínica Hispana Cruz #3 Houston",
    altEn: "Signs of low testosterone such as tiredness, less sexual desire and belly gain, information from Clínica Hispana Cruz #3 Houston",
    order: 4,
  },
  {
    slug: "salud-prostata",
    title: "Señales de Alerta de la Próstata",
    titleEn: "Prostate Warning Signs",
    price: null,
    blurb:
      "¿Te levantas varias veces en la noche a orinar? Podría ser una señal de que tu próstata necesita atención, sobre todo en hombres mayores de 40. Una evaluación médica ayuda a identificar la causa a tiempo.",
    blurbEn:
      "Getting up several times at night to urinate? It could be a sign your prostate needs attention, especially in men over 40. A medical evaluation helps identify the cause early.",
    includes: [
      "Chorro débil",
      "Dificultad para empezar a orinar",
      "Orinar varias veces de noche",
      "Hombres mayores de 40: presta atención",
    ],
    includesEn: [
      "Weak stream",
      "Difficulty starting to urinate",
      "Urinating several times at night",
      "Men over 40: pay attention",
    ],
    image: "/images/promotions/salud-prostata.webp",
    alt: "Señales de alerta de próstata agrandada como chorro débil y levantarse de noche a orinar, información de Clínica Hispana Cruz #3 Houston",
    altEn: "Enlarged prostate warning signs such as a weak stream and getting up at night to urinate, information from Clínica Hispana Cruz #3 Houston",
    order: 5,
  },
  {
    slug: "chequeo-completo-salud",
    title: "Chequeo General Completo",
    titleEn: "Complete General Checkup",
    price: "$99",
    blurb:
      "Cuídate hoy, vive mejor mañana. Chequeo general completo por solo $99 (valor regular $250) para detectar a tiempo presión alta, diabetes y colesterol alto. Incluye examen general de sangre, A1C y examen de orina, con consulta médica gratis.",
    blurbEn:
      "Take care of yourself today, live better tomorrow. Complete general checkup for only $99 (regular value $250) to detect high blood pressure, diabetes and high cholesterol early. Includes complete blood work, A1C and urine test, with a free medical consultation.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Complete blood panel",
      "A1C (glycated hemoglobin)",
      "Complete urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-completo-salud.webp",
    alt: "Promoción de chequeo general completo por $99 con examen de sangre, A1C y examen de orina en Clínica Hispana Cruz #3 Houston",
    altEn: "Complete general checkup promotion for $99 with blood work, A1C and urine test at Clínica Hispana Cruz #3 Houston",
    highlighted: true,
    order: 7,
  },
  {
    slug: "chequeo-mujer",
    title: "Chequeo Completo de Mujer",
    titleEn: "Complete Women's Checkup",
    price: "$79",
    blurb:
      "Chequeo ginecológico completo para el cuidado preventivo de la mujer: examen Papanicolaou, consulta ginecológica y orden de mamografía, todo en una sola visita.",
    blurbEn:
      "A complete gynecological checkup for women's preventive care: Pap smear, gynecological consultation and mammogram order, all in a single visit.",
    includes: [
      "Examen Papanicolaou",
      "Consulta ginecológica",
      "Orden de mamografía",
    ],
    includesEn: [
      "Pap smear",
      "Gynecological consultation",
      "Mammogram order",
    ],
    image: "/images/promotions/chequeo-mujer.webp",
    alt: "Promoción de chequeo completo de mujer por $79 con Papanicolaou y consulta ginecológica en Clínica Hispana Cruz #3 Houston",
    altEn: "Complete women's checkup promotion for $79 with Pap smear and gynecological consultation at Clínica Hispana Cruz #3 Houston",
    highlighted: true,
    order: 8,
  },
  {
    slug: "examen-hombres",
    title: "Examen Completo para Hombres",
    titleEn: "Complete Men's Exam",
    price: "$89",
    blurb:
      "Examen completo para hombres que evalúa la salud urinaria, la próstata (prevención de cáncer) y los niveles de testosterona, con consulta médica incluida sin costo.",
    blurbEn:
      "A complete exam for men that evaluates urinary health, the prostate (cancer prevention) and testosterone levels, with a medical consultation included at no cost.",
    includes: [
      "Examen de orina",
      "Examen de próstata (prevención de cáncer)",
      "Examen de testosterona",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Urine test",
      "Prostate exam (cancer prevention)",
      "Testosterone test",
      "Free medical consultation",
    ],
    image: "/images/promotions/examen-hombres.webp",
    alt: "Promoción de examen completo para hombres por $89 con orina, próstata y testosterona en Clínica Hispana Cruz #3 Houston",
    altEn: "Complete men's exam promotion for $89 with urine, prostate and testosterone tests at Clínica Hispana Cruz #3 Houston",
    highlighted: true,
    order: 9,
  },
  {
    slug: "chequeo-completo-hombre",
    title: "Chequeo Completo del Hombre",
    titleEn: "Men's Complete Checkup",
    price: "$149",
    blurb:
      "Chequeo integral para el hombre con panel de laboratorio ampliado: PSA, testosterona y examen general de sangre, más examen de orina y consulta médica gratis. Promoción por tiempo limitado.",
    blurbEn:
      "A comprehensive men's checkup with an extended lab panel: PSA, testosterone and complete blood work, plus a free urine test and medical consultation. Limited-time promotion.",
    includes: [
      "PSA (antígeno prostático)",
      "Testosterona",
      "Examen general de sangre",
      "Examen de orina gratis",
      "Consulta médica gratis",
    ],
    includesEn: [
      "PSA (prostate antigen)",
      "Testosterone",
      "Complete blood panel",
      "Free urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-completo-hombre.webp",
    alt: "Promoción de chequeo completo del hombre por $149 con PSA, testosterona y examen de sangre en Clínica Hispana Cruz #3 Houston",
    altEn: "Men's complete checkup promotion for $149 with PSA, testosterone and blood work at Clínica Hispana Cruz #3 Houston",
    order: 10,
  },
  {
    slug: "perfil-hormonal-femenino",
    title: "Perfil Hormonal para Mujeres",
    titleEn: "Women's Hormone Panel",
    price: "$250",
    blurb:
      "Evaluación completa de tu salud hormonal, ideal para valorar desequilibrios hormonales, problemas menstruales, fertilidad, tiroides, menopausia y cambios hormonales, con resultados precisos y atención profesional.",
    blurbEn:
      "A complete evaluation of your hormonal health, ideal for assessing hormonal imbalances, menstrual problems, fertility, thyroid, menopause and hormonal changes, with accurate results and professional care.",
    includes: [
      "Perfil hormonal femenino completo",
      "Evaluación de desequilibrios hormonales",
      "Valoración de problemas menstruales y fertilidad",
      "Evaluación de tiroides y menopausia",
    ],
    includesEn: [
      "Complete female hormone panel",
      "Hormonal imbalance evaluation",
      "Menstrual and fertility assessment",
      "Thyroid and menopause evaluation",
    ],
    image: "/images/promotions/perfil-hormonal-femenino.webp",
    alt: "Promoción de perfil hormonal para mujeres por $250 en Clínica Hispana Cruz #3 Houston",
    altEn: "Women's hormone panel promotion for $250 at Clínica Hispana Cruz #3 Houston",
    order: 11,
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud Íntima Femenina",
    titleEn: "Women's Intimate Health",
    price: "$69",
    blurb:
      "¿Picazón, flujo o mal olor? No lo ignores, puede ser una infección. Paquete de salud íntima femenina con cultivo íntimo, consulta médica y examen de orina gratis. Oferta por tiempo limitado.",
    blurbEn:
      "Itching, discharge or odor? Don't ignore it — it may be an infection. Women's intimate health package with intimate culture, medical consultation and a free urine test. Limited-time offer.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina gratis",
    ],
    includesEn: [
      "Intimate culture",
      "Medical consultation",
      "Free urine test",
    ],
    image: "/images/promotions/salud-intima-femenina.webp",
    alt: "Promoción de salud íntima femenina por $69 con cultivo íntimo y consulta médica en Clínica Hispana Cruz #3 Houston",
    altEn: "Women's intimate health promotion for $69 with intimate culture and medical consultation at Clínica Hispana Cruz #3 Houston",
    order: 12,
  },
  {
    slug: "salud-intima-masculina",
    title: "Salud Íntima Masculina",
    titleEn: "Men's Intimate Health",
    price: "$69",
    blurb:
      "¿Ardor al orinar? Paquete de salud íntima masculina con cultivo uretral, examen de orina y consulta médica para detectar y tratar infecciones a tiempo.",
    blurbEn:
      "Burning when urinating? Men's intimate health package with urethral culture, urine test and medical consultation to detect and treat infections early.",
    includes: [
      "Cultivo uretral",
      "Examen de orina",
      "Consulta médica",
    ],
    includesEn: [
      "Urethral culture",
      "Urine test",
      "Medical consultation",
    ],
    image: "/images/promotions/salud-intima-masculina.webp",
    alt: "Promoción de salud íntima masculina por $69 con cultivo uretral y consulta médica en Clínica Hispana Cruz #3 Houston",
    altEn: "Men's intimate health promotion for $69 with urethral culture and medical consultation at Clínica Hispana Cruz #3 Houston",
    order: 13,
  },
  {
    slug: "sangre-vitamina-b12",
    title: "General de Sangre + Vitamina B12",
    titleEn: "Blood Panel + Vitamin B12",
    price: "$99",
    blurb:
      "Examen general de sangre más inyección de vitamina B12 para cuidar tu salud y recuperar energía y bienestar. Pregunta por tu membresía para aprovechar más beneficios.",
    blurbEn:
      "Complete blood panel plus a vitamin B12 injection to care for your health and restore energy and well-being. Ask about our membership for more benefits.",
    includes: [
      "Examen general de sangre",
      "Inyección de vitamina B12",
    ],
    includesEn: [
      "Complete blood panel",
      "Vitamin B12 injection",
    ],
    image: "/images/promotions/sangre-vitamina-b12.webp",
    alt: "Promoción de examen general de sangre más vitamina B12 por $99 en Clínica Hispana Cruz #3 Houston",
    altEn: "Blood panel plus vitamin B12 promotion for $99 at Clínica Hispana Cruz #3 Houston",
    order: 14,
  },
  {
    slug: "diagnostico-ets",
    title: "Diagnóstico Completo de ETS",
    titleEn: "Complete STD Testing",
    price: "$250",
    blurb:
      "Panel completo de detección de enfermedades de transmisión sexual: RPR (sífilis), VIH, herpes, clamidia y gonorrea. Atención confidencial y profesional. ¡Decide cuidarte!",
    blurbEn:
      "Complete sexually transmitted disease screening panel: RPR (syphilis), HIV, herpes, chlamydia and gonorrhea. Confidential, professional care. Choose to take care of yourself!",
    includes: [
      "RPR (sífilis)",
      "VIH",
      "Herpes",
      "Clamidia",
      "Gonorrea",
    ],
    includesEn: [
      "RPR (syphilis)",
      "HIV",
      "Herpes",
      "Chlamydia",
      "Gonorrhea",
    ],
    image: "/images/promotions/diagnostico-ets.webp",
    alt: "Promoción de diagnóstico completo de enfermedades de transmisión sexual por $250 en Clínica Hispana Cruz #3 Houston",
    altEn: "Complete STD testing promotion for $250 at Clínica Hispana Cruz #3 Houston",
    order: 16,
  },
  {
    slug: "tratamiento-alergias",
    title: "Tratamiento para las Alergias",
    titleEn: "Allergy Treatment",
    price: null,
    blurb:
      "Dile adiós a los estornudos. Evaluación y tratamiento para las alergias con consulta gratis, para que respires mejor en cualquier temporada.",
    blurbEn:
      "Say goodbye to sneezing. Allergy evaluation and treatment with a free consultation, so you can breathe better in any season.",
    includes: [
      "Consulta gratis",
      "Evaluación de síntomas",
      "Plan de tratamiento",
    ],
    includesEn: [
      "Free consultation",
      "Symptom evaluation",
      "Treatment plan",
    ],
    image: "/images/promotions/tratamiento-alergias.webp",
    alt: "Promoción de tratamiento para las alergias con consulta gratis en Clínica Hispana Cruz #3 Houston",
    altEn: "Allergy treatment promotion with free consultation at Clínica Hispana Cruz #3 Houston",
    order: 18,
  },
  {
    slug: "promocion-familiar",
    title: "Promoción Especial Familiar",
    titleEn: "Family Special",
    price: null,
    blurb:
      "Cuida tu salud y la de toda tu familia: examen de orina gratis, glucosa (glucotest) gratis y chequeo médico general a bajo costo, para adultos y niños. Pregunta por tu membresía gratis con 20% de descuento y consulta gratis durante 1 año.",
    blurbEn:
      "Take care of your whole family's health: free urine test, free glucose test and a low-cost general medical checkup, for adults and children. Ask about our free membership with 20% off and a free consultation for 1 year.",
    includes: [
      "Examen de orina gratis",
      "Glucosa (glucotest) gratis",
      "Chequeo médico general a bajo costo",
      "Servicio para adultos y niños",
      "Membresía: 20% de descuento y consulta gratis por 1 año",
    ],
    includesEn: [
      "Free urine test",
      "Free glucose test",
      "Low-cost general medical checkup",
      "Care for adults and children",
      "Membership: 20% off and free consultation for 1 year",
    ],
    image: "/images/promotions/promocion-familiar.webp",
    alt: "Promoción especial familiar con examen de orina y glucosa gratis en Clínica Hispana Cruz #3 Houston",
    altEn: "Family special promotion with free urine and glucose tests at Clínica Hispana Cruz #3 Houston",
    order: 19,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.home", href: "/" },
  { label: "nav.services", href: "/services" },
  { label: "nav.promotions", href: "/promociones" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contact" },
];

