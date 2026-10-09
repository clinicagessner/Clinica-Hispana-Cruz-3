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
        "question": "¿Puedo pasar aquí el control de mi diabetes o mi presión si antes lo llevaba en otra clínica o en otro país?",
        "answer": "Sí. Trae todos los frascos de tus medicamentos, aunque estén vacíos, y cualquier resultado anterior que tengas en papel o en el celular. Con eso el equipo médico reconstruye tu historial, mide tu presión y tu glucosa durante la visita y decide qué análisis vale la pena repetir para continuar tu control sin empezar de cero."
      },
      {
        "question": "¿Tengo que venir sin desayunar a mi revisión de colesterol o de azúcar?",
        "answer": "Depende de lo que toque revisar. Para un perfil de lípidos o una glucosa en ayunas conviene llegar sin comer, solo con agua desde la noche anterior; la hemoglobina A1C no lo necesita. Si usas insulina o pastillas para la diabetes, no te saltes comidas por tu cuenta: escríbenos por WhatsApp antes y te decimos cómo hacerlo con seguridad."
      },
      {
        "question": "Tomo mis pastillas, pero mis números siguen altos. ¿Qué se puede hacer?",
        "answer": "Pasa con frecuencia y no significa que lo estés haciendo mal. El equipo médico revisa cómo y a qué hora tomas cada pastilla, qué comes, otros medicamentos que uses y tus [análisis de sangre](/services/examenes-sangre) recientes; con eso puede ajustar la dosis o cambiar de opción, y te indica cuándo volver para la siguiente medición."
      }
    ],
    "faqsEn": [
      {
        "question": "My diabetes and blood pressure were managed somewhere else. Can I switch my care here?",
        "answer": "Yes. Bring every medicine bottle you use, even empty ones, plus any old lab reports on paper or on your phone. The medical team checks your blood pressure and sugar at the visit, reviews that history and decides which labs are worth repeating, so your follow-up picks up where it left off instead of starting over."
      },
      {
        "question": "Do I need to skip breakfast before my cholesterol or sugar check?",
        "answer": "Only for some tests. A lipid panel or fasting glucose is more accurate if you arrive having had nothing but water since the night before, while an A1C doesn't need fasting. If you take insulin or diabetes pills, don't skip meals on your own; message us on WhatsApp first so we can tell you how to do it safely."
      },
      {
        "question": "I take my pills every day, but my numbers are still high. What now?",
        "answer": "That happens a lot and doesn't mean you failed. The medical team looks at how and when you take each pill, what you eat, any other medicines and your recent [blood tests](/services/examenes-sangre), then adjusts the dose or switches to another option and tells you when to come back for your next reading."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "Me siento cansada todo el tiempo y subí de peso, ¿vale la pena revisar mi tiroides?",
        "answer": "Puede valer la pena. El equipo médico te pregunta por otras pistas, como sentir mucho frío, piel seca, caída de cabello, estreñimiento o reglas irregulares, palpa tu cuello buscando crecimiento y pide un análisis de TSH y T4 libre. No necesitas una orden de otro proveedor para hacerte la prueba en la clínica."
      },
      {
        "question": "Ya tomo levotiroxina, ¿cómo acomodo la pastilla con el análisis de control?",
        "answer": "Lo habitual es venir antes de tu pastilla de la mañana, traerla contigo y tomarla después de la extracción. Avísanos si usas biotina o suplementos para el cabello y las uñas, porque pueden alterar algunas mediciones de tiroides. Con el resultado, el equipo médico decide si mantienes la misma dosis o si conviene cambiarla."
      },
      {
        "question": "Mi TSH salió un poco fuera de rango, ¿ya necesito medicamento?",
        "answer": "No siempre. Un valor apenas alterado se compara con tus síntomas, tu edad, si estás embarazada o planeas estarlo y, a veces, con anticuerpos tiroideos. El equipo médico puede sugerir repetir el análisis más adelante, iniciar tratamiento u orientar la referencia si aparece algo más, como un bulto en el cuello que deba estudiarse."
      }
    ],
    "faqsEn": [
      {
        "question": "I'm always tired and gaining weight. Is it worth checking my thyroid?",
        "answer": "It can be. The medical team asks about other clues such as feeling cold, dry skin, hair loss, constipation or irregular periods, feels your neck for swelling, and orders a TSH and free T4 blood test. You don't need an order from another provider to get the test done at the clinic."
      },
      {
        "question": "I already take levothyroxine. How should I time it around my follow-up blood draw?",
        "answer": "Most people come in before their morning pill, bring it along and take it right after the sample is drawn. Let us know if you use biotin or hair and nail supplements, since they can throw off some thyroid readings. Your result tells the medical team whether to keep the same dose or change it."
      },
      {
        "question": "My TSH came back slightly out of range. Do I need medication?",
        "answer": "Not always. A borderline number is weighed against your symptoms, your age, a pregnancy or plans to get pregnant, and sometimes thyroid antibodies. The medical team may suggest repeating the test later, start treatment, or help you get a referral if something else shows up, such as a lump in your neck that needs a closer look."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "Cada primavera estornudo sin parar y me pican los ojos, ¿debería consultar?",
        "answer": "Sí, sobre todo si vuelve en la misma temporada o empeora al cortar el pasto, sacudir o estar cerca de mascotas. En Houston el polen y la humedad hacen que estas molestias duren más. El equipo médico revisa tu nariz, garganta y pulmones y arma un plan con medicamento y medidas sencillas para que las crisis bajen."
      },
      {
        "question": "¿Debo dejar mi antihistamínico antes de la consulta de alergias?",
        "answer": "No hace falta suspenderlo para la evaluación en la clínica. Lo que más sirve es que traigas el nombre o una foto de la caja de lo que has usado, cuánto te ayudó y si te daba sueño. Con eso el equipo médico decide si conviene cambiarlo o combinarlo con un aerosol nasal o gotas para los ojos."
      },
      {
        "question": "Me salieron ronchas después de probar una comida nueva, ¿me revisan por eso?",
        "answer": "Sí. Revisamos ronchas y comezón en la piel y buscamos el posible detonante, ya sea un alimento, un medicamento o un jabón o crema que empezaste a usar. Si además se te hinchan los labios o la lengua, te cuesta respirar o sientes que se cierra la garganta, no manejes hasta la clínica: llama al 911 en ese momento."
      }
    ],
    "faqsEn": [
      {
        "question": "Every spring I sneeze nonstop and my eyes itch. Should I get seen?",
        "answer": "Yes, especially if it comes back each season or flares up when you mow, dust or pet animals. Houston's pollen and humidity make these symptoms hard to shake. The medical team checks your nose, throat and lungs and builds a plan with medicine and simple everyday steps to keep the flare-ups down."
      },
      {
        "question": "Should I stop my allergy pills before the visit?",
        "answer": "There's no need to stop them for a clinic evaluation. What helps most is bringing the name or a photo of the box, how well it worked and whether it made you drowsy. With that, the medical team can decide whether to switch it or pair it with a nasal spray or eye drops."
      },
      {
        "question": "I broke out in hives after trying a new food. Can you look at that?",
        "answer": "Yes. We check hives and itchy skin and try to pin down the trigger, whether it's a food, a medicine or a new soap or lotion. If your lips or tongue swell, you struggle to breathe or your throat feels tight, don't drive yourself to the clinic: call 911 right then."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "La fiebre me empezó hace poco, ¿es muy pronto para la prueba de flu o COVID?",
        "answer": "Puedes hacértela. Las pruebas rápidas funcionan mejor cuando ya hay síntomas, y si sale negativa muy al principio, el equipo médico puede indicarte repetirla si sigues mal. Cuéntanos cuándo empezó la fiebre o la tos y si alguien en tu casa está enfermo, porque esos datos ayudan a interpretar el resultado."
      },
      {
        "question": "Ya se me quitó la gripe, pero la tos no se va, ¿debo venir?",
        "answer": "Sí. Una tos que se queda después de un virus puede ser irritación que tarda en sanar, pero también bronquitis, asma o una infección nueva que necesita otro manejo. Ven sobre todo si hay flema verde, silbido al respirar o fiebre que regresa. Te escuchamos los pulmones y decidimos si necesitas algo más que reposo y líquidos."
      },
      {
        "question": "Varios en la casa tenemos fiebre, ¿podemos ir toda la familia juntos?",
        "answer": "Sí. Cada persona se registra y se evalúa por separado, niños y adultos. Avisa en recepción si alguien respira con dificultad, tiene los labios morados o está muy decaído, para que el equipo médico lo valore con prioridad. Usar cubrebocas al llegar ayuda a proteger a los demás pacientes de la sala."
      }
    ],
    "faqsEn": [
      {
        "question": "My fever just started. Is it too early for a flu or COVID test?",
        "answer": "You can still get tested. Rapid tests work best once symptoms are present, and if yours comes back negative very early, the medical team may suggest repeating it if you keep feeling sick. Tell us when the fever or cough began and whether anyone at home is ill, because that helps read the result."
      },
      {
        "question": "The flu is gone, but my cough won't go away. Should I come in?",
        "answer": "Yes. A lingering cough can be airway irritation that heals slowly, but it can also be bronchitis, asthma or a new infection that needs different care. Come in especially with green phlegm, wheezing or a fever that returns. We listen to your lungs and decide whether you need more than rest and fluids."
      },
      {
        "question": "Several of us at home have a fever. Can the whole family come in together?",
        "answer": "Yes. Each person checks in and is evaluated individually, kids and adults alike. Tell the front desk if someone is struggling to breathe, has bluish lips or seems unusually drowsy, so the medical team can look at them first. Wearing masks when you arrive helps protect the other patients in the waiting room."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Qué formulario tengo que traer para el examen físico de la escuela o del equipo deportivo?",
        "answer": "Trae el formulario que te dio la escuela, la liga o el entrenador, con la parte de los padres ya llena y firmada. Si no lo tienes, pregunta en la oficina escolar cuál usan, porque cada distrito o deporte puede pedir uno distinto. También ayuda traer la cartilla de vacunas y los lentes del niño si los usa."
      },
      {
        "question": "¿Tiene que venir el papá, la mamá o el tutor con el menor?",
        "answer": "Sí. Un menor de edad necesita a su padre, madre o tutor legal para dar el consentimiento y firmar lo que pida la escuela. El adulto también puede contarle al equipo médico sobre asma, alergias, cirugías o desmayos al hacer ejercicio, datos que los formularios deportivos suelen preguntar y que el niño a veces no recuerda."
      },
      {
        "question": "¿Qué pasa si en el examen aparece algo, como presión alta o mala visión?",
        "answer": "El equipo médico te explica el hallazgo y qué significa para la escuela o el deporte. A veces basta con repetir la medición; otras conviene un examen de la vista o la revisión de otro profesional, y en ese caso se orienta la referencia. Si hace falta, en el formulario se anotan los cuidados que debe tener el niño."
      }
    ],
    "faqsEn": [
      {
        "question": "Which form do I bring for my child's school or sports physical?",
        "answer": "Bring the form from the school, league or coach with the parent section already filled out and signed. If you don't have it, ask the school office which one they use, since districts and sports often have their own version. Your child's vaccine record and glasses, if they wear them, are useful too."
      },
      {
        "question": "Does a parent have to come with a minor?",
        "answer": "Yes. A parent or legal guardian needs to be there to give consent and sign whatever the school requires. You can also tell the medical team about asthma, allergies, past surgeries or fainting during exercise, which sports forms usually ask about and which kids don't always remember on their own."
      },
      {
        "question": "What if the physical turns up something, like high blood pressure or poor vision?",
        "answer": "The medical team explains what was found and what it means for school or sports. Sometimes a second reading is enough; other times an eye exam or a visit with another provider is a good idea, and a referral is arranged. Any precautions your child needs can be noted on the form."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Me puedo hacer el papanicolaou si estoy en mis días?",
        "answer": "Lo ideal es tomar la muestra en días sin sangrado, ya que la sangre puede tapar las células que se analizan. En los días previos evita las relaciones, las duchas vaginales y los óvulos o cremas vaginales. Si tienes un flujo raro o dolor que te preocupa, no esperes a que termine tu regla: ven y el equipo médico te revisa igual."
      },
      {
        "question": "Tengo comezón y un flujo con mal olor, ¿qué me hacen en la consulta?",
        "answer": "El equipo médico te pregunta por tus síntomas y, si hace falta, toma una muestra vaginal con un hisopo para saber si la causa son hongos, bacterias u otra cosa; con eso se indica el tratamiento. Si existe la posibilidad de una infección de transmisión sexual, también puedes hacerte las [pruebas de ETS](/services/enfermedades-transmision-sexual) en esa misma visita."
      },
      {
        "question": "Mi papanicolaou salió anormal, ¿quiere decir que tengo cáncer?",
        "answer": "No. La mayoría de los resultados anormales son cambios leves en las células, muchas veces por el virus del papiloma humano, que se vigilan. El equipo médico te explica qué tipo de cambio apareció y qué sigue: repetir la prueba más adelante, agregar la prueba de VPH o hacer una colposcopia, para la cual se orienta la referencia."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get a Pap smear while I'm on my period?",
        "answer": "It's better to come when you're not bleeding, since blood can make the sample harder to read. In the days before, skip sex, douching and vaginal creams or suppositories. If you have unusual discharge or pain that worries you, don't wait for your period to end; come in and the medical team will examine you anyway."
      },
      {
        "question": "I have itching and discharge with an odor. What happens at the visit?",
        "answer": "The medical team asks about your symptoms and, if needed, takes a vaginal swab to tell whether yeast, bacteria or something else is behind it, then recommends treatment. If a sexually transmitted infection is possible, you can also do [STI testing](/services/enfermedades-transmision-sexual) during that same visit."
      },
      {
        "question": "My Pap came back abnormal. Does that mean cancer?",
        "answer": "No. Most abnormal results are mild cell changes, often caused by HPV, that just need to be monitored. The medical team explains what kind of change was found and the next step: repeating the Pap later, adding an HPV test, or a colposcopy, for which a referral is arranged."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "Mi regla se atrasó apenas un poco, ¿ya me puedo hacer la prueba?",
        "answer": "La prueba de orina suele detectar la hormona del embarazo desde que tu regla no llega en la fecha esperada. Si tus ciclos son irregulares o te la haces muy pronto, puede salir negativa aunque estés embarazada; en ese caso el equipo médico puede sugerir la prueba en sangre, que mide la cantidad exacta de hCG."
      },
      {
        "question": "¿Es mejor usar la primera orina de la mañana para la prueba?",
        "answer": "Ayuda, porque está más concentrada y la hormona se detecta con más facilidad, sobre todo si el retraso es reciente. Si vienes en otro momento del día, procura no tomar mucha agua justo antes. Y si una prueba de farmacia te dio una línea tenue o confusa, trae una foto: nos sirve para orientarte mejor."
      },
      {
        "question": "Me salió positiva, ¿qué sigue ahora?",
        "answer": "El equipo médico confirma el resultado, calcula tus semanas a partir de tu última regla y revisa si los medicamentos que tomas son seguros. Te orienta sobre ácido fólico, alimentación y señales de alarma como sangrado o dolor fuerte, y sobre cómo empezar tu control prenatal; un [ultrasonido](/services/ultrasonido) puede ayudar a confirmar dónde está el embarazo."
      }
    ],
    "faqsEn": [
      {
        "question": "My period is only a little late. Can I test yet?",
        "answer": "A urine test usually picks up the pregnancy hormone once your period doesn't show up when expected. If your cycles are irregular or you test very early, it can read negative even if you are pregnant; in that case the medical team may suggest a blood test, which measures your exact hCG level."
      },
      {
        "question": "Does the time of day matter for a urine pregnancy test?",
        "answer": "It helps, because it's more concentrated and the hormone is easier to detect, especially early on. Coming in the afternoon is fine; just avoid gulping several glasses of water on the way. And if a drugstore test gave you a faint or confusing line, bring a photo of it so we can guide you."
      },
      {
        "question": "It's positive. What should I do next?",
        "answer": "The medical team confirms the result, estimates how far along you are from your last period and checks whether your current medicines are safe. You'll get guidance on folic acid, food and warning signs like bleeding or strong pain, plus how to start prenatal care; an [ultrasound](/services/ultrasonido) can help confirm where the pregnancy is."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué opciones anticonceptivas se inician aquí mismo en la consulta?",
        "answer": "En la consulta puedes iniciar pastillas anticonceptivas o la inyección. El equipo médico te pregunta por tu presión, si fumas, si tienes migraña con aura, si estás amamantando y qué otros medicamentos tomas, porque esos datos definen qué opción es segura para ti. Si prefieres un método de larga duración, se orienta la referencia para colocarlo."
      },
      {
        "question": "¿Necesito una prueba de embarazo antes de empezar el método?",
        "answer": "Muchas veces sí, sobre todo si tuviste relaciones sin protección desde tu última regla. Descartar un embarazo te permite empezar con tranquilidad, y puedes hacerte la [prueba de embarazo](/services/prueba-embarazo) en esa misma visita. El equipo médico también te dice si debes usar condón por un tiempo mientras el método empieza a protegerte."
      },
      {
        "question": "Las pastillas me dan náuseas o manchado entre reglas, ¿las dejo?",
        "answer": "No las suspendas por tu cuenta, porque podrías quedar sin protección. Esas molestias son comunes en los primeros meses y a veces mejoran si las tomas con comida o siempre a la misma hora. Ven a contarnos qué notas: el equipo médico puede cambiarte a otra pastilla o pasarte a la inyección si no te sientes bien."
      }
    ],
    "faqsEn": [
      {
        "question": "Which birth control methods can I start at the clinic?",
        "answer": "You can start birth control pills or the shot. The medical team asks about your blood pressure, smoking, migraines with aura, breastfeeding and any other medicines, since those details decide which option is safe for you. If you'd rather have a long-acting method, a referral is arranged to have it placed."
      },
      {
        "question": "Do I need a pregnancy test before starting?",
        "answer": "Often, yes, especially if you've had unprotected sex since your last period. Ruling out pregnancy lets you start with peace of mind, and you can take a [pregnancy test](/services/prueba-embarazo) during that same visit. The medical team also tells you whether to use condoms for a while until the method starts protecting you."
      },
      {
        "question": "The pill makes me nauseous or gives me spotting. Should I quit?",
        "answer": "Don't stop on your own, or you could be left unprotected. These side effects are common in the first months and sometimes ease if you take the pill with food or at the same time every day. Tell us what you notice; the medical team can switch you to another pill or move you to the shot."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "Me pusieron el implante en otra clínica o en otro país, ¿me lo pueden quitar aquí?",
        "answer": "Sí. Lo importante es que el equipo médico pueda sentirlo bajo la piel del brazo. Si sabes la marca o la fecha en que te lo colocaron, anótalo y tráelo. Si no se logra palpar, puede hacer falta un [ultrasonido](/services/ultrasonido) para ubicarlo antes de retirarlo, y te explicamos ese paso con calma."
      },
      {
        "question": "¿Duele cuando sacan el implante del brazo?",
        "answer": "La zona se adormece con anestesia local, así que lo normal es sentir presión o un pellizco al principio, no dolor. Se hace un corte muy pequeño para sacar la varilla y se cierra con una tira adhesiva y un vendaje. Después puede quedar un moretón o algo de sensibilidad que se quita sola."
      },
      {
        "question": "Si me lo quito, ¿puedo quedar embarazada enseguida?",
        "answer": "Sí, la fertilidad regresa pronto después del retiro, así que si no buscas un embarazo necesitas otro método desde ese momento. En la misma consulta puedes hablar de [anticonceptivos](/services/anticonceptivos) como pastillas o inyección. Si quieres ponerte un implante nuevo, se orienta la referencia para colocarlo y no quedarte sin protección."
      }
    ],
    "faqsEn": [
      {
        "question": "My implant was placed at another clinic or in another country. Can you remove it?",
        "answer": "Yes. What matters is that the medical team can feel it under the skin of your arm. If you know the brand or the date it went in, write it down and bring it. If it can't be felt, an [ultrasound](/services/ultrasonido) may be needed to locate it first, and we'll walk you through that step."
      },
      {
        "question": "Does implant removal hurt?",
        "answer": "The area is numbed with local anesthetic, so most people feel pressure or a quick pinch at the start rather than pain. A tiny cut lets the rod slide out, and it's closed with an adhesive strip and a bandage. A bruise or some tenderness afterward is normal and fades on its own."
      },
      {
        "question": "Can I get pregnant right after it comes out?",
        "answer": "Yes. Your body goes back to its usual fertility soon after the rod is out, so starting another method right away matters if a pregnancy isn't in your plans. You can talk through [birth control](/services/anticonceptivos) options like pills or the shot during the same visit. If you want a new implant, a referral is arranged so you're not left unprotected."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿A qué edad conviene empezar a revisar la próstata con el PSA?",
        "answer": "Es una decisión que se platica, no una regla fija: hacia los cincuenta suele tocarse el tema, y antes cuando hubo cáncer de próstata en tu papá o tus hermanos, o si eres afroamericano. El PSA es un análisis de sangre sencillo; el equipo médico te explica sus ventajas y sus límites para que decidas con información si hacértelo y cada cuánto repetirlo."
      },
      {
        "question": "Anduve en bicicleta y tuve relaciones ayer, ¿eso afecta mi PSA?",
        "answer": "Puede ser. Hay cosas que suben el valor por un tiempo, como eyacular, andar mucho en bicicleta o tener una infección urinaria. Por eso conviene evitar relaciones y el ciclismo intenso los días previos. Si tienes ardor o fiebre, dilo antes: puede ser mejor tratar primero la [infección urinaria](/services/infecciones-urinarias) y medir el PSA después."
      },
      {
        "question": "Mi PSA salió alto, ¿eso significa que tengo cáncer?",
        "answer": "No necesariamente. El PSA también sube cuando la próstata crece de forma benigna o cuando está inflamada. El equipo médico revisa tu edad, tus molestias al orinar y resultados anteriores, puede repetir el análisis y, si el valor sigue alto, se orienta la referencia para una evaluación más detallada de la próstata."
      }
    ],
    "faqsEn": [
      {
        "question": "When does a PSA check start making sense for me?",
        "answer": "There's no single age: the conversation usually starts in your fifties, sooner if prostate cancer runs in your father or brothers, or if you are Black. PSA is a simple blood test; the medical team walks you through its benefits and limits so you can make an informed choice about testing and how often to repeat it."
      },
      {
        "question": "I rode my bike and had sex yesterday. Will that affect my PSA?",
        "answer": "Possibly. A few things can push the number up for a while, such as ejaculation, long bike rides or a urinary infection. That's why it helps to skip sex and intense cycling in the days before. If you have burning or fever, mention it: treating a [urinary infection](/services/infecciones-urinarias) first and testing later may be the better order."
      },
      {
        "question": "My PSA came back high. Do I have cancer?",
        "answer": "Not necessarily. PSA also rises with benign prostate enlargement or inflammation. The medical team reviews your age, any urinary symptoms and past results, may repeat the test, and if the number stays high, a referral is arranged for a more detailed prostate evaluation."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿Tengo que venir en ayunas para mis análisis de sangre?",
        "answer": "Solo algunos lo piden, como la glucosa en ayunas o el perfil de lípidos; para esos lo usual es no comer nada después de la cena de la noche anterior y llegar tomando solo agua. El hemograma, la A1C o la prueba de tiroides normalmente no requieren ayuno. Si no sabes cuáles te tocan, escríbenos por WhatsApp antes de venir."
      },
      {
        "question": "¿Puedo pedir los análisis que yo quiero sin orden de otro proveedor?",
        "answer": "Sí. Dinos qué examen buscas o cuéntanos tus síntomas, y el equipo médico te ayuda a escoger el panel que tiene sentido para ti. Si ya tienes una orden de tu médico, tráela y la usamos. Para chequeos completos con precio de paquete, revisa las opciones vigentes en [promociones](/promociones)."
      },
      {
        "question": "Un resultado me salió marcado como alto o bajo, ¿debo preocuparme?",
        "answer": "No necesariamente. El ayuno, un medicamento o un cambio pasajero pueden sacar un valor de rango. El equipo médico lo revisa junto con tus síntomas y te explica en español qué significa, si conviene repetirlo, empezar tratamiento o llevar un control, por ejemplo dentro de la atención de [condiciones crónicas](/services/condiciones-cronicas)."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to fast for my blood work?",
        "answer": "Only some tests require it, like fasting glucose or a lipid panel; for those, the usual approach is eating nothing after dinner the night before and drinking only water. A CBC, A1C or thyroid test normally doesn't need fasting. Not sure which ones you're getting? Send us a WhatsApp message before you come in."
      },
      {
        "question": "Can I ask for specific lab tests without another provider's order?",
        "answer": "Yes. Tell us which test you want or describe your symptoms, and the medical team helps you pick the panel that makes sense for you. If another provider already gave you a lab order, bring it along and we'll work from it. For full checkups priced as a package, see the current offers on [promotions](/promociones)."
      },
      {
        "question": "One of my results is flagged high or low. Should I worry?",
        "answer": "Not necessarily. Fasting, a medicine or a temporary change can push a value out of range. The medical team reviews it alongside your symptoms and explains in plain language whether to repeat it, start treatment or keep it under watch, for example through [chronic condition care](/services/condiciones-cronicas)."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Tengo que aguantarme las ganas de orinar antes de llegar a la clínica?",
        "answer": "No tienes que sufrir, pero ayuda que no hayas orinado justo antes de llegar. Aquí te damos un vaso estéril y una toallita: limpias la zona de adelante hacia atrás, dejas caer el primer chorro en el inodoro y recoges la parte del medio. Así la muestra refleja mejor lo que pasa en tu vejiga."
      },
      {
        "question": "Me arde al orinar y voy al baño a cada rato, ¿qué me hacen en la visita?",
        "answer": "El equipo médico te pregunta por tus molestias, revisa si tienes fiebre o dolor en la espalda y te hace el examen de orina en la clínica y, si hay infección, sales con tu tratamiento el mismo día, junto con indicaciones claras sobre cómo tomarlo, cuánta agua beber y qué señales te obligan a regresar."
      },
      {
        "question": "¿Por qué a veces piden un urocultivo y cuándo debo volver?",
        "answer": "Si las infecciones se repiten, estás embarazada, tienes fiebre o el primer tratamiento no funcionó, el equipo médico puede enviar la orina a cultivo para saber qué bacteria la causa y qué antibiótico le hace efecto. Ese resultado tarda más que el examen de la clínica; si indica un cambio, te avisamos. Vuelve antes si aparecen escalofríos o dolor de espalda."
      }
    ],
    "faqsEn": [
      {
        "question": "Should I hold my urine before I get to the clinic?",
        "answer": "You don't need to suffer, but it helps if you haven't gone right before arriving. We give you a sterile cup and a wipe: clean front to back, let the first stream go into the toilet and catch the middle part. That way the sample better reflects what's happening in your bladder."
      },
      {
        "question": "It burns when I pee and I keep running to the bathroom. What happens at the visit?",
        "answer": "The medical team asks about your symptoms, checks for fever or back pain, and runs a urine test at the clinic and, if there is an infection, you leave with your treatment the same day, along with clear instructions on how to take it, how much water to drink and which warning signs mean you should come back."
      },
      {
        "question": "Why would I need a urine culture, and when should I return?",
        "answer": "If infections keep coming back, you're pregnant, you have a fever or the first treatment didn't work, the medical team may send your urine for a culture to find the exact bacteria and the antibiotic that works on it. That result takes longer than the in-clinic test; if it calls for a change, we let you know. Return sooner if chills or back pain appear."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Pasa algo si la muestra de heces se mezcla con orina o con agua del inodoro?",
        "answer": "Sí, ambas cosas pueden arruinar el análisis. Te damos un frasco limpio: coloca papel o un recipiente desechable sobre el inodoro, orina antes por separado y luego toma una porción con la paleta del frasco, de preferencia de las partes con moco o sangre si las hay. Cierra bien la tapa y anota la fecha."
      },
      {
        "question": "¿Cómo guardo la muestra si no puedo llevarla enseguida?",
        "answer": "Lo mejor es entregarla lo más fresca posible, porque algunos parásitos se dejan de ver cuando la muestra espera. Si no puedes venir pronto, guárdala bien cerrada dentro de una bolsa en el refrigerador, nunca en el congelador, y pregúntanos por WhatsApp cuánto puede esperar según el estudio que te indicaron."
      },
      {
        "question": "¿Qué pasa si encuentran parásitos o sangre en las heces?",
        "answer": "Si aparecen parásitos o una bacteria intestinal, el equipo médico te indica el tratamiento y te dice si conviene revisar también a quienes viven contigo. La sangre oculta tiene muchas causas, como hemorroides o irritación; según tu edad y tus síntomas se decide repetir la prueba o se orienta la referencia para estudiar el intestino con más detalle."
      }
    ],
    "faqsEn": [
      {
        "question": "Is it a problem if the stool sample touches urine or toilet water?",
        "answer": "Yes, both can spoil the test. We give you a clean container: lay paper or a disposable tray over the toilet, pee separately first, then scoop a portion with the container's spoon, ideally from any part with mucus or blood. Close the lid tightly and write the date on it."
      },
      {
        "question": "How should I store the sample if I can't bring it in right away?",
        "answer": "Fresh is best, since some parasites become harder to see as the sample sits. If you can't come straight over, keep it tightly closed inside a bag in the refrigerator, never the freezer, and ask us on WhatsApp how long it can wait for the specific test you were given."
      },
      {
        "question": "What happens if the test finds parasites or blood?",
        "answer": "When the lab spots parasites or a gut bacteria, you get a treatment plan from the medical team, plus advice on whether your household should be tested as well. Hidden blood has many causes, such as hemorrhoids or irritation; depending on your age and symptoms, the test may be repeated or a referral is arranged for a closer look at the bowel."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Cómo sé si el dolor de garganta de mi hijo puede ser strep?",
        "answer": "Lo sugieren la fiebre, las amígdalas rojas con placas blancas, los ganglios inflamados en el cuello y el dolor fuerte al tragar, muchas veces sin tos ni mocos. Es muy común en niños en edad escolar. Cuando hay tos, ronquera y nariz tapada suele ser un virus, pero el hisopado de garganta es la forma de salir de dudas."
      },
      {
        "question": "¿Le puedo dar pastillas para la garganta o enjuague bucal antes de la prueba?",
        "answer": "Es mejor no usar enjuague bucal ni pastillas para la garganta justo antes, porque pueden interferir con la muestra. Un medicamento para bajar la fiebre sí se puede dar; solo avísanos cuál tomó y a qué hora. El hisopo se pasa rápido por el fondo de la garganta y puede provocar una arcada breve, nada más."
      },
      {
        "question": "La prueba salió negativa, pero la garganta me sigue doliendo mucho, ¿qué sigue?",
        "answer": "Una prueba rápida negativa hace menos probable el estreptococo, aunque en niños y adolescentes a veces se confirma con un cultivo de garganta. El equipo médico también considera virus como flu, COVID o mononucleosis. Regresa si no puedes tragar líquidos, babeas o la fiebre no baja, y revisa también [enfermedades respiratorias](/services/enfermedades-respiratorias)."
      }
    ],
    "faqsEn": [
      {
        "question": "How can I tell if my child's sore throat might be strep?",
        "answer": "Clues include fever, red tonsils with white patches, swollen neck glands and painful swallowing, often without a cough or runny nose. It's very common in school-age kids. A cough, hoarse voice and stuffy nose point more toward a virus, but the throat swab is how you know for sure."
      },
      {
        "question": "Can I give throat lozenges or mouthwash before the test?",
        "answer": "It's better to skip mouthwash and throat lozenges right before, since they can interfere with the sample. A fever reducer is fine; just tell us which one your child took and when. The swab brushes the back of the throat quickly and may cause a brief gag, nothing more."
      },
      {
        "question": "The test was negative, but my throat still hurts a lot. Now what?",
        "answer": "A negative rapid test makes strep less likely, though in kids and teens it's sometimes confirmed with a throat culture. The medical team also considers viruses like flu, COVID or mono. Come back if you can't swallow liquids, are drooling or the fever won't come down, and see our [respiratory illness care](/services/enfermedades-respiratorias)."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Por qué tengo que regresar después de que me ponen la prueba de tuberculosis?",
        "answer": "El líquido de la prueba queda justo debajo de la piel del antebrazo y cualquier reacción tarda en formarse. Por eso el equipo médico debe medir la zona en persona dentro del periodo de lectura que te indiquen al aplicarla; una foto o tu propia medición no sirven para tu trámite. Si faltas a la lectura, hay que repetirla."
      },
      {
        "question": "¿Me puedo bañar o rascar el brazo donde me pusieron la prueba?",
        "answer": "Puedes bañarte como siempre y secar el brazo con suavidad. Evita rascarte, taparlo con curitas o ponerle cremas, porque eso puede irritar la piel y confundir la lectura. Sentir un poco de comezón es normal; solo no marques la zona con pluma ni la frotes, y regresa a la lectura con el brazo descubierto."
      },
      {
        "question": "¿Qué pasa si mi prueba de tuberculosis sale positiva?",
        "answer": "Un resultado positivo indica que tuviste contacto con la bacteria de la tuberculosis, no necesariamente que estés enfermo; la vacuna BCG que muchos recibimos de niños también puede influir. Lo usual es seguir con una radiografía de tórax y una revisión de síntomas como tos prolongada o fiebre, para lo cual se orienta la referencia, y te damos la documentación para tu trámite."
      }
    ],
    "faqsEn": [
      {
        "question": "Why do I have to come back after the TB skin test is placed?",
        "answer": "A small amount of fluid goes just under the skin of your forearm, and any reaction develops slowly. The medical team has to measure it in person during the reading window they give you when it's placed; a photo or your own measurement won't count for your paperwork. If you miss the reading, the test has to be redone."
      },
      {
        "question": "Can I shower or scratch the spot where the test was placed?",
        "answer": "Showering is fine; just pat the arm dry. Avoid scratching, covering it with a bandage or putting creams on it, since that can irritate the skin and confuse the reading. Mild itching is normal; just don't mark the area with a pen or rub it, and come to the reading with your arm uncovered."
      },
      {
        "question": "What if my TB test is positive?",
        "answer": "A positive result means you've been exposed to the TB bacteria, not necessarily that you're sick; the BCG vaccine many people got as children can also play a role. The usual next step is a chest X-ray and a check for symptoms like a long-lasting cough or fever, with a referral arranged, and you get documentation for your paperwork."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Puedo hacerme la prueba de ETS aunque no tenga ningún síntoma?",
        "answer": "Sí, y es buena idea. Infecciones como la clamidia o la sífilis pueden pasar mucho tiempo sin dar molestias y aun así contagiarse o causar daño. Si cambiaste de pareja, tuviste relaciones sin protección o tu pareja recibió un diagnóstico, el equipo médico revisa contigo qué pruebas tienen sentido en tu caso, sin juicios y con total discreción."
      },
      {
        "question": "¿Mi pareja se entera si salgo positivo?",
        "answer": "Tus resultados se comentan solo contigo, en privado y en tu idioma; nadie más los recibe. Lo que sí te recomendamos es avisarle a tu pareja para que también se revise, porque si solo una persona recibe tratamiento la infección puede regresar. Si le ayuda, tu pareja puede venir a la clínica de Braeswood para su propia evaluación."
      },
      {
        "question": "¿Qué pasa si una de mis pruebas sale positiva?",
        "answer": "El equipo médico te explica qué infección es, cómo se trata y qué cuidados tomar mientras completas el tratamiento, incluido cuándo es seguro volver a tener relaciones. Muchas de estas infecciones se curan con medicamentos que te llevas desde la clínica. Si quieres revisar varias infecciones a la vez, consulta el paquete de diagnóstico de ETS en [promociones](/promociones)."
      }
    ],
    "faqsEn": [
      {
        "question": "How soon after a possible exposure should I get tested?",
        "answer": "Each infection has its own window before a test can pick it up, so testing too early can give false reassurance. Tell the medical team when the exposure happened; they'll explain which tests make sense now and whether repeating one later is wise. If you already notice discharge, sores or burning when you urinate, come in rather than wait."
      },
      {
        "question": "Do I have to give details about my sex life during the visit?",
        "answer": "Only what helps choose the right tests: the type of contact, whether condoms were used, and roughly when. These questions are routine for the medical team and are asked privately, never in front of the waiting room. Being honest means you don't pay for tests you don't need or skip one that matters."
      },
      {
        "question": "What kind of sample is taken for STD testing?",
        "answer": "It depends on what's being checked. Some infections are found with a blood draw, others with a urine sample, and a sore or discharge may be tested with a swab. For a urine test, it helps not to urinate for a while before you arrive, so the sample is more concentrated and reliable."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Qué debo llevar si mi empleador me pidió la prueba de drogas?",
        "answer": "Trae una identificación oficial con foto y, si tu empresa te dio un formulario, una orden o un código de cuenta, tráelo también, porque ahí se indica qué tipo de prueba pidieron y a quién se envía el resultado. Si no te dieron nada por escrito, pregunta en recursos humanos antes de venir para que la prueba coincida con lo que necesitan."
      },
      {
        "question": "¿Los medicamentos que tomo pueden afectar el resultado?",
        "answer": "Algunos medicamentos con receta y ciertos productos de venta libre pueden interferir con una prueba de detección. Antes de dar la muestra, cuéntale al personal qué tomas y trae la caja o la receta si la tienes a mano. Esa información queda anotada y ayuda a interpretar cualquier resultado que no cuadre con lo esperado."
      },
      {
        "question": "¿Puedo hacerme la prueba de alcohol y drogas por mi cuenta, sin que la pida una empresa?",
        "answer": "Sí. Hay personas que la necesitan para un trámite personal, un proceso legal, un programa deportivo o simplemente para su tranquilidad. En ese caso te explicamos qué opciones hay y la documentación del resultado se te entrega a ti. Si el trámite tiene requisitos específicos, trae por escrito lo que te pidieron para revisarlo juntos."
      }
    ],
    "faqsEn": [
      {
        "question": "My new job emailed me about a drug screen. What should I do before coming in?",
        "answer": "Read the email closely for the type of test, any donor or account number, and a deadline. Print or save the form if there is one, and bring it with a photo ID. If the instructions are unclear, ask your employer before the visit, because a test that doesn't match their request may have to be repeated."
      },
      {
        "question": "What if I can't provide enough urine when I arrive?",
        "answer": "It happens more often than people think, especially when you're nervous. Let the staff know and they'll explain how to proceed so the sample still counts. It helps not to use the restroom right before the visit and to set aside some extra time that day instead of squeezing the test into a lunch break."
      },
      {
        "question": "Who receives my drug and alcohol test results?",
        "answer": "That depends on who ordered the test. When your company sets it up, the result is documented for them as part of the hiring or workplace process. When you come on your own, the paperwork is handed to you and you decide who sees it. If you're unsure, ask at check-in before giving the sample."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿Tengo que quitarme la camisa para el electrocardiograma?",
        "answer": "Sí, hace falta descubrir el pecho para colocar los electrodos adhesivos, aunque te damos una bata para que estés cómodo. Para que los parches adhieran, deja la loción corporal para después del estudio y elige una blusa o playera fácil de quitar en lugar de un vestido. Si tienes mucho vello en el pecho, a veces se rasuran zonas pequeñas."
      },
      {
        "question": "Si mi EKG sale normal, ¿ya puedo descartar cualquier problema del corazón?",
        "answer": "No necesariamente. El EKG muestra el ritmo y la actividad eléctrica del corazón en el momento del estudio, así que algunos problemas que van y vienen pueden no aparecer. Por eso el equipo médico lo interpreta junto con tus síntomas, tu presión y tus antecedentes, y si hace falta un estudio más detallado, se orienta la referencia adecuada."
      },
      {
        "question": "¿El electrocardiograma me sirve como requisito antes de una cirugía o para un trabajo?",
        "answer": "Sí, muchas personas lo piden como parte de la evaluación previa a una operación, de un examen laboral o para practicar deporte. Si tu cirujano o tu empresa te dio un formulario, tráelo para que el resultado quede documentado como lo solicitan. Si además te pidieron análisis, puedes completarlos con [exámenes de sangre](/services/examenes-sangre) en la misma visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Should I skip my heart or blood pressure medicine before an EKG?",
        "answer": "No, keep taking your medications as usual unless whoever ordered the test told you otherwise. Do bring a list of everything you take, with doses, because several drugs change heart rate and rhythm. The medical team needs that context to read your tracing correctly and avoid flagging an expected change as a problem."
      },
      {
        "question": "Does an EKG send electricity or radiation into my body?",
        "answer": "Neither. The electrodes only listen: they pick up the tiny electrical signals your heart already produces and send nothing back. There's no radiation and no needles, just cool sticky pads on your chest, arms and legs, which is why the test is considered safe during pregnancy and can be repeated whenever it's needed."
      },
      {
        "question": "When is a fluttering heartbeat worth getting an EKG for?",
        "answer": "If you notice a racing, pounding or irregular heartbeat, skipped beats, shortness of breath with light effort or dizzy spells, it's worth getting checked. Chest pain that feels crushing, spreads to the arm or jaw, or comes with sweating and nausea is different: call 911 instead of driving yourself anywhere."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿Tengo que ir en ayunas o con la vejiga llena para el ultrasonido?",
        "answer": "Depende de la zona que se va a estudiar. Para revisar la vesícula o el hígado suele pedirse ayuno, mientras que en un ultrasonido pélvico a veces conviene llegar con la vejiga llena porque mejora la imagen. Escríbenos por WhatsApp antes de venir, dinos qué estudio necesitas y te decimos cómo prepararte para no tener que repetirlo."
      },
      {
        "question": "¿Puedo ver a mi bebé durante el ultrasonido de embarazo?",
        "answer": "Sí, en el ultrasonido de control te mostramos la pantalla y te explicamos en español lo que se observa, como el latido y el crecimiento del bebé según la etapa en la que estés. Si todavía no confirmas el embarazo, puedes empezar con una [prueba de embarazo](/services/prueba-embarazo) y después seguir con el ultrasonido."
      },
      {
        "question": "¿Qué se puede ver en un ultrasonido de tiroides o de un bulto en la piel?",
        "answer": "Permite medir la glándula tiroides y saber si un nódulo o un bulto bajo la piel es sólido o tiene líquido, algo que no se distingue solo con tocarlo. Con esa información el equipo médico decide si basta con vigilarlo, si hacen falta análisis o si conviene orientar la referencia a un especialista para un estudio más profundo."
      }
    ],
    "faqsEn": [
      {
        "question": "Is an ultrasound safe if I'm pregnant?",
        "answer": "Yes. Ultrasound builds the picture with sound waves rather than X-rays, so neither you nor the baby is exposed to radiation. That's why it's the standard way to follow a pregnancy, and also a sensible first look when pelvic pain or irregular bleeding needs to be checked before anything more involved is ordered."
      },
      {
        "question": "Can I get an ultrasound without an order from another doctor?",
        "answer": "Yes. You can walk in, and the medical team first asks about your symptoms to decide which scan actually answers your question, whether abdominal, pelvic or thyroid. If another provider did give you an order, bring it along so the ultrasound covers exactly the areas they want to see."
      },
      {
        "question": "Does the scan hurt, and why is the gel so cold?",
        "answer": "The scan itself is painless, though you may feel some pressure over a tender belly or a full bladder. The gel removes air between the probe and your skin so the sound waves travel cleanly; it's cool and a bit sticky and wipes right off. Loose, two-piece clothing makes the area easy to reach."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿Qué debo llevar al examen físico DOT si tomo medicamentos o tengo diabetes?",
        "answer": "El día del examen no olvides tu CDL, los lentes o el aparato auditivo con los que manejas y una hoja con cada medicamento y su dosis. Si tienes diabetes, presión alta, apnea del sueño o algún problema del corazón, ayuda mucho llevar notas recientes de tu médico o resultados de control, porque el examinador necesita ver que la condición está bajo control."
      },
      {
        "question": "¿La muestra de orina del examen DOT es una prueba de drogas?",
        "answer": "No. En el examen físico DOT la orina se usa para revisar azúcar, proteína y sangre, señales que pueden indicar un problema de riñón o una diabetes sin controlar. La prueba de drogas es un trámite aparte que suele pedir tu empresa; pregunta qué tipo necesitan y revisa nuestro servicio de [examen de alcohol y drogas](/services/examen-alcohol-drogas)."
      },
      {
        "question": "¿Qué pasa si tengo la presión alta el día del examen DOT?",
        "answer": "No siempre significa quedarte sin certificado: según la cifra, las normas federales pueden permitir una certificación por un periodo más corto mientras la controlas. Para llegar en mejores condiciones, toma tus medicamentos como siempre, evita el café y las bebidas energéticas antes del examen y descansa bien la noche anterior. Si necesitas tratamiento, revisa [condiciones crónicas](/services/condiciones-cronicas)."
      }
    ],
    "faqsEn": [
      {
        "question": "How long is a DOT medical card good for?",
        "answer": "Up to two years, but the examiner can issue a shorter card when a condition such as high blood pressure or diabetes needs closer follow-up. Note the expiration date and come in a few weeks early, because driving a commercial vehicle with an expired medical card can put your CDL status at risk."
      },
      {
        "question": "Do I need records for sleep apnea or a heart condition?",
        "answer": "It helps a lot. Bring recent notes from the provider who treats you, and your CPAP usage report if you use one, so the examiner can see the condition is well managed. Without that paperwork, the exam may end with a request for more information instead of a card, which means a second trip."
      },
      {
        "question": "What do the vision and hearing checks on a DOT physical look at?",
        "answer": "The vision check measures how sharply you see with each eye and both together, your side vision, and whether you can tell apart the red, green and amber of traffic signals. Hearing is tested with a forced whisper at a set distance or with an audiometer. Wear the same glasses, contacts or hearing aid you rely on behind the wheel."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿Qué registros de vacunas tengo que traer al examen de inmigración?",
        "answer": "Busca todo lo que tengas: cartilla de vacunación de tu país, constancias escolares o comprobantes de vacunas recibidas en Estados Unidos. Aunque estén en español o incompletos, sirven para que el Civil Surgeon designado por USCIS revise qué te falta. Lo que no puedas comprobar se resuelve aplicando la vacuna o con un análisis que demuestre que ya estás protegido."
      },
      {
        "question": "¿Tengo que conseguir el formulario I-693 antes de venir?",
        "answer": "No es obligatorio llegar con él lleno. Puedes descargar la versión vigente en la página de USCIS sobre el [I-693](https://www.uscis.gov/i-693) y completar tus datos personales, pero la parte médica la llena y firma el Civil Surgeon. Trae también tu pasaporte u otra identificación con foto y tu número de extranjero (A-Number) si ya lo tienes."
      },
      {
        "question": "¿Por qué no me entregan el sobre sellado al terminar el examen físico?",
        "answer": "Porque el formulario solo puede cerrarse cuando están listos todos los análisis requeridos, como la prueba de tuberculosis y la de sífilis, y se completaron las vacunas que te faltaban. Si algún resultado necesita una prueba adicional, el proceso se alarga un poco. Te avisamos cuando el sobre esté listo; no lo abras, porque USCIS puede rechazarlo."
      }
    ],
    "faqsEn": [
      {
        "question": "Who is allowed to do my green card medical exam?",
        "answer": "Only a Civil Surgeon designated by USCIS can complete Form I-693 for an adjustment of status case; an exam from your regular family doctor won't be accepted. At this Meyerland location, the physical exam, the required lab work and any missing vaccines are handled under one roof, with every step explained in Spanish or English."
      },
      {
        "question": "My spouse and children are filing too. Can we come together?",
        "answer": "Yes. Each person needs their own I-693, but the family can be seen during the same visit, which saves trips. Bring each person's passport or photo ID and every vaccine record you can find, including school records for the kids, since requirements vary with age and missing doses are caught up as part of the process."
      },
      {
        "question": "What if my tuberculosis screening comes back positive?",
        "answer": "A positive screening doesn't automatically mean you have active tuberculosis or that your case will be denied. It usually leads to a chest X-ray and, if needed, further evaluation under the USCIS technical instructions. Mention any past TB treatment or BCG vaccine; you can read more on our [tuberculosis testing](/services/prueba-tuberculosis) page."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Cada cuánto necesito un refuerzo contra el tétanos?",
        "answer": "En adultos se recomienda un refuerzo cada diez años. Pero si te cortaste con algo sucio u oxidado, te mordió un animal o tienes una herida profunda y no recuerdas tu última dosis, conviene ponértelo antes. Si además la herida necesita puntos, puedes atenderla en [suturas de heridas](/services/suturas-heridas) durante la misma visita."
      },
      {
        "question": "¿Puedo vacunarme contra la flu si estoy resfriado o tomando antibióticos?",
        "answer": "Un resfriado leve sin fiebre normalmente no impide vacunarte, y tomar antibióticos tampoco. Si tienes fiebre alta o te sientes muy mal, es mejor esperar a recuperarte. Antes de aplicarla, el equipo médico te pregunta por alergias y reacciones anteriores, así que menciona si alguna vez una vacuna te cayó fuerte o si estás embarazada."
      },
      {
        "question": "¿Cuándo conviene ponerse la vacuna de la influenza en Houston?",
        "answer": "Lo ideal es a principios del otoño, en septiembre u octubre, antes de que el virus circule con fuerza, aunque aplicarla más adelante en la temporada sigue valiendo la pena. La protección baja con los meses y el virus cambia, por eso se repite cada año. Puedes pasar a la clínica de S Braeswood cualquier día de la semana."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get a flu shot and a tetanus booster at the same visit?",
        "answer": "Yes, the two can be given at one visit, usually one in each arm. That's convenient if you're catching up after a cut or scrape just as flu season starts. Let the medical team know about past vaccine reactions and whether you might be pregnant, since that guides which product is used."
      },
      {
        "question": "Is a sore arm after a vaccine normal?",
        "answer": "Yes. Soreness, redness or mild swelling where the needle went in is common and usually fades within a day or two; moving the arm gently helps. A low-grade fever or feeling tired can happen too. Hives, swelling of the lips or face, or trouble breathing are not normal: call 911 right away."
      },
      {
        "question": "I got a flu shot last year. Do I need another one?",
        "answer": "Yes. Each fall's shot is reformulated for the strains expected that winter, and whatever protection you built from last year's dose wears down over time. Getting it every fall keeps you covered, and it matters even more if you live with young children, older adults or someone with diabetes or lung disease."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Cómo es la aplicación de un suero vitaminado en la clínica?",
        "answer": "Primero el equipo médico te hace unas preguntas sobre tu salud y toma tus signos vitales. Luego se coloca una vía en una vena del brazo y el suero pasa poco a poco mientras descansas sentado en un sillón. Durante la aplicación el personal está pendiente de cómo te sientes, y al terminar retira la vía y cubre el punto con una gasita."
      },
      {
        "question": "¿Hay personas que no deben recibir un suero vitaminado?",
        "answer": "Sí. Antes de aplicarlo se revisa si tienes enfermedad de los riñones o del corazón, presión descontrolada, embarazo o alergias, porque en esos casos el líquido extra o algunos componentes pueden no convenirte. Si alguno aplica a tu caso, se habla contigo de otras opciones. Trae la lista de tus medicamentos para que la revisión sea completa."
      },
      {
        "question": "¿Puedo manejar o volver al trabajo después del suero?",
        "answer": "En general sí: lo habitual es salir caminando y seguir con tu día como siempre. Si sueles marearte con las agujas o al ver sangre, avísalo al llegar para que te recuesten y estén contigo. Come algo ligero antes de venir y, si en algún momento sientes ardor o molestia en el brazo, dilo enseguida para revisar la vía."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need a health check before an IV drip?",
        "answer": "Yes, every drip starts with a short review of your health history, current medications and vital signs. That review decides whether an IV is appropriate for you that day. Be upfront about kidney or heart problems, pregnancy and allergies, since any of them can change the plan or rule the drip out."
      },
      {
        "question": "Does the IV needle hurt?",
        "answer": "You'll feel a quick pinch as it goes in; after that, only a thin flexible tube stays in the vein, not the needle. Some people notice a cool feeling in the arm as the fluid runs. If you've had trouble with IVs before or your veins are hard to find, tell the staff so they can take extra care."
      },
      {
        "question": "Can I come in for an IV drip on a Saturday or Sunday?",
        "answer": "Yes, the Braeswood clinic sees walk-in patients on weekends with the same 9 AM to 9 PM schedule as weekdays. Arriving earlier in the day leaves room for the health check and the drip itself, and eating a light meal beforehand helps if you tend to feel lightheaded around needles."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Cómo sé si mi cortada necesita puntos o basta con una curita?",
        "answer": "Suele necesitar puntos si los bordes se separan al mover la zona, si se ve grasa o tejido debajo de la piel, si es larga o profunda, o si sigue sangrando después de presionarla con firmeza un buen rato. Las heridas en la cara, las manos o cerca de una articulación también conviene revisarlas, aunque parezcan pequeñas."
      },
      {
        "question": "¿Cuánto puedo esperar antes de que me cosan la herida?",
        "answer": "Mientras antes, mejor: con el paso de las horas aumenta el riesgo de infección y a veces ya no es seguro cerrarla con puntos. De camino a la clínica, enjuaga el corte bajo el chorro de la llave y aprieta encima un trapo o gasa limpia sin levantarlo a cada rato. Si el sangrado no para, hay un objeto clavado o perdiste sensibilidad en un dedo, llama al 911."
      },
      {
        "question": "¿Cuándo me quitan los puntos y tengo que regresar?",
        "answer": "Depende de la zona: en la cara se retiran antes que en la espalda, las rodillas o las manos, donde la piel se estira más. Al cerrar la herida te indicamos cuándo volver, y el retiro de puntos se hace aquí mismo, sin cita. Hasta entonces mantén la herida seca y vigila enrojecimiento, calor o pus."
      }
    ],
    "faqsEn": [
      {
        "question": "Will getting stitches hurt?",
        "answer": "The area is numbed with a local anesthetic first, so the sting you feel comes mostly from that injection. Once it works, you may notice tugging or pressure while the wound is cleaned and closed, but not sharp pain. The numbness wears off over the next few hours, and over-the-counter pain relievers are usually enough."
      },
      {
        "question": "Can I shower with stitches?",
        "answer": "Brief showers are usually fine once the first day has passed, as long as you pat the area dry afterward. Don't soak the wound in a bath, pool or hot tub until the stitches are out, and skip ointments or home remedies you weren't told to use. Swimming on a hot Houston weekend can wait."
      },
      {
        "question": "Do I need a tetanus shot when I get stitches?",
        "answer": "If your last tetanus booster was more than five years ago and the cut was dirty, or you can't remember when you had it, the medical team will likely recommend one. It can be given at the same visit through our [vaccine service](/services/vacunas), so there's no need for a separate trip."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Cada cuánto tengo que venir a cambiar el vendaje?",
        "answer": "Depende del tipo de herida y de cuánto líquido suelte. Una herida limpia y seca puede revisarse cada pocos días, mientras que una úlcera o una quemadura que drena necesita cambios más seguidos. En la primera curación te decimos cuándo regresar y qué hacer en casa entre una visita y otra, incluido cómo bañarte sin mojar el apósito."
      },
      {
        "question": "Me operaron en otro lugar, ¿pueden hacerme aquí las curaciones?",
        "answer": "Sí, muchas personas prefieren curar una herida de cirugía cerca de casa en lugar de volver al hospital. Trae las indicaciones que te dio tu cirujano y la lista de tus medicamentos para seguir el mismo plan. Si notamos señales de infección o que la herida se abre, te lo explicamos y, si hace falta, se orienta la referencia."
      },
      {
        "question": "¿Por qué mi herida no termina de cerrar?",
        "answer": "Varias cosas retrasan el cierre: azúcar alta que no se ha controlado, piernas con poca circulación, el cigarro, apoyar el peso sobre la herida o bacterias que no se ven a simple vista. Durante las curaciones el equipo médico revisa esas causas y, si sospecha que el azúcar está alta, puede pedir [exámenes de sangre](/services/examenes-sangre) para tratar el problema de fondo."
      }
    ],
    "faqsEn": [
      {
        "question": "What signs mean my wound is getting infected?",
        "answer": "Watch for redness spreading beyond the edges, pain or warmth that increases after the first few days, thick yellow or green drainage, a bad smell or fever. Any of these is a reason to come in rather than wait for your next planned dressing change, because an infection caught early is much easier to treat."
      },
      {
        "question": "Should I keep my wound covered or let it air out?",
        "answer": "Most wounds heal better under a dressing, in a clean and slightly moist environment, than exposed to air, where a hard scab forms and slows new skin. The medical team chooses the dressing based on how much the wound drains and where it is, and shows you how to change it at home if needed."
      },
      {
        "question": "Can you treat a small burn from cooking?",
        "answer": "Yes, small burns from hot oil, boiling water or a pan can be cleaned and dressed here. Right away, cool the area under running cool water, not ice, and don't pop blisters. Large burns, burns on the face, hands or genitals, and chemical or electrical burns need hospital care instead."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué bultos o lesiones se pueden quitar con una cirugía menor?",
        "answer": "Lunares, quistes sebáceos, lipomas y otras lesiones pequeñas de la piel o justo debajo de ella suelen poder retirarse en la clínica con anestesia local. Primero el equipo médico examina el bulto para confirmar que es seguro hacerlo de forma ambulatoria; si es muy grande, profundo o está en una zona delicada, se orienta la referencia."
      },
      {
        "question": "¿Lo que me quitan se manda a analizar?",
        "answer": "Cuando un lunar cambió de color o de forma, o una lesión tiene un aspecto que conviene confirmar, se puede enviar la muestra a patología para estudiarla al microscopio. El equipo médico te dice antes del procedimiento si en tu caso se recomienda y, cuando llega el informe, te explica qué significa y si hace falta algo más."
      },
      {
        "question": "¿Qué cuidados tengo que tener después de quitarme un quiste?",
        "answer": "Mantén el vendaje limpio y seco el primer día, evita cargar peso o hacer ejercicio fuerte que estire la zona y no rasques los puntos. Un poco de molestia es normal y suele mejorar con analgésicos comunes. Regresa antes si la zona se pone roja, caliente o supura, y vuelve en la fecha indicada para el retiro de puntos."
      }
    ],
    "faqsEn": [
      {
        "question": "Will a minor procedure leave a scar?",
        "answer": "Any cut through the skin leaves some mark, but the incision is kept as small as possible and lined up with the natural creases of the skin. Following the aftercare instructions, not picking at scabs and protecting the area from the Texas sun for several months all help the scar fade and flatten."
      },
      {
        "question": "Do I need someone to drive me home afterward?",
        "answer": "Usually not. Local anesthesia numbs only the area being treated, so you stay fully awake and alert. The exception is a procedure on the foot or hand you use to drive, where a bulky dressing or soreness can make driving unsafe; in that case, bring someone along or plan a ride."
      },
      {
        "question": "Can a cyst be removed while it's red and swollen?",
        "answer": "Often not right away. An inflamed, painful cyst is usually drained first to calm the infection, which is handled through [abscess drainage](/services/drenaje-abscesos), and the cyst wall is removed later once the area has settled. Taking it out in a calm stage lowers the chance that it fills up and comes back."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿Por qué no debo reventarme el absceso en casa?",
        "answer": "Exprimirlo o pincharlo en casa suele dejar parte del pus atrapado y puede llevar las bacterias más adentro de la piel. En la clínica se abre con instrumental estéril y anestesia local, se vacía por completo y se limpia la cavidad, lo que reduce la probabilidad de que vuelva a llenarse."
      },
      {
        "question": "¿Siempre me van a dar antibiótico después del drenaje?",
        "answer": "No siempre. Cuando el absceso es chico y quedó bien vaciado, abrirlo y limpiarlo muchas veces basta por sí solo. El antibiótico se agrega si hay fiebre, enrojecimiento que se extiende alrededor, diabetes u otra condición que baje las defensas, o si la infección está en una zona delicada como la cara. Si te lo indican, te explicamos cómo tomarlo y por cuánto tiempo."
      },
      {
        "question": "Ya es el tercer absceso que me sale este año, ¿qué puede estar pasando?",
        "answer": "Detrás de los casos repetidos suele haber estafilococo que vive en la piel o la nariz, roce constante de ropa ajustada, vellos encarnados por rasurarse o azúcar elevada. El equipo médico revisa tus antecedentes, puede tomar una muestra del pus para cultivo y, si sospecha diabetes, revisarte con [exámenes de sangre](/services/examenes-sangre). También te da medidas de higiene para cortar el ciclo."
      }
    ],
    "faqsEn": [
      {
        "question": "How can I tell if a painful bump is an abscess?",
        "answer": "An abscess is usually a red, warm, tender lump that feels firm at first and softer as pus collects, sometimes with a white or yellow head. A pimple is smaller and stays on the surface. If the bump keeps growing, hurts more each day or comes with fever, have it examined."
      },
      {
        "question": "What happens after the abscess is drained?",
        "answer": "The cavity may be lightly packed with gauze or left to drain, then covered with a dressing. You'll get instructions for warm compresses and dressing changes, and you may be asked to come back so the packing can be removed and healing checked. Some drainage over the following days is expected."
      },
      {
        "question": "Is my spider bite really an abscess?",
        "answer": "Many bumps people blame on spider bites turn out to be skin infections, often caused by staph bacteria, that form an abscess. That's why a painful, swelling bite deserves an exam instead of home treatment. If pus has collected under the skin, draining it is usually what brings relief and lets the infection clear."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Qué puedo hacer en casa mientras llego a la clínica?",
        "answer": "Remojar el pie en agua tibia con jabón un par de veces al día, secarlo bien y usar zapatos abiertos o amplios alivia la presión. Evita cortar tú mismo la esquina de la uña o meter objetos debajo, porque suele empeorar la infección. Si hay pus, la piel está muy roja o tienes diabetes, ven a revisarte pronto."
      },
      {
        "question": "¿Me van a quitar toda la uña?",
        "answer": "Casi nunca hace falta. Lo habitual es retirar solo la franja lateral que se está clavando en la piel, con el dedo dormido con anestesia local. Si la uña se encarna una y otra vez, se puede tratar la raíz de esa franja para que no vuelva a crecer en esa orilla, y el resto de la uña se queda como está."
      },
      {
        "question": "Ya me trataron la uña, ¿qué cambio para que no se encarne de nuevo?",
        "answer": "Al recortarlas, sigue el borde recto de la uña y deja las esquinas un poco por fuera de la piel en vez de redondearlas o cortarlas al ras. Usa calzado con espacio para los dedos, sobre todo si pasas muchas horas de pie o con botas de seguridad en el trabajo. Si tienes diabetes o mala circulación, revisa tus pies todos los días y consulta ante cualquier herida."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I walk normally after ingrown toenail treatment?",
        "answer": "Most people walk out on their own wearing an open-toe sandal or a loose shoe. The toe may throb once the anesthetic wears off, and keeping the foot raised that evening helps. Skip running, tight shoes and long stretches on your feet for the next several days while the nail edge heals."
      },
      {
        "question": "Is an ingrown toenail more serious if I have diabetes?",
        "answer": "Yes. Diabetes can dull feeling in the feet and slow healing, so a small infection at the nail edge can spread before you notice. Avoid bathroom surgery with clippers and have it checked early. Keeping blood sugar steady through [chronic condition care](/services/condiciones-cronicas) also helps the toe heal faster."
      },
      {
        "question": "Why does my ingrown toenail keep coming back?",
        "answer": "Common reasons are cutting the nail with rounded corners, tight or pointed shoes, sweaty feet in work boots, and a nail that naturally curves inward. If it returns again and again, the medical team can treat the root of the problem edge so that strip of nail stops growing, which usually ends the cycle."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo llevarme los medicamentos al terminar la consulta?",
        "answer": "Sí: cuando terminas tu visita en la sede de S Braeswood, los medicamentos indicados en la consulta se entregan en la clínica junto con las instrucciones por escrito en español sobre la dosis y el horario, así que no necesitas manejar a otra farmacia ni hacer otra parada antes de empezar el tratamiento."
      },
      {
        "question": "¿También tienen medicamentos de venta libre?",
        "answer": "Sí, hay productos de venta libre para molestias comunes como dolor, fiebre, gripe o alergias. Si no sabes cuál te conviene o ya tomas otros medicamentos, pregunta al personal antes de llevártelo, porque algunas combinaciones no son buenas para la presión alta, el estómago o el embarazo, y conviene elegir con esa información."
      },
      {
        "question": "¿Qué hago si olvido una dosis o el medicamento me cae mal?",
        "answer": "Revisa las indicaciones escritas que recibiste con tu tratamiento, donde viene qué hacer si se te pasa una toma. Si tienes náusea fuerte, ronchas o cualquier reacción que te preocupe, deja de tomarlo y escríbenos por WhatsApp o ven a revisarte. Si se te hinchan la cara o los labios o te cuesta respirar, llama al 911."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to stop at another pharmacy after my visit?",
        "answer": "Usually not. The medications indicated during your visit are handed to you at the clinic before you leave, together with written instructions on the dose, the timing and whether to take them with food, so you can start treatment without an extra stop on the way home to Meyerland or Bellaire."
      },
      {
        "question": "Can the staff tell me if a cold medicine is safe with my blood pressure pills?",
        "answer": "Yes, ask before you pick one. Some over-the-counter cold and sinus products contain decongestants that can raise blood pressure or speed up the heart, and certain pain relievers aren't a good fit for people with kidney or stomach problems. Bring your medication list so the advice matches what you already take."
      },
      {
        "question": "Should I finish my antibiotics even if I feel better?",
        "answer": "Yes, finish the full course as directed by the medical team. Feeling better means the infection is retreating, not necessarily gone, and stopping early can let it return or make the bacteria harder to treat next time. If side effects such as diarrhea or a rash make it hard to continue, contact the clinic before stopping."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
