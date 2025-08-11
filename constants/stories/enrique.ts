import { QuestData, QuestLevel } from '../../types';

export const enriqueQuest: QuestData = {
  title: 'Enrique, el fiel',
  level: QuestLevel.SPECIAL,
  passage: `Cuando el príncipe fue convertido en sapo, trabajaba con él su lacayo Enrique. Fiel a su señor, lo siguió a donde su suerte lo llevó y siempre intentó ayudarlo.

Enrique se había sentido muy desdichado por la transformación de su amo y había sufrido tan tremenda pena, que había necesitado colocar tres bandas de hierro alrededor de su corazón para que no se le rompiera.

¿Fue Enrique quien le aconsejó al príncipe sapo tratar de hacerse amigo de la princesa para romper el hechizo?

¿Fue el fiel lacayo quien llevó a su señor hasta el palacio para reclamar que se cumpliera la promesa?

Los hermanos Grimm introducen a este personaje al final de la versión de su cuento. Cuando ya el príncipe había vuelto a su forma original y había enamorado a la princesa. Entonces, su relato cierra como podrán leer a continuación.

Por la mañana, llegó un coche con un tiro de ocho caballos blancos adornados con plumas y cadenas de oro, y en la parte trasera iba el lacayo del joven príncipe, el fiel Enrique.

Enrique se había entristecido de tal modo cuando su señor fue convertido en sapo, que había tenido que poner tres bandas de hierro en torno a su corazón para que no le reventara de dolor y tristeza.

Como el coche debía llevar al príncipe a su palacio, junto con la princesa, el fiel Enrique los recogió y volvió a subirse en la parte trasera del carruaje.

Lleno de alegría por el fin del hechizo, conducía desde su lugar a los ocho caballos blancos que los llevarían a su reino.

De pronto, los enamorados escucharon un crujido a sus espaldas, como si algo se hubiera roto.

El príncipe y la princesa asomaron la cabeza fuera del carruaje. Él miró hacia atrás y gritó:

–¡Enrique, el coche se rompe!

–No, señor, el coche no, es una de las bandas de hierro de mi pecho, que estuvo preso por el dolor por un largo tiempo, mientras permanecías en el pozo convertido en sapo.

El crujido se oyó una y otra vez, y el joven príncipe pensó siempre que el coche se rompía. Pero no eran más que las bandas de hierro que saltaban del corazón del fiel Enrique porque su señor volvía a ser libre y, por fin, era feliz.`,
  
  vocabulary: [],
  
  comprehensionQuestions: [
    // Easy questions (10)
    {
      questionText: '¿Cómo se llamaba el lacayo del príncipe?',
      options: ['Enrique', 'Eduardo', 'Ernesto', 'Esteban'],
      correctAnswerIndex: 0,
      difficulty: 'easy'
    },
    {
      questionText: '¿Qué había puesto Enrique alrededor de su corazón?',
      options: ['Tres cuerdas', 'Tres bandas de hierro', 'Tres cadenas', 'Tres cinturones'],
      correctAnswerIndex: 1,
      difficulty: 'easy'
    },
    {
      questionText: '¿Cuántos caballos tiraban del coche?',
      options: ['Seis', 'Siete', 'Ocho', 'Nueve'],
      correctAnswerIndex: 2,
      difficulty: 'easy'
    },
    {
      questionText: '¿De qué color eran los caballos?',
      options: ['Negros', 'Marrones', 'Grises', 'Blancos'],
      correctAnswerIndex: 3,
      difficulty: 'easy'
    },
    {
      questionText: '¿Dónde viajaba Enrique en el coche?',
      options: ['Adelante', 'En el medio', 'En la parte trasera', 'Al lado del príncipe'],
      correctAnswerIndex: 2,
      difficulty: 'easy'
    },
    {
      questionText: '¿Qué escucharon los enamorados?',
      options: ['Un silbido', 'Un crujido', 'Un grito', 'Una canción'],
      correctAnswerIndex: 1,
      difficulty: 'easy'
    },
    {
      questionText: '¿Quién pensó que el coche se rompía?',
      options: ['La princesa', 'Enrique', 'El príncipe', 'Los caballos'],
      correctAnswerIndex: 2,
      difficulty: 'easy'
    },
    {
      questionText: '¿Con qué estaban adornados los caballos?',
      options: ['Flores y cintas', 'Plumas y cadenas de oro', 'Cascabeles y lazos', 'Piedras preciosas'],
      correctAnswerIndex: 1,
      difficulty: 'easy'
    },
    {
      questionText: '¿Cuándo llegó el coche?',
      options: ['Por la noche', 'Por la tarde', 'Por la mañana', 'Al mediodía'],
      correctAnswerIndex: 2,
      difficulty: 'easy'
    },
    {
      questionText: '¿En qué había sido convertido el príncipe?',
      options: ['En rana', 'En sapo', 'En pez', 'En serpiente'],
      correctAnswerIndex: 1,
      difficulty: 'easy'
    },

    // Medium questions (10)
    {
      questionText: '¿Por qué Enrique había puesto las bandas de hierro?',
      options: ['Para protegerse en la batalla', 'Para que su corazón no se rompiera de pena', 'Para parecer más fuerte', 'Por orden del rey'],
      correctAnswerIndex: 1,
      difficulty: 'medium'
    },
    {
      questionText: '¿Cuál era la característica principal de Enrique según el título?',
      options: ['Era valiente', 'Era fiel', 'Era inteligente', 'Era fuerte'],
      correctAnswerIndex: 1,
      difficulty: 'medium'
    },
    {
      questionText: '¿Qué hacía Enrique mientras conducía a los caballos?',
      options: ['Lloraba de tristeza', 'Cantaba canciones', 'Estaba lleno de alegría', 'Permanecía en silencio'],
      correctAnswerIndex: 2,
      difficulty: 'medium'
    },
    {
      questionText: '¿Cuándo introduce los hermanos Grimm a Enrique en su versión?',
      options: ['Al principio del cuento', 'En el medio de la historia', 'Al final de la versión', 'No aparece en su versión'],
      correctAnswerIndex: 2,
      difficulty: 'medium'
    },
    {
      questionText: '¿Qué provocaba el crujido que escuchaban?',
      options: ['El coche se rompía', 'Los caballos tropezaban', 'Las bandas de hierro saltaban', 'Las ruedas chirriaban'],
      correctAnswerIndex: 2,
      difficulty: 'medium'
    },
    {
      questionText: '¿Cuál fue la reacción de Enrique cuando su señor fue transformado?',
      options: ['Se alegró', 'Se fue del palacio', 'Se entristeció profundamente', 'No le importó'],
      correctAnswerIndex: 2,
      difficulty: 'medium'
    },
    {
      questionText: '¿A dónde debía llevar el coche al príncipe y la princesa?',
      options: ['Al bosque', 'Al pozo', 'Al palacio del príncipe', 'A otro reino'],
      correctAnswerIndex: 2,
      difficulty: 'medium'
    },
    {
      questionText: '¿Cómo había demostrado Enrique su lealtad?',
      options: ['Siguió a su señor a donde la suerte lo llevó', 'Le construyó un palacio', 'Le buscó una princesa', 'Le dio dinero'],
      correctAnswerIndex: 0,
      difficulty: 'medium'
    },
    {
      questionText: '¿Qué sentimiento experimentaba Enrique al final?',
      options: ['Tristeza', 'Miedo', 'Alegría', 'Enojo'],
      correctAnswerIndex: 2,
      difficulty: 'medium'
    },
    {
      questionText: '¿Cuántas veces se escuchó el crujido?',
      options: ['Una vez', 'Dos veces', 'Tres veces', 'Una y otra vez'],
      correctAnswerIndex: 3,
      difficulty: 'medium'
    },

    // Hard questions (10)
    {
      questionText: '¿Qué simbolizan las bandas de hierro en el corazón de Enrique?',
      options: ['Su fuerza física', 'Su protección contra el dolor emocional', 'Su armadura de guerra', 'Su rango social'],
      correctAnswerIndex: 1,
      difficulty: 'hard'
    },
    {
      questionText: '¿Qué revela el personaje de Enrique sobre la naturaleza de la lealtad?',
      options: ['Que es temporal', 'Que requiere recompensa', 'Que puede causar sufrimiento personal', 'Que es solo profesional'],
      correctAnswerIndex: 2,
      difficulty: 'hard'
    },
    {
      questionText: '¿Por qué los hermanos Grimm introdujeron a Enrique al final de su versión?',
      options: ['Para alargar el cuento', 'Para mostrar las consecuencias emocionales de la transformación', 'Para añadir humor', 'Para confundir a los lectores'],
      correctAnswerIndex: 1,
      difficulty: 'hard'
    },
    {
      questionText: '¿Qué contraste se establece entre el sufrimiento de Enrique y el final feliz?',
      options: ['No hay contraste', 'Muestra que el amor verdadero incluye el sufrimiento ajeno', 'Indica que los sirvientes no importan', 'Sugiere que el dolor es innecesario'],
      correctAnswerIndex: 1,
      difficulty: 'hard'
    },
    {
      questionText: '¿Qué función narrativa cumple el sonido del crujido?',
      options: ['Crear suspense', 'Revelar la profundidad del amor de Enrique', 'Asustar a los personajes', 'Indicar problemas mecánicos'],
      correctAnswerIndex: 1,
      difficulty: 'hard'
    },
    {
      questionText: '¿Cómo se relaciona la liberación de las bandas con la liberación del hechizo?',
      options: ['No se relacionan', 'Ambas representan el fin del sufrimiento', 'Son eventos opuestos', 'Una causa la otra'],
      correctAnswerIndex: 1,
      difficulty: 'hard'
    },
    {
      questionText: '¿Qué sugiere el hecho de que Enrique siguiera al príncipe "a donde su suerte lo llevó"?',
      options: ['Que era aventurero', 'Que no tenía otra opción', 'Que su lealtad era incondicional', 'Que era curioso'],
      correctAnswerIndex: 2,
      difficulty: 'hard'
    },
    {
      questionText: '¿Qué representa la transformación del dolor de Enrique en alegría?',
      options: ['Un cambio superficial', 'La naturaleza cíclica de las emociones', 'El poder redentor del amor leal', 'La influencia mágica'],
      correctAnswerIndex: 2,
      difficulty: 'hard'
    },
    {
      questionText: '¿Por qué es significativo que Enrique condujera desde la parte trasera?',
      options: ['Era su trabajo normal', 'Muestra su humildad y posición social', 'No quería molestar', 'Tenía miedo'],
      correctAnswerIndex: 1,
      difficulty: 'hard'
    },
    {
      questionText: '¿Qué enseñanza moral se puede extraer del personaje de Enrique?',
      options: ['Los sirvientes deben ser obedientes', 'La lealtad verdadera trasciende las circunstancias', 'Es mejor no involucrarse emocionalmente', 'La magia afecta a todos'],
      correctAnswerIndex: 1,
      difficulty: 'hard'
    }
  ],

  reconstruction: {
    scenes: [
      {
        id: 'scene1',
        text: 'Enrique trabaja como lacayo fiel del príncipe',
        order: 1
      },
      {
        id: 'scene2',
        text: 'El príncipe es convertido en sapo',
        order: 2
      },
      {
        id: 'scene3',
        text: 'Enrique se entristece y pone bandas de hierro en su corazón',
        order: 3
      },
      {
        id: 'scene4',
        text: 'Enrique sigue a su señor y trata de ayudarlo',
        order: 4
      },
      {
        id: 'scene5',
        text: 'El príncipe recupera su forma original',
        order: 5
      },
      {
        id: 'scene6',
        text: 'Llega un coche con ocho caballos blancos',
        order: 6
      },
      {
        id: 'scene7',
        text: 'Enrique recoge al príncipe y la princesa',
        order: 7
      },
      {
        id: 'scene8',
        text: 'Durante el viaje se escucha un crujido',
        order: 8
      },
      {
        id: 'scene9',
        text: 'Las bandas de hierro saltan del corazón de Enrique',
        order: 9
      },
      {
        id: 'scene10',
        text: 'Enrique explica que su corazón se libera de la pena',
        order: 10
      }
    ],
    sentences: [
      {
        id: 'sentence1',
        text: 'Enrique siguió a su señor',
        structure: ['subject1', 'verb1', 'object1']
      },
      {
        id: 'sentence2',
        text: 'Las bandas protegían su corazón',
        structure: ['subject2', 'verb2', 'object2']
      },
      {
        id: 'sentence3',
        text: 'El coche llevaba a los enamorados',
        structure: ['subject3', 'verb3', 'object3']
      }
    ],
    parts: {
      subjects: [
        { id: 'subject1', text: 'Enrique' },
        { id: 'subject2', text: 'Las bandas' },
        { id: 'subject3', text: 'El coche' }
      ],
      verbs: [
        { id: 'verb1', text: 'siguió' },
        { id: 'verb2', text: 'protegían' },
        { id: 'verb3', text: 'llevaba' }
      ],
      objects: [
        { id: 'object1', text: 'a su señor' },
        { id: 'object2', text: 'su corazón' },
        { id: 'object3', text: 'a los enamorados' }
      ]
    }
  }
};
