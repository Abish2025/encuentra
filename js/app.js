// ==========================================================================
// ENCUENTRA — ENRUTADOR Y CONTROLADOR PRINCIPAL (SPA)
// Navegación Simplificada en 4 Secciones Principales
// ==========================================================================

import { renderInicioView } from "./components/view-inicio.js";
import { renderAcademiaView, initAcademiaEvents } from "./components/view-academia.js";
import { renderLeccionView, initLeccionEvents } from "./components/view-leccion.js";
import { renderExploradorView, initExploradorEvents } from "./components/view-explorador.js";
import { renderPracticaView, initPracticaEvents, setPracticaTab } from "./components/view-practica.js";
import { renderMiEstudioView, initMiEstudioEvents, setMiEstudioTab } from "./components/view-mi-estudio.js";

// Elementos del DOM
const viewContainer = document.getElementById("view-container");
const toastContainer = document.getElementById("toast-container");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Mapeo de Rutas Principales
const ROUTES = {
  inicio: { render: renderInicioView, init: null, navKey: "inicio" },
  academia: { render: renderAcademiaView, init: initAcademiaEvents, navKey: "academia" },
  leccion: { render: renderLeccionView, init: initLeccionEvents, navKey: "academia" },
  explorador: { render: renderExploradorView, init: initExploradorEvents, navKey: "explorador" },
  practica: { render: renderPracticaView, init: initPracticaEvents, navKey: "practica" },
  "mi-estudio": { render: renderMiEstudioView, init: initMiEstudioEvents, navKey: "mi-estudio" }
};

// Aliases para mantener retrocompatibilidad total con enlaces directos
const SUBMODULE_ALIASES = {
  guia: { route: "practica", tab: "guia" },
  diccionario: { route: "practica", tab: "diccionario" },
  personajes: { route: "practica", tab: "personajes" },
  recursos: { route: "practica", tab: "recursos" },
  diario: { route: "mi-estudio", tab: "diario" },
  progreso: { route: "mi-estudio", tab: "progreso" }
};

// Notificaciones Toast
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
  const [routeKey, ...paramParts] = hash.split("/");
  const routeParam = paramParts.join("/");

  // Verificar si es un alias
  if (SUBMODULE_ALIASES[routeKey]) {
    const alias = SUBMODULE_ALIASES[routeKey];
    if (alias.route === "practica") setPracticaTab(alias.tab);
    if (alias.route === "mi-estudio") setMiEstudioTab(alias.tab);
    const targetRoute = ROUTES[alias.route];
    viewContainer.innerHTML = targetRoute.render(routeParam);
    if (targetRoute.init) targetRoute.init(viewContainer, showToast, routeParam);
    updateActiveNav(targetRoute.navKey);
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const targetRoute = ROUTES[routeKey] || ROUTES.inicio;

  // Renderizar vista
  viewContainer.innerHTML = targetRoute.render(routeParam);

  // Inicializar eventos
  if (targetRoute.init) {
    targetRoute.init(viewContainer, showToast, routeParam);
  }

  // Actualizar menú activo
  updateActiveNav(targetRoute.navKey);

  // Cerrar menú móvil
  closeMobileMenu();

  // Desplazar arriba
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateActiveNav(activeKey) {
  // Desktop
  document.querySelectorAll(".nav-item").forEach(link => {
    const navAttr = link.dataset.nav;
    if (navAttr === activeKey) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile
  document.querySelectorAll(".mobile-nav-item").forEach(link => {
    const navAttr = link.dataset.nav;
    if (navAttr === activeKey) {
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
  window.addEventListener("hashchange", handleRoute);

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }

  document.addEventListener("click", (e) => {
    if (mobileMenu && !mobileMenu.hidden) {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  handleRoute();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
