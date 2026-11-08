// ==========================================================================
// ENCUENTRA — PLAN DE ESTUDIOS (ACADEMIA) Y LECCIÓN MAESTRA
// Lenguaje cercano, pedagógico y adaptado para jóvenes estudiantes
// ==========================================================================

export const CURRICULUM_LEVELS = [
  {
    id: 1,
    title: "Comienza a descubrir",
    badge: "Paso 1 · Inicial",
    tagline: "Hábitos, enfoque y herramientas básicas para empezar con entusiasmo.",
    whatYouWillLearn: "Aprenderás a crear un hábito diario de estudio, a leer con verdadera atención en lugar de pasar la vista con prisa, y a distinguir el tema general de la idea principal de un pasaje.",
    lessons: [
      { id: "como-comenzar", number: "1.1", title: "Cómo comenzar a estudiar las Escrituras", duration: "12 min", desc: "Preparación del corazón, la oración sincera antes de abrir el libro y cómo crear un momento de paz.", locked: false },
      { id: "leer-vs-escudrinar", number: "1.2", title: "La diferencia entre leer y escudriñar", duration: "15 min", desc: "Pasar la vista rápido vs cavar profundo: por qué buscar tesoros cambia tu experiencia espiritual.", locked: false },
      { id: "leer-con-atencion", number: "1.3", title: "Cómo leer con atención", duration: "15 min", desc: "Técnicas sencillas para no distraerte y notar los detalles sutiles que otros pasan por alto.", locked: false },
      { id: "idea-principal", number: "1.4", title: "Encuentra la idea principal", duration: "25 min", desc: "Aprende a responder: ¿Qué enseña realmente este pasaje? Distingue el tema de la verdad central.", isMaster: true, locked: false },
      { id: "comprender-oracion", number: "1.5", title: "Cómo comprender una oración", duration: "12 min", desc: "Descubre quién hace qué, qué condiciones pone el Señor y qué promesas nos hace.", locked: false },
      { id: "palabras-desconocidas", number: "1.6", title: "Qué hacer con palabras difíciles", duration: "12 min", desc: "Uso fácil del diccionario y las notas al pie sin perder el hilo de la lectura.", locked: false },
      { id: "formular-preguntas", number: "1.7", title: "Cómo hacerle preguntas al texto", duration: "15 min", desc: "Preguntas que abren la mente: ¿Quién habla? ¿Por qué lo dice? ¿Qué me enseña sobre Dios?", locked: false },
      { id: "reflexionar-leido", number: "1.8", title: "Meditar como lo hicieron los profetas", duration: "12 min", desc: "Dar espacio al silencio y al corazón para que el Espíritu Santo pueda enseñarte.", locked: false }
    ]
  },
  {
    id: 2,
    title: "Comprende lo que lees",
    badge: "Paso 2 · Contexto",
    tagline: "Descubre el mundo, la época y las personas detrás de cada relato.",
    whatYouWillLearn: "Aprenderás a situarte en el tiempo y lugar de los profetas, a identificar a los personajes y a notar las causas y consecuencias de sus decisiones.",
    lessons: [
      { id: "contexto-historico", number: "2.1", title: "El contexto histórico", duration: "15 min", desc: "¿Qué estaba pasando en el mundo cuando se escribió este capítulo? Reyes, guerras y paz.", locked: false },
      { id: "contexto-cultural", number: "2.2", title: "Costumbres y formas de vida", duration: "15 min", desc: "Comida, fiestas, leyes y vida diaria en la antigüedad bíblica y en el Libro de Mormón.", locked: false },
      { id: "contexto-geografico", number: "2.3", title: "Caminar por los mapas de las Escrituras", duration: "12 min", desc: "Desiertos, mares, ciudades y templos: ubicarse en el espacio ayuda a entender el viaje.", locked: false },
      { id: "contexto-literario", number: "2.4", title: "El estilo del autor", duration: "15 min", desc: "Diferenciar un relato histórico, un salmo poético, una carta o un sermón doctrinal.", locked: false },
      { id: "identificar-personajes", number: "2.5", title: "Quién habla y a quién le habla", duration: "12 min", desc: "Aprende a seguir las voces: el narrador, el profeta, los oyentes y el Señor.", locked: false },
      { id: "identificar-acontecimientos", number: "2.6", title: "La cadena de sucesos", duration: "15 min", desc: "Qué evento detonó la enseñanza y cómo una decisión desencadena otra.", locked: false },
      { id: "causas-consecuencias", number: "2.7", title: "Causa y consecuencia en el Evangelio", duration: "15 min", desc: "La promesa de Dios: «Si guardáis mis mandamientos, prosperaréis en la tierra».", locked: false },
      { id: "repeticiones-contrastes", number: "2.8", title: "Contrastes: luz y oscuridad", duration: "15 min", desc: "Cómo los profetas subrayan verdades comparando la fe con el temor y la justicia con la maldad.", locked: false },
      { id: "conectores-palabras-clave", number: "2.9", title: "Palabras puente y señales de tránsito", duration: "12 min", desc: "«Por tanto», «así vemos que», «mas he aquí»: pistas que te indican a dónde va el autor.", locked: false },
      { id: "relaciones-versiculos", number: "2.10", title: "Leer el párrafo completo", duration: "15 min", desc: "Por qué aislar un solo versículo puede confundirnos y cómo leer el conjunto con armonía.", locked: false }
    ]
  },
  {
    id: "3",
    title: "Profundiza en el mensaje",
    badge: "Paso 3 · Análisis",
    tagline: "Descubre los símbolos, las parábolas y las conexiones con Jesucristo.",
    whatYouWillLearn: "Aprenderás a interpretar parábolas y metáforas, a reconocer cómo el Antiguo Testamento y el Libro de Mormón se entrelazan y a descubrir a Cristo en cada página.",
    lessons: [
      { id: "metaforas-similes", number: "3.1", title: "Metáforas e imágenes del Evangelio", duration: "15 min", desc: "El ancla del alma, la vid verdadera, el escudo de la fe y la fuente de agua viva.", locked: false },
      { id: "parabolas", number: "3.2", title: "Las parábolas de Jesús", duration: "20 min", desc: "Por qué el Salvador enseñaba con historias cotidianas y cómo encontrar su lección espiritual.", locked: false },
      { id: "simbolismos", number: "3.3", title: "Símbolos que señalan a Jesucristo", duration: "18 min", desc: "El cordero pascual, el maná del desierto y el árbol de la vida: tipos y sombras del Salvador.", locked: false },
      { id: "hiperboles", number: "3.4", title: "Lenguaje de énfasis", duration: "12 min", desc: "Comprender cuando los profetas usan expresiones de gran fuerza para grabar una lección en la memoria.", locked: false },
      { id: "paralelismos", number: "3.5", title: "Poesía hebrea y paralelismos", duration: "15 min", desc: "La belleza de los Salmos e Isaías: ideas que se repiten con ritmo y fuerza espiritual.", locked: false },
      { id: "quiasmos", number: "3.6", title: "Estructuras en espejo (Quiasmos)", duration: "20 min", desc: "Explicado fácil: cómo los profetas antiguos colocaban la verdad más importante justo en el centro (ej. Alma 36).", locked: false },
      { id: "figuras-retoricas", number: "3.7", title: "Otras formas creativas de enseñar", duration: "15 min", desc: "Preguntas para reflexionar, alegorías y comparaciones inolvidables.", locked: false },
      { id: "relaciones-pasajes", number: "3.8", title: "Conectar pasajes hermanos", duration: "18 min", desc: "Cómo la Biblia y el Libro de Mormón se apoyan y aclaran mutuamente como dos testigos fieles.", locked: false },
      { id: "analisis-narraciones", number: "3.9", title: "Aprender de las historias reales", duration: "15 min", desc: "Cómo David, Ester o Nefi enfrentaron desafíos parecidos a los tuyos.", locked: false },
      { id: "ensenanzas-doctrinales", number: "3.10", title: "Extraer verdades para tu propia vida", duration: "18 min", desc: "Pasar de «qué pasó hace miles de años» a «qué principio eterno me sostiene hoy».", locked: false }
    ]
  },
  {
    id: 4,
    title: "Estudia por tu cuenta",
    badge: "Paso 4 · Autonomía",
    tagline: "Desarrolla confianza y un método de estudio personal para toda la vida.",
    whatYouWillLearn: "Aprenderás a interpretar con reverencia guiado por el Espíritu, a abordar pasajes que parecen difíciles y a crear un plan de estudio diario que disfrutes.",
    lessons: [
      { id: "intro-hermeneutica", number: "4.1", title: "Interpretar con reverencia y fidelidad", duration: "20 min", desc: "Hermenéutica explicada fácil: cómo escuchar lo que el Señor realmente enseña sin forzar nuestras propias ideas.", locked: false },
      { id: "intro-exegesis", number: "4.2", title: "Entender el significado original", duration: "20 min", desc: "Exégesis explicada fácil: primero entender qué significó para ellos antes de decidir qué significa para nosotros.", locked: false },
      { id: "analisis-lenguaje", number: "4.3", title: "El lenguaje sagrado de las Escrituras", duration: "15 min", desc: "La precisión y belleza de las palabras reveladas por Dios.", locked: false },
      { id: "idiomas-originales", number: "4.4", title: "Ventanas al hebreo y al griego", duration: "20 min", desc: "Pequeños matices de palabras antiguas que iluminan el significado de los versículos.", locked: false },
      { id: "evaluacion-fuentes", number: "4.5", title: "Apoyarse en fuentes confiables", duration: "15 min", desc: "Diferenciar la doctrina oficial de la Iglesia de opiniones o tradiciones no autorizadas.", locked: false },
      { id: "pasajes-dificiles", number: "4.6", title: "Qué hacer ante pasajes difíciles", duration: "20 min", desc: "Pasos prácticos cuando un versículo te resulta confuso o desconcertante.", locked: false },
      { id: "estudio-doctrinal", number: "4.7", title: "Estudio temático de un principio", duration: "20 min", desc: "Seguir un hilo doctrinal (el perdón, la fe, la caridad) a través de los cinco libros canónicos.", locked: false },
      { id: "metodo-independiente", number: "4.8", title: "Tu plan de estudio personal para siempre", duration: "25 min", desc: "Diseña una rutina flexible, inspiradora y sostenible que te acompañe en tu crecimiento con Dios.", locked: false }
    ]
  }
];

// ==========================================================================
// LECCIÓN MAESTRA COMPLETA: «ENCUENTRA LA IDEA PRINCIPAL»
// Dividida en 5 Etapas Claras:
// 1. Descubre · 2. Comprende · 3. Observa · 4. Practica · 5. Reflexiona
// ==========================================================================
export const MASTER_LESSON_IDEA_PRINCIPAL = {
  id: "idea-principal",
  number: "1.4",
  levelNumber: 1,
  levelTitle: "Comienza a descubrir",
  title: "Encuentra la idea principal",
  subtitle: "Aprende a descubrir el corazón de lo que lees",
  duration: "20-25 min",
  badge: "Lección Modelo",
  
  objective: "Aprenderás a distinguir la verdad central que el autor inspirado quiso enseñar, sin confundirla con el tema general, con los detalles descriptivos ni con una aplicación personal apresurada.",

  // ETAPA 1: DESCUBRE
  etapa1_descubre: {
    title: "1. Descubre: El latido central del pasaje",
    badge: "Etapa 1 de 5",
    summary: "¿Alguna vez terminaste de leer un capítulo sintiendo que tus ojos recorrieron todas las palabras pero tu mente no retuvo nada claro?",
    content: `Eso nos pasa a todos cuando leemos con prisa o pensando únicamente en "cumplir la meta diaria". 

Sin embargo, los profetas no escribieron frases sueltas al azar: construyeron mensajes vivos y coherentes. En cada bloque de versículos hay un **latido central**, una verdad medular que sostiene a todo lo demás.

Cuando aprendes a encontrar la **idea principal**, las Escrituras dejan de ser una lista de palabras antiguas y se convierten en una conversación clara donde entiendes exactamente qué te está enseñando el Señor.`
  },

  // ETAPA 2: COMPRENDE
  etapa2_comprende: {
    title: "2. Comprende: Cuatro cosas que no son lo mismo",
    badge: "Etapa 2 de 5",
    intro: "El error más frecuente al estudiar las Escrituras es mezclar estas cuatro dimensiones. Conocer la diferencia te dará ojos nuevos para leer:",
    distinctions: [
      {
        type: "tema",
        title: "El Tema",
        question: "¿De qué habla en general?",
        format: "Una palabra o frase corta",
        example: "«La fe», «La oración», «El bautismo».",
        explanation: "Es solo la etiqueta del tema. Dos profetas pueden hablar de la fe y enseñar verdades completamente distintas.",
        tagColor: "pistache"
      },
      {
        type: "idea",
        title: "La Idea Principal",
        question: "¿Qué enseña específicamente sobre ese tema?",
        format: "Una oración completa con sujeto y acción",
        example: "«La fe crece cuando decidimos experimentar con la palabra de Dios aun cuando al principio sea solo un deseo».",
        explanation: "Es el corazón del mensaje: la enseñanza completa que el autor inspirado quiso que comprendiéramos.",
        tagColor: "matcha"
      },
      {
        type: "apoyo",
        title: "Detalles de Apoyo",
        question: "¿Cómo lo explica o ilustra?",
        format: "Relatos, ejemplos, comparaciones, razones",
        example: "Sembrar la semilla, sentir que se hincha en el pecho, esperar con paciencia el fruto.",
        explanation: "Son las ramas del árbol: las anécdotas y metáforas que hacen que la idea principal sea clara y viva.",
        tagColor: "chai"
      },
      {
        type: "aplicacion",
        title: "La Aplicación",
        question: "¿Qué debo hacer yo a partir de esta verdad?",
        format: "Una decisión o compromiso personal",
        example: "«Hoy voy a orar con fe sincera sobre una duda que tengo, confiando en que el Señor me guiará».",
        explanation: "Es la respuesta personal del estudiante. ¡Cuidado con saltar a la aplicación antes de entender el texto!",
        tagColor: "carob"
      }
    ],
    narrative: {
      title: "La lámpara del camino",
      text: `Imagina que caminas de noche por un sendero de montaña. Llevas una linterna en la mano. A los lados del camino hay pinos oscuros, piedras con vetas brillantes, el rumor de un arroyo y la brisa fresca.

Si alguien te pregunta: «¿De qué trata tu caminata?», responderás: *«De volver a salvo al campamento en la noche»* (ese es el **tema**).

Si te detienes a mirar una piedra bonita o las hojas bajo la luz, estás observando los **detalles de apoyo**.

Pero si te preguntan cuál es la regla de oro que te mantiene a salvo de caer al barranco, dirás con total certeza: *«Para no tropezar, debo mantener la luz apuntando al suelo exactamente delante de mis pasos»*. Esa es la **idea principal**: la verdad vital y clara que guía toda la experiencia.

A partir de ella, decides no correr y asegurar tu calzado. Esa es tu **aplicación**.

Confundir una piedra bonita con la luz que te orienta es el mismo error que cometemos cuando nos quedamos con un detalle curioso de un versículo y perdemos de vista la enseñanza salvadora del profeta.`
    }
  },

  // ETAPA 3: OBSERVA
  etapa3_observa: {
    title: "3. Observa: El método de los 5 movimientos en Helamán 3",
    badge: "Etapa 3 de 5",
    movements: [
      { step: 1, name: "Leer el pasaje completo", desc: "Lee sin apuro de principio a fin antes de subrayar o sacar conclusiones. Permite que el autor termine de hablar." },
      { step: 2, name: "Preguntar qué enseña principalmente", desc: "Hazte la pregunta clave: «Si el autor solo pudiera dejarme una sola verdad grabada en el alma con este pasaje, ¿cuál sería?»" },
      { step: 3, name: "Observar repeticiones y giros", desc: "Busca palabras que se repiten y conectores clave como «por tanto», «así vemos que» o «mas he aquí»." },
      { step: 4, name: "Separar el centro de los apoyos", desc: "Distingue qué partes son ilustraciones o ejemplos y cuál es la columna vertebral que sostiene todo el pasaje." },
      { step: 5, name: "Redactar y comprobar una oración", desc: "Escribe con tus propias palabras una oración afirmativa completa que resuma la verdad central." }
    ],
    scriptureCase: {
      ref: "Helamán 3:27–30",
      link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/3?lang=spa&id=p27-p30#p27",
      text: `«27 Así podemos ver que el Señor es misericordioso con todos aquellos que con sinceridad de corazón quieran invocar su santo nombre.
28 Sí, así vemos que la puerta del cielo está abierta para todos, aun para aquellos que quieran creer en el nombre de Jesucristo, que es el Hijo de Dios.
29 Sí, vemos que quienquiera que desee puede asirse a la palabra de Dios, que es viva y poderosa, que partirá por medio toda la astucia, y los lazos y trampas del diablo, y guiará al hombre de Cristo por un camino estrecho y angosto, a través de ese eterno abismo de miseria...
30 y depositará su alma, sí, su alma inmortal, a la diestra de Dios en el reino de los cielos...»`,
      breakdown: {
        tema: "La palabra de Dios y la protección espiritual.",
        idea: "Quien se aferra sinceramente a la palabra de Dios superará todos los engaños del adversario y será guiado con seguridad hasta la presencia celestial de Dios.",
        apoyos: "La astucia del diablo, los lazos y trampas, el eterno abismo de miseria, el camino estrecho y angosto.",
        aplicacion: "Estudiar a diario las Escrituras con espíritu de oración para reconocer y vencer las confusiones morales de mi entorno."
      }
    },
    tips: [
      "Fórmulas del Libro de Mormón: «Y así vemos que...» suele ser la señal directa de la idea principal.",
      "Causa y efecto: «Si buscamos al Señor con sinceridad... entonces Él nos protegerá».",
      "Palabras que se repiten con insistencia en el mismo párrafo.",
      "Testimonio centrado en Jesucristo y Su poder redentor."
    ],
    errors: [
      { title: "Confundir el tema con la idea", text: "Decir solo «Trata del bautismo» en lugar de explicar qué enseña sobre él." },
      { title: "Fascinarse con un detalle", text: "Quedarse debatiendo cómo era el barco o la ropa en lugar de la fe del profeta." },
      { title: "Saltar directo a la aplicación", text: "Pensar qué debo hacer antes de entender con respeto lo que el texto dice." }
    ]
  },

  // ETAPA 4: PRACTICA
  etapa4_practica: {
    title: "4. Practica: Pon a prueba lo que aprendiste",
    badge: "Etapa 4 de 5",
    activityAlma: {
      ref: "Alma 32:21",
      link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa&id=p21#p21",
      text: "«Y ahora bien, como dije concerniente a la fe: La fe no es tener un conocimiento perfecto de las cosas; de modo que si tenéis fe, tenéis esperanza en cosas que no se ven, y que son verdaderas».",
      solution: {
        tema: "La naturaleza de la fe en el Evangelio.",
        idea: "Tener fe no significa poseer un conocimiento perfecto de las cosas, sino albergar una esperanza certera en verdades reales que aún no vemos con los ojos físicos.",
        apoyos: "El contraste entre 'conocimiento perfecto' y 'esperanza'; la condición indispensable de que las cosas esperadas 'sean verdaderas'.",
        aplicacion: "Confiar en las promesas del Señor y ser constante en la oración aun cuando no vea de inmediato la solución a mis problemas."
      }
    },
    checklist: [
      { id: "chk-1", text: "¿Está expresada en una oración completa con sujeto y verbo de acción?" },
      { id: "chk-2", text: "¿Refleja con fidelidad lo que el profeta enseñó en su propio contexto?" },
      { id: "chk-3", text: "¿Se distingue con claridad del tema general y de los detalles ilustrativos?" },
      { id: "chk-4", text: "¿Es un principio eterno que sigue siendo verdadero y valioso hoy?" },
      { id: "chk-5", text: "¿Está armonizada con las enseñanzas de Jesucristo?" }
    ],
    quizzes: [
      {
        id: "q1",
        question: "Si alguien dice: «La idea principal de 1 Nefi 3:7 es la obediencia», ¿cuál es el análisis metodológico correcto?",
        options: [
          {
            id: "opt-a",
            text: "Es correcto, porque la obediencia es la virtud más destacada de Nefi.",
            isCorrect: false,
            feedback: "«La obediencia» es únicamente el **tema** (una palabra). No es la idea principal porque no explica qué enseña Nefi acerca del Señor y de cómo nos ayuda a obedecer."
          },
          {
            id: "opt-b",
            text: "Es inexacto: 'la obediencia' es el tema. La idea principal es que el Señor siempre prepara una vía para que cumplamos lo que manda.",
            isCorrect: true,
            feedback: "¡Exacto! Distinguiste con maestría el tema de la enseñanza completa inspirada: el Señor prepara el camino."
          },
          {
            id: "opt-c",
            text: "Es incorrecto porque 1 Nefi 3:7 trata sobre Labán y las planchas de bronce.",
            isCorrect: false,
            feedback: "Labán y las planchas son los detalles históricos de apoyo del relato, no la enseñanza doctrinal eterna."
          }
        ]
      },
      {
        id: "q2",
        question: "En Helamán 3:29, la frase «que partirá por medio toda la astucia, y los lazos y trampas del diablo» cumple la función de:",
        options: [
          {
            id: "opt-a",
            text: "Un detalle de apoyo ilustrativo que demuestra con una metáfora el poder de la palabra de Dios.",
            isCorrect: true,
            feedback: "¡Excelente! Es una poderosa imagen de apoyo que ilustra cómo la palabra de Dios nos defiende en la vida real."
          },
          {
            id: "opt-b",
            text: "La idea principal de todo el Libro de Helamán.",
            isCorrect: false,
            feedback: "No es la idea principal, porque si quitamos esa metáfora, la verdad central de aferrarse a la palabra de Dios sigue firme."
          }
        ]
      }
    ]
  },

  // ETAPA 5: REFLEXIONA
  etapa5_reflexiona: {
    title: "5. Reflexiona: Escribe en tu Diario Personal",
    badge: "Etapa 5 de 5",
    prompt: "Piensa en un versículo que te guste mucho. ¿Cuál es su verdadera idea principal expresada en una sola oración? ¿Cómo cambia tu comprensión cuando la distingues de lo que creías que decía?",
    sources: [
      { title: "Libro de Mormón: Helamán 3:27–30", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/3?lang=spa" },
      { title: "Libro de Mormón: Alma 32:21", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa" },
      { title: "Guía para el Estudio de las Escrituras: «Escudriñar las Escrituras»", url: "https://www.churchofjesuschrist.org/study/scriptures/gs/scriptures?lang=spa" }
    ]
  }
};
