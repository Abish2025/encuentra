// ==========================================================================
// ENCUENTRA — VISTA: LECCIÓN MAESTRA «ENCUENTRA LA IDEA PRINCIPAL»
// Dividida en 5 Etapas Claras: Descubre · Comprende · Observa · Practica · Reflexiona
// ==========================================================================

import { MASTER_LESSON_IDEA_PRINCIPAL } from "../data/curriculum.js";
import { store } from "../store.js";

let currentLessonStage = 1; // 1: Descubre, 2: Comprende, 3: Observa, 4: Practica, 5: Reflexiona
let currentMovementStep = 1;

export function renderLeccionView() {
  const L = MASTER_LESSON_IDEA_PRINCIPAL;
  const isCompleted = store.isLessonCompleted(L.id);
  const checklistSaved = store.getChecklistState("chk-idea-principal");

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
            <span style="font-size: 0.82rem; color: var(--c-text-muted); margin-left: auto;">⏱ ${L.duration}</span>
          </div>

          <h1 class="lesson-hero-title" style="font-size: clamp(1.8rem, 3.2vw, 2.5rem); margin-bottom: 0.5rem;">
            ${L.title}
          </h1>
          <p style="font-size: 1.05rem; color: var(--c-text-secondary); margin-bottom: 1.25rem;">
            ${L.subtitle}: Distingue la verdad central de un pasaje de sus temas generales, detalles descriptivos y aplicaciones personales.
          </p>

          <!-- Barra de Progreso en 5 Etapas -->
          <div style="background: var(--c-surface); border-radius: var(--radius-lg); padding: 1rem; border: 1px solid var(--c-border-subtle); margin-top: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--c-carob); text-transform: uppercase;">
                Etapa ${currentLessonStage} de 5: ${STAGES[currentLessonStage - 1].name}
              </span>
              <span style="font-size: 0.82rem; font-weight: 700; color: var(--c-matcha-dark);">
                ${currentLessonStage * 20}% completado
              </span>
            </div>

            <!-- Botones de las 5 Etapas -->
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 0.4rem;">
              ${STAGES.map(st => `
                <button class="stage-tab-btn ${st.num === currentLessonStage ? 'active' : (st.num < currentLessonStage ? 'done' : '')}" data-stage="${st.num}" style="padding: 0.5rem 0.25rem; font-size: 0.8rem; font-weight: 600; border-radius: var(--radius-sm); border: 1.5px solid ${st.num === currentLessonStage ? 'var(--c-matcha)' : 'var(--c-border)'}; background: ${st.num === currentLessonStage ? 'var(--c-matcha)' : (st.num < currentLessonStage ? '#EBF3E8' : 'var(--c-surface)')}; color: ${st.num === currentLessonStage ? '#FFF' : 'var(--c-carob)'}; cursor: pointer;">
                  ${st.num}. ${st.name}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Contenido de la Etapa Activa -->
        <div class="stage-card" style="background: var(--c-surface); border-radius: var(--radius-xl); border: 1px solid var(--c-border-subtle); padding: 2.25rem 2rem; box-shadow: var(--shadow-sm); min-height: 480px;">
          ${renderStageContent(currentLessonStage, L, checklistSaved)}
        </div>

        <!-- Navegación entre Etapas (Anterior / Siguiente) -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--c-border-subtle);">
          ${currentLessonStage > 1 ? `
            <button id="btn-stage-prev" class="btn btn-secondary">
              &larr; Etapa ${currentLessonStage - 1}
            </button>
          ` : `
            <a href="#academia" class="btn btn-secondary">&larr; Volver a la Academia</a>
          `}

          ${currentLessonStage < 5 ? `
            <button id="btn-stage-next" class="btn btn-primary">
              Continuar a Etapa ${currentLessonStage + 1} &rarr;
            </button>
          ` : `
            <button id="btn-finish-lesson" class="btn btn-primary">
              ✓ Terminar lección y marcar completada
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
          ${e.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
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

        <!-- Cuatro Distinciones -->
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

        <!-- Relato «La lámpara del camino» -->
        <div class="narrative-box">
          <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem; color: var(--c-carob);">${e.narrative.title}</h3>
          <div style="font-size: 0.96rem; line-height: 1.65; color: var(--c-text-secondary);">
            ${e.narrative.text.split('\n\n').map(p => `<p>${p}</p>`).join('')}
          </div>
        </div>
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
          Observa cómo el método de los cinco movimientos nos permite encontrar la columna vertebral de un pasaje del Libro de Mormón:
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

        <!-- Pasaje y Desglose de Helamán 3 -->
        <div class="scripture-box">
          <div class="scripture-text" style="font-size: 1rem;">
            ${e.scriptureCase.text.replace(/\n/g, '<br><br>')}
          </div>
          <div class="scripture-ref">
            <span>${e.scriptureCase.ref}</span>
            <a href="${e.scriptureCase.link}" target="_blank" rel="noopener noreferrer" class="scripture-link">
              Leer en churchofjesuschrist.org &rarr;
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
            <h4 style="font-size: 1rem; color: var(--c-matcha-dark); margin-bottom: 0.65rem;">✓ Pistas para encontrarla:</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem; color: var(--c-text-secondary);">
              ${e.tips.map(t => `<li>• ${t}</li>`).join('')}
            </ul>
          </div>
          <div class="errors-box">
            <h4 style="font-size: 1rem; color: var(--c-error); margin-bottom: 0.65rem;">✗ Errores frecuentes:</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem; color: var(--c-text-secondary);">
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
    return `
      <div style="animation: fadeIn 0.25s ease-out;">
        <span class="badge badge-matcha" style="margin-bottom: 0.75rem;">${e.badge}</span>
        <h2 style="font-size: 1.6rem; color: var(--c-carob); margin-bottom: 0.5rem;">${e.title}</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
          Practica con Alma 32:21, responde las preguntas de comprobación y verifica tu criterio:
        </p>

        <!-- Actividad Guiada con Alma 32:21 -->
        <div style="background: var(--c-surface-warm); border-radius: var(--radius-lg); border: 1px solid var(--c-border); padding: 1.5rem; margin-bottom: 2rem;">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--c-matcha-dark); text-transform: uppercase; margin-bottom: 0.35rem;">Actividad de Desglose:</div>
          <div class="scripture-box" style="margin: 0.5rem 0 1rem;">
            <div class="scripture-text" style="font-size: 1rem;">${e.activityAlma.text}</div>
            <div class="scripture-ref">
              <span>${e.activityAlma.ref}</span>
              <a href="${e.activityAlma.link}" target="_blank" rel="noopener noreferrer" class="scripture-link">Ver en churchofjesuschrist.org &rarr;</a>
            </div>
          </div>

          <p style="font-size: 0.92rem; color: var(--c-text-secondary); margin-bottom: 1rem;">
            Formula mentalmente la idea principal en una oración completa. Luego haz clic para comparar:
          </p>
          <button id="btn-reveal-solution-stage" class="btn btn-secondary btn-sm">
            <span>Ver Solución de Alma 32:21</span>
          </button>

          <div id="alma-solution-stage-box" style="display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--c-border); font-size: 0.9rem;">
            <div><strong>Tema:</strong> ${e.activityAlma.solution.tema}</div>
            <div style="margin-top: 0.35rem; color: var(--c-matcha-dark);"><strong>Idea Principal:</strong> ${e.activityAlma.solution.idea}</div>
            <div style="margin-top: 0.35rem;"><strong>Apoyos:</strong> ${e.activityAlma.solution.apoyos}</div>
            <div style="margin-top: 0.35rem; color: var(--c-carob);"><strong>Aplicación:</strong> ${e.activityAlma.solution.aplicacion}</div>
          </div>
        </div>

        <!-- Lista de Comprobación -->
        <div style="margin-bottom: 2rem;">
          <h4 style="font-size: 1.1rem; color: var(--c-carob); margin-bottom: 0.5rem;">Lista de Comprobación (Checklist):</h4>
          <p style="font-size: 0.88rem; color: var(--c-text-secondary); margin-bottom: 0.75rem;">Marca los criterios que cumple tu idea principal redactada:</p>
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
          <h4 style="font-size: 1.1rem; color: var(--c-carob); margin-bottom: 0.75rem;">Preguntas con Retroalimentación Explicativa:</h4>
          ${e.quizzes.map((q, qIdx) => `
            <div class="quiz-container" data-quiz-id="${q.id}" style="margin-bottom: 1.25rem;">
              <div class="quiz-question">${qIdx + 1}. ${q.question}</div>
              <div class="quiz-options">
                ${q.options.map(opt => `
                  <div class="quiz-option" data-option-id="${opt.id}">
                    <div style="font-weight: 700; width: 22px;">${opt.id.split('-')[1].toUpperCase()}.</div>
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
          <textarea id="stage-reflection-input" class="textarea-control" rows="5" placeholder="¿Qué versículo recordaste? ¿Cuál es su idea principal y qué harás al respecto?"></textarea>
        </div>

        <button id="btn-save-stage-reflection" class="btn btn-primary">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          <span>Guardar en mi Diario Personal</span>
        </button>
      </div>

      <div>
        <h4 style="font-size: 1rem; color: var(--c-carob); margin-bottom: 0.5rem;">Fuentes oficiales consultadas:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.88rem;">
          ${e.sources.map(s => `
            <li>
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="scripture-link">🔗 ${s.title}</a>
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

export function initLeccionEvents(container, showToast) {
  // Cambio de Etapa directa mediante botones de cabecera
  const stageBtns = container.querySelectorAll(".stage-tab-btn");
  stageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentLessonStage = parseInt(btn.dataset.stage, 10);
      container.innerHTML = renderLeccionView();
      initLeccionEvents(container, showToast);
      window.scrollTo({ top: 180, behavior: "smooth" });
    });
  });

  // Botón Siguiente Etapa
  const btnNext = container.querySelector("#btn-stage-next");
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (currentLessonStage < 5) {
        currentLessonStage++;
        container.innerHTML = renderLeccionView();
        initLeccionEvents(container, showToast);
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
        container.innerHTML = renderLeccionView();
        initLeccionEvents(container, showToast);
        window.scrollTo({ top: 180, behavior: "smooth" });
      }
    });
  }

  // Finalizar lección
  const btnFinish = container.querySelector("#btn-finish-lesson");
  if (btnFinish) {
    btnFinish.addEventListener("click", () => {
      store.markLessonCompleted("idea-principal");
      showToast("¡Felicitaciones! Has completado todas las etapas de la Lección 1.4.", "success");
      setTimeout(() => {
        window.location.hash = "#mi-estudio";
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
        movDisplay.innerHTML = renderSingleMovement(MASTER_LESSON_IDEA_PRINCIPAL.etapa3_observa.movements, currentMovementStep);
      });
    });
  }

  // Eventos de Etapa 4 (Practica: Alma solution, checklist y quizzes)
  if (currentLessonStage === 4) {
    const btnReveal = container.querySelector("#btn-reveal-solution-stage");
    const almaBox = container.querySelector("#alma-solution-stage-box");
    if (btnReveal && almaBox) {
      btnReveal.addEventListener("click", () => {
        const isHidden = almaBox.style.display === "none";
        almaBox.style.display = isHidden ? "block" : "none";
        btnReveal.querySelector("span").textContent = isHidden ? "Ocultar Solución" : "Ver Solución de Alma 32:21";
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
        store.setChecklistState("chk-idea-principal", allChecked);
      });
    });

    const quizzes = MASTER_LESSON_IDEA_PRINCIPAL.etapa4_practica.quizzes;
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
          title: "Reflexión: Encuentra la idea principal",
          scriptureRef: "Helamán 3 / Alma 32",
          category: "Idea Principal",
          content: val,
          tags: ["Idea Principal", "Lección 1.4", "Reflexión"]
        });
        inp.value = "";
        showToast("¡Reflexión guardada con éxito en tu Diario Personal!", "success");
      });
    }
  }
}
