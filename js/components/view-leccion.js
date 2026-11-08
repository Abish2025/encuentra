// ==========================================================================
// ENCUENTRA — VISTA: LECCIÓN INTERACTIVA EN 5 ETAPAS GUIADAS
// Descubre · Comprende · Observa · Practica · Reflexiona
// ==========================================================================

import { getLessonData } from "../data/curriculum.js";
import { store } from "../store.js";
import { getSvgIcon } from "../icons.js";

let activeLessonId = "como-comenzar";
let currentLessonStage = 1; // 1: Descubre, 2: Comprende, 3: Observa, 4: Practica, 5: Reflexiona
let currentMovementStep = 1;

export function renderLeccionView(lessonId) {
  if (lessonId && lessonId !== activeLessonId) {
    activeLessonId = lessonId;
    currentLessonStage = 1;
    currentMovementStep = 1;
  }

  const L = getLessonData(activeLessonId);
  const isCompleted = store.isLessonCompleted(L.id);
  const checklistSaved = store.getChecklistState(`chk-${L.id}`) || [];
  const completedStages = store.getCompletedStages(L.id);
  const realProgress = Math.round((completedStages.length / 5) * 100);

  const STAGES = [
    { num: 1, name: "Descubre" },
    { num: 2, name: "Comprende" },
    { num: 3, name: "Observa" },
    { num: 4, name: "Practica" },
    { num: 5, name: "Reflexiona" }
  ];

  return `
    <article class="lesson-layout" style="padding: 2.5rem 1.5rem 5rem;">
      <div class="container-narrow">
        
        <!-- Encabezado y Navegación de la Lección -->
        <div class="lesson-hero" style="padding: 2rem; margin-bottom: 2rem;">
          <div class="lesson-breadcrumbs">
            <a href="#academia">Aprende a estudiar</a> &rsaquo; 
            <a href="#academia">${L.levelTitle}</a> &rsaquo; 
            <span>Lección ${L.number}</span>
          </div>

          <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
            <span class="badge badge-matcha">Lección ${L.number}</span>
            <span class="badge badge-chai">${L.badge}</span>
            <span style="font-size: 0.82rem; color: var(--c-text-muted); margin-left: auto; display: flex; align-items: center; gap: 0.35rem;">
              ${getSvgIcon("clock")}
              <span>${L.duration}</span>
            </span>
          </div>

          <h1 class="lesson-hero-title" style="font-size: clamp(1.8rem, 3.2vw, 2.5rem); margin-bottom: 0.5rem;">
            ${L.title}
          </h1>
          <p style="font-size: 1.05rem; color: var(--c-text-secondary); margin-bottom: 1.25rem;">
            ${L.subtitle}
          </p>

          <!-- Barra de Progreso en 5 Etapas -->
          <div style="background: var(--c-surface); border-radius: var(--radius-lg); padding: 1rem; border: 1px solid var(--c-border-subtle); margin-top: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--c-carob); text-transform: uppercase;">
                Etapa ${currentLessonStage} de 5: ${STAGES[currentLessonStage - 1].name}
              </span>
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--c-matcha-dark);">
                ${realProgress}% completado
              </span>
            </div>

            <!-- Botones de las 5 Etapas -->
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.4rem;">
              ${STAGES.map(st => {
                const isDone = completedStages.includes(st.num);
                const isActive = st.num === currentLessonStage;
                return `
                <button class="stage-tab-btn ${isActive ? 'active' : (isDone ? 'done' : '')}" data-stage="${st.num}" style="padding: 0.5rem 0.25rem; font-size: 0.8rem; font-weight: 600; border-radius: var(--radius-sm); border: 1.5px solid ${isActive ? 'var(--c-matcha)' : (isDone ? '#7CB866' : 'var(--c-border)')}; background: ${isActive ? 'var(--c-matcha)' : (isDone ? '#EBF3E8' : 'var(--c-surface)')}; color: ${isActive ? '#FFF' : 'var(--c-carob)'}; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.25rem;">
                  ${isDone && !isActive ? `<span style="display:inline-flex; width:12px; height:12px;">${getSvgIcon("check")}</span>` : ''}
                  <span>${st.num}. ${st.name}</span>
                </button>
              `}).join('')}
            </div>
          </div>
        </div>

        <!-- Contenido de la Etapa Activa -->
        <div class="stage-card" style="background: var(--c-surface); border-radius: var(--radius-xl); border: 1px solid var(--c-border-subtle); padding: 2.25rem 2rem; box-shadow: var(--shadow-sm); min-height: 480px;">
          ${renderStageContent(currentLessonStage, L, checklistSaved)}
        </div>

        <!-- Navegación entre Etapas (Anterior / Siguiente) -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--c-border-subtle); flex-wrap: wrap; gap: 0.75rem;">
          ${currentLessonStage > 1 ? `
            <button id="btn-stage-prev" class="btn btn-secondary">
              &larr; Etapa ${currentLessonStage - 1}
            </button>
          ` : `
            <a href="#academia" class="btn btn-secondary">&larr; Volver a la Academia</a>
          `}

          ${currentLessonStage < 5 ? `
            <button id="btn-stage-next" class="btn btn-primary">
              <span>Continuar a Etapa ${currentLessonStage + 1}</span>
              &rarr;
            </button>
          ` : `
            <button id="btn-finish-lesson" class="btn btn-primary">
              <span style="display:inline-flex; width:16px; height:16px; vertical-align:middle; margin-right:4px;">${getSvgIcon("check")}</span>
              <span>Terminar lección y marcar completada</span>
            </button>
          `}
        </div>

      </div>
    </article>
  `;
}

function renderStageContent(stage, L, checklistSaved) {
  // ETAPA 1: DESCUBRE
  if (stage === 1) {
    const e = L.etapa1_descubre;
    return `
      <div style="animation: fadeIn 0.25s ease-out;">
        <span class="badge badge-matcha" style="margin-bottom: 0.75rem;">${e.badge}</span>
        <h2 style="font-size: 1.6rem; color: var(--c-carob); margin-bottom: 0.85rem;">${e.title}</h2>
        
        <div style="background: #FAF7F2; padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--c-chai); margin-bottom: 1.5rem; font-size: 1.05rem; font-style: italic; color: var(--c-carob);">
          ${e.summary}
        </div>

        <div style="font-size: 1rem; line-height: 1.7; color: var(--c-text-secondary); margin-bottom: 2rem;">
          ${e.content.split('\n\n').map(p => `<p style="margin-bottom: 1rem;">${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`).join('')}
        </div>

        <div class="callout callout-principle" style="margin: 0;">
          <div class="callout-header">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span>Objetivo que alcanzarás al terminar:</span>
          </div>
          <div class="callout-body" style="font-size: 0.95rem; color: var(--c-text-primary);">
            ${L.objective}
          </div>
        </div>
      </div>
    `;
  }

  // ETAPA 2: COMPRENDE
  if (stage === 2) {
    const e = L.etapa2_comprende;
    return `
      <div style="animation: fadeIn 0.25s ease-out;">
        <span class="badge badge-chai" style="margin-bottom: 0.75rem;">${e.badge}</span>
        <h2 style="font-size: 1.6rem; color: var(--c-carob); margin-bottom: 0.5rem;">${e.title}</h2>
        <p style="color: var(--c-text-secondary); font-size: 0.98rem; margin-bottom: 1.75rem;">${e.intro}</p>

        <!-- Cuatro Distinciones / Pilares -->
        <div class="distinctions-grid" style="margin-bottom: 2.5rem;">
          ${e.distinctions.map(d => `
            <div class="distinction-card ${d.type}">
              <div class="distinction-tag text-${d.tagColor}">${d.title}</div>
              <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem; color: var(--c-carob);">${d.question}</h3>
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--c-text-muted); margin-bottom: 0.5rem;">
                Formato: <span style="font-weight: 500; color: var(--c-text-primary);">${d.format}</span>
              </div>
              <p style="font-size: 0.88rem; color: var(--c-text-secondary); margin-bottom: 0.75rem; line-height: 1.5;">
                ${d.explanation}
              </p>
              <div style="background: rgba(0,0,0,0.03); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.84rem; border-left: 2px solid var(--c-carob);">
                <strong>Ejemplo:</strong> ${d.example}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Relato Narrativo -->
        ${e.narrative ? `
          <div class="narrative-box">
            <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--c-carob);">${e.narrative.title}</h3>
            <div style="font-size: 0.96rem; line-height: 1.65; color: var(--c-text-secondary);">
              ${e.narrative.text.split('\n\n').map(p => `<p style="margin-bottom: 0.85rem;">${p}</p>`).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // ETAPA 3: OBSERVA
  if (stage === 3) {
    const e = L.etapa3_observa;
    return `
      <div style="animation: fadeIn 0.25s ease-out;">
        <span class="badge badge-pistache" style="margin-bottom: 0.75rem;">${e.badge}</span>
        <h2 style="font-size: 1.6rem; color: var(--c-carob); margin-bottom: 0.5rem;">${e.title}</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
          Observa cómo el método aplicado paso a paso nos revela la riqueza doctrinal de este pasaje:
        </p>

        <!-- Stepper Interactivo de 5 Movimientos -->
        <div class="movements-stepper" style="margin-bottom: 2rem;">
          <div class="movements-nav">
            ${e.movements.map(m => `
              <button class="movement-btn ${m.step === currentMovementStep ? 'active' : ''}" data-step="${m.step}">
                <span class="movement-step-number">${m.step}</span>
                <span>${m.name}</span>
              </button>
            `).join('')}
          </div>

          <div id="movement-content-display" class="movement-body">
            ${renderSingleMovement(e.movements, currentMovementStep)}
          </div>
        </div>

        <!-- Pasaje y Desglose -->
        <div class="scripture-box">
          <div class="scripture-text" style="font-size: 1rem; line-height: 1.65;">
            ${e.scriptureCase.text.replace(/\n/g, '<br><br>')}
          </div>
          <div class="scripture-ref">
            <span>${e.scriptureCase.ref}</span>
            <a href="${e.scriptureCase.link}" target="_blank" rel="noopener noreferrer" class="scripture-link" style="display: inline-flex; align-items: center; gap: 0.25rem;">
              <span>Leer en churchofjesuschrist.org</span>
              &rarr;
            </a>
          </div>
        </div>

        <div style="background: var(--c-surface-warm); border-radius: var(--radius-lg); border: 1.5px solid var(--c-border); padding: 1.5rem; margin-top: 1.5rem;">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--c-carob);">Desglose del Modelo:</h4>
          <div style="display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.92rem;">
            <div style="padding: 0.6rem 0.85rem; background: #F8FAF7; border-left: 3px solid var(--c-pistache); border-radius: var(--radius-sm);">
              <strong>Tema:</strong> ${e.scriptureCase.breakdown.tema}
            </div>
            <div style="padding: 0.6rem 0.85rem; background: #F2F7EF; border-left: 4px solid var(--c-matcha); border-radius: var(--radius-sm);">
              <strong style="color: var(--c-matcha-dark);">Idea Principal:</strong> ${e.scriptureCase.breakdown.idea}
            </div>
            <div style="padding: 0.6rem 0.85rem; background: #FAF5EE; border-left: 3px solid var(--c-chai); border-radius: var(--radius-sm);">
              <strong style="color: var(--c-chai-dark);">Detalles de Apoyo:</strong> ${e.scriptureCase.breakdown.apoyos}
            </div>
            <div style="padding: 0.6rem 0.85rem; background: var(--c-surface); border-left: 3px solid var(--c-carob); border-radius: var(--radius-sm);">
              <strong style="color: var(--c-carob);">Aplicación Personal:</strong> ${e.scriptureCase.breakdown.aplicacion}
            </div>
          </div>
        </div>

        <!-- Pistas y Errores -->
        <div class="tips-errors-grid" style="margin-top: 2rem;">
          <div class="tips-box">
            <h4 style="font-size: 1rem; color: var(--c-matcha-dark); margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.35rem;">
              <span style="display:inline-flex; width:16px; height:16px;">${getSvgIcon("check")}</span>
              <span>Pistas para tu estudio:</span>
            </h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem; color: var(--c-text-secondary); padding: 0;">
              ${e.tips.map(t => `<li>• ${t}</li>`).join('')}
            </ul>
          </div>
          <div class="errors-box">
            <h4 style="font-size: 1rem; color: var(--c-error); margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.35rem;">
              <span style="display:inline-flex; width:16px; height:16px;">${getSvgIcon("cross")}</span>
              <span>Errores frecuentes:</span>
            </h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem; color: var(--c-text-secondary); padding: 0;">
              ${e.errors.map(err => `<li><strong>${err.title}:</strong> ${err.text}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // ETAPA 4: PRACTICA
  if (stage === 4) {
    const e = L.etapa4_practica;
    const act = e.activity || e.activityAlma;
    return `
      <div style="animation: fadeIn 0.25s ease-out;">
        <span class="badge badge-matcha" style="margin-bottom: 0.75rem;">${e.badge}</span>
        <h2 style="font-size: 1.6rem; color: var(--c-carob); margin-bottom: 0.5rem;">${e.title}</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
          Practica con el pasaje propuesto, responde las preguntas de comprobación y verifica tu análisis:
        </p>

        <!-- Actividad Guiada -->
        ${act ? `
          <div style="background: var(--c-surface-warm); border-radius: var(--radius-lg); border: 1px solid var(--c-border); padding: 1.5rem; margin-bottom: 2rem;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--c-matcha-dark); text-transform: uppercase; margin-bottom: 0.35rem;">Actividad de Desglose:</div>
            <div class="scripture-box" style="margin: 0.5rem 0 1rem;">
              <div class="scripture-text" style="font-size: 1rem; line-height: 1.65;">${act.text.replace(/\n\n/g, '<br><br>')}</div>
              <div class="scripture-ref">
                <span>${act.ref}</span>
                <a href="${act.link}" target="_blank" rel="noopener noreferrer" class="scripture-link">Ver en churchofjesuschrist.org &rarr;</a>
              </div>
            </div>

            <p style="font-size: 0.92rem; color: var(--c-text-secondary); margin-bottom: 1rem;">
              Formula mentalmente el principio central. Luego haz clic para comparar tu respuesta:
            </p>
            <button id="btn-reveal-solution-stage" class="btn btn-secondary btn-sm">
              <span>Ver Solución y Desglose</span>
            </button>

            <div id="solution-stage-box" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--c-border); font-size: 0.9rem;">
              <div><strong>Tema:</strong> ${act.solution.tema}</div>
              <div style="margin-top: 0.35rem; color: var(--c-matcha-dark);"><strong>Idea Principal:</strong> ${act.solution.idea}</div>
              <div style="margin-top: 0.35rem;"><strong>Apoyos:</strong> ${act.solution.apoyos}</div>
              <div style="margin-top: 0.35rem; color: var(--c-carob);"><strong>Aplicación:</strong> ${act.solution.aplicacion}</div>
            </div>
          </div>
        ` : ''}

        <!-- Lista de Comprobación -->
        <div style="margin-bottom: 2rem;">
          <h4 style="font-size: 1.1rem; color: var(--c-carob); margin-bottom: 0.5rem;">Lista de Comprobación (Checklist):</h4>
          <p style="font-size: 0.88rem; color: var(--c-text-secondary); margin-bottom: 0.75rem;">Marca los criterios que cumple tu estudio:</p>
          <div class="checklist" id="lesson-checklist-container">
            ${e.checklist.map(item => {
              const checked = checklistSaved.includes(item.id);
              return `
                <label class="checklist-item ${checked ? 'checked' : ''}" data-chk-id="${item.id}">
                  <input type="checkbox" ${checked ? 'checked' : ''}>
                  <span>${item.text}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Cuestionario con Explicaciones -->
        <div>
          <h4 style="font-size: 1.1rem; color: var(--c-carob); margin-bottom: 0.75rem;">Preguntas de Comprensión Doctrinal:</h4>
          ${e.quizzes.map((q, qIdx) => `
            <div class="quiz-container" data-quiz-id="${q.id}" style="margin-bottom: 1.25rem;">
              <div class="quiz-question">${qIdx + 1}. ${q.question}</div>
              <div class="quiz-options">
                ${q.options.map(opt => `
                  <div class="quiz-option" data-option-id="${opt.id}">
                    <div style="font-weight: 700; width: 22px;">${opt.id.split('-').pop().toUpperCase()}.</div>
                    <div style="flex-grow: 1;">${opt.text}</div>
                  </div>
                `).join('')}
              </div>
              <div class="quiz-feedback" id="feedback-${q.id}"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ETAPA 5: REFLEXIONA
  const e = L.etapa5_reflexiona;
  return `
    <div style="animation: fadeIn 0.25s ease-out;">
      <span class="badge badge-carob" style="margin-bottom: 0.75rem;">${e.badge}</span>
      <h2 style="font-size: 1.6rem; color: var(--c-carob); margin-bottom: 0.5rem;">${e.title}</h2>
      <p style="color: var(--c-text-secondary); font-size: 0.98rem; margin-bottom: 1.5rem;">
        El estudio de las Escrituras se completa cuando permites que el Espíritu hable a tu vida diaria:
      </p>

      <div class="card card-vanilla" style="margin-bottom: 2rem;">
        <div style="font-size: 1.05rem; font-style: italic; color: var(--c-carob); margin-bottom: 1.25rem;">
          «${e.prompt}»
        </div>

        <div class="form-group">
          <label class="form-label" for="stage-reflection-input">Escribe aquí tu reflexión (se guardará de forma privada en tu Diario):</label>
          <textarea id="stage-reflection-input" class="textarea-control" rows="5" placeholder="¿Qué verdad conmovió tu corazón hoy y qué harás al respecto?"></textarea>
        </div>

        <button id="btn-save-stage-reflection" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
          ${getSvgIcon("edit")}
          <span>Guardar en mi Diario Personal</span>
        </button>
      </div>

      <div>
        <h4 style="font-size: 1rem; color: var(--c-carob); margin-bottom: 0.5rem;">Fuentes oficiales consultadas:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.88rem; padding: 0;">
          ${e.sources.map(s => `
            <li>
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="scripture-link" style="display: inline-flex; align-items: center; gap: 0.35rem;">
                ${getSvgIcon("link")}
                <span>${s.title}</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;
}

function renderSingleMovement(movements, step) {
  const m = movements.find(item => item.step === step);
  if (!m) return "";
  return `
    <div>
      <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
        <span class="badge badge-matcha">Movimiento ${m.step} de 5</span>
        <h4 style="margin: 0; font-size: 1.15rem; color: var(--c-carob);">${m.name}</h4>
      </div>
      <p style="font-size: 0.98rem; color: var(--c-text-primary); line-height: 1.6; margin: 0;">${m.desc}</p>
    </div>
  `;
}

export function initLeccionEvents(container, showToast, lessonId) {
  if (lessonId) {
    activeLessonId = lessonId;
  }
  const L = getLessonData(activeLessonId);

  // Cambio de Etapa directa mediante botones de cabecera
  const stageBtns = container.querySelectorAll(".stage-tab-btn");
  stageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentLessonStage = parseInt(btn.dataset.stage, 10);
      container.innerHTML = renderLeccionView(activeLessonId);
      initLeccionEvents(container, showToast, activeLessonId);
      window.scrollTo({ top: 180, behavior: "smooth" });
    });
  });

  // Botón Siguiente Etapa — marca la etapa actual como completada
  const btnNext = container.querySelector("#btn-stage-next");
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (currentLessonStage < 5) {
        store.markStageCompleted(L.id, currentLessonStage);
        currentLessonStage++;
        container.innerHTML = renderLeccionView(activeLessonId);
        initLeccionEvents(container, showToast, activeLessonId);
        window.scrollTo({ top: 180, behavior: "smooth" });
      }
    });
  }

  // Botón Etapa Anterior
  const btnPrev = container.querySelector("#btn-stage-prev");
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentLessonStage > 1) {
        currentLessonStage--;
        container.innerHTML = renderLeccionView(activeLessonId);
        initLeccionEvents(container, showToast, activeLessonId);
        window.scrollTo({ top: 180, behavior: "smooth" });
      }
    });
  }

  // Finalizar lección — marca etapa 5 y la lección completa
  const btnFinish = container.querySelector("#btn-finish-lesson");
  if (btnFinish) {
    btnFinish.addEventListener("click", () => {
      store.markStageCompleted(L.id, 5);
      store.markLessonCompleted(L.id);
      showToast(`¡Felicitaciones! Has completado todas las etapas de la Lección ${L.number}.`, "success");
      setTimeout(() => {
        window.location.hash = "#academia";
      }, 1000);
    });
  }

  // Eventos de Etapa 3 (Movimientos stepper)
  if (currentLessonStage === 3) {
    const movBtns = container.querySelectorAll(".movement-btn");
    const movDisplay = container.querySelector("#movement-content-display");
    movBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        movBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentMovementStep = parseInt(btn.dataset.step, 10);
        movDisplay.innerHTML = renderSingleMovement(L.etapa3_observa.movements, currentMovementStep);
      });
    });
  }

  // Eventos de Etapa 4 (Practica: solución, checklist y quizzes)
  if (currentLessonStage === 4) {
    const btnReveal = container.querySelector("#btn-reveal-solution-stage");
    const solBox = container.querySelector("#solution-stage-box");
    if (btnReveal && solBox) {
      btnReveal.addEventListener("click", () => {
        const isHidden = solBox.style.display === "none";
        solBox.style.display = isHidden ? "block" : "none";
        btnReveal.querySelector("span").textContent = isHidden ? "Ocultar Solución" : "Ver Solución y Desglose";
      });
    }

    const checkItems = container.querySelectorAll(".checklist-item");
    checkItems.forEach(item => {
      item.addEventListener("click", (e) => {
        const chk = item.querySelector("input[type='checkbox']");
        if (e.target !== chk) chk.checked = !chk.checked;
        item.classList.toggle("checked", chk.checked);

        const allChecked = Array.from(container.querySelectorAll(".checklist-item input:checked"))
          .map(inp => inp.closest(".checklist-item").dataset.chkId);
        store.setChecklistState(`chk-${L.id}`, allChecked);
      });
    });

    const quizzes = L.etapa4_practica.quizzes || [];
    quizzes.forEach(q => {
      const qBox = container.querySelector(`[data-quiz-id="${q.id}"]`);
      if (!qBox) return;
      const opts = qBox.querySelectorAll(".quiz-option");
      const fBox = qBox.querySelector(`#feedback-${q.id}`);

      opts.forEach(opt => {
        opt.addEventListener("click", () => {
          opts.forEach(o => o.classList.remove("selected"));
          opt.classList.add("selected");

          const optId = opt.dataset.optionId;
          const optObj = q.options.find(o => o.id === optId);
          if (optObj) {
            fBox.className = `quiz-feedback is-visible ${optObj.isCorrect ? 'correct' : 'incorrect'}`;
            fBox.innerHTML = `<strong>${optObj.isCorrect ? '¡Correcto!' : 'Atención al análisis:'}</strong> ${optObj.feedback}`;
            store.recordExerciseAnswer(q.id, optObj.isCorrect);
          }
        });
      });
    });
  }

  // Eventos de Etapa 5 (Reflexión)
  if (currentLessonStage === 5) {
    const btnSave = container.querySelector("#btn-save-stage-reflection");
    const inp = container.querySelector("#stage-reflection-input");
    if (btnSave && inp) {
      btnSave.addEventListener("click", () => {
        const val = inp.value.trim();
        if (!val) {
          showToast("Escribe tu reflexión antes de guardar.", "warning");
          return;
        }
        store.addJournalEntry({
          title: `Reflexión: ${L.title}`,
          scriptureRef: (L.etapa3_observa.scriptureCase ? L.etapa3_observa.scriptureCase.ref : L.title),
          category: "Lección",
          content: val,
          tags: [L.title, `Lección ${L.number}`, "Reflexión"]
        });
        inp.value = "";
        showToast("¡Reflexión guardada con éxito en tu Diario Personal!", "success");
      });
    }
  }
}
