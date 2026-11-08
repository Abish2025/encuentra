# ENCUENTRA — Plataforma Educativa e Interactiva de Estudio de las Escrituras

> **«Aprende. Escudriña. Comprende. Vive.»**  
> *Un espacio para descubrir las Escrituras.*

---

## 1. Misión y Propósito

**ENCUENTRA** es una plataforma web unificada, moderna y pedagógica diseñada para enseñar a los jóvenes a estudiar, escudriñar, analizar y comprender las sagradas Escrituras por sí mismos.

Fundamentada en las enseñanzas y fuentes oficiales de **La Iglesia de Jesucristo de los Santos de los Últimos Días** (`churchofjesuschrist.org`), la plataforma se enfoca en desarrollar habilidades de pensamiento crítico, comprensión contextual, observación literaria y aplicación espiritual, teniendo siempre a **Jesucristo como el centro supremo** de todo estudio.

---

## 2. Auditoría e Integración de las Tres Versiones de Referencia

La plataforma definitiva integra de forma armónica lo mejor de las tres versiones de origen:

1. **Versión 1 — Rigor Pedagógico y Lección Modelo**:
   - Se conserva y expande la lección completa **«Encuentra la idea principal»** con sus **19 componentes obligatorios**:
     - Las cuatro distinciones esenciales: **Tema**, **Idea principal**, **Detalles de apoyo** y **Aplicación**.
     - El método secuencial de los **cinco movimientos** con demostración interactiva paso a paso.
     - El relato narrativo original: *«La lámpara del camino»*.
     - El análisis exhaustivo de **Helamán 3:27–30**.
     - La actividad práctica con **Alma 32:21**.
     - Ejercicios interactivos con **retroalimentación explicativa** formativa (no solo «correcto/incorrecto»).
     - Lista de comprobación (*checklist*) interactiva guardada en el almacenamiento local.
     - Reflexión personal conectada directamente con el Diario.
2. **Versión 2 (Lovable) — Arquitectura y Módulos de Plataforma**:
   - Estructura unificada en módulos interconectados: Inicio, Academia, Explorador, Diccionario, Personajes y Recursos.
3. **Versión 3 (Bolt) — Experiencia de Usuario e Interacciones**:
   - Diseño adaptable (*responsive*) para computadoras y dispositivos móviles.
   - Componentes consistentes: tarjetas, modales, pestañas, buscador en tiempo real, menú desplegable y notificaciones flotantes (*toasts*).

---

## 3. Paleta de Colores Oficial

Se implementó con estricta rigurosidad la paleta definitiva establecida para la identidad visual de ENCUENTRA:

| Nombre | Código Hex | Uso en la Plataforma |
| :--- | :--- | :--- |
| **Matcha** | `#809671` | Color principal, botones primarios, badges de progreso activo y acentos destacados. |
| **Almond** | `#E5E0D8` | Fondos de página, contenedores suaves y superficies secundarias. |
| **Pistache** | `#B3B792` | Tarjetas complementarias, bordes sutiles y estados de interacción. |
| **Chai** | `#D2AB80` | Acentos cálidos, citas destacadas y elementos interactivos. |
| **Carob** | `#725C3A` | Tipografía de títulos h1–h4, textos de alto contraste e iconografía. |
| **Vanilla** | `#E5D2B8` | Fondos de tarjetas elevadas, secciones destacadas y navegación secundaria. |

---

## 4. Módulos y Funcionalidades Reales

Toda la plataforma opera como una **Single Page Application (SPA)** modular en JavaScript nativo moderno (ES Modules), sin dependencias externas complejas ni pasos obligatorios de compilación:

1. **Inicio (`#inicio`)**:
   - Presentación institucional con botones de acción rápida.
   - Tarjeta de *Escritura Destacada* (Helamán 3:29–30) con reflexión y enlace oficial.
   - *¿Qué quieres hacer hoy?*: 6 accesos directos intuitivos.
   - *Recomendación de Aprendizaje*: Tarjeta hacia la lección modelo.
   - *Propósito de ENCUENTRA*: Tres columnas de valor metodológico.
2. **Aprende a Estudiar / Academia (`#academia`)**:
   - Currículo completo de **4 Niveles** con **37 lecciones**:
     - *Nivel 1 — Fundamentos* (8 lecciones)
     - *Nivel 2 — Comprensión y contexto* (10 lecciones)
     - *Nivel 3 — Análisis de las Escrituras* (11 lecciones)
     - *Nivel 4 — Profundización* (8 lecciones)
   - Filtro de navegación interactivo por nivel con estados de lección completada.
3. **Lección Maestra (`#leccion/idea-principal`)**:
   - Los 19 componentes pedagógicos completos.
   - Stepper interactivo de los 5 movimientos.
   - Checkboxes de la lista de comprobación con guardado automático.
   - Cuestionario interactivo con explicaciones detalladas para cada alternativa.
   - Formulario de reflexión con guardado en 1 clic en el Diario Personal.
4. **Explorador de Escrituras (`#explorador`)**:
   - Las 5 obras canónicas: *Libro de Mormón*, *Nuevo Testamento*, *Antiguo Testamento*, *Doctrina y Convenios* y *Perla de Gran Precio*.
   - Los **Tres Momentos de Estudio**:
     - **ANTES**: Contexto histórico, autor, destinatario y preguntas previas.
     - **DURANTE**: Observación activa, conectores lógicos, repeticiones y vocabulario.
     - **DESPUÉS**: Conexión con Jesucristo, principio doctrinal y resolución de vida.
   - Catálogo de libros con resumen por autor y capítulos.
5. **Guía Interactiva de Estudio (`#guia`)**:
   - Asistente guiado de 5 pasos secuenciales para analizar cualquier pasaje bíblico o canónico.
   - Preguntas inductivas, pistas pedagógicas y sincronización automática con el Diario.
6. **Diccionario Doctrinal (`#diccionario`)**:
   - Términos organizados en categorías (*Doctrinal*, *Histórico*, *Geográfico*, *Cultural*, *Literario*).
   - Buscador en tiempo real por texto o definición.
   - Filtro alfabético rápido (A–Z).
   - Marcador de **Favoritos** persistente.
   - Modal detallado con definición sencilla, significado contextual, etimología, referencias canónicas con enlace y fuentes oficiales.
7. **Personajes de las Escrituras (`#personajes`)**:
   - Fichas biográficas de Nefi, Alma hijo, Moroni, Pedro, Rut, Abinadí, etc.
   - Datos de época, decisiones trascendentales, enseñanzas y testimonio sobre Jesucristo.
8. **Biblioteca de Recursos (`#recursos`)**:
   - Enlaces oficiales verificados a videos del Libro de Mormón y Biblia, manuales de Seminario e Instituto, *Ven, sígueme*, *Para la Fortaleza de la Juventud* y discursos de Conferencias Generales.
9. **Diario Personal de Estudio (`#diario`)**:
   - **Funcionalidad real y privada**: creación, edición y eliminación de notas.
   - Clasificación por categorías (*Reflexión*, *Idea Principal*, *Descubrimiento*, *Pregunta*).
   - Sistema de etiquetas (*tags*) y búsqueda instantánea.
   - **Exportación en formatos TXT y JSON** para respaldo local.
10. **Mi Progreso (`#progreso`)**:
    - Estadísticas reales del estudiante: lecciones completadas, notas en diario, ejercicios respondidos y favoritos guardados.
    - Barra de avance general y desglose por niveles.
    - Insignias de competencias desbloqueables.
    - Opción de borrado seguro y completo de datos para garantizar la privacidad del menor.

---

## 5. Ejecución y Despliegue

La plataforma fue diseñada con una arquitectura ultra-limpia y portable:

### Ejecución Local Inmediata
Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox o Safari). No requiere servidores locales ni instalaciones adicionales.

### Despliegue en la Nube
El proyecto está 100% listo para ser desplegado en cualquier plataforma estática con solo arrastrar la carpeta o vincular un repositorio de Git:
- **Netlify**: Arrastrar la carpeta o conectar el repositorio (Build command: ninguno; Publish directory: `./`).
- **Vercel**: `vercel deploy`.
- **GitHub Pages**: Activar GitHub Pages apuntando a la rama principal.

---

## 6. Aviso de Independencia

> **Aviso de Independencia:**  
> ENCUENTRA es un proyecto educativo independiente y no está afiliado ni patrocinado por La Iglesia de Jesucristo de los Santos de los Últimos Días. Todas las referencias y enlaces dirigen a la biblioteca oficial de la Iglesia (`churchofjesuschrist.org`) con fines didácticos y de estudio reverente.
