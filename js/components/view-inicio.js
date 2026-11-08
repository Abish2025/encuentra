// ==========================================================================
// ENCUENTRA — VISTA: INICIO
// ==========================================================================

export function renderInicioView() {
  return `
    <!-- 2. Presentación Principal (Hero) -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-tagline-pill">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>Aprende · Escudriña · Comprende · Vive</span>
            </div>
            <h1 class="hero-title">
              Un espacio para <span class="highlight-text">descubrir</span> las Escrituras
            </h1>
            <p class="hero-description">
              Desarrolla habilidades reales para estudiar, analizar y comprender la palabra de Dios por ti mismo, mediante explicaciones claras, métodos guiados y actividades interactivas fundamentadas en el Evangelio de Jesucristo.
            </p>
            <div class="hero-cta-group">
              <a href="#academia" class="btn btn-lg btn-primary">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
                <span>Comenzar a aprender</span>
              </a>
              <a href="#explorador" class="btn btn-lg btn-secondary">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span>Explorar las Escrituras</span>
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-banner-visual">
              <div class="badge badge-matcha" style="margin-bottom: 1rem;">Método de Estudio</div>
              <p class="hero-banner-quote">
                «Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí».
              </p>
              <div class="hero-banner-source">Juan 5:39 · Jesucristo</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Escritura Destacada -->
    <section class="section-featured-scripture">
      <div class="container">
        <div class="featured-scripture-card">
          <div class="featured-main">
            <div class="featured-label">Escritura Destacada</div>
            <blockquote class="featured-verse">
              «Sí, vemos que quienquiera que desee puede asirse a la palabra de Dios, que es viva y poderosa, que partirá por medio toda la astucia, y los lazos y trampas del diablo... y depositará su alma inmortal a la diestra de Dios».
            </blockquote>
            <div class="featured-ref">
              <span>Helamán 3:29–30</span> · 
              <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/3?lang=spa&id=p29-p30#p29" target="_blank" rel="noopener noreferrer" class="scripture-link">
                Ver en churchofjesuschrist.org
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          <div class="featured-reflection">
            <h4 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--c-carob);">Reflexión de Estudio:</h4>
            <p style="margin: 0; font-size: 0.92rem; line-height: 1.55;">
              La palabra de Dios no es solo información para acumular: es un escudo activo que corta de raíz las confusiones morales y nos guía con certeza en medio de la niebla del mundo moderno.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. ¿Qué quieres hacer hoy? -->
    <section class="section-quick-actions">
      <div class="container">
        <div class="section-header">
          <h2>¿Qué quieres hacer hoy?</h2>
          <p class="section-subtitle">Selecciona una de las herramientas de ENCUENTRA para comenzar tu estudio de hoy.</p>
        </div>

        <div class="quick-actions-grid">
          <!-- 1. Aprender a estudiar -->
          <a href="#academia" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
            </div>
            <h3 class="action-card-title">Aprender a estudiar</h3>
            <p class="action-card-desc">Cursos progresivos organizados en 4 niveles para dominar técnicas de lectura atenta, análisis y exégesis.</p>
            <span class="action-card-link">Ir a la Academia &rarr;</span>
          </a>

          <!-- 2. Explorar las Escrituras -->
          <a href="#explorador" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3 class="action-card-title">Explorar las Escrituras</h3>
            <p class="action-card-desc">Navega por los cinco libros canónicos dividiendo tu estudio en tres momentos: Antes, Durante y Después.</p>
            <span class="action-card-link">Abrir Explorador &rarr;</span>
          </a>

          <!-- 3. Practicar en la Guía -->
          <a href="#guia" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3 class="action-card-title">Guía de Estudio</h3>
            <p class="action-card-desc">Un asistente paso a paso con preguntas progresivas para analizar cualquier pasaje bíblico o del Libro de Mormón.</p>
            <span class="action-card-link">Comenzar Guía &rarr;</span>
          </a>

          <!-- 4. Diccionario -->
          <a href="#diccionario" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h3 class="action-card-title">Consultar Diccionario</h3>
            <p class="action-card-desc">Términos bíblicos, históricos, geográficos y doctrinales con etimología, contexto y referencias oficiales.</p>
            <span class="action-card-link">Buscar Términos &rarr;</span>
          </a>

          <!-- 5. Personajes -->
          <a href="#personajes" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 class="action-card-title">Conocer Personajes</h3>
            <p class="action-card-desc">Fichas educativas de hombres y mujeres de fe: su época, decisiones cruciales y enseñanzas para nuestra vida.</p>
            <span class="action-card-link">Ver Personajes &rarr;</span>
          </a>

          <!-- 6. Recursos -->
          <a href="#recursos" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
            </div>
            <h3 class="action-card-title">Biblioteca de Recursos</h3>
            <p class="action-card-desc">Videos oficiales, manuales de Seminario e Instituto, Ven, sígueme y discursos de Conferencias Generales.</p>
            <span class="action-card-link">Explorar Recursos &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 5. Recomendación de Aprendizaje -->
    <section class="section-recommended-lesson">
      <div class="container">
        <div class="recommended-box">
          <div class="recommended-info">
            <span class="badge badge-matcha">Lección Recomendada · Nivel 1</span>
            <h3 style="font-size: 1.6rem; margin: 0.5rem 0 0.75rem; color: var(--c-carob);">
              Encuentra la idea principal
            </h3>
            <p style="color: var(--c-text-secondary); line-height: 1.55; margin-bottom: 1.25rem;">
              Aprende las cuatro distinciones fundamentales (tema, idea principal, detalles de apoyo y aplicación) y el método de los 5 movimientos con ejemplos de Helamán 3 y Alma 32.
            </p>
            <a href="#leccion/idea-principal" class="btn btn-primary">
              <span>Iniciar lección (25 min)</span>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          <div class="recommended-card-preview" style="background: var(--c-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--c-pistache);">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--c-matcha-dark); text-transform: uppercase;">Modelo pedagógico</div>
            <ul style="list-style: none; margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem; color: var(--c-text-secondary);">
              <li>✓ Cuatro distinciones esenciales</li>
              <li>✓ Método de 5 movimientos</li>
              <li>✓ Relato: «La lámpara del camino»</li>
              <li>✓ Ejercicios con retroalimentación</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Propósito de ENCUENTRA -->
    <section class="section-purpose">
      <div class="container">
        <div class="section-header">
          <h2>Por qué aprender a estudiar las Escrituras</h2>
          <p class="section-subtitle">ENCUENTRA no busca darte respuestas preparadas, sino enseñarte a descubrir la voz del Señor por ti mismo.</p>
        </div>

        <div class="purpose-grid">
          <div class="purpose-item">
            <h3>1. Escudriñar no es solo hojear</h3>
            <p>
              Leer rápido para cumplir una meta puede dejarnos vacíos. Escudriñar significa cavar profundo, observar detalles, formular preguntas y permitir que la verdad eche raíces en el corazón.
            </p>
          </div>
          <div class="purpose-item">
            <h3>2. Comprender antes de aplicar</h3>
            <p>
              Para saber qué nos pide el Señor hoy, primero debemos comprender con reverencia qué enseñó el autor inspirado a su pueblo original en su contexto histórico y cultural.
            </p>
          </div>
          <div class="purpose-item">
            <h3>3. Centrado en Jesucristo</h3>
            <p>
              Todas las santas Escrituras testifican de Jesucristo. Cada símbolo, historia, profecía y convenio tiene como fin acercarnos al Redentor y fortalecer nuestra fe en Él.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
