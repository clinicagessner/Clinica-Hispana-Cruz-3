interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo hacerme exámenes de control?",
        "answer": "Depende de tu condición. En diabetes, A1C cada 3 meses hasta llegar a la meta y luego cada 6; en presión alta, cada 1 a 3 meses al ajustar el tratamiento; en colesterol, cada 6 a 12 meses. Te damos un plan por escrito."
      },
      {
        "question": "¿La prueba de A1C necesita ayuno?",
        "answer": "No. La A1C mide el promedio de azúcar de los últimos 3 meses y se puede hacer a cualquier hora. Para el perfil de colesterol conviene un ayuno de 8 a 12 horas."
      },
      {
        "question": "¿Con qué paquete me conviene empezar?",
        "answer": "Con el Chequeo General Completo: incluye examen general de sangre, A1C, examen de orina y consulta médica. Consulta el precio vigente en la página de promociones."
      },
      {
        "question": "¿Surten mis medicamentos en la clínica?",
        "answer": "Sí. Al terminar la consulta puedes surtir o resurtir tu receta en nuestra farmacia, con genéricos cuando existen para reducir el costo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I get control labs?",
        "answer": "It depends on your condition. For diabetes, A1C every 3 months until you reach your goal and then every 6; for high blood pressure, every 1 to 3 months while adjusting treatment; for cholesterol, every 6 to 12 months. We give you a written plan."
      },
      {
        "question": "Does the A1C test require fasting?",
        "answer": "No. A1C measures your average sugar over the last 3 months and can be done at any time. For the cholesterol panel, 8 to 12 hours of fasting is recommended."
      },
      {
        "question": "Which package should I start with?",
        "answer": "The Complete General Checkup: it includes a general blood panel, A1C, urinalysis and a medical consultation. Check the current price on the promotions page."
      },
      {
        "question": "Do you fill my medications at the clinic?",
        "answer": "Yes. When your visit ends you can fill or refill your prescription at our pharmacy, with generics when available to lower the cost."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Qué prueba se usa para revisar la tiroides?",
        "answer": "Un análisis de sangre. La TSH es la prueba principal; la T4 libre, la T3 y los anticuerpos completan el estudio cuando el médico lo considera necesario."
      },
      {
        "question": "¿Necesito ayuno para el examen de tiroides?",
        "answer": "No. Las pruebas de tiroides no requieren ayuno. Puedes venir a cualquier hora, sin cita y sin orden médica."
      },
      {
        "question": "¿Cuándo debo revisarme la tiroides?",
        "answer": "Si tienes cansancio persistente, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, palpitaciones o nerviosismo. También si tienes familiares con problemas de tiroides."
      },
      {
        "question": "¿Cada cuánto se controla la tiroides con tratamiento?",
        "answer": "Al iniciar o cambiar la dosis, cada 6 u 8 semanas hasta estabilizarla. Después, cada 6 a 12 meses. El médico te indica el calendario según tu caso."
      },
      {
        "question": "¿En cuánto tiempo entregan los resultados?",
        "answer": "Varía según el examen. Te indicamos el plazo al tomar la muestra y te explicamos el resultado en español cuando esté listo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      }
    ],
    "faqsEn": [
      {
        "question": "Which test is used to check the thyroid?",
        "answer": "A blood test. TSH is the main test; free T4, T3 and antibodies complete the workup when the doctor considers it necessary."
      },
      {
        "question": "Do I need to fast for a thyroid test?",
        "answer": "No. Thyroid tests don't require fasting. You can come at any time, walk-in and without a doctor's order."
      },
      {
        "question": "When should I get my thyroid checked?",
        "answer": "If you have persistent fatigue, unexplained weight changes, hair loss, feeling too cold or too hot, palpitations or nervousness. Also if you have relatives with thyroid problems."
      },
      {
        "question": "How often is the thyroid monitored on treatment?",
        "answer": "When starting or changing the dose, every 6 to 8 weeks until it stabilizes. After that, every 6 to 12 months. The doctor sets the schedule for your case."
      },
      {
        "question": "How soon are results ready?",
        "answer": "It depends on the test. We tell you the turnaround when we draw the sample and explain the result in Spanish when it is ready."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Tratan alergias en la piel y respiratorias?",
        "answer": "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón)."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat both skin and respiratory allergies?",
        "answer": "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching)."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Hacen prueba de flu y de COVID el mismo día?",
        "answer": "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you test for flu and COVID the same day?",
        "answer": "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Llenan el formulario de la escuela o el equipo?",
        "answer": "Sí, trae el formulario de tu escuela o equipo deportivo y lo completamos durante la visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you fill out the school or team form?",
        "answer": "Yes, bring your school or sports-team form and we complete it during the visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo hacerme el papanicolaou?",
        "answer": "A partir de los 21 años. Entre los 21 y los 29, cada 3 años; entre los 30 y los 65, cada 3 a 5 años según si se combina con la prueba de VPH. Si tuviste un resultado anormal, el médico puede indicar controles más frecuentes."
      },
      {
        "question": "¿El examen de papanicolaou duele?",
        "answer": "No debería doler. Dura pocos minutos y puede causar una molestia leve. Nuestro personal te explica cada paso en español y cuida tu privacidad."
      },
      {
        "question": "¿Puedo hacerme el papanicolaou si tengo la regla?",
        "answer": "Es mejor hacerlo fuera de los días de sangrado. También conviene evitar relaciones sexuales, duchas vaginales, óvulos o cremas durante las 48 horas previas para que la muestra sea confiable."
      },
      {
        "question": "¿Cuándo llegan los resultados del papanicolaou?",
        "answer": "La muestra se procesa en laboratorio y el resultado tarda unos días. Te avisamos cuando esté listo y te explicamos qué significa y si necesitas algún seguimiento."
      },
      {
        "question": "¿Necesito cita para el papanicolaou?",
        "answer": "No es obligatorio, atendemos sin cita de lunes a domingo de 9 AM a 9 PM; pero puedes llamarnos para reservar un horario cómodo."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregunta por nuestro paquete Chequeo Completo de Mujer en la página de promociones."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I get a Pap smear?",
        "answer": "Starting at age 21. Between 21 and 29, every 3 years; between 30 and 65, every 3 to 5 years depending on whether it is combined with HPV testing. If you had an abnormal result, the doctor may recommend more frequent checks."
      },
      {
        "question": "Does a Pap smear hurt?",
        "answer": "It shouldn't hurt. It takes a few minutes and may cause mild discomfort. Our staff explains each step in Spanish and protects your privacy."
      },
      {
        "question": "Can I get a Pap smear during my period?",
        "answer": "It is best done outside your period. Also avoid intercourse, douching, vaginal suppositories or creams for 48 hours beforehand so the sample is reliable."
      },
      {
        "question": "When do Pap smear results come back?",
        "answer": "The sample is processed at a lab and the result takes a few days. We let you know when it is ready and explain what it means and whether you need any follow-up."
      },
      {
        "question": "Do I need an appointment for a Pap smear?",
        "answer": "It's not required, we welcome walk-ins Monday to Sunday from 9 AM to 9 PM; but you can call us to reserve a convenient time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask about our Complete Women's Checkup package on the promotions page."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿Cuál es la diferencia entre la prueba de embarazo de orina y la de sangre?",
        "answer": "La de orina detecta la hormona hCG y da resultado en minutos; es confiable desde el primer día de retraso. La de sangre mide la cantidad exacta de hCG, detecta el embarazo unos días antes y se usa para confirmar un resultado dudoso."
      },
      {
        "question": "¿Desde cuándo puedo hacerme la prueba de embarazo?",
        "answer": "La prueba de orina es confiable a partir del primer día de retraso menstrual. La prueba de sangre puede detectar el embarazo unos días antes del retraso. Si tienes dudas sobre tus fechas, te orientamos en la consulta."
      },
      {
        "question": "¿Necesito orden médica o seguro para la prueba de sangre?",
        "answer": "No. Puedes venir sin orden médica y sin seguro. Tomamos la muestra en el momento y personal médico te explica el resultado en español."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What is the difference between a urine and a blood pregnancy test?",
        "answer": "The urine test detects the hCG hormone and gives a result in minutes; it is reliable from the first day of a missed period. The blood test measures the exact hCG level, detects pregnancy a few days earlier, and is used to confirm an unclear result."
      },
      {
        "question": "How early can I take a pregnancy test?",
        "answer": "The urine test is reliable from the first day of a missed period. The blood test can detect pregnancy a few days before a missed period. If you are unsure about your dates, we guide you during the visit."
      },
      {
        "question": "Do I need a doctor's order or insurance for the blood test?",
        "answer": "No. You can come in without a doctor's order and without insurance. We draw the sample on the spot and medical staff explain the result in Spanish."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos ofrecen?",
        "answer": "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What contraceptive methods do you offer?",
        "answer": "We offer guidance, birth control pills and the injection, and help you choose the right method for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele la extracción del implante?",
        "answer": "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿A qué edad debo hacerme el examen de próstata?",
        "answer": "Por lo general se recomienda conversarlo con el médico a partir de los 50 años, o desde los 40 a 45 si tienes antecedentes familiares de cáncer de próstata. Si ya tienes síntomas urinarios, no esperes a esa edad."
      },
      {
        "question": "¿El examen de próstata es un análisis de sangre?",
        "answer": "Sí. El PSA (antígeno prostático específico) se mide con una muestra de sangre y no requiere preparación especial. Según el resultado y tus síntomas, el médico puede recomendar una evaluación adicional."
      },
      {
        "question": "¿Cuáles son los síntomas de testosterona baja?",
        "answer": "Cansancio persistente, ánimo bajo, pérdida de masa muscular y cambios en el deseo o el rendimiento sexual. Se diagnostica con un análisis de sangre y te explicamos el resultado y las opciones en español."
      },
      {
        "question": "¿Qué incluye el examen del hombre?",
        "answer": "Incluye examen de próstata (PSA), nivel de testosterona y un chequeo general con signos vitales, con resultados explicados en español. Pregunta por nuestros paquetes para hombres en la página de promociones."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "At what age should I get a prostate exam?",
        "answer": "It is usually recommended to discuss it with your doctor from age 50, or from 40 to 45 if you have a family history of prostate cancer. If you already have urinary symptoms, don't wait until then."
      },
      {
        "question": "Is the prostate exam a blood test?",
        "answer": "Yes. PSA (prostate-specific antigen) is measured from a blood sample and needs no special preparation. Depending on the result and your symptoms, the doctor may recommend further evaluation."
      },
      {
        "question": "What are the symptoms of low testosterone?",
        "answer": "Persistent fatigue, low mood, loss of muscle mass and changes in sexual desire or performance. It is diagnosed with a blood test and we explain the result and your options in Spanish."
      },
      {
        "question": "What does the men's exam include?",
        "answer": "It includes a prostate exam (PSA), testosterone level and a general checkup with vital signs, with results explained in Spanish. Ask about our men's packages on the promotions page."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿Necesito orden médica para hacerme un examen de sangre?",
        "answer": "No. Puedes venir sin receta y sin seguro. Nos dices qué examen necesitas o nos cuentas tus síntomas y nuestro médico te indica el panel adecuado. Si ya tienes una orden de tu doctor, también la aceptamos."
      },
      {
        "question": "¿En cuánto tiempo entregan los resultados?",
        "answer": "Varía según el examen: algunos resultados están listos el mismo día y otros tardan unos días porque se procesan en un laboratorio de referencia. Te indicamos el plazo al tomar la muestra y te explicamos los resultados en español."
      },
      {
        "question": "¿Tengo que venir en ayunas?",
        "answer": "Depende del examen. Para la glucosa en ayunas y el perfil de colesterol se recomiendan 8 a 12 horas sin comer; el agua está permitida. La mayoría de los demás exámenes no requieren ayuno. Llámanos si tienes dudas."
      },
      {
        "question": "¿Cuánto cuesta un examen de sangre?",
        "answer": "Depende del panel que necesites. Manejamos precios accesibles de pago directo y paquetes de chequeo general que incluyen examen de sangre y consulta médica. Consulta los precios vigentes en nuestra página de promociones o llámanos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM y tomamos la muestra en el momento. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need a doctor's order for a blood test?",
        "answer": "No. You can come without a prescription and without insurance. Tell us which test you need or describe your symptoms and our physician will recommend the right panel. If you already have an order from your doctor, we accept it too."
      },
      {
        "question": "How soon are results ready?",
        "answer": "It depends on the test: some results are ready the same day, while others take a few days because they are processed at a reference lab. We tell you the turnaround when we draw your sample and explain the results in Spanish."
      },
      {
        "question": "Do I need to fast?",
        "answer": "It depends on the test. For fasting glucose and the cholesterol panel we recommend 8 to 12 hours without food; water is allowed. Most other tests don't require fasting. Call us if you're not sure."
      },
      {
        "question": "How much does a blood test cost?",
        "answer": "It depends on the panel you need. We offer affordable self-pay prices and general checkup packages that include blood work and a medical consultation. Check current prices on our promotions page or call us."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM and draw your sample on the spot. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Puedo recibir tratamiento el mismo día?",
        "answer": "Sí, hacemos el examen de orina y, si hay infección, iniciamos el tratamiento el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get treatment the same day?",
        "answer": "Yes, we run the urine test and, if there's an infection, we start treatment the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Cómo se toma la muestra de heces?",
        "answer": "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How is the stool sample collected?",
        "answer": "We give you a container and clear instructions to collect the sample at home and bring it to the clinic."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Cuánto tarda el resultado del strep test?",
        "answer": "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the strep test take?",
        "answer": "The rapid strep test gives a result in just a few minutes during your visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Tengo que regresar para leer la prueba de TB?",
        "answer": "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to come back to read the TB test?",
        "answer": "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Las pruebas son confidenciales?",
        "answer": "Sí, todas las pruebas de STD son completamente confidenciales y se realizan con respeto y sin juicios."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the testing confidential?",
        "answer": "Yes, all STD testing is completely confidential and done with respect and without judgment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Entregan documentación para el trabajo?",
        "answer": "Sí, te entregamos la documentación del resultado para tu empleador o trámite."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you provide documentation for work?",
        "answer": "Yes, we give you documentation of the result for your employer or paperwork."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿El electrocardiograma duele?",
        "answer": "No. Solo se colocan electrodos adhesivos en la piel; no hay agujas ni radiación. Puedes sentir un poco de frío por el gel o un leve tirón al retirarlos."
      },
      {
        "question": "¿Cuánto dura el electrocardiograma?",
        "answer": "El registro tarda unos segundos y toda la visita alrededor de 10 a 15 minutos, incluida la explicación del resultado."
      },
      {
        "question": "¿Necesito ayuno o alguna preparación?",
        "answer": "No. No hace falta ayuno ni preparación. Solo necesitas descubrir el pecho para colocar los electrodos."
      },
      {
        "question": "¿Me dan el resultado el mismo día?",
        "answer": "Sí. El médico revisa el trazado en la misma visita y te lo explica en español. Si hace falta un estudio adicional, te referimos a cardiología."
      },
      {
        "question": "¿Sirve para un examen de trabajo o de deporte?",
        "answer": "Sí. Es uno de los estudios que suelen pedir en exámenes laborales, deportivos y antes de una cirugía. Te entregamos el resultado para que lo lleves donde lo requieran."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      }
    ],
    "faqsEn": [
      {
        "question": "Does an EKG hurt?",
        "answer": "No. Adhesive electrodes are simply placed on the skin; there are no needles and no radiation. You may feel a bit of cold from the gel or a slight pull when they are removed."
      },
      {
        "question": "How long does the EKG take?",
        "answer": "The recording takes a few seconds and the whole visit about 10 to 15 minutes, including the explanation of the result."
      },
      {
        "question": "Do I need to fast or prepare?",
        "answer": "No. No fasting or preparation is needed. You only need to uncover your chest so the electrodes can be placed."
      },
      {
        "question": "Do I get the result the same day?",
        "answer": "Yes. The doctor reviews the tracing during the same visit and explains it in Spanish. If further testing is needed, we refer you to cardiology."
      },
      {
        "question": "Is it valid for a work or sports exam?",
        "answer": "Yes. It is one of the tests commonly requested for work, sports and pre-surgery exams. We give you the result to take wherever it is required."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿El ultrasonido tiene radiación?",
        "answer": "No, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does ultrasound use radiation?",
        "answer": "No, ultrasound uses no radiation, so it's safe even during pregnancy."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿Me entregan el certificado DOT el mismo día?",
        "answer": "Sí. Al terminar el examen físico DOT sales con tu certificado médico y tu tarjeta de conductor el mismo día."
      },
      {
        "question": "¿Cuánto dura el examen médico DOT?",
        "answer": "Entre 30 y 45 minutos. Incluye visión, audición, presión arterial, análisis de orina, examen físico y revisión de tu historial médico."
      },
      {
        "question": "¿Por cuánto tiempo es válido el certificado DOT?",
        "answer": "Por lo general 2 años. Si tienes presión alta controlada o diabetes sin insulina, el médico puede emitirlo por 1 año. Renueva con al menos 2 semanas de anticipación."
      },
      {
        "question": "¿Qué debo llevar al examen DOT?",
        "answer": "Identificación con foto, lista de medicamentos que tomas, lentes o audífonos si los usas y, si tienes diabetes, presión alta o apnea del sueño, documentos recientes de tu tratamiento."
      },
      {
        "question": "¿El examen DOT incluye prueba de drogas?",
        "answer": "No. El examen físico DOT y la prueba de drogas son distintos. Si tu empleador también la requiere, ofrecemos el examen de alcohol y drogas en la misma visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM, ideal para conductores con horarios irregulares. También puedes llamarnos para reservar un horario."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I get the DOT certificate the same day?",
        "answer": "Yes. After the DOT physical you leave with your medical certificate and driver medical card the same day."
      },
      {
        "question": "How long does the DOT medical exam take?",
        "answer": "30 to 45 minutes. It covers vision, hearing, blood pressure, urinalysis, a physical exam and a review of your medical history."
      },
      {
        "question": "How long is the DOT certificate valid?",
        "answer": "Usually 2 years. If you have controlled high blood pressure or diabetes without insulin, the doctor may issue it for 1 year. Renew at least 2 weeks before it expires."
      },
      {
        "question": "What should I bring to the DOT exam?",
        "answer": "Photo ID, a list of your medications, glasses or hearing aids if you use them and, if you have diabetes, high blood pressure or sleep apnea, recent documents from your treatment."
      },
      {
        "question": "Does the DOT exam include a drug test?",
        "answer": "No. The DOT physical and the drug test are separate. If your employer also requires it, we offer drug and alcohol testing in the same visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM, ideal for drivers with irregular schedules. You can also call us to reserve a time."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿El médico está autorizado por USCIS?",
        "answer": "Sí. El examen lo realiza un médico autorizado por USCIS (civil surgeon), que es el único que puede firmar el Formulario I-693, y te lo entregamos sellado en sobre oficial."
      },
      {
        "question": "¿Cuánto dura el examen de inmigración?",
        "answer": "Entre 1 y 2 horas: revisión de documentos, examen físico, laboratorio y vacunas. Si te faltan vacunas de varias dosis, puede hacer falta una segunda visita."
      },
      {
        "question": "¿Qué debo traer al examen I-693?",
        "answer": "Pasaporte o identificación con foto, tu registro de vacunas si lo tienes, documentos médicos relevantes, los formularios de USCIS de tu caso y lentes o audífonos si los usas."
      },
      {
        "question": "¿Necesito cita para el examen de inmigración?",
        "answer": "No, atendemos sin cita. Si tu entrevista con USCIS está cerca, llámanos para coordinar y asegurar el turno con el médico autorizado."
      },
      {
        "question": "¿Puedo abrir el sobre del formulario I-693?",
        "answer": "No. USCIS rechaza los sobres abiertos o dañados. Entrégalo cerrado tal como te lo damos."
      },
      {
        "question": "¿Las vacunas están incluidas en el precio?",
        "answer": "No. El precio incluye el examen, el formulario y la asesoría; las vacunas se cobran por separado según las que necesites. Trae tu registro para no repetir las que ya tienes."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the physician authorized by USCIS?",
        "answer": "Yes. The exam is performed by a USCIS-designated civil surgeon, the only physician who can sign Form I-693, and we hand it to you sealed in the official envelope."
      },
      {
        "question": "How long does the immigration exam take?",
        "answer": "1 to 2 hours: document review, physical exam, lab work and vaccines. If you are missing multi-dose vaccines, a second visit may be needed."
      },
      {
        "question": "What should I bring to the I-693 exam?",
        "answer": "Passport or photo ID, your vaccination records if you have them, relevant medical documents, the USCIS forms for your case, and glasses or hearing aids if you use them."
      },
      {
        "question": "Do I need an appointment for the immigration exam?",
        "answer": "No, we see you walk-in. If your USCIS interview is coming up soon, call us to coordinate and secure your slot with the civil surgeon."
      },
      {
        "question": "Can I open the I-693 envelope?",
        "answer": "No. USCIS rejects opened or damaged envelopes. Submit it sealed exactly as we give it to you."
      },
      {
        "question": "Are vaccines included in the price?",
        "answer": "No. The price includes the exam, the form and guidance; vaccines are charged separately depending on which ones you need. Bring your records so you don't repeat vaccines you already had."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Qué vacunas aplican?",
        "answer": "Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico; pregúntanos cuál te conviene."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Which vaccines do you give?",
        "answer": "We administer the influenza (flu) vaccine and tetanus toxoid; ask us which one you need."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Quién aplica el suero vitaminado?",
        "answer": "Personal médico de la clínica, después de una evaluación breve de tu presión, antecedentes y alergias para confirmar que es adecuado para ti."
      },
      {
        "question": "¿Cuánto dura la aplicación?",
        "answer": "Por lo general entre 30 y 60 minutos, mientras descansas. Al terminar puedes volver a tus actividades normales."
      },
      {
        "question": "¿Duele o tiene efectos secundarios?",
        "answer": "Solo el pinchazo para canalizar la vena. Algunas personas notan sabor metálico o sensación de frío en el brazo durante la aplicación; son molestias leves y pasajeras."
      },
      {
        "question": "¿Cada cuánto puedo ponerme un suero?",
        "answer": "Depende de tu necesidad y de la evaluación médica. Muchas personas lo usan de forma ocasional; para cansancio persistente conviene buscar la causa con un análisis de sangre."
      },
      {
        "question": "¿Necesito un análisis antes de la inyección de B12?",
        "answer": "No es obligatorio, pero es recomendable medir tu nivel de B12 para saber si la necesitas. El paquete General de Sangre + Vitamina B12 incluye el análisis y la inyección."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      }
    ],
    "faqsEn": [
      {
        "question": "Who gives the vitamin drip?",
        "answer": "The clinic's medical staff, after a brief check of your blood pressure, history and allergies to confirm it is right for you."
      },
      {
        "question": "How long does the session take?",
        "answer": "Usually 30 to 60 minutes while you rest. Afterwards you can return to your normal activities."
      },
      {
        "question": "Does it hurt or have side effects?",
        "answer": "Only the needle stick to access the vein. Some people notice a metallic taste or a cool feeling in the arm during the drip; these are mild and pass quickly."
      },
      {
        "question": "How often can I get a drip?",
        "answer": "It depends on your needs and the medical evaluation. Many people use it occasionally; for persistent fatigue it is better to find the cause with a blood test."
      },
      {
        "question": "Do I need a blood test before the B12 injection?",
        "answer": "It is not required, but measuring your B12 level is recommended to know whether you need it. Our Blood Panel + Vitamin B12 package includes the test and the injection."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Atienden heridas sin cita?",
        "answer": "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat wounds without an appointment?",
        "answer": "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Hacen cambios de vendaje y seguimiento?",
        "answer": "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do dressing changes and follow-up?",
        "answer": "Yes, we clean, treat and change the dressings, and follow up until the wound heals."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué cirugías menores realizan?",
        "answer": "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What minor surgeries do you perform?",
        "answer": "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿El drenaje de un absceso duele?",
        "answer": "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does abscess drainage hurt?",
        "answer": "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Cómo tratan la uña encarnada?",
        "answer": "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How do you treat an ingrown toenail?",
        "answer": "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo surtir mi receta en la clínica?",
        "answer": "Sí. Al terminar tu consulta la receta pasa a nuestra farmacia y te llevas el medicamento en la misma visita, con las indicaciones explicadas en español."
      },
      {
        "question": "¿Tienen medicamentos genéricos?",
        "answer": "Sí. Cuando existe versión genérica te la ofrecemos para reducir el costo. Tiene la misma sustancia activa y el mismo efecto que el medicamento de marca."
      },
      {
        "question": "¿Surten recetas de otros médicos?",
        "answer": "Llámanos antes de venir con el nombre del medicamento y te confirmamos si podemos surtirla. Las recetas emitidas en la clínica se surten siempre."
      },
      {
        "question": "¿Puedo resurtir mi medicamento de presión o diabetes?",
        "answer": "Sí, sin cita. El médico revisa cómo vas, ajusta la dosis si hace falta y la farmacia te entrega el medicamento en la misma visita."
      },
      {
        "question": "¿Necesito seguro para comprar en la farmacia?",
        "answer": "No. Manejamos precios de pago directo, aceptamos efectivo y tarjetas, y te decimos el costo antes de pagar."
      },
      {
        "question": "¿Cuál es el horario de la farmacia?",
        "answer": "El mismo de la clínica: lunes a domingo de 9 AM a 9 PM."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I fill my prescription at the clinic?",
        "answer": "Yes. When your visit ends the prescription goes to our pharmacy and you take your medication home the same visit, with instructions explained in Spanish."
      },
      {
        "question": "Do you have generic medications?",
        "answer": "Yes. When a generic version exists we offer it to lower the cost. It has the same active ingredient and the same effect as the brand-name drug."
      },
      {
        "question": "Do you fill prescriptions from other doctors?",
        "answer": "Call us before coming with the name of the medication and we will confirm whether we can fill it. Prescriptions issued at the clinic are always filled."
      },
      {
        "question": "Can I refill my blood pressure or diabetes medication?",
        "answer": "Yes, no appointment needed. The doctor checks how you are doing, adjusts the dose if needed and the pharmacy hands you the medication in the same visit."
      },
      {
        "question": "Do I need insurance to buy at the pharmacy?",
        "answer": "No. We offer self-pay pricing, accept cash and cards, and tell you the cost before you pay."
      },
      {
        "question": "What are the pharmacy hours?",
        "answer": "The same as the clinic: Monday through Sunday, 9 AM to 9 PM."
      }
    ]
  },
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
