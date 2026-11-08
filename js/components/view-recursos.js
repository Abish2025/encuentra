// ==========================================================================
// ENCUENTRA — VISTA: RECURSOS EDUCATIVOS Y AUDIOVISUALES
// ==========================================================================

import { OFFICIAL_RESOURCES, RESOURCE_CATEGORIES } from "../data/resources.js";

let selectedCategory = "Todos";

export function renderRecursosView() {
  const filtered = OFFICIAL_RESOURCES.filter(r => {
    if (selectedCategory !== "Todos" && r.category !== selectedCategory) return false;
    return true;
  });

  return `
    <div class="explorer-header">
      <div class="container">
        <span class="badge badge-matcha" style="margin-bottom: 0.5rem;">Materiales Oficiales</span>
        <h1 style="margin-bottom: 0.5rem;">Biblioteca de Recursos</h1>
        <p class="section-subtitle">
          Videos, manuales del Sistema Educativo, guías para jóvenes y discursos de Conferencias Generales para complementar tu estudio.
        </p>

        <!-- Filtros de Categoría -->
        <div class="pill-filters" style="justify-content: center; margin-top: 1.5rem;">
          ${RESOURCE_CATEGORIES.map(cat => `
            <button class="pill-btn res-filter-btn ${selectedCategory === cat ? 'active' : ''}" data-cat="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="container" style="padding: 3rem 1.5rem 5rem;">
      <div style="margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--c-text-muted);">
        Mostrando <strong>${filtered.length}</strong> recursos oficiales
      </div>

      <div class="resources-grid">
        ${filtered.map(res => `
          <div class="resource-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.85rem;">
              <span class="badge badge-${res.badgeColor}">${res.category}</span>
              <span style="font-size: 0.78rem; font-weight: 600; color: var(--c-text-muted);">${res.format}</span>
            </div>

            <h3 style="font-size: 1.25rem; color: var(--c-carob); margin-bottom: 0.5rem; line-height: 1.35;">
              ${res.title}
            </h3>

            <p style="font-size: 0.92rem; color: var(--c-text-secondary); line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">
              ${res.description}
            </p>

            <div style="padding-top: 1rem; border-top: 1px solid var(--c-border-subtle); display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.82rem; color: var(--c-text-muted);">
                ⏱ ${res.duration}
              </span>

              <a href="${res.link}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
                <span>Acceder</span>
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Respaldo Doctrinal y Oficial -->
      <div class="callout callout-principle" style="margin-top: 3.5rem;">
        <div class="callout-header">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>Sobre los Recursos Oficiales de la Iglesia</span>
        </div>
        <div class="callout-body" style="font-size: 0.92rem; color: var(--c-text-secondary);">
          Todos los enlaces de esta biblioteca dirigen directamente a los dominios oficiales de <strong>La Iglesia de Jesucristo de los Santos de los Últimos Días</strong> (churchofjesuschrist.org). ENCUENTRA fomenta el uso de los canales divinamente señalados para profundizar en el Evangelio.
        </div>
      </div>
    </div>
  `;
}

export function initRecursosEvents(container) {
  const filterBtns = container.querySelectorAll(".res-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.cat;
      container.innerHTML = renderRecursosView();
      initRecursosEvents(container);
    });
  });
}
