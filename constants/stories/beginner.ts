import { QuestData, QuestLevel } from '../../types';

export const BEGINNER_QUESTS: QuestData[] = [
  {
    title: "El Misterio del Mate Desaparecido",
    level: QuestLevel.BEGINNER,
    passage: "En el tranquilo pueblo de Sierras Chicas, Don Aníbal se despertó una mañana y descubrió que su mate favorito había desaparecido. Era un mate especial, de calabaza y con una bombilla de plata. '¡Caramba!', exclamó. '¿Quién se habrá llevado mi compañero de mañanas?'. Decidido a resolver el misterio, se puso su sombrero de gaucho y salió a investigar. Siguió unas huellas extrañas que lo llevaron hasta el arroyo del pueblo. Allí, junto al agua, vio a una familia de carpinchos muy divertidos. El carpincho más pequeño estaba usando su mate como un barquito de juguete. Don Aníbal sonrió, no podía enojarse con ellos. Les enseñó a usar una hojita como barco y recuperó su preciado mate para el desayuno.",
    vocabulary: [
      { word: "Mate", definition: "Una infusión tradicional y también el recipiente donde se bebe." },
      { word: "Bombilla", definition: "Un sorbete de metal que se usa para beber mate." },
      { word: "Carpincho", definition: "El roedor más grande del mundo, muy común en Argentina." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué le desapareció a Don Aníbal?",
        options: ["Su sombrero", "Su caballo", "Su mate", "Su guitarra"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿A quiénes encontró Don Aníbal en el arroyo?",
        options: ["A unos niños jugando", "A una familia de carpinchos", "A sus vecinos", "A unos turistas"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué estaban haciendo con el mate?",
        options: ["Bebiendo agua", "Usándolo como sombrero", "Jugando a que era un nido", "Usándolo como un barquito"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Árbol que Susurraba en Córdoba",
    level: QuestLevel.BEGINNER,
    passage: "En el corazón de las Sierras de Córdoba, había un antiguo algarrobo que, según la leyenda, susurraba secretos a quienes escuchaban con atención. Dos amigos, Leo y Sofía, decidieron pasar una noche bajo sus ramas para oír sus historias. Cuando salió la luna, una suave brisa agitó las hojas, creando un suave sonido susurrante. No oyeron palabras, pero el pacífico sonido del viento en el viejo árbol les contó una historia de tiempo, paciencia y la belleza de la naturaleza. Aprendieron que, a veces, las mejores historias son las que se sienten en lugar de oírse.",
    vocabulary: [
      { word: "Algarrobo", definition: "Un tipo de árbol común en las regiones áridas de Argentina." },
      { word: "Susurrar", definition: "Hablar en voz muy baja." },
      { word: "Leyenda", definition: "Una historia tradicional a veces considerada popularmente como histórica pero no autenticada." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué tipo de árbol era?",
        options: ["Roble", "Pino", "Algarrobo", "Sauce"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué hicieron Leo y Sofía?",
        options: ["Treparon al árbol", "Durmieron bajo el árbol", "Tallaron sus nombres en el árbol", "Regaron el árbol"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Cuál era la verdadera fuente del susurro?",
        options: ["Un fantasma", "El viento en las hojas", "Animales en el árbol", "Un altavoz escondido"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Gaucho y el Zorro Astuto",
    level: QuestLevel.BEGINNER,
    passage: "Un gaucho llamado Facundo era conocido por sus deliciosas empanadas. Una tarde, un zorro astuto, famoso por sus trucos, se acercó al rancho de Facundo. 'Don Facundo', dijo el zorro, 'le apuesto a que puedo contar todas las estrellas del cielo antes de que termine de hacer su próxima tanda de empanadas'. Facundo, divertido, aceptó el desafío. Mientras el gaucho estaba ocupado amasando la masa, el zorro corrió rápidamente por el rancho y volvió jadeando. '¡Son demasiadas para contarlas!', exclamó, 'pero tengo mucha sed de tanto intentarlo. ¿Me da un vaso de agua?'. Mientras Facundo iba a buscar el agua, el zorro agarró una empanada recién horneada y salió corriendo, dejando al gaucho con una buena historia que contar.",
    vocabulary: [
      { word: "Gaucho", definition: "Un vaquero argentino." },
      { word: "Astuto", definition: "Inteligente y sagaz." },
      { word: "Empanada", definition: "Un tipo de pastel horneado o frito que consiste en masa y relleno." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál fue la apuesta del zorro?",
        options: ["Que podía correr más rápido que el caballo del gaucho", "Que podía contar las estrellas", "Que podía comer más empanadas", "Que podía cantar una canción mejor"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué pidió el zorro?",
        options: ["Una empanada", "Un vaso de agua", "Un lugar para dormir", "Un trabajo en el rancho"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué hizo el zorro al final?",
        options: ["Ayudó al gaucho", "Se durmió", "Robó una empanada", "Contó las estrellas"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "Los Colores de La Boca",
    level: QuestLevel.BEGINNER,
    passage: "En el barrio de La Boca en Buenos Aires, las casas están pintadas con un arcoíris de colores vivos. Una niña llamada Camila le preguntó a su abuelo por qué. Él le explicó que hace mucho tiempo, el barrio era el hogar de marineros y trabajadores portuarios. Usaban la pintura sobrante de los barcos para pintar sus casas. Como nunca había suficiente de un solo color para pintar una casa entera, usaban lo que encontraban, creando las paredes vibrantes y desiguales que hacen famosa a La Boca hoy en día. Camila miró las coloridas calles y no vio solo pintura, sino historias del mar y de la gente que vivía junto a él.",
    vocabulary: [
      { word: "Barrio", definition: "Un vecindario." },
      { word: "Vibrante", definition: "Lleno de energía y vida; brillante y llamativo." },
      { word: "Astillero", definition: "Un lugar donde se construyen y reparan barcos." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿De dónde venía la pintura para las casas?",
        options: ["De una tienda de pintura local", "De la pintura sobrante de los barcos", "De un artista famoso", "Del gobierno"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Por qué las casas están pintadas de tantos colores diferentes?",
        options: ["Porque no podían decidirse por un color", "Porque no había suficiente de un solo color", "Porque cada color representa a una familia diferente", "Porque era para un festival"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué vio Camila en los colores?",
        options: ["Solo pintura", "Un desastre", "Historias del mar", "Un código secreto"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Leyenda del Cacuy",
    level: QuestLevel.BEGINNER,
    passage: "En el monte santiagueño, se oye un lamento triste por las noches: '¡Turay, Turay!'. Es el canto del Cacuy. La leyenda cuenta que una hermana muy mala trataba muy mal a su hermano. Un día, para castigarla, él la llevó al monte a buscar miel y la dejó en la copa del árbol más alto. Cuando ella se dio cuenta de que estaba sola, empezó a llamar a su hermano ('Turay' en quichua). De la desesperación y la tristeza, se transformó en un pájaro. Desde entonces, vuela por las noches, llamando a su hermano con un canto que estremece.",
    vocabulary: [
      { word: "Cacuy", definition: "Pájaro nocturno de Santiago del Estero, protagonista de una famosa leyenda." },
      { word: "Turay", definition: "Palabra en quichua que significa 'hermano'." },
      { word: "Estremecer", definition: "Causar un temblor o una sacudida, a menudo por una emoción fuerte." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué es el Cacuy?",
        options: ["Un árbol", "Un río", "Un pájaro", "Un duende"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿A quién llama el Cacuy en su canto?",
        options: ["A su madre", "A su padre", "A su hermana", "A su hermano"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Por qué se convirtió en pájaro?",
        options: ["Como un premio", "Como un castigo por su maldad", "Porque quería aprender a volar", "Por un hechizo de una bruja"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Tesoro Escondido de las Salinas Grandes",
    level: QuestLevel.BEGINNER,
    passage: "Las Salinas Grandes, en Jujuy y Salta, son un inmenso desierto de sal que brilla bajo el sol. Una vieja leyenda cuenta que los antiguos habitantes, para proteger sus tesoros de los conquistadores, los arrojaron a una de las lagunas de agua salada. Dicen que en los días de sol muy fuerte, si miras el fondo de los 'ojos del salar', se puede ver el brillo del oro. Dos amigos, Inti y Rayen, pasaron un día entero buscando, pero no encontraron oro. Encontraron algo mejor: el increíble paisaje, el silencio absoluto y la sensación de estar en otro planeta. Comprendieron que el verdadero tesoro no era el oro, sino la belleza única de ese lugar.",
    vocabulary: [
      { word: "Salar", definition: "Un desierto de sal." },
      { word: "Conquistadores", definition: "Los exploradores y soldados españoles que llegaron a América en el siglo XV y XVI." },
      { word: "Ojos del Salar", definition: "Pequeñas lagunas de agua muy salada que aparecen en la superficie del salar." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué es una salina?",
        options: ["Una montaña de arena", "Un desierto de sal", "Un bosque de cactus", "Un río subterráneo"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué tesoro buscaron Inti y Rayen?",
        options: ["Diamantes", "Plata", "Oro", "Esmeraldas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál fue el verdadero tesoro que encontraron?",
        options: ["Una bolsa de monedas antiguas", "Un mapa secreto", "La belleza del paisaje", "Un cofre de joyas"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Viento Zonda y el Huarpe Sabio",
    level: QuestLevel.BEGINNER,
    passage: "El Viento Zonda baja furioso de la cordillera, trayendo un calor seco y llenando todo de polvo en la región de Cuyo. La gente se pone de mal humor y las plantas se secan. Pero un viejo sabio Huarpe le enseñó a su nieto a no maldecir al Zonda. Le explicó que ese viento, aunque molesto en el valle, era señal de que estaba nevando en las altas cumbres. 'Esa nieve', le dijo, 'es el agua que llenará nuestros ríos en verano y nos dará vida'. El niño entendió. El Zonda no era un enemigo, sino un mensajero que traía noticias de la nieve que se convertiría en el agua para sus cosechas. Aprendió a respetar el ciclo completo de la naturaleza.",
    vocabulary: [
      { word: "Zonda", definition: "Un viento caliente y seco característico de la región de Cuyo en Argentina." },
      { word: "Huarpe", definition: "Pueblo originario que habitó la región de Cuyo." },
      { word: "Cumbre", definition: "La parte más alta de una montaña." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué noticia trae el Viento Zonda según el sabio Huarpe?",
        options: ["Que lloverá en el valle", "Que habrá un terremoto", "Que está nevando en las montañas", "Que llegará el invierno"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Por qué es importante la nieve de las montañas?",
        options: ["Para poder esquiar", "Para que el paisaje se vea bonito", "Porque se convierte en el agua de los ríos en verano", "Para enfriar el aire del valle"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué aprendió el niño sobre el Zonda?",
        options: ["Que es un viento peligroso que hay que evitar", "Que es un castigo de los dioses", "Que es parte de un ciclo natural importante para la vida", "Que solo trae polvo y mal humor"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Guitarra Mágica de Atahualpa Yupanqui",
    level: QuestLevel.BEGINNER,
    passage: "Dicen que la guitarra de Atahualpa Yupanqui no era solo de madera y cuerdas. Dicen que estaba hecha con los susurros del viento de la pampa y la soledad de los cerros. Cuando él la tocaba, no salían solo notas, salían paisajes enteros. Se podía oír el galope de un caballo, el murmullo de un arroyo y el silencio de la noche estrellada. Un joven le preguntó una vez: 'Don Ata, ¿cómo hace para que su guitarra hable así?'. Yupanqui, con una sonrisa sabia, le respondió: 'Primero, hay que aprender a escuchar. Io solo traduzco lo que la tierra me cuenta'.",
    vocabulary: [
      { word: "Pampa", definition: "Extensa llanura de América del Sur, sin árboles." },
      { word: "Murmullo", definition: "Un sonido suave, continuo y bajo." },
      { word: "Traducir", definition: "Expresar en un lenguaje lo que se ha expresado previamente en otro." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿De qué estaba hecha la guitarra de Yupanqui, según la historia?",
        options: ["De oro y plata", "Del viento y la soledad de los cerros", "De un árbol milenario", "De un material secreto"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué salía de la guitarra cuando la tocaba?",
        options: ["Solo música", "Fuego y humo", "Paisajes sonoros", "Agua"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál era el secreto de Yupanqui para tocar así?",
        options: ["Practicar 24 horas al día", "Tener un pacto con un ser mágico", "Saber escuchar a la tierra", "Usar cuerdas especiales"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Faro del Fin del Mundo",
    level: QuestLevel.BEGINNER,
    passage: "En la Isla de los Estados, en Tierra del Fuego, se encuentra el Faro de San Juan de Salvamento, más conocido como 'El Faro del Fin del Mundo'. Durante años, fue la única luz que guiaba a los barcos en uno de los pasajes más peligrosos del planeta. Imagina a los marineros, después de semanas de ver solo olas grises y cielo tormentoso, divisando esa pequeña luz parpadeante. No era solo una guía para no chocar contra las rocas; era una promesa de que la tierra firme existía, de que no estaban solos en la inmensidad. El faro era un guardián silencioso, un símbolo de esperanza en el lugar más austral y solitario.",
    vocabulary: [
      { word: "Faro", definition: "Una torre alta con una luz potente en la costa, que sirve de guía a los navegantes." },
      { word: "Divisar", definition: "Ver algo a lo lejos." },
      { word: "Austral", definition: "Relativo al sur." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Dónde se encuentra el 'Faro del Fin del Mundo'?",
        options: ["En Buenos Aires", "En la Antártida", "En la Isla de los Estados, Tierra del Fuego", "En la costa de Brasil"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Para los marineros, la luz del faro era un símbolo de...",
        options: ["Peligro inminente", "Una fiesta en la costa", "Esperanza y guía", "La presencia de piratas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El apodo 'Fin del Mundo' se debe a que está en un lugar muy...",
        options: ["Poblado y ruidoso", "Cálido y tropical", "Céntrico y accesible", "Remoto y al sur"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "La Carrera de las Nubes en el Aconcagua",
    level: QuestLevel.BEGINNER,
    passage: "Dos nubes, una pequeña y rápida llamada Nube-i y otra grande y lenta llamada Nube-a, hicieron una carrera para ver quién llegaba primero a la cima del Aconcagua. Nube-i se lanzó velozmente, pero a medida que subía, el viento helado de la montaña la fue deshaciendo. Nube-a, en cambio, avanzó despacio, uniéndose a otras nubes pequeñas en el camino, haciéndose más fuerte y densa. Cuando Nube-i ya casi había desaparecido, Nube-a llegó a la cumbre, grande y poderosa, cubriendo la cima como un sombrero blanco. La montaña le enseñó a las nubes que a veces, para llegar alto, no se necesita velocidad, sino paciencia y la ayuda de los demás.",
    vocabulary: [
      { word: "Aconcagua", definition: "La montaña más alta de América, ubicada en la provincia de Mendoza." },
      { word: "Densa", definition: "Que tiene sus partes muy juntas o apretadas; compacta." },
      { word: "Cumbre", definition: "La parte más alta de una montaña." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el objetivo de la carrera de las nubes?",
        options: ["Llegar al océano", "Llegar a la cima del Aconcagua", "Ver quién hacía llover primero", "Convertirse en nieve"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué le pasó a Nube-i, la nube rápida?",
        options: ["Ganó la carrera", "Se convirtió en lluvia", "El viento helado la deshizo", "Se detuvo a descansar"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál fue la lección que la montaña enseñó?",
        options: ["Que ser rápido es lo más importante", "Que no se debe competir", "Que la paciencia y la ayuda de otros son importantes para llegar alto", "Que las nubes no deben acercarse a las montañas"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Tren a las Nubes",
    level: QuestLevel.BEGINNER,
    passage: "No es un tren común. El Tren a las Nubes, en Salta, es una obra de ingeniería asombrosa que trepa por la Cordillera de los Andes. No usa cremalleras ni cables; avanza por un sistema de zigzags y espirales que le permite ganar altura lentamente. Atraviesa puentes altísimos sobre quebradas profundas y túneles cavados en la roca viva. El viaje es un espectáculo. Abajo, los valles verdes. Arriba, el cielo azul intenso y los picos nevados. El tren no solo lleva turistas; lleva la historia del esfuerzo humano por conectar regiones aisladas, uniendo la tierra con el cielo en uno de los paisajes más impactantes del mundo.",
    vocabulary: [
      { word: "Ingeniería", definition: "El arte y la técnica de aplicar los conocimientos científicos a la invención, diseño y manejo de nuevas máquinas y sistemas." },
      { word: "Zigzag", definition: "Una línea que alterna su dirección en ángulos." },
      { word: "Quebrada", definition: "Un paso estrecho entre montañas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cómo hace el tren para subir la montaña?",
        options: ["Con un motor a reacción", "Es tirado por cables", "Usando un sistema de zigzags y espirales", "Tiene ruedas especiales que se adhieren a la vía"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El Tren a las Nubes es principalmente una hazaña de...",
        options: ["Magia", "Fuerza bruta", "Ingeniería", "Casualidad"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Además de ser una atracción turística, el tren representa...",
        options: ["La forma más rápida de cruzar los Andes", "El esfuerzo por conectar lugares aislados", "Una tradición religiosa", "Un sistema de transporte de mercancías"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "La Payada: El Duelo de las Palabras",
    level: QuestLevel.BEGINNER,
    passage: "En el medio del campo, bajo un ombú, dos gauchos se sientan con sus guitarras. No van a pelear con cuchillos, sino con algo más afilado: el ingenio. Va a empezar una payada. Uno de ellos, el payador, improvisa versos sobre un tema. El otro debe responderle, con la misma métrica y rima, continuando la historia o desafiando al primero. Es un duelo de rapidez mental y poesía repentina. No gana el que grita más fuerte, sino el que tiene la respuesta más ingeniosa, la metáfora más brillante. La payada es el arte de pensar en verso, una conversación cantada que es el corazón de la literatura gaucha.",
    vocabulary: [
      { word: "Payada", definition: "Un arte poético-musical perteneciente a la cultura hispánica, que consiste en un duelo de versos improvisados." },
      { word: "Payador", definition: "La persona que practica el arte de la payada." },
      { word: "Ingenio", definition: "La capacidad de una persona para imaginar o inventar cosas con facilidad." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es el 'arma' principal en una payada?",
        options: ["La guitarra", "El cuchillo", "La voz fuerte", "El ingenio y la palabra"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué significa 'improvisar' en el contexto de la payada?",
        options: ["Cantar canciones ya escritas", "Crear los versos en el momento", "Leer un poema en voz alta", "Contar un chiste"],
        correctAnswerIndex: 1
      },
      {
        questionText: "La payada es, en esencia, un...",
        options: ["Concurso de canto", "Debate político", "Duelo de poesía improvisada", "Partido de truco"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Dinosaurio que Durmió una Siesta de Millones de Años",
    level: QuestLevel.BEGINNER,
    passage: "En la Patagonia, donde el viento sopla fuerte, un equipo de paleontólogos encontró algo increíble. No era un hueso, sino casi un esqueleto completo de un Argentinosaurus, uno de los dinosaurios más grandes que jamás haya existido. Mientras excavaban, uno de los científicos dijo: 'Parece que se acostó a dormir una siesta y se despertó 95 millones de años después'. El descubrimiento fue un viaje en el tiempo. Cada hueso era una palabra de una historia antigua. Nos contaban cómo era este gigante, qué comía y cómo era el mundo en el que vivía, un mundo tan diferente al nuestro, pero que existió en el mismo lugar que hoy pisamos.",
    vocabulary: [
      { word: "Paleontólogo", definition: "Un científico que estudia la vida prehistórica a través de los fósiles." },
      { word: "Fósil", definition: "Restos o señales de la actividad de organismos pasados." },
      { word: "Excavar", definition: "Hacer un hoyo o cavidad en el suelo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué encontraron los paleontólogos en la Patagonia?",
        options: ["Un tesoro pirata", "Una ciudad perdida", "Casi el esqueleto completo de un dinosaurio gigante", "Una cueva con pinturas rupestres"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué tipo de dinosaurio era?",
        options: ["Tyrannosaurus Rex", "Velociraptor", "Argentinosaurus", "Triceratops"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El descubrimiento de los fósiles es como un...",
        options: ["Problema matemático", "Viaje en el tiempo", "Experimento de química", "Juego de azar"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "La Noche de las Pizzerías",
    level: QuestLevel.BEGINNER,
    passage: "En Buenos Aires, hay una noche especial llamada 'La Noche de las Pizzerías'. Esa noche, miles de personas recorren la ciudad para probar las mejores pizzas. No es una competencia oficial, pero todos tienen su pizzería favorita. Una familia, los García, decidieron unirse a la tradición. Visitaron pizzerías famosas en la Avenida Corrientes. Comieron pizza 'al molde', alta y esponjosa, y pizza 'a la piedra', fina y crocante. Compartieron porciones de fugazzeta con mucho queso y cebolla. No eligieron una ganadora, pero disfrutaron de la deliciosa comida y la alegría de la gente, sintiendo el corazón de la ciudad.",
    vocabulary: [
      { word: "Pizzería", definition: "Un restaurante que se especializa en hacer y vender pizzas." },
      { word: "Porción", definition: "Una parte de algo más grande, en este caso, una rebanada de pizza." },
      { word: "Fugazzeta", definition: "Una pizza argentina muy popular que lleva mucha cebolla y queso." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué se celebra en 'La Noche de las Pizzerías'?",
        options: ["Se regalan pizzas", "La gente recorre la ciudad probando pizzas", "Se cocinan pizzas gigantes", "Los niños aprenden a hacer pizza"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué dos tipos de pizza probó la familia García?",
        options: ["Pizza con ananá y pizza con champiñones", "Pizza al molde y pizza a la piedra", "Pizza cuadrada y pizza triangular", "Pizza dulce y pizza salada"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué sintieron los García al final de la noche?",
        options: ["Que habían comido demasiado", "Que su pizzería era la mejor", "El delicioso sabor y la alegría de la gente", "Que preferían las hamburguesas"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Secreto del Dulce de Leche",
    level: QuestLevel.BEGINNER,
    passage: "La abuela de Martina guardaba un secreto delicioso en su cocina: la receta del mejor dulce de leche. Un día, Martina le pidió que se la enseñara. 'El secreto no está solo en los ingredientes, Martina', dijo la abuela. 'Está en la paciencia'. Juntas, pusieron leche y azúcar en una olla grande. Lo revolvieron lentamente, durante mucho, mucho tiempo. La mezcla cambió de color, de blanco a un marrón brillante y espeso. El aroma dulce llenó toda la casa. Martina aprendió que, como las mejores cosas de la vida, el dulce de leche necesitaba tiempo y cariño para ser perfecto. Y el primer panqueque que rellenó con ese dulce de leche fue el más rico que había probado.",
    vocabulary: [
      { word: "Dulce de leche", definition: "Un dulce tradicional hecho con leche y azúcar, muy popular en Argentina." },
      { word: "Receta", definition: "Instrucciones para preparar un plato de comida." },
      { word: "Panqueque", definition: "Una especie de crepe, muy fino, que se come con rellenos dulces o salados." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el secreto de la abuela para el dulce de leche?",
        options: ["Un ingrediente mágico", "Revolver muy rápido", "La paciencia", "Usar mucha azúcar"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué ingredientes usaron?",
        options: ["Leche y miel", "Chocolate y azúcar", "Leche y azúcar", "Crema y caramelo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Con qué comió Martina el dulce de leche?",
        options: ["Con una cuchara", "Con pan", "Con galletitas", "Con un panqueque"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "Un Amigo Inesperado en las Cataratas del Iguazú",
    level: QuestLevel.BEGINNER,
    passage: "En medio de la selva misionera, donde el agua de las Cataratas del Iguazú ruge con fuerza, vive un animal muy curioso: el coatí. Son simpáticos, con narices largas y colas anilladas. Un niño llamado Mateo estaba visitando las cataratas con sus padres. Se sentó a comer una galleta en un banco y, de repente, un coatí se le acercó, mirándolo con sus ojitos brillantes. Mateo, sorprendido, compartió un pedacito de su galleta. El coatí la tomó suavemente y se fue. Mateo aprendió que en la naturaleza, si uno es respetuoso, puede hacer amigos inesperados y que compartir, aunque sea un poquito, te hace sentir bien.",
    vocabulary: [
      { word: "Cataratas del Iguazú", definition: "Un conjunto de cataratas famosas en la frontera entre Argentina y Brasil." },
      { word: "Coatí", definition: "Un mamífero pequeño, pariente del mapache, que vive en las selvas de América." },
      { word: "Ruge", definition: "Hacer un ruido muy fuerte, como el de un león o, en este caso, el agua de las cataratas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Dónde vive el coatí de esta historia?",
        options: ["En la ciudad", "En las montañas", "En la selva, cerca de las Cataratas del Iguazú", "En el desierto"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué estaba haciendo Mateo cuando se le acercó el coatí?",
        options: ["Durmiendo", "Jugando a la pelota", "Sacando fotos", "Comiendo una galleta"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué hizo Mateo con el coatí?",
        options: ["Lo asustó", "Le tiró agua", "Compartió su galleta", "Lo ignoró"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Leyenda de la Flor del Ceibo",
    level: QuestLevel.BEGINNER,
    passage: "La Flor Nacional de Argentina, el ceibo, tiene una leyenda muy valiente. Cuenta la historia de Anahí, una joven guaraní que amaba cantar. Cuando los conquistadores llegaron a sus tierras, la capturaron. Anahí logró escapar una noche, pero la encontraron. Como castigo, la ataron a un árbol para quemarla. Cuando el fuego comenzó, Anahí empezó a cantar una canción a su selva. A la mañana siguiente, los soldados no encontraron a Anahí. En su lugar, el árbol estaba cubierto de hermosas flores rojas, como llamas de fuego y con la dulzura de su voz. Así nació la flor del ceibo, un símbolo de valentía y amor por la tierra.",
    vocabulary: [
      { word: "Ceibo", definition: "Árbol cuya flor roja es la Flor Nacional de Argentina." },
      { word: "Guaraní", definition: "Pueblo indígena que habitaba la región noreste de Argentina y Paraguay." },
      { word: "Conquistadores", definition: "Soldados españoles que llegaron a América en los siglos XV y XVI." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Quién era Anahí?",
        options: ["Una princesa española", "Una joven guaraní que le gustaba cantar", "Una diosa de la luna", "Una guerrera famosa"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué le pasó a Anahí cuando la capturaron y la ataron a un árbol?",
        options: ["Lloró toda la noche", "Pidió ayuda a los dioses", "Empezó a cantar", "Se quedó en silencio"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La flor del ceibo simboliza...",
        options: ["La tristeza y la derrota", "La riqueza y el oro", "La valentía y el amor por la tierra", "La paz y la tranquilidad"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Baile del Tango",
    level: QuestLevel.BEGINNER,
    passage: "El tango no es solo un baile, es una conversación sin palabras. Nació en los barrios de Buenos Aires, donde inmigrantes de muchos países se mezclaban. Con la guitarra, el violín y el bandoneón, contaban sus historias de nostalgia, amor y esperanza. Un niño, Tadeo, veía a sus abuelos bailar. No saltaban ni corrían, caminaban abrazados, con elegancia. Un paso adelante, un paso al costado, una pausa. 'El secreto del tango, Tadeo', le dijo su abuelo, 'es escuchar la música con el corazón y caminar juntos'. Tadeo entendió que el tango era más que pasos, era sentir la música y compartir ese sentimiento con otra persona.",
    vocabulary: [
      { word: "Tango", definition: "Un estilo musical y de danza, característico de la región del Río de la Plata." },
      { word: "Bandoneón", definition: "Un instrumento musical parecido a un acordeón, esencial en el tango." },
      { word: "Inmigrantes", definition: "Personas que llegan a un país diferente del suyo para vivir en él." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Dónde nació el tango?",
        options: ["En el campo", "En los salones de la alta sociedad", "En los barrios de Buenos Aires", "En España"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué instrumento es esencial en la música de tango?",
        options: ["La flauta", "El piano", "La batería", "El bandoneón"],
        correctAnswerIndex: 3
      },
      {
        questionText: "Según el abuelo, ¿cuál es el secreto del tango?",
        options: ["Aprender muchos pasos difíciles", "Vestirse de forma elegante", "Escuchar la música con el corazón y caminar juntos", "Bailar muy rápido"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Glaciar Perito Moreno: Un Río de Hielo",
    level: QuestLevel.BEGINNER,
    passage: "En la Patagonia, hay un gigante de hielo que se mueve. Es el Glaciar Perito Moreno. No es un río de agua, sino de hielo, que avanza muy lentamente desde las montañas hasta el Lago Argentino. A veces, el frente del glaciar forma un puente de hielo sobre el lago. La gente espera en silencio, hasta que, con un ruido atronador, el puente se rompe y caen enormes bloques de hielo al agua. Una niña, llamada Lía, vio este espectáculo. No sintió miedo, sino asombro por la fuerza de la naturaleza. Comprendió que el mundo está lleno de maravillas que son lentas, poderosas y muy, muy antiguas.",
    vocabulary: [
      { word: "Glaciar", definition: "Una gran masa de hielo que se forma en las partes altas de las montañas y se desliza lentamente hacia abajo." },
      { word: "Patagonia", definition: "Una región geográfica en el extremo sur de América, compartida por Argentina y Chile." },
      { word: "Atronador", definition: "Que suena como un trueno, muy fuerte." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué es el Glaciar Perito Moreno?",
        options: ["Una montaña de nieve", "Un lago congelado", "Un río de hielo que se mueve", "Una cascada de agua helada"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué pasa a veces con el frente del glaciar?",
        options: ["Se derrite por completo", "Cambia de color", "Forma un puente de hielo que luego se rompe", "Se detiene para siempre"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué sintió Lía al ver la ruptura del glaciar?",
        options: ["Tristeza", "Miedo", "Indiferencia", "Asombro"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Superclásico: Más que un Partido de Fútbol",
    level: QuestLevel.BEGINNER,
    passage: "Cuando juegan Boca Juniors y River Plate, Argentina se detiene. Se llama el 'Superclásico' y es uno de los partidos de fútbol más famosos del mundo. Los colores azul y amarillo de Boca y el blanco y rojo de River llenan las calles. En la familia de Lucas, hay una división divertida. Su papá es de River y su mamá es de Boca. Durante el partido, cantan las canciones de sus equipos y se ríen. Aunque cada uno quiere que su equipo gane, al final del día, se abrazan. Lucas aprende que, aunque en el fútbol sean rivales, en la familia y en la vida, el amor y el respeto son siempre lo más importante.",
    vocabulary: [
      { word: "Superclásico", definition: "El partido de fútbol entre los dos equipos más populares de Argentina: Boca Juniors y River Plate." },
      { word: "Rival", definition: "Una persona o equipo que compite contra otro." },
      { word: "Equipo", definition: "Un grupo de personas que juegan juntas en un deporte." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué equipos juegan en el Superclásico?",
        options: ["Argentina y Brasil", "Racing e Independiente", "Boca Juniors y River Plate", "San Lorenzo y Huracán"],
        correctAnswerIndex: 2
      },
      {
        questionText: "En la familia de Lucas, ¿quién es de River y quién de Boca?",
        options: ["Ambos son de Boca", "El papá es de River y la mamá de Boca", "Ambos son de River", "El papá es de Boca y la mamá de River"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué aprende Lucas de sus padres durante el Superclásico?",
        options: ["Que hay que pelearse por el fútbol", "Que solo importa ganar", "Que el amor y el respeto son más importantes que la rivalidad", "Que el fútbol no es importante"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Cueva de las Manos",
    level: QuestLevel.BEGINNER,
    passage: "Hace miles de años, en la Patagonia, un grupo de personas encontró una cueva para protegerse del viento. No tenían papel ni lápices para dibujar, pero querían dejar su marca. Así que usaron sus propias manos. Apoyaban una mano en la pared de la cueva y, con un hueso hueco, soplaban pintura hecha con minerales de colores a su alrededor. Hoy, la Cueva de las Manos tiene cientos de manos pintadas, la mayoría izquierdas. Son como un antiguo 'hola', un mensaje que viaja por el tiempo para decirnos: 'Nosotros estuvimos aquí'. Un joven arqueólogo, al verlas, no vio solo manos, sino las historias silenciosas de los primeros habitantes de esas tierras.",
    vocabulary: [
      { word: "Cueva", definition: "Una cavidad natural en el terreno." },
      { word: "Arqueólogo", definition: "Un científico que estudia las sociedades antiguas a través de sus restos materiales." },
      { word: "Pintura rupestre", definition: "Dibujos y pinturas prehistóricas hechas sobre rocas o en cuevas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué usaron las personas antiguas para crear el arte en la cueva?",
        options: ["Pinceles de pelo de animal", "Sus propias manos y pintura soplada", "Carbón de fogatas", "Trozos de arcilla afilados"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué es lo más común que se ve pintado en la Cueva de las Manos?",
        options: ["Animales de caza", "Soles y lunas", "Cientos de manos", "Figuras de personas bailando"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué mensaje nos dejan estas manos pintadas?",
        options: ["Un mapa del tesoro", "Una lista de reglas", "Un saludo a través del tiempo, diciendo 'estuvimos aquí'", "Instrucciones para cazar"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "El Hornero, un Arquitecto con Plumas",
    level: QuestLevel.BEGINNER,
    passage: "En los campos de Argentina, se puede ver un nido muy especial, hecho de barro y con forma de horno. Es la casa del hornero, un pájaro trabajador y muy inteligente. El hornero y su pareja trabajan juntos, trayendo bolitas de barro y paja para construir su hogar. El nido es tan fuerte que protege a sus pichones del sol, la lluvia y el viento. La leyenda guaraní dice que un joven y una joven enamorados fueron transformados en estos pájaros por un dios que admiraba su amor y dedicación. Por eso, ver un nido de hornero cerca de casa se considera un símbolo de buena suerte y de un hogar feliz.",
    vocabulary: [
      { word: "Hornero", definition: "Pájaro de color marrón, famoso por construir nidos de barro con forma de horno. Es el ave nacional de Argentina." },
      { word: "Nido", definition: "Lugar que construyen las aves para poner sus huevos y criar a sus pichones." },
      { word: "Pichón", definition: "Cría de un pájaro." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿De qué está hecho el nido del hornero?",
        options: ["De ramas y hojas", "De lana y algodón", "De barro y paja", "De piedras pequeñas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cómo trabajan los horneros para construir su nido?",
        options: ["El macho construye solo", "La hembra construye sola", "Trabajan juntos en pareja", "Contratan a otros pájaros"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué se considera ver un nido de hornero cerca de casa?",
        options: ["Una señal de mala suerte", "Un anuncio de lluvia", "Un símbolo de buena suerte y hogar feliz", "Una señal de que el invierno será frío"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    title: "La Noche de San Juan y las Pruebas de la Suerte",
    level: QuestLevel.BEGINNER,
    passage: "En algunas partes de Argentina, la noche más fría del año, el 23 de junio, es también una noche mágica: la Noche de San Juan. Se encienden grandes fogatas para celebrar el solsticio de invierno. Además de la música y la comida, es una noche de 'pruebas' o rituales para adivinar el futuro o tener buena suerte. Una de las pruebas más famosas para los jóvenes es la de la gota de tinta. A medianoche, se deja caer una gota de tinta en un vaso de agua. La forma que toma la tinta, dicen, revela la inicial del futuro amor. Sea verdad o no, es una tradición que llena de misterio y esperanza la noche más larga del invierno.",
    vocabulary: [
      { word: "Fogata", definition: "Un fuego grande que se hace al aire libre." },
      { word: "Solsticio de invierno", definition: "El día más corto del año y la noche más larga, que marca el inicio del invierno." },
      { word: "Ritual", definition: "Una serie de acciones realizadas de una manera establecida, a menudo como parte de una ceremonia." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué se celebra en la Noche de San Juan?",
        options: ["La llegada del verano", "La cosecha de maíz", "El solsticio de invierno con fogatas", "El año nuevo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Para qué sirven las 'pruebas' que se hacen esa noche?",
        options: ["Para ganar premios", "Para asustar a los malos espíritus", "Para adivinar el futuro o tener buena suerte", "Para demostrar valentía"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿En qué consiste la prueba de la gota de tinta?",
        options: ["En escribir un deseo con tinta mágica", "En dejar caer una gota de tinta en agua para ver una inicial", "En pintar un cuadro con tinta", "En beber agua con tinta"],
        correctAnswerIndex: 1
      }
    ]
  }
];