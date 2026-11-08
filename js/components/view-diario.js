// ==========================================================================
// ENCUENTRA — VISTA: DIARIO PERSONAL DE ESTUDIO (100% FUNCIONAL Y PRIVADO)
// ==========================================================================

import { store } from "../store.js";
import { getSvgIcon } from "../icons.js";

let journalFilterCategory = "Todas";
let journalSearchQuery = "";
let editingEntryId = null;

export function renderDiarioView() {
  const entries = store.getJournalEntries();
  const categories = ["Todas", "Reflexión", "Idea Principal", "Descubrimiento", "Pregunta"];

  const filtered = entries.filter(e => {
    if (journalFilterCategory !== "Todas" && e.category !== journalFilterCategory) return false;
    if (journalSearchQuery.trim()) {
      const q = journalSearchQuery.toLowerCase();
      const matchTitle = e.title.toLowerCase().includes(q);
      const matchContent = e.content.toLowerCase().includes(q);
      const matchRef = (e.scriptureRef || "").toLowerCase().includes(q);
      if (!matchTitle && !matchContent && !matchRef) return false;
    }
    return true;
  });

  const editingEntry = editingEntryId ? entries.find(e => e.id === editingEntryId) : null;

  return `
    <div class="explorer-header">
      <div class="container">
        <span class="badge badge-matcha" style="margin-bottom: 0.5rem;">Cuaderno Espiritual</span>
        <h1 style="margin-bottom: 0.5rem;">Diario de Estudio Personal</h1>
        <p class="section-subtitle">
          Registra tus reflexiones, preguntas, descubrimientos doctrinales e ideas principales. Tus notas se almacenan de forma <strong>privada y local</strong> en tu propio dispositivo.
        </p>

        <!-- Botones de Exportación y Privacidad -->
        <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.25rem; flex-wrap: wrap;">
          <button id="btn-export-txt" class="btn btn-sm btn-secondary">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Descargar Notas (TXT)</span>
          </button>
          <button id="btn-export-json" class="btn btn-sm btn-secondary">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Copia de Seguridad (JSON)</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container">

      <!-- Aviso de Privacidad -->
      <div style="background: #FFF8E7; border: 1px solid var(--c-chai); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 1.5rem; font-size: 0.88rem; line-height: 1.6; color: var(--c-carob); display: flex; gap: 0.75rem; align-items: flex-start;">
        <span style="display: inline-flex; width: 20px; height: 20px; flex-shrink: 0; color: var(--c-chai-dark); margin-top: 2px;">${getSvgIcon("lock")}</span>
        <div>
          <strong>Sobre la privacidad de tus notas:</strong> Tus reflexiones se guardan <strong>únicamente en este navegador y dispositivo</strong>. No se envían a ningún servidor ni se sincronizan entre dispositivos. No están protegidas por contraseña ni cifradas. Si borras los datos de tu navegador, se perderán. Te recomendamos descargar una copia de seguridad regularmente.
        </div>
      </div>

      <div class="journal-layout">
        
        <!-- Formulario Editor de Notas -->
        <div class="journal-editor-card">
          <h2 style="font-size: 1.35rem; color: var(--c-carob); margin-bottom: 1.25rem;">
            ${editingEntry ? 'Editar Nota de Estudio' : 'Crear Nueva Nota'}
          </h2>

          <form id="journal-form">
            <div class="form-group">
              <label class="form-label" for="entry-title-input">Título de la nota:</label>
              <input type="text" id="entry-title-input" class="input-text" value="${editingEntry ? escapeHtml(editingEntry.title) : ''}" placeholder="Ej: La misericordia del Señor en Helamán 3" required>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label" for="entry-ref-input">Pasaje de las Escrituras:</label>
                <input type="text" id="entry-ref-input" class="input-text" value="${editingEntry ? escapeHtml(editingEntry.scriptureRef || '') : ''}" placeholder="Ej: Helamán 3:29–30">
              </div>

              <div class="form-group">
                <label class="form-label" for="entry-cat-select">Categoría:</label>
                <select id="entry-cat-select" class="select-control">
                  <option value="Reflexión" ${editingEntry && editingEntry.category === 'Reflexión' ? 'selected' : ''}>Reflexión</option>
                  <option value="Idea Principal" ${editingEntry && editingEntry.category === 'Idea Principal' ? 'selected' : ''}>Idea Principal</option>
                  <option value="Descubrimiento" ${editingEntry && editingEntry.category === 'Descubrimiento' ? 'selected' : ''}>Descubrimiento</option>
                  <option value="Pregunta" ${editingEntry && editingEntry.category === 'Pregunta' ? 'selected' : ''}>Pregunta</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="entry-content-input">Contenido de la nota:</label>
              <textarea id="entry-content-input" class="textarea-control" rows="6" placeholder="¿Qué descubriste? ¿Qué te enseñó el Espíritu? ¿Cómo lo aplicarás?" required>${editingEntry ? escapeHtml(editingEntry.content) : ''}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label" for="entry-tags-input">Etiquetas (separadas por comas):</label>
              <input type="text" id="entry-tags-input" class="input-text" value="${editingEntry && editingEntry.tags ? escapeHtml(editingEntry.tags.join(', ')) : ''}" placeholder="Ej: Fe, Libro de Mormón, Oración">
            </div>

            <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.5rem;">
              ${editingEntry ? `
                <button type="button" id="btn-cancel-edit" class="btn btn-secondary">Cancelar</button>
              ` : ''}
              <button type="submit" class="btn btn-primary">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>
                <span>${editingEntry ? 'Actualizar Nota' : 'Guardar en mi Diario'}</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Lista de Entradas -->
        <div>
          <div style="margin-bottom: 1.25rem;">
            <!-- Búsqueda en Diario -->
            <div class="search-box" style="margin-bottom: 0.75rem;">
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" id="journal-search-input" class="input-text search-input" value="${journalSearchQuery}" placeholder="Buscar en mis notas...">
            </div>

            <!-- Filtros por categoría -->
            <div class="pill-filters">
              ${categories.map(c => `
                <button class="pill-btn journal-filter-btn ${journalFilterCategory === c ? 'active' : ''}" data-cat="${c}">
                  ${c}
                </button>
              `).join('')}
            </div>
          </div>

          <div style="font-size: 0.88rem; color: var(--c-text-muted); margin-bottom: 1rem;">
            ${filtered.length} notas guardadas
          </div>

          <div class="journal-entries-container">
            ${filtered.length > 0 ? filtered.map(item => `
              <div class="journal-entry-card" data-entry-id="${item.id}">
                <div class="entry-header">
                  <span class="badge ${getCategoryBadge(item.category)}">${item.category}</span>
                  <span class="entry-date">${formatDate(item.createdAt)}</span>
                </div>

                <h3 style="font-size: 1.2rem; color: var(--c-carob); margin-bottom: 0.35rem;">${escapeHtml(item.title)}</h3>
                ${item.scriptureRef ? `
                  <div style="font-size: 0.85rem; font-weight: 600; color: var(--c-matcha-dark); margin-bottom: 0.65rem; display: flex; align-items: center; gap: 0.35rem;">
                    ${getSvgIcon("book")}
                    <span>${escapeHtml(item.scriptureRef)}</span>
                  </div>
                ` : ''}

                <p style="font-size: 0.92rem; color: var(--c-text-secondary); line-height: 1.55; white-space: pre-line; margin-bottom: 0.85rem;">
                  ${escapeHtml(item.content)}
                </p>

                ${item.tags && item.tags.length ? `
                  <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.85rem;">
                    ${item.tags.map(t => `<span style="font-size: 0.75rem; background: var(--c-almond); color: var(--c-carob); padding: 0.15rem 0.5rem; border-radius: var(--radius-sm);">#${escapeHtml(t)}</span>`).join('')}
                  </div>
                ` : ''}

                <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding-top: 0.65rem; border-top: 1px solid var(--c-border-subtle);">
                  <button class="btn btn-sm btn-secondary btn-edit-entry" data-id="${item.id}" title="Editar nota">
                    Editar
                  </button>
                  <button class="btn btn-sm btn-outline btn-delete-entry" data-id="${item.id}" style="color: var(--c-error); border-color: rgba(182, 83, 69, 0.4);" title="Eliminar nota">
                    Eliminar
                  </button>
                </div>
              </div>
            `).join('') : `
              <div style="text-align: center; padding: 3rem 1rem; background: var(--c-surface); border-radius: var(--radius-lg); border: 1px dashed var(--c-border);">
                <p style="color: var(--c-text-muted); margin-bottom: 0.5rem;">No hay notas que coincidan con tu búsqueda.</p>
                <p style="font-size: 0.85rem; color: var(--c-text-muted);">Usa el formulario para escribir tu primer descubrimiento espiritual.</p>
              </div>
            `}
          </div>

        </div>

      </div>
    </div>
  `;
}

function getCategoryBadge(cat) {
  switch (cat) {
    case "Idea Principal": return "badge-matcha";
    case "Reflexión": return "badge-carob";
    case "Descubrimiento": return "badge-chai";
    case "Pregunta": return "badge-pistache";
    default: return "badge-vanilla";
  }
}

function formatDate(isoStr) {
  try {
    const d = new Date(isoStr);
    return d.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function initDiarioEvents(container, showToast) {
  // Enviar Formulario
  const form = container.querySelector("#journal-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = container.querySelector("#entry-title-input").value.trim();
      const scriptureRef = container.querySelector("#entry-ref-input").value.trim();
      const category = container.querySelector("#entry-cat-select").value;
      const content = container.querySelector("#entry-content-input").value.trim();
      const tags = container.querySelector("#entry-tags-input").value.trim();

      if (editingEntryId) {
        store.updateJournalEntry(editingEntryId, { title, scriptureRef, category, content, tags });
        editingEntryId = null;
        showToast("¡Nota actualizada con éxito!", "success");
      } else {
        store.addJournalEntry({ title, scriptureRef, category, content, tags });
        showToast("¡Nota guardada en tu Diario!", "success");
      }

      container.innerHTML = renderDiarioView();
      initDiarioEvents(container, showToast);
    });
  }

  // Cancelar Edición
  const btnCancel = container.querySelector("#btn-cancel-edit");
  if (btnCancel) {
    btnCancel.addEventListener("click", () => {
      editingEntryId = null;
      container.innerHTML = renderDiarioView();
      initDiarioEvents(container, showToast);
    });
  }

  // Búsqueda en Diario
  const searchInput = container.querySelector("#journal-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      journalSearchQuery = e.target.value;
      container.innerHTML = renderDiarioView();
      initDiarioEvents(container, showToast);
      const newInp = container.querySelector("#journal-search-input");
      if (newInp) {
        newInp.focus();
        newInp.selectionStart = newInp.selectionEnd = newInp.value.length;
      }
    });
  }

  // Filtros de Categoría
  const catBtns = container.querySelectorAll(".journal-filter-btn");
  catBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      journalFilterCategory = btn.dataset.cat;
      container.innerHTML = renderDiarioView();
      initDiarioEvents(container, showToast);
    });
  });

  // Botones de Editar y Eliminar
  const editBtns = container.querySelectorAll(".btn-edit-entry");
  editBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      editingEntryId = btn.dataset.id;
      container.innerHTML = renderDiarioView();
      initDiarioEvents(container, showToast);
      window.scrollTo({ top: 300, behavior: "smooth" });
    });
  });

  const deleteBtns = container.querySelectorAll(".btn-delete-entry");
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (confirm("¿Estás seguro de que deseas eliminar esta nota de tu diario?")) {
        store.deleteJournalEntry(btn.dataset.id);
        if (editingEntryId === btn.dataset.id) editingEntryId = null;
        showToast("Nota eliminada del diario.", "info");
        container.innerHTML = renderDiarioView();
        initDiarioEvents(container, showToast);
      }
    });
  });

  // Exportar TXT y JSON
  const btnExportTxt = container.querySelector("#btn-export-txt");
  if (btnExportTxt) {
    btnExportTxt.addEventListener("click", () => {
      store.exportJournalTXT();
      showToast("Descargando tus notas en formato de texto...", "info");
    });
  }

  const btnExportJson = container.querySelector("#btn-export-json");
  if (btnExportJson) {
    btnExportJson.addEventListener("click", () => {
      store.exportJournalJSON();
      showToast("Copia de seguridad JSON descargada.", "info");
    });
  }
}
