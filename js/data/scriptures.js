// ==========================================================================
// ENCUENTRA — EXPLORADOR DE ESCRITURAS (5 OBRAS CANÓNICAS Y LOS 3 MOMENTOS)
// ==========================================================================

export const STANDARD_WORKS = [
  {
    id: "bofm",
    name: "Libro de Mormón",
    shortName: "Libro de Mormón",
    subtitle: "Otro Testamento de Jesucristo",
    desc: "Un registro sagrado de los antiguos habitantes de las Américas, que testifica que Jesús es el Cristo, el Dios Eterno.",
    color: "matcha",
    url: "https://www.churchofjesuschrist.org/study/scriptures/bofm?lang=spa",
    books: [
      { id: "1-ne", name: "1 Nefi", chapters: 22, author: "Nefi, hijo de Lehi", summary: "La salida de Jerusalén, las planchas de bronce, el árbol de la vida y el viaje a la tierra prometida." },
      { id: "2-ne", name: "2 Nefi", chapters: 33, author: "Nefi", summary: "Las profecías de Lehi, el albedrío moral, la doctrina de Cristo y las palabras de Isaías." },
      { id: "jacob", name: "Jacob", chapters: 7, author: "Jacob", summary: "La alegoría del olivo cultivado de Zenós, la fe frente a Sherem y la consagración." },
      { id: "enos", name: "Enós", chapters: 1, author: "Enós", summary: "La lucha ferviente en oración en el bosque, el perdón de los pecados y el deseo de bendecir a otros." },
      { id: "mosiah", name: "Mosíah", chapters: 29, author: "Varios profetas / Mormón", summary: "El sermón inolvidable del rey Benjamín, el testimonio de Abinadí y los convenios en las Aguas de Mormón." },
      { id: "alma", name: "Alma", chapters: 63, author: "Alma hijo / Helamán", summary: "El ministerio a los zoramitas, el sermón de la fe, las misiones a los lamanitas y las guerras de defensa." },
      { id: "hel", name: "Helamán", chapters: 16, author: "Helamán y sus hijos", summary: "Gadiantón, Nefi en la torre y la profecía de Samuel el Lamanita sobre el nacimiento y muerte de Cristo." },
      { id: "3-ne", name: "3 Nefi", chapters: 30, author: "Nefi / Mormón", summary: "La destrucción de los inicuos y la gloriosa visita del Salvador Jesucristo resucitado en la tierra de Abundancia." },
      { id: "ether", name: "Éter", chapters: 15, author: "Moroni (compendio)", summary: "La historia del pueblo jaredita, el hermano de Jared, la fe que rasga el velo y la tragedia de la guerra civil." },
      { id: "moro", name: "Moroni", chapters: 10, author: "Moroni", summary: "Las ordenanzas de la Iglesia, los dones del Espíritu y la promesa final de la veracidad del Libro de Mormón." }
    ]
  },
  {
    id: "nt",
    name: "Nuevo Testamento",
    shortName: "Nuevo Testamento",
    subtitle: "El ministerio terrenal del Salvador y Su Iglesia primitiva",
    desc: "Los cuatro evangelios, las epístolas apostólicas y el libro de Apocalipsis, que testifican de la vida, Expiación y Resurrección del Señor.",
    color: "chai",
    url: "https://www.churchofjesuschrist.org/study/scriptures/nt?lang=spa",
    books: [
      { id: "matt", name: "Mateo", chapters: 28, author: "Mateo (Leví)", summary: "Jesús como el Mesías prometido en cumplimiento de las profecías del Antiguo Testamento." },
      { id: "mark", name: "Marcos", chapters: 16, author: "Juan Marcos", summary: "Un relato dinámico y lleno de acción sobre el poder soberano y compasivo del Hijo de Dios." },
      { id: "luke", name: "Lucas", chapters: 24, author: "Lucas, el médico", summary: "El Evangelio de la compasión universal, los marginados, las mujeres y las más hermosas parábolas." },
      { id: "john", name: "Juan", chapters: 21, author: "Juan el Amado", summary: "El testimonio profundo de la divinidad de Jesucristo como el Verbo viviente, la Luz y el Pan de Vida." },
      { id: "acts", name: "Hechos", chapters: 28, author: "Lucas", summary: "El derramamiento del Espíritu Santo en Pentecostés y la expansión apostólica del Evangelio." },
      { id: "rom", name: "Romanos", chapters: 16, author: "Pablo", summary: "La justificación por medio de la fe en Jesucristo, la gracia divina y la vida en el Espíritu." },
      { id: "1-cor", name: "1 Corintios", chapters: 16, author: "Pablo", summary: "La unidad de la Iglesia, los dones espirituales, la caridad perfecta y la realidad de la Resurrección." },
      { id: "james", name: "Santiago", chapters: 5, author: "Santiago", summary: "La fe viva demostrada por las obras, el control de la lengua y la oración con fe." }
    ]
  },
  {
    id: "ot",
    name: "Antiguo Testamento",
    shortName: "Antiguo Testamento",
    subtitle: "El pacto de Jehová con Su pueblo desde la Creación",
    desc: "Los escritos de la Ley, los Profetas y los Escritos poéticos que prepararon el camino para la venida del Mesías prometido.",
    color: "carob",
    url: "https://www.churchofjesuschrist.org/study/scriptures/ot?lang=spa",
    books: [
      { id: "gen", name: "Génesis", chapters: 50, author: "Moisés", summary: "La Creación, la Caída, el convenio abrahámico y los patriarcas Isaac, Jacob y José." },
      { id: "exod", name: "Éxodo", chapters: 40, author: "Moisés", summary: "La liberación de Egipto, la Pascua, la entrega de la ley en el Sinaí y el tabernáculo de reunión." },
      { id: "ps", name: "Salmos", chapters: 150, author: "David y otros", summary: "Oraciones, cánticos de alabanza, lamentos del alma y profecías mesiánicas conmovedoras." },
      { id: "prov", name: "Proverbios", chapters: 31, author: "Salomón y otros", summary: "Máximas de sabiduría práctica: el temor reverente al Señor como principio del saber." },
      { id: "isa", name: "Isaías", chapters: 66, author: "Isaías", summary: "El gran profeta mesiánico: el Siervo sufriente, la reunión de Israel en los últimos días y la gloria de Sion." }
    ]
  },
  {
    id: "dc",
    name: "Doctrina y Convenios",
    shortName: "Doctrina y Convenios",
    subtitle: "Revelaciones modernas para la Restauración del Evangelio",
    desc: "Revelaciones dadas principalmente al profeta José Smith para el establecimiento del reino de Dios en la dispensación del cumplimiento de los tiempos.",
    color: "pistache",
    url: "https://www.churchofjesuschrist.org/study/scriptures/dc-testament?lang=spa",
    books: [
      { id: "dc-1", name: "Sección 1", chapters: 1, author: "El Señor Jesucristo", summary: "El prefacio del Señor a Su libro de mandamientos: una voz de amonestación a todo pueblo." },
      { id: "dc-4", name: "Sección 4", chapters: 1, author: "El Señor a José Smith, padre", summary: "La obra maravillosa que está a punto de salir a luz y las virtudes del servidor de Dios." },
      { id: "dc-8", name: "Sección 8", chapters: 1, author: "El Señor a Oliver Cowdery", summary: "El espíritu de revelación: hablar a la mente y al corazón por medio del Espíritu Santo." },
      { id: "dc-19", name: "Sección 19", chapters: 1, author: "El Señor a Martin Harris", summary: "El testimonio personal del Salvador sobre Su propio padecimiento y agonía expiatoria en Getsemaní." },
      { id: "dc-76", name: "Sección 76", chapters: 1, author: "José Smith y Sidney Rigdon", summary: "La visión de los grados de gloria celestial, terrestre y telestial, y el testimonio de que Cristo vive." },
      { id: "dc-88", name: "Sección 88", chapters: 1, author: "El Señor Jesucristo", summary: "El mensaje de paz del olivo: la luz de Cristo que llena la inmensidad del espacio y la escuela de profetas." },
      { id: "dc-121", name: "Sección 121", chapters: 1, author: "José Smith en la cárcel de Liberty", summary: "La oración angustiada, el consuelo supremo de Dios y los principios eternos del sacerdocio." }
    ]
  },
  {
    id: "pgp",
    name: "Perla de Gran Precio",
    shortName: "Perla de Gran Precio",
    subtitle: "Selección de revelaciones, traducciones y narraciones inspiradas",
    desc: "Un valioso tesoro de verdades doctrinales concernientes a la vida preterrenal, la Creación, la Restauración y los Artículos de Fe.",
    color: "vanilla",
    url: "https://www.churchofjesuschrist.org/study/scriptures/pgp?lang=spa",
    books: [
      { id: "moses", name: "Moisés", chapters: 8, author: "Moisés (revelado a José Smith)", summary: "La visión de la grandeza de Dios, la preexistencia, la caída de Lucifer y la obra de Enoc." },
      { id: "abr", name: "Abraham", chapters: 5, author: "Abraham", summary: "La liberación de los sacerdotes de Elkenah, el convenio divino, astronomía y el concilio de los cielos." },
      { id: "js-h", name: "José Smith—Historia", chapters: 1, author: "José Smith", summary: "La búsqueda de la verdad, la Primera Visión en la Arboleda Sagrada y las visitas del ángel Moroni." },
      { id: "a-of-f", name: "Artículos de Fe", chapters: 1, author: "José Smith", summary: "Trece declaraciones concisas y autorizadas sobre las creencias fundamentales de la Iglesia." }
    ]
  }
];

// Modelos pedagógicos con los 3 Momentos de Estudio (Antes, Durante, Después)
export const SCRIPTURE_STUDY_GUIDES = {
  "2-ne-31": {
    reference: "2 Nefi 31:19–20",
    title: "Perseverar hasta el fin en la senda estrecha y angosta",
    standardWork: "Libro de Mormón",
    officialUrl: "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31?lang=spa&id=p19-p20#p19",
    passageText: "«19 Y ahora bien, amados hermanos míos, después de haber entrado en esta estrecha y angosta senda, quisiera preguntar si ya quedó hecho todo. He aquí, os digo que no; porque no habéis llegado hasta aquí sino por la palabra de Cristo, con fe inquebrantable en él, confiando íntegramente en los méritos de aquel que es poderoso para salvar. 20 Por tanto, debéis seguir adelante con firmeza en Cristo, teniendo un fulgor perfecto de esperanza y amor por Dios y por todos los hombres. Por tanto, si marcháis adelante, deleitándoos en la palabra de Cristo, y perseveráis hasta el fin, he aquí, así dice el Padre: Tendréis la vida eterna».",
    
    // MOMENTO 1: ANTES
    antes: {
      preguntas: [
        "¿Quién está hablando al final de su vida terrenal y qué urgencia siente por sus hermanos?",
        "¿Qué acontecimientos y visiones previas dieron origen a su comprensión de la senda?",
        "¿Qué preguntas traigo hoy en mi corazón sobre perseverar cuando el camino parece difícil?"
      ],
      contexto: "Nefi está cerrando su segundo libro, sabiendo que pronto morirá. No quiere dejar a su pueblo con dudas sobre cómo aplicar la Expiación de Cristo. Ha explicado el bautismo de Jesús y ahora responde a la pregunta de qué hacer después de ser bautizado.",
      autor: "Nefi, anciano profeta y líder de su pueblo.",
      audiencia: "Sus hermanos, su posteridad y todos los lectores gentiles y de la casa de Israel en los últimos días."
    },

    // MOMENTO 2: DURANTE
    durante: {
      observaciones: [
        "Nota la frase de apertura: «quisiera preguntar si ya quedó hecho todo». Es una pregunta retórica que derriba la complacencia espiritual.",
        "Observa la repetición del conector enfático: «Por tanto... Por tanto...». Marca las consecuencias lógicas de la doctrina.",
        "Fíjate en las palabras de acción: «seguir adelante», «firmes en Cristo», «deleitándoos», «perseveráis».",
        "Contrasta: ¿En los méritos de quién confiamos? No en los propios, sino 'íntegramente en los méritos de aquel que es poderoso para salvar'."
      ],
      palabrasClave: [
        { word: "Confiando íntegramente", def: "Sin reservas humanas; apoyándonos por completo en el Salvador." },
        { word: "Fulgor perfecto de esperanza", def: "Una luz interior inextinguible nacida de la certeza del amor del Padre." },
        { word: "Deleitándoos", def: "No solo probar o comer apresuradamente, sino saborear y gozar la palabra de Cristo." }
      ]
    },

    // MOMENTO 3: DESPUÉS
    después: {
      cristoCentrico: "Jesucristo no es solo quien abre la puerta al inicio del camino; Él es el fundamento continuo sobre el cual nos mantenemos firmes y cuyos méritos nos salvan de principio a fin.",
      principioDoctrinal: "Entrar en el convenio es el comienzo; la vida eterna requiere avanzar continuamente con fe en Cristo, esperanza radiante, caridad y amor por Su palabra hasta el final de nuestros días.",
      aplicacionPersonal: "¿Cómo me estoy deleitando hoy en las Escrituras? ¿Marcho con firmeza o siento que solo estoy cumpliendo un hábito sin fulgor de esperanza? Hoy oraré pidiendo que el Señor renueve mi gozo al estudiar Su palabra."
    }
  },

  "mosiah-2-17": {
    reference: "Mosíah 2:17",
    title: "El servicio a nuestro prójimo como servicio a Dios",
    standardWork: "Libro de Mormón",
    officialUrl: "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=spa&id=p17#p17",
    passageText: "«Y he aquí, os digo estas cosas para que aprendáis sabiduría; para que sepáis que cuando os halláis en el servicio de vuestros semejantes, solo estáis en el servicio de vuestro Dios».",
    
    antes: {
      preguntas: [
        "¿Quién es el rey Benjamín y por qué ha convocado a todo su pueblo alrededor del templo?",
        "¿Qué tipo de líder era él en comparación con los reyes de las naciones vecinas?",
        "¿Qué significa para mí servir a los demás cuando estoy cansado o desanimado?"
      ],
      contexto: "El anciano rey Benjamín sabe que se acerca su muerte y reúne a su pueblo para proclamar a su hijo Mosíah como nuevo rey y, sobre todo, para darles un nombre: el nombre de Cristo. Habla desde una torre para que todos puedan oírlo.",
      autor: "El rey Benjamín.",
      audiencia: "Todo el pueblo nefita y de Zarahemla congregado en tiendas familiares hacia el templo."
    },

    durante: {
      observaciones: [
        "El propósito explícito: «para que aprendáis sabiduría». El servicio no es solo una cortesía social, es sabiduría celestial.",
        "La equivalencia directa: servir a los semejantes = servir a Dios. No hay intermediarios que resten valor al acto de bondad cotidiana.",
        "El contexto del versículo anterior: Benjamín mismo trabajó con sus propias manos para no ser una carga económica para ellos."
      ],
      palabrasClave: [
        { word: "Sabiduría", def: "La perspectiva divina aplicada a la conducta humana diaria." },
        { word: "Semejantes", def: "Todo hermano o hermana terrenal, sin importar su condición social o pasado." }
      ]
    },

    después: {
      cristoCentrico: "Jesucristo fue el Rey de reyes que vino no a ser servido, sino a servir. El servicio puro es la mayor imitación de Su carácter redentor.",
      principioDoctrinal: "Servir con sinceridad a nuestros hermanos humanos es la forma tangible en que demostramos y ofrecemos nuestro amor y gratitud a Dios.",
      aplicacionPersonal: "Buscaré una acción concreta hoy —un mensaje de apoyo, una ayuda silenciosa en casa o un gesto amable— entendiendo que al hacerlo estoy sirviendo al Señor."
    }
  },

  "moroni-10-4": {
    reference: "Moroni 10:4–5",
    title: "La promesa de la verdad mediante el Espíritu Santo",
    standardWork: "Libro de Mormón",
    officialUrl: "https://www.churchofjesuschrist.org/study/scriptures/bofm/moro/10?lang=spa&id=p4-p5#p4",
    passageText: "«4 Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios, el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo; 5 y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas».",
    
    antes: {
      preguntas: [
        "¿Cuál es la situación personal de Moroni al escribir estas últimas palabras en las planchas?",
        "¿Por qué no exige una fe ciega, sino que invita a consultar directamente a Dios?",
        "¿Cómo ha sido mi propia experiencia al buscar revelación personal sobre el Libro de Mormón?"
      ],
      contexto: "Moroni está completamente solo; su padre Mormón y todo su pueblo han sido destruidos en la batalla de Cumorah. Lleva décadas vagando para preservar el registro sagrado antes de enterrarlo en la tierra.",
      autor: "Moroni, el último profeta nefita.",
      audiencia: "Los futuros lectores de los últimos días de todas las naciones."
    },

    durante: {
      observaciones: [
        "Las tres condiciones inseparables para recibir la revelación: 'corazón sincero', 'verdadera intención' y 'fe en Cristo'.",
        "El canal divino: la manifestación viene por el 'poder del Espíritu Santo', no por mera deducción lógica.",
        "La universalidad de la promesa en el versículo 5: se extiende a 'la verdad de todas las cosas'."
      ],
      palabrasClave: [
        { word: "Verdadera intención", def: "La disposición resuelta de actuar conforme a la respuesta que Dios conceda." },
        { word: "Corazón sincero", def: "Sin engaño, con humildad y hambre real de verdad divina." }
      ]
    },

    después: {
      cristoCentrico: "La oración se eleva al Padre en el nombre de Cristo; el Salvador es la garantía del pacto que conecta el ruego del hombre con la voz del Espíritu Santo.",
      principioDoctrinal: "Dios revela la verdad espiritual directamente a quien la busca con sinceridad, fe en Jesucristo y la firme determinación de obedecer.",
      aplicacionPersonal: "Cuando tenga dudas o enfrente decisiones importantes, aplicaré este modelo: estudiar, meditar la misericordia de Dios y preguntar con fe resuelta en oración."
    }
  }
};
