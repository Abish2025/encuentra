// ==========================================================================
// ENCUENTRA — VISTA: EXPLORADOR DE ESCRITURAS (3 MOMENTOS DE ESTUDIO)
// ==========================================================================

import { STANDARD_WORKS, SCRIPTURE_STUDY_GUIDES } from "../data/scriptures.js";
import { store } from "../store.js";

let selectedWorkId = "bofm";
let selectedGuideKey = "2-ne-31";
let selectedMomentTab = "antes"; // "antes" | "durante" | "despues"

export function renderExploradorView() {
  const currentWork = STANDARD_WORKS.find(w => w.id === selectedWorkId) || STANDARD_WORKS[0];
  const guide = SCRIPTURE_STUDY_GUIDES[selectedGuideKey] || SCRIPTURE_STUDY_GUIDES["2-ne-31"];

  return `
    <div class="explorer-header">
      <div class="container">
        <span class="badge badge-matcha" style="margin-bottom: 0.75rem;">Explorador de Obras Canónicas</span>
        <h1 style="margin-bottom: 0.5rem;">Explorador de Escrituras</h1>
        <p class="section-subtitle">
          Aprende a navegar los libros sagrados dividiendo tu estudio en tres momentos indispensables: 
          <strong>Antes</strong>, <strong>Durante</strong> y <strong>Después</strong> de la lectura.
        </p>

        <!-- Selector de las 5 Obras Canónicas -->
        <div class="works-selector">
          ${STANDARD_WORKS.map(w => `
            <button class="work-btn ${w.id === selectedWorkId ? 'active' : ''}" data-work-id="${w.id}">
              ${w.name}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="explorer-body">
      <div class="container">
        <!-- Tarjeta de la Obra Seleccionada -->
        <div class="card card-surface-warm" style="margin-bottom: 2rem;">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
            <div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--c-matcha-dark); text-transform: uppercase;">${currentWork.subtitle}</div>
              <h2 style="font-size: 1.45rem; margin: 0.25rem 0 0.5rem; color: var(--c-carob);">${currentWork.name}</h2>
              <p style="margin: 0; font-size: 0.95rem; color: var(--c-text-secondary); max-width: 780px;">${currentWork.desc}</p>
            </div>
            <a href="${currentWork.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <span>Abrir en biblioteca oficial</span>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>

        <!-- Muestra de Pasajes de Estudio Guiado -->
        <div style="margin-bottom: 2rem;">
          <label class="form-label" style="margin-bottom: 0.5rem;">Selecciona un Pasaje para Explorar con los 3 Momentos de Estudio:</label>
          <div class="pill-filters">
            <button class="pill-btn ${selectedGuideKey === '2-ne-31' ? 'active' : ''}" data-guide-key="2-ne-31">2 Nefi 31:19–20 (La senda estrecha)</button>
            <button class="pill-btn ${selectedGuideKey === 'mosiah-2-17' ? 'active' : ''}" data-guide-key="mosiah-2-17">Mosíah 2:17 (Servicio al prójimo)</button>
            <button class="pill-btn ${selectedGuideKey === 'moroni-10-4' ? 'active' : ''}" data-guide-key="moroni-10-4">Moroni 10:4–5 (La promesa de verdad)</button>
          </div>
        </div>

        <!-- Texto del Pasaje Seleccionado -->
        <div class="scripture-box">
          <div class="scripture-text">
            ${guide.passageText}
          </div>
          <div class="scripture-ref">
            <span>${guide.reference} · ${guide.title}</span>
            <a href="${guide.officialUrl}" target="_blank" rel="noopener noreferrer" class="scripture-link">
              Leer capítulo oficial completo &rarr;
            </a>
          </div>
        </div>

        <!-- Los Tres Momentos de Estudio -->
        <div style="margin-top: 2.5rem;">
          <div class="study-moments-tabs">
            <button class="moment-tab ${selectedMomentTab === 'antes' ? 'active' : ''}" data-moment="antes">
              1. ANTES de leer
            </button>
            <button class="moment-tab ${selectedMomentTab === 'durante' ? 'active' : ''}" data-moment="durante">
              2. DURANTE la lectura
            </button>
            <button class="moment-tab ${selectedMomentTab === 'despues' ? 'active' : ''}" data-moment="despues">
              3. DESPUÉS de leer
            </button>
          </div>

          <div class="moment-content-card">
            ${renderMomentContent(guide, selectedMomentTab)}
          </div>
        </div>

        <!-- Lista de Libros de la Obra Canónica -->
        <div style="margin-top: 3.5rem;">
          <h3 style="font-size: 1.35rem; margin-bottom: 1rem; color: var(--c-carob);">Libros contenidos en ${currentWork.name}</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
            ${currentWork.books.map(b => `
              <div class="card" style="padding: 1.15rem;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
                  <strong style="font-size: 1.1rem; color: var(--c-carob); font-family: var(--font-serif);">${b.name}</strong>
                  <span style="font-size: 0.8rem; color: var(--c-text-muted);">${b.chapters} cap${b.chapters > 1 ? 's' : ''}</span>
                </div>
                <div style="font-size: 0.82rem; color: var(--c-matcha-dark); font-weight: 600; margin-bottom: 0.5rem;">Autor: ${b.author}</div>
                <p style="font-size: 0.88rem; color: var(--c-text-secondary); margin: 0; line-height: 1.45;">${b.summary}</p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderMomentContent(guide, momentTab) {
  if (momentTab === "antes") {
    return `
      <div>
        <span class="badge badge-matcha" style="margin-bottom: 0.75rem;">Fase 1: Preparación y Enfoque</span>
        <h3 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 0.75rem;">¿Qué necesito saber antes de sumergirme en el texto?</h3>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
          Antes de leer, preparamos nuestra mente reconociendo el contexto histórico, el autor y formulando preguntas que despierten el interés espiritual.
        </p>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
          <div style="background: var(--c-surface-warm); padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--c-carob);">
            <strong style="color: var(--c-carob); display: block; margin-bottom: 0.35rem;">Contexto Histórico:</strong>
            <p style="margin: 0; font-size: 0.95rem; color: var(--c-text-secondary);">${guide.antes.contexto}</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="padding: 1rem; background: #F8FAF6; border-radius: var(--radius-md); border: 1px solid var(--c-border-subtle);">
              <strong style="color: var(--c-matcha-dark); font-size: 0.88rem;">¿Quién escribió el pasaje?</strong>
              <div style="font-size: 0.95rem; color: var(--c-text-primary); margin-top: 0.25rem;">${guide.antes.autor}</div>
            </div>
            <div style="padding: 1rem; background: #FAF7F2; border-radius: var(--radius-md); border: 1px solid var(--c-border-subtle);">
              <strong style="color: var(--c-chai-dark); font-size: 0.88rem;">¿A quién estaba dirigido?</strong>
              <div style="font-size: 0.95rem; color: var(--c-text-primary); margin-top: 0.25rem;">${guide.antes.audiencia}</div>
            </div>
          </div>
        </div>

        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--c-carob);">Preguntas orientadoras para abrir tu mente:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem; color: var(--c-text-secondary);">
          ${guide.antes.preguntas.map(p => `<li>• ${p}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  if (momentTab === "durante") {
    return `
      <div>
        <span class="badge badge-chai" style="margin-bottom: 0.75rem;">Fase 2: Observación Activa</span>
        <h3 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 0.75rem;">¿Qué observo atentamente mientras leo?</h3>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
          Durante la lectura examinamos el lenguaje, los giros lógicos, las repeticiones y las palabras desconocidas.
        </p>

        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--c-carob);">Puntos clave a observar en los versículos:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.95rem; color: var(--c-text-secondary); margin-bottom: 1.75rem;">
          ${guide.durante.observaciones.map(o => `
            <li style="padding: 0.75rem 1rem; background: #FAF9F6; border-left: 3px solid var(--c-chai); border-radius: var(--radius-sm);">
              ${o}
            </li>
          `).join('')}
        </ul>

        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--c-carob);">Palabras clave y su significado:</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
          ${guide.durante.palabrasClave.map(k => `
            <div style="padding: 1rem; background: var(--c-surface); border: 1.5px solid var(--c-border-subtle); border-radius: var(--radius-md);">
              <div style="font-weight: 700; color: var(--c-matcha-dark); margin-bottom: 0.35rem;">«${k.word}»</div>
              <p style="margin: 0; font-size: 0.9rem; color: var(--c-text-secondary);">${k.def}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // DESPUÉS
  return `
    <div>
      <span class="badge badge-pistache" style="margin-bottom: 0.75rem;">Fase 3: Integración y Vida</span>
      <h3 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 0.75rem;">¿Qué aprendí y cómo lo aplico con Jesucristo en el centro?</h3>
      <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
        Al concluir la lectura, sintetizamos el testimonio sobre el Salvador, formulamos el principio doctrinal permanente y tomamos una resolución personal.
      </p>

      <div class="callout callout-principle" style="margin-bottom: 1.5rem;">
        <div class="callout-header">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
          <span>Enseñanza sobre Jesucristo:</span>
        </div>
        <div class="callout-body" style="font-size: 1rem; color: var(--c-text-primary);">
          ${guide.después.cristoCentrico}
        </div>
      </div>

      <div style="background: #FDF9F5; border-left: 4px solid var(--c-chai); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
        <strong style="color: var(--c-carob); display: block; margin-bottom: 0.35rem;">Principio Doctrinal Eterno:</strong>
        <p style="margin: 0; font-size: 0.98rem; color: var(--c-text-secondary); line-height: 1.55;">
          ${guide.después.principioDoctrinal}
        </p>
      </div>

      <div style="background: var(--c-surface-warm); border-left: 4px solid var(--c-carob); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.75rem;">
        <strong style="color: var(--c-carob); display: block; margin-bottom: 0.35rem;">Aplicación Personal Sugerida:</strong>
        <p style="margin: 0; font-size: 0.98rem; color: var(--c-text-secondary); line-height: 1.55;">
          ${guide.después.aplicacionPersonal}
        </p>
      </div>

      <button id="btn-save-explorer-note" class="btn btn-primary" data-ref="${guide.reference}">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
        <span>Guardar este estudio en mi Diario Personal</span>
      </button>
    </div>
  `;
}

export function initExploradorEvents(container, showToast) {
  // Selector de Obra Canónica
  const workBtns = container.querySelectorAll(".work-btn");
  workBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedWorkId = btn.dataset.workId;
      container.innerHTML = renderExploradorView();
      initExploradorEvents(container, showToast);
    });
  });

  // Selector de Pasaje Guiado
  const guideBtns = container.querySelectorAll(".pill-btn");
  guideBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedGuideKey = btn.dataset.guideKey;
      container.innerHTML = renderExploradorView();
      initExploradorEvents(container, showToast);
    });
  });

  // Selector de los 3 Momentos de Estudio
  const momentTabs = container.querySelectorAll(".moment-tab");
  momentTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      selectedMomentTab = tab.dataset.moment;
      container.innerHTML = renderExploradorView();
      initExploradorEvents(container, showToast);
    });
  });

  // Botón Guardar en Diario
  const btnSave = container.querySelector("#btn-save-explorer-note");
  if (btnSave) {
    btnSave.addEventListener("click", () => {
      const guide = SCRIPTURE_STUDY_GUIDES[selectedGuideKey];
      store.addJournalEntry({
        title: `Estudio de ${guide.reference}: ${guide.title}`,
        scriptureRef: guide.reference,
        category: "Descubrimiento",
        content: `Principio Doctrinal: ${guide.después.principioDoctrinal}\n\nEnfoque en Cristo: ${guide.después.cristoCentrico}\n\nAplicación: ${guide.después.aplicacionPersonal}`,
        tags: ["Explorador", guide.standardWork, "3 Momentos"]
      });
      showToast(`¡Estudio de ${guide.reference} guardado en tu Diario!`, "success");
    });
  }
}
