// ==========================================================================
// ENCUENTRA — VISTA: GUÍA INTERACTIVA DE ESTUDIO (ASISTENTE PASO A PASO)
// ==========================================================================

import { store } from "../store.js";

let guideCurrentStep = 1;
const TOTAL_GUIDE_STEPS = 5;

let guideDraft = {
  passage: "Santiago 1:5",
  speaker: "",
  contextNotes: "",
  keyWords: "",
  christTeaching: "",
  mainIdea: ""
};

export function renderGuiaView() {
  const saved = store.getGuideDraft();
  if (saved) {
    guideDraft = { ...guideDraft, ...saved };
  }

  return `
    <div class="guide-container">
      <div class="container-narrow">
        <div style="text-align: center; margin-bottom: 2rem;">
          <span class="badge badge-matcha" style="margin-bottom: 0.5rem;">Asistente Paso a Paso</span>
          <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">Guía Interactiva de Estudio</h1>
          <p class="section-subtitle">
            Un recorrido guiado con preguntas progresivas para acompañarte a escudriñar cualquier pasaje por ti mismo.
          </p>
        </div>

        <!-- Barra de Progreso del Asistente -->
        <div class="wizard-progress">
          ${[1, 2, 3, 4, 5].map(stepNum => `
            <div class="wizard-step-circle ${stepNum === guideCurrentStep ? 'active' : (stepNum < guideCurrentStep ? 'completed' : '')}">
              ${stepNum < guideCurrentStep ? '✓' : stepNum}
            </div>
          `).join('')}
        </div>

        <!-- Tarjeta del Paso Activo -->
        <div class="wizard-card">
          ${renderStepContent(guideCurrentStep)}

          <!-- Acciones de Navegación del Asistente -->
          <div class="wizard-actions">
            ${guideCurrentStep > 1 ? `
              <button id="btn-guide-prev" class="btn btn-secondary">
                &larr; Paso Anterior
              </button>
            ` : `<div></div>`}

            ${guideCurrentStep < TOTAL_GUIDE_STEPS ? `
              <button id="btn-guide-next" class="btn btn-primary">
                Siguiente Paso &rarr;
              </button>
            ` : `
              <button id="btn-guide-finish" class="btn btn-primary">
                ✓ Finalizar y Guardar en mi Diario
              </button>
            `}
          </div>
        </div>

        <!-- Consejos de Estudio -->
        <div class="callout callout-tip" style="margin-top: 2rem;">
          <div class="callout-header">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span>Principio Pedagógico</span>
          </div>
          <div class="callout-body">
            La Guía de Estudio te ofrece pistas reflexivas, pero no te da respuestas preparadas. Tu esfuerzo por observar, meditar y escribir es el canal por el cual el Espíritu Santo ilumina tu entendimiento.
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderStepContent(step) {
  if (step === 1) {
    return `
      <div>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
          <span class="badge badge-matcha">Paso 1 de 5</span>
          <span style="font-size: 0.85rem; color: var(--c-text-muted);">Punto de partida</span>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">Selecciona o escribe el pasaje que deseas estudiar</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
          Puedes ingresar la referencia que estás leyendo en tu estudio personal o elegir uno de los pasajes sugeridos para practicar.
        </p>

        <div class="form-group">
          <label class="form-label" for="guide-passage-input">Referencia de la Escritura:</label>
          <input type="text" id="guide-passage-input" class="input-text" value="${guideDraft.passage || ''}" placeholder="Ej: Santiago 1:5, 2 Nefi 31:20, Juan 14:6">
        </div>

        <div style="margin-top: 1rem;">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--c-carob); text-transform: uppercase;">Pasajes sugeridos para practicar:</span>
          <div class="pill-filters" style="margin-top: 0.5rem;">
            <button class="pill-btn guide-suggest-btn" data-sugg="Santiago 1:5">Santiago 1:5 (Pedir con fe)</button>
            <button class="pill-btn guide-suggest-btn" data-sugg="2 Nefi 31:20">2 Nefi 31:20 (Firmeza en Cristo)</button>
            <button class="pill-btn guide-suggest-btn" data-sugg="Juan 14:6">Juan 14:6 (El camino, la verdad y la vida)</button>
            <button class="pill-btn guide-suggest-btn" data-sugg="Mosíah 2:17">Mosíah 2:17 (Servicio)</button>
          </div>
        </div>
      </div>
    `;
  }

  if (step === 2) {
    return `
      <div>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
          <span class="badge badge-chai">Paso 2 de 5</span>
          <span style="font-size: 0.85rem; color: var(--c-text-muted);">Contexto Inmediato</span>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">¿Quién habla y a quién se dirige?</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.25rem;">
          Identifica la voz del pasaje y los destinatarios originales para comprender las circunstancias antes de interpretar.
        </p>

        <div class="form-group">
          <label class="form-label" for="guide-speaker-input">¿Quién es el autor o personaje que habla?</label>
          <input type="text" id="guide-speaker-input" class="input-text" value="${guideDraft.speaker || ''}" placeholder="Ej: El apóstol Santiago a los creyentes dispersos">
        </div>

        <div class="form-group">
          <label class="form-label" for="guide-context-input">¿Qué situación o desafío enfrentaban los oyentes?</label>
          <textarea id="guide-context-input" class="textarea-control" rows="3" placeholder="Escribe lo que sabes o investigues sobre el contexto...">${guideDraft.contextNotes || ''}</textarea>
        </div>

        <div class="callout callout-tip" style="margin: 0;">
          <div class="callout-header">Pista del Método:</div>
          <div class="callout-body">Fíjate si el autor está respondiendo a una pregunta, calmando una disputa o consolando en una persecución.</div>
        </div>
      </div>
    `;
  }

  if (step === 3) {
    return `
      <div>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
          <span class="badge badge-pistache">Paso 3 de 5</span>
          <span style="font-size: 0.85rem; color: var(--c-text-muted);">Observación Lingüística</span>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">Palabras clave, repeticiones y giros</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.25rem;">
          ¿Qué palabras se repiten con insistencia? ¿Hay conectores de causa y efecto como «si... entonces», «por tanto», «mas he aquí»?
        </p>

        <div class="form-group">
          <label class="form-label" for="guide-keywords-input">Anota las palabras y conectores más importantes del versículo:</label>
          <textarea id="guide-keywords-input" class="textarea-control" rows="4" placeholder="Ej: 'Falta de sabiduría', 'pídala a Dios', 'da a todos abundantemente', 'sin reproche'">${guideDraft.keyWords || ''}</textarea>
        </div>

        <div class="callout callout-principle" style="margin: 0;">
          <div class="callout-header">Pista del Método:</div>
          <div class="callout-body">Las palabras repetidas suelen señalar el énfasis del Espíritu Santo. Subráyalas mentalmente.</div>
        </div>
      </div>
    `;
  }

  if (step === 4) {
    return `
      <div>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
          <span class="badge badge-matcha">Paso 4 de 5</span>
          <span style="font-size: 0.85rem; color: var(--c-text-muted);">Enfoque en Cristo</span>
        </div>
        <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">¿Qué revela este pasaje sobre Jesucristo?</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.25rem;">
          Todas las Escrituras dan testimonio del Salvador. ¿Qué atributo, promesa o enseñanza de Su Evangelio resalta en este texto?
        </p>

        <div class="form-group">
          <label class="form-label" for="guide-christ-input">¿Qué aprendes aquí sobre el carácter, la gracia o el poder del Señor?</label>
          <textarea id="guide-christ-input" class="textarea-control" rows="4" placeholder="Ej: Dios no rechaza nuestra ignorancia; es generoso, escucha a quien busca con fe y nunca echa en cara nuestras dudas sinceras">${guideDraft.christTeaching || ''}</textarea>
        </div>
      </div>
    `;
  }

  // STEP 5: Síntesis final
  return `
    <div>
      <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
        <span class="badge badge-carob">Paso 5 de 5</span>
        <span style="font-size: 0.85rem; color: var(--c-text-muted);">Síntesis e Idea Principal</span>
      </div>
      <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">Redacta la Idea Principal y tu Aplicación</h2>
      <p style="color: var(--c-text-secondary); margin-bottom: 1.25rem;">
        Aplica lo aprendido en la Lección 1.4: formula una oración completa que resuma la verdad central del pasaje, no solo el tema general.
      </p>

      <div class="form-group">
        <label class="form-label" for="guide-mainidea-input">Idea Principal en una sola oración afirmativa:</label>
        <textarea id="guide-mainidea-input" class="textarea-control" rows="3" placeholder="Ej: Cuando nos falta sabiduría, Dios responderá con generosidad y sin reproche si acudimos a Él con fe sincera.">${guideDraft.mainIdea || ''}</textarea>
      </div>

      <div style="background: var(--c-surface-warm); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--c-border); margin-top: 1rem;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--c-carob); text-transform: uppercase; margin-bottom: 0.5rem;">Resumen de tu estudio:</div>
        <div style="font-size: 0.92rem; color: var(--c-text-secondary);">
          <div><strong>Pasaje:</strong> ${guideDraft.passage || '(No especificado)'}</div>
          <div><strong>Quién habla:</strong> ${guideDraft.speaker || '(No especificado)'}</div>
          <div><strong>Palabras clave:</strong> ${guideDraft.keyWords ? guideDraft.keyWords.slice(0, 60) + '...' : '(No especificadas)'}</div>
        </div>
      </div>
    </div>
  `;
}

export function initGuiaEvents(container, showToast) {
  function syncInputs() {
    if (guideCurrentStep === 1) {
      const p = container.querySelector("#guide-passage-input");
      if (p) guideDraft.passage = p.value.trim();
    } else if (guideCurrentStep === 2) {
      const s = container.querySelector("#guide-speaker-input");
      const c = container.querySelector("#guide-context-input");
      if (s) guideDraft.speaker = s.value.trim();
      if (c) guideDraft.contextNotes = c.value.trim();
    } else if (guideCurrentStep === 3) {
      const k = container.querySelector("#guide-keywords-input");
      if (k) guideDraft.keyWords = k.value.trim();
    } else if (guideCurrentStep === 4) {
      const ch = container.querySelector("#guide-christ-input");
      if (ch) guideDraft.christTeaching = ch.value.trim();
    } else if (guideCurrentStep === 5) {
      const m = container.querySelector("#guide-mainidea-input");
      if (m) guideDraft.mainIdea = m.value.trim();
    }
    store.saveGuideDraft(guideDraft);
  }

  // Sugerencias de pasajes en Paso 1
  const suggBtns = container.querySelectorAll(".guide-suggest-btn");
  suggBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const input = container.querySelector("#guide-passage-input");
      if (input) {
        input.value = btn.dataset.sugg;
        guideDraft.passage = btn.dataset.sugg;
      }
    });
  });

  // Botón Siguiente
  const btnNext = container.querySelector("#btn-guide-next");
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      syncInputs();
      if (guideCurrentStep < TOTAL_GUIDE_STEPS) {
        guideCurrentStep++;
        container.innerHTML = renderGuiaView();
        initGuiaEvents(container, showToast);
      }
    });
  }

  // Botón Anterior
  const btnPrev = container.querySelector("#btn-guide-prev");
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      syncInputs();
      if (guideCurrentStep > 1) {
        guideCurrentStep--;
        container.innerHTML = renderGuiaView();
        initGuiaEvents(container, showToast);
      }
    });
  }

  // Botón Finalizar
  const btnFinish = container.querySelector("#btn-guide-finish");
  if (btnFinish) {
    btnFinish.addEventListener("click", () => {
      syncInputs();
      const title = `Estudio Guiado: ${guideDraft.passage || 'Escritura'}`;
      const content = `Autor / Contexto: ${guideDraft.speaker || 'No especificado'}\n${guideDraft.contextNotes || ''}\n\nPalabras Clave: ${guideDraft.keyWords || 'No especificadas'}\n\nEnseñanza sobre Cristo: ${guideDraft.christTeaching || 'No especificada'}\n\nIdea Principal Redactada: ${guideDraft.mainIdea || 'No especificada'}`;

      store.addJournalEntry({
        title,
        scriptureRef: guideDraft.passage,
        category: "Idea Principal",
        content,
        tags: ["Guía Interactiva", "Idea Principal"]
      });

      store.clearGuideDraft();
      guideCurrentStep = 1;
      showToast("¡Estudio completado y guardado en tu Diario Personal!", "success");
      window.location.hash = "#diario";
    });
  }
}
