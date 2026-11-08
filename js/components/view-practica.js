// ==========================================================================
// ENCUENTRA — VISTA: PRACTICA LO APRENDIDO (HUB CONSOLIDADO)
// Integra: Guía de Estudio · Diccionario · Personajes · Recursos
// ==========================================================================

import { renderGuiaView, initGuiaEvents } from "./view-guia.js";
import { renderDiccionarioView, initDiccionarioEvents } from "./view-diccionario.js";
import { renderPersonajesView, initPersonajesEvents } from "./view-personajes.js";
import { renderRecursosView, initRecursosEvents } from "./view-recursos.js";

let activePracticaTab = "guia"; // "guia" | "diccionario" | "personajes" | "recursos"

export function setPracticaTab(tabKey) {
  if (["guia", "diccionario", "personajes", "recursos"].includes(tabKey)) {
    activePracticaTab = tabKey;
  }
}

export function renderPracticaView() {
  const TABS = [
    { key: "guia", label: "Guía de Estudio", icon: "✨", subtitle: "Asistente guiado paso a paso" },
    { key: "diccionario", label: "Diccionario", icon: "📖", subtitle: "Términos, doctrina y contexto" },
    { key: "personajes", label: "Personajes", icon: "👤", subtitle: "Hombres y mujeres de fe" },
    { key: "recursos", label: "Recursos Oficiales", icon: "🎬", subtitle: "Videos y manuales de la Iglesia" }
  ];

  return `
    <div class="explorer-header">
      <div class="container">
        <span class="badge badge-chai" style="margin-bottom: 0.5rem;">Herramientas Activas</span>
        <h1 style="margin-bottom: 0.5rem;">Practica lo Aprendido</h1>
        <p class="section-subtitle">
          Pon en práctica tus habilidades de estudio con nuestro asistente guiado, consulta el diccionario, conoce a los personajes de las Escrituras y accede a recursos multimedia oficiales.
        </p>

        <!-- Pestañas de las 4 Herramientas de Práctica -->
        <div style="display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.5rem;">
          ${TABS.map(tab => `
            <button class="level-tab-btn practica-tab-btn ${activePracticaTab === tab.key ? 'active' : ''}" data-tab="${tab.key}">
              <span>${tab.icon} ${tab.label}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Contenedor Dinámico del Submódulo Seleccionado -->
    <div id="practica-submodule-container">
      ${renderActiveSubmodule()}
    </div>
  `;
}

function renderActiveSubmodule() {
  switch (activePracticaTab) {
    case "guia": return renderGuiaView();
    case "diccionario": return renderDiccionarioView();
    case "personajes": return renderPersonajesView();
    case "recursos": return renderRecursosView();
    default: return renderGuiaView();
  }
}

export function initPracticaEvents(container, showToast) {
  // Manejador de cambio de pestañas superiores
  const tabBtns = container.querySelectorAll(".practica-tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;
      if (targetTab !== activePracticaTab) {
        activePracticaTab = targetTab;
        container.innerHTML = renderPracticaView();
        initPracticaEvents(container, showToast);
      }
    });
  });

  // Inicializar los eventos del submódulo activo
  const subContainer = container.querySelector("#practica-submodule-container");
  if (!subContainer) return;

  if (activePracticaTab === "guia") {
    initGuiaEvents(subContainer, showToast);
  } else if (activePracticaTab === "diccionario") {
    initDiccionarioEvents(subContainer, showToast);
  } else if (activePracticaTab === "personajes") {
    initPersonajesEvents(subContainer, showToast);
  } else if (activePracticaTab === "recursos") {
    initRecursosEvents(subContainer);
  }
}
