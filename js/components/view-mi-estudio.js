// ==========================================================================
// ENCUENTRA — VISTA: MI ESTUDIO PERSONAL (CUADERNO Y PROGRESO INTEGRADO)
// Unifica: Mi Diario · Mis Habilidades & Progreso · Mis Favoritos
// ==========================================================================

import { renderDiarioView, initDiarioEvents } from "./view-diario.js";
import { renderProgresoView, initProgresoEvents } from "./view-progreso.js";
import { DICTIONARY_TERMS } from "../data/dictionary.js";
import { store } from "../store.js";

let activeEstudioTab = "diario"; // "diario" | "progreso" | "favoritos"

export function setMiEstudioTab(tabKey) {
  if (["diario", "progreso", "favoritos"].includes(tabKey)) {
    activeEstudioTab = tabKey;
  }
}

export function renderMiEstudioView() {
  const entriesCount = store.getJournalEntries().length;
  const progress = store.getProgress();
  const completedCount = (progress.completedLessons || []).length;
  const favorites = store.getFavorites();

  const TABS = [
    { key: "diario", label: `Mi Diario (${entriesCount})`, icon: "✍️" },
    { key: "progreso", label: `Mis Habilidades (${completedCount})`, icon: "🎯" },
    { key: "favoritos", label: `Mis Favoritos (${favorites.length})`, icon: "★" }
  ];

  return `
    <div class="explorer-header">
      <div class="container">
        <span class="badge badge-matcha" style="margin-bottom: 0.5rem;">Tu Espacio Privado</span>
        <h1 style="margin-bottom: 0.5rem;">Mi Estudio Personal</h1>
        <p class="section-subtitle">
          Tus reflexiones, notas de las Escrituras, habilidades aprendidas y términos favoritos guardados de forma segura en tu propio dispositivo.
        </p>

        <!-- Pestañas de Mi Estudio -->
        <div style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.5rem;">
          ${TABS.map(tab => `
            <button class="level-tab-btn estudio-tab-btn ${activeEstudioTab === tab.key ? 'active' : ''}" data-tab="${tab.key}">
              <span>${tab.icon} ${tab.label}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Contenido Activo de Mi Estudio -->
    <div id="mi-estudio-submodule-container">
      ${renderActiveEstudioSubmodule(favorites)}
    </div>
  `;
}

function renderActiveEstudioSubmodule(favorites) {
  if (activeEstudioTab === "diario") {
    return renderDiarioView();
  }
  if (activeEstudioTab === "progreso") {
    return renderProgresoView();
  }
  // FAVORITOS
  const favTerms = DICTIONARY_TERMS.filter(t => favorites.includes(t.id));
  return `
    <div class="container" style="padding: 2.5rem 1.5rem 5rem;">
      <div style="margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.4rem; color: var(--c-carob); margin-bottom: 0.25rem;">Términos Favoritos Guardados</h2>
        <p style="color: var(--c-text-secondary); font-size: 0.95rem;">Palabras y conceptos doctrinales que marcaste con estrella para repasar:</p>
      </div>

      ${favTerms.length > 0 ? `
        <div class="dictionary-grid">
          ${favTerms.map(t => `
            <div class="term-card">
              <div class="term-header">
                <span class="badge badge-matcha">${t.category}</span>
                <span style="color: #E29B38;">★</span>
              </div>
              <h3 class="term-title">${t.term}</h3>
              <p class="term-definition">${t.simpleDef}</p>
              <div style="margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--c-border-subtle); font-size: 0.85rem; color: var(--c-text-muted);">
                ${t.references.length} referencias oficiales
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div style="text-align: center; padding: 3.5rem 1rem; background: var(--c-surface); border-radius: var(--radius-lg); border: 1px dashed var(--c-border);">
          <p style="font-size: 1.1rem; color: var(--c-text-muted); margin-bottom: 0.5rem;">Aún no tienes términos favoritos guardados.</p>
          <p style="font-size: 0.9rem; color: var(--c-text-secondary); margin-bottom: 1rem;">Ve al Diccionario en la sección Practica y haz clic en la estrella de cualquier palabra.</p>
          <a href="#practica" class="btn btn-sm btn-secondary">Ir a Practica &rarr;</a>
        </div>
      `}
    </div>
  `;
}

export function initMiEstudioEvents(container, showToast) {
  const tabBtns = container.querySelectorAll(".estudio-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;
      if (targetTab !== activeEstudioTab) {
        activeEstudioTab = targetTab;
        container.innerHTML = renderMiEstudioView();
        initMiEstudioEvents(container, showToast);
      }
    });
  });

  const subContainer = container.querySelector("#mi-estudio-submodule-container");
  if (!subContainer) return;

  if (activeEstudioTab === "diario") {
    initDiarioEvents(subContainer, showToast);
  } else if (activeEstudioTab === "progreso") {
    initProgresoEvents(subContainer, showToast);
  }
}
