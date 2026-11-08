// ==========================================================================
// ENCUENTRA — VISTA: ACADEMIA DE APRENDIZAJE (REDISEÑADA)
// Nombres comprensibles: Comienza a descubrir · Comprende lo que lees · Profundiza · Estudia por tu cuenta
// ==========================================================================

import { CURRICULUM_LEVELS } from "../data/curriculum.js";
import { store } from "../store.js";

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
          <div class="level-icon-badge" style="width: 52px; height: 52px; font-size: 1.4rem;">
            ${getLevelIcon(currentLevel.id)}
          </div>
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.25rem;">
              <span class="badge badge-pistache">${currentLevel.badge}</span>
              <span style="font-size: 0.82rem; color: var(--c-text-muted);">${currentLevel.lessons.length} lecciones</span>
            </div>
            <h2 style="font-size: 1.55rem; margin-bottom: 0.35rem; color: var(--c-carob);">${currentLevel.title}</h2>
            <p style="margin-bottom: 0.5rem; color: var(--c-text-primary); font-size: 0.96rem; line-height: 1.5;">${currentLevel.tagline}</p>
            
            <div style="background: var(--c-surface-warm); padding: 0.85rem 1rem; border-radius: var(--radius-md); font-size: 0.88rem; color: var(--c-text-secondary); border-left: 3px solid var(--c-chai);">
              <strong style="color: var(--c-carob);">¿Qué aprenderás en esta etapa?</strong> ${currentLevel.whatYouWillLearn}
            </div>
          </div>
        </div>

        <!-- Cuadrícula de Lecciones del Nivel -->
        <div class="lessons-grid">
          ${currentLevel.lessons.map(lesson => {
            const isCompleted = store.isLessonCompleted(lesson.id);
            const isMaster = lesson.isMaster;
            // Solo la lección maestra (idea-principal) tiene contenido completo
            const isAvailable = isMaster;
            return `
              <div class="lesson-card ${isMaster ? 'card-matcha' : ''} ${!isAvailable ? 'lesson-coming-soon' : ''}">
                <div class="lesson-meta">
                  <span class="badge ${isMaster ? 'badge-matcha' : 'badge-carob'}">Lección ${lesson.number}</span>
                  <span class="lesson-duration">
                    <svg class="icon" style="width: 0.95rem; height: 0.95rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ${lesson.duration}
                  </span>
                </div>

                <h3 class="lesson-title" style="${!isAvailable ? 'opacity:0.7;' : ''}">${lesson.title}</h3>
                <p class="lesson-desc" style="${!isAvailable ? 'opacity:0.6;' : ''}">${lesson.desc}</p>

                <div class="lesson-card-footer">
                  ${isAvailable ? `
                    <span class="lesson-status-badge ${isCompleted ? 'text-success' : 'text-muted'}">
                      ${isCompleted ? '✓ Completada' : 'Disponible'}
                    </span>
                    <a href="#leccion/${lesson.id}" class="btn btn-sm ${isMaster ? 'btn-primary' : 'btn-secondary'}">
                      <span>${isMaster ? 'Iniciar Lección' : 'Ver Lección'}</span>
                      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  ` : `
                    <span class="lesson-status-badge text-muted" style="font-style:italic;">
                      🛠 En preparación
                    </span>
                    <span class="btn btn-sm" style="background:var(--c-surface-warm);color:var(--c-text-muted);cursor:not-allowed;border:1px solid var(--c-border);" title="Esta lección está en preparación">
                      Próximamente
                    </span>
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

function getLevelIcon(id) {
  switch (Number(id)) {
    case 1: return "🌱";
    case 2: return "📖";
    case 3: return "🔍";
    case 4: return "✨";
    default: return "📚";
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
