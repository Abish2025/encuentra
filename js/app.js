// ==========================================================================
// ENCUENTRA — CONTROLADOR PRINCIPAL Y ENRUTADOR (SPA)
// ==========================================================================

import { renderInicioView } from "./components/view-inicio.js";
import { renderAcademiaView, initAcademiaEvents } from "./components/view-academia.js";
import { renderLeccionView, initLeccionEvents } from "./components/view-leccion.js";
import { renderExploradorView, initExploradorEvents } from "./components/view-explorador.js";
import { renderGuiaView, initGuiaEvents } from "./components/view-guia.js";
import { renderDiccionarioView, initDiccionarioEvents } from "./components/view-diccionario.js";
import { renderPersonajesView, initPersonajesEvents } from "./components/view-personajes.js";
import { renderRecursosView, initRecursosEvents } from "./components/view-recursos.js";
import { renderDiarioView, initDiarioEvents } from "./components/view-diario.js";
import { renderProgresoView, initProgresoEvents } from "./components/view-progreso.js";

// Elementos del DOM
const viewContainer = document.getElementById("view-container");
const toastContainer = document.getElementById("toast-container");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Mapeo de Rutas
const ROUTES = {
  inicio: { render: renderInicioView, init: null },
  academia: { render: renderAcademiaView, init: initAcademiaEvents },
  leccion: { render: renderLeccionView, init: initLeccionEvents },
  explorador: { render: renderExploradorView, init: initExploradorEvents },
  guia: { render: renderGuiaView, init: initGuiaEvents },
  diccionario: { render: renderDiccionarioView, init: initDiccionarioEvents },
  personajes: { render: renderPersonajesView, init: initPersonajesEvents },
  recursos: { render: renderRecursosView, init: initRecursosEvents },
  diario: { render: renderDiarioView, init: initDiarioEvents },
  progreso: { render: renderProgresoView, init: initProgresoEvents }
};

// Función Toast Notificaciones
export function showToast(message, type = "info") {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconSvg = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  if (type === "success") {
    iconSvg = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  } else if (type === "warning") {
    iconSvg = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
  }

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Router Principal
function handleRoute() {
  const hash = window.location.hash.slice(1).trim() || "inicio";
  const [routeKey] = hash.split("/");

  const targetRoute = ROUTES[routeKey] || ROUTES.inicio;

  // Renderizar la vista
  viewContainer.innerHTML = targetRoute.render();

  // Inicializar controladores de eventos de la vista
  if (targetRoute.init) {
    targetRoute.init(viewContainer, showToast);
  }

  // Actualizar enlaces de navegación activos
  updateActiveNav(routeKey);

  // Cerrar menú móvil si estuviera abierto
  closeMobileMenu();

  // Desplazar suavemente a la parte superior
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateActiveNav(activeKey) {
  // Desktop
  document.querySelectorAll(".nav-item").forEach(link => {
    const navAttr = link.dataset.nav;
    if (navAttr === activeKey || (activeKey === "leccion" && navAttr === "academia")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile
  document.querySelectorAll(".mobile-nav-item").forEach(link => {
    const navAttr = link.dataset.nav;
    if (navAttr === activeKey || (activeKey === "leccion" && navAttr === "academia")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function toggleMobileMenu() {
  const isOpen = mobileMenuToggle.classList.contains("is-open");
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenuToggle.classList.add("is-open");
    mobileMenuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.hidden = false;
  }
}

function closeMobileMenu() {
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.classList.remove("is-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  }
}

// Inicialización de la Aplicación
function initApp() {
  // Event listeners para cambios de hash
  window.addEventListener("hashchange", handleRoute);

  // Event listener para menú móvil
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }

  // Cerrar menú móvil al hacer click fuera
  document.addEventListener("click", (e) => {
    if (mobileMenu && !mobileMenu.hidden) {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Primera carga
  handleRoute();
}

// Arrancar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
