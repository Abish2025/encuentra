// ==========================================================================
// ENCUENTRA — PLAN DE ESTUDIOS (ACADEMIA) Y LECCIONES INTERACTIVAS
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
    id: 3,
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
// LECCIÓN 1.1: CÓMO COMENZAR A ESTUDIAR LAS ESCRITURAS
// ==========================================================================
export const MASTER_LESSON_COMO_COMENZAR = {
  id: "como-comenzar",
  number: "1.1",
  levelNumber: 1,
  levelTitle: "Comienza a descubrir",
  title: "Cómo comenzar a estudiar las Escrituras",
  subtitle: "Preparación del corazón, reverencia y un momento de paz",
  duration: "12 min",
  badge: "Paso 1.1",
  objective: "Aprenderás a crear un ambiente interior y exterior propicio para el estudio, a invocar la guía del Espíritu Santo mediante la oración sincera antes de abrir el libro sagrado y a cultivar una disposición reverente para escuchar la voz del Señor.",

  etapa1_descubre: {
    title: "1. Descubre: Abrir el corazón antes de abrir el libro",
    badge: "Etapa 1 de 5",
    summary: "¿Alguna vez intentaste estudiar las Escrituras con el teléfono sonando, la mente llena de tareas pendientes y la sensación de solo querer cumplir una obligación?",
    content: `Estudiar las sagradas Escrituras no es como leer un libro común o revisar noticias en internet: es una cita personal con el Autor de la vida.

Cuando nos apresuramos a leer sin preparar el corazón, las palabras suelen rebotar en la superficie de la mente. Pero cuando silenciamos las distracciones, hacemos una pausa y pedimos en oración que el Espíritu Santo nos acompañe, los versículos cobran un significado íntimo y poderoso.

El secreto de los grandes escudriñadores de la palabra de Dios no ha sido la velocidad con que leían las páginas, sino la devoción con que abrían su espíritu para recibir revelación.`
  },

  etapa2_comprende: {
    title: "2. Comprende: Los cuatro pilares de la preparación",
    badge: "Etapa 2 de 5",
    intro: "Para transformar tus minutos de lectura en una fuente real de paz y fortaleza, ten en cuenta estos cuatro pilares indispensables:",
    distinctions: [
      {
        type: "tema",
        title: "1. Espacio y Silencio",
        question: "¿Dónde y cómo me ubico?",
        format: "Alejar notificaciones y prisa",
        example: "Dejar el móvil en modo silencio y sentarse en un rincón con luz agradable.",
        explanation: "El Espíritu habla en voz suave y apacible; el ruido exterior satura la mente y ahoga Sus susurros.",
        tagColor: "pistache"
      },
      {
        type: "idea",
        title: "2. La Oración Previa",
        question: "¿A quién invito a acompañarme?",
        format: "Una oración de corazón antes de abrir el texto",
        example: "«Padre Celestial, por favor ilumina mi mente para entender lo que hoy necesitas decirme».",
        explanation: "2 Nefi 32:8–9 enseña que nada debemos hacer ante Dios sin antes orar en el nombre de Cristo.",
        tagColor: "matcha"
      },
      {
        type: "apoyo",
        title: "3. Disposición de Discípulo",
        question: "¿Con qué actitud me acerco?",
        format: "Hambre sincera de verdad",
        example: "Acercarse con una pregunta real o con el deseo de recibir consuelo espiritual.",
        explanation: "No leemos para tachar una casilla, sino para aprender de Jesucristo y seguir Su ejemplo.",
        tagColor: "chai"
      },
      {
        type: "aplicacion",
        title: "4. Cuaderno o Diario Listo",
        question: "¿Cómo atesoro lo que recibo?",
        format: "Herramienta de notas abierta",
        example: "Anotar en la sección 'Mi Diario' de ENCUENTRA la impresión que acabas de sentir.",
        explanation: "Cuando anotamos las impresiones espirituales, demostramos al Señor que valoramos Su instrucción.",
        tagColor: "carob"
      }
    ],
    narrative: {
      title: "El pozo de agua pura",
      text: `Imagina que caminas bajo el calor del mediodía y llegas a un pozo de agua cristalina con un cántaro en tus manos.

Si llegas corriendo agitado, con las manos llenas de tierra y arrojas el cántaro bruscamente contra el agua, removerás el sedimento del fondo y el agua saldrá turbia y difícil de beber.

Pero si te detienes unos instantes, respiras con tranquilidad, limpias el cántaro y lo bajas con serenidad, extraerás agua pura, fresca y deliciosa que saciará tu sed por todo el día.

La oración sincera y el silencio previo son exactamente eso: la manera en que limpias tu cántaro interior antes de beber de la palabra de Dios.`
    }
  },

  etapa3_observa: {
    title: "3. Observa: La preparación espiritual de Enós (Enós 1)",
    badge: "Etapa 3 de 5",
    movements: [
      { step: 1, name: "Reconocer el anhelo interior", desc: "Enós sintió que las palabras de su padre sobre la vida eterna penetraron profundamente en su corazón." },
      { step: 2, name: "Buscar un lugar de retiro", desc: "Se encontraba en los bosques, apartado del bullicio de la ciudad, en un entorno de naturaleza y recogimiento." },
      { step: 3, name: "Arrodillarse y clamar con fe", desc: "No fue una oración apresurada: sintió que su alma tuvo hambre y oró todo el día en súplica sincera." },
      { step: 4, name: "Escuchar la voz apacible", desc: "Cuando calmó su ser, llegó a él la voz del Señor con perdón, paz y promesas eternas." },
      { step: 5, name: "Registrar su testimonio", desc: "Escribió su experiencia en las planchas sagradas para que miles de años después nos inspire a orar." }
    ],
    scriptureCase: {
      ref: "Enós 1:3–5",
      link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/enos/1?lang=spa&id=p3-p5#p3",
      text: `«3 He aquí, salí a cazar bestias en los bosques; y las palabras que frecuentemente había oído a mi padre hablar concernientes a la vida eterna y el gozo de los santos, penetraron mi corazón profundamente.
4 Y mi alma tuvo hambre; y me arrodillé ante mi Hacedor, y clamé a él con ferviente oración y súplica por mi propia alma; y clamé a él todo el día; sí, y cuando anocheció, todavía elevaba mi voz a lo alto, hasta que llegó a los cielos.
5 Y vino a mí una voz, diciendo: Enós, tus pecados te son perdonados, y serás bendecido...»`,
      breakdown: {
        tema: "La preparación del alma y la oración ferviente previa a la revelación.",
        idea: "Cuando permitimos que la palabra penetre en el corazón y acudimos a Dios con hambre sincera de verdad en oración, el Señor responde con perdón y guía personal.",
        apoyos: "El bosque solitario, el recuerdo de su padre, el hambre del alma, la duración del clamor y la voz apacible al anochecer.",
        aplicacion: "Dedicar al menos un minuto de silencio y una oración de rodillas antes de abrir mi siguiente lectura de las Escrituras."
      }
    },
    tips: [
      "Silencia las notificaciones del teléfono antes de empezar para proteger tu concentración.",
      "Comienza con una oración simple y específica pidiendo entender lo que Dios quiere enseñarte hoy.",
      "Respira hondo durante 30 segundos y relaja la tensión de tu espalda y hombros.",
      "Ten cerca tu Diario de estudio para anotar ideas o impresiones apenas las sientas."
    ],
    errors: [
      { title: "Leer en piloto automático", text: "Comenzar a pasar las páginas con prisa sin haber hecho una oración de apertura." },
      { title: "Mantener distracciones activas", text: "Tener abiertas redes sociales o música estridente mientras intentas escuchar al Espíritu." },
      { title: "Obsesionarse con la cantidad", text: "Medir el éxito del estudio por capítulos leídos en lugar de la paz y luz recibida." }
    ]
  },

  etapa4_practica: {
    title: "4. Practica: Santiago 1:5–6 y 2 Nefi 32:8–9",
    badge: "Etapa 4 de 5",
    activity: {
      ref: "Santiago 1:5–6 / 2 Nefi 32:8–9",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/james/1?lang=spa&id=p5-p6#p5",
      text: "«Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada. Pero pida con fe, no dudando nada...» (Santiago 1:5–6)\n\n«...porque si escuchaseis al Espíritu que enseña al hombre a orar, sabríais que os es menester orar; porque el espíritu malo no enseña al hombre a orar, sino le enseña que no debe orar. Mas he aquí, os digo que debéis orar siempre, y no desmayar; que nada debéis hacer ante el Señor sin que primero oréis al Padre en el nombre de Cristo, para que él os consagre vuestra acción...» (2 Nefi 32:8–9)",
      solution: {
        tema: "La necesidad vital de orar a Dios antes de buscar sabiduría o actuar.",
        idea: "Debemos acudir a Dios con fe en oración sincera antes de emprender cualquier estudio o acción importante, para que Él consagre nuestro esfuerzo y nos conceda Su sabiduría abundante.",
        apoyos: "El contraste entre el Espíritu bueno que enseña a orar y la oposición que busca postergarla; la promesa incondicional de que Dios da con generosidad.",
        aplicacion: "Nunca abrir las Escrituras sin pedir primero en el nombre de Jesucristo que el Señor consagre ese tiempo a mi crecimiento espiritual."
      }
    },
    checklist: [
      { id: "chk-c1", text: "¿He silenciado o alejado los dispositivos que me distraen?" },
      { id: "chk-c2", text: "¿Hice una oración sincera invitando la guía del Espíritu Santo?" },
      { id: "chk-c3", text: "¿Tengo una pregunta honesta o propósito claro para este momento de estudio?" },
      { id: "chk-c4", text: "¿Tengo a mano mi Diario o cuaderno para registrar impresiones espirituales?" },
      { id: "chk-c5", text: "¿Estoy dispuesto a aplicar lo que el Señor me enseñe hoy?" }
    ],
    quizzes: [
      {
        id: "q-com-1",
        question: "De acuerdo con 2 Nefi 32:8–9, ¿qué advertencia nos hace el profeta acerca de la oración antes de hacer cualquier cosa?",
        options: [
          { id: "opt-1", text: "Que nada debemos hacer ante el Señor sin que primero oremos al Padre en el nombre de Cristo.", isCorrect: true, feedback: "¡Exacto! Nefi nos recuerda que la oración debe preceder toda obra para que el Padre consagre nuestra acción." },
          { id: "opt-2", text: "Que solo es necesario orar al final del día después de haber terminado de leer.", isCorrect: false, feedback: "El texto enfatiza que la oración debe realizarse *primero* para consagrar el acto que emprendemos." },
          { id: "opt-3", text: "Que la oración solo es necesaria cuando nos encontramos en un templo.", isCorrect: false, feedback: "Nefi recalca que debemos 'orar siempre y no desmayar', especialmente en nuestro estudio diario." }
        ]
      },
      {
        id: "q-com-2",
        question: "¿Cuál de las siguientes acciones refleja mejor la preparación del corazón antes de estudiar?",
        options: [
          { id: "opt-a", text: "Buscar un rincón tranquilo, apartar el móvil, respirar con calma y pedir luz en oración.", isCorrect: true, feedback: "¡Brillante! Esa actitud abre tu mente y corazón para recibir la voz apacible del Espíritu." },
          { id: "opt-b", text: "Leer apurado de pie mientras respondes mensajes de tus redes sociales.", isCorrect: false, feedback: "La dispersión mental impide que percibas los susurros delicados del Espíritu Santo." }
        ]
      }
    ]
  },

  etapa5_reflexiona: {
    title: "5. Reflexiona: Diseña tu momento sagrado",
    badge: "Etapa 5 de 5",
    prompt: "¿Cuál será tu lugar favorito y tu momento del día para estudiar las Escrituras con calma esta semana? ¿Qué pequeña oración le harás hoy al Padre Celestial antes de abrir tu siguiente pasaje?",
    sources: [
      { title: "Libro de Mormón: Enós 1:1–5", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/enos/1?lang=spa" },
      { title: "Libro de Mormón: 2 Nefi 32:8–9", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=spa" },
      { title: "Nuevo Testamento: Santiago 1:5–6", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/james/1?lang=spa" }
    ]
  }
};

// ==========================================================================
// LECCIÓN 1.2: LA DIFERENCIA ENTRE LEER Y ESCUDRIÑAR
// ==========================================================================
export const MASTER_LESSON_LEER_VS_ESCUDRINAR = {
  id: "leer-vs-escudrinar",
  number: "1.2",
  levelNumber: 1,
  levelTitle: "Comienza a descubrir",
  title: "La diferencia entre leer y escudriñar",
  subtitle: "Pasar la vista rápido vs cavar profundo: buscar tesoros espirituales",
  duration: "15 min",
  badge: "Paso 1.2",
  objective: "Aprenderás a transformar una lectura superficial y pasiva en una búsqueda activa y profunda, reconociendo las pistas que los profetas dejaron para quienes escudriñan las Escrituras.",

  etapa1_descubre: {
    title: "1. Descubre: Caminar sobre la arena vs. cavar por oro",
    badge: "Etapa 1 de 5",
    summary: "Leer es deslizar la mirada sobre el papel; escudriñar es explorar con la emoción de quien sabe que hay un tesoro escondido esperando ser hallado.",
    content: `Jesús no nos dijo 'lean las Escrituras si les queda tiempo libre', sino con firmeza amorosa: **«Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí»** (Juan 5:39).

La palabra *escudriñar* proviene de una raíz que significa examinar minuciosamente, registrar con esmero un terreno, como un minero que retira la tierra para descubrir una veta de metal precioso.

Cuando pasamos de solo 'leer' a 'escudriñar', cada versículo cobra vida: comenzamos a ver conexiones, promesas, advertencias y, sobre todo, el rostro misericordioso de Jesucristo en cada historia.`
  },

  etapa2_comprende: {
    title: "2. Comprende: El lector apresurado vs. el buscador de tesoros",
    badge: "Etapa 2 de 5",
    intro: "Comprender la diferencia entre leer y escudriñar cambiará para siempre tu relación con las Escrituras:",
    distinctions: [
      {
        type: "tema",
        title: "El Objetivo",
        question: "¿Por qué leo?",
        format: "Cumplir vs Encontrarse con Dios",
        example: "Lector: 'Tengo que leer 2 capítulos'. Escudriñador: 'Vengo a escuchar lo que el Señor tiene para mí hoy'.",
        explanation: "El objetivo define tu nivel de atención y tu receptividad espiritual.",
        tagColor: "pistache"
      },
      {
        type: "idea",
        title: "La Velocidad",
        question: "¿A qué ritmo avanzo?",
        format: "Carrera rápida vs Pausa reflexiva",
        example: "Detenerse en una frase que conmovió tu corazón y releerla tres veces.",
        explanation: "Los pasajes más bellos del Evangelio entregan su néctar únicamente cuando nos detenemos a saborearlos.",
        tagColor: "matcha"
      },
      {
        type: "apoyo",
        title: "Las Preguntas",
        question: "¿Qué pienso mientras leo?",
        format: "Aceptación pasiva vs Preguntas vivas",
        example: "¿Por qué el autor usó esta palabra? ¿Qué pasaba en su corazón en ese momento?",
        explanation: "Hacerle preguntas al texto despierta la mente y permite al Espíritu Santo guiarte a respuestas inesperadas.",
        tagColor: "chai"
      },
      {
        type: "aplicacion",
        title: "El Centro en Cristo",
        question: "¿A quién busco en la página?",
        format: "Historia antigua vs Testimonio de Jesús",
        example: "Ver cómo el sacrificio de Isaac, el maná o el estandarte de la libertad señalan al Salvador.",
        explanation: "Todas las santas Escrituras fueron dadas para testificar de Jesucristo y de Su poder de sanar y salvar.",
        tagColor: "carob"
      }
    ],
    narrative: {
      title: "La cueva y las dos antorchas",
      text: `Dos jóvenes exploradores entraron a una caverna donde había antiguas escrituras talladas en la roca. El primero encendió una antorcha, caminó a paso rápido mirando de reojo las paredes y al salir exclamó: 'Ya la recorrí toda, no encontré nada especial'.

El segundo explorador caminó despacio. Se acercó a la pared, limpió con su mano la arenisca y notó que detrás de unos símbolos rústicos se escondía un mapa detallado que conducía a un manantial oculto de agua dulce.

El primer explorador solo 'leyó' la cueva; el segundo la 'escudriñó'. El tesoro siempre estuvo allí para ambos, pero solo fue revelado al que se tomó el tiempo de buscar de verdad.`
    }
  },

  etapa3_observa: {
    title: "3. Observa: El rey Benjamín enseña a escudriñar (Mosíah 1)",
    badge: "Etapa 3 de 5",
    movements: [
      { step: 1, name: "Reconocer el mandato de un padre profeta", desc: "El rey Benjamín enseña a sus tres hijos la importancia vital de los anales de bronce." },
      { step: 2, name: "Comprender la alternativa dolorosa", desc: "Explica que sin las Escrituras, su pueblo habría caído en la ignorancia y el olvido espiritual." },
      { step: 3, name: "Identificar la palabra clave", desc: "El rey no les pide 'leer un poco', sino 'escudriñarlas diligentemente' (Mosíah 1:7)." },
      { step: 4, name: "Vincular el estudio con la obediencia", desc: "Escudriñar tiene un fruto claro: conocer los mandamientos para guardarlos con fidelidad." },
      { step: 5, name: "Visualizar el impacto generacional", desc: "Quien escudriña hoy bendice a sus hijos y familias en el futuro." }
    ],
    scriptureCase: {
      ref: "Mosíah 1:3, 5, 7",
      link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/1?lang=spa&id=p3,p5,p7#p3",
      text: `«3 Y les enseñó concerniente a los anales que estaban grabados sobre las planchas de bronce, diciendo: Hijos míos, quisiera que recordaseis que si no fuera por estas planchas... habríamos padecido en la ignorancia...
5 Porque no hubiera sido posible que nuestro padre Lehi hubiese recordado todas estas cosas... si no hubiese sido por la ayuda de estas planchas; pues él las enseñó a sus hijos...
7 Y ahora bien, hijos míos, quisiera que os acordaseis de escudriñarlas diligentemente, para que con ello os beneficiéis; y quisiera que guardaseis los mandamientos de Dios...»`,
      breakdown: {
        tema: "La preservación de la fe mediante el escudriñar diligente de los anales sagrados.",
        idea: "Escudriñar diligentemente las Escrituras nos rescata de la ignorancia espiritual, mantiene viva la memoria de los mandamientos de Dios y protege a las futuras generaciones del error.",
        apoyos: "El ejemplo del padre Lehi, las planchas de bronce como ancla doctrinal, el riesgo inminente de olvidar los convenios sagrados.",
        aplicacion: "Hacer de mi estudio de las Escrituras una búsqueda intencional de verdades que guíen mis decisiones diarias."
      }
    },
    tips: [
      "No midas el estudio por la cantidad de versículos leídos, sino por la luz que entra a tu alma.",
      "Cuando una frase te llame la atención, deténte de inmediato y léela dos o tres veces más.",
      "Pregúntate siempre: '¿Qué me enseña este pasaje acerca del amor y la misericordia de Jesucristo?'.",
      "Usa el Diccionario Doctrinal cuando encuentres una palabra cuyo significado te resulte poco familiar."
    ],
    errors: [
      { title: "Leer por inercia o cumplir una cuota", text: "Considerar el estudio de las Escrituras como un deber frío en vez de un banquete espiritual." },
      { title: "Ignorar palabras complejas", text: "Pasar de largo ante términos desconocidos en lugar de detenerse a descubrir su riqueza espiritual." },
      { title: "Olvidar a Cristo en el texto", text: "Quedarse en los datos históricos sin preguntarse cómo ese pasaje testifica del Redentor." }
    ]
  },

  etapa4_practica: {
    title: "4. Practica: Juan 5:39 y 2 Nefi 4:15–16",
    badge: "Etapa 4 de 5",
    activity: {
      ref: "Juan 5:39 / 2 Nefi 4:15–16",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/5?lang=spa&id=p39#p39",
      text: "«Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí.» (Juan 5:39)\n\n«Y sobre estas grabo las cosas de mi alma, y muchas de las escrituras que están grabadas sobre las planchas de bronce. Porque mi alma se deleita en las escrituras, y mi corazón las medita, y las escribe para la instrucción y el provecho de mis hijos. He aquí, mi alma se deleita en las cosas del Señor; y mi corazón medita continuamente en las cosas que he visto y oído.» (2 Nefi 4:15–16)",
      solution: {
        tema: "El deleite supremo de escudriñar y meditar las Escrituras centradas en Cristo.",
        idea: "El verdadero propósito de escudriñar las Escrituras es deleitar el alma en el testimonio de Jesucristo y meditar Sus enseñanzas para beneficio eterno de nuestra vida y familia.",
        apoyos: "Las planchas grabadas con amor por Nefi, la meditación continua del corazón, el testimonio irrefutable del Salvador en los escritos sagrados.",
        aplicacion: "Pasar de una lectura veloz a un momento de deleite espiritual donde busque a Jesucristo como el centro de mi reflexión."
      }
    },
    checklist: [
      { id: "chk-e1", text: "¿He leído el pasaje despacio permitiendo que resuene en mi interior?" },
      { id: "chk-e2", text: "¿Identifiqué el testimonio de Jesucristo en las palabras leídas?" },
      { id: "chk-e3", text: "¿Me detuve en al menos una palabra clave para profundizar su significado?" },
      { id: "chk-e4", text: "¿Encontré una verdad eterna que pueda aplicar a mis desafíos de hoy?" },
      { id: "chk-e5", text: "¿Siento que mi alma se deleitó más que simplemente tachar una lectura?" }
    ],
    quizzes: [
      {
        id: "q-esc-1",
        question: "Según Juan 5:39, ¿cuál es el propósito supremo que encontramos cuando escudriñamos verdaderamente las Escrituras?",
        options: [
          { id: "opt-1", text: "El testimonio viviente de Jesucristo y el camino hacia la vida eterna.", isCorrect: true, feedback: "¡Exacto! Jesús declaró: 'ellas son las que dan testimonio de mí'. Cristo es el centro de todo escudriñamiento." },
          { id: "opt-2", text: "Memorizar fechas y nombres de reyes antiguos.", isCorrect: false, feedback: "Aunque hay historia, el Salvador aclaró que el centro vital de las Escrituras es Su propio testimonio redentor." },
          { id: "opt-3", text: "Aprender únicamente normas gramaticales del idioma hebreo.", isCorrect: false, feedback: "Las Escrituras son revelación sagrada para nuestra salvación eterna, no un simple ejercicio gramatical." }
        ]
      },
      {
        id: "q-esc-2",
        question: "En 2 Nefi 4:15–16, ¿qué verbos utiliza Nefi para describir su relación con las Escrituras?",
        options: [
          { id: "opt-a", text: "«Mi alma se deleita» y «mi corazón las medita».", isCorrect: true, feedback: "¡Excelente! Nefi no leía con hastío: su alma se deleitaba y su corazón meditaba continuamente." },
          { id: "opt-b", text: "«Las memorizo a toda prisa sin pensar».", isCorrect: false, feedback: "Nefi enfatiza el deleite espiritual y la meditación profunda para la instrucción de su familia." }
        ]
      }
    ]
  },

  etapa5_reflexiona: {
    title: "5. Reflexiona: De lector a escudriñador",
    badge: "Etapa 5 de 5",
    prompt: "¿Qué diferencia concreta notarás hoy si en vez de leer apresuradamente 10 versículos decides escudriñar con detenimiento 3 versículos buscando el testimonio de Jesucristo? Escribe tu compromiso personal.",
    sources: [
      { title: "Nuevo Testamento: Juan 5:39", url: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/5?lang=spa" },
      { title: "Libro de Mormón: Mosíah 1:3–7", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/1?lang=spa" },
      { title: "Libro de Mormón: 2 Nefi 4:15–16", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/4?lang=spa" }
    ]
  }
};

// ==========================================================================
// LECCIÓN 1.3: CÓMO LEER CON ATENCIÓN
// ==========================================================================
export const MASTER_LESSON_LEER_CON_ATENCION = {
  id: "leer-con-atencion",
  number: "1.3",
  levelNumber: 1,
  levelTitle: "Comienza a descubrir",
  title: "Cómo leer con atención",
  subtitle: "Técnicas sencillas para no distraerte y notar los detalles sutiles",
  duration: "15 min",
  badge: "Paso 1.3",
  objective: "Aprenderás a mantener la concentración durante tu lectura utilizando técnicas activas de observación: identificar quién habla, notar emociones y escenarios, y descubrir detalles que transforman un relato en una experiencia viva.",

  etapa1_descubre: {
    title: "1. Descubre: Desarrollar ojos atentos para la palabra",
    badge: "Etapa 1 de 5",
    summary: "¿Alguna vez leíste varios párrafos seguidos y de pronto te diste cuenta de que estabas pensando en lo que harías más tarde o en una conversación pasada?",
    content: `La falta de atención no es falta de fe: es un hábito mental pasivo muy común en nuestra época. Vivimos bombardeados por estímulos rápidos y notificaciones constantes, por lo que a nuestro cerebro le cuesta enfocar la atención profunda en un texto sagrado.

La gran noticia es que la atención es un músculo que se entrena con la práctica.

Cuando aprendes a leer con un lápiz en la mano, a visualizar lo que sucede como si estuvieras allí presente y a prestar atención a las emociones de los personajes, el texto cobra vida en tu mente y las distracciones pierden su fuerza.`
  },

  etapa2_comprende: {
    title: "2. Comprende: Las cuatro anclas de la atención activa",
    badge: "Etapa 2 de 5",
    intro: "Para mantener tu mente despierta y anclada al texto sagrado, apóyate en estas cuatro anclas prácticas de observación:",
    distinctions: [
      {
        type: "tema",
        title: "1. Visualizar el Escenario",
        question: "¿Dónde ocurre la historia?",
        format: "Imaginación guiada con reverencia",
        example: "Sentir el polvo del camino a Jerusalén, las olas del mar que azotaban el barco de Nefi o la sombra del templo en Zarahemla.",
        explanation: "Situarte en el lugar como testigo presencial despierta los sentidos y fija la memoria.",
        tagColor: "pistache"
      },
      {
        type: "idea",
        title: "2. Rastrear los Verbos",
        question: "¿Qué acciones se realizan?",
        format: "Palabras de movimiento y decisión",
        example: "«Se arrodilló», «clamó», «extendió su mano», «lloró», «se levantó».",
        explanation: "Los verbos de acción muestran el corazón de los profetas y la fidelidad con que respondieron al Señor.",
        tagColor: "matcha"
      },
      {
        type: "apoyo",
        title: "3. Identificar las Emociones",
        question: "¿Qué siente la persona?",
        format: "Sentimientos humanos y consuelo divino",
        example: "El temor de los discípulos en la barca, el dolor de Alma al recordar sus pecados o el sumo gozo de Lehi al comer del fruto.",
        explanation: "Los hombres y mujeres de las Escrituras eran personas reales con sentimientos semejantes a los tuyos.",
        tagColor: "chai"
      },
      {
        type: "aplicacion",
        title: "4. Notar los Giros Clave",
        question: "¿Cuándo cambia el relato?",
        format: "Conectores de contraste y esperanza",
        example: "«Mas he aquí», «sin embargo», «aconteció que después de esto».",
        explanation: "Estas palabras puente avisan que Dios está a punto de intervenir o que una gran lección se aproxima.",
        tagColor: "carob"
      }
    ],
    narrative: {
      title: "El fotógrafo y la gota de rocío",
      text: `Un fotógrafo novato y una fotógrafa experimentada subieron a una colina al alba. El novato apuntó su cámara al cielo, disparó cincuenta fotos a toda velocidad y dijo: 'Listo, ya tengo todo el paisaje'.

La fotógrafa veterana caminó en silencio. Se agachó cerca de una roca y descubrió una pequeña flor silvestre abriéndose paso en la grieta, con una sola gota de rocío suspendida en un pétalo que reflejaba la luz dorada del sol naciente. Ajustó su lente y tomó una sola imagen.

Esa fotografía conmovió a miles de personas. ¿La diferencia? La fotógrafa experta sabía que la verdadera grandeza y belleza se revelan en los detalles a los que pocos prestan atención. Lo mismo ocurre en las Escrituras: los tesoros espirituales más conmovedores están en los detalles que el lector distraído pasa por alto.`
    }
  },

  etapa3_observa: {
    title: "3. Observa: La compasión del Salvador en 3 Nefi 17",
    badge: "Etapa 3 de 5",
    movements: [
      { step: 1, name: "Notar el momento del anuncio", desc: "Jesús acababa de enseñar y anunció que debía partir hacia el Padre porque Su hora se acercaba." },
      { step: 2, name: "Prestar atención a las miradas y lágrimas", desc: "La multitud no dijo palabras de reproche; sus ojos lloraban y lo miraban fijamente, pidiendo en silencio que se quedase." },
      { step: 3, name: "Observar la respuesta íntima de Jesús", desc: "El Salvador no ignoró sus miradas: sus entrañas se llenaron de compasión y amor infinito." },
      { step: 4, name: "Identificar los verbos de misericordia", desc: "Jesús dijo: 'Traedlos aquí', los sanó a todos, lloró con ellos y tomó a los niños uno por uno para bendecirlos." },
      { step: 5, name: "Extraer el principio para tu vida", desc: "Jesucristo nunca es indiferente a nuestras lágrimas y deseos sinceros de cercanía espiritual." }
    ],
    scriptureCase: {
      ref: "3 Nefi 17:5–7, 21",
      link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/17?lang=spa&id=p5-p7,p21#p5",
      text: `«5 Y aconteció que cuando Jesús hubo hablado así, miró alrededor de nuevo a la multitud, y vio que estaban llorando, y lo miraban fijamente, como si le quisieran pedir que permaneciese un poco más con ellos.
6 Y les dijo: He aquí, mis entrañas están llenas de compasión por vosotros.
7 ¿Tenéis enfermos entre vosotros? Traedlos aquí. ¿Tenéis cojos, o ciegos, o lisiados, o mutilados, o leprosos, o atrofiados, o sordos, o quienes estén afligidos de cualquier manera? Traedlos aquí y yo los sanaré, porque tengo compasión de vosotros; mis entrañas están llenas de misericordia...
21 Y habiendo dicho estas palabras, lloró, y la multitud dio testimonio de ello, y tomó a sus niños pequeños, uno por uno, y los bendijo, y rogó al Padre por ellos.»`,
      breakdown: {
        tema: "La compasión personal y el ministerio sanador de Jesucristo.",
        idea: "Cuando acudimos a Jesucristo con lágrimas de fe y anhelo sincero, Sus entrañas se llenan de misericordia y extiende Su poder sanador sobre nuestras heridas más profundas.",
        apoyos: "La mirada fija de la multitud, la lista detallada de dolencias físicas y emocionales, las lágrimas de Jesús y la bendición uno por uno.",
        aplicacion: "Acercarme al Salvador con confianza en mis momentos de aflicción, sabiendo que Él se detiene a escuchar el clamor silencioso de mi corazón."
      }
    },
    tips: [
      "Lee en voz baja o susurrando para que tu oído refuerce lo que tus ojos ven.",
      "Imagina el tono de voz con que Jesús pronunció cada frase: lleno de calidez y ternura.",
      "Cuando sientas que tu mente se distrae, regresa amablemente dos versículos atrás y retoma el hilo.",
      "Anota en tu Diario una palabra que haya llamado poderosamente tu atención."
    ],
    errors: [
      { title: "Leer a velocidad excesiva", text: "Tratar los versículos como texto de lectura rápida en lugar de alimento espiritual." },
      { title: "Ver a los profetas como personajes planos", text: "Olvidar que eran seres humanos de carne y hueso que experimentaban dolor, alegría y fe." },
      { title: "No detenerse ante la conmoción del Espíritu", text: "Continuar leyendo cuando sientes paz en el corazón en vez de pausar y saborear el momento." }
    ]
  },

  etapa4_practica: {
    title: "4. Practica: 1 Nefi 8:10–12 (El relato del árbol)",
    badge: "Etapa 4 de 5",
    activity: {
      ref: "1 Nefi 8:10–12",
      link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/8?lang=spa&id=p10-p12#p10",
      text: "«10 Y aconteció que vi un árbol cuyo fruto era deseable para hacer a uno feliz.\n11 Y aconteció que me adelanté y comí de su fruto; y percibí que era de lo más dulce, más que todo lo que yo jamás había probado. Sí, y vi que su fruto era blanco, de modo que excedía a toda blancura que yo jamás hubiera visto.\n12 Y al comer de su fruto, llenó mi alma de un gozo de sumo grado; por tanto, comencé a desear que mi familia también participase de él; porque sabía que era deseable más que todo otro fruto.»",
      solution: {
        tema: "La experiencia personal con el amor redentor de Dios (la Expiación de Cristo) y el deseo inmediato de compartirlo.",
        idea: "El amor de Dios manifestado en la Expiación de Jesucristo sobrepasa toda otra experiencia terrenal, llenando el alma de tal gozo que engendra el deseo inmediato de compartirlo con nuestros seres queridos.",
        apoyos: "La dulzura incomparable del fruto, la blancura que excede toda medida, el sumo gozo del alma y el anhelo de Lehi por su familia.",
        aplicacion: "Compartir con un familiar o amigo la paz y el gozo que experimento al acercarme al Evangelio de Jesucristo."
      }
    },
    checklist: [
      { id: "chk-a1", text: "¿He notado los adjetivos y descripciones sensoriales del pasaje (dulce, blanco, gozo)?" },
      { id: "chk-a2", text: "¿Identifiqué la reacción inmediata de Lehi tras comer del fruto?" },
      { id: "chk-a3", text: "¿Puedo visualizar mentalmente el árbol y la escena descrita?" },
      { id: "chk-a4", text: "¿Comprendo el simbolismo espiritual detrás del fruto (el amor de Dios en Cristo)?" },
      { id: "chk-a5", text: "¿Mantuve mi atención enfocada durante todo el análisis del pasaje?" }
    ],
    quizzes: [
      {
        id: "q-at-1",
        question: "En 1 Nefi 8:12, ¿cuál es el detalle crucial de acción que Lehi realiza inmediatamente después de probar el fruto?",
        options: [
          { id: "opt-1", text: "Su alma se llenó de sumo gozo y comenzó a desear con anhelo que su familia también participase de él.", isCorrect: true, feedback: "¡Exacto! Notar esta consecuencia inmediata revela el corazón de un verdadero discípulo: quien prueba el amor de Dios anhela compartirlo con los suyos." },
          { id: "opt-2", text: "Guardó todo el fruto en secreto para no compartirlo con nadie.", isCorrect: false, feedback: "El texto muestra exactamente lo opuesto: el gozo del Evangelio impulsa a compartirlo de inmediato con la familia." },
          { id: "opt-3", text: "Se apresuró a buscar un barco para zarpar de inmediato.", isCorrect: false, feedback: "Ese acontecimiento ocurre mucho más adelante en el viaje por el desierto." }
        ]
      },
      {
        id: "q-at-2",
        question: "¿Por qué prestar atención a los verbos y detalles sensoriales enriquece nuestra comprensión doctrinal?",
        options: [
          { id: "opt-a", text: "Porque nos ayuda a experimentar el pasaje como una realidad viva y comprender las intenciones más profundas del autor inspirado.", isCorrect: true, feedback: "¡Excelente! Los detalles revelan el corazón, los sentimientos y las lecciones vitales que Dios quiso transmitirnos." },
          { id: "opt-b", text: "Solo sirve para preparar preguntas difíciles en juegos de trivia.", isCorrect: false, feedback: "El propósito de las Escrituras es edificar nuestra fe y transformar nuestro discipulado personal." }
        ]
      }
    ]
  },

  etapa5_reflexiona: {
    title: "5. Reflexiona: Los ojos de la fe",
    badge: "Etapa 5 de 5",
    prompt: "Al leer 3 Nefi 17 y 1 Nefi 8 con tanta atención a los detalles, ¿qué nuevo sentimiento experimentaste hacia el Salvador y Su amor por ti? Escribe tu reflexión.",
    sources: [
      { title: "Libro de Mormón: 3 Nefi 17:1–25", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/17?lang=spa" },
      { title: "Libro de Mormón: 1 Nefi 8:1–38", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/1-ne/8?lang=spa" },
      { title: "Discurso: «Deleitaos en las palabras de Cristo» (Conferencia General)", url: "https://www.churchofjesuschrist.org/study/general-conference?lang=spa" }
    ]
  }
};

// ==========================================================================
// LECCIÓN 1.4: ENCUENTRA LA IDEA PRINCIPAL (LECCIÓN MAESTRA)
// ==========================================================================
export const MASTER_LESSON_IDEA_PRINCIPAL = {
  id: "idea-principal",
  number: "1.4",
  levelNumber: 1,
  levelTitle: "Comienza a descubrir",
  title: "Encuentra la idea principal",
  subtitle: "Aprende a descubrir el corazón de lo que lees",
  duration: "25 min",
  badge: "Lección Modelo",
  objective: "Aprenderás a distinguir la verdad central que el autor inspirado quiso enseñar, sin confundirla con el tema general, con los detalles descriptivos ni con una aplicación personal apresurada.",

  etapa1_descubre: {
    title: "1. Descubre: El latido central del pasaje",
    badge: "Etapa 1 de 5",
    summary: "¿Alguna vez terminaste de leer un capítulo sintiendo que tus ojos recorrieron todas las palabras pero tu mente no retuvo nada claro?",
    content: `Eso nos pasa a todos cuando leemos con prisa o pensando únicamente en "cumplir la meta diaria". 

Sin embargo, los profetas no escribieron frases sueltas al azar: construyeron mensajes vivos y coherentes. En cada bloque de versículos hay un **latido central**, una verdad medular que sostiene a todo lo demás.

Cuando aprendes a encontrar la **idea principal**, las Escrituras dejan de ser una lista de palabras antiguas y se convierten en una conversación clara donde entiendes exactamente qué te está enseñando el Señor.`
  },

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

// Diccionario de lecciones maestras diseñadas a mano
export const BESPOKE_MASTER_LESSONS = {
  "como-comenzar": MASTER_LESSON_COMO_COMENZAR,
  "leer-vs-escudrinar": MASTER_LESSON_LEER_VS_ESCUDRINAR,
  "leer-con-atencion": MASTER_LESSON_LEER_CON_ATENCION,
  "idea-principal": MASTER_LESSON_IDEA_PRINCIPAL
};

// ==========================================================================
// GENERADOR DINÁMICO DE LECCIONES COMPLETAS (PARA TODAS LAS DEMÁS LECCIONES)
// Asegura que ninguna lección quede vacía o deshabilitada en la plataforma
// ==========================================================================
export function getLessonData(lessonId) {
  if (BESPOKE_MASTER_LESSONS[lessonId]) {
    return BESPOKE_MASTER_LESSONS[lessonId];
  }

  // Buscar metadatos en CURRICULUM_LEVELS
  let foundLesson = null;
  let foundLevel = null;

  for (const level of CURRICULUM_LEVELS) {
    const l = level.lessons.find(item => item.id === lessonId);
    if (l) {
      foundLesson = l;
      foundLevel = level;
      break;
    }
  }

  // Fallback si el ID no existe
  if (!foundLesson) {
    return MASTER_LESSON_IDEA_PRINCIPAL;
  }

  // Generar lección interactiva rica de 5 etapas para cualquier lección
  return {
    id: foundLesson.id,
    number: foundLesson.number,
    levelNumber: foundLevel.id,
    levelTitle: foundLevel.title,
    title: foundLesson.title,
    subtitle: foundLesson.desc,
    duration: foundLesson.duration || "15 min",
    badge: `Lección ${foundLesson.number}`,
    objective: `Aprenderás y aplicarás las técnicas fundamentales de «${foundLesson.title}», desarrollando autonomía espiritual, sensibilidad doctrinal y habilidades duraderas para escudriñar la palabra de Dios.`,

    etapa1_descubre: {
      title: `1. Descubre: ${foundLesson.title}`,
      badge: "Etapa 1 de 5",
      summary: `¿Por qué es crucial dominar «${foundLesson.title}» en tu viaje de estudio de las Escrituras?`,
      content: `${foundLesson.desc}\n\nEn esta etapa inicial, exploramos los principios esenciales que sostienen esta habilidad de estudio. Los profetas del Señor emplearon métodos deliberados para transmitir la verdad de generación en generación.\n\nAl comprender la raíz de esta enseñanza, descubres que las Escrituras contienen herramientas prácticas para iluminar tu vida diaria y fortalecer tu testimonio de Jesucristo.`
    },

    etapa2_comprende: {
      title: "2. Comprende: Principios fundamentales del método",
      badge: "Etapa 2 de 5",
      intro: "Examina con atención las cuatro claves doctrinales que estructuran esta lección:",
      distinctions: [
        {
          type: "tema",
          title: "1. Enfoque Claro",
          question: "¿Cuál es el propósito central?",
          format: "Comprender la intención del autor inspirado",
          example: `Aplicar ${foundLesson.title} en versículos seleccionados.`,
          explanation: "Tener un objetivo claro previene la distracción y afina el discernimiento espiritual.",
          tagColor: "pistache"
        },
        {
          type: "idea",
          title: "2. Observación Activa",
          question: "¿Qué elementos debo notar?",
          format: "Conexiones doctrinales y palabras clave",
          example: "Identificar causas, consecuencias y testimonios del Salvador.",
          explanation: "La observación activa transforma la lectura rutinaria en descubrimiento espiritual.",
          tagColor: "matcha"
        },
        {
          type: "apoyo",
          title: "3. Contexto Revelado",
          question: "¿Cómo se relaciona con la doctrina?",
          format: "Apoyos bíblicos y del Libro de Mormón",
          example: "Comparar con pasajes hermanos de las otras obras canónicas.",
          explanation: "Los profetas de distintas épocas testifican en perfecta armonía doctrinal.",
          tagColor: "chai"
        },
        {
          type: "aplicacion",
          title: "4. Respuesta en la Vida",
          question: "¿Cómo lo vivo hoy?",
          format: "Acción personal y discipulado sincero",
          example: "Elegir actuar conforme a la verdad comprendida.",
          explanation: "El conocimiento sagrado florece cuando se convierte en obras de fe.",
          tagColor: "carob"
        }
      ],
      narrative: {
        title: "La luz que disipa la niebla",
        text: `Cuando una persona camina a través de la niebla matutina, los árboles y senderos parecen confusos y distantes. Sin embargo, en cuanto el sol se eleva y proyecta su luz dorada, cada detalle del camino se vuelve nítido y seguro.

Aprender y dominar «${foundLesson.title}» tiene exactamente ese efecto en tu estudio: retira la niebla de la incertidumbre para que la palabra de Dios brille con claridad en tu entendimiento personal.`
      }
    },

    etapa3_observa: {
      title: "3. Observa: Aplicación paso a paso en las Escrituras",
      badge: "Etapa 3 de 5",
      movements: [
        { step: 1, name: "Lectura reverente del pasaje", desc: "Leer el texto completo sin interrupciones para captar el flujo armónico del mensaje." },
        { step: 2, name: "Identificación del autor y contexto", desc: "Reconocer las circunstancias históricas y espirituales en las que se pronunció la enseñanza." },
        { step: 3, name: "Extracción de la verdad central", desc: "Separar los detalles ilustrativos del principio doctrinal eterno revelado por Dios." },
        { step: 4, name: "Conexión directa con Jesucristo", desc: "Descubrir cómo este pasaje testifica del Salvador, Su Expiación o Sus promesas." },
        { step: 5, name: "Compromiso de aplicación práctica", desc: "Traducir la verdad observada en un paso concreto de discipulado para tu día a día." }
      ],
      scriptureCase: {
        ref: "2 Nefi 31:20",
        link: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31?lang=spa&id=p20#p20",
        text: `«Por tanto, debéis seguir adelante con firmeza en Cristo, teniendo un fulgor perfecto de esperanza y amor por Dios y por todos los hombres. Por tanto, si marcháis adelante, deleitándoos en la palabra de Cristo, y perseveráis hasta el fin, he aquí, así dice el Padre: Tendréis la vida eterna.»`,
        breakdown: {
          tema: `La doctrina de perseverar con firmeza en Cristo en relación a «${foundLesson.title}».`,
          idea: "Seguir adelante con esperanza inquebrantable y deleitándonos en la palabra de Cristo nos asegura la promesa divina de la vida eterna.",
          apoyos: "El fulgor de esperanza, el amor a Dios y al prójimo, el deleite en la palabra y la voz confirmadora del Padre.",
          aplicacion: "Renovar hoy mi compromiso de perseverar con fe gozosa y constancia en el estudio diario."
        }
      },
      tips: [
        "Anota tus primeras impresiones antes de que las tareas del día las borren de tu memoria.",
        "Compara este principio con experiencias que hayas vivido recientemente.",
        "Revisa las notas al pie de página para encontrar correlaciones cruzadas.",
        "Recuerda que el Espíritu Santo es quien sella la verdad en tu corazón."
      ],
      errors: [
        { title: "Apresurar la lectura", text: "Tratar de terminar rápido sin permitir que el mensaje resuene en el alma." },
        { title: "Desconectar la doctrina de Cristo", text: "Estudiar la técnica sin recordar que todo principio señala a Jesucristo." }
      ]
    },

    etapa4_practica: {
      title: "4. Practica: Ejercicio guiado y comprobación",
      badge: "Etapa 4 de 5",
      activity: {
        ref: "D. y C. 88:118",
        link: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=spa&id=p118#p118",
        text: "«Y por cuanto no todos tienen fe, buscad diligentemente y enseñaos el uno al otro palabras de sabiduría; sí, buscad palabras de sabiduría en los mejores libros; buscad conocimiento, tanto por el estudio como por la fe.»",
        solution: {
          tema: "La búsqueda diligente del conocimiento por el estudio y por la fe.",
          idea: "El Señor nos manda buscar sabiduría en las mejores fuentes sagradas, uniendo el esfuerzo intelectual con la fe espiritual para edificación mutua.",
          apoyos: "Los mejores libros, la enseñanza mutua, la combinación inseparable de estudio y fe.",
          aplicacion: "Dedicar tiempo de calidad a escudriñar fuentes inspiradas y compartir una verdad aprendida con alguien más."
        }
      },
      checklist: [
        { id: "chk-g1", text: "¿He identificado el tema central de la lección?" },
        { id: "chk-g2", text: "¿Puedo expresar la enseñanza principal en mis propias palabras?" },
        { id: "chk-g3", text: "¿Reconozco cómo este principio me acerca a Jesucristo?" },
        { id: "chk-g4", text: "¿Identifiqué una acción concreta para aplicar lo aprendido?" },
        { id: "chk-g5", text: "¿Completé las actividades de autoevaluación con honestidad?" }
      ],
      quizzes: [
        {
          id: `q-${foundLesson.id}-1`,
          question: `En relación con «${foundLesson.title}», ¿cuál es el enfoque metodológico más eficaz?`,
          options: [
            { id: "opt-1", text: "Unir el esfuerzo consciente de estudio con la oración y la fe en Jesucristo.", isCorrect: true, feedback: "¡Exacto! El Señor nos manda buscar conocimiento 'tanto por el estudio como por la fe'." },
            { id: "opt-2", text: "Depender únicamente de opiniones no verificadas sin consultar las Escrituras.", isCorrect: false, feedback: "Debemos buscar en 'los mejores libros' e inspirarnos en la palabra oficial revelada." }
          ]
        },
        {
          id: `q-${foundLesson.id}-2`,
          question: "¿Cuál es el propósito final de todo estudio profundo en la plataforma ENCUENTRA?",
          options: [
            { id: "opt-a", text: "Conocer a Jesucristo, fortalecer nuestro discipulado y vivir Su doctrina con alegría.", isCorrect: true, feedback: "¡Brillante! Jesucristo es el centro de todo estudio y aprendizaje." },
            { id: "opt-b", text: "Solo acumular información técnica sin cambiar nuestra forma de actuar.", isCorrect: false, feedback: "El Evangelio es para ser vivido y sentido, no únicamente analizado intelectualmente." }
          ]
        }
      ]
    },

    etapa5_reflexiona: {
      title: "5. Reflexiona: Escribe en tu Diario Personal",
      badge: "Etapa 5 de 5",
      prompt: `¿Cómo te ayuda «${foundLesson.title}» a comprender con mayor claridad la palabra de Dios? Escribe una reflexión sobre un versículo en el que aplicarás este principio hoy.`,
      sources: [
        { title: "Doctrina y Convenios 88:118", url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament/dc/88?lang=spa" },
        { title: "Libro de Mormón: 2 Nefi 31:20", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31?lang=spa" },
        { title: "Biblioteca del Evangelio: Temas de las Escrituras", url: "https://www.churchofjesuschrist.org/study?lang=spa" }
      ]
    }
  };
}
