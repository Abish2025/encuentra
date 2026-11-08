// ==========================================================================
// ENCUENTRA — VISTA: PERSONAJES DE LAS ESCRITURAS
// ==========================================================================

import { SCRIPTURE_CHARACTERS } from "../data/characters.js";
import { store } from "../store.js";
import { getSvgIcon } from "../icons.js";

let selectedWorkFilter = "Todos";
let activeModalCharacterId = null;

export function renderPersonajesView() {
  const works = ["Todos", "Libro de Mormón", "Nuevo Testamento", "Antiguo Testamento"];

  const filtered = SCRIPTURE_CHARACTERS.filter(c => {
    if (selectedWorkFilter !== "Todos" && c.work !== selectedWorkFilter) return false;
    return true;
  });

  const activeChar = activeModalCharacterId ? SCRIPTURE_CHARACTERS.find(c => c.id === activeModalCharacterId) : null;

  return `
    <div class="explorer-header">
      <div class="container">
        <span class="badge badge-pistache" style="margin-bottom: 0.5rem;">Hombres y Mujeres de Fe</span>
        <h1 style="margin-bottom: 0.5rem;">Personajes de las Escrituras</h1>
        <p class="section-subtitle">
          Descubre sus épocas, sus pruebas, las decisiones que marcaron su destino y lo que sus vidas nos enseñan acerca de Jesucristo.
        </p>

        <!-- Filtros por Obra Canónica -->
        <div class="pill-filters" style="justify-content: center; margin-top: 1.5rem;">
          ${works.map(w => `
            <button class="pill-btn char-filter-btn ${selectedWorkFilter === w ? 'active' : ''}" data-work="${w}">
              ${w}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="container" style="padding: 3rem 1.5rem 5rem;">
      <div class="characters-grid">
        ${filtered.map(char => `
          <div class="character-card" data-char-id="${char.id}" style="cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
              <div class="character-avatar-badge">${char.avatarText}</div>
              <span class="badge badge-matcha">${char.work}</span>
            </div>

            <h3 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 0.25rem;">${char.name}</h3>
            <div style="font-size: 0.88rem; font-weight: 600; color: var(--c-matcha-dark); margin-bottom: 0.5rem;">${char.title}</div>
            <div style="font-size: 0.8rem; color: var(--c-text-muted); margin-bottom: 0.85rem;">Época: ${char.era}</div>

            <p style="font-size: 0.92rem; color: var(--c-text-secondary); line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">
              ${char.summary}
            </p>

            <div style="padding-top: 0.85rem; border-top: 1px solid var(--c-border-subtle); display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--c-carob); font-weight: 600;">Ver biografía y decisiones &rarr;</span>
              <span style="font-size: 0.78rem; color: var(--c-text-muted);">${char.references.length} pasajes</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Modal Detallado de Personaje -->
    ${activeChar ? renderCharacterModal(activeChar) : ''}
  `;
}

function renderCharacterModal(char) {
  return `
    <div class="modal-overlay" id="char-modal-overlay">
      <div class="modal-dialog">
        <button class="modal-close-btn" id="btn-close-char-modal" aria-label="Cerrar modal">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
          <div class="character-avatar-badge" style="width: 56px; height: 56px; font-size: 1.5rem; margin: 0;">${char.avatarText}</div>
          <div>
            <h2 style="font-size: 1.7rem; color: var(--c-carob); margin: 0;">${char.name}</h2>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--c-matcha-dark);">${char.title} · ${char.era}</div>
          </div>
        </div>

        <div style="margin-bottom: 1.25rem; background: var(--c-surface-warm); padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--c-carob);">
          <strong style="color: var(--c-carob); display: block; font-size: 0.88rem; text-transform: uppercase; margin-bottom: 0.25rem;">Contexto Histórico y Relaciones:</strong>
          <p style="font-size: 0.92rem; color: var(--c-text-secondary); margin-bottom: 0.5rem;">${char.context}</p>
          <div style="font-size: 0.85rem; color: var(--c-text-muted);"><strong>Vínculos familiares y sociales:</strong> ${char.relationships}</div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <strong style="color: var(--c-carob); display: block; font-size: 0.88rem; text-transform: uppercase; margin-bottom: 0.5rem;">Acontecimientos Cruciales:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.92rem; color: var(--c-text-secondary);">
            ${char.keyEvents.map(e => `<li>• ${e}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 1.25rem; background: #FAF7F2; padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--c-chai);">
          <strong style="color: var(--c-chai-dark); display: block; font-size: 0.88rem; text-transform: uppercase; margin-bottom: 0.25rem;">Decisión Trascendental:</strong>
          <p style="margin: 0; font-size: 0.92rem; color: var(--c-text-primary);">${char.decisions}</p>
        </div>

        <div class="callout callout-principle" style="margin-bottom: 1.5rem;">
          <div class="callout-header">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>
            <span>Conexión con Jesucristo:</span>
          </div>
          <div class="callout-body" style="font-size: 0.92rem; color: var(--c-text-primary);">
            ${char.christConnection}
          </div>
        </div>

        <div>
          <strong style="color: var(--c-carob); display: block; font-size: 0.88rem; text-transform: uppercase; margin-bottom: 0.4rem;">Pasajes de Referencia en las Escrituras:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; padding: 0;">
            ${char.references.map(r => `
              <li>
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="scripture-link" style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  ${getSvgIcon("link")}
                  <span>${r.text}</span>
                </a>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="margin-top: 1.75rem; padding-top: 1rem; border-top: 1px solid var(--c-border-subtle); display: flex; justify-content: flex-end;">
          <button id="btn-save-char-journal" class="btn btn-secondary btn-sm" data-name="${char.name}">
            Anotar lección de vida en Diario
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initPersonajesEvents(container, showToast) {
  // Filtros
  const filterBtns = container.querySelectorAll(".char-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedWorkFilter = btn.dataset.work;
      container.innerHTML = renderPersonajesView();
      initPersonajesEvents(container, showToast);
    });
  });

  // Abrir Modal
  const cards = container.querySelectorAll(".character-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      activeModalCharacterId = card.dataset.charId;
      container.innerHTML = renderPersonajesView();
      initPersonajesEvents(container, showToast);
    });
  });

  // Cerrar Modal
  const modalOverlay = container.querySelector("#char-modal-overlay");
  const btnClose = container.querySelector("#btn-close-char-modal");
  if (modalOverlay && btnClose) {
    btnClose.addEventListener("click", () => {
      activeModalCharacterId = null;
      container.innerHTML = renderPersonajesView();
      initPersonajesEvents(container, showToast);
    });

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        activeModalCharacterId = null;
        container.innerHTML = renderPersonajesView();
        initPersonajesEvents(container, showToast);
      }
    });

    const btnSaveJournal = container.querySelector("#btn-save-char-journal");
    if (btnSaveJournal) {
      btnSaveJournal.addEventListener("click", () => {
        const char = SCRIPTURE_CHARACTERS.find(c => c.id === activeModalCharacterId);
        if (char) {
          store.addJournalEntry({
            title: `Lecciones del personaje: ${char.name}`,
            scriptureRef: char.references.length ? char.references[0].text : "",
            category: "Reflexión",
            content: `Decisión clave: ${char.decisions}\n\nEnseñanza sobre Cristo: ${char.christConnection}`,
            tags: ["Personajes", char.name]
          });
          showToast(`¡Nota sobre ${char.name} guardada en tu Diario!`, "success");
        }
      });
    }
  }
}
