// ==========================================================================
// ENCUENTRA — VISTA: MI PROGRESO DE APRENDIZAJE
// Mide el desarrollo de habilidades y no la espiritualidad o fe personal
// ==========================================================================

import { store } from "../store.js";
import { CURRICULUM_LEVELS } from "../data/curriculum.js";

export function renderProgresoView() {
  const progress = store.getProgress();
  const completedLessons = progress.completedLessons || [];
  const exerciseStats = store.getExerciseStats();
  const entriesCount = store.getJournalEntries().length;
  const favsCount = store.getFavorites().length;

  // Total de lecciones en la plataforma
  const totalLessons = CURRICULUM_LEVELS.reduce((acc, lvl) => acc + lvl.lessons.length, 0);
  const percentage = Math.round((completedLessons.length / totalLessons) * 100);

  // Insignias de Habilidades alcanzadas (basadas en acciones reales de estudio)
  const badges = [
    {
      id: "b-first",
      title: "Primer Escudriñador",
      desc: "Completaste tu primera lección en la Academia.",
      icon: "🌱",
      unlocked: completedLessons.length >= 1
    },
    {
      id: "b-idea",
      title: "Maestro de la Idea Principal",
      desc: "Completaste la lección maestra 1.4.",
      icon: "💡",
      unlocked: completedLessons.includes("idea-principal")
    },
    {
      id: "b-writer",
      title: "Diario Activo",
      desc: "Has guardado al menos 3 notas o reflexiones en tu Diario.",
      icon: "✍️",
      unlocked: entriesCount >= 3
    },
    {
      id: "b-words",
      title: "Explorador Doctrinal",
      desc: "Guardaste al menos 2 términos en tus favoritos del Diccionario.",
      icon: "📖",
      unlocked: favsCount >= 2
    },
    {
      id: "b-quiz",
      title: "Analista de Preguntas",
      desc: "Has respondido al menos 2 ejercicios interactivos.",
      icon: "🎯",
      unlocked: exerciseStats.answered >= 2
    }
  ];

  return `
    <div class="explorer-header">
      <div class="container">
        <span class="badge badge-matcha" style="margin-bottom: 0.5rem;">Registro de Habilidades</span>
        <h1 style="margin-bottom: 0.5rem;">Mi Progreso de Estudio</h1>
        <p class="section-subtitle">
          Supervisa tus lecciones completadas, ejercicios realizados y notas acumuladas.
        </p>

        <div style="max-width: 650px; margin: 1rem auto 0; font-size: 0.85rem; color: var(--c-text-muted); font-style: italic;">
          * Nota pedagógica: Este panel mide el desarrollo de destrezas metodológicas de estudio, no la espiritualidad, fe ni el valor de una persona ante Dios.
        </div>
      </div>
    </div>

    <div class="container" style="padding: 3rem 1.5rem 5rem;">
      
      <!-- Cuadrícula de Estadísticas Reales -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">${completedLessons.length}</div>
          <div class="stat-label">Lecciones Completadas</div>
          <div style="font-size: 0.8rem; color: var(--c-text-muted); margin-top: 0.25rem;">de ${totalLessons} lecciones</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">${entriesCount}</div>
          <div class="stat-label">Notas en mi Diario</div>
          <div style="font-size: 0.8rem; color: var(--c-text-muted); margin-top: 0.25rem;">guardadas en local</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">${exerciseStats.answered}</div>
          <div class="stat-label">Ejercicios Realizados</div>
          <div style="font-size: 0.8rem; color: var(--c-text-muted); margin-top: 0.25rem;">${exerciseStats.correct} correctos</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">${favsCount}</div>
          <div class="stat-label">Términos en Favoritos</div>
          <div style="font-size: 0.8rem; color: var(--c-text-muted); margin-top: 0.25rem;">en tu diccionario</div>
        </div>
      </div>

      <!-- Barra de Progreso General -->
      <div class="card" style="margin-bottom: 2.5rem; padding: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.75rem;">
          <h2 style="font-size: 1.25rem; color: var(--c-carob); margin: 0;">Avance Global en la Academia</h2>
          <span style="font-weight: 700; color: var(--c-matcha-dark); font-size: 1.1rem;">${percentage}%</span>
        </div>
        
        <div style="background: var(--c-almond); height: 12px; border-radius: var(--radius-full); overflow: hidden; margin-bottom: 1.5rem;">
          <div style="background: linear-gradient(90deg, var(--c-matcha), var(--c-pistache-dark)); height: 100%; width: ${percentage}%; border-radius: var(--radius-full); transition: width 0.4s ease;"></div>
        </div>

        <!-- Progreso por cada nivel -->
        <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
          ${CURRICULUM_LEVELS.map(lvl => {
            const lvlLessons = lvl.lessons.map(l => l.id);
            const doneInLvl = completedLessons.filter(id => lvlLessons.includes(id)).length;
            const lvlPct = Math.round((doneInLvl / lvlLessons.length) * 100);
            return `
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem; padding: 0.5rem 0; border-bottom: 1px solid var(--c-border-subtle);">
                <div>
                  <strong style="color: var(--c-carob);">${lvl.title}</strong>
                  <span style="color: var(--c-text-muted); font-size: 0.82rem; margin-left: 0.5rem;">(${doneInLvl} de ${lvlLessons.length})</span>
                </div>
                <span class="badge ${lvlPct === 100 ? 'badge-matcha' : 'badge-vanilla'}">${lvlPct}%</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Insignias de Competencias -->
      <div>
        <h2 style="font-size: 1.45rem; color: var(--c-carob); margin-bottom: 0.5rem;">Insignias de Competencias</h2>
        <p style="color: var(--c-text-secondary); margin-bottom: 1.5rem;">
          Reconocimientos prácticos a medida que ejercitas tus destrezas de observación y análisis:
        </p>

        <div class="badges-grid">
          ${badges.map(b => `
            <div class="badge-item ${b.unlocked ? 'unlocked' : 'locked'}">
              <div class="badge-icon-box">${b.icon}</div>
              <h3 style="font-size: 1.05rem; color: var(--c-carob); margin-bottom: 0.35rem;">${b.title}</h3>
              <p style="font-size: 0.85rem; color: var(--c-text-secondary); margin: 0; line-height: 1.4;">${b.desc}</p>
              <div style="margin-top: 0.75rem; font-size: 0.78rem; font-weight: 700; color: ${b.unlocked ? 'var(--c-matcha-dark)' : 'var(--c-text-muted)'};">
                ${b.unlocked ? '✓ Desbloqueada' : 'Bloqueada'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Control de Privacidad y Borrado de Datos -->
      <div style="margin-top: 4rem; padding: 2rem; background: var(--c-surface-warm); border-radius: var(--radius-lg); border: 1px solid var(--c-border);">
        <h3 style="font-size: 1.15rem; color: var(--c-carob); margin-bottom: 0.5rem;">Privacidad y Control de tus Datos</h3>
        <p style="font-size: 0.9rem; color: var(--c-text-secondary); margin-bottom: 1.25rem; line-height: 1.55;">
          ENCUENTRA respeta al 100% tu privacidad: no almacenamos contraseñas, correos ni reflexiones en servidores externos. Todo queda en el almacenamiento local de tu navegador. Si deseas reiniciar tu progreso o borrar tus notas, puedes hacerlo con el botón a continuación.
        </p>
        <button id="btn-reset-all-data" class="btn btn-outline" style="color: var(--c-error); border-color: rgba(182, 83, 69, 0.5);">
          Borrar todos mis datos locales de ENCUENTRA
        </button>
      </div>

    </div>
  `;
}

export function initProgresoEvents(container, showToast) {
  const btnReset = container.querySelector("#btn-reset-all-data");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (confirm("⚠️ ¿Estás completamente seguro de que deseas eliminar todas tus notas, checklists y progreso? Esta acción no se puede deshacer.")) {
        store.clearAllUserData();
        showToast("Todos los datos locales han sido borrados de forma segura.", "info");
        container.innerHTML = renderProgresoView();
        initProgresoEvents(container, showToast);
      }
    });
  }
}
