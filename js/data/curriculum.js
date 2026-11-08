// ==========================================================================
// ENCUENTRA — PLAN DE ESTUDIOS (ACADEMIA) Y LECCIÓN MAESTRA
// ==========================================================================

export const CURRICULUM_LEVELS = [
  {
    id: 1,
    title: "Nivel 1 — Fundamentos",
    badge: "Básico",
    description: "Aprende los hábitos y herramientas indispensables para pasar de hojear las Escrituras a escudriñar con propósito.",
    lessons: [
      { id: "como-comenzar", number: "1.1", title: "Cómo comenzar a estudiar las Escrituras", duration: "15 min", desc: "Preparación espiritual, oración sincera y creación de un espacio propicio para la revelación.", locked: false },
      { id: "leer-vs-escudrinar", number: "1.2", title: "Diferencia entre leer y escudriñar", duration: "18 min", desc: "El mandato divino de escudriñar: profundidad vs velocidad y cómo cambia tu comprensión.", locked: false },
      { id: "leer-con-atencion", number: "1.3", title: "Cómo leer con atención", duration: "20 min", desc: "Técnicas de enfoque para detectar detalles sutiles que a menudo pasamos por alto.", locked: false },
      { id: "idea-principal", number: "1.4", title: "Encuentra la idea principal", duration: "25 min", desc: "Distingue el tema, la idea central, los detalles de apoyo y la aplicación personal.", isMaster: true, locked: false },
      { id: "comprender-oracion", number: "1.5", title: "Cómo comprender una oración", duration: "15 min", desc: "Sujeto, acción, condiciones y promesas en la sintaxis de las Escrituras.", locked: false },
      { id: "palabras-desconocidas", number: "1.6", title: "Cómo reconocer palabras desconocidas", duration: "15 min", desc: "Uso del Diccionario Doctrinal y Guía para el Estudio de las Escrituras.", locked: false },
      { id: "formular-preguntas", number: "1.7", title: "Cómo formular preguntas inspiradas", duration: "20 min", desc: "Preguntas que abren el entendimiento: ¿Quién? ¿Por qué? ¿Qué revela sobre Dios?", locked: false },
      { id: "reflexionar-leido", number: "1.8", title: "Cómo reflexionar sobre lo leído", duration: "15 min", desc: "Meditar como lo hizo Nefi: dar espacio al Espíritu para que enseñe al corazón.", locked: false }
    ]
  },
  {
    id: 2,
    title: "Nivel 2 — Comprensión y contexto",
    badge: "Intermedio",
    description: "Descubre el entorno histórico, geográfico y cultural para comprender qué significaba el texto para sus primeros destinatarios.",
    lessons: [
      { id: "contexto-historico", number: "2.1", title: "Contexto histórico", duration: "20 min", desc: "¿En qué época se escribió y qué desafíos enfrentaba el pueblo del Señor?", locked: false },
      { id: "contexto-cultural", number: "2.2", title: "Contexto cultural", duration: "20 min", desc: "Costumbres del Antiguo Cercano Oriente y de los pueblos del Libro de Mormón.", locked: false },
      { id: "contexto-geografico", number: "2.3", title: "Contexto geográfico", duration: "15 min", desc: "Rutas, desiertos, ciudades y templos: el mapa físico de las Escrituras.", locked: false },
      { id: "contexto-literario", number: "2.4", title: "Contexto literario", duration: "18 min", desc: "Géneros: narrativa histórica, epístola, poesía, profecía y sermón.", locked: false },
      { id: "identificar-personajes", number: "2.5", title: "Identificación de personajes", duration: "15 min", desc: "Voces, autores, narradores y receptores de cada mensaje.", locked: false },
      { id: "identificar-acontecimientos", number: "2.6", title: "Identificación de acontecimientos", duration: "15 min", desc: "Cronología y circunstancias que detonaron la enseñanza inspirada.", locked: false },
      { id: "causas-consecuencias", number: "2.7", title: "Causas y consecuencias", duration: "18 min", desc: "El patrón de «si guardáis mis mandamientos...»: leyes espirituales en acción.", locked: false },
      { id: "repeticiones-contrastes", number: "2.8", title: "Repeticiones y contrastes", duration: "20 min", desc: "Cómo los profetas subrayaban verdades contrastando luz y tinieblas.", locked: false },
      { id: "conectores-palabras-clave", number: "2.9", title: "Conectores y palabras importantes", duration: "15 min", desc: "«Por tanto», «no obstante», «mas he aquí»: señales lógicas en el texto.", locked: false },
      { id: "relaciones-versiculos", number: "2.10", title: "Relaciones entre versículos", duration: "20 min", desc: "Evitar sacar versículos de contexto: analizar el párrafo completo.", locked: false }
    ]
  },
  {
    id: 3,
    title: "Nivel 3 — Análisis de las Escrituras",
    badge: "Avanzado",
    description: "Aprende a decodificar las ricas figuras retóricas, símbolos, parábolas y estructuras poéticas semíticas.",
    lessons: [
      { id: "metaforas-similes", number: "3.1", title: "Metáforas y símiles", duration: "20 min", desc: "El olivo, la vid verdadera, la luz del mundo y el escudo de la fe.", locked: false },
      { id: "parabolas", number: "3.2", title: "El arte de las parábolas", duration: "25 min", desc: "Por qué Jesucristo enseñó con parábolas y cómo interpretarlas correctamente.", locked: false },
      { id: "simbolismos", number: "3.3", title: "Simbolismos del Evangelio", duration: "22 min", desc: "Tipos y sombras que testifican y señalan directamente a Jesucristo.", locked: false },
      { id: "hiperboles", number: "3.4", title: "Hipérboles e intensidad", duration: "15 min", desc: "El uso del lenguaje enfático oriental para fijar principios inolvidables.", locked: false },
      { id: "paralelismos", number: "3.5", title: "Paralelismos hebreos", duration: "20 min", desc: "Sinonímico, antitético y sintético: la poesía del espíritu en los Salmos e Isaías.", locked: false },
      { id: "quiasmos", number: "3.6", title: "Quiasmos en el Libro de Mormón", duration: "25 min", desc: "Estructuras concéntricas (como Alma 36) como evidencia y foco doctrinal.", locked: false },
      { id: "figuras-retoricas", number: "3.7", title: "Otras figuras retóricas", duration: "18 min", desc: "Alegorías, personificación y preguntas retóricas en los profetas.", locked: false },
      { id: "relaciones-pasajes", number: "3.8", title: "Correlación entre pasajes", duration: "20 min", desc: "Cómo la Biblia y el Libro de Mormón se entrelazan y apoyan mutuamente.", locked: false },
      { id: "analisis-narraciones", number: "3.9", title: "Análisis de narraciones bíblicas", duration: "20 min", desc: "Estructura dramática, pruebas y el triunfo de la gracia divina.", locked: false },
      { id: "ensenanzas-doctrinales", number: "3.10", title: "Identificación de enseñanzas doctrinales", duration: "22 min", desc: "Extraer principios eternos a partir de relatos históricos específicos.", locked: false }
    ]
  },
  {
    id: 4,
    title: "Nivel 4 — Profundización",
    badge: "Maestría",
    description: "Métodos rigurosos de estudio personal: lenguaje, exégesis reverente y autonomía en el aprendizaje del Evangelio.",
    lessons: [
      { id: "intro-hermeneutica", number: "4.1", title: "Introducción a la hermenéutica", duration: "25 min", desc: "Principios de interpretación fiel guiados por el Espíritu Santo y las Escrituras.", locked: false },
      { id: "intro-exegesis", number: "4.2", title: "Introducción a la exégesis", duration: "25 min", desc: "Descubrir lo que el texto dice en su origen antes de aplicarlo al presente.", locked: false },
      { id: "analisis-lenguaje", number: "4.3", title: "Análisis del lenguaje sagrado", duration: "20 min", desc: "Términos teológicos clave y la precisión del vocabulario revelado.", locked: false },
      { id: "idiomas-originales", number: "4.4", title: "Aproximación a los idiomas originales", duration: "25 min", desc: "Matices del hebreo del Antiguo Testamento y el griego del Nuevo Testamento.", locked: false },
      { id: "evaluacion-fuentes", number: "4.5", title: "Evaluación de fuentes y comentarios", duration: "20 min", desc: "Distinguir doctrina oficial, opiniones de eruditos y fuentes secundarias.", locked: false },
      { id: "pasajes-dificiles", number: "4.6", title: "Comprensión de pasajes difíciles", duration: "25 min", desc: "Estrategias ante versículos desconcertantes o con aparente contradicción.", locked: false },
      { id: "estudio-doctrinal", number: "4.7", title: "Estudio doctrinal temático", duration: "25 min", desc: "Armonizar las cinco obras canónicas en torno a un principio del Evangelio.", locked: false },
      { id: "metodo-independiente", number: "4.8", title: "Desarrollo de un método de estudio propio", duration: "30 min", desc: "Construye tu propio sistema diario sostenible de estudio profundo para toda la vida.", locked: false }
    ]
  }
];

// ==========================================================================
// LECCIÓN MAESTRA COMPLETA: «ENCUENTRA LA IDEA PRINCIPAL» (19 COMPONENTES)
// ==========================================================================
export const MASTER_LESSON_IDEA_PRINCIPAL = {
  id: "idea-principal",
  number: "1.4",
  levelNumber: 1,
  levelTitle: "Nivel 1 — Fundamentos",
  title: "Encuentra la idea principal",
  subtitle: "Herramientas para una lectura que permanece",
  duration: "25-30 min",
  badge: "Lección Modelo",
  
  // 5. Objetivo de aprendizaje
  objective: "Capacitar al estudiante para identificar con precisión la idea central que el autor inspirado quiso comunicar en un pasaje, distinguiéndola de un tema genérico, de los detalles de apoyo y de las aplicaciones personales precipitadas.",

  // 6. Introducción
  intro: `¿Alguna vez has terminado de leer un capítulo de las Escrituras con la sensación de que tus ojos recorrieron todas las palabras, pero tu mente no retuvo nada claro? 

Eso ocurre con frecuencia cuando leemos como si estuviéramos «pasando la vista», buscando únicamente cumplir con una meta diaria o subrayando frases sueltas al azar. Sin embargo, los profetas no escribieron frases aisladas: construyeron mensajes coherentes. En cada pasaje significativo hay un **latido central**, una verdad medular que sostiene a todo lo demás.

Esta lección te enseñará a encontrar esa **idea principal** con un método probado, permitiéndote comprender el texto antes de intentar aplicarlo.`,

  // 7 & 8. Explicación sencilla y profunda: Las Cuatro Cosas que No son lo Mismo
  distinctions: [
    {
      type: "tema",
      title: "1. El Tema",
      question: "¿De qué trata?",
      format: "Una palabra o frase corta",
      example: "«La fe», «La oración», «El arrepentimiento».",
      explanation: "El tema es solo la etiqueta o materia prima general. Saber el tema no es lo mismo que comprender la lección, pues dos profetas pueden hablar de la fe y enseñar verdades completamente distintas.",
      tagColor: "pistache"
    },
    {
      type: "idea",
      title: "2. La Idea Principal",
      question: "¿Qué enseña específicamente sobre ese tema?",
      format: "Una oración completa con sujeto y predicado",
      example: "«La fe crece cuando decidimos experimentar con la palabra de Dios aunque al principio sea solo un deseo».",
      explanation: "Es la tesis central del autor inspirado. Es una afirmación o enseñanza completa que une las partes del texto en una verdad doctrinal comprensible.",
      tagColor: "matcha"
    },
    {
      type: "apoyo",
      title: "3. Detalles de Apoyo",
      question: "¿Cómo lo sustenta o ilustra?",
      format: "Hechos, metáforas, relatos, listas, razones",
      example: "Sembrar la semilla, sentir que se hincha en el pecho, desechar la duda.",
      explanation: "Son las ramas del árbol: las anécdotas, comparaciones y evidencias que el autor utiliza para que la idea principal resulte vívida y convincente.",
      tagColor: "chai"
    },
    {
      type: "aplicacion",
      title: "4. La Aplicación",
      question: "¿Qué debo hacer yo a partir de esta verdad?",
      format: "Una decisión o compromiso personal de acción",
      example: "«Hoy leeré cinco versículos buscando un versículo para experimentar en mi vida».",
      explanation: "Es la respuesta del corazón del lector. Es crucial no saltar a la aplicación antes de entender lo que el autor realmente quiso decir.",
      tagColor: "carob"
    }
  ],

  // 9. Ejemplo narrativo original: «La lámpara del camino»
  narrativeExample: {
    title: "La lámpara del camino",
    author: "Relato pedagógico ENCUENTRA",
    text: `Imagina que vas caminando por un sendero montañoso al caer la noche. Llevas una linterna de mano. El sendero está rodeado de zarzas, piedras sueltas, murmullos de agua y sombras entre los pinos.

Si alguien te pregunta: «¿De qué trata tu caminata?», podrías responder: *«De volver al campamento en la noche»* (ese es el **tema**).

Si te detienes a mirar las hojas brillantes bajo la luz, una piedra con vetas de cuarzo o la forma de un tronco torcido, estás observando los **detalles de apoyo** que acompañan el camino.

Pero si te preguntan cuál es la regla de oro que te mantiene a salvo, dirás con certeza: *«Para no caer al barranco, debo mantener la luz apuntando al suelo exactamente delante de mis pasos»*. Esa es la **idea principal**: una afirmación clara, vital y estructurada que guía toda la experiencia.

A partir de ella, decides ajustar la correa de tu linterna y no correr en las curvas. Esa es tu **aplicación**.

Confundir una piedra bonita con la luz que te guía es el mismo error que cometemos al tomar un detalle curioso de un versículo y perder de vista la enseñanza salvadora del profeta.`,
    takeaway: "No confundas el entorno del camino (detalles) con la luz que te orienta (idea principal)."
  },

  // 11. El método de cinco movimientos (demostración paso a paso)
  fiveMovements: [
    {
      step: 1,
      name: "Leer el pasaje completo",
      instruction: "Lee de principio a fin sin detenerte a marcar ni a sacar conclusiones apresuradas. Permite que el autor presente su pensamiento entero antes de juzgarlo.",
      hint: "Evita subrayar en la primera lectura; tus ojos se apegarán a la primera palabra llamativa en lugar del mensaje íntegro."
    },
    {
      step: 2,
      name: "Preguntar qué enseña principalmente",
      instruction: "Hazte la pregunta clave: «Si el autor solo pudiera dejarme una sola verdad grabada en el alma con este pasaje, ¿cuál sería?»",
      hint: "Busca el verbo central y la relación entre la causa divina y la consecuencia para el hombre."
    },
    {
      step: 3,
      name: "Observar repeticiones y giros",
      instruction: "Rastrea conectores lógicos clave: «así vemos que», «por tanto», «mas he aquí», «porque». Los profetas del Libro de Mormón suelen usar fórmulas de conclusión editorial explícitas.",
      hint: "En el Libro de Mormón, las frases que comienzan con «Y así vemos...» son faros directos hacia la idea principal."
    },
    {
      step: 4,
      name: "Separar el centro de sus apoyos",
      instruction: "Identifica qué elementos son ilustraciones, analogías o ejemplos históricos. Imagina qué pasaría si quitas una comparación: si el mensaje central sigue en pie, era un apoyo.",
      hint: "Los detalles enriquecen el mensaje; la idea principal lo sostiene."
    },
    {
      step: 5,
      name: "Redactar y comprobar una oración",
      instruction: "Escribe en tus propias palabras una oración afirmativa completa. Luego sométela a la lista de comprobación: ¿es completa? ¿es fiel al texto? ¿es transferible?",
      hint: "Si tu frase no tiene verbo conjugado, no es una idea principal, sigue siendo solo un tema."
    }
  ],

  // 10. Aplicación del método a Helamán 3:27–30
  scriptureExample: {
    reference: "Helamán 3:27–30",
    link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/3?lang=spa&id=p27-p30#p27",
    passage: `«27 Así podemos ver que el Señor es misericordioso con todos aquellos que con sinceridad de corazón quieran invocar su santo nombre.
28 Sí, así vemos que la puerta del cielo está abierta para todos, aun para aquellos que quieran creer en el nombre de Jesucristo, que es el Hijo de Dios.
29 Sí, vemos que quienquiera que desee puede asirse a la palabra de Dios, que es viva y poderosa, que partirá por medio toda la astucia, y los lazos y trampas del diablo, y guiará al hombre de Cristo por un camino estrecho y angosto, a través de ese eterno abismo de miseria...
30 y depositará su alma, sí, su alma inmortal, a la diestra de Dios en el reino de los cielos...»`,
    analysis: {
      tema: "La palabra de Dios y la salvación.",
      detalles: "La astucia del diablo, los lazos y trampas, el eterno abismo de miseria, la puerta del cielo abierta, el camino estrecho y angosto.",
      ideaPrincipal: "Quien se aferra sinceramente a la palabra de Dios superará todos los engaños del adversario y será guiado con seguridad hasta la presencia celestial de Dios.",
      aplicacion: "Estudiar diariamente las Escrituras con un espíritu de oración sincero para reconocer y vencer las trampas morales de mi entorno actual."
    }
  },

  // 12. Pistas para identificar la idea principal
  tips: [
    "Fórmulas editoriales: «Y así vemos que...», «Por tanto quiero que sepáis...», «He aquí, os digo...».",
    "Declaraciones de causa y efecto: «Si hacéis esto... entonces sucederá aquello».",
    "El peso de las palabras que se repiten con insistencia a lo largo de los versículos.",
    "El inicio o la conclusión de un discurso o sermón profético.",
    "El testimonio enfocado en el poder redentor y el ministerio de Jesucristo."
  ],

  // 13. Errores frecuentes
  frequentErrors: [
    {
      title: "Confundir el tema con la idea principal",
      explanation: "Decir simplemente «Trata sobre el bautismo». Eso no explica qué aprendemos acerca del bautismo ni qué demanda el Señor."
    },
    {
      title: "Fascinarse con un detalle secundario",
      explanation: "Quedarse debatiendo cuántos metros medía el barco o el tipo de madera, olvidando la fe que permitió construirlo."
    },
    {
      title: "Saltar inmediatamente a la aplicación",
      explanation: "Pensar qué debo hacer antes de entender qué dijo el autor. Esto provoca interpretaciones forzadas ajenas al Evangelio."
    },
    {
      title: "Convertir la propia opinión en doctrina",
      explanation: "Hacer que el pasaje diga lo que uno desea que diga, en lugar de permitir con humildad que la voz del profeta nos instruya."
    }
  ],

  // 17. Lista de comprobación interactiva
  checklist: [
    { id: "chk-1", text: "¿Está expresada en una oración completa con sujeto y predicado?" },
    { id: "chk-2", text: "¿Refleja con fidelidad lo que el profeta/autor inspirado enseñó en su contexto?" },
    { id: "chk-3", text: "¿Se distingue con claridad del tema general y de los detalles descriptivos?" },
    { id: "chk-4", text: "¿Es un principio universal y transferible que sigue siendo verdadero hoy?" },
    { id: "chk-5", text: "¿Está centrada o armonizada con las enseñanzas de Jesucristo?" },
    { id: "chk-6", text: "¿Permite generar aplicaciones personales coherentes y enriquecedoras?" }
  ],

  // 15. Ejercicios de comprensión interactivos con retroalimentación explicativa
  quizzes: [
    {
      id: "q1",
      question: "Si en un grupo de estudio alguien dice: «La idea principal de 1 Nefi 3:7 es la obediencia», ¿cuál es el análisis metodológico correcto?",
      options: [
        {
          id: "opt-a",
          text: "Es correcto, porque 'la obediencia' es la virtud máxima del pasaje.",
          isCorrect: false,
          feedback: "No es correcto. «La obediencia» es únicamente el **tema** (una frase breve). No es una idea principal porque no explica qué enseña Nefi acerca del Señor y de la obediencia."
        },
        {
          id: "opt-b",
          text: "Es inexacto: 'la obediencia' es el tema. La idea principal es que el Señor siempre prepara una vía para cumplir lo que manda.",
          isCorrect: true,
          feedback: "¡Excelente! Has captado la distinción fundamental. «La obediencia» es el tema; la afirmación completa («El Señor no da mandamientos sin preparar una vía») es la idea principal inspirada."
        },
        {
          id: "opt-c",
          text: "Es incorrecto porque 1 Nefi 3:7 trata sobre Labán y las planchas de bronce.",
          isCorrect: false,
          feedback: "Labán y las planchas de bronce son los detalles históricos y de apoyo del relato, no la enseñanza doctrinal central."
        }
      ]
    },
    {
      id: "q2",
      question: "En Helamán 3:29, la frase «que partirá por medio toda la astucia, y los lazos y trampas del diablo» cumple la función de:",
      options: [
        {
          id: "opt-a",
          text: "Un detalle de apoyo ilustrativo que demuestra el poder protector de la palabra de Dios.",
          isCorrect: true,
          feedback: "¡Exacto! Es una vívida metáfora de apoyo que ilustra cómo la palabra de Dios (el centro) actúa frente a los peligros espirituales."
        },
        {
          id: "opt-b",
          text: "La idea principal de todo el capítulo 3 de Helamán.",
          isCorrect: false,
          feedback: "No. Si quitamos esa frase, el mensaje central de aferrarse a la palabra de Dios sigue firme; por tanto, es un apoyo descriptivo."
        },
        {
          id: "opt-c",
          text: "Una aplicación personal exclusiva para los nefitas antiguos.",
          isCorrect: false,
          feedback: "No es una aplicación personal, sino una descripción doctrinal de la eficacia de la palabra revelada."
        }
      ]
    }
  ],

  // 14. Actividad práctica guiada con Alma 32:21
  practicalActivity: {
    scriptureRef: "Alma 32:21",
    scriptureText: "«Y ahora bien, como dije concerniente a la fe: La fe no es tener un conocimiento perfecto de las cosas; de modo que si tenéis fe, tenéis esperanza en cosas que no se ven, y que son verdaderas».",
    sourceLink: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa&id=p21#p21",
    instructions: "Aplica los cinco movimientos aprendidos para descomponer este versículo canónico en sus cuatro dimensiones.",
    expectedSolution: {
      tema: "La naturaleza de la fe en el Evangelio.",
      ideaPrincipal: "Tener fe no significa poseer un conocimiento perfecto de las cosas, sino albergar una esperanza certera en verdades reales que aún no vemos con los ojos físicos.",
      detalles: "El contraste entre 'conocimiento perfecto' y 'esperanza', la condición de que las cosas esperadas 'sean verdaderas'.",
      aplicacion: "Confiar en las promesas del Señor y perseverar en la oración aun cuando no comprenda todos los detalles del futuro."
    }
  },

  // 16. Reflexión personal
  personalReflectionPrompt: "Piensa en un versículo de las Escrituras que haya sido significativo en tu vida. ¿Cuál es su verdadera idea principal expresada en una sola oración? ¿Cómo cambia tu comprensión cuando la distingues de lo que tú pensabas que decía?",

  // 18. Referencias y fuentes oficiales
  sources: [
    { title: "Libro de Mormón: Helamán 3:27–30", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/3?lang=spa" },
    { title: "Libro de Mormón: Alma 32:21", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/32?lang=spa" },
    { title: "Guía para el Estudio de las Escrituras: «Escudriñar las Escrituras»", url: "https://www.churchofjesuschrist.org/study/scriptures/gs/scriptures?lang=spa" },
    { title: "Manual del Alumno de Seminario: Principios para el estudio de las Escrituras", url: "https://www.churchofjesuschrist.org/study/manual/gospel-topics/scriptures?lang=spa" }
  ],

  // 19. Navegación
  prevLesson: { id: "leer-con-atencion", title: "1.3 Cómo leer con atención" },
  nextLesson: { id: "comprender-oracion", title: "1.5 Cómo comprender una oración" }
};
