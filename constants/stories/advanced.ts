import { QuestData, QuestLevel } from '../../types';

export const ADVANCED_QUESTS: QuestData[] = [
  {
    title: "El Barrilete Cósmico de Maradona",
    level: QuestLevel.ADVANCED,
    passage: "No fue solo un gol. Fue el 22 de junio de 1986, en el Mundial de México. Diego Maradona tomó la pelota en su propio campo y empezó a correr. Dejó en el camino a cinco jugadores ingleses, incluido el arquero, y marcó el que sería llamado 'El Gol del Siglo'. El relator de radio, Víctor Hugo Morales, en medio de la emoción, gritó: '¡Barrilete cósmico! ¿De qué planeta viniste?'. La frase quedó para siempre. No era solo un jugador de fútbol; era un artista, un genio que parecía venir de otro mundo. Ese gol no fue una victoria deportiva; fue un momento de alegría y orgullo para un país entero, una obra de arte creada con los pies.",
    vocabulary: [
      { word: "Barrilete", definition: "Cometa, un juguete que vuela con el viento sujeto por un hilo." },
      { word: "Cósmico", definition: "Relativo al universo, inmenso, extraordinario." },
      { word: "Relator", definition: "Persona que narra o comenta un evento, especialmente deportivo, en la radio o la televisión." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Contra qué equipo marcó Maradona el 'Gol del Siglo'?",
        options: ["Brasil", "Alemania", "Italia", "Inglaterra"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué apodo le puso el relator a Maradona durante ese gol?",
        options: ["El Pibe de Oro", "El Diez", "Barrilete Cósmico", "El Rey del Fútbol"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El 'Gol del Siglo' es recordado como...",
        options: ["Un gol de suerte", "Un gol polémico", "Una obra de arte y un momento de orgullo nacional", "Un gol sin importancia"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Petiso Orejudo: El Ángel y el Demonio",
    level: QuestLevel.ADVANCED,
    passage: "A principios del siglo XX, Buenos Aires se aterrorizó por una serie de crímenes atroces contra niños. El culpable era un adolescente de aspecto casi angelical llamado Cayetano Santos Godino, apodado 'El Petiso Orejudo'. A pesar de su apariencia inofensiva, Godino sentía un placer oscuro en causar dolor. Sus crímenes, que incluían incendios y ataques a niños pequeños, lo convirtieron en el primer asesino en serie de la historia argentina. Su caso estremeció a la sociedad y cambió para siempre la forma en que se percibía la criminalidad. Fue un recordatorio sombrío de que el mal puede esconderse detrás de la cara más inesperada.",
    vocabulary: [
      { word: "Atroz", definition: "Extremadamente cruel o inhumano." },
      { word: "Inofensivo", definition: "Que no puede causar daño." },
      { word: "Sombrío", definition: "Triste, melancólico, oscuro." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Quién era 'El Petiso Orejudo'?",
        options: ["Un personaje de un cuento de hadas", "Un famoso detective", "El primer asesino en serie de Argentina", "Un político corrupto"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué hacía que sus crímenes fueran especialmente aterradores para la sociedad?",
        options: ["Que robaba grandes cantidades de dinero", "Que sus víctimas eran niños y él tenía una apariencia inofensiva", "Que usaba métodos muy sofisticados", "Que nunca fue atrapado"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El caso del 'Petiso Orejudo' fue un recordatorio de que...",
        options: ["La policía siempre resuelve los casos rápidamente", "Todos los criminales parecen malvados", "El mal puede esconderse detrás de una apariencia inocente", "Los niños siempre están seguros en la ciudad"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Quilmes: De la Resistencia a la Cerveza",
    level: QuestLevel.ADVANCED,
    passage: "La ciudad de Quilmes, en Buenos Aires, tiene un nombre con una historia de doble filo. Originalmente, era el lugar donde los conquistadores españoles exiliaron al pueblo Quilmes de Tucumán, forzándolos a una caminata mortal de 1200 km. La reducción 'Exaltación de la Santa Cruz de los Quilmes' fue el fin de una cultura. Siglos después, en el mismo lugar, un inmigrante alemán fundó una cervecería y la llamó 'Quilmes'. La cerveza se convirtió en un ícono nacional, sinónimo de amistad y fútbol. El nombre que una vez representó una tragedia, hoy es una de las marcas más queridas del país. Es una extraña paradoja argentina, donde la historia de dolor y la de celebración comparten el mismo nombre.",
    vocabulary: [
      { word: "Exilio", definition: "Expulsión o autoexclusión de la propia patria." },
      { word: "Reducción", definition: "Asentamientos en los que los españoles reubicaban a las poblaciones indígenas para controlarlas y evangelizarlas." },
      { word: "Paradoja", definition: "Un hecho o una frase que parece oponerse a los principios de la lógica." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es el origen del nombre de la ciudad de Quilmes en Buenos Aires?",
        options: ["Viene de un cerro cercano", "Es el lugar donde exiliaron al pueblo Quilmes", "Fue el apellido del fundador", "Significa 'lugar de encuentro' en guaraní"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La famosa cerveza argentina 'Quilmes' fue fundada por...",
        options: ["Descendientes del pueblo Quilmes", "El gobierno argentino", "Un inmigrante alemán", "Una empresa inglesa"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La paradoja del nombre 'Quilmes' es que representa...",
        options: ["La guerra y la paz", "La riqueza y la pobreza", "Una historia de tragedia y una marca de celebración", "La montaña y el mar"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Fantasma de la Ópera de Buenos Aires",
    level: QuestLevel.ADVANCED,
    passage: "El Teatro Colón no solo es famoso por su acústica perfecta, sino también por sus leyendas. Se dice que en sus pasillos y palcos vaga el fantasma de un arquitecto. La historia cuenta que el arquitecto original, Vittorio Meano, fue asesinado antes de poder terminar su obra maestra. Un segundo arquitecto continuó, pero también murió antes de la inauguración. Finalmente, un tercer arquitecto belga completó el teatro. Algunos empleados y artistas afirman haber sentido una presencia fría o haber escuchado susurros en los pasillos vacíos. Creen que es el espíritu de Meano, que se quedó para cuidar eternamente el teatro que diseñó pero que nunca pudo ver terminado.",
    vocabulary: [
      { word: "Acústica", definition: "La calidad del sonido en un recinto." },
      { word: "Palco", definition: "Un compartimento con asientos para espectadores en un teatro o sala de espectáculos." },
      { word: "Inauguración", definition: "La ceremonia con la que se abre oficialmente un edificio o un evento." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿De quién se dice que es el fantasma que habita el Teatro Colón?",
        options: ["De un famoso cantante de ópera", "De una bailarina", "Del arquitecto original del teatro", "De un espectador que murió durante una función"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué les pasó a los dos primeros arquitectos del teatro?",
        options: ["Renunciaron al proyecto", "Se mudaron a otro país", "Murieron antes de poder terminar la obra", "Se pelearon y abandonaron el trabajo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Por qué se cree que el fantasma sigue en el teatro?",
        options: ["Para asustar a los visitantes", "Porque perdió algo valioso allí", "Para cuidar el teatro que no pudo ver terminado", "Porque está buscando a su amada"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Robo del Siglo al Banco Río",
    level: QuestLevel.ADVANCED,
    passage: "En 2006, un grupo de ladrones llevó a cabo un robo que parecía sacado de una película. Entraron al Banco Río de Acassuso, tomaron 23 rehenes y negociaron con la policía durante horas. Mientras toda la atención estaba en la puerta del banco, ellos vaciaban las cajas de seguridad y escapaban por un túnel que habían construido durante meses, que los llevaba a un desagüe pluvial. Huyeron en botes. Cuando la policía entró, encontraron a los rehenes ilesos y un cartel que decía: 'En barrio de ricachones, sin armas ni rencores, es solo plata y no amores'. Fue llamado 'El Robo del Siglo' no solo por el botín, sino por su planificación y audacia.",
    vocabulary: [
      { word: "Rehén", definition: "Una persona retenida por alguien para obligar a otra persona o entidad a hacer algo." },
      { word: "Botín", definition: "El conjunto de dinero o cosas de valor que se roban." },
      { word: "Audacia", definition: "Atrevimiento, osadía." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cómo escaparon los ladrones del banco?",
        options: ["Por la puerta principal, disfrazados", "En un helicóptero desde el techo", "Por un túnel que conectaba con un desagüe", "Se rindieron a la policía"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué mensaje dejaron los ladrones?",
        options: ["Una amenaza a la policía", "Una disculpa a los rehenes", "Una nota burlona sobre el dinero y el amor", "Un mapa de su escondite"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Por qué fue conocido como 'El Robo del Siglo'?",
        options: ["Porque fue el robo con el mayor botín de la historia", "Por su increíble planificación y audacia", "Porque no hubo violencia", "Todas las anteriores son correctas"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Encanto del Caminito",
    level: QuestLevel.ADVANCED,
    passage: "Caminito, en el barrio de La Boca, es una de las calles más fotografiadas de Buenos Aires. Pero no siempre fue así. Era una vía de tren abandonada, un 'caminito' que la gente usaba como atajo. En la década de 1950, un vecino, el pintor Benito Quinquela Martín, decidió darle vida. Con la ayuda de otros vecinos, pintaron las paredes de las casas de chapa con colores brillantes, inspirados en los viejos conventillos. Colocaron esculturas y murales, convirtiendo el callejón gris en un museo al aire libre. Caminito no es solo una calle bonita; es la historia de cómo el arte y la comunidad pueden transformar un lugar olvidado en un símbolo de identidad cultural.",
    vocabulary: [
      { word: "Atajo", definition: "Un camino más corto que el principal para ir a un lugar." },
      { word: "Conventillo", definition: "Casa de vecindad con muchas habitaciones que dan a un patio central." },
      { word: "Identidad cultural", definition: "El conjunto de valores, tradiciones y símbolos que caracterizan a un grupo social." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué era Caminito antes de ser una calle museo?",
        options: ["Un río", "Una avenida principal", "Una vía de tren abandonada", "Un mercado"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Quién fue el principal impulsor de la transformación de Caminito?",
        options: ["El gobierno de la ciudad", "Un grupo de inversores extranjeros", "El pintor Benito Quinquela Martín", "Un famoso cantante de tango"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La historia de Caminito es un ejemplo de cómo...",
        options: ["El dinero puede comprar la belleza", "El arte y la comunidad pueden transformar un lugar", "Las viejas tradiciones deben ser demolidas", "Los turistas definen la cultura de una ciudad"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Hombre que Hacía Llover en La Pampa",
    level: QuestLevel.ADVANCED,
    passage: "En la década de 1930, La Pampa sufría una sequía terrible. Los campos estaban secos y los animales morían. Desesperados, los agricultores oyeron hablar de un hombre llamado Juan Baigorri Velar, un ingeniero que afirmaba haber inventado una 'máquina de hacer llover'. Baigorri llegaba a los pueblos con su misterioso aparato, una caja con antenas y químicos, y prometía lluvia. Lo increíble es que, en muchas ocasiones, después de que encendía su máquina, ¡llovía! Los científicos lo llamaban charlatán, pero los chacareros le pagaban y lo recibían como a un héroe. Nunca reveló el secreto de su máquina. ¿Fue ciencia, casualidad o un fraude genial? El misterio del 'mago de la lluvia' de La Pampa nunca se resolvió.",
    vocabulary: [
      { word: "Sequía", definition: "Un largo período de tiempo sin lluvia." },
      { word: "Charlatán", definition: "Una persona que habla mucho y sin sustancia, o que engaña a la gente." },
      { word: "Chacarero", definition: "Un agricultor que trabaja una 'chacra' o granja." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el problema en La Pampa en la década de 1930?",
        options: ["Una plaga de langostas", "Inundaciones constantes", "Una terrible sequía", "Conflictos por la tierra"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué afirmaba poder hacer Juan Baigorri Velar?",
        options: ["Encontrar agua subterránea", "Hacer llover con una máquina", "Predecir el clima con exactitud", "Fertilizar la tierra con un químico secreto"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Cuál es el gran misterio que rodea a Baigorri?",
        options: ["Dónde escondió su fortuna", "Si su máquina realmente funcionaba o si todo era una coincidencia", "Quién le robó su invento", "Por qué desapareció sin dejar rastro"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Lobizón: La Noche del Séptimo Hijo",
    level: QuestLevel.ADVANCED,
    passage: "La leyenda del Lobizón es una de las más extendidas en Argentina. Dice que si una familia tiene siete hijos varones seguidos, el séptimo se convertirá en un Lobizón en las noches de luna llena. No es un hombre lobo como el de las películas. Es un ser que se transforma en un animal parecido a un perro grande y oscuro, y sale a revolver los gallineros y cementerios. No busca matar, sino alimentarse de carroña. La creencia era tan fuerte que, en 1920, se creó una ley de padrinazgo presidencial: el presidente 'apadrina' al séptimo hijo varón para protegerlo de la maldición y del miedo de la gente. La ley sigue vigente, uniendo el folclore con la realidad.",
    vocabulary: [
      { word: "Lobizón", definition: "Versión sudamericana del hombre lobo, presente en el folclore de Argentina, Paraguay y Uruguay." },
      { word: "Carroña", definition: "Carne descompuesta de animales muertos." },
      { word: "Padrinazgo", definition: "La relación entre un padrino y su ahijado." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Quién se convierte en Lobizón, según la leyenda?",
        options: ["El primer hijo varón", "El séptimo hijo varón de una familia", "Cualquier persona mordida por un lobo", "El hijo de un hechicero"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué hace el Lobizón durante la luna llena?",
        options: ["Ataca a las personas en sus casas", "Busca tesoros escondidos", "Revuelve gallineros y cementerios buscando comida", "Canta a la luna"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué medida tomó el gobierno argentino en relación a esta leyenda?",
        options: ["Prohibió hablar del Lobizón", "Creó una ley de padrinazgo presidencial para el séptimo hijo", "Organizó cacerías de Lobizones", "Declaró la leyenda como patrimonio cultural"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Cruce de los Andes: Una Hazaña Imposible",
    level: QuestLevel.ADVANCED,
    passage: "En 1817, el General San Martín lideró una de las hazañas militares más grandes de la historia: el Cruce de los Andes. No era solo un ejército; era un pueblo en movimiento. Más de 5000 hombres, 10000 mulas y 1600 caballos atravesaron las montañas más altas de América. No había caminos, solo senderos peligrosos. Tuvieron que soportar el frío extremo, la falta de oxígeno y el hambre. San Martín planeó todo meticulosamente, desde la comida para los soldados hasta las herraduras para las mulas. El objetivo era sorprender a los realistas en Chile y luchar por la independencia. No fue solo una victoria militar; fue una demostración de que con coraje, planificación y unidad, se puede lograr lo que parece imposible.",
    vocabulary: [
      { word: "Hazaña", definition: "Una acción de gran esfuerzo y valor." },
      { word: "Meticulosamente", definition: "Con mucho cuidado y atención a los detalles." },
      { word: "Realistas", definition: "El bando que defendía la monarquía española durante las guerras de independencia hispanoamericanas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el objetivo principal del Cruce de los Andes?",
        options: ["Encontrar una nueva ruta comercial", "Explorar nuevas tierras", "Sorprender al ejército realista en Chile para luchar por la independencia", "Establecer un nuevo récord de montañismo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué desafíos enfrentó el ejército de San Martín?",
        options: ["El calor extremo y las tormentas de arena", "El frío, la falta de oxígeno y el hambre", "Los ataques de animales salvajes", "Las inundaciones y los ríos caudalosos"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El éxito del Cruce de los Andes fue una demostración de...",
        options: ["Suerte y casualidad", "Poderío militar superior", "Coraje, planificación y unidad", "Ayuda de ejércitos extranjeros"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Salamanca: La Cueva del Diablo",
    level: QuestLevel.ADVANCED,
    passage: "En el folclore del noroeste argentino, La Salamanca es una cueva misteriosa, una escuela para brujas y hechiceros. Se dice que es la entrada al inframundo, donde el Diablo en persona, conocido como 'El Zupay', da sus clases. Quienes entran a La Salamanca pueden aprender a tocar la guitarra como nadie, a enamorar a cualquier persona o a tener suerte en el juego. Pero el precio es alto: deben entregar su alma. Para encontrarla, hay que seguir a un cuervo negro o a un chivo de aspecto extraño en una noche sin luna. Muchos músicos y gauchos famosos, según la leyenda, obtuvieron su don en La Salamanca, un lugar de poder y perdición.",
    vocabulary: [
      { word: "Salamanca", definition: "En el folclore argentino, una cueva donde se reúnen brujas y demonios." },
      { word: "Zupay", definition: "El diablo o un espíritu maligno en las mitologías del noroeste argentino." },
      { word: "Perdición", definition: "Ruina espiritual o material de una persona." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué es La Salamanca?",
        options: ["Una montaña sagrada", "Una ciudad perdida", "Una cueva que funciona como escuela para brujas", "Un río subterráneo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué se puede aprender en La Salamanca?",
        options: ["A cultivar la tierra", "A construir casas", "Habilidades sobrenaturales como tocar música de forma excepcional", "A leer y escribir"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál es el precio que se debe pagar por los dones de La Salamanca?",
        options: ["Diez años de trabajo", "Una bolsa de oro", "El alma", "La primera cosecha del año"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Obelisco: El Corazón de Buenos Aires",
    level: QuestLevel.ADVANCED,
    passage: "En el cruce de las avenidas más importantes de Buenos Aires, se alza el Obelisco. Fue construido en 1936 en solo 31 días para celebrar los 400 años de la primera fundación de la ciudad. Al principio, muchos porteños no lo querían. Lo consideraban feo, un 'armatoste' sin sentido. Incluso hubo una ley para demolerlo. Pero con el tiempo, el Obelisco se ganó el corazón de la gente. Se convirtió en el punto de encuentro para celebrar las victorias deportivas, para las protestas políticas y para los grandes eventos. Hoy, es imposible imaginar Buenos Aires sin él. No es solo un monumento; es el faro que marca el centro neurálgico de la vida argentina, un testigo silencioso de la historia del país.",
    vocabulary: [
      { word: "Obelisco", definition: "Un monumento de piedra alto y de cuatro caras, que termina en una punta piramidal." },
      { word: "Porteño", definition: "El gentilicio para los habitantes de la Ciudad de Buenos Aires." },
      { word: "Neurálgico", definition: "Que es de vital importancia, un punto clave o central." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Por qué se construyó el Obelisco?",
        options: ["Para celebrar una victoria militar", "Como un regalo de un país extranjero", "Para celebrar los 400 años de la fundación de Buenos Aires", "Para que sirviera como faro para los barcos"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál fue la reacción inicial de los porteños hacia el Obelisco?",
        options: ["Lo amaron desde el primer día", "Les fue indiferente", "No les gustó y hasta quisieron demolerlo", "Organizaron fiestas para celebrar su construcción"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El Obelisco se ha convertido en...",
        options: ["Un centro comercial", "Un edificio de oficinas", "El punto de encuentro para celebraciones y protestas", "Un parque de diversiones"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Glaciar Perito Moreno: El Gigante que Respira",
    level: QuestLevel.ADVANCED,
    passage: "En el corazón de la Patagonia, el Glaciar Perito Moreno es un río de hielo viviente. A diferencia de la mayoría de los glaciares del mundo, no está en retroceso. Avanza constantemente, crujiendo y tronando, hasta que choca contra la Península de Magallanes, formando un dique natural. El agua del lago se acumula, y la presión aumenta hasta que, cada pocos años, ocurre un espectáculo majestuoso: la ruptura. Enormes túneles de hielo se derrumban en el agua con un estruendo que sacude el alma. No es un evento de pérdida, sino parte de un ciclo sin fin. El Perito Moreno no es solo un glaciar; es un testimonio del poder y la dinámica perpetua de la naturaleza, un gigante que respira al ritmo del planeta.",
    vocabulary: [
      { word: "Retroceso", definition: "Acción de volver hacia atrás." },
      { word: "Dique", definition: "Un muro o construcción para contener el agua." },
      { word: "Perpetuo", definition: "Que dura siempre o por un tiempo muy largo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué hace que el Glaciar Perito Moreno sea inusual en comparación con otros glaciares?",
        options: ["Que es el más grande del mundo", "Que no está disminuyendo de tamaño", "Que está compuesto de roca en lugar de hielo", "Que se mueve extremadamente rápido"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La ruptura del glaciar se describe como un 'espectáculo majestuoso', lo que sugiere que es visto como...",
        options: ["Un desastre ecológico", "Un evento triste y destructivo", "Una demostración impresionante y natural del poder del glaciar", "Un problema para el turismo local"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La frase 'un gigante que respira' implica que el glaciar es...",
        options: ["Un ser vivo literal", "Una fuerza de la naturaleza activa y en constante cambio", "Peligroso y debe ser evitado", "Silencioso y estático"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "Astor Piazzolla y la Revolución del Tango",
    level: QuestLevel.ADVANCED,
    passage: "Astor Piazzolla tomó el tango, el alma de Buenos Aires, y lo transformó. Creció escuchando tanto a los grandes del tango como a Bach y al jazz. Esta mezcla única de influencias lo llevó a crear el 'Nuevo Tango'. Al principio, los tradicionalistas estaban furiosos. Decían que 'eso no era tango'. Su música era compleja, disonante y estaba diseñada más para ser escuchada en salas de concierto que para ser bailada en milongas. Piazzolla no se rindió. Creía que el tango debía evolucionar, no ser una pieza de museo. Con su bandoneón, llevó el tango a los escenarios más prestigiosos del mundo, demostrando que la tradición no está reñida con la innovación. Su legado no fue destruir el tango, sino darle alas para volar más alto.",
    vocabulary: [
      { word: "Disonante", definition: "Que produce una combinación de sonidos no armónicos." },
      { word: "Milonga", definition: "Lugar donde se baila tango." },
      { word: "Bandoneón", definition: "Instrumento musical de viento, similar al acordeón, emblemático del tango." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál fue la reacción inicial de la comunidad tanguera tradicional a la música de Piazzolla?",
        options: ["Aceptación y entusiasmo inmediatos", "Indiferencia total", "Fuerte rechazo y crítica", "Confusión, pero curiosidad"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La música de Piazzolla es un ejemplo de cómo...",
        options: ["Las tradiciones deben permanecer inalteradas", "La fusión de diferentes estilos puede enriquecer un género musical", "La música clásica es superior al tango", "El jazz es el único futuro de la música"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La frase 'darle alas para volar más alto' sugiere que la contribución de Piazzolla...",
        options: ["Hizo que el tango fuera más simple", "Limitó el alcance del tango", "Expandió las posibilidades y el prestigio del tango a nivel mundial", "Hizo que el tango fuera menos argentino"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Legado Científico de Luis Federico Leloir",
    level: QuestLevel.ADVANCED,
    passage: "En un laboratorio modesto en Buenos Aires, con recursos limitados pero con una curiosidad ilimitada, Luis Federico Leloir hizo descubrimientos que cambiarían la bioquímica. Dedicó su vida a entender cómo el cuerpo almacena y utiliza la energía de los alimentos. Su trabajo sobre los nucleótidos de azúcar reveló los procesos metabólicos clave que antes eran un misterio. En 1970, recibió el Premio Nobel de Química por este trabajo, convirtiéndose en el primer argentino en recibir dicho honor en esa categoría. Leloir demostró que la ciencia de clase mundial no depende de la riqueza del laboratorio, sino de la riqueza de la mente. Su legado es una inspiración, un recordatorio de que la pasión y la perseverancia son las herramientas más poderosas de un científico.",
    vocabulary: [
      { word: "Bioquímica", definition: "La ciencia que estudia la composición química de los seres vivos." },
      { word: "Metabolismo", definition: "El conjunto de procesos químicos que ocurren en las células para mantener la vida." },
      { word: "Perseverancia", definition: "Firmeza y constancia en la manera de ser o de obrar." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué nos enseña la historia de Leloir sobre la investigación científica?",
        options: ["Que solo se puede tener éxito en laboratorios muy caros", "Que las ideas brillantes y la dedicación son más importantes que los recursos materiales", "Que los premios Nobel solo se otorgan a científicos de países ricos", "Que la bioquímica es un campo fácil de estudiar"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El trabajo de Leloir fue fundamental para comprender...",
        options: ["Cómo viajan los planetas", "Cómo las plantas realizan la fotosíntesis", "Cómo el cuerpo humano procesa la energía de los alimentos", "Las causas de las enfermedades genéticas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El legado de Leloir puede ser descrito como un testimonio del poder de...",
        options: ["La suerte y el azar", "La colaboración internacional exclusivamente", "La pasión, la curiosidad y el trabajo constante", "La competencia y la rivalidad"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Las Cataratas del Iguazú: Furia y Belleza",
    level: QuestLevel.ADVANCED,
    passage: "La leyenda guaraní cuenta que una deidad planeaba casarse con una hermosa mujer llamada Naipí, pero ella huyó en una canoa con su amado mortal, Tarobá. Enfurecida, la deidad partió el río, creando las cataratas y condenando a los amantes a una caída eterna. Más allá del mito, las Cataratas del Iguazú son una maravilla de la naturaleza. Son un sistema de 275 saltos de agua que se extienden por casi 3 kilómetros. El más impresionante, la Garganta del Diablo, es una cortina de agua en forma de U de 82 metros de altura. El estruendo es ensordecedor y la niebla que se levanta crea arcoíris constantes. Visitar Iguazú es sentir la fuerza abrumadora de la naturaleza y, al mismo tiempo, su delicada belleza en cada gota y cada arcoíris.",
    vocabulary: [
      { word: "Deidad", definition: "Un ser sobrenatural al que se le rinde culto; un dios o una diosa." },
      { word: "Guaraní", definition: "Pueblo indígena de Sudamérica y su lengua." },
      { word: "Ensordecedor", definition: "Que es tan fuerte que hace que uno no pueda oír." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La leyenda guaraní sirve para...",
        options: ["Proporcionar una explicación científica de las cataratas", "Dar una dimensión mítica y emocional al origen de una maravilla natural", "Documentar la historia real de la región", "Advertir a la gente que no navegue por el río"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La descripción de las cataratas como un lugar de 'furia y belleza' sugiere que...",
        options: ["Es un lugar peligroso que debe evitarse", "Es visualmente hermoso pero desagradable de visitar", "Combina un poder natural inmenso con una estética delicada y admirable", "Está constantemente en conflicto consigo mismo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué aspecto de las cataratas demuestra mejor su escala masiva?",
        options: ["La leyenda de su creación", "La presencia de arcoíris constantes", "El hecho de que consta de 275 saltos individuales", "El nombre 'Garganta del Diablo'"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Arte Luminoso de Xul Solar",
    level: QuestLevel.ADVANCED,
    passage: "Oscar Agustín Alejandro Schulz Solari, conocido como Xul Solar, fue mucho más que un pintor. Fue un visionario, un astrólogo, un músico y un inventor de idiomas. Sus pinturas no son retratos del mundo real, sino ventanas a universos fantásticos. Utilizaba colores vibrantes y formas geométricas para crear ciudades flotantes, seres celestiales y paisajes de otros planetas. Creó dos idiomas artificiales, el 'neocriollo' y la 'panlengua', con la esperanza de unir a las personas de América Latina y del mundo. También inventó un 'panajedrez' con reglas más complejas y astrológicas. Xul Solar no quería simplemente crear arte; quería reinventar el mundo, llenándolo de color, armonía y un lenguaje universal. Su obra es una invitación a imaginar una realidad más brillante.",
    vocabulary: [
      { word: "Visionario", definition: "Una persona con ideas originales o inusuales sobre cómo podría ser el futuro." },
      { word: "Celestial", definition: "Relativo al cielo o a los cielos." },
      { word: "Armonía", definition: "Equilibrio, proporción y correspondencia adecuada entre las diferentes cosas de un conjunto." }
    ],
    comprehensionQuestions: [
      {
        questionText: "El hecho de que Xul Solar inventara idiomas y juegos sugiere que su interés principal era...",
        options: ["Simplemente pintar cuadros bonitos", "Criticar a la sociedad de su tiempo", "Crear sistemas completos y nuevas formas de comunicación y pensamiento", "Hacerse famoso y rico"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Las pinturas de Xul Solar se describen como 'ventanas a universos fantásticos', lo que implica que su arte es...",
        options: ["Una representación realista de la vida argentina", "Una expresión de su imaginación y espiritualidad", "Una crítica de la industrialización", "Un estudio científico de la astronomía"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El objetivo final de las diversas creaciones de Xul Solar parece ser...",
        options: ["La confusión y el caos", "La preservación de las tradiciones antiguas", "La unificación y la mejora de la experiencia humana a través del arte y el lenguaje", "La competencia con otros artistas de su época"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Horacio Quiroga: La Vida Trágica del Maestro del Cuento",
    level: QuestLevel.ADVANCED,
    passage: "La vida de Horacio Quiroga, maestro del cuento latinoamericano, fue tan oscura y trágica como su obra. Marcado por la desgracia desde niño, con muertes accidentales y suicidios en su familia, Quiroga encontró en la selva de Misiones un refugio y una fuente de inspiración. Sus historias, a menudo comparadas con las de Edgar Allan Poe, exploran la lucha brutal del ser humano contra una naturaleza bella pero implacable. En cuentos como 'A la deriva' o 'El almohadón de plumas', la muerte es una presencia constante e inexorable. Su propia vida terminó trágicamente cuando, diagnosticado con cáncer terminal, eligió su propio final, reflejando la sombría cosmovisión que impregnó toda su literatura.",
    vocabulary: [
      { word: "Desgracia", definition: "Suceso que produce un gran dolor y sufrimiento; infortunio." },
      { word: "Implacable", definition: "Que no puede ser aplacado o suavizado; severo, inflexible." },
      { word: "Inexorable", definition: "Que no se puede evitar, eludir o detener." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La obra de Quiroga sugiere que su visión de la naturaleza era...",
        options: ["Como un paraíso pacífico y seguro", "Como un recurso para ser explotado económicamente", "Como una fuerza poderosa e indiferente a la suerte humana", "Como un lugar aburrido y sin interés"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La conexión entre la vida de Quiroga y su literatura se puede describir como...",
        options: ["Inexistente, su vida fue feliz y su obra triste", "Una contradicción, escribía sobre lo que no conocía", "Un reflejo directo, sus tragedias personales alimentaron los temas oscuros de sus cuentos", "Una imitación, copió las vidas de otros autores"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Los cuentos de Quiroga, al centrarse en la lucha por la supervivencia, exploran principalmente...",
        options: ["La alegría de la vida en el campo", "La fragilidad de la condición humana frente a fuerzas mayores", "El éxito de la tecnología moderna", "Las relaciones políticas de su tiempo"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "Y Wladfa: Un Sueño Galés en la Patagonia",
    level: QuestLevel.ADVANCED,
    passage: "En 1865, un grupo de 153 galeses zarpó hacia la Patagonia en busca de una utopía: un lugar donde pudieran preservar su idioma, su cultura y sus tradiciones sin la opresión del gobierno británico. Llamaron a esta nueva colonia 'Y Wladfa'. La vida en el árido valle del río Chubut fue increíblemente dura. Sin embargo, con perseverancia y la ayuda crucial del pueblo indígena Tehuelche, que les enseñó a cazar y a sobrevivir, la colonia prosperó. Crearon un sistema de riego cooperativo que transformó el valle. Y Wladfa no fue una conquista, sino un intento de crear una sociedad basada en sus propios valores. Hoy, miles de descendientes en la Patagonia todavía hablan galés, un testamento viviente de ese sueño audaz.",
    vocabulary: [
      { word: "Utopía", definition: "Plan o sistema ideal de gobierno en el que se concibe una sociedad perfecta y justa, sin conflictos y en armonía." },
      { word: "Preservar", definition: "Proteger o resguardar a alguien o algo, intentando conservar su estado." },
      { word: "Árido", definition: "Que es muy seco, que carece de humedad." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era la motivación principal de los colonos galeses?",
        options: ["La búsqueda de oro y riquezas", "La conquista de nuevos territorios para la corona británica", "La creación de una comunidad autónoma para proteger su identidad cultural", "Una misión científica para estudiar la flora y fauna"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La relación entre los galeses y los Tehuelches demuestra que...",
        options: ["El conflicto entre diferentes culturas es inevitable", "La cooperación y el intercambio de conocimientos pueden ser clave para la supervivencia", "Los pueblos indígenas siempre fueron hostiles a los recién llegados", "Los galeses no necesitaban ayuda para sobrevivir"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El legado de 'Y Wladfa' puede ser visto como un ejemplo de...",
        options: ["El fracaso de un experimento social", "La asimilación completa a la cultura argentina", "La exitosa preservación de una identidad cultural a través de la autodeterminación y la comunidad", "La superioridad de una cultura sobre otra"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Francisco Moreno: El Perito y la Defensa de la Patagonia",
    level: QuestLevel.ADVANCED,
    passage: "Francisco 'Perito' Moreno fue un explorador, científico y conservacionista cuya pasión por la Patagonia definió las fronteras y el futuro de Argentina. Recorrió incansablemente territorios inexplorados, estudiando la geología, la flora y la fauna. Su conocimiento fue tan profundo que fue nombrado 'perito' (experto) de Argentina en la disputa de límites con Chile. Gracias a su riguroso trabajo científico, Argentina aseguró la soberanía sobre vastos territorios sin disparar un solo tiro. En un acto de filantropía sin precedentes, Moreno donó enormes extensiones de tierra que le habían sido otorgadas, con la condición de que fueran preservadas para siempre. Así nacieron los primeros parques nacionales de Argentina, un legado de su visión de que la verdadera riqueza de una nación reside en su patrimonio natural.",
    vocabulary: [
      { word: "Perito", definition: "Persona experta o entendida en una materia." },
      { word: "Filantropía", definition: "Amor al género humano y todo lo que a la humanidad respecta, particularmente en su forma de ayuda desinteresada a los demás." },
      { word: "Soberanía", definition: "Poder político supremo que corresponde a un Estado independiente." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La historia de Moreno en la disputa de límites con Chile sugiere que...",
        options: ["El poder militar es la única forma de resolver conflictos territoriales", "El conocimiento científico y la diplomacia pueden ser herramientas más poderosas que las armas", "Chile no tenía interés en la Patagonia", "Moreno era un espía"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La donación de tierras para crear parques nacionales revela que Moreno era...",
        options: ["Un hombre de negocios que buscaba beneficios fiscales", "Un político que buscaba popularidad", "Un visionario que entendió la importancia de la conservación a largo plazo", "Indiferente al futuro de la Patagonia"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El legado principal del Perito Moreno es...",
        options: ["Sus descubrimientos de oro", "La idea de que la naturaleza debe ser protegida como un tesoro nacional", "Sus mapas detallados para la explotación de recursos", "Su carrera militar"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "Julio Cortázar y el Juego de la Rayuela",
    level: QuestLevel.ADVANCED,
    passage: "Julio Cortázar fue un revolucionario de la literatura. No escribía para lectores pasivos; exigía su complicidad. Su obra más famosa, 'Rayuela', es el ejemplo perfecto. No es una novela para ser leída de principio a fin, sino un 'tablero de dirección' que invita al lector a saltar entre capítulos, a construir su propia versión de la historia. Cortázar quería subvertir la tiranía de la narrativa lineal. Sus cuentos exploran lo fantástico que se esconde en lo cotidiano: un hombre que vomita conejitos, un fotógrafo que queda atrapado en su propia foto. Su escritura es lúdica y profundamente seria a la vez, una invitación a cuestionar la naturaleza de la realidad y a participar activamente en el juego de la creación.",
    vocabulary: [
      { word: "Lúdico", definition: "Perteneciente o relativo al juego." },
      { word: "Subvertir", definition: "Trastornar, revolver, destruir, especialmente en lo moral o en lo espiritual." },
      { word: "Cotidiano", definition: "Que ocurre, se hace o se repite todos los días." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La estructura de 'Rayuela' sugiere que Cortázar veía la lectura como...",
        options: ["Una obligación aburrida", "Un acto pasivo de recepción de información", "Un juego interactivo y una colaboración creativa", "Una actividad exclusivamente para académicos"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Al introducir elementos fantásticos en situaciones normales, Cortázar...",
        options: ["Buscaba escribir cuentos para niños", "Demostraba su falta de realismo", "Sugería que la realidad es más extraña y misteriosa de lo que parece", "Copiaba el estilo de otros autores de ciencia ficción"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El principal objetivo de Cortázar como escritor parece ser...",
        options: ["Contar historias simples con una moraleja clara", "Liberar al lector y a la novela de las convenciones tradicionales", "Documentar la historia argentina de forma precisa", "Ganar la mayor cantidad de dinero posible"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "La Dama de Blanco de la Recoleta",
    level: QuestLevel.ADVANCED,
    passage: "El Cementerio de la Recoleta es una ciudad de los muertos, llena de mausoleos opulentos y estatuas lúgubres. Pero ninguna historia es tan famosa como la de Rufina Cambaceres. En 1902, en su decimonoveno cumpleaños, la joven se desplomó y fue declarada muerta. Días después del entierro, un cuidador encontró su ataúd movido y la tapa rota. Al abrirlo, descubrieron el horror: el interior del ataúd estaba arañado y el cuerpo de Rufina tenía las manos y la cara magulladas. Había sufrido un ataque catatónico y fue enterrada viva. La leyenda dice que su espíritu, una 'dama de blanco', vaga por el cementerio, asegurándose de que nadie más sufra su terrible destino. Su bóveda, una obra maestra del Art Nouveau, muestra a una joven abriendo la puerta de su propia tumba.",
    vocabulary: [
      { word: "Catatónico", definition: "Estado físico y psicológico caracterizado por la inmovilidad y la rigidez muscular." },
      { word: "Bóveda", definition: "Construcción de cubierta arqueada; a menudo se usa para mausoleos familiares." },
      { word: "Lúgubre", definition: "Sombrío, profundamente triste." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La historia de Rufina Cambaceres es especialmente aterradora porque...",
        options: ["Era una persona muy mala", "Juega con el miedo primordial a ser enterrado vivo", "Su fantasma es violento y busca venganza", "Su familia era pobre"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La estatua en su tumba, que la muestra abriendo la puerta, sirve para...",
        options: ["Negar lo que sucedió", "Conmemorar su trágico despertar y su lucha por escapar", "Mostrar que era una persona muy fuerte", "Asustar a los visitantes del cementerio"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La leyenda del fantasma de la 'dama de blanco' transforma una tragedia personal en...",
        options: ["Una simple estadística médica", "Una advertencia sobre los peligros de la catalepsia", "Un mito que le da un propósito eterno y una presencia continua", "Una historia olvidada"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Nahuelito: El Monstruo del Lago Nahuel Huapi",
    level: QuestLevel.ADVANCED,
    passage: "En las profundas y heladas aguas del Lago Nahuel Huapi, en la Patagonia, se dice que habita una criatura misteriosa: Nahuelito. Las leyendas son ancestrales, ya que los pueblos originarios hablaban de un 'cuero' o monstruo acuático. Sin embargo, la leyenda moderna comenzó a principios del siglo XX, con avistamientos que lo describían como un ser con cuello de serpiente y cuerpo de gran tamaño, similar a un plesiosaurio prehistórico. A lo largo de los años, ha habido innumerables supuestas fotos, videos y testimonios. La ciencia no ha encontrado pruebas de su existencia, pero la criptozoología lo mantiene en su lista de intereses. ¿Es un animal prehistórico que sobrevivió, un mito, o simplemente olas y troncos mal interpretados? El misterio de Nahuelito sigue siendo uno de los grandes atractivos del lago.",
    vocabulary: [
      { word: "Criptozoología", definition: "El estudio de animales ocultos o desconocidos cuya existencia no ha sido probada." },
      { word: "Avistamiento", definition: "La acción de ver algo, especialmente si es algo raro o que se buscaba." },
      { word: "Ancestral", definition: "Que tiene su origen en los antepasados o en un pasado remoto." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La leyenda de Nahuelito demuestra...",
        options: ["La existencia confirmada de dinosaurios en la Patagonia", "La tendencia humana a encontrar misterio y maravilla en la naturaleza", "Que todos los lagos profundos tienen monstruos", "La falta de imaginación de la gente local"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La comparación de Nahuelito con un plesiosaurio sirve para...",
        options: ["Probar que es un dinosaurio", "Darle a la leyenda una apariencia de explicación científica y credibilidad", "Hacer la historia más aburrida", "Conectar la leyenda con la mitología griega"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El hecho de que la ciencia no encuentre pruebas pero la leyenda persista sugiere que...",
        options: ["Los científicos no han buscado bien", "La gente prefiere las historias misteriosas a las explicaciones racionales", "La leyenda es más importante para la cultura y el turismo local que la verdad científica", "Ambas opciones B y C son correctas"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "Las Misiones Jesuíticas: Utopía y Tragedia en la Selva",
    level: QuestLevel.ADVANCED,
    passage: "En los siglos XVII y XVIII, en la selva entre Argentina, Paraguay y Brasil, los jesuitas crearon un 'imperio' teocrático único. Fundaron decenas de 'reducciones' o ciudades para el pueblo guaraní. Por un lado, fue una utopía: protegieron a los guaraníes de la brutal esclavitud de los colonos portugueses y españoles. Dentro de las misiones, la propiedad era comunal y se fomentó un increíble florecimiento del arte, creando un estilo único de barroco-guaraní. Por otro lado, fue una aculturación forzada. Finalmente, cuando los imperios europeos vieron a las misiones como un estado dentro de otro estado, los jesuitas fueron expulsados violentamente. Las ruinas que quedan hoy, como las de San Ignacio Miní, son el testimonio silencioso de un experimento social complejo y trágico.",
    vocabulary: [
      { word: "Teocracia", definition: "Gobierno que se considera ejercido directamente por Dios o por sus representantes." },
      { word: "Sincretismo", definition: "La combinación de diferentes doctrinas, creencias o prácticas." },
      { word: "Expulsión", definition: "La acción de obligar a alguien o algo a salir de un lugar." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La naturaleza de las misiones jesuíticas es compleja porque...",
        options: ["Eran muy ricas pero artísticamente pobres", "Protegían a los guaraníes de un mal (la esclavitud) pero imponían su propio sistema de vida y creencias", "Eran apoyadas por todos los reyes europeos", "Solo aceptaban a guaraníes que ya eran católicos"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El estilo artístico 'barroco-guaraní' es un ejemplo de...",
        options: ["Imposición cultural sin ninguna mezcla", "La completa superioridad del arte europeo", "Sincretismo, donde las habilidades y visiones indígenas se fusionaron con un estilo europeo", "Un estilo que no tenía nada que ver ni con lo guaraní ni con lo barroco"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La expulsión de los jesuitas sugiere que...",
        options: ["Los guaraníes se rebelaron contra ellos", "Los imperios coloniales no toleraban un sistema social y económico autónomo dentro de sus dominios", "Las misiones ya no eran económicamente viables", "Los jesuitas decidieron abandonar el proyecto voluntariamente"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Colectivo: El Ingenio que Puso a Buenos Aires en Movimiento",
    level: QuestLevel.ADVANCED,
    passage: "El icónico colectivo de Buenos Aires no fue inventado por una gran corporación ni por un plan del gobierno. Nació del ingenio y la necesidad. En la década de 1920, una crisis económica golpeó duramente a los taxistas. Con pocos clientes, un grupo de ellos tuvo una idea brillante: crear una ruta fija y cobrar a cada pasajero una tarifa mucho más baja. Alargaron los chasis de sus autos para que cupieran más personas y pintaron los vehículos con colores vivos para distinguirlos. Este acto de solidaridad y creatividad anónima fue un éxito inmediato. Se convirtió en el 'colectivo'. Con el tiempo, evolucionó hasta convertirse en el complejo sistema de autobuses que es hoy, pero su origen es un poderoso recordatorio de cómo la innovación popular y la cooperación pueden resolver problemas desde abajo hacia arriba.",
    vocabulary: [
      { word: "Ingenio", definition: "Facultad del ser humano para concebir o inventar cosas con prontitud y facilidad." },
      { word: "Solidaridad", definition: "Adhesión o apoyo incondicional a causas o intereses ajenos, especialmente en situaciones comprometidas o difíciles." },
      { word: "Anónimo", definition: "De nombre desconocido o que se oculta." }
    ],
    comprehensionQuestions: [
      {
        questionText: "El nacimiento del colectivo es una historia sobre...",
        options: ["La regulación gubernamental", "La inversión extranjera", "La innovación que surge de la crisis y la cooperación comunitaria", "La competencia desleal"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La historia del colectivo puede ser vista como un ejemplo de...",
        options: ["Un modelo de negocio de 'arriba hacia abajo'", "Socialismo de estado", "Anarco-capitalismo", "Una solución de 'abajo hacia arriba' o de base"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué revela esta historia sobre la cultura de Buenos Aires?",
        options: ["Una preferencia por las soluciones individuales y el aislamiento", "Una tendencia a esperar que el gobierno resuelva todos los problemas", "Una capacidad para la creatividad, la adaptación y la colaboración en tiempos difíciles", "Una fuerte resistencia a cualquier tipo de cambio"],
        correctAnswerIndex: 2
      }
    ]
  },
    {
    title: "Jorge Luis Borges y el Universo en la Biblioteca",
    level: QuestLevel.ADVANCED,
    passage: "Jorge Luis Borges no escribía novelas, creaba universos. Más que un narrador, fue un cartógrafo de laberintos, un filósofo que usaba la ficción como herramienta. Sus cuentos, a menudo breves y densos, exploran ideas recurrentes: el tiempo cíclico, los espejos que revelan otros mundos, las bibliotecas que contienen todo el saber posible y la identidad como una construcción frágil. No buscaba el realismo, sino explorar las posibilidades de la realidad misma a través de la erudición y la metafísica. Su ceguera progresiva, lejos de ser un límite, pareció agudizar su universo interior, obligándolo a construir y memorizar complejas arquitecturas literarias. Leer a Borges no es seguir una trama, es participar en un juego intelectual que desafía nuestra percepción del mundo y nos deja preguntándonos si no somos más que personajes en el sueño de otro.",
    vocabulary: [
      { word: "Laberinto", definition: "Lugar formado artificiosamente por calles y encrucijadas para confundir a quien se adentre en él." },
      { word: "Erudición", definition: "Conocimiento profundo en un tipo de saber, especialmente el referente a las disciplinas literarias e históricas." },
      { word: "Metafísica", definition: "Parte de la filosofía que trata del ser, de sus principios, de sus propiedades y de sus causas primeras." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Por qué se dice que leer a Borges es 'participar en un juego intelectual'?",
        options: ["Porque sus libros incluyen juegos de mesa", "Porque sus historias son cómicas y ligeras", "Porque su obra exige reflexión sobre conceptos filosóficos y la naturaleza de la realidad", "Porque solo los intelectuales pueden entenderlo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La relación entre la ceguera de Borges y su obra sugiere que...",
        options: ["Dejó de escribir cuando se quedó ciego", "Sus limitaciones físicas potenciaron su capacidad de creación imaginativa", "Solo escribió sobre la experiencia de ser ciego", "Su ceguera fue la causa de su pesimismo"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Cuál era el objetivo principal de Borges al escribir?",
        options: ["Documentar la historia argentina con precisión", "Escribir historias de aventuras con mucha acción", "Usar la ficción como un medio para explorar ideas filosóficas complejas", "Crear personajes realistas y detallados"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "René Favaloro y la Revolución del Corazón",
    level: QuestLevel.ADVANCED,
    passage: "En un mundo donde la medicina se volvía cada vez más un negocio, René Favaloro fue un humanista. Nacido en un barrio humilde de La Plata, ejerció como médico rural durante años, entendiendo que la medicina era un servicio. Su genialidad lo llevó a la Cleveland Clinic en Estados Unidos, donde, en 1967, desarrolló la técnica del bypass coronario, un procedimiento que ha salvado millones de vidas desde entonces. A pesar de la fama y las oportunidades, decidió volver a Argentina para fundar la Fundación Favaloro, un centro de excelencia médica accesible para todos. Luchó incansablemente contra la corrupción y la burocracia del sistema de salud, defendiendo una medicina con rostro humano. Su vida fue un testimonio de que el mayor logro de la ciencia es inútil si no está al servicio de la gente, especialmente de los más vulnerables. Su trágico final fue, en sí mismo, una última y desesperada protesta contra un sistema que había olvidado esa premisa.",
    vocabulary: [
      { word: "Humanista", definition: "Persona que busca el desarrollo del ser humano, sus valores y sus derechos." },
      { word: "Burocracia", definition: "Sistema de organización caracterizado por procedimientos centralizados, división de responsabilidades y especialización laboral." },
      { word: "Premisa", definition: "Idea o principio del cual se parte para un razonamiento." }
    ],
    comprehensionQuestions: [
      {
        questionText: "El regreso de Favaloro a la Argentina, a pesar de su éxito en el extranjero, demuestra que...",
        options: ["No le gustaba vivir en Estados Unidos", "Su principal motivación era aplicar su conocimiento en beneficio de su propio país", "Había ganado suficiente dinero y quería retirarse", "No tenía otras ofertas de trabajo"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La frase 'una medicina con rostro humano' implica que Favaloro creía que...",
        options: ["Los médicos debían ser más atractivos", "La atención médica debía ser empática, ética y centrada en el paciente, no solo en la ganancia", "Se debían usar robots en las cirugías", "Los hospitales debían tener más retratos y obras de arte"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué nos enseña la vida de Favaloro sobre la ciencia?",
        options: ["Que el éxito científico conduce inevitablemente a la riqueza personal", "Que los avances científicos son más importantes que los pacientes", "Que la verdadera medida del progreso científico es su impacto positivo en la humanidad", "Que la investigación científica solo es posible con fondos ilimitados"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Difunta Correa: La Fe que Brota del Desierto",
    level: QuestLevel.ADVANCED,
    passage: "La historia de Deolinda Correa no está en los libros de historia, sino en el corazón del pueblo. Es una de las figuras de devoción popular más importantes de Argentina. La leyenda cuenta que, a mediados del siglo XIX, Deolinda siguió a su marido, que había sido reclutado a la fuerza, a través del desierto de San Juan. Llevaba a su bebé en brazos. El calor y la sed la vencieron, y murió. Cuando unos arrieros encontraron su cuerpo, el bebé seguía vivo, amamantando de su pecho milagrosamente. Desde entonces, su tumba se convirtió en un santuario. Los viajeros y camioneros le dejan botellas de agua para 'calmar su sed eterna' a cambio de protección. La Difunta Correa no es una santa reconocida por la Iglesia, pero su historia de amor maternal y sacrificio representa un poderoso símbolo de esperanza y fe popular que florece en los lugares más áridos.",
    vocabulary: [
      { word: "Devoción", definition: "Veneración y fervor religioso; admiración y respeto profundos." },
      { word: "Arriero", definition: "Persona que se dedica al transporte de mercancías por medio de animales de carga, como mulas o caballos." },
      { word: "Santuario", definition: "Lugar al que peregrinan numerosos fieles de un santo o una virgen." }
    ],
    comprehensionQuestions: [
      {
        questionText: "Dejar botellas de agua en el santuario es un acto que...",
        options: ["Busca solucionar la sequía de la región", "Simboliza un intercambio recíproco de cuidado y protección entre el devoto y la Difunta", "Es una ordenanza municipal para los turistas", "Es una forma de regar las plantas del lugar"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El hecho de que la Difunta Correa no sea una santa oficial de la Iglesia sugiere que...",
        options: ["Su leyenda es falsa", "La fe popular a menudo opera independientemente de las instituciones religiosas formales", "El gobierno prohíbe su culto", "Nadie cree realmente en ella"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El milagro central de la historia, el bebé sobreviviendo, refuerza la idea de que la Difunta Correa es un símbolo de...",
        options: ["La crueldad del desierto", "La negligencia de su marido", "El amor maternal que trasciende incluso a la muerte", "La importancia de la hidratación"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Carlos Gardel: La Voz Eterna del Tango",
    level: QuestLevel.ADVANCED,
    passage: "Para el mundo, Carlos Gardel es la voz del tango. Su figura trasciende la de un simple cantante; es un mito fundador de la identidad argentina. Con su sonrisa carismática y su talento inigualable, transformó el tango-canción, llevándolo de los suburbios de Buenos Aires a los escenarios de París y Nueva York. No solo cantaba, interpretaba. Cada tango era una pequeña obra de teatro de tres minutos sobre el amor, la traición y la nostalgia. Su trágica y prematura muerte en un accidente de avión en Medellín en 1935 no hizo más que agigantar su leyenda. La gente se negaba a creer que había muerto. La frase 'Gardel cada día canta mejor' no es solo un dicho popular; es la afirmación de que su arte es inmortal, que su voz sigue resonando en las calles de Buenos Aires, un eco perfecto del alma porteña que él ayudó a definir.",
    vocabulary: [
      { word: "Mito", definition: "Persona o cosa a la que se atribuyen cualidades o excelencias que no tiene, o bien una realidad de la que carece." },
      { word: "Carismático", definition: "Que tiene la capacidad de atraer y fascinar a los demás." },
      { word: "Nostalgia", definition: "Sentimiento de pena por la lejanía, la ausencia, la privación o la pérdida de alguien o algo querido." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La frase 'Gardel cada día canta mejor' implica que...",
        options: ["Se descubren nuevas grabaciones de mejor calidad", "Su música ha sido remasterizada digitalmente", "El paso del tiempo no disminuye, sino que aumenta el valor y la apreciación de su arte", "Los cantantes actuales no son tan buenos como él"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Decir que Gardel 'interpretaba' en lugar de solo 'cantar' sugiere que...",
        options: ["Actuaba en obras de teatro además de cantar", "Su habilidad principal era la actuación, no el canto", "Transmitía las emociones y la historia de la letra con una profunda carga dramática", "Mentía en las letras de sus canciones"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál fue el efecto de la muerte de Gardel en su legado?",
        options: ["Hizo que fuera rápidamente olvidado", "Interrumpió su carrera antes de que pudiera ser famoso", "Solidificó su estatus de ícono y lo convirtió en una figura legendaria e inmortal", "Demostró que viajar en avión era peligroso"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Asado: Más que Comida, un Ritual",
    level: QuestLevel.ADVANCED,
    passage: "El asado en Argentina es mucho más que una simple barbacoa; es una institución social, un rito que fortalece lazos. No se trata solo de la comida, sino del tiempo compartido. El proceso es deliberadamente lento, un pretexto para el encuentro. Comienza con la 'picada' y el vermut, mientras el 'asador', una figura de honor y responsabilidad, controla el fuego y los tiempos de cocción con paciencia experta. El asado no tiene prisa. Es un evento que puede durar horas, donde la conversación fluye y las amistades se consolidan. Termina con la 'sobremesa', ese momento sagrado después de comer donde la charla se extiende, a veces por más tiempo que la comida misma. En un mundo acelerado, el asado es un acto de resistencia, un recordatorio de que los mejores momentos de la vida se cocinan a fuego lento, en compañía de los afectos.",
    vocabulary: [
      { word: "Rito", definition: "Costumbre o ceremonia que se repite siempre de la misma forma." },
      { word: "Anfitrión", definition: "Persona que tiene invitados a su mesa o a su casa." },
      { word: "Sobremesa", definition: "Tiempo que se está a la mesa después de haber comido." }
    ],
    comprehensionQuestions: [
      {
        questionText: "Según el texto, ¿cuál es el propósito principal del asado?",
        options: ["Comer la mayor cantidad de carne posible", "Demostrar quién es el mejor cocinero", "Crear un espacio para la conexión social y el fortalecimiento de relaciones", "Comer de la forma más rápida y eficiente"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La descripción del asado como un 'acto de resistencia' en un 'mundo acelerado' sugiere que...",
        options: ["El asado es una forma de protesta política", "Valora la calma, la paciencia y la interacción humana por sobre la prisa y la eficiencia moderna", "Es una práctica anticuada que se resiste a desaparecer", "Hacer un asado es una tarea muy difícil"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El rol del 'asador' como una 'figura de honor' implica que...",
        options: ["Cualquier persona puede hacerlo sin problema", "Es una tarea que se toma con seriedad y es fundamental para el éxito del evento social", "El asador es el único que puede hablar durante la comida", "Se le debe pagar al asador por su trabajo"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Tren a las Nubes: Una Proeza de Hierro en el Cielo",
    level: QuestLevel.ADVANCED,
    passage: "El 'Tren a las Nubes' no es un simple viaje en tren, es una experiencia que desafía la gravedad y la lógica. Concebido como un ramal ferroviario para conectar la Puna con el puerto de Rosario, atravesando la Cordillera de los Andes, fue una de las obras de ingeniería más audaces del siglo XX. El ingeniero Richard Maury diseñó un sistema que no utiliza cremalleras ni funiculares para ascender; el tren sube serpenteando, en zigzags y espirales, aferrándose a la montaña. El viaje atraviesa puentes vertiginosos y viaductos que parecen flotar en el aire, como el famoso Viaducto La Polvorilla, que se eleva a 4.200 metros sobre el nivel del mar. Hoy, su función es turística, pero su esencia permanece. Es un monumento al ingenio humano, a la determinación de conectar lo que parecía inconectable y un recordatorio de que, a veces, para avanzar, no hay que ir en línea recta.",
    vocabulary: [
      { word: "Proeza", definition: "Hazaña, valentía o acción valerosa." },
      { word: "Vertiginoso", definition: "Que produce vértigo o un mareo intenso." },
      { word: "Viaducto", definition: "Puente muy largo, levantado para que un camino o vía férrea pase por una hondonada o un valle." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La frase 'para avanzar, no hay que ir en línea recta' en el contexto del tren, se refiere a que...",
        options: ["El tren a menudo se descarrilaba", "El ingenioso diseño en zigzag fue la solución para superar el desafío de la altura", "El viaje es muy confuso para los pasajeros", "El objetivo original del tren nunca se cumplió"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El hecho de que el tren no use cremalleras para ascender demuestra...",
        options: ["Que el tren es anticuado y poco seguro", "Una solución de ingeniería excepcionalmente creativa y adaptada al terreno", "Que el terreno no es tan empinado como parece", "Un error de diseño que fue corregido más tarde"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué representa el Tren a las Nubes más allá de ser una atracción turística?",
        options: ["Un medio de transporte de mercancías vital para la economía actual", "Un recordatorio de un fracaso de la ingeniería", "Un símbolo de la ambición humana y la capacidad de superar obstáculos geográficos monumentales", "La forma más rápida de cruzar los Andes"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Mercedes Sosa: La Voz de América Latina",
    level: QuestLevel.ADVANCED,
    passage: "Cuando Mercedes Sosa cantaba, no era solo su voz la que se escuchaba; eran las voces de los campesinos, los mineros, los olvidados. 'La Negra', como se la conocía cariñosamente, fue mucho más que una cantante de folclore. Fue una intérprete que le dio voz a un continente entero. Su repertorio trascendió géneros y fronteras, incorporando canciones de poetas y compositores de toda América Latina. Durante los años de dictadura, su música se convirtió en un himno de resistencia y esperanza, lo que le costó el exilio. Sin embargo, ni la censura ni la distancia pudieron apagar su voz. Regresó a Argentina con la democracia, llenando estadios y demostrando que la cultura es un pilar fundamental de la identidad de un pueblo. Su legado es el de una artista que entendió que una canción podía ser tan poderosa como un arma, pero usada para construir puentes y celebrar la vida.",
    vocabulary: [
      { word: "Folclore", definition: "Conjunto de costumbres, creencias, artesanías y canciones de carácter tradicional y popular." },
      { word: "Repertorio", definition: "Conjunto de obras que una compañía, orquesta o un intérprete tienen estudiadas para ejecutarlas." },
      { word: "Exilio", definition: "Pena que consiste en expulsar o hacer salir a una persona de un país o de un territorio." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La frase 'le dio voz a un continente entero' significa que Mercedes Sosa...",
        options: ["Cantaba en todos los idiomas del continente", "A través de su selección de canciones, representaba las luchas y esperanzas de la gente común de Latinoamérica", "Fue la única cantante famosa de América Latina", "Realizó giras por todos los países del continente"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El exilio de Mercedes Sosa durante la dictadura demuestra que...",
        options: ["Prefería vivir en Europa", "Su música y sus ideas eran consideradas una amenaza por el régimen autoritario", "Quería tomarse unas vacaciones de su carrera", "El folclore estaba prohibido en Argentina"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El legado de Mercedes Sosa, según el texto, es el de una artista que...",
        options: ["Priorizó el éxito comercial por sobre el mensaje", "Creía que el arte no debía mezclarse con la realidad social", "Utilizó su inmenso talento para la unificación cultural y la expresión de la identidad popular", "Cambió su estilo musical para adaptarse a las modas"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Gaucho: De Marginado a Símbolo Nacional",
    level: QuestLevel.ADVANCED,
    passage: "La figura del gaucho ha sufrido una profunda transformación en la historia argentina. En sus orígenes, en los siglos XVIII y XIX, el gaucho era un personaje errante y a menudo marginado. Era un hombre mestizo, de espíritu libre, jinete experto y habitante de las vastas llanuras de la pampa, que vivía de la caza del ganado salvaje y a menudo al margen de la ley. La literatura, especialmente el poema épico 'Martín Fierro' de José Hernández, fue crucial para cambiar esta percepción. La obra lo retrató no como un delincuente, sino como una víctima de la injusticia social y como la encarnación de los valores más puros de la argentinidad: la valentía, la lealtad y el amor por la libertad. Así, el gaucho pasó de ser un problema social a convertirse en el arquetipo del ser nacional, un símbolo romántico de la conexión del hombre con la tierra y la independencia.",
    vocabulary: [
      { word: "Errante", definition: "Que anda de un lugar a otro sin tener un lugar o asiento fijo." },
      { word: "Marginado", definition: "Que está socialmente aislado o en situación de inferioridad." },
      { word: "Arquetipo", definition: "Modelo original y primario en un arte u otra cosa; el ejemplo más representativo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "El rol del poema 'Martín Fierro' en la historia del gaucho fue...",
        options: ["Documentar sus crímenes para justificar su persecución", "Glorificar su figura y redefinirlo como un héroe popular y símbolo de la identidad nacional", "Una biografía precisa de un gaucho real llamado Martín Fierro", "Proponer un plan para integrar a los gauchos en las ciudades"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La transformación del gaucho de 'marginado a símbolo' demuestra que...",
        options: ["La percepción de un grupo social puede cambiar drásticamente gracias a la influencia cultural y literaria", "Los gauchos se volvieron ricos y poderosos de la noche a la mañana", "Todos los argentinos se convirtieron en gauchos", "La vida en el campo no ha cambiado desde el siglo XIX"],
        correctAnswerIndex: 0
      },
      {
        questionText: "¿Qué representa el gaucho en la cultura argentina moderna?",
        options: ["Un recordatorio de un pasado violento que es mejor olvidar", "Una figura que representa los valores de la vida urbana y la tecnología", "Un ideal romántico de libertad, independencia y conexión con la tierra", "Un tipo de trabajador rural que ya no existe"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Aconcagua: El Centinela de Piedra",
    level: QuestLevel.ADVANCED,
    passage: "Con 6,962 metros, el Aconcagua no es solo una montaña; es el techo de las Américas, un gigante que desafía a los alpinistas de todo el mundo. Su nombre, que en lenguas originarias podría significar 'Centinela de Piedra', describe perfectamente su imponente presencia. A pesar de no ser técnicamente tan complejo como otros picos del Himalaya, su peligrosidad reside en otros factores: los vientos huracanados que pueden surgir de la nada y el frío extremo, consecuencias de su proximidad al océano Pacífico. La ruta normal es un desafío más de resistencia y aclimatación que de escalada técnica. Muchos han intentado conquistar su cumbre, y el 'cementerio de los andinistas' cerca de su base es un sombrío recordatorio de que la montaña siempre tiene la última palabra. Para quienes lo logran, alcanzar la cima no es una conquista de la montaña, sino una conquista de sus propios límites, una lección de humildad y perseverancia escrita en el cielo.",
    vocabulary: [
      { word: "Centinela", definition: "Soldado que vela o guarda un puesto; por extensión, algo que vigila." },
      { word: "Aclimatación", definition: "Proceso por el cual un organismo se adapta fisiológicamente a los cambios en su medio ambiente, como la altitud." },
      { word: "Perseverancia", definition: "Firmeza y constancia en la manera de ser o de obrar." }
    ],
    comprehensionQuestions: [
      {
        questionText: "La frase 'la montaña siempre tiene la última palabra' significa que...",
        options: ["La montaña puede hablar con los alpinistas", "A pesar de la preparación y la habilidad humana, las fuerzas impredecibles de la naturaleza son soberanas", "Es imposible llegar a la cumbre del Aconcagua", "Hay que pedirle permiso a la montaña antes de escalar"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El principal desafío para escalar el Aconcagua, según el texto, no es la dificultad técnica sino...",
        options: ["La falta de guías experimentados", "La presencia de animales peligrosos", "La resistencia física a la altura y las condiciones climáticas extremas e impredecibles", "La burocracia para obtener los permisos de escalada"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La idea de que llegar a la cima es una 'conquista de los propios límites' sugiere que la experiencia es...",
        options: ["Principalmente un logro deportivo para presumir", "Una competencia contra otros escaladores", "Un viaje interior de autodescubrimiento y superación personal", "Un fracaso si no se llega a la cumbre"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Sifón Drago: La Chispa de la Mesa Argentina",
    level: QuestLevel.ADVANCED,
    passage: "Antes de las botellas de plástico, el agua con gas en Argentina tenía un rey: el sifón de vidrio. Y el rey de los sifones era el 'Drago'. Inventado en 1965 por Enrique e Hijos, solucionó un problema clave: los sifones comunes se recargaban en plantas que no siempre garantizaban la higiene. El Sifón Drago, con su cabezal de plástico a rosca, permitía que cada familia lo recargara en casa con una pequeña garrafa de CO2, garantizando su pureza. Se convirtió en un objeto icónico, presente en millones de hogares. Era más que un utensilio; era el centro de la mesa familiar, el sonido característico del almuerzo del domingo, la chispa que se agregaba al vino tinto para hacer el popular 'vino con soda'. Aunque hoy compite con las botellas descartables, el Sifón Drago sobrevive como un objeto de culto, un testimonio del ingenio argentino y de una época donde las cosas se hacían para durar.",
    vocabulary: [
      { word: "Icónico", definition: "Que es un símbolo o una representación muy conocida de algo." },
      { word: "Utensilio", definition: "Objeto fabricado que se destina a un uso manual y doméstico." },
      { word: "Culto", definition: "Admiración o veneración de la que es objeto una persona o una cosa." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál fue la principal innovación del Sifón Drago que lo hizo tan exitoso?",
        options: ["Ser el primer sifón de vidrio del mundo", "Su diseño colorido y atractivo", "Permitir una recarga casera, higiénica y segura", "Ser mucho más barato que el agua embotellada"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La descripción del sifón como 'el sonido característico del almuerzo del domingo' sugiere que...",
        options: ["Hacía mucho ruido y era molesto", "Estaba profundamente integrado en los rituales y la vida cotidiana de las familias argentinas", "Solo se podía usar los domingos", "Era un producto de lujo que pocas familias tenían"],
        correctAnswerIndex: 1
      },
      {
        questionText: "Comparar el Sifón Drago con las botellas descartables modernas resalta que el sifón representa...",
        options: ["Una tecnología obsoleta y poco práctica", "Una cultura de reutilización y durabilidad en contraste con la cultura de 'usar y tirar'", "Un peligro para la seguridad del hogar", "La única forma de beber agua con gas"],
        correctAnswerIndex: 1
      }
    ]
  }
];
