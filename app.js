import { LEVELS, LADDER, LADDER_RULE, NOTES } from "./data.js";

const PAIRS = [
  {
    id: "cc",
    title: "Craneal y caudal",
    axes: [
      ["cranial", "Craneal"],
      ["caudal", "Caudal"],
    ],
  },
  {
    id: "ap",
    title: "Anterior y posterior",
    axes: [
      ["anterior", "Anterior"],
      ["posterior", "Posterior"],
    ],
  },
  {
    id: "lm",
    title: "Lateral y medial",
    axes: [
      ["lateral", "Lateral"],
      ["medial", "Medial"],
    ],
  },
];

const HINT_KEY = "cerviganglios-ios-install-dismissed";

const state = { q: "", g: "todos", sel: "II", pair: "cc", view: "niveles" };

const q = document.getElementById("q");
const chips = document.getElementById("chips");
const card = document.getElementById("card");
const groups = document.getElementById("groups");
const pairs = document.getElementById("pairs");
const tbody = document.getElementById("tbody");
const theadRow = document.getElementById("thead-row");
const table = document.getElementById("level-table");

let refocusChips = false;

function norm(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtered() {
  const query = norm(state.q.trim());
  return LEVELS.filter((level) => {
    if (state.g !== "todos" && level.group !== state.g) return false;
    if (!query) return true;
    const haystack = [
      level.id,
      level.name,
      level.cranial,
      level.caudal,
      level.anterior,
      level.posterior,
      level.lateral,
      level.medial,
      level.risk,
    ].join(" ");
    return norm(haystack).includes(query);
  });
}

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    /* Navegación privada: el aviso se podrá cerrar, pero no quedará recordado. */
  }
}

function isIosSafari() {
  const ua = navigator.userAgent;
  const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const otherBrowser = /CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
  return ios && /Safari/.test(ua) && !otherBrowser;
}

function isStandalone() {
  return navigator.standalone === true
    || matchMedia("(display-mode: standalone)").matches
    || matchMedia("(display-mode: fullscreen)").matches;
}

function scrollTop() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

function render() {
  const list = filtered();
  if (list.length && !list.some((level) => level.id === state.sel)) state.sel = list[0].id;
  document.body.dataset.view = state.view;
  paintGroups();
  paintChips(list);
  paintCount(list.length, state.q.trim() !== "" || state.g !== "todos");
  paintCard(list);
  paintPairs();
  paintTable(list);
  paintTabs();
  document.getElementById("q-clear").hidden = state.q.length === 0;
}

function paintGroups() {
  groups.querySelectorAll("button").forEach((button) => {
    const on = button.dataset.group === state.g;
    button.setAttribute("aria-checked", on ? "true" : "false");
    button.tabIndex = on ? 0 : -1;
  });
}

function paintPairs() {
  pairs.querySelectorAll("button").forEach((button) => {
    const on = button.dataset.pair === state.pair;
    button.setAttribute("aria-checked", on ? "true" : "false");
    button.tabIndex = on ? 0 : -1;
  });
}

function paintChips(list) {
  const hadFocus = refocusChips || chips.contains(document.activeElement);
  refocusChips = false;
  chips.replaceChildren();
  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "chips-empty";
    empty.textContent = "Sin coincidencias";
    chips.append(empty);
    return;
  }
  const fragment = document.createDocumentFragment();
  list.forEach((level) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "radio";
    button.dataset.id = level.id;
    button.textContent = level.id;
    const on = level.id === state.sel;
    button.setAttribute("aria-checked", on ? "true" : "false");
    button.tabIndex = on ? 0 : -1;
    fragment.append(button);
  });
  chips.append(fragment);
  const selected = chips.querySelector('[aria-checked="true"]');
  if (selected) {
    const left = selected.offsetLeft - (chips.clientWidth - selected.offsetWidth) / 2;
    chips.scrollLeft = Math.max(0, left);
    if (hadFocus) selected.focus({ preventScroll: true });
  }
}

function paintCount(count, filtering) {
  const el = document.getElementById("count");
  if (count === 0) el.textContent = "Ningún nivel coincide con la búsqueda.";
  else if (!filtering) el.textContent = count === 1 ? "1 nivel" : count + " niveles";
  else el.textContent = count + " de " + LEVELS.length;
}

function paintCard(list) {
  card.replaceChildren();
  const level = list.find((item) => item.id === state.sel);
  if (!level) {
    const empty = document.createElement("div");
    empty.className = "empty";
    const message = document.createElement("p");
    message.textContent = "Ningún nivel coincide con la búsqueda.";
    const button = document.createElement("button");
    button.type = "button";
    button.id = "clear-search";
    button.textContent = "Limpiar búsqueda";
    empty.append(message, button);
    card.append(empty);
    return;
  }

  const article = document.createElement("article");
  article.className = "card";
  article.dataset.level = level.id;

  const header = document.createElement("header");
  header.className = "card-hd";
  const id = document.createElement("h2");
  id.className = "level-id";
  id.textContent = level.id;
  const name = document.createElement("p");
  name.className = "level-name";
  name.textContent = level.name;
  const src = document.createElement("p");
  src.className = "level-src";
  src.textContent = "Grégoire 2014 · " + level.table;
  header.append(id, name, src);

  const derived = level.derived || [];
  const blocks = PAIRS.map((pair) => {
    const section = document.createElement("section");
    section.className = "pair pair-" + pair.id;
    const heading = document.createElement("h3");
    heading.textContent = pair.axes.map((axis) => axis[1]).join(" · ");
    section.append(heading);
    pair.axes.forEach(([key, label]) => {
      const row = document.createElement("div");
      row.className = "limit";
      row.dataset.axis = key;
      const bar = document.createElement("span");
      bar.className = "bar";
      bar.setAttribute("aria-hidden", "true");
      const body = document.createElement("div");
      const axis = document.createElement("p");
      axis.className = "axis";
      axis.textContent = label;
      if (derived.includes(key)) {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = "Línea de división";
        axis.append(badge);
      }
      const text = document.createElement("p");
      text.className = "limit-text";
      text.textContent = level[key];
      body.append(axis, text);
      row.append(bar, body);
      section.append(row);
    });
    return section;
  });

  const risk = document.createElement("div");
  risk.className = "risk";
  const riskLabel = document.createElement("p");
  riskLabel.className = "field-label";
  riskLabel.textContent = "Sitios en riesgo";
  const riskText = document.createElement("p");
  riskText.className = "risk-text";
  riskText.dataset.field = "risk";
  riskText.textContent = level.risk;
  risk.append(riskLabel, riskText);

  article.append(header, ...blocks, risk);

  if (level.note) {
    const nuance = document.createElement("div");
    nuance.className = "nuance";
    const label = document.createElement("p");
    label.className = "field-label";
    label.textContent = "Matiz";
    const text = document.createElement("p");
    text.className = "note-text";
    text.dataset.field = "note";
    text.textContent = level.note;
    nuance.append(label, text);
    article.append(nuance);
  }

  card.append(article);
}

function paintTable(list) {
  const pair = PAIRS.find((item) => item.id === state.pair);
  table.dataset.pair = pair.id;
  document.getElementById("table-caption").textContent = pair.title;
  theadRow.replaceChildren();
  ["Nivel", pair.axes[0][1], pair.axes[1][1]].forEach((label) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = label;
    theadRow.append(cell);
  });
  tbody.replaceChildren();
  if (!list.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 3;
    cell.className = "empty-cell";
    cell.textContent = "Ningún nivel coincide con la búsqueda.";
    row.append(cell);
    tbody.append(row);
    return;
  }
  list.forEach((level) => {
    const row = document.createElement("tr");
    if (level.id === state.sel) row.classList.add("is-current");
    const head = document.createElement("th");
    head.scope = "row";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "row-link";
    button.dataset.id = level.id;
    button.textContent = level.id;
    head.append(button);
    const cranial = document.createElement("td");
    cranial.textContent = level[pair.axes[0][0]];
    const caudal = document.createElement("td");
    caudal.textContent = level[pair.axes[1][0]];
    row.append(head, cranial, caudal);
    tbody.append(row);
  });
}

function paintTabs() {
  document.querySelectorAll("[data-view-btn]").forEach((tab) => {
    const on = tab.dataset.viewBtn === state.view;
    tab.setAttribute("aria-selected", on ? "true" : "false");
    tab.tabIndex = on ? 0 : -1;
  });
  document.querySelectorAll(".panel").forEach((panel) => {
    const on = panel.id === "panel-" + state.view;
    panel.classList.toggle("is-on", on);
    if (on) panel.removeAttribute("inert");
    else panel.setAttribute("inert", "");
  });
}

function clearSearch() {
  state.q = "";
  q.value = "";
  render();
}

function bindRadio(container, attribute, apply) {
  container.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || !container.contains(button)) return;
    apply(button.getAttribute(attribute), false);
  });
  container.addEventListener("keydown", (event) => {
    const buttons = [...container.querySelectorAll("button")];
    const index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = buttons[(index + 1) % buttons.length];
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = buttons[(index - 1 + buttons.length) % buttons.length];
    else if (event.key === "Home") next = buttons[0];
    else if (event.key === "End") next = buttons[buttons.length - 1];
    else return;
    event.preventDefault();
    apply(next.getAttribute(attribute), true);
  });
}

function buildReference() {
  const ladder = document.getElementById("ladder");
  LADDER.forEach((step, index) => {
    const item = document.createElement("li");
    const number = document.createElement("span");
    number.className = "ladder-index";
    number.textContent = String(index + 1);
    const body = document.createElement("div");
    const plane = document.createElement("p");
    plane.className = "ladder-plane";
    plane.textContent = step[0];
    const effect = document.createElement("p");
    effect.className = "ladder-effect";
    effect.textContent = step[1];
    body.append(plane, effect);
    item.append(number, body);
    ladder.append(item);
  });
  document.getElementById("ladder-rule").textContent = LADDER_RULE;
  const notes = document.getElementById("notes");
  NOTES.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    notes.append(item);
  });
}

function initHint() {
  const hint = document.getElementById("ios-hint");
  if (isIosSafari() && !isStandalone() && storageGet(HINT_KEY) !== "1") hint.hidden = false;
  document.getElementById("ios-hint-close").addEventListener("click", () => {
    storageSet(HINT_KEY, "1");
    hint.hidden = true;
  });
}

function initOnline() {
  const sync = () => document.body.classList.toggle("is-offline", navigator.onLine === false);
  window.addEventListener("online", sync);
  window.addEventListener("offline", sync);
  sync();
}

function initServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch((error) => {
    console.error(error);
  });
}

q.addEventListener("input", () => {
  state.q = q.value;
  render();
});
q.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && q.value) {
    event.preventDefault();
    clearSearch();
  }
});
document.getElementById("q-clear").addEventListener("click", clearSearch);
card.addEventListener("click", (event) => {
  if (event.target.closest("#clear-search")) clearSearch();
});

bindRadio(groups, "data-group", (value) => {
  state.g = value;
  render();
});
bindRadio(pairs, "data-pair", (value, fromKey) => {
  state.pair = value;
  render();
  if (fromKey) {
    const button = pairs.querySelector('[data-pair="' + value + '"]');
    if (button) button.focus({ preventScroll: true });
  }
});
bindRadio(chips, "data-id", (value, fromKey) => {
  state.sel = value;
  if (fromKey) refocusChips = true;
  render();
  if (!fromKey) scrollTop();
});

tbody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  state.sel = button.dataset.id;
  state.view = "niveles";
  render();
  scrollTop();
});

const tabButtons = [...document.querySelectorAll("[data-view-btn]")];
tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (state.view === tab.dataset.viewBtn) return;
    state.view = tab.dataset.viewBtn;
    render();
    scrollTop();
  });
});
document.querySelector(".tabbar").addEventListener("keydown", (event) => {
  const index = tabButtons.indexOf(document.activeElement);
  if (index < 0) return;
  let next = null;
  if (event.key === "ArrowRight") next = tabButtons[(index + 1) % tabButtons.length];
  else if (event.key === "ArrowLeft") next = tabButtons[(index - 1 + tabButtons.length) % tabButtons.length];
  else if (event.key === "Home") next = tabButtons[0];
  else if (event.key === "End") next = tabButtons[tabButtons.length - 1];
  else return;
  event.preventDefault();
  state.view = next.dataset.viewBtn;
  render();
  next.focus({ preventScroll: true });
});

buildReference();
initHint();
initOnline();
render();
initServiceWorker();
