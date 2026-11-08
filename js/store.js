// ==========================================================================
// ENCUENTRA — GESTOR DE ESTADO PERSISTENTE Y PRIVACIDAD LOCAL (STORE)
// ==========================================================================

const STORAGE_KEYS = {
  JOURNAL: "encuentra_journal_entries_v1",
  PROGRESS: "encuentra_progress_v1",
  FAVORITES: "encuentra_favorites_v1",
  CHECKLISTS: "encuentra_checklists_v1",
  EXERCISES: "encuentra_exercises_v1",
  GUIDE_DRAFT: "encuentra_guide_draft_v1"
};

// Muestra inicial pedagógica para el Diario si está vacío
const INITIAL_JOURNAL_SAMPLE = [
  {
    id: "sample-1",
    title: "La ancla de mi alma en Helamán 3:29",
    scriptureRef: "Helamán 3:29–30",
    category: "Idea Principal",
    content: "Hoy aprendí a no quedarme solo con la imagen del 'abismo de miseria', sino a notar que la idea principal es que asirse a la palabra de Dios vence la astucia del diablo y nos deposita a la diestra de Dios. La palabra de Dios no es opcional: es el salvavidas.",
    tags: ["Libro de Mormón", "Protección", "Idea Principal"],
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];

class AppStore {
  constructor() {
    this._initStore();
  }

  _initStore() {
    if (!localStorage.getItem(STORAGE_KEYS.JOURNAL)) {
      localStorage.setItem(STORAGE_KEYS.JOURNAL, JSON.stringify(INITIAL_JOURNAL_SAMPLE));
    }
    if (!localStorage.getItem(STORAGE_KEYS.PROGRESS)) {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify({
        completedLessons: ["como-comenzar"],
        studyStreakDays: 3,
        lastStudyDate: new Date().toISOString()
      }));
    }
    if (!localStorage.getItem(STORAGE_KEYS.FAVORITES)) {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(["albedrio", "caridad"]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.CHECKLISTS)) {
      localStorage.setItem(STORAGE_KEYS.CHECKLISTS, JSON.stringify({}));
    }
    if (!localStorage.getItem(STORAGE_KEYS.EXERCISES)) {
      localStorage.setItem(STORAGE_KEYS.EXERCISES, JSON.stringify({ answered: 0, correct: 0 }));
    }
  }

  // --- DIARIO PERSONAL ---
  getJournalEntries() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.JOURNAL) || "[]");
    } catch (e) {
      console.error("Error al leer diario:", e);
      return [];
    }
  }

  addJournalEntry(entry) {
    const entries = this.getJournalEntries();
    const newEntry = {
      id: "entry-" + Date.now(),
      title: entry.title.trim() || "Nota de estudio",
      scriptureRef: entry.scriptureRef ? entry.scriptureRef.trim() : "",
      category: entry.category || "Reflexión",
      content: entry.content.trim(),
      tags: Array.isArray(entry.tags) ? entry.tags : (entry.tags ? entry.tags.split(",").map(t => t.trim()).filter(Boolean) : []),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    entries.unshift(newEntry);
    localStorage.setItem(STORAGE_KEYS.JOURNAL, JSON.stringify(entries));
    this._triggerStorageEvent("journal");
    return newEntry;
  }

  updateJournalEntry(id, updatedFields) {
    const entries = this.getJournalEntries();
    const idx = entries.findIndex(e => e.id === id);
    if (idx !== -1) {
      entries[idx] = {
        ...entries[idx],
        ...updatedFields,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.JOURNAL, JSON.stringify(entries));
      this._triggerStorageEvent("journal");
      return entries[idx];
    }
    return null;
  }

  deleteJournalEntry(id) {
    let entries = this.getJournalEntries();
    entries = entries.filter(e => e.id !== id);
    localStorage.setItem(STORAGE_KEYS.JOURNAL, JSON.stringify(entries));
    this._triggerStorageEvent("journal");
  }

  exportJournalJSON() {
    const data = JSON.stringify(this.getJournalEntries(), null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `encuentra-diario-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  exportJournalTXT() {
    const entries = this.getJournalEntries();
    let text = "========================================\n";
    text += "ENCUENTRA — DIARIO DE ESTUDIO PERSONAL\n";
    text += "«Aprende. Escudriña. Comprende. Vive.»\n";
    text += "========================================\n\n";

    entries.forEach((e, i) => {
      text += `[${i + 1}] ${e.title}\n`;
      text += `Fecha: ${new Date(e.createdAt).toLocaleDateString()} | Categoría: ${e.category}\n`;
      if (e.scriptureRef) text += `Pasaje: ${e.scriptureRef}\n`;
      if (e.tags && e.tags.length) text += `Etiquetas: ${e.tags.join(", ")}\n`;
      text += `\n${e.content}\n`;
      text += "----------------------------------------\n\n";
    });

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `encuentra-diario-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // --- PROGRESO Y LECCIONES ---
  getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || "{}");
    } catch {
      return { completedLessons: [] };
    }
  }

  markLessonCompleted(lessonId) {
    const progress = this.getProgress();
    if (!progress.completedLessons) progress.completedLessons = [];
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      progress.lastStudyDate = new Date().toISOString();
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
      this._triggerStorageEvent("progress");
    }
  }

  isLessonCompleted(lessonId) {
    const progress = this.getProgress();
    return progress.completedLessons && progress.completedLessons.includes(lessonId);
  }

  recordExerciseAnswer(exerciseId, isCorrect) {
    try {
      const stats = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISES) || '{"answered": 0, "correct": 0}');
      stats.answered += 1;
      if (isCorrect) stats.correct += 1;
      localStorage.setItem(STORAGE_KEYS.EXERCISES, JSON.stringify(stats));
      this._triggerStorageEvent("progress");
    } catch (e) {
      console.error("Error guardando ejercicio:", e);
    }
  }

  getExerciseStats() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.EXERCISES) || '{"answered": 0, "correct": 0}');
    } catch {
      return { answered: 0, correct: 0 };
    }
  }

  // --- CHECKLISTS ---
  getChecklistState(checklistKey) {
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.CHECKLISTS) || "{}");
      return all[checklistKey] || [];
    } catch {
      return [];
    }
  }

  setChecklistState(checklistKey, checkedIds) {
    try {
      const all = JSON.parse(localStorage.getItem(STORAGE_KEYS.CHECKLISTS) || "{}");
      all[checklistKey] = checkedIds;
      localStorage.setItem(STORAGE_KEYS.CHECKLISTS, JSON.stringify(all));
    } catch (e) {
      console.error("Error guardando checklist:", e);
    }
  }

  // --- FAVORITOS (DICCIONARIO) ---
  getFavorites() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES) || "[]");
    } catch {
      return [];
    }
  }

  toggleFavorite(termId) {
    let favs = this.getFavorites();
    if (favs.includes(termId)) {
      favs = favs.filter(id => id !== termId);
    } else {
      favs.push(termId);
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
    this._triggerStorageEvent("favorites");
    return favs.includes(termId);
  }

  isFavorite(termId) {
    return this.getFavorites().includes(termId);
  }

  // --- GUÍA DRAFT ---
  saveGuideDraft(draft) {
    localStorage.setItem(STORAGE_KEYS.GUIDE_DRAFT, JSON.stringify(draft));
  }

  getGuideDraft() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.GUIDE_DRAFT) || "null");
    } catch {
      return null;
    }
  }

  clearGuideDraft() {
    localStorage.removeItem(STORAGE_KEYS.GUIDE_DRAFT);
  }

  // --- BORRADO Y PRIVACIDAD SEGURA ---
  clearAllUserData() {
    localStorage.removeItem(STORAGE_KEYS.JOURNAL);
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
    localStorage.removeItem(STORAGE_KEYS.FAVORITES);
    localStorage.removeItem(STORAGE_KEYS.CHECKLISTS);
    localStorage.removeItem(STORAGE_KEYS.EXERCISES);
    localStorage.removeItem(STORAGE_KEYS.GUIDE_DRAFT);
    this._initStore();
    this._triggerStorageEvent("all");
  }

  _triggerStorageEvent(type) {
    window.dispatchEvent(new CustomEvent("encuentra:store-update", { detail: { type } }));
  }
}

export const store = new AppStore();
