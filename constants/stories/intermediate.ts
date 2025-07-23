import { QuestData, QuestLevel } from '../../types';

export const INTERMEDIATE_QUESTS: QuestData[] = [
  {
    title: "El Secreto de las Cataratas del Iguazú",
    level: QuestLevel.INTERMEDIATE,
    passage: "La leyenda guaraní cuenta que en el río Iguazú vivía una serpiente gigante llamada Mboi. Los guaraníes debían sacrificar a una doncella cada año para calmarla. Un año, la elegida fue una joven llamada Naipí, de quien un guerrero, Tarobá, estaba enamorado. Para salvarla, Tarobá la raptó y escaparon en canoa por el río. Mboi, furiosa, se encorvó tanto que partió la tierra, creando las gigantescas cataratas. A Naipí la convirtió en una de las rocas centrales, y a Tarobá en un árbol en la orilla. Ahora, el arcoíris que se forma sobre las cataratas es el puente que une sus almas para siempre.",
    vocabulary: [
      { word: "Catarata", definition: "Una cascada de agua muy grande y potente." },
      { word: "Doncella", definition: "Una mujer joven, especialmente una que no está casada." },
      { word: "Sacrificar", definition: "Ofrecer algo o a alguien a una deidad como señal de obediencia o para pedir un favor." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Por qué se crearon las cataratas, según la leyenda?",
        options: ["Por un terremoto", "Por la furia de la serpiente Mboi", "Por la caída de un meteorito", "Por la acción de un dios bueno"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿En qué fueron convertidos Naipí y Tarobá?",
        options: ["En peces", "En estrellas", "En una roca y un árbol", "En dos mariposas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué representa el arcoíris sobre las cataratas?",
        options: ["La furia de Mboi", "La lluvia que viene", "Un fenómeno científico sin más", "El puente que une las almas de los amantes"],
        correctAnswerIndex: 3
      }
    ]
  },
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
    title: "El Glaciar Perito Moreno No Se Rinde",
    level: QuestLevel.INTERMEDIATE,
    passage: "El Glaciar Perito Moreno, en la Patagonia, es un gigante de hielo que no se comporta como los demás. Mientras la mayoría de los glaciares del mundo retroceden por el calentamiento global, el Perito Moreno avanza. Lentamente, choca contra la Península de Magallanes, formando un dique de hielo que corta el paso del agua del lago. La presión del agua crece hasta que, cada ciertos años, provoca una ruptura espectacular. Gigantescos bloques de hielo caen al agua con un estruendo que parece el fin del mundo. Es un recordatorio del poder inmenso de la naturaleza, un espectáculo de vida y movimiento en un mundo de hielo.",
    vocabulary: [
      { word: "Glaciar", definition: "Una gran masa de hielo que se forma en las partes altas de las montañas y desciende lentamente." },
      { word: "Retroceder", definition: "Ir hacia atrás." },
      { word: "Estruendo", definition: "Un ruido muy fuerte." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué hace especial al Glaciar Perito Moreno?",
        options: ["Es el glaciar más grande del mundo", "Está hecho de hielo azul", "Avanza en lugar de retroceder", "Se derrite completamente en verano"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué sucede cuando el glaciar choca con la península?",
        options: ["Provoca un terremoto", "Forma un dique de hielo y detiene el agua", "Cambia el clima de la región", "Se detiene por completo"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La ruptura del glaciar es un espectáculo que muestra...",
        options: ["La fragilidad del hielo", "El poder de la naturaleza", "Los efectos de la contaminación", "La llegada de la primavera"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Secreto de la Yerba Mate",
    level: QuestLevel.INTERMEDIATE,
    passage: "La leyenda guaraní cuenta que un día, el dios Tupá bajó a la tierra disfrazado de anciano. Una familia muy pobre, que solo tenía una hija, lo recibió en su humilde cabaña y compartió con él su única comida. Agradecido por su hospitalidad, Tupá les reveló su identidad y les dio un regalo: una planta nueva, la yerba mate. Les enseñó a secar sus hojas y a preparar una infusión que sería símbolo de amistad y bienvenida. La hija de la familia fue transformada en la diosa de la yerba, Caá Yarí, para proteger la planta para siempre. Por eso, cada vez que un argentino ceba un mate, está compartiendo más que una bebida; está compartiendo un legado de hospitalidad.",
    vocabulary: [
      { word: "Yerba Mate", definition: "Planta con cuyas hojas secas se prepara la infusión del mate." },
      { word: "Hospitalidad", definition: "Amabilidad y atención con que una persona recibe y acoge a los visitantes o extranjeros." },
      { word: "Legado", definition: "Aquello que se deja o transmite a los sucesores, sea cosa material o inmaterial." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Quién le dio la yerba mate a los guaraníes, según la leyenda?",
        options: ["Un conquistador español", "El dios Tupá", "Un sabio de la tribu", "La luna"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Por qué les hizo este regalo?",
        options: ["Porque se lo pidieron", "Como agradecimiento por su hospitalidad", "A cambio de un tesoro", "Porque le sobraban plantas"],
        correctAnswerIndex: 1
      },
      {
        questionText: "El mate es un símbolo de...",
        options: ["Riqueza", "Guerra", "Soledad", "Amistad y bienvenida"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Cóndor que Enseñó a Volar",
    level: QuestLevel.INTERMEDIATE,
    passage: "En los Andes, un joven pastor llamado Cusi soñaba con volar. Veía a los cóndores planear majestuosamente y anhelaba sentir el viento bajo sus brazos. Un día, encontró un pichón de cóndor herido. Lo cuidó, lo alimentó y lo protegió hasta que sus alas sanaron. Cuando el cóndor estuvo fuerte, en lugar de irse, se quedó con Cusi. Lo llevaba en su lomo y volaban juntos sobre las cumbres. El cóndor no le enseñó a Cusi a volar con alas de plumas, sino con el espíritu. Le enseñó a ver el mundo desde otra perspectiva, a entender la grandeza de la naturaleza y la importancia de la libertad. Cusi nunca voló por sí mismo, pero su corazón aprendió a planear para siempre.",
    vocabulary: [
      { word: "Planear", definition: "Volar sin mover las alas, aprovechando las corrientes de aire." },
      { word: "Majestuosamente", definition: "Con grandeza, solemnidad y elegancia." },
      { word: "Perspectiva", definition: "Un punto de vista o una forma de ver las cosas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el sueño de Cusi?",
        options: ["Ser rico", "Ser un gran guerrero", "Volar como los cóndores", "Tener el rebaño más grande"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cómo logró Cusi volar?",
        options: ["Construyó unas alas de madera", "Un cóndor agradecido lo llevó en su lomo", "Un hechicero le dio un poder mágico", "Nunca logró volar"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Cuál fue la lección más importante que aprendió Cusi?",
        options: ["Que los cóndores son peligrosos", "A construir un refugio en la montaña", "A ver el mundo desde una nueva perspectiva y valorar la libertad", "A cazar animales salvajes"],
        correctAnswerIndex: 2
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
    title: "El Alfajor: Un Abrazo de Dulce de Leche",
    level: QuestLevel.INTERMEDIATE,
    passage: "El alfajor es más que una golosina en Argentina; es un ícono. Dos galletitas suaves que se unen para abrazar un corazón de dulce de leche, a menudo cubiertas de chocolate o merengue. Cada región tiene su propia versión: los cordobeses con sus tapas de maicena, los santafesinos con sus capas de hojaldre. Es el regalo que se trae de las vacaciones, el premio después de hacer la tarea, el compañero del café. No es un postre complicado, pero su simpleza es su genialidad. Comer un alfajor es como recibir un pequeño abrazo comestible, un momento de pura felicidad que se deshace en la boca.",
    vocabulary: [
      { word: "Alfajor", definition: "Una golosina que consiste en dos o más galletas unidas por un relleno dulce y generalmente bañadas en chocolate, glaseado o azúcar en polvo." },
      { word: "Merengue", definition: "Una crema dulce hecha de claras de huevo batidas a punto de nieve y azúcar." },
      { word: "Hojaldre", definition: "Una masa crujiente que se separa en muchas capas delgadas al cocerse." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es el relleno más común de un alfajor argentino?",
        options: ["Mermelada de frutilla", "Crema de maní", "Dulce de leche", "Chocolate"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Según el texto, comer un alfajor es como...",
        options: ["Resolver un problema difícil", "Correr una maratón", "Recibir un pequeño abrazo comestible", "Escuchar una canción triste"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué demuestra la existencia de diferentes tipos de alfajores en cada región?",
        options: ["Que a nadie le gusta el mismo alfajor", "Que es una golosina muy importante y adaptada localmente", "Que es muy difícil de hacer", "Que solo se come en algunas partes del país"],
        correctAnswerIndex: 1
      }
    ]
  }
];
