import React from 'react';
import { QuestData } from './types';

export const GEMINI_MODEL = 'gemini-2.5-flash';

export const ICONS = {
    BOOK_OPEN: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    CLOCK: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    CHECK_CIRCLE: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    X_CIRCLE: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    SPARKLES: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 17l-4 4 4-4 1.707-1.707a1 1 0 011.414 0z" /></svg>,
    STAR: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>,
    TROPHY: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13.5a9 9 0 110 18 9 9 0 010-18z" /></svg>,
    AWARD: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 3.482l.962 1.944a1 1 0 00.862.556h2.072a1 1 0 00.862-.556L15 3.482m-3 14.036V12m0 0l3 3m-3-3l-3 3m-3-3v6m0 0h6m-6 0a9 9 0 100-18 9 9 0 000 18z" /></svg>,
    HOME: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" /></svg>,
    SETTINGS: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
};

export const ALL_QUESTS: QuestData[] = [
  {
    title: "El Misterio del Mate Desaparecido",
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
  // ... (the rest of the 50 stories remain here)
    {
    title: "El Misterio del Ferrocarril Abandonado",
    passage: "Al final del pueblo, había una vía de ferrocarril abandonada que se perdía en el campo. Los chicos decían que por las noches, a veces se escuchaba el silbato de un tren fantasma. Una noche, un grupo de valientes fue a investigar. Esperaron en silencio. Y de repente, lo escucharon: un '¡Fshhhhhh!' largo y melancólico. Se asustaron, pero no corrieron. Al acercarse, descubrieron el origen del sonido. No era un tren. Era el viento, que soplaba a través de los viejos postes de telégrafo rotos, creando una especie de flauta gigante. El misterio estaba resuelto. No había fantasmas, solo la música solitaria del viento en las ruinas del progreso. Y era un sonido hermoso y triste a la vez.",
    vocabulary: [
      { word: "Ferrocarril", definition: "El sistema de transporte que utiliza trenes que circulan sobre vías de hierro." },
      { word: "Melancólico", definition: "Que produce o expresa una tristeza suave y profunda." },
      { word: "Telégrafo", definition: "Un sistema antiguo para comunicarse a distancia usando cables y señales eléctricas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué decían los chicos que se escuchaba en las vías abandonadas?",
        options: ["Voces de fantasmas", "Música de un circo", "El silbato de un tren fantasma", "El rugido de un animal"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cuál era el verdadero origen del sonido?",
        options: ["Un vecino haciendo una broma", "Un tren real a lo lejos", "El viento soplando en los postes de telégrafo", "Un fantasma de verdad"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Cómo era el sonido que descubrieron?",
        options: ["Aterrador y horrible", "Fuerte y alegre", "Hermoso y triste", "Casi inaudible"],
        correctAnswerIndex: 2
      }
    ]
  }
];


export const ALL_QUESTS_LEVEL_2: QuestData[] = [
  {
    title: "El Cruce de los Andes",
    passage: "El General Don José de San Martín sabía que para liberar a Chile y Perú, necesitaba sorprender al ejército español. Su plan era audaz y parecía imposible: cruzar la Cordillera de los Andes con miles de soldados, caballos y cañones. El viaje fue una proeza monumental. Soportaron fríos extremos, vientos helados y la falta de oxígeno de la alta montaña, conocida como 'soroche'. La logística fue increíblemente compleja; tuvieron que llevar alimento, abrigo y armas para todo el ejército a través de picos de más de 4000 metros. Muchos hombres y animales sufrieron, pero la determinación del General y la valentía de sus soldados lograron lo impensado. Esta hazaña no solo fue una victoria militar, sino una demostración del ingenio y la perseverancia humana frente a la adversidad de la naturaleza.",
    vocabulary: [
      { word: "Proeza", definition: "Una acción de gran esfuerzo y valor, una hazaña." },
      { word: "Logística", definition: "La organización de los detalles de una operación, como el transporte y suministro de tropas." },
      { word: "Perseverancia", definition: "Firmeza y constancia en la manera de ser o de obrar para lograr un objetivo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál era el objetivo principal de San Martín al cruzar los Andes?",
        options: ["Explorar nuevas rutas comerciales", "Liberar a Chile y Perú del dominio español", "Buscar oro en las montañas", "Establecer una nueva capital"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Qué desafío natural NO se menciona en el texto?",
        options: ["Fríos extremos", "Falta de oxígeno", "Erupciones volcánicas", "Vientos helados"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La historia sugiere que el éxito del cruce se debió principalmente a...",
        options: ["La suerte y el buen clima", "El ingenio, la valentía y la determinación", "Tener mejores armas que el enemigo", "La ayuda de otros países"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "El Ecosistema de los Esteros del Iberá",
    passage: "Los Esteros del Iberá son un gigantesco humedal en Corrientes, un complejo sistema donde el agua, las plantas y los animales conviven en un delicado equilibrio. No es un simple pantano; es un mosaico de lagunas, islas flotantes de vegetación llamadas 'embalsados', y pastizales. Cada ser vivo cumple una función vital. El yacaré, como depredador, controla la población de otras especies. El carpincho, al pastar, mantiene la vegetación a raya, creando hábitats para otros animales. Aves como el jabirú y la garza dependen de los peces que abundan en sus aguas claras. Este ecosistema es un ejemplo de interdependencia, donde la desaparición de una sola pieza, por pequeña que sea, podría afectar a toda la red. Conservarlo es proteger un tesoro de biodiversidad único en el mundo.",
    vocabulary: [
      { word: "Ecosistema", definition: "Un sistema biológico formado por una comunidad de seres vivos y el medio en que viven." },
      { word: "Interdependencia", definition: "Dependencia mutua y recíproca entre varias personas o cosas." },
      { word: "Biodiversidad", definition: "La variedad de formas de vida (plantas, animales, etc.) que existen en el planeta." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué son los 'embalsados' en el contexto del Iberá?",
        options: ["Un tipo de pez", "Islas flotantes de vegetación", "Cazadores que visitan la zona", "Un ritual de los guaraníes"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Cuál es la función del yacaré mencionada en el texto?",
        options: ["Guiar a los turistas", "Construir nidos", "Controlar la población de otras especies", "Comer plantas acuáticas"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La idea principal del texto es que el Iberá es...",
        options: ["Un lugar peligroso que se debe evitar", "Un sistema simple con pocos animales", "Un lugar ideal solo para aves", "Un ecosistema complejo con un equilibrio delicado"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    title: "El Origen de las Constelaciones Gauchas",
    passage: "Mucho antes de que los mapas estelares europeos llegaran a la pampa, el gaucho tenía su propio cielo. No veía osas ni centauros; veía figuras relacionadas con su vida rural. Las 'Tres Marías' no eran solo estrellas en el cinturón de Orión; eran los tres postes de un corral o las brasas de un fogón. La Cruz del Sur era fundamental para orientarse, pero también se la asociaba con la marca de un ñandú. El rastro brillante de la Vía Láctea era el 'Camino de las Tropas', por donde los arrieros llevaban el ganado. Esta astronomía popular, transmitida oralmente de generación en generación, no buscaba una precisión científica, sino una conexión práctica y poética con el cosmos. El cielo nocturno era un mapa, un reloj y un compañero en las solitarias noches del campo argentino.",
    vocabulary: [
      { word: "Constelación", definition: "Un grupo de estrellas que forman un dibujo imaginario en el cielo nocturno." },
      { word: "Rural", definition: "Relacionado con la vida en el campo y sus labores." },
      { word: "Cosmos", definition: "El universo, especialmente cuando se considera como un sistema ordenado y armonioso." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Qué representaban las 'Tres Marías' para los gauchos?",
        options: ["Tres princesas legendarias", "Tres caballos famosos", "Los postes de un corral o brasas de un fogón", "Las tres carabelas de Colón"],
        correctAnswerIndex: 2
      },
      {
        questionText: "La Vía Láctea era conocida por los gauchos como...",
        options: ["El Río de Plata celestial", "La Lanza de un dios", "La Huella del Puma", "El Camino de las Tropas"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Cuál era el propósito principal de la astronomía gaucha?",
        options: ["Predecir el futuro con exactitud científica", "Crear una conexión práctica y poética con el cielo", "Descubrir nuevos planetas y galaxias", "Asustar a los niños con historias de monstruos celestes"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "René Favaloro y la Revolución del Bypass",
    passage: "En la historia de la medicina mundial, el nombre de René Favaloro brilla con luz propia. Este médico rural argentino, nacido en La Plata, desarrolló una técnica que cambiaría la vida de millones de personas. Mientras trabajaba en Estados Unidos, estandarizó y popularizó el 'bypass' coronario, una cirugía revolucionaria. El procedimiento consiste en crear un 'puente' o desvío para que la sangre pueda sortear una arteria del corazón que está obstruida. Antes de su trabajo, las opciones para pacientes con enfermedades coronarias severas eran muy limitadas. Lo más admirable de Favaloro no fue solo su genio quirúrgico, sino su profundo humanismo. Siempre abogó por una medicina accesible para todos, sin distinción de riqueza. Regresó a Argentina para fundar un centro de excelencia, demostrando que su mayor compromiso era con su gente y la salud pública.",
    vocabulary: [
      { word: "Estandarizar", definition: "Hacer que algo se ajuste a un modelo o norma común." },
      { word: "Obstruida", definition: "Que está tapada o bloqueada, impidiendo el paso." },
      { word: "Humanismo", definition: "Una actitud que pone énfasis en el valor y la dignidad de los seres humanos." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál fue la principal contribución de René Favaloro a la medicina?",
        options: ["Descubrir la penicilina", "Inventar la anestesia", "Desarrollar y popularizar la cirugía de bypass coronario", "Crear la primera vacuna"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El propósito de la cirugía de bypass es...",
        options: ["Reemplazar el corazón por completo", "Limpiar las arterias con un líquido especial", "Crear un desvío para la sangre alrededor de una arteria bloqueada", "Fortalecer los músculos del corazón con ejercicio"],
        correctAnswerIndex: 2
      },
      {
        questionText: "Además de su habilidad como cirujano, ¿qué otra cualidad de Favaloro destaca el texto?",
        options: ["Su habilidad para los negocios", "Su profundo humanismo y compromiso social", "Sus ambiciones políticas", "Su talento como escritor"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "La Silenciosa Batalla de los Glaciares",
    passage: "El Glaciar Perito Moreno es famoso por sus espectaculares rupturas, pero este gigante de hielo libra una batalla constante y silenciosa. Como la mayoría de los glaciares del mundo, enfrenta los efectos del cambio climático. Sin embargo, su comportamiento es peculiar. A diferencia de muchos de sus vecinos que retroceden de forma alarmante, el Perito Moreno se encuentra en un estado de equilibrio, avanzando y rompiéndose a un ritmo relativamente estable. Esto se debe a condiciones geográficas y climáticas muy específicas de su ubicación. Su avance es alimentado por las intensas nevadas en su cuenca de acumulación. Este equilibrio, no obstante, es frágil. Los científicos monitorean constantemente su masa y movimiento, ya que este glaciar es un termómetro invaluable de la salud de la Antártida y del planeta entero, un recordatorio helado de la delicada danza entre la naturaleza y el clima.",
    vocabulary: [
      { word: "Peculiar", definition: "Que es propio y característico de una sola persona o cosa." },
      { word: "Equilibrio", definition: "Un estado de inmovilidad o estabilidad donde las fuerzas opuestas se compensan." },
      { word: "Monitorear", definition: "Observar el desarrollo o progreso de algo durante un período de tiempo." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es la característica 'peculiar' del Glaciar Perito Moreno en comparación con otros?",
        options: ["Se está derritiendo más rápido que todos", "Es el único glaciar de color azul", "Se mantiene en un estado de equilibrio relativo", "Está hecho de sal en lugar de hielo"],
        correctAnswerIndex: 2
      },
      {
        questionText: "¿Qué alimenta el avance del glaciar?",
        options: ["Los ríos subterráneos", "Las intensas nevadas en su cuenca", "Las olas del lago", "La actividad volcánica debajo de él"],
        correctAnswerIndex: 1
      },
      {
        questionText: "¿Por qué es tan importante para los científicos monitorear este glaciar?",
        options: ["Porque esconde tesoros antiguos", "Porque sirve como un indicador de la salud del planeta", "Para predecir terremotos", "Porque es una atracción turística muy popular"],
        correctAnswerIndex: 1
      }
    ]
  }
];

export const ALL_QUESTS_LEVEL_3: QuestData[] = [
  {
    title: "El Pacto Silencioso del Hornero",
    passage: "El hornero y su compañera trabajaban sin descanso bajo el sol del mediodía. Grano a grano de barro, construían su nido en el poste más alto. No se hablaban, no había cantos, solo un entendimiento mutuo en cada movimiento. Un día, una fuerte tormenta amenazó con destruir su obra. En lugar de huir, se acurrucaron juntos dentro del nido a medio terminar, protegiendo con sus cuerpos la frágil estructura. La lluvia pasó y su casa, aunque mojada, seguía en pie. Salieron y, por primera vez, cantaron juntos al sol que volvía a asomar.",
    vocabulary: [
        { word: "Pacto", definition: "Un acuerdo o trato entre dos o más partes, a veces sin palabras." },
        { word: "Frágil", definition: "Que se puede romper o dañar con facilidad." },
        { word: "Entendimiento", definition: "La capacidad de comprenderse mutuamente sin necesidad de hablar." }
    ],
    comprehensionQuestions: [
        {
            questionText: "¿Por qué los horneros trabajaban sin hablarse?",
            options: ["Porque estaban enojados", "Porque se entendían sin necesidad de palabras", "Porque no sabían cantar", "Para no atraer depredadores"],
            correctAnswerIndex: 1
        },
        {
            questionText: "El hecho de que se quedaran en el nido durante la tormenta nos muestra que son...",
            options: ["Distraídos y olvidadizos", "Valientes y protectores con su hogar", "Incapaces de volar con lluvia", "Pájaros a los que les gusta el agua"],
            correctAnswerIndex: 1
        },
        {
            questionText: "¿Por qué cantaron juntos al final de la historia?",
            options: ["Porque vieron a otros pájaros", "Porque siempre cantan al mediodía", "Porque estaban aliviados de que su trabajo en equipo salvó su hogar", "Porque encontraron más barro para construir"],
            correctAnswerIndex: 2
        }
    ]
  },
  {
    title: "La Paciencia del Río",
    passage: "El río corría lento y ancho por el valle. Durante miles de años, había hecho el mismo viaje hacia el mar. En su camino, se encontraba con rocas enormes y duras que se negaban a moverse. El río no luchaba contra ellas. No las golpeaba con furia. Simplemente, las rodeaba. Con una paciencia infinita, pasaba a su lado, lamiendo sus bordes, llevándose diminutas partículas de piedra con cada caricia. Siglos después, las rocas que parecían invencibles se habían convertido en suaves piedras redondas en el lecho del río. El agua, con su constancia, había ganado sin pelear.",
    vocabulary: [
      { word: "Paciencia", definition: "La capacidad de soportar algo sin alterarse o de esperar con calma." },
      { word: "Partículas", definition: "Partes muy pequeñas de algo." },
      { word: "Constancia", definition: "Firmeza y perseverancia en las resoluciones, en los propósitos o en las acciones." }
    ],
    comprehensionQuestions: [
      {
        questionText: "¿Cuál es la 'estrategia' del río para vencer a las rocas?",
        options: ["Golpearlas con toda su fuerza", "Esperar a que una tormenta las rompa", "Ser constante y paciente, desgastándolas poco a poco", "Pedir ayuda a otros ríos"],
        correctAnswerIndex: 2
      },
      {
        questionText: "El autor quiere decir que la suavidad del agua puede ser...",
        options: ["Más débil que la dureza de la roca", "Inútil contra los obstáculos", "Una desventaja para el río", "Más poderosa a largo plazo que la fuerza bruta"],
        correctAnswerIndex: 3
      },
      {
        questionText: "¿Qué lección podemos aprender de la historia del río?",
        options: ["Que siempre hay que buscar el camino más fácil", "Que la perseverancia puede superar grandes obstáculos", "Que es mejor no enfrentar problemas difíciles", "Que las rocas son fáciles de romper"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    title: "La Sombra del Ombú",
    passage: "En medio de la llanura pampeana, donde el sol pega fuerte, crecía un ombú solitario. No daba frutos comestibles ni madera útil, por lo que muchos lo consideraban un árbol inútil. Pero el gaucho sabía la verdad. Cuando el sol del mediodía era insoportable, la sombra del ombú era un refugio. Bajo sus grandes hojas verdes, el aire era más fresco y la vida parecía más fácil. Era un punto de encuentro, una señal en el paisaje infinito. El ombú no ofrecía cosas para tomar, sino algo para recibir: descanso, alivio y compañía. Su valor no se medía en pesos, sino en la gratitud silenciosa de quienes se detenían a su sombra.",
    vocabulary: [
        { word: "Refugio", definition: "Un lugar que sirve para protegerse del peligro o de las inclemencias del tiempo." },
        { word: "Inútil", definition: "Que no produce provecho, servicio o beneficio." },
        { word: "Gratitud", definition: "El sentimiento de agradecimiento por un favor o beneficio recibido." }
    ],
    comprehensionQuestions: [
        {
            questionText: "¿Por qué algunas personas pensaban que el ombú era inútil?",
            options: ["Porque era demasiado grande", "Porque no daba cosas que se pudieran vender o usar, como fruta o madera", "Porque su sombra era demasiado oscura", "Porque atraía insectos"],
            correctAnswerIndex: 1
        },
        {
            questionText: "El verdadero valor del ombú para el gaucho era...",
            options: ["Ser un objeto de lujo", "Poder vender sus hojas", "Ofrecer un servicio invaluable como el descanso y el alivio", "Ser un árbol sagrado"],
            correctAnswerIndex: 2
        },
        {
            questionText: "¿Qué nos enseña esta historia sobre el valor de las cosas?",
            options: ["Que solo lo que cuesta dinero es valioso", "Que los árboles grandes son los mejores", "Que algunas de las cosas más valiosas no se pueden comprar", "Que los gauchos no necesitan nada"],
            correctAnswerIndex: 2
        }
    ]
  },
  {
    title: "El Barrilete que Aprendió a Volar",
    passage: "Lila había construido un barrilete precioso, con papeles de colores y una cola larga de cintas. Pero en su primer intento, el barrilete no voló. Se tambaleó y cayó al suelo. '¡No sirve!', gritó frustrada. Su abuelo, que la miraba, sonrió y le dijo: 'No es que no sirva, es que todavía no encontró su viento'. Al día siguiente, probaron de nuevo. El viento era suave y el barrilete apenas se levantó. Al tercer día, un viento fuerte y constante sopló desde el sur. Lila corrió, soltó hilo y el barrilete, esta vez, se elevó majestuosamente, bailando en el cielo. El barrilete no había cambiado, pero las condiciones sí. Lila entendió que a veces, el éxito no depende solo del esfuerzo, sino también de encontrar el momento justo.",
    vocabulary: [
        { word: "Frustrada", definition: "Sentir enojo o decepción por no poder lograr algo." },
        { word: "Majestuosamente", definition: "De una manera que inspira admiración y respeto por su grandeza." },
        { word: "Condiciones", definition: "Las circunstancias o el ambiente necesario para que algo suceda." }
    ],
    comprehensionQuestions: [
        {
            questionText: "¿Por qué el barrilete no voló al principio?",
            options: ["Porque estaba roto", "Porque Lila no corrió lo suficientemente rápido", "Porque el viento no era el adecuado para él", "Porque la cola era muy corta"],
            correctAnswerIndex: 2
        },
        {
            questionText: "El abuelo creía que el problema no estaba en el barrilete, sino en...",
            options: ["La habilidad de Lila", "El lugar donde estaban", "La falta de un viento apropiado", "La calidad de los papeles"],
            correctAnswerIndex: 2
        },
        {
            questionText: "¿Cuál es la idea principal que Lila aprendió al final?",
            options: ["Que los barriletes de colores vuelan más alto", "Que rendirse es la mejor opción", "Que se necesita paciencia para encontrar las condiciones correctas para triunfar", "Que su abuelo siempre tiene la razón"],
            correctAnswerIndex: 2
        }
    ]
  },
  {
    title: "El Secreto de la Yerba Mate",
    passage: "La leyenda guaraní cuenta que la luna, Yací, y la nube, Araí, bajaron a la Tierra como dos muchachas para caminar por la selva. Un yaguareté las atacó, pero un viejo cazador las salvó arriesgando su vida. En agradecimiento, Yací y Araí visitaron al cazador en sus sueños esa noche. Le dijeron que en el lugar donde había luchado, crecería una nueva planta. Sus hojas, tostadas y molidas, servirían para preparar una bebida que une a las personas y da energía. Esa planta era la yerba mate. El viejo cazador se despertó, siguió las instrucciones y compartió la bebida con su tribu, creando un lazo de comunidad y amistad que perdura hasta hoy.",
    vocabulary: [
      { word: "Leyenda", definition: "Una narración de sucesos fantásticos que se transmite por tradición." },
      { word: "Yaguareté", definition: "Un gran felino de América, también conocido como jaguar." },
      { word: "Lazo", definition: "Una unión o vínculo que conecta a las personas." }
    ],
    comprehensionQuestions: [
      {
        questionText: "El mate fue un regalo para el cazador porque...",
        options: ["Ganó una competencia", "Realizó un acto de valentía y generosidad", "Lo pidió como un deseo", "Descubrió la planta por accidente"],
        correctAnswerIndex: 1
      },
      {
        questionText: "Según la leyenda, ¿cuál es uno de los propósitos más importantes del mate?",
        options: ["Ser una bebida solo para guerreros", "Crear un vínculo de unión entre las personas", "Curar todas las enfermedades", "Ayudar a la gente a dormir mejor"],
        correctAnswerIndex: 1
      },
      {
        questionText: "Esta historia sugiere que las tradiciones importantes a menudo nacen de...",
        options: ["La casualidad y la suerte", "Actos de bondad y agradecimiento", "El comercio y el dinero", "Las reglas y las leyes"],
        correctAnswerIndex: 1
      }
    ]
  }
];