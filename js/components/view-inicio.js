// ==========================================================================
// ENCUENTRA — VISTA: INICIO (REDISEÑADA PARA JÓVENES)
// ==========================================================================

import { getSvgIcon } from "../icons.js";

export function renderInicioView() {
  return `
    <!-- Presentación Principal (Hero) -->
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
              Aprende a estudiar la palabra de Dios por ti mismo. Sin explicaciones aburridas ni palabras difíciles: métodos paso a paso, ejemplos claros y actividades interactivas centradas en Jesucristo.
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
              <div class="badge badge-matcha" style="margin-bottom: 0.75rem;">El Salvador nos invita:</div>
              <p class="hero-banner-quote">
                «Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí».
              </p>
              <div class="hero-banner-source">Juan 5:39 · Jesucristo</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN CLAVE: ¿Por dónde quieres comenzar? (3 Posibilidades para jóvenes) -->
    <section class="section-starter-paths" style="padding: 3.5rem 1.5rem; background: var(--c-surface-warm); border-bottom: 1px solid var(--c-border-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-chai" style="margin-bottom: 0.5rem;">Tu propio camino</span>
          <h2 style="font-size: 2rem;">¿Por dónde quieres comenzar?</h2>
          <p class="section-subtitle">No todos empezamos en el mismo punto. Elige la opción que mejor describa tu momento actual:</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          
          <!-- Opción 1: Soy principiante -->
          <div class="card card-hover" style="border-top: 4px solid var(--c-matcha); display: flex; flex-direction: column;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--c-matcha-subtle); color: var(--c-matcha-dark); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              <span style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">${getSvgIcon("sprout")}</span>
            </div>
            <h3 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 0.5rem;">Soy principiante</h3>
            <p style="font-size: 0.95rem; color: var(--c-text-secondary); line-height: 1.55; flex-grow: 1; margin-bottom: 1.25rem;">
              Quiero aprender a leer con gusto, crear un hábito diario sin frustrarme y entender lo básico de cada versículo.
            </p>
            <div style="padding-top: 0.75rem; border-top: 1px solid var(--c-border-subtle);">
              <a href="#academia" class="btn btn-sm btn-primary btn-block">
                <span>Comenzar en el Nivel 1 &rarr;</span>
              </a>
            </div>
          </div>

          <!-- Opción 2: Ya leo las Escrituras -->
          <div class="card card-hover" style="border-top: 4px solid var(--c-chai); display: flex; flex-direction: column; background: #FAF7F2;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--c-chai-subtle); color: var(--c-chai-dark); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              <span style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">${getSvgIcon("book")}</span>
            </div>
            <h3 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 0.5rem;">Ya leo las Escrituras</h3>
            <p style="font-size: 0.95rem; color: var(--c-text-secondary); line-height: 1.55; flex-grow: 1; margin-bottom: 1.25rem;">
              Leo con frecuencia, pero a veces siento que solo paso las páginas. Quiero aprender a descubrir la enseñanza central.
            </p>
            <div style="padding-top: 0.75rem; border-top: 1px solid var(--c-border-subtle);">
              <a href="#leccion/como-comenzar" class="btn btn-sm btn-chai btn-block">
                <span>Comenzar Lecciones &rarr;</span>
              </a>
            </div>
          </div>

          <!-- Opción 3: Quiero profundizar -->
          <div class="card card-hover" style="border-top: 4px solid var(--c-carob); display: flex; flex-direction: column;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--c-carob-subtle); color: var(--c-carob); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              <span style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">${getSvgIcon("search")}</span>
            </div>
            <h3 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 0.5rem;">Quiero profundizar</h3>
            <p style="font-size: 0.95rem; color: var(--c-text-secondary); line-height: 1.55; flex-grow: 1; margin-bottom: 1.25rem;">
              Deseo investigar el contexto histórico, conectar símbolos con Jesucristo y aprender a hacer estudios temáticos por mi cuenta.
            </p>
            <div style="padding-top: 0.75rem; border-top: 1px solid var(--c-border-subtle);">
              <a href="#explorador" class="btn btn-sm btn-outline btn-block">
                <span>Explorar Contexto y Símbolos &rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Escritura Destacada -->
    <section class="section-featured-scripture">
      <div class="container">
        <div class="featured-scripture-card">
          <div class="featured-main">
            <div class="featured-label">Versículo para hoy</div>
            <blockquote class="featured-verse">
              «Sí, vemos que quienquiera que desee puede asirse a la palabra de Dios, que es viva y poderosa, que partirá por medio toda la astucia, y los lazos y trampas del diablo... y depositará su alma inmortal a la diestra de Dios».
            </blockquote>
            <div class="featured-ref">
              <span>Helamán 3:29–30</span> · 
              <a href="https://www.churchofjesuschrist.org/study/scriptures/bofm/hel/3?lang=spa&id=p29-p30#p29" target="_blank" rel="noopener noreferrer" class="scripture-link">
                Leer en churchofjesuschrist.org
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          <div class="featured-reflection">
            <h4 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--c-carob);">¿Qué significa para ti hoy?</h4>
            <p style="margin: 0; font-size: 0.92rem; line-height: 1.55;">
              La palabra de Dios no es solo información para acumular: es como un pasamanos de acero que corta de raíz las dudas y te sostiene seguro en medio de cualquier tormenta moral.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Presentación de las Cuatro Áreas Principales de ENCUENTRA -->
    <section class="section-quick-actions">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-pistache" style="margin-bottom: 0.5rem;">Estructura Simple</span>
          <h2>Las 4 áreas de ENCUENTRA</h2>
          <p class="section-subtitle">Todo lo que necesitas para tu estudio diario, organizado en cuatro espacios claros:</p>
        </div>

        <div class="quick-actions-grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
          <!-- 1. Aprende a estudiar -->
          <a href="#academia" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
            </div>
            <h3 class="action-card-title">1. Aprende a estudiar</h3>
            <p class="action-card-desc">Cursos progresivos en 4 niveles para dominar hábitos, observación, contexto e interpretación personal.</p>
            <span class="action-card-link">Entrar a la Academia &rarr;</span>
          </a>

          <!-- 2. Explora las Escrituras -->
          <a href="#explorador" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <h3 class="action-card-title">2. Explora las Escrituras</h3>
            <p class="action-card-desc">Navega por las 5 obras canónicas dividiendo tu estudio en tres momentos: Antes, Durante y Después.</p>
            <span class="action-card-link">Abrir Explorador &rarr;</span>
          </a>

          <!-- 3. Practica lo aprendido -->
          <a href="#practica" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3 class="action-card-title">3. Practica lo aprendido</h3>
            <p class="action-card-desc">Herramientas activas: Guía paso a paso, Diccionario de términos, Fichas de personajes y Recursos oficiales.</p>
            <span class="action-card-link">Ir a Práctica &rarr;</span>
          </a>

          <!-- 4. Mi estudio -->
          <a href="#mi-estudio" class="action-card">
            <div class="action-card-icon">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3 class="action-card-title">4. Mi estudio personal</h3>
            <p class="action-card-desc">Tu espacio privado: escribe en tu Diario, revisa tus habilidades aprendidas y consulta tus términos favoritos.</p>
            <span class="action-card-link">Ver mi Cuaderno &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Recomendación de Aprendizaje -->
    <section class="section-recommended-lesson">
      <div class="container">
        <div class="recommended-box">
          <div class="recommended-info">
            <span class="badge badge-matcha">Lección Modelo Recomendada</span>
            <h3 style="font-size: 1.7rem; margin: 0.5rem 0 0.75rem; color: var(--c-carob);">
              Encuentra la idea principal
            </h3>
            <p style="color: var(--c-text-secondary); line-height: 1.55; margin-bottom: 1.25rem;">
              Aprende a descubrir el mensaje central de cualquier pasaje en <strong>5 etapas guiadas</strong>: descubre, comprende con el relato de la linterna, observa en Helamán 3, practica con Alma 32 y reflexiona para tu vida.
            </p>
            <a href="#leccion/idea-principal" class="btn btn-primary">
              <span>Iniciar lección guiada</span>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          <div class="recommended-card-preview" style="background: var(--c-surface); padding: 1.5rem; border-radius: var(--radius-lg); border: 1.5px solid var(--c-pistache);">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--c-matcha-dark); text-transform: uppercase;">Recorrido de 5 etapas:</div>
            <ul style="list-style: none; margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.6rem; font-size: 0.9rem; color: var(--c-text-secondary);">
              <li><strong>1. Descubre:</strong> El latido del texto</li>
              <li><strong>2. Comprende:</strong> Las 4 distinciones</li>
              <li><strong>3. Observa:</strong> Los 5 movimientos</li>
              <li><strong>4. Practica:</strong> Actividad y preguntas</li>
              <li><strong>5. Reflexiona:</strong> Guardar en mi Diario</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
