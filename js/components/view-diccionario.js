// ==========================================================================
// ENCUENTRA — VISTA: DICCIONARIO DOCTRINAL Y DE LAS ESCRITURAS
// ==========================================================================

import { DICTIONARY_TERMS } from "../data/dictionary.js";
import { store } from "../store.js";
import { getSvgIcon } from "../icons.js";

let currentCategory = "Todos";
let searchQuery = "";
let currentLetter = "Todos";
let activeModalTermId = null;

export function renderDiccionarioView() {
  const categories = ["Todos", "Doctrinal", "Histórico", "Geográfico", "Cultural", "Literario", "Favoritos"];
  const alphabet = ["Todos", ..."ABCDEFGHILMNOPQRSTUVZ".split("")];

  const favorites = store.getFavorites();

  const filtered = DICTIONARY_TERMS.filter(t => {
    // Filtro por categoría o favoritos
    if (currentCategory === "Favoritos") {
      if (!favorites.includes(t.id)) return false;
    } else if (currentCategory !== "Todos" && t.category !== currentCategory) {
      return false;
    }

    // Filtro por letra
    if (currentLetter !== "Todos") {
      if (!t.term.toUpperCase().startsWith(currentLetter)) return false;
    }

    // Filtro por búsqueda
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTerm = t.term.toLowerCase().includes(q);
      const matchDef = t.simpleDef.toLowerCase().includes(q) || t.contextualMeaning.toLowerCase().includes(q);
      if (!matchTerm && !matchDef) return false;
    }

    return true;
  });

  const activeTerm = activeModalTermId ? DICTIONARY_TERMS.find(t => t.id === activeModalTermId) : null;

  return `
    <div class="dictionary-header">
      <div class="container">
        <span class="badge badge-chai" style="margin-bottom: 0.5rem;">Vocabulario y Contexto</span>
        <h1 style="margin-bottom: 0.5rem;">Diccionario Doctrinal y de las Escrituras</h1>
        <p class="section-subtitle">
          Términos bíblicos, históricos, culturales y geográficos para enriquecer tu comprensión del lenguaje sagrado.
        </p>

        <!-- Barra de Búsqueda -->
        <div style="max-width: 600px; margin: 1.75rem auto 0;">
          <div class="search-box">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" id="dict-search-input" class="input-text search-input" value="${searchQuery}" placeholder="Buscar término, concepto o doctrina...">
          </div>
        </div>

        <!-- Filtros por Categoría -->
        <div class="pill-filters" style="justify-content: center; margin-top: 1.25rem;">
          ${categories.map(cat => `
            <button class="pill-btn dict-cat-btn ${currentCategory === cat ? 'active' : ''}" data-cat="${cat}">
              ${cat === 'Favoritos' ? `<span style="display:inline-flex; width:13px; height:13px; vertical-align:middle; margin-right:3px;">${getSvgIcon("starFilled")}</span> Favoritos (${favorites.length})` : cat}
            </button>
          `).join('')}
        </div>

        <!-- Filtro Alfabético -->
        <div class="alphabet-bar">
          ${alphabet.map(letra => `
            <button class="letter-btn ${currentLetter === letra ? 'active' : ''}" data-letter="${letra}">
              ${letra}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="container" style="padding: 2.5rem 1.5rem 5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <span style="font-size: 0.9rem; color: var(--c-text-muted);">
          Mostrando <strong>${filtered.length}</strong> términos encontrados
        </span>
      </div>

      <!-- Cuadrícula de Términos -->
      <div class="dictionary-grid">
        ${filtered.length > 0 ? filtered.map(t => {
          const isFav = favorites.includes(t.id);
          return `
            <div class="term-card" data-term-id="${t.id}">
              <div class="term-header">
                <span class="badge ${getCategoryBadgeClass(t.category)}">${t.category}</span>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${t.id}" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
                  <svg class="icon" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </button>
              </div>

              <h3 class="term-title">${t.term}</h3>
              ${t.origin ? `<div style="font-size: 0.8rem; font-style: italic; color: var(--c-text-muted); margin-bottom: 0.5rem;">${t.origin}</div>` : ''}
              <p class="term-definition">${t.simpleDef}</p>

              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--c-border-subtle);">
                <span style="font-size: 0.82rem; color: var(--c-matcha-dark); font-weight: 600;">Ver significado y fuentes &rarr;</span>
                <span style="font-size: 0.78rem; color: var(--c-text-muted);">${t.references.length} ref</span>
              </div>
            </div>
          `;
        }).join('') : `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--c-surface); border-radius: var(--radius-lg); border: 1px dashed var(--c-border);">
            <p style="font-size: 1.1rem; color: var(--c-text-muted); margin-bottom: 0.5rem;">No se encontraron términos con esos filtros.</p>
            <button id="btn-reset-dict-filters" class="btn btn-secondary btn-sm">Limpiar filtros de búsqueda</button>
          </div>
        `}
      </div>
    </div>

    <!-- Modal de Detalle del Término -->
    ${activeTerm ? renderTermModal(activeTerm, favorites.includes(activeTerm.id)) : ''}
  `;
}

function getCategoryBadgeClass(category) {
  switch (category) {
    case "Doctrinal": return "badge-matcha";
    case "Histórico": return "badge-carob";
    case "Geográfico": return "badge-chai";
    case "Literario": return "badge-pistache";
    default: return "badge-vanilla";
  }
}

function renderTermModal(term, isFav) {
  return `
    <div class="modal-overlay" id="term-modal-overlay">
      <div class="modal-dialog">
        <button class="modal-close-btn" id="btn-close-modal" aria-label="Cerrar modal">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <span class="badge ${getCategoryBadgeClass(term.category)}">${term.category}</span>
          ${term.origin ? `<span style="font-size: 0.85rem; font-style: italic; color: var(--c-text-muted);">${term.origin}</span>` : ''}
        </div>

        <h2 style="font-size: 1.75rem; color: var(--c-carob); margin-bottom: 1rem;">${term.term}</h2>

        <div style="margin-bottom: 1.25rem;">
          <strong style="color: var(--c-carob); display: block; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 0.35rem;">Definición Sencilla:</strong>
          <p style="font-size: 1rem; color: var(--c-text-primary); line-height: 1.6;">${term.simpleDef}</p>
        </div>

        <div style="margin-bottom: 1.25rem; background: var(--c-surface); padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--c-matcha);">
          <strong style="color: var(--c-matcha-dark); display: block; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 0.35rem;">Significado Contextual en las Escrituras:</strong>
          <p style="margin: 0; font-size: 0.95rem; color: var(--c-text-secondary); line-height: 1.6;">${term.contextualMeaning}</p>
        </div>

        ${term.example ? `
          <div class="scripture-box" style="margin: 1.25rem 0;">
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--c-chai-dark); text-transform: uppercase; margin-bottom: 0.25rem;">Ejemplo en las Escrituras:</div>
            <div class="scripture-text" style="font-size: 1rem;">${term.example}</div>
          </div>
        ` : ''}

        <div style="margin-top: 1.5rem;">
          <strong style="color: var(--c-carob); display: block; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 0.5rem;">Referencias y Fuentes Oficiales:</strong>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
            ${term.references.map(r => `
              <li>
                <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="scripture-link" style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  ${getSvgIcon("link")}
                  <span>${r.text}</span>
                </a>
              </li>
            `).join('')}
          </ul>
          <div style="font-size: 0.8rem; color: var(--c-text-muted); margin-top: 0.75rem;">
            Fuente oficial: ${term.source}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--c-border-subtle);">
          <button id="modal-fav-toggle" class="btn btn-sm ${isFav ? 'btn-chai' : 'btn-outline'}" data-fav-id="${term.id}" style="display: inline-flex; align-items: center; gap: 0.35rem;">
            ${isFav ? getSvgIcon("starFilled") : getSvgIcon("star")}
            <span>${isFav ? 'Guardado en Favoritos' : 'Añadir a Favoritos'}</span>
          </button>
          <button id="modal-save-journal" class="btn btn-sm btn-secondary" data-term="${term.term}">
            Anotar en Diario
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initDiccionarioEvents(container, showToast) {
  // Input de búsqueda
  const searchInput = container.querySelector("#dict-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      container.innerHTML = renderDiccionarioView();
      initDiccionarioEvents(container, showToast);
      // Mantener foco al final
      const newInp = container.querySelector("#dict-search-input");
      if (newInp) {
        newInp.focus();
        newInp.selectionStart = newInp.selectionEnd = newInp.value.length;
      }
    });
  }

  // Filtros de categoría
  const catBtns = container.querySelectorAll(".dict-cat-btn");
  catBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.cat;
      container.innerHTML = renderDiccionarioView();
      initDiccionarioEvents(container, showToast);
    });
  });

  // Filtros de letra
  const letterBtns = container.querySelectorAll(".letter-btn");
  letterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      currentLetter = btn.dataset.letter;
      container.innerHTML = renderDiccionarioView();
      initDiccionarioEvents(container, showToast);
    });
  });

  // Limpiar filtros si no hay resultados
  const btnReset = container.querySelector("#btn-reset-dict-filters");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      currentCategory = "Todos";
      searchQuery = "";
      currentLetter = "Todos";
      container.innerHTML = renderDiccionarioView();
      initDiccionarioEvents(container, showToast);
    });
  }

  // Click en tarjeta para abrir modal
  const cards = container.querySelectorAll(".term-card");
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".fav-btn")) return; // No abrir si solo dio click al favorito
      activeModalTermId = card.dataset.termId;
      container.innerHTML = renderDiccionarioView();
      initDiccionarioEvents(container, showToast);
    });
  });

  // Toggle Favorito en tarjeta
  const favBtns = container.querySelectorAll(".fav-btn");
  favBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.favId;
      const isNowFav = store.toggleFavorite(id);
      showToast(isNowFav ? "Término guardado en tus favoritos" : "Término removido de favoritos", "info");
      container.innerHTML = renderDiccionarioView();
      initDiccionarioEvents(container, showToast);
    });
  });

  // Eventos del Modal
  const modalOverlay = container.querySelector("#term-modal-overlay");
  const btnCloseModal = container.querySelector("#btn-close-modal");
  if (modalOverlay && btnCloseModal) {
    btnCloseModal.addEventListener("click", () => {
      activeModalTermId = null;
      container.innerHTML = renderDiccionarioView();
      initDiccionarioEvents(container, showToast);
    });

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        activeModalTermId = null;
        container.innerHTML = renderDiccionarioView();
        initDiccionarioEvents(container, showToast);
      }
    });

    // Toggle favorito dentro del modal
    const modalFavBtn = container.querySelector("#modal-fav-toggle");
    if (modalFavBtn) {
      modalFavBtn.addEventListener("click", () => {
        const id = modalFavBtn.dataset.favId;
        const isNowFav = store.toggleFavorite(id);
        showToast(isNowFav ? "Guardado en tus favoritos" : "Removido de favoritos", "info");
        container.innerHTML = renderDiccionarioView();
        initDiccionarioEvents(container, showToast);
      });
    }

    // Anotar en diario desde el modal
    const modalJournalBtn = container.querySelector("#modal-save-journal");
    if (modalJournalBtn) {
      modalJournalBtn.addEventListener("click", () => {
        const t = DICTIONARY_TERMS.find(item => item.id === activeModalTermId);
        if (t) {
          store.addJournalEntry({
            title: `Estudio doctrinal: ${t.term}`,
            scriptureRef: t.references.length ? t.references[0].text : "",
            category: "Descubrimiento",
            content: `Definición: ${t.simpleDef}\n\nSignificado contextual: ${t.contextualMeaning}`,
            tags: ["Diccionario", t.category]
          });
          showToast(`¡Nota sobre '${t.term}' guardada en tu Diario!`, "success");
        }
      });
    }
  }
}
