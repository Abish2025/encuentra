// ==========================================================================
// ENCUENTRA — VISTA: ACADEMIA DE APRENDIZAJE
// Nombres comprensibles: Comienza a descubrir · Comprende lo que lees · Profundiza · Estudia por tu cuenta
// ==========================================================================

import { CURRICULUM_LEVELS } from "../data/curriculum.js";
import { store } from "../store.js";
import { getSvgIcon } from "../icons.js";

let activeLevelId = 1;

export function renderAcademiaView() {
  const currentLevel = CURRICULUM_LEVELS.find(l => Number(l.id) === Number(activeLevelId)) || CURRICULUM_LEVELS[0];

  return `
    <div class="academy-header">
      <div class="container">
        <span class="badge badge-matcha" style="margin-bottom: 0.5rem;">Paso a Paso a tu Ritmo</span>
        <h1 style="margin-bottom: 0.5rem;">Aprende a Estudiar las Escrituras</h1>
        <p class="section-subtitle">
          Un camino progresivo en 4 etapas para que descubras la palabra de Dios con confianza, alegría y profundidad personal.
        </p>

        <!-- Selector de las 4 Etapas con Nombres Comprensibles -->
        <div class="level-nav-container">
          ${CURRICULUM_LEVELS.map(lvl => `
            <button class="level-tab-btn ${Number(lvl.id) === Number(activeLevelId) ? 'active' : ''}" data-level-id="${lvl.id}">
              ${lvl.badge.split('·')[0].trim()} · ${lvl.title}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="level-content-area">
      <div class="container">
        
        <!-- Tarjeta de Qué aprenderás en este nivel -->
        <div class="level-intro-card" style="border-left: 4px solid var(--c-matcha); background: var(--c-surface);">
          <div class="level-icon-badge" style="width: 52px; height: 52px;">
            <div style="width: 26px; height: 26px; display: flex; align-items: center; justify-content: center;">
              ${getLevelIcon(currentLevel.id)}
            </div>
          </div>
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
              <span class="badge badge-pistache">${currentLevel.badge}</span>
              <span style="font-size: 0.82rem; color: var(--c-text-muted);">${currentLevel.lessons.length} lecciones disponibles</span>
            </div>
            <h2 style="font-size: 1.55rem; margin-bottom: 0.35rem; color: var(--c-carob);">${currentLevel.title}</h2>
            <p style="margin-bottom: 0.5rem; color: var(--c-text-primary); font-size: 0.96rem; line-height: 1.5;">${currentLevel.tagline}</p>
            
            <div style="background: var(--c-surface-warm); padding: 0.85rem 1rem; border-radius: var(--radius-md); font-size: 0.88rem; color: var(--c-text-secondary); border-left: 3px solid var(--c-chai);">
              <strong style="color: var(--c-carob);">¿Qué aprenderás en esta etapa?</strong> ${currentLevel.whatYouWillLearn}
            </div>
          </div>
        </div>

        <!-- Cuadrícula de Lecciones del Nivel (Todas Habilitadas y Funcionales) -->
        <div class="lessons-grid">
          ${currentLevel.lessons.map(lesson => {
            const isCompleted = store.isLessonCompleted(lesson.id);
            const isMaster = lesson.isMaster;
            return `
              <div class="lesson-card ${isMaster ? 'card-matcha' : ''}">
                <div class="lesson-meta">
                  <span class="badge ${isMaster ? 'badge-matcha' : 'badge-carob'}">Lección ${lesson.number}</span>
                  <span class="lesson-duration" style="display: inline-flex; align-items: center; gap: 0.35rem;">
                    ${getSvgIcon("clock")}
                    <span>${lesson.duration}</span>
                  </span>
                </div>

                <h3 class="lesson-title">${lesson.title}</h3>
                <p class="lesson-desc">${lesson.desc}</p>

                <div class="lesson-card-footer">
                  <span class="lesson-status-badge ${isCompleted ? 'text-success' : 'text-muted'}" style="display: inline-flex; align-items: center; gap: 0.3rem;">
                    ${isCompleted ? `${getSvgIcon("check")} <span>Completada</span>` : `<span>Disponible</span>`}
                  </span>
                  <a href="#leccion/${lesson.id}" class="btn btn-sm ${isCompleted ? 'btn-secondary' : (isMaster ? 'btn-primary' : 'btn-primary')}">
                    <span>${isCompleted ? 'Repasar' : 'Comenzar'}</span>
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function getLevelIcon(id) {
  switch (Number(id)) {
    case 1: return getSvgIcon("sprout");
    case 2: return getSvgIcon("book");
    case 3: return getSvgIcon("search");
    case 4: return getSvgIcon("sparkles");
    default: return getSvgIcon("library");
  }
}

export function initAcademiaEvents(container) {
  const levelBtns = container.querySelectorAll(".level-tab-btn");
  levelBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const lvlId = btn.dataset.levelId;
      if (lvlId !== activeLevelId) {
        activeLevelId = lvlId;
        container.innerHTML = renderAcademiaView();
        initAcademiaEvents(container);
      }
    });
  });
}
