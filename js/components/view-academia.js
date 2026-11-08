// ==========================================================================
// ENCUENTRA — VISTA: ACADEMIA DE APRENDIZAJE
// ==========================================================================

import { CURRICULUM_LEVELS } from "../data/curriculum.js";
import { store } from "../store.js";

let activeLevelId = 1;

export function renderAcademiaView() {
  const currentLevel = CURRICULUM_LEVELS.find(l => l.id === activeLevelId) || CURRICULUM_LEVELS[0];

  return `
    <div class="academy-header">
      <div class="container">
        <span class="badge badge-matcha" style="margin-bottom: 0.75rem;">Academia de Aprendizaje</span>
        <h1 style="margin-bottom: 0.75rem;">Aprende a Estudiar las Escrituras</h1>
        <p class="section-subtitle">
          Un plan de formación sistemático de 4 niveles para cultivar hábitos sólidos, comprensión contextual, análisis doctrinal y autonomía en el estudio.
        </p>

        <!-- Selector de Niveles -->
        <div class="level-nav-container">
          ${CURRICULUM_LEVELS.map(lvl => `
            <button class="level-tab-btn ${lvl.id === activeLevelId ? 'active' : ''}" data-level-id="${lvl.id}">
              ${lvl.title.split('—')[0].trim()} · ${lvl.badge}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="level-content-area">
      <div class="container">
        <!-- Tarjeta de Introducción del Nivel -->
        <div class="level-intro-card">
          <div class="level-icon-badge">
            <span style="font-size: 1.5rem; font-weight: 700;">N${currentLevel.id}</span>
          </div>
          <div>
            <h2 style="font-size: 1.5rem; margin-bottom: 0.35rem; color: var(--c-carob);">${currentLevel.title}</h2>
            <p style="margin: 0; color: var(--c-text-secondary); font-size: 0.98rem;">${currentLevel.description}</p>
          </div>
        </div>

        <!-- Cuadrícula de Lecciones -->
        <div class="lessons-grid">
          ${currentLevel.lessons.map(lesson => {
            const isCompleted = store.isLessonCompleted(lesson.id);
            const isMaster = lesson.isMaster;
            return `
              <div class="lesson-card ${isMaster ? 'card-matcha' : ''}">
                <div class="lesson-meta">
                  <span class="badge ${isMaster ? 'badge-matcha' : 'badge-carob'}">Lección ${lesson.number}</span>
                  <span class="lesson-duration">
                    <svg class="icon" style="width: 0.95rem; height: 0.95rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ${lesson.duration}
                  </span>
                </div>

                <h3 class="lesson-title">${lesson.title}</h3>
                <p class="lesson-desc">${lesson.desc}</p>

                <div class="lesson-card-footer">
                  <span class="lesson-status-badge ${isCompleted ? 'text-success' : 'text-muted'}">
                    ${isCompleted ? '✓ Completada' : 'Pendiente'}
                  </span>
                  ${isMaster ? `
                    <a href="#leccion/${lesson.id}" class="btn btn-sm btn-primary">
                      <span>Estudiar ahora</span>
                      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  ` : `
                    <a href="#leccion/idea-principal" class="btn btn-sm btn-secondary" title="Lección demostrativa disponible">
                      <span>Ver lección</span>
                    </a>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

export function initAcademiaEvents(container) {
  const levelBtns = container.querySelectorAll(".level-tab-btn");
  levelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const lvlId = parseInt(btn.dataset.levelId, 10);
      if (lvlId !== activeLevelId) {
        activeLevelId = lvlId;
        container.innerHTML = renderAcademiaView();
        initAcademiaEvents(container);
      }
    });
  });
}
