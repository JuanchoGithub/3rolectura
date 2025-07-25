import { QuestData, QuestLevel } from '../../types';

export const INTERMEDIATE_QUESTS: QuestData[] = [
  {
    title: "El Cartero de la Puna",
    level: QuestLevel.INTERMEDIATE,
    passage: "En los pequeños pueblos de la Puna, a más de 4000 metros de altura, el cartero no viaja en camioneta. Viaja a pie o en mula, por caminos donde solo el viento se atreve a pasar. No lleva solo cartas; lleva noticias, encargos, medicinas y, a veces, es la única visita que una familia recibe en semanas. Su llegada es un acontecimiento. Se comparte un mate, se cuentan historias. El cartero de la Puna es más que un empleado; es un lazo que une a las comunidades aisladas, un hilo de humanidad que teje la red social en uno de los lugares más solitarios y hermosos del planeta.",
    vocabulary: [
      { word: "Puna", definition: "Una meseta de gran altitud, característica de la región de los Andes." },
      { word: "Acontecimiento", definition: "Un suceso importante o programado." },
      { word: "Lazo", definition: "Una unión o vínculo que conecta a las personas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cómo viaja el cartero de la Puna?",
        options: ["En helicóptero", "En un tren de alta velocidad", "A pie o en mula", "En una moderna camioneta 4x4"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué lleva el cartero además de cartas?",
        options: ["Solo paquetes y postales", "Noticias, encargos y medicinas", "Animales para vender", "Comida para su propio viaje"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El rol del cartero en la Puna es importante porque...",
        options: ["Es el único que sabe leer", "Es la persona más rica de la región", "Actúa como un vínculo vital entre comunidades aisladas", "Organiza las fiestas del pueblo"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Asado: Más que una Comida",
    level: QuestLevel.INTERMEDIATE,
    passage: "El asado en Argentina es mucho más que solo carne a la parrilla. Es un ritual. Comienza mucho antes de que el fuego se encienda, con la discusión sobre quién será el 'asador'. Continúa con la gente reuniéndose alrededor de la parrilla, charlando mientras el aroma de la carne inunda el aire. No importa si es en un patio lujoso o en una simple terraza; el asado es una excusa para juntarse. Es el domingo en familia, la reunión con amigos, la celebración de cualquier cosa. Es un momento para compartir no solo la comida, sino también el tiempo, las historias y la amistad. El fuego lento de la parrilla es el fuego lento de las relaciones que se cocinan a su alrededor.",
    vocabulary: [
      { word: "Asado", definition: "Tanto la técnica de cocer carne a la parrilla como el evento social que la rodea." },
      { word: "Ritual", definition: "Una serie de acciones realizadas de una manera prescrita y que tienen un significado simbólico." },
      { word: "Asador", definition: "La persona encargada de cocinar el asado." }
    ],
    comprehensionQuestions: [
      {
        questionText: "Según el texto, el asado es principalmente...",
        options: ["Una forma rápida de cocinar", "Una comida que solo se come en restaurantes", "Un ritual social para juntarse y compartir", "Una competencia para ver quién come más"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué es tan importante como la comida en un asado?",
        options: ["Ver la televisión", "El silencio y la meditación", "Compartir tiempo, historias y amistad", "Hacer negocios"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La frase 'El fuego lento de la parrilla es el fuego lento de las relaciones' sugiere que...",
        options: ["El asado tarda mucho en cocinarse", "Las relaciones, como el asado, necesitan tiempo y cuidado para desarrollarse", "La gente discute mucho durante los asados", "El fuego es peligroso para las relaciones"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Carnaval de Tilcara",
    level: QuestLevel.INTERMEDIATE,
    passage: "En la Quebrada de Humahuaca, el carnaval no es solo una fiesta de disfraces. Es un ritual de agradecimiento a la Pachamama, la Madre Tierra. El carnaval comienza con el 'desentierro' del diablo, un muñeco que representa la alegría y el desenfreno, que estaba enterrado desde el año anterior. Durante una semana, la gente baila al ritmo de la anateada y el erke, se arroja harina y talco, y comparte bebidas. No hay extraños, todos son parte de la celebración. El final llega con el 'entierro' del diablo, que vuelve a la tierra hasta el próximo año, prometiendo regresar. Es un ciclo de alegría, liberación y conexión con la tierra.",
    vocabulary: [
      { word: "Pachamama", definition: "Deidad que representa a la Madre Tierra en las culturas andinas." },
      { word: "Desenfreno", definition: "Falta total de moderación en los actos o en las palabras." },
      { word: "Anateada", definition: "Música tradicional del carnaval de la Quebrada de Humahuaca, tocada con anatas (un tipo de flauta)." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué se agradece durante el carnaval de Tilcara?",
        options: ["La buena cosecha", "La llegada del verano", "A la Pachamama (Madre Tierra)", "El fin del año escolar"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué representa el 'diablo' que se desentierra?",
        options: ["El mal y la oscuridad", "La alegría y el desenfreno", "Un antiguo rey", "El espíritu de la montaña"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El carnaval de Tilcara es un ciclo que representa...",
        options: ["La vida y la muerte", "La siembra y la cosecha", "La alegría, liberación y conexión con la tierra", "La guerra y la paz"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Difunta Correa",
    level: QuestLevel.INTERMEDIATE,
    passage: "La historia de la Difunta Correa es una de las creencias populares más fuertes de Argentina. Cuenta la leyenda que Deolinda Correa siguió a pie a su marido, que había sido reclutado a la fuerza, a través del desierto de San Juan. Llevaba a su bebé en brazos. El calor y la sed la vencieron y murió. Cuando unos arrieros la encontraron, su bebé todavía estaba vivo, amamantándose de su pecho. Se convirtió en una santa popular. La gente le construye pequeños santuarios al costado de las rutas y le deja botellas de agua como ofrenda, para calmar la sed que ella sufrió. Es un símbolo de fe y de la protección maternal más allá de la muerte.",
    vocabulary: [
      { word: "Arriero", definition: "Persona que se dedica al transporte de mercancías por medio de animales de carga." },
      { word: "Santuario", definition: "Un lugar sagrado." },
      { word: "Ofrenda", definition: "Un regalo o don que se presenta en señal de gratitud o respeto, especialmente a una deidad." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Por qué Deolinda Correa cruzaba el desierto?",
        options: ["Estaba buscando un tesoro", "Estaba siguiendo a su marido reclutado", "Estaba en una peregrinación religiosa", "Se había perdido"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué milagro se le atribuye a la Difunta Correa?",
        options: ["Hacer llover en el desierto", "Convertir las piedras en pan", "Mantener a su bebé vivo después de su muerte", "Encontrar un oasis"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Por qué la gente le deja botellas de agua en sus santuarios?",
        options: ["Para que los viajeros tengan agua", "Como un símbolo para calmar la sed que ella sufrió", "Para regar las plantas del santuario", "Porque es una tradición sin un significado claro"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "La Ciudad Sumergida de la Laguna de Gómez",
    level: QuestLevel.INTERMEDIATE,
    passage: "Cerca de Junín, la Laguna de Gómez es famosa por sus pejerreyes. Pero esconde una historia. Debajo de sus aguas se encuentran las ruinas del antiguo Fuerte de la Federación. En la década de 1930, una inundación histórica y persistente obligó a los habitantes a abandonar el pueblo, que fue lentamente cubierto por el agua. Hoy, cuando la laguna baja su nivel, emergen los restos de la iglesia, las calles y los cimientos de las casas, como un fantasma de ladrillos. Los pescadores dicen que a veces, sus líneas se enganchan en los techos de un pueblo que se negó a desaparecer por completo, un recuerdo silencioso de la fuerza implacable del agua.",
    vocabulary: [
      { word: "Pejerrey", definition: "Un tipo de pez de agua dulce muy popular en Argentina." },
      { word: "Sumergido", definition: "Que está completamente cubierto por agua." },
      { word: "Implacable", definition: "Que no se puede aplacar o calmar; severo, inflexible." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué hay debajo de la Laguna de Gómez?",
        options: ["Un tesoro español", "Las ruinas de un antiguo fuerte y pueblo", "Una base militar secreta", "Un volcán inactivo"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Por qué fue abandonado el pueblo?",
        options: ["Por una guerra", "Por una sequía extrema", "Por una gran inundación", "Por una plaga de insectos"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Las ruinas que emergen son un recuerdo de...",
        options: ["Una gran fiesta", "La construcción del ferrocarril", "La visita de un rey", "La fuerza de la naturaleza"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Malambo: La Danza de la Tierra",
    level: QuestLevel.INTERMEDIATE,
    passage: "El malambo no es un baile de pareja. Es un desafío, una demostración de destreza y resistencia del gaucho. Se baila solo, con el zapateo como único protagonista. Los pies del bailarín golpean el suelo con una velocidad y precisión asombrosas, creando ritmos complejos que suenan como el galope de un caballo o el latido del corazón de la pampa. No hay música melódica, solo el ritmo de una guitarra o un bombo legüero que acompaña el trueno de las botas. Es una conversación entre el hombre y la tierra. El gaucho no baila sobre el escenario, baila con la tierra, la hace sonar, la despierta.",
    vocabulary: [
      { word: "Malambo", definition: "Danza folclórica argentina individual, ejecutada exclusivamente por hombres, caracterizada por un intenso zapateo." },
      { word: "Zapateo", definition: "Golpear el suelo rítmicamente con los zapatos." },
      { word: "Bombo legüero", definition: "Un gran tambor tradicional argentino, llamado así porque se dice que su sonido puede oírse a una legua de distancia." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es la característica principal del malambo?",
        options: ["Se baila en parejas", "Es una danza lenta y suave", "El intenso zapateo del bailarín", "Usa música de violines"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El malambo es una conversación entre...",
        options: ["Dos bailarines rivales", "El bailarín y la cantante", "El hombre y la tierra", "El público y el artista"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El sonido del zapateo se compara con...",
        options: ["El canto de los pájaros", "El susurro del viento", "El galope de un caballo", "El murmullo de un río"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Meteorito que Eligió Argentina",
    level: QuestLevel.INTERMEDIATE,
    passage: "En una región llamada Campo del Cielo, entre Chaco y Santiago del Estero, no llovieron gotas de agua, sino rocas de hierro del espacio. Hace unos 4000 años, un gran meteorito se fragmentó al entrar en la atmósfera y sembró el área con miles de pedazos. Los pueblos originarios ya conocían estas 'piedras del cielo' y las consideraban sagradas. El fragmento más grande encontrado, llamado 'El Chaco', pesa más de 37 toneladas. Caminar por Campo del Cielo es caminar por un paisaje cósmico. No estás solo en la Tierra; estás tocando piezas de un mundo que viajó millones de kilómetros para terminar su viaje en la llanura argentina.",
    vocabulary: [
      { word: "Meteorito", definition: "Un fragmento de un cuerpo celeste que cae sobre la Tierra." },
      { word: "Fragmentar", definition: "Dividir o romper en pedazos." },
      { word: "Cósmico", definition: "Relativo al universo o cosmos." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué 'llovió' en Campo del Cielo?",
        options: ["Agua bendita", "Oro líquido", "Rocas de hierro del espacio", "Ceniza volcánica"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué es 'El Chaco'?",
        options: ["Una provincia argentina", "El fragmento de meteorito más grande encontrado en la zona", "El nombre del científico que descubrió los meteoritos", "Un tipo de árbol local"],
        correctAnswerIndex: 1
      },
      {
        questionText: "Los pueblos originarios consideraban a estas rocas como...",
        options: ["Materiales para construir casas", "Objetos peligrosos que debían ser destruidos", "Piedras sin valor", "Objetos sagrados"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "La Dama de Blanco de la Recoleta",
    level: QuestLevel.INTERMEDIATE,
    passage: "El Cementerio de la Recoleta es famoso por sus mausoleos lujosos, pero también por sus fantasmas. La historia más famosa es la de Rufina Cambaceres. Era una joven de la alta sociedad que, en 1902, fue declarada muerta y enterrada el día de su cumpleaños número 19. Días después, un cuidador encontró su ataúd movido y la tapa rota. Al abrirlo, vieron que el interior estaba arañado. Rufina había sido enterrada viva, víctima de un ataque de catalepsia, y había despertado en su propia tumba. Su madre le construyó un mausoleo con una escultura de ella, con una mano en la puerta, como si intentara salir. Se dice que su espíritu, la 'Dama de Blanco', todavía vaga por el cementerio.",
    vocabulary: [
      { word: "Mausoleo", definition: "Un sepulcro monumental y lujoso." },
      { word: "Catalepsia", definition: "Un estado en el que el cuerpo se pone rígido y la persona parece estar muerta." },
      { word: "Vagar", definition: "Andar de un lugar a otro sin un destino fijo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué le pasó a Rufina Cambaceres?",
        options: ["Murió de una enfermedad común", "Fue enterrada viva por error", "Se escapó del cementerio", "Era una cuidadora del cementerio"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué es la catalepsia?",
        options: ["Una enfermedad contagiosa", "Un estado que hace que una persona parezca muerta", "Un tipo de flor", "El nombre de una tumba"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La escultura en la tumba de Rufina la muestra...",
        options: ["Sonriendo y saludando", "Durmiendo pacíficamente", "Intentando abrir la puerta de su mausoleo", "Leyendo un libro"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Jorge Luis Borges y el Laberinto",
    level: QuestLevel.INTERMEDIATE,
    passage: "Jorge Luis Borges no escribía historias, construía laberintos con palabras. Ciego durante gran parte de su vida, su mente veía más allá de lo visible. Imaginó bibliotecas infinitas que contenían todos los libros posibles, espejos que reflejaban realidades alternativas y hombres que recordaban cada instante de su vida. Buenos Aires no era solo una ciudad para él, sino un mapa de mitos y símbolos. Leer a Borges es perderse voluntariamente en sus corredores de ideas, donde el tiempo se dobla y la realidad es cuestionable. No buscaba dar respuestas, sino formular preguntas que nos hicieran dudar de lo que creemos saber.",
    vocabulary: [
      { word: "Laberinto", definition: "Lugar formado por calles y encrucijadas, intencionadamente complejo para confundir a quien se adentre en él." },
      { word: "Ciego", definition: "Privado de la vista." },
      { word: "Infinito", definition: "Que no tiene ni puede tener fin ni límite." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cómo se describen las historias de Borges en el texto?",
        options: ["Como novelas románticas", "Como crónicas de viaje", "Como laberintos construidos con palabras", "Como manuales de instrucciones"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué representaba Buenos Aires para Borges?",
        options: ["Un lugar del que quería escapar", "Simplemente su ciudad natal", "Un mapa de mitos y símbolos", "Una ciudad ruidosa y caótica"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál era el objetivo de Borges al escribir, según el texto?",
        options: ["Dar respuestas claras y definitivas", "Contar su propia biografía", "Formular preguntas que hicieran dudar de la realidad", "Criticar la política de su tiempo"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Viaje del Malbec",
    level: QuestLevel.INTERMEDIATE,
    passage: "El Malbec, la uva emblemática de Argentina, no nació aquí. Es una inmigrante francesa. En Francia, era una uva secundaria, propensa a enfermedades. A mediados del siglo XIX, unos visionarios la trajeron a Mendoza. A los pies de los Andes, con el sol intenso y el agua pura de deshielo, la uva encontró su paraíso. Se transformó, volviéndose más suave, frutal y robusta. Mientras una plaga devastaba los viñedos en Europa, el Malbec prosperaba en Argentina. Hoy, el Malbec argentino es famoso en todo el mundo, un ejemplo perfecto de cómo un extranjero puede encontrar su verdadero hogar y florecer de una manera inesperada.",
    vocabulary: [
      { word: "Emblemática", definition: "Que es muy representativo de algo." },
      { word: "Viñedo", definition: "Terreno plantado de vides (la planta de la uva)." },
      { word: "Florecer", definition: "Prosperar, crecer de forma exitosa." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿De dónde es originaria la uva Malbec?",
        options: ["De España", "De Argentina", "De Italia", "De Francia"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué condiciones en Mendoza ayudaron al Malbec a prosperar?",
        options: ["Las lluvias abundantes y la tierra húmeda", "El sol intenso y el agua de deshielo de los Andes", "El clima frío y la sombra de las montañas", "La proximidad al océano"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La historia del Malbec argentino es un ejemplo de...",
        options: ["Un experimento científico que salió mal", "Una casualidad sin importancia", "Cómo un inmigrante puede encontrar un hogar y prosperar", "La superioridad de los productos europeos"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "René Favaloro: El Médico del Pueblo",
    level: QuestLevel.INTERMEDIATE,
    passage: "En el mundo de la medicina, hay nombres que son sinónimo de genialidad. Uno de ellos es el del argentino René Favaloro. Cansado de las desigualdades que veía en la salud, trabajó durante años como médico rural antes de ir a Estados Unidos. Allí, en 1967, desarrolló la técnica del bypass coronario, un procedimiento que ha salvado millones de vidas en todo el mundo. A pesar de su fama mundial, decidió regresar a Argentina para fundar una clínica que combinara la atención médica de excelencia con la investigación y la docencia, accesible para todos. Favaloro demostró que la inteligencia más brillante es la que se pone al servicio de los demás.",
    vocabulary: [
      { word: "Genialidad", definition: "Capacidad intelectual extraordinaria." },
      { word: "Bypass coronario", definition: "Una cirugía que crea un nuevo camino para que la sangre fluya al corazón, evitando arterias bloqueadas." },
      { word: "Excelencia", definition: "Calidad o bondad superior." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál fue la invención revolucionaria de René Favaloro?",
        options: ["El primer trasplante de corazón", "La vacuna contra la polio", "La técnica del bypass coronario", "El descubrimiento de la penicilina"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué hizo Favaloro después de alcanzar la fama mundial?",
        options: ["Se retiró para vivir una vida de lujos", "Regresó a Argentina para fundar una clínica accesible", "Se convirtió en político", "Siguió trabajando en Estados Unidos"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué demostró Favaloro con su vida, según el texto?",
        options: ["Que solo los ricos pueden ser buenos médicos", "Que es imposible cambiar el sistema de salud", "Que la inteligencia debe estar al servicio de los demás", "Que es mejor trabajar en el extranjero"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Y Wladfa: Un Sueño Galés en la Patagonia",
    level: QuestLevel.INTERMEDIATE,
    passage: "En 1865, un barco llamado Mimosa llegó a las costas de Chubut, en la Patagonia. A bordo no venían conquistadores ni buscadores de oro, sino familias de Gales. Su objetivo no era la riqueza, sino la libertad. En su tierra, sentían que su idioma y su cultura estaban desapareciendo bajo la influencia inglesa. Decidieron cruzar el océano para crear 'Y Wladfa' (La Colonia, en galés), un lugar donde pudieran ser ellos mismos. A pesar de la dureza del desierto patagónico, fundaron pueblos como Gaiman y Trevelin, construyeron canales de riego y preservaron sus tradiciones, como el té galés y sus capillas.",
    vocabulary: [
      { word: "Preservar", definition: "Conservar o proteger algo de un daño o peligro." },
      { word: "Capilla", definition: "Una iglesia pequeña." },
      { word: "Determinación", definition: "Firmeza y valor en las decisiones." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el objetivo principal de los inmigrantes galeses?",
        options: ["Encontrar oro", "Comerciar con los pueblos originarios", "Preservar su idioma y cultura", "Escapar del mal clima de Gales"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué significa 'Y Wladfa'?",
        options: ["La Tierra Prometida", "La Nueva Gales", "La Colonia", "El Refugio"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué lograron los colonos galeses a pesar de las dificultades?",
        options: ["Conquistar todo el territorio", "Encontrar grandes riquezas minerales", "Fundar pueblos y mantener vivas sus tradiciones", "Regresar a Gales después de un año"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Los Esteros del Iberá: El Regreso del Yaguareté",
    level: QuestLevel.INTERMEDIATE,
    passage: "Los Esteros del Iberá, en Corrientes, son uno de los humedales más grandes del mundo, un laberinto de agua, islas flotantes y pastizales. Durante décadas, la caza y la pérdida de hábitat hicieron que muchos animales, como el yaguareté (jaguar), desaparecieran de la región. Sin embargo, un ambicioso proyecto de 'rewilding' o renaturalización está cambiando la historia. Científicos y conservacionistas están reintroduciendo especies clave. El regreso del yaguareté, el máximo depredador, es el símbolo de este esfuerzo. Su presencia ayuda a restaurar el equilibrio ecológico del Iberá, demostrando que con esfuerzo, es posible reparar el daño que hemos hecho a la naturaleza.",
    vocabulary: [
      { word: "Humedal", definition: "Una zona de tierra plana cuya superficie está inundada de manera permanente o intermitente." },
      { word: "Yaguareté", definition: "El jaguar, el felino más grande de América." },
      { word: "Renaturalización", definition: "El proceso de restaurar un área a su estado natural original." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué son los Esteros del Iberá?",
        options: ["Una cadena montañosa", "Un desierto de sal", "Uno de los humedales más grandes del mundo", "Un bosque seco"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál es el objetivo del proyecto de 'rewilding' en Iberá?",
        options: ["Crear un parque de diversiones", "Construir una nueva ciudad", "Reintroducir especies que habían desaparecido para restaurar el ecosistema", "Plantar árboles para la industria maderera"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Por qué es tan simbólico el regreso del yaguareté?",
        options: ["Porque es un animal fácil de criar en cautiverio", "Porque su piel es muy valiosa", "Porque es el máximo depredador y su presencia ayuda a restaurar el equilibrio ecológico", "Porque atrae a muchos cazadores a la región"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Fileteado Porteño: El Arte que Rueda",
    level: QuestLevel.INTERMEDIATE,
    passage: "Si caminas por Buenos Aires, es posible que veas un estilo de arte ornamental muy particular en carteles, camiones o fachadas: es el fileteado porteño. Nació a principios del siglo XX, pintado en los carros grises que transportaban mercadería. Los artistas, casi siempre anónimos, empezaron a decorar los carros con líneas finas, espirales, flores coloridas, dragones y frases populares. Cada elemento tiene un significado. El fileteado era el 'traje de gala' de los vehículos de trabajo. Hoy es reconocido como Patrimonio Cultural de la Humanidad. Es un arte que nació en la calle, del orgullo del trabajador, y se convirtió en un ícono visual de la ciudad.",
    vocabulary: [
      { word: "Ornamental", definition: "Que sirve como adorno o decoración." },
      { word: "Fachada", definition: "La parte exterior de un edificio." },
      { word: "Patrimonio", definition: "Conjunto de bienes y derechos pertenecientes a una persona o, en este caso, a una colectividad." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Dónde se originó el arte del fileteado porteño?",
        options: ["En las galerías de arte de la alta sociedad", "En los carros de mercadería de Buenos Aires", "En los libros de historia", "En las escuelas de diseño"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué elementos son típicos del fileteado?",
        options: ["Líneas rectas y colores opacos", "Figuras geométricas simples", "Líneas finas, espirales, flores, dragones y frases", "Fotografías en blanco y negro"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El texto describe el fileteado como...",
        options: ["Un estilo de grafiti moderno", "Un arte religioso", "Una forma de publicidad", "El 'traje de gala' de los vehículos de trabajo"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Origen del Colectivo",
    level: QuestLevel.INTERMEDIATE,
    passage: "El colectivo, el autobús que es parte del alma de Buenos Aires, nació de una crisis y del ingenio. En la década de 1920, la competencia con los tranvías era dura para los taxistas. Un grupo de ellos, en una charla de café, tuvo una idea: si no podían conseguir un pasajero, ¿por qué no llevar a varios a la vez por un recorrido fijo y una tarifa única? Alargaron la carrocería de sus autos para que entraran más personas y así nació el primer 'taxi-colectivo'. La idea fue un éxito inmediato. Con el tiempo, evolucionó hasta los autobuses que conocemos hoy, pero siempre mantuvo ese espíritu de solución popular y creativa a un problema común.",
    vocabulary: [
      { word: "Ingenio", definition: "Capacidad para inventar o crear cosas con facilidad." },
      { word: "Tarifa", definition: "El precio que se paga por un servicio." },
      { word: "Carrocería", definition: "La parte exterior de un vehículo, montada sobre el chasis." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Quiénes inventaron el colectivo?",
        options: ["El gobierno de la ciudad", "Ingenieros europeos", "Un grupo de taxistas", "Una compañía de tranvías"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál fue la idea original del colectivo?",
        options: ["Ser un transporte de lujo para turistas", "Llevar a varios pasajeros a la vez por un recorrido y tarifa fijos", "Transportar mercancías entre barrios", "Ser un taxi más rápido y pequeño"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El colectivo nació como una solución a...",
        options: ["La falta de autos en la ciudad", "Un problema de tráfico", "El aburrimiento de los taxistas", "Una crisis económica y la competencia con los tranvías"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "La Ruta de los Siete Lagos",
    level: QuestLevel.INTERMEDIATE,
    passage: "En el corazón de la Patagonia, un tramo de la famosa Ruta 40 se convierte en la Ruta de los Siete Lagos. Este camino serpenteante une las ciudades de San Martín de los Andes y Villa La Angostura, ofreciendo algunos de los paisajes más espectaculares de Argentina. A cada curva, aparece un nuevo lago de aguas cristalinas y colores que van del azul profundo al verde esmeralda, como el Machónico, el Falkner y el Nahuel Huapi. El camino está enmarcado por bosques de coihues y lengas, y picos nevados. No es un viaje para hacer con prisa; es una invitación a detenerse, respirar el aire puro y admirar la inmensidad de la naturaleza.",
    vocabulary: [
      { word: "Serpenteante", definition: "Que avanza haciendo curvas u ondulaciones." },
      { word: "Enmarcado", definition: "Rodeado, como si estuviera dentro de un marco." },
      { word: "Inmensidad", definition: "Grandeza, extensión muy grande." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué dos ciudades conecta la Ruta de los Siete Lagos?",
        options: ["Bariloche y El Calafate", "Mendoza y San Juan", "San Martín de los Andes y Villa La Angostura", "Ushuaia y Río Grande"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué característica principal describe a los lagos de la ruta?",
        options: ["Son de agua salada", "Son de aguas cálidas", "Son artificiales", "Son de aguas cristalinas y colores variados"],
        correctAnswerIndex: 3
      },
      {
        questionText: "El texto sugiere que el viaje debe hacerse...",
        options: ["Lo más rápido posible", "Solo en verano", "Sin detenerse", "Con calma para admirar el paisaje"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "La Picada: El Ritual Antes del Asado",
    level: QuestLevel.INTERMEDIATE,
    passage: "Mucho antes de que el asado esté listo, en la mesa aparece la 'picada'. No es una entrada formal, sino un ritual social en sí mismo. Consiste en una tabla de madera llena de pequeños trozos de quesos, salames, jamón, aceitunas y otros embutidos. La gente se reúne a su alrededor, charla, toma un vermú o una cerveza, y va 'picando' mientras espera la comida principal. Es el momento de la conversación relajada, de ponerse al día con amigos y familia. La picada es la perfecta representación de la cultura argentina de compartir: una invitación a la charla, a la compañía y a abrir el apetito no solo por la comida, sino por el buen momento.",
    vocabulary: [
      { word: "Picada", definition: "Una tabla con una variedad de fiambres, quesos y aceitunas para compartir." },
      { word: "Embutido", definition: "Pieza de carne picada y condimentada introducida en una tripa, como el salame o el chorizo." },
      { word: "Vermú", definition: "Un tipo de vino macerado en hierbas, muy popular como aperitivo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué es una picada argentina?",
        options: ["El plato principal de una comida", "Un postre con frutas", "Una tabla con quesos y embutidos para compartir", "Una sopa caliente"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál es la función social principal de la picada?",
        options: ["Reemplazar la cena", "Ser un momento para la conversación y la compañía", "Una competencia para ver quién come más rápido", "Una comida para comer en solitario"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La picada se sirve típicamente...",
        options: ["Después del postre", "Como desayuno", "En lugar del asado", "Antes de la comida principal"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Torrontés: La Cepa Blanca de Altura",
    level: QuestLevel.INTERMEDIATE,
    passage: "Si el Malbec es el rey de los tintos argentinos, la reina de los blancos es la uva Torrontés. A diferencia del Malbec, esta cepa es verdaderamente autóctona de Argentina, nacida del cruce de otras uvas. Su lugar ideal en el mundo son los viñedos de gran altitud del norte, especialmente en Cafayate, Salta. La combinación de sol intenso durante el día y noches frías produce un vino único: muy aromático, con notas florales como el jazmín y frutales como el durazno, pero seco y refrescante en la boca. El Torrontés es el sabor de los Andes norteños embotellado, un vino que engaña a la nariz con su dulzura y sorprende al paladar con su frescura.",
    vocabulary: [
      { word: "Cepa", definition: "Tipo o variedad de uva." },
      { word: "Autóctono", definition: "Originario del lugar en que vive o se encuentra." },
      { word: "Paladar", definition: "El sentido del gusto." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué hace única a la uva Torrontés en Argentina?",
        options: ["Es una uva tinta", "Es la única uva que crece en el sur", "Es una cepa blanca autóctona del país", "Fue importada de Italia"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Dónde se encuentran las mejores condiciones para el cultivo del Torrontés?",
        options: ["En la pampa húmeda", "Cerca de Buenos Aires", "En los viñedos de gran altitud de Salta", "En la costa atlántica"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cómo se describe el sabor del vino Torrontés?",
        options: ["Dulce y espeso", "Amargo y fuerte", "Aromático, pero seco y refrescante", "Similar al vino tinto"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Quinquela Martín: El Pintor de La Boca",
    level: QuestLevel.INTERMEDIATE,
    passage: "Benito Quinquela Martín es el pintor que le dio color al barrio de La Boca. Abandonado de niño, fue adoptado por una familia de carboneros del barrio y trabajó en el puerto desde joven. Su arte nació de esa experiencia: pintó lo que amaba y conocía. Sus cuadros están llenos de barcos enormes, grúas, y hombres fuertes trabajando en el puerto, siempre usando una paleta de colores vibrantes y aplicados con espátula, lo que le daba una textura única. Quinquela no solo pintó su barrio, sino que invirtió sus ganancias en él, donando terrenos y dinero para construir una escuela, un hospital para bebés y un museo. Su arte y su vida son inseparables del paisaje y la gente del puerto de La Boca.",
    vocabulary: [
      { word: "Portuario", definition: "Relativo al puerto de mar." },
      { word: "Paleta", definition: "Gama de colores que usa un pintor." },
      { word: "Filántropo", definition: "Persona que ayuda a los demás de forma desinteresada." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el tema principal de las pinturas de Quinquela Martín?",
        options: ["Paisajes del campo", "Retratos de la alta sociedad", "La vida y el trabajo en el puerto de La Boca", "Naturalezas muertas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué hizo Quinquela Martín con el dinero que ganó con su arte?",
        options: ["Se mudó a Europa", "Lo invirtió en su barrio, donando una escuela y un hospital", "Compró una gran estancia", "Construyó una mansión para sí mismo"],
        correctAnswerIndex: 1
      },
      {
        questionText: "Una característica de su técnica era...",
        options: ["El uso de acuarelas muy diluidas", "Pintar solo en blanco y negro", "El uso de colores vibrantes y la aplicación con espátula", "Crear murales con aerosol"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Ischigualasto: El Valle de la Luna",
    level: QuestLevel.INTERMEDIATE,
    passage: "En la provincia de San Juan existe un paisaje que parece de otro planeta: el Parque Provincial Ischigualasto, conocido como el 'Valle de la Luna'. No es un valle lunar, sino un desierto lleno de extrañas formaciones rocosas esculpidas durante millones de años por la erosión del viento y el agua. Figuras como 'El Hongo' o 'La Cancha de Bochas' despiertan la imaginación. Pero su verdadera riqueza está oculta. Ischigualasto es uno de los yacimientos de fósiles más importantes del mundo del Período Triásico. Permite a los científicos entender cómo era la vida en la Tierra justo cuando los primeros dinosaurios comenzaban a aparecer. Caminar por allí es como leer las páginas de la historia más antigua del planeta.",
    vocabulary: [
      { word: "Formación", definition: "Estructura geológica de rocas con características comunes." },
      { word: "Erosión", definition: "Desgaste de la superficie terrestre por agentes externos, como el agua o el viento." },
      { word: "Yacimiento", definition: "Lugar donde se encuentran de forma natural rocas, minerales o fósiles." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Por qué se conoce a Ischigualasto como el 'Valle de la Luna'?",
        options: ["Porque la luna es siempre visible desde allí", "Por su paisaje desértico y sus extrañas formaciones rocosas", "Porque se encontraron meteoritos lunares", "Porque la NASA tiene una base allí"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué creó las curiosas formas de las rocas?",
        options: ["Antiguos escultores", "Erupciones volcánicas", "La erosión del viento y el agua", "Terremotos"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál es la principal importancia científica del parque?",
        options: ["Es un lugar ideal para observar las estrellas", "Posee minerales únicos en el mundo", "Es un importante yacimiento de fósiles del Período Triásico", "Tiene plantas medicinales que no existen en otro lugar"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Alfajor: Un Ícono Nacional",
    level: QuestLevel.INTERMEDIATE,
    passage: "El alfajor en Argentina es mucho más que una golosina; es un ícono cultural. Consiste en dos o más galletitas suaves unidas por dulce de leche, y a menudo cubiertas de chocolate, merengue o azúcar impalpable. Su origen es árabe, pero Argentina lo adoptó y lo transformó. Cada región tiene su propia versión: los cordobeses, rellenos de dulce de frutas; los santafesinos, con sus capas de hojaldre crocante; y los marplatenses, un clásico con chocolate. Es el regalo que se trae de las vacaciones, el premio después de hacer la tarea, el compañero inseparable del café. Su variedad demuestra la riqueza y diversidad de la cultura del país.",
    vocabulary: [
      { word: "Golosina", definition: "Un dulce o manjar que se come por placer." },
      { word: "Ícono", definition: "Un signo que mantiene una relación de semejanza con el objeto que representa." },
      { word: "Hojaldre", definition: "Una masa crujiente que se separa en muchas capas delgadas al cocerse." }
    ],
    comprehensionQuestions: [
      {
        questionText: "Aunque es un ícono argentino, ¿cuál es el origen del alfajor?",
        options: ["Italiano", "Español", "Francés", "Árabe"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué demuestra la existencia de versiones regionales del alfajor?",
        options: ["Que no hay una receta oficial", "La diversidad cultural del país", "Que es difícil de transportar", "Que solo se consume en ciertas áreas"],
        correctAnswerIndex: 1
      },
      {
        questionText: "Además del dulce de leche, ¿qué otro relleno se menciona para los alfajores cordobeses?",
        options: ["Chocolate", "Crema", "Dulce de frutas", "Mermelada"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Pato: El Deporte Nacional",
    level: QuestLevel.INTERMEDIATE,
    passage: "Aunque el fútbol es la pasión que domina Argentina, su deporte nacional oficial es otro: el pato. Es un juego ecuestre que se originó en el campo entre los gauchos en el siglo XVII. Originalmente, se jugaba con un pato vivo dentro de una bolsa de cuero con asas (de ahí el nombre). Dos equipos de jinetes a caballo competían por agarrar la bolsa y llevarla a su meta. Hoy, por supuesto, se usa una pelota con asas de cuero y hay reglas estrictas. El pato combina la destreza del polo con la rudeza del básquet a caballo. Es un deporte que requiere una increíble habilidad como jinete, fuerza y coraje, y representa la tradición del gaucho.",
    vocabulary: [
      { word: "Ecuestre", definition: "Relativo al caballo o a la equitación." },
      { word: "Destreza", definition: "Habilidad y arte, especialmente en un oficio o deporte." },
      { word: "Jinete", definition: "Persona que monta a caballo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es el deporte nacional oficial de Argentina?",
        options: ["Fútbol", "Polo", "Pato", "Tenis"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Por qué el deporte se llama 'pato'?",
        options: ["Porque los jinetes se mueven como patos", "Porque originalmente se usaba un pato vivo en una bolsa", "Porque el campo de juego tiene forma de pato", "Porque fue inventado por la familia Pato"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El pato es una combinación de la destreza del polo y la rudeza del...",
        options: ["Rugby", "Fútbol americano", "Boxeo", "Básquet"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Bandoneón: El Alma del Tango",
    level: QuestLevel.INTERMEDIATE,
    passage: "No se puede entender el tango sin el sonido melancólico y profundo del bandoneón. Este instrumento, parecido a un acordeón pero con un timbre único, no nació en Argentina. Fue creado en Alemania para tocar música religiosa en iglesias pequeñas. Sin embargo, llegó a Buenos Aires con los inmigrantes y encontró su verdadera vocación en los bares y conventillos del arrabal. Los músicos de tango adoptaron su voz quejumbrosa, perfecta para expresar la nostalgia y el drama del género. Se dice que el bandoneón 'respira' con el movimiento de su fuelle, y sus notas son el verdadero lenguaje del corazón del tango.",
    vocabulary: [
      { word: "Melancólico", definition: "Que expresa una tristeza profunda y sosegada." },
      { word: "Timbre", definition: "La cualidad del sonido que distingue a un instrumento o voz de otro." },
      { word: "Fuelle", definition: "Parte del bandoneón que se abre y se cierra para producir el aire que genera el sonido." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Dónde fue creado el bandoneón?",
        options: ["En Buenos Aires", "En Italia", "En Alemania", "En Francia"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál era la función original del bandoneón?",
        options: ["Tocar en orquestas sinfónicas", "Tocar música para bailar en fiestas", "Acompañar marchas militares", "Tocar música religiosa en iglesias"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué característica del sonido del bandoneón lo hizo perfecto para el tango?",
        options: ["Su sonido alegre y festivo", "Su capacidad para imitar la voz humana", "Su voz quejumbrosa y nostálgica", "Su volumen extremadamente alto"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Las Misiones Jesuíticas Guaraníes",
    level: QuestLevel.INTERMEDIATE,
    passage: "En la selva de la provincia de Misiones se encuentran las ruinas de varias misiones jesuíticas, como las de San Ignacio Miní. Estas ciudades fueron fundadas en los siglos XVII y XVIII por sacerdotes jesuitas para evangelizar al pueblo guaraní. Pero eran mucho más que iglesias. Eran complejos urbanos organizados donde los guaraníes vivían, trabajaban y aprendían oficios, música y arte, fusionando su cultura con la europea. Las misiones protegían a los guaraníes de la esclavitud de los colonos. Las ruinas de arenisca roja, cubiertas por la vegetación, son hoy Patrimonio de la Humanidad y un testimonio silencioso de una utopía social y cultural única en la historia.",
    vocabulary: [
      { word: "Jesuita", definition: "Miembro de la Compañía de Jesús, una orden religiosa católica." },
      { word: "Evangelizar", definition: "Predicar la fe de Jesucristo o las virtudes cristianas." },
      { word: "Utopía", definition: "Un plan, proyecto, doctrina o sistema optimista que aparece como irrealizable en el momento de su formulación." }
    ],
    comprehensionQuestions: [
      {
        questionText: "Además de la evangelización, ¿qué otra función vital cumplían las misiones?",
        options: ["Servir como fuertes militares", "Proteger a los guaraníes de la esclavitud", "Funcionar como centros de comercio de oro", "Ser lugares de vacaciones para los europeos"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué representan las ruinas hoy en día?",
        options: ["Un ejemplo de arquitectura fallida", "Un testimonio de una utopía social y cultural", "Un antiguo centro ceremonial abandonado", "Una advertencia sobre los peligros de la selva"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Dónde se encuentran las ruinas de San Ignacio Miní?",
        options: ["En Paraguay", "En la provincia de Buenos Aires", "En Brasil", "En la provincia de Misiones"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Gauchito Gil: Fe al Costado del Camino",
    level: QuestLevel.INTERMEDIATE,
    passage: "En las rutas de Argentina, es común ver pequeños santuarios rojos adornados con banderas y cintas. Están dedicados al Gauchito Gil, una de las figuras de devoción popular más importantes del país. La leyenda cuenta que Antonio Gil fue un gaucho del siglo XIX que se rebeló contra las autoridades y robaba a los ricos para dar a los pobres. Fue capturado y, antes de ser ejecutado, le dijo a su verdugo que su hijo estaba muy enfermo y que debía rezarle a él, al Gauchito, para que se salvara. El verdugo lo hizo y su hijo sanó. Desde entonces, es considerado un santo milagroso para la gente del pueblo, un símbolo de rebeldía y protección para los más necesitados.",
    vocabulary: [
      { word: "Devoción", definition: "Veneración y fervor religioso." },
      { word: "Verdugo", definition: "Persona encargada de ejecutar a los condenados a muerte." },
      { word: "Milagroso", definition: "Que obra milagros o que es inexplicable por las leyes naturales." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué se puede ver comúnmente en las rutas argentinas?",
        options: ["Estatuas de políticos", "Pequeños santuarios rojos", "Torres de vigilancia antiguas", "Mercados de frutas"],
        correctAnswerIndex: 1
      },
      {
        questionText: "Según la leyenda, ¿qué hizo el Gauchito Gil?",
        options: ["Fundó un pueblo", "Fue un político famoso", "Robaba a los ricos para darle a los pobres", "Descubrió una mina de oro"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál fue el primer milagro que se le atribuye?",
        options: ["Hacer llover durante una sequía", "Multiplicar los panes", "Sanar al hijo de su propio verdugo", "Encontrar a una persona perdida"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Teatro Colón: Un Templo de la Acústica",
    level: QuestLevel.INTERMEDIATE,
    passage: "El Teatro Colón de Buenos Aires no es solo un edificio hermoso; es considerado uno de los teatros de ópera más importantes del mundo por su acústica casi perfecta. Inaugurado en 1908, su sala principal en forma de herradura permite que el sonido llegue con una claridad y calidad excepcionales a cada uno de los asientos, sin importar el precio de la entrada. Por su escenario han pasado los más grandes cantantes de ópera y directores de orquesta de la historia. El teatro tiene sus propios talleres de producción, donde se fabrican desde cero las escenografías, los trajes y las pelucas. Es una verdadera ciudad dedicada al arte que representa el esplendor cultural de una época.",
    vocabulary: [
      { word: "Acústica", definition: "La cualidad de un lugar en relación con cómo se oye el sonido en él." },
      { word: "Herradura", definition: "Pieza de metal en forma de U que se clava en los cascos de los caballos." },
      { word: "Escenografía", definition: "Los decorados utilizados en una representación escénica." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Por qué es mundialmente famoso el Teatro Colón?",
        options: ["Por ser el teatro más grande del mundo", "Por su historia política", "Por su acústica casi perfecta", "Por sus espectáculos de tango"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué característica especial tienen sus producciones?",
        options: ["Siempre usan la misma escenografía", "Contratan todo en el extranjero", "Fabrican todo en sus propios talleres", "Solo presentan obras de autores argentinos"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La forma de la sala principal ayuda a que el sonido llegue bien a...",
        options: ["Solo los asientos más caros", "Únicamente al escenario", "Cada uno de los asientos", "Solo la primera fila"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Península Valdés: Santuario de Ballenas",
    level: QuestLevel.INTERMEDIATE,
    passage: "Cada año, entre junio y diciembre, la costa de Península Valdés, en Chubut, se convierte en el escenario de un espectáculo natural conmovedor. La Ballena Franca Austral llega a estas aguas protegidas para cumplir su ciclo de reproducción: aparearse, dar a luz y criar a sus ballenatos. Estos gigantes gentiles, que pueden medir hasta 16 metros, se acercan a la costa, permitiendo avistajes increíbles. Durante mucho tiempo fueron cazadas casi hasta la extinción. Hoy, su regreso a Valdés, un Patrimonio de la Humanidad, es un símbolo de esperanza y del éxito de los esfuerzos de conservación marina, un tesoro natural que Argentina protege y comparte con el mundo.",
    vocabulary: [
      { word: "Santuario", definition: "Un lugar seguro o de refugio, especialmente para la vida silvestre." },
      { word: "Avistaje", definition: "La acción de observar animales, especialmente aves o ballenas, en su hábitat natural." },
      { word: "Extinción", definition: "La desaparición completa de una especie." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Para qué viajan las Ballenas Francas Australes a Península Valdés?",
        options: ["Para hibernar durante el invierno", "Para alimentarse de peces locales", "Para cumplir su ciclo de reproducción", "Para escapar de sus depredadores"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El regreso de las ballenas a la zona es un símbolo de...",
        options: ["El cambio climático", "Un nuevo tipo de turismo", "El éxito de los esfuerzos de conservación", "La sobrepoblación de ballenas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál era la situación de estas ballenas en el pasado?",
        options: ["Eran más numerosas que hoy", "Fueron cazadas casi hasta la extinción", "Vivían en ríos en lugar del mar", "Eran consideradas animales sagrados"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Truco: Más que un Juego de Cartas",
    level: QuestLevel.INTERMEDIATE,
    passage: "El truco es el juego de cartas más popular de Argentina, pero es mucho más que eso. Es un teatro en miniatura. Se juega con baraja española y el objetivo es ganar puntos, pero la verdadera esencia del juego está en el engaño y la astucia. Los jugadores se comunican con señas secretas para informarse sobre las cartas que tienen. Cantan 'quiero' o 'no quiero' a los desafíos y la mentira es una herramienta fundamental. Un jugador puede tener cartas terribles, pero si actúa con confianza y miente bien, puede ganar la mano. Es un juego que celebra la picardía, la psicología y la capacidad de leer a tu oponente.",
    vocabulary: [
      { word: "Baraja", definition: "Conjunto de cartas o naipes." },
      { word: "Astucia", definition: "Habilidad para engañar o evitar el engaño y lograr un objetivo." },
      { word: "Picardía", definition: "Intención o acción astuta y maliciosa, pero sin gran maldad." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es la verdadera esencia del truco, según el texto?",
        options: ["Tener las mejores cartas", "Jugar en silencio", "El engaño y la astucia", "Seguir las reglas estrictamente"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Para qué se usan las señas en el truco?",
        options: ["Para pedir más cartas", "Para comunicarse en secreto las cartas que se tienen", "Para distraer al oponente", "Para indicar el final del juego"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El texto sugiere que en el truco es posible ganar con malas cartas si...",
        options: ["Uno es muy afortunado", "El oponente se distrae", "Se miente bien y se actúa con confianza", "Se hace trampa cambiando las cartas"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Les Luthiers: Humor con Instrumentos Informales",
    level: QuestLevel.INTERMEDIATE,
    passage: "Les Luthiers es un grupo argentino que ha hecho reír a todo el mundo hispanohablante con una propuesta única: combinar música y humor de alta calidad. Su nombre viene del francés 'luthier' (fabricante de instrumentos), porque una de sus características principales es que fabrican sus propios instrumentos a partir de objetos cotidianos. Por ejemplo, han creado el 'latín' (un violín hecho con una lata), o la 'gom-horn' (una trompeta hecha con una manguera). Sus espectáculos son una mezcla de diálogos ingeniosos, parodias de géneros musicales y la interpretación de música con estos instrumentos informales. Su humor es inteligente, universal y demuestra que se puede hacer reír sin recurrir a lo obvio.",
    vocabulary: [
      { word: "Luthier", definition: "Una persona que construye o repara instrumentos de cuerda." },
      { word: "Informal", definition: "Que no es convencional o estándar." },
      { word: "Parodia", definition: "Una imitación burlesca de una obra o del estilo de alguien." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es la característica más distintiva de Les Luthiers?",
        options: ["Cantan en francés", "Fabrican y tocan sus propios instrumentos con objetos cotidianos", "Solo hacen humor político", "Sus conciertos son gratuitos"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El humor de Les Luthiers se caracteriza por ser...",
        options: ["Simple y fácil", "Agresivo y polémico", "Inteligente y universal", "Exclusivamente para niños"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué es el 'latín' en el contexto de Les Luthiers?",
        options: ["El idioma que usan en sus canciones", "Un premio que ganaron", "Un violín hecho con una lata", "El apodo del líder del grupo"],
        correctAnswerIndex: 2
      }
    ]
  }
];