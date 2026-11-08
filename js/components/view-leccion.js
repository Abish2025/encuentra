// ==========================================================================
// ENCUENTRA — VISTA: LECCIÓN MAESTRA «ENCUENTRA LA IDEA PRINCIPAL»
// Cumple con los 19 componentes obligatorios de la arquitectura pedagógica
// ==========================================================================

import { MASTER_LESSON_IDEA_PRINCIPAL } from "../data/curriculum.js";
import { store } from "../store.js";

let currentMovementStep = 1;

export function renderLeccionView() {
  const L = MASTER_LESSON_IDEA_PRINCIPAL;
  const isCompleted = store.isLessonCompleted(L.id);
  const checklistSaved = store.getChecklistState("chk-idea-principal");

  return `
    <article class="lesson-layout">
      <div class="container-narrow">
        
        <!-- 1. Encabezado, nivel y número -->
        <div class="lesson-hero">
          <div class="lesson-breadcrumbs">
            <a href="#academia">Academia</a> &rsaquo; 
            <a href="#academia">${L.levelTitle}</a> &rsaquo; 
            <span>Lección ${L.number}</span>
          </div>

          <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.75rem;">
            <span class="badge badge-matcha">Lección ${L.number}</span>
            <span class="badge badge-chai">${L.badge}</span>
            <span style="font-size: 0.85rem; color: var(--c-text-muted); margin-left: auto;">
              ⏱ ${L.duration}
            </span>
          </div>

          <!-- 2 & 3. Título y descripción breve -->
          <h1 class="lesson-hero-title">${L.title}</h1>
          <p style="font-size: 1.15rem; color: var(--c-text-secondary); margin-bottom: 1.5rem;">
            ${L.subtitle}: Aprende a distinguir con precisión la verdad central de un pasaje de sus temas generales, detalles ilustrativos y aplicaciones personales.
          </p>

          <!-- 5. Objetivo de aprendizaje -->
          <div class="lesson-objective-box">
            <div class="lesson-objective-title">Objetivo de Aprendizaje</div>
            <p style="margin: 0; font-size: 0.95rem; color: var(--c-text-primary); line-height: 1.55;">
              ${L.objective}
            </p>
          </div>
        </div>

        <!-- 6. Introducción -->
        <section class="lesson-section" style="margin-bottom: 3rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--c-carob);">1. Introducción: El latido central del pasaje</h2>
          <div style="font-size: 1.05rem; line-height: 1.7; color: var(--c-text-secondary);">
            ${L.intro.split('\n\n').map(p => `<p>${p}</p>`).join('')}
          </div>
        </section>

        <!-- 7 & 8. Explicación sencilla y profunda: Las 4 Cosas que no son lo mismo -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">2. Cuatro cosas que no son lo mismo</h2>
          <p style="color: var(--c-text-secondary); font-size: 1rem;">
            El error más común al estudiar es mezclar estas cuatro dimensiones. Observa con atención sus diferencias:
          </p>

          <div class="distinctions-grid">
            ${L.distinctions.map(d => `
              <div class="distinction-card ${d.type}">
                <div class="distinction-tag text-${d.tagColor}">${d.title}</div>
                <h3 style="font-size: 1.2rem; margin-bottom: 0.35rem; color: var(--c-carob);">${d.question}</h3>
                <div style="font-size: 0.82rem; font-weight: 700; color: var(--c-text-muted); margin-bottom: 0.65rem;">
                  Formato: <span style="font-weight: 500; color: var(--c-text-primary);">${d.format}</span>
                </div>
                <p style="font-size: 0.9rem; color: var(--c-text-secondary); margin-bottom: 0.75rem; line-height: 1.5;">
                  ${d.explanation}
                </p>
                <div style="background: rgba(0,0,0,0.03); padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.86rem; border-left: 2px solid var(--c-carob);">
                  <strong>Ejemplo:</strong> ${d.example}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 9. Ejemplo narrativo original: «La lámpara del camino» -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--c-carob);">3. Ejemplo Narrativo: «La lámpara del camino»</h2>
          <div class="narrative-box">
            <h3 style="font-size: 1.35rem; margin-bottom: 1rem; color: var(--c-carob);">${L.narrativeExample.title}</h3>
            <div style="font-size: 1rem; line-height: 1.7; color: var(--c-text-secondary);">
              ${L.narrativeExample.text.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
            <div class="callout callout-principle" style="margin-top: 1.5rem; margin-bottom: 0;">
              <div class="callout-header">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span>Conclusión Pedagógica</span>
              </div>
              <div class="callout-body">
                <strong>${L.narrativeExample.takeaway}</strong>
              </div>
            </div>
          </div>
        </section>

        <!-- 11. El método de cinco movimientos (Demostración interactiva paso a paso) -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">4. El Método de los Cinco Movimientos</h2>
          <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
            Sigue estos cinco pasos secuenciales cada vez que abordes un párrafo o bloque de versículos:
          </p>

          <div class="movements-stepper">
            <div class="movements-nav">
              ${L.fiveMovements.map(m => `
                <button class="movement-btn ${m.step === currentMovementStep ? 'active' : ''}" data-step="${m.step}">
                  <span class="movement-step-number">${m.step}</span>
                  <span>${m.name}</span>
                </button>
              `).join('')}
            </div>

            <div id="movement-content-display" class="movement-body">
              ${renderMovementStep(currentMovementStep)}
            </div>
          </div>
        </section>

        <!-- 10. Aplicación del método a Helamán 3:27–30 -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">5. Aplicación del Método en las Escrituras: Helamán 3:27–30</h2>
          <p style="color: var(--c-text-secondary); margin-bottom: 1rem;">
            Veamos cómo funciona el método en un pasaje canónico del Libro de Mormón:
          </p>

          <div class="scripture-box">
            <div class="scripture-text">
              ${L.scriptureExample.passage.replace(/\n/g, '<br><br>')}
            </div>
            <div class="scripture-ref">
              <span>${L.scriptureExample.reference}</span>
              <a href="${L.scriptureExample.link}" target="_blank" rel="noopener noreferrer" class="scripture-link">
                Leer en churchofjesuschrist.org &rarr;
              </a>
            </div>
          </div>

          <!-- Desglose de Helamán 3 -->
          <div style="background: var(--c-surface); border-radius: var(--radius-lg); border: 1.5px solid var(--c-border); padding: 1.75rem; margin-top: 1.5rem;">
            <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--c-carob);">Desglose Analítico:</h3>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <div style="padding: 0.75rem 1rem; background: #F8FAF7; border-left: 3px solid var(--c-pistache); border-radius: var(--radius-sm);">
                <strong style="color: var(--c-carob);">Tema:</strong> ${L.scriptureExample.analysis.tema}
              </div>
              <div style="padding: 0.75rem 1rem; background: #F2F7EF; border-left: 4px solid var(--c-matcha); border-radius: var(--radius-sm);">
                <strong style="color: var(--c-matcha-dark);">Idea Principal:</strong> ${L.scriptureExample.analysis.ideaPrincipal}
              </div>
              <div style="padding: 0.75rem 1rem; background: #FAF5EE; border-left: 3px solid var(--c-chai); border-radius: var(--radius-sm);">
                <strong style="color: var(--c-chai-dark);">Detalles de Apoyo:</strong> ${L.scriptureExample.analysis.detalles}
              </div>
              <div style="padding: 0.75rem 1rem; background: var(--c-surface-warm); border-left: 3px solid var(--c-carob); border-radius: var(--radius-sm);">
                <strong style="color: var(--c-carob);">Aplicación Personal:</strong> ${L.scriptureExample.analysis.aplicacion}
              </div>
            </div>
          </div>
        </section>

        <!-- 12 & 13. Pistas y Errores Frecuentes -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 1rem; color: var(--c-carob);">6. Pistas clave y Errores frecuentes</h2>
          
          <div class="tips-errors-grid">
            <div class="tips-box">
              <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--c-matcha-dark); display: flex; align-items: center; gap: 0.5rem;">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                Pistas para encontrarla
              </h3>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.92rem; color: var(--c-text-secondary);">
                ${L.tips.map(tip => `<li>✓ ${tip}</li>`).join('')}
              </ul>
            </div>

            <div class="errors-box">
              <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--c-error); display: flex; align-items: center; gap: 0.5rem;">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                Errores que debes evitar
              </h3>
              <div style="display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.9rem;">
                ${L.frequentErrors.map(err => `
                  <div>
                    <strong style="color: var(--c-carob);">${err.title}:</strong>
                    <span style="color: var(--c-text-secondary);"> ${err.explanation}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- 17. Lista de comprobación interactiva -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">7. Lista de Comprobación de la Idea Principal</h2>
          <p style="color: var(--c-text-secondary); margin-bottom: 1rem;">
            Antes de dar por buena tu idea principal redactada, verifica que cumpla con estos seis criterios de calidad:
          </p>

          <div class="checklist" id="lesson-checklist-container">
            ${L.checklist.map(item => {
              const checked = checklistSaved.includes(item.id);
              return `
                <label class="checklist-item ${checked ? 'checked' : ''}" data-chk-id="${item.id}">
                  <input type="checkbox" ${checked ? 'checked' : ''}>
                  <span>${item.text}</span>
                </label>
              `;
            }).join('')}
          </div>
        </section>

        <!-- 15. Ejercicios de comprensión interactivos con retroalimentación formativa -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">8. Ejercicios de Comprensión</h2>
          <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
            Pon a prueba tu criterio pedagógico. No solo descubrirás si acertaste, sino la razón doctrinal y metodológica detrás de cada opción.
          </p>

          ${L.quizzes.map((q, qIdx) => `
            <div class="quiz-container" data-quiz-id="${q.id}">
              <div class="quiz-question">${qIdx + 1}. ${q.question}</div>
              <div class="quiz-options">
                ${q.options.map(opt => `
                  <div class="quiz-option" data-option-id="${opt.id}" data-correct="${opt.isCorrect}">
                    <div style="font-weight: 700; width: 22px;">${opt.id.split('-')[1].toUpperCase()}.</div>
                    <div style="flex-grow: 1;">${opt.text}</div>
                  </div>
                `).join('')}
              </div>
              <div class="quiz-feedback" id="feedback-${q.id}"></div>
            </div>
          `).join('')}
        </section>

        <!-- 14. Actividad práctica guiada con Alma 32:21 -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">9. Actividad Práctica: Alma 32:21</h2>
          <p style="color: var(--c-text-secondary); margin-bottom: 1rem;">
            ${L.practicalActivity.instructions}
          </p>

          <div class="scripture-box">
            <div class="scripture-text">${L.practicalActivity.scriptureText}</div>
            <div class="scripture-ref">
              <span>${L.practicalActivity.scriptureRef}</span>
              <a href="${L.practicalActivity.sourceLink}" target="_blank" rel="noopener noreferrer" class="scripture-link">
                Ver en la biblioteca oficial &rarr;
              </a>
            </div>
          </div>

          <div style="background: var(--c-surface); border-radius: var(--radius-lg); border: 1px solid var(--c-border); padding: 1.5rem; margin-top: 1rem;">
            <p style="font-size: 0.95rem; color: var(--c-text-secondary); margin-bottom: 1rem;">
              Intenta redactar mentalmente la idea principal de Alma 32:21 en una sola oración. Cuando lo tengas listo, presiona el botón para comparar tu respuesta con la solución pedagógica:
            </p>
            <button id="btn-reveal-solution" class="btn btn-secondary">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <span>Ver Solución y Desglose de Alma 32:21</span>
            </button>

            <div id="alma-solution-box" style="display: none; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px dashed var(--c-border);">
              <h4 style="margin-bottom: 0.75rem; color: var(--c-matcha-dark);">Desglose del Modelo:</h4>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.92rem;">
                <li><strong>Tema:</strong> ${L.practicalActivity.expectedSolution.tema}</li>
                <li><strong>Idea Principal:</strong> ${L.practicalActivity.expectedSolution.ideaPrincipal}</li>
                <li><strong>Detalles de Apoyo:</strong> ${L.practicalActivity.expectedSolution.detalles}</li>
                <li><strong>Aplicación:</strong> ${L.practicalActivity.expectedSolution.aplicacion}</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 16. Reflexión personal conectada al Diario -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--c-carob);">10. Reflexión Personal</h2>
          <p style="color: var(--c-text-secondary); margin-bottom: 1rem;">
            ${L.personalReflectionPrompt}
          </p>

          <div class="card card-vanilla">
            <div class="form-group">
              <label class="form-label" for="lesson-reflection-input">Tu reflexión de estudio (se guardará de forma privada en tu Diario):</label>
              <textarea id="lesson-reflection-input" class="textarea-control" rows="4" placeholder="Escribe aquí tu análisis o el versículo que vino a tu mente..."></textarea>
            </div>
            <button id="btn-save-reflection" class="btn btn-primary">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              <span>Guardar en mi Diario Personal</span>
            </button>
          </div>
        </section>

        <!-- 18. Referencias y Fuentes Oficiales -->
        <section class="lesson-section" style="margin-bottom: 3.5rem;">
          <h3 style="font-size: 1.2rem; margin-bottom: 0.75rem; color: var(--c-carob);">Fuentes y Referencias Oficiales</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem;">
            ${L.sources.map(s => `
              <li>
                <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="scripture-link">
                  🔗 ${s.title}
                </a>
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- 19. Navegación a anterior/siguiente y botón de completar -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; padding-top: 2rem; border-top: 2px solid var(--c-border-subtle);">
          <a href="#academia" class="btn btn-secondary">
            &larr; Volver a la Academia
          </a>

          <button id="btn-mark-completed" class="btn ${isCompleted ? 'btn-outline' : 'btn-primary'}">
            ${isCompleted ? '✓ Lección Completada' : 'Marcar Lección como Completada'}
          </button>
        </div>

      </div>
    </article>
  `;
}

function renderMovementStep(stepNumber) {
  const m = MASTER_LESSON_IDEA_PRINCIPAL.fiveMovements.find(item => item.step === stepNumber);
  if (!m) return "";
  return `
    <div style="animation: fadeIn 0.25s ease-out;">
      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span class="badge badge-matcha">Movimiento ${m.step} de 5</span>
        <h4 style="margin: 0; font-size: 1.25rem; color: var(--c-carob);">${m.name}</h4>
      </div>
      <p style="font-size: 1.05rem; line-height: 1.6; color: var(--c-text-primary); margin-bottom: 1rem;">
        ${m.instruction}
      </p>
      <div class="callout callout-tip" style="margin: 0;">
        <div class="callout-header">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          <span>Consejo Práctico:</span>
        </div>
        <div class="callout-body">${m.hint}</div>
      </div>
    </div>
  `;
}

export function initLeccionEvents(container, showToast) {
  // Stepper de los 5 Movimientos
  const movementBtns = container.querySelectorAll(".movement-btn");
  const display = container.querySelector("#movement-content-display");
  movementBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      movementBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const step = parseInt(btn.dataset.step, 10);
      currentMovementStep = step;
      display.innerHTML = renderMovementStep(step);
    });
  });

  // Checklist interactiva guardada en store
  const checkItems = container.querySelectorAll(".checklist-item");
  checkItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const chk = item.querySelector("input[type='checkbox']");
      if (e.target !== chk) {
        chk.checked = !chk.checked;
      }
      item.classList.toggle("checked", chk.checked);

      // Guardar en store
      const allChecked = Array.from(container.querySelectorAll(".checklist-item input:checked"))
        .map(input => input.closest(".checklist-item").dataset.chkId);
      store.setChecklistState("chk-idea-principal", allChecked);
    });
  });

  // Quizzes interactivos con feedback explicativo
  const quizzes = MASTER_LESSON_IDEA_PRINCIPAL.quizzes;
  quizzes.forEach(q => {
    const quizContainer = container.querySelector(`[data-quiz-id="${q.id}"]`);
    if (!quizContainer) return;
    const options = quizContainer.querySelectorAll(".quiz-option");
    const feedbackBox = quizContainer.querySelector(`#feedback-${q.id}`);

    options.forEach(opt => {
      opt.addEventListener("click", () => {
        options.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");

        const optId = opt.dataset.optionId;
        const optObj = q.options.find(o => o.id === optId);
        if (optObj) {
          feedbackBox.className = `quiz-feedback is-visible ${optObj.isCorrect ? 'correct' : 'incorrect'}`;
          feedbackBox.innerHTML = `
            <strong>${optObj.isCorrect ? '¡Correcto!' : 'Atención al análisis:'}</strong> ${optObj.feedback}
          `;
          store.recordExerciseAnswer(q.id, optObj.isCorrect);
        }
      });
    });
  });

  // Revelar Solución de Alma 32:21
  const btnReveal = container.querySelector("#btn-reveal-solution");
  const almaBox = container.querySelector("#alma-solution-box");
  if (btnReveal && almaBox) {
    btnReveal.addEventListener("click", () => {
      const isHidden = almaBox.style.display === "none";
      almaBox.style.display = isHidden ? "block" : "none";
      btnReveal.querySelector("span").textContent = isHidden ? "Ocultar Solución" : "Ver Solución y Desglose de Alma 32:21";
    });
  }

  // Guardar Reflexión en Diario
  const btnSaveRef = container.querySelector("#btn-save-reflection");
  const reflectionInput = container.querySelector("#lesson-reflection-input");
  if (btnSaveRef && reflectionInput) {
    btnSaveRef.addEventListener("click", () => {
      const text = reflectionInput.value.trim();
      if (!text) {
        showToast("Por favor escribe una reflexión antes de guardar.", "warning");
        return;
      }
      store.addJournalEntry({
        title: "Reflexión: Encuentra la idea principal",
        scriptureRef: "Helamán 3 / Alma 32",
        category: "Idea Principal",
        content: text,
        tags: ["Lección 1.4", "Idea Principal", "Reflexión"]
      });
      reflectionInput.value = "";
      showToast("¡Reflexión guardada con éxito en tu Diario Personal!", "success");
    });
  }

  // Marcar como Completada
  const btnComplete = container.querySelector("#btn-mark-completed");
  if (btnComplete) {
    btnComplete.addEventListener("click", () => {
      store.markLessonCompleted("idea-principal");
      btnComplete.textContent = "✓ Lección Completada";
      btnComplete.className = "btn btn-outline";
      showToast("¡Felicitaciones! Has completado la Lección 1.4.", "success");
    });
  }
}
