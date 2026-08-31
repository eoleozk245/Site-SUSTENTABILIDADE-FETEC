/* =========================================================
   Sustentabilidade & Tecnologia — lógica do site
   Sumário:
     1) Dados (sites + categorias)   ← EDITE AQUI PARA ADICIONAR SITES
     2) Utilitários (storage, DOM, debounce)
     3) Render inicial (seções e cards)
     4) Tema claro/escuro
     5) Favoritos (localStorage)
     6) Histórico "acessados recentemente"
     7) Busca em tempo real
     8) Scrollspy (menu que acompanha a rolagem)
     9) Modal de detalhes
    10) Contador animado + reveal on scroll
    11) Header scroll + menu mobile
    12) Partículas de fundo (canvas)
   ========================================================= */

/* =========================================================
   1) DADOS — para adicionar um site novo, cole um objeto
      dentro da categoria certa. Nada mais precisa mudar.
   ========================================================= */
const CATEGORIAS = [
  {
    id: "reciclagem",
    nome: "Reciclagem Inteligente & Logística Reversa",
    descricao: "Gestão de resíduos, descarte consciente, coleta seletiva e retorno de materiais à cadeia produtiva.",
    icone: "recycle",
    cor: "#10B981",
    corSoft: "rgba(16, 185, 129, 0.14)",
  },
  {
    id: "agua",
    nome: "Conservação Hídrica & Vida Marinha",
    descricao: "Projetos voltados para a preservação dos oceanos, economia de água e ecossistemas aquáticos.",
    icone: "waves",
    cor: "#06B6D4",
    corSoft: "rgba(6, 182, 212, 0.14)",
  },
  {
    id: "cidades",
    nome: "Cidades Inteligentes & Urbanismo Sustentável",
    descricao: "Soluções para ambientes urbanos ecologicamente eficientes, energia limpa e mobilidade sustentável.",
    icone: "building-2",
    cor: "#6366F1",
    corSoft: "rgba(99, 102, 241, 0.14)",
  },
  {
    id: "tecnologia",
    nome: "Tecnologia Sustentável & Inovação Ecológica",
    descricao: "Avanços tecnológicos, IA e gadgets a serviço do meio ambiente e da eficiência energética.",
    icone: "cpu",
    cor: "#22D3EE",
    corSoft: "rgba(34, 211, 238, 0.14)",
  },
  {
    id: "agro",
    nome: "Agricultura Sustentável & AgroTech",
    descricao: "Irrigação inteligente, cultivo orgânico e redução de impactos na produção agrícola.",
    icone: "sprout",
    cor: "#84CC16",
    corSoft: "rgba(132, 204, 22, 0.14)",
  },
];

const SITES = [
  // 1) Reciclagem
  {
    id: "recicla-tech",
    nome: "Recicla Tech",
    descricao: "Apresenta uma dinâmica interativa de quiz voltada para a conscientização da reciclagem de eletrônicos e resíduos do dia a dia.",
    categoria: "reciclagem",
    link: "https://ianfillype.github.io/ReciclaTec---Reciclagem-Inteligente-Sustentabilidade/",
    imagem: "imagens/recicla-tech.webp",
  },
  {
    id: "reciclagem-inteligente",
    nome: "Reciclagem Inteligente",
    descricao: "Conta com uma seção de jogo dedicada para ensinar regras de coleta seletiva e reciclagem de forma prática.",
    categoria: "reciclagem",
    link: "https://cauaroberto.github.io/Reciclagem/",
    imagem: "imagens/reciclagem-inteligente.webp",
  },
  {
    id: "re-loop",
    nome: "Re-Loop",
    descricao: "Excelente abordagem conceitual sobre o ciclo de vida dos produtos e o retorno de materiais descartados à cadeia produtiva.",
    categoria: "reciclagem",
    link: "https://eloh017.github.io/Re-Loop/",
    imagem: "imagens/re-loop.webp",
  },

  // 2) Água e Vida Marinha
  {
    id: "aquaeco",
    nome: "AquaEco",
    descricao: "Possui uma seção específica com jogo educativo focada na preservação e no uso inteligente da água.",
    categoria: "agua",
    link: "https://calopsitadomal20-hue.github.io/aquaeco/",
    imagem: "imagens/aquaeco.webp",
  },
  {
    id: "ecooceano",
    nome: "EcoOceano",
    descricao: "Jogo interativo focado na proteção dos oceanos e na remoção de poluentes dos ecossistemas marinhos.",
    categoria: "agua",
    link: "https://discordfds124-design.github.io/mar/",
    imagem: "imagens/ecooceano.webp",
  },
  {
    id: "mar-vivo",
    nome: "Mar Vivo",
    descricao: "Inova ao unir sustentabilidade marítima com inteligência artificial para proteção da vida marinha.",
    categoria: "agua",
    link: "https://gabriemoraessilva.github.io/SITE-SUSTEMTABILIDADE-E-TECNOLOGIA-I.A-/",
    imagem: "imagens/mar-vivo.webp",
  },

  // 3) Cidades Inteligentes
  {
    id: "ecocity",
    nome: "EcoCity",
    descricao: "Interface moderna desenvolvida em web app que explora a construção e a gestão de cidades sustentáveis.",
    categoria: "cidades",
    link: "https://ecocity-os-core.lovable.app/",
    imagem: "imagens/ecocity.webp",
  },
  {
    id: "cidade-sustentavel",
    nome: "Cidade Sustentável",
    descricao: "Apresenta conceitos urbanos inteligentes e iluminação/eficiência energética com um design responsivo e dinâmico.",
    categoria: "cidades",
    link: "https://bright-urban-glow.lovable.app/",
    imagem: "imagens/cidade-sustentavel.webp",
  },
  {
    id: "ecocity-nexus",
    nome: "EcoCity Nexus",
    descricao: "Visão abrangente sobre a integração de tecnologias ecológicas em grandes centros urbanos.",
    categoria: "cidades",
    link: "https://otaviohss2000-cmyk.github.io/fetec-EcoCity/",
    imagem: "imagens/ecocity-nexus.webp",
  },

  // 4) Tecnologia Sustentável
  {
    id: "tecnologia-sustentavel",
    nome: "Tecnologia Sustentável",
    descricao: "Incorpora um minijogo que desafia o usuário a tomar decisões ecológicas utilizando a tecnologia a seu favor.",
    categoria: "tecnologia",
    link: "https://danks0s.github.io/Site-ecologico/",
    imagem: "imagens/tecnologia-sustentavel.webp",
  },
  {
    id: "sustentabilidade-e-tecnologia",
    nome: "Sustentabilidade e Tecnologia",
    descricao: "Combina conteúdo educativo sobre tecnologias limpas com uma área de jogo interativo para engajamento do público.",
    categoria: "tecnologia",
    link: "https://estevamg136ac.github.io/FETEC-Sustentabilidade-/",
    imagem: "imagens/sustentabilidade-e-tecnologia.webp",
  },
  {
    id: "tecnologia-natureza",
    nome: "Tecnologia & Natureza",
    descricao: "Possui uma seção de quiz para testar os conhecimentos sobre o equilíbrio entre inovação tecnológica e preservação ambiental.",
    categoria: "tecnologia",
    link: "https://joaopedromunhoz010-ops.github.io/site-top/",
    imagem: "imagens/tecnologia-natureza.webp",
  },

  // 5) Agricultura Sustentável
  {
    id: "agro-verde",
    nome: "Agro Verde",
    descricao: "Foco em soluções tecnológicas para o agronegócio sustentável e preservação do solo.",
    categoria: "agro",
    link: "https://gabrieloolls.github.io/Site-FETEC/",
    imagem: "imagens/agro-verde.webp",
  },
  {
    id: "cultivacao",
    nome: "CultivAção",
    descricao: "Design refinado com práticas e diretrizes para técnicas agrícolas limpas e eficientes.",
    categoria: "agro",
    link: "https://ddiasgabriela-design.github.io/agriculturaSustentavel/",
    imagem: "imagens/cultivacao.webp",
  },
];

/* =========================================================
   2) UTILITÁRIOS
   ========================================================= */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const catById = (id) => CATEGORIAS.find((c) => c.id === id);

const storage = {
  get: (key, fallback) => {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  },
};

const debounce = (fn, ms = 120) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
};

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));

const normalize = (str) =>
  String(str).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/* =========================================================
   3) RENDER INICIAL — monta as seções e cards
   ========================================================= */
function renderAll() {
  const container = $("#sectionsContainer");
  container.innerHTML = CATEGORIAS.map(renderSection).join("");

  // pintar cores da categoria em cada seção
  CATEGORIAS.forEach((cat) => {
    const el = $(`#${cat.id}`);
    if (el) {
      el.style.setProperty("--cat-color", cat.cor);
      el.style.setProperty("--cat-color-soft", cat.corSoft);
    }
  });
}

function renderSection(cat) {
  const cards = SITES
    .filter((s) => s.categoria === cat.id)
    .map((site) => renderCard(site, cat))
    .join("");

  const total = SITES.filter((s) => s.categoria === cat.id).length;

  return `
    <section class="section" id="${cat.id}" data-cat="${cat.id}">
      <div class="section__header">
        <div>
          <div class="section__title-group">
            <span class="section__icon">
              <i data-lucide="${cat.icone}"></i>
            </span>
            <div>
              <h2 class="section__title">${escapeHtml(cat.nome)}</h2>
              <p class="section__desc">${escapeHtml(cat.descricao)}</p>
            </div>
          </div>
        </div>
        <span class="section__count" data-total="${total}">${total} projeto${total !== 1 ? "s" : ""}</span>
      </div>
      <div class="grid" data-grid="${cat.id}">
        ${cards}
      </div>
    </section>
  `;
}

/* fallback quando a imagem de capa não carrega: mostra o ícone da categoria */
function handleCoverError(img, icone) {
  const cover = img.closest(".card__cover");
  if (!cover) return;
  cover.classList.remove("is-loading");
  cover.classList.add("card__cover--placeholder");
  img.remove();
  const icon = document.createElement("i");
  icon.setAttribute("data-lucide", icone);
  icon.className = "card__cover-icon";
  cover.prepend(icon);
  if (window.lucide) window.lucide.createIcons();
}

function renderCard(site, cat) {
  // onerror: se a capa falhar, cai no ícone da categoria em vez de ficar
  // com o skeleton girando para sempre
  const cover = site.imagem
    ? `<img src="${escapeHtml(site.imagem)}" alt="Capa do site ${escapeHtml(site.nome)}" loading="lazy" decoding="async"
         onload="this.closest('.card__cover').classList.remove('is-loading')"
         onerror="handleCoverError(this, '${escapeHtml(cat.icone)}')" />`
    : `<i data-lucide="${cat.icone}" class="card__cover-icon"></i>`;

  const coverClass = site.imagem ? "card__cover is-loading" : "card__cover card__cover--placeholder";

  return `
    <article class="card" data-id="${site.id}" data-cat="${cat.id}"
             tabindex="0" role="button"
             aria-label="Ver detalhes de ${escapeHtml(site.nome)}"
             data-search="${normalize(site.nome + " " + site.descricao + " " + cat.nome)}">

      <div class="${coverClass}">
        ${cover}
        <button class="card__fav" data-fav="${site.id}" aria-pressed="false"
                aria-label="Favoritar ${escapeHtml(site.nome)}">
          <i data-lucide="heart" aria-hidden="true"></i>
        </button>
      </div>

      <div class="card__body">
        <span class="badge">
          <i data-lucide="${cat.icone}" aria-hidden="true"></i>
          ${escapeHtml(cat.nome.split(" ")[0])}
        </span>
        <h3 class="card__title">${escapeHtml(site.nome)}</h3>
        <p class="card__desc">${escapeHtml(site.descricao)}</p>
        <div class="card__footer">
          <a class="btn btn--primary" href="${escapeHtml(site.link)}"
             target="_blank" rel="noopener noreferrer" data-visit="${site.id}"
             aria-label="Acessar ${escapeHtml(site.nome)} (abre em nova aba)"
             onclick="event.stopPropagation()">
            Acessar
            <i data-lucide="arrow-up-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

/* =========================================================
   4) TEMA CLARO/ESCURO
   ========================================================= */
function initTheme() {
  const saved = storage.get("theme", null);
  // na primeira visita segue a preferência do sistema; depois, a escolha salva
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = saved || (prefersLight ? "light" : "dark");
  applyTheme(theme);

  const btn = $("#themeBtn");
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    storage.set("theme", next);
  });

  // se o usuário nunca escolheu manualmente, acompanha mudanças do sistema
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
    if (storage.get("theme", null)) return;
    applyTheme(e.matches ? "light" : "dark");
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = $("#themeBtn");
  if (btn) {
    btn.setAttribute("aria-label", theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro");
  }
  // mantém a cor da barra do navegador (mobile) em sintonia com o tema
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#050914" : "#E8F1FA");
}

/* =========================================================
   5) FAVORITOS
   ========================================================= */
const FAV_KEY = "favorites-v1";
let favorites = new Set(storage.get(FAV_KEY, []));

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  storage.set(FAV_KEY, [...favorites]);
  refreshFavoritesUI();
}

function refreshFavoritesUI() {
  // atualizar botões nos cards
  $$('[data-fav]').forEach((btn) => {
    const id = btn.dataset.fav;
    const active = favorites.has(id);
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  // contador no header
  const count = favorites.size;
  const badge = $("#favCount");
  badge.textContent = count;
  badge.hidden = count === 0;
  // botão no modal (se aberto)
  const modalFav = $("#modalFav");
  if (modalFav && modalFav.dataset.id) {
    const active = favorites.has(modalFav.dataset.id);
    modalFav.classList.toggle("is-active", active);
    modalFav.setAttribute("aria-pressed", String(active));
    modalFav.querySelector("span").textContent = active ? "Favoritado" : "Favoritar";
  }
}

/* pequena explosão de partículas ao favoritar */
function spawnConfetti(originEl) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ["#22D3EE", "#F472B6", "#FBBF24", "#34D399", "#818CF8"];
  const count = 10;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "confetti-particle";
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const dist = 40 + Math.random() * 30;
    p.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    p.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    p.style.background = colors[i % colors.length];
    p.style.left = `${cx}px`;
    p.style.top = `${cy}px`;
    document.body.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

function initFavorites() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-fav]");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const wasActive = favorites.has(btn.dataset.fav);
    toggleFavorite(btn.dataset.fav);
    if (!wasActive) spawnConfetti(btn);
  });

  const favFilterBtn = $("#favoritesBtn");
  favFilterBtn.setAttribute("aria-pressed", "false");
  favFilterBtn.addEventListener("click", () => {
    // filtro rápido: mostra só favoritos, ou desativa
    const active = favFilterBtn.classList.toggle("is-filtering");
    favFilterBtn.setAttribute("aria-pressed", String(active));
    filterCards({ favoritesOnly: active, query: $("#searchInput").value });
  });

  refreshFavoritesUI();
}

/* =========================================================
   6) HISTÓRICO "acessados recentemente"
   ========================================================= */
const RECENT_KEY = "recent-v1";
const RECENT_MAX = 5;

function pushRecent(id) {
  const list = storage.get(RECENT_KEY, []);
  const filtered = list.filter((x) => x !== id);
  filtered.unshift(id);
  storage.set(RECENT_KEY, filtered.slice(0, RECENT_MAX));
  refreshRecentUI();
}

/* marca visualmente os projetos que você já abriu */
function refreshRecentUI() {
  const recent = new Set(storage.get(RECENT_KEY, []));
  $$(".card").forEach((card) => {
    const visited = recent.has(card.dataset.id);
    card.classList.toggle("is-visited", visited);
    let tag = $(".card__visited", card);
    if (visited && !tag) {
      tag = document.createElement("span");
      tag.className = "card__visited";
      tag.textContent = "Visitado";
      $(".card__cover", card)?.appendChild(tag);
    } else if (!visited && tag) {
      tag.remove();
    }
  });
}

function initRecent() {
  // captura: o link "Acessar" chama stopPropagation() para não abrir o modal,
  // o que impedia este listener de rodar na fase de bolha
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-visit]");
    if (link) pushRecent(link.dataset.visit);
  }, { capture: true });
  refreshRecentUI();
}

/* =========================================================
   7) BUSCA EM TEMPO REAL
   ========================================================= */
/* transição suave ao mostrar/esconder um card no filtro */
function animateCardVisibility(card, show) {
  if (show) {
    if (!card.classList.contains("is-hidden") && !card.classList.contains("is-filtering-out")) return;
    clearTimeout(card._filterTimeout);
    card.classList.remove("is-hidden");
    // força reflow antes de remover a classe de saída, para o navegador animar a entrada
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove("is-filtering-out")));
  } else {
    if (card.classList.contains("is-hidden")) return;
    card.classList.add("is-filtering-out");
    clearTimeout(card._filterTimeout);
    card._filterTimeout = setTimeout(() => card.classList.add("is-hidden"), 260);
  }
}

function filterCards({ query = "", favoritesOnly = false } = {}) {
  const q = normalize(query.trim());
  let totalVisible = 0;

  CATEGORIAS.forEach((cat) => {
    const section = $(`#${cat.id}`);
    if (!section) return;
    const cards = $$(".card", section);
    let visibleInSection = 0;

    cards.forEach((card) => {
      const matchesQuery = !q || card.dataset.search.includes(q);
      const matchesFav   = !favoritesOnly || favorites.has(card.dataset.id);
      const show = matchesQuery && matchesFav;
      animateCardVisibility(card, show);
      if (show) visibleInSection++;
    });

    // o contador da seção acompanha o filtro ativo
    const countEl = $(".section__count", section);
    if (countEl) {
      const filtering = !!q || favoritesOnly;
      const shown = filtering ? visibleInSection : Number(countEl.dataset.total);
      countEl.textContent = `${shown} projeto${shown !== 1 ? "s" : ""}`;
    }

    section.classList.toggle("is-hidden", visibleInSection === 0);
    totalVisible += visibleInSection;
  });

  // status da busca
  const status  = $("#searchStatus");
  const stxt    = $("#searchStatusText");
  const emptyEl = $("#emptyState");

  if (q || favoritesOnly) {
    status.hidden = false;
    const parts = [];
    if (favoritesOnly) parts.push("mostrando só favoritos");
    if (q) parts.push(`buscando por "${query}"`);
    stxt.textContent = `${totalVisible} projeto${totalVisible !== 1 ? "s" : ""} · ${parts.join(" · ")}`;
  } else {
    status.hidden = true;
  }
  emptyEl.hidden = totalVisible > 0;
}

function initSearch() {
  const input = $("#searchInput");
  const clear = $("#clearSearch");

  input.addEventListener("input", debounce((e) => {
    filterCards({
      query: e.target.value,
      favoritesOnly: $("#favoritesBtn").classList.contains("is-filtering"),
    });
  }, 100));

  clear.addEventListener("click", () => {
    input.value = "";
    $("#favoritesBtn").classList.remove("is-filtering");
    filterCards({});
    input.focus();
  });

  // atalho / pra focar na busca
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !/input|textarea/i.test(e.target.tagName)) {
      e.preventDefault();
      input.focus();
    }
    if (e.key === "Escape" && document.activeElement === input) {
      input.blur();
    }
  });
}

/* =========================================================
   8) SCROLLSPY — menu que acende conforme rola
   ========================================================= */
function initScrollspy() {
  const links = $$(".nav__link");
  const mobLinks = $$(".mobile-menu__link");
  const indicator = $("#navIndicator");
  const map = new Map();
  CATEGORIAS.forEach((cat) => {
    const el = $(`#${cat.id}`);
    if (el) map.set(el, cat.id);
  });

  const moveIndicator = (id) => {
    if (!indicator) return;
    const link = links.find((l) => l.dataset.nav === id);
    if (!link) return;
    indicator.style.transform = `translateX(${link.offsetLeft - 4}px)`;
    indicator.classList.add("is-active");
  };

  const setActive = (id) => {
    links.forEach((l)   => l.classList.toggle("is-active", l.dataset.nav === id));
    mobLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`));
    moveIndicator(id);
  };

  const observer = new IntersectionObserver((entries) => {
    // pega a seção mais visível no viewport
    let best = null;
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
      }
    });
    if (best) {
      const id = map.get(best.target);
      if (id) setActive(id);
    }
  }, {
    rootMargin: "-30% 0px -55% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  map.forEach((_, el) => observer.observe(el));
}

/* =========================================================
   9) MODAL de detalhes
   ========================================================= */
/* guarda o elemento focado antes de abrir o modal, para restaurar depois */
let lastFocusedElement = null;

function openModal(siteId, originEl) {
  const site = SITES.find((s) => s.id === siteId);
  if (!site) return;
  const cat = catById(site.categoria);

  const modal = $("#modal");
  const panel = $(".modal__panel", modal);

  const cover = $("#modalCover");
  cover.innerHTML = site.imagem
    ? `<img src="${escapeHtml(site.imagem)}" alt="Capa do ${escapeHtml(site.nome)}" />`
    : `<i data-lucide="${cat.icone}"></i>`;
  cover.style.background = `linear-gradient(135deg, ${cat.cor}, var(--bg-elev-2))`;

  const badge = $("#modalBadge");
  badge.innerHTML = `
    <span class="badge" style="--cat-color:${cat.cor}; --cat-color-soft:${cat.corSoft};">
      <i data-lucide="${cat.icone}"></i> ${escapeHtml(cat.nome)}
    </span>
  `;

  $("#modalTitle").textContent = site.nome;
  $("#modalDesc").textContent  = site.descricao;
  $("#modalMeta").innerHTML    = `<i data-lucide="link" style="width:14px;height:14px;"></i> ${escapeHtml(site.link)}`;

  const linkBtn = $("#modalLink");
  linkBtn.href = site.link;
  linkBtn.dataset.visit = site.id;

  const favBtn = $("#modalFav");
  favBtn.dataset.fav = site.id;
  favBtn.dataset.id  = site.id;

  // guarda quem abriu o modal, para devolver o foco ao fechar
  lastFocusedElement = originEl || document.activeElement;

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.classList.remove("is-open");

  // origem do "zoom": centro do card clicado, para o modal parecer crescer a partir dele
  if (originEl && panel) {
    const cardRect  = originEl.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const originX = cardRect.left + cardRect.width / 2 - panelRect.left;
    const originY = cardRect.top + cardRect.height / 2 - panelRect.top;
    panel.style.setProperty("--origin-x", `${originX}px`);
    panel.style.setProperty("--origin-y", `${originY}px`);
  } else if (panel) {
    panel.style.setProperty("--origin-x", "50%");
    panel.style.setProperty("--origin-y", "50%");
  }

  // dispara a transição de zoom no próximo frame
  requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("is-open")));

  // re-renderizar ícones injetados
  if (window.lucide) window.lucide.createIcons();
  refreshFavoritesUI();

  // move o foco para dentro do modal (acessibilidade por teclado)
  $(".modal__close", modal).focus();
}

function closeModal() {
  const modal = $("#modal");
  if (modal.hidden) return;
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
  }, 260);

  // devolve o foco para o card que abriu o modal
  if (lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

/* mantém o Tab circulando dentro do modal enquanto ele estiver aberto */
function trapFocus(e) {
  const modal = $("#modal");
  if (modal.hidden || e.key !== "Tab") return;

  const focusables = $$(
    'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
    modal
  ).filter((el) => el.offsetParent !== null);
  if (!focusables.length) return;

  const first = focusables[0];
  const last  = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function initModal() {
  document.addEventListener("click", (e) => {
    // abrir modal ao clicar num card (mas não se clicou no favorito ou no botão de acessar)
    const card = e.target.closest(".card");
    if (card && !e.target.closest("[data-fav]") && !e.target.closest("[data-visit]")) {
      openModal(card.dataset.id, card);
      return;
    }
    // fechar modal
    if (e.target.closest("[data-close]")) closeModal();
  });

  // abrir o modal pelo teclado (Enter ou Espaço no card focado)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest?.(".card");
    if (!card || e.target !== card) return; // ignora Enter no botão/link de dentro
    e.preventDefault();
    openModal(card.dataset.id, card);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#modal").hidden) closeModal();
    trapFocus(e);
  });
}

/* =========================================================
  10) CONTADOR ANIMADO + REVEAL ON SCROLL
   ========================================================= */
/* preenche os contadores do hero a partir dos dados reais (nunca desatualiza) */
function syncCounters() {
  const fontes = {
    sites: SITES.length,
    categorias: CATEGORIAS.length,
  };
  $$(".stat__num").forEach((el) => {
    const fonte = el.dataset.countFrom;
    if (fonte && fonte in fontes) el.dataset.count = fontes[fonte];
    // já mostra o valor final: se a animação não rodar, o número certo aparece
    el.textContent = el.dataset.count ?? el.textContent;
  });
}

function animateCounters() {
  $$(".stat__num").forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = Math.round(target * eased);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        el.classList.add("is-pulsing");
        el.addEventListener("animationend", () => el.classList.remove("is-pulsing"), { once: true });
      }
    };
    requestAnimationFrame(step);
  });
}

function initReveal() {
  const cards = $$(".card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // pequeno atraso escalonado por card do lote
        setTimeout(() => entry.target.classList.add("is-visible"), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  cards.forEach((c) => observer.observe(c));

  const headers = $$(".section__header");
  const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        headerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });

  headers.forEach((h) => headerObserver.observe(h));
}

/* =========================================================
  11) HEADER SCROLL + MENU MOBILE
   ========================================================= */
function initHeader() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const menuBtn = $("#menuBtn");
  const menu    = $("#mobileMenu");

  const setMenu = (open) => {
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };

  menuBtn.addEventListener("click", () => setMenu(menu.hidden));

  // fechar menu ao clicar num link
  $$(".mobile-menu__link").forEach((l) =>
    l.addEventListener("click", () => setMenu(false))
  );

  // fechar ao clicar fora do menu
  document.addEventListener("click", (e) => {
    if (menu.hidden) return;
    if (e.target.closest("#mobileMenu") || e.target.closest("#menuBtn")) return;
    setMenu(false);
  });

  // fechar com Escape (e devolver o foco ao botão)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) {
      setMenu(false);
      menuBtn.focus();
    }
  });
}

/* botão flutuante "voltar ao topo" */
function initBackToTop() {
  const btn = $("#backToTop");
  if (!btn) return;
  let shown = false;

  const onScroll = () => {
    const shouldShow = window.scrollY > window.innerHeight * 0.8;
    if (shouldShow && !shown) {
      shown = true;
      btn.hidden = false;
      requestAnimationFrame(() => btn.classList.add("is-visible"));
    } else if (!shouldShow && shown) {
      shown = false;
      btn.classList.remove("is-visible");
      setTimeout(() => { if (!shown) btn.hidden = true; }, 320);
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================================================
  12) PARTÍCULAS DE FUNDO (canvas leve)
   ========================================================= */
function initParticles() {
  const canvas = $("#particles");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let width, height, particles, dpr;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width  = canvas.width  = window.innerWidth * dpr;
    height = canvas.height = window.innerHeight * dpr;
    canvas.style.width  = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 24000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15 * dpr,
      vy: (Math.random() - 0.5) * 0.15 * dpr,
      r: (Math.random() * 1.5 + 0.5) * dpr,
      a: Math.random() * 0.5 + 0.2,
    }));
  };

  const tick = () => {
    ctx.clearRect(0, 0, width, height);
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const color = isLight ? "8, 145, 178" : "34, 211, 238";

    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.a})`;
      ctx.fill();
    });

    requestAnimationFrame(tick);
  };

  resize();
  window.addEventListener("resize", debounce(resize, 200));
  tick();
}

/* =========================================================
   13) SPOTLIGHT NOS CARDS (segue o cursor)
   ========================================================= */
function initCardSpotlight() {
  const container = $("#sectionsContainer");
  if (!container) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  let pending = null;
  let scheduled = false;

  // agrupa as atualizações num único frame para não escrever estilo a cada mousemove
  container.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    pending = { card, x: e.clientX, y: e.clientY };
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      if (!pending) return;
      const rect = pending.card.getBoundingClientRect();
      pending.card.style.setProperty("--mx", `${pending.x - rect.left}px`);
      pending.card.style.setProperty("--my", `${pending.y - rect.top}px`);
      pending = null;
    });
  }, { passive: true });
}

/* =========================================================
   14) PARALLAX NOS BLOBS DE FUNDO
   ========================================================= */
function initParallax() {
  const layers = $$(".parallax-layer");
  if (!layers.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.parallax) || 0.1;
      layer.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}

/* =========================================================
   15) RIPPLE NOS BOTÕES
   ========================================================= */
function initRipple() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn");
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.4;
    const ripple = document.createElement("span");
    ripple.className = "btn__ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top  = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, { capture: true }); // captura: dispara mesmo se algum handler chamar stopPropagation() depois
}

/* =========================================================
   16) BOTÃO MAGNÉTICO (hero CTA)
   ========================================================= */
function initMagneticButton() {
  const btn = $(".hero__scroll");
  if (!btn) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  const STRENGTH = 0.35;

  btn.addEventListener("mouseenter", () => btn.classList.add("is-magnetic"));

  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) * STRENGTH;
    const offsetY = (e.clientY - rect.top - rect.height / 2) * STRENGTH;
    btn.style.transform = `translate(${offsetX.toFixed(1)}px, ${offsetY.toFixed(1)}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("is-magnetic");
    btn.style.transform = "";
  });
}

/* =========================================================
   17) BOLA DE LUZ QUE SEGUE O CURSOR
   ========================================================= */
function initCursorGlow() {
  const glow = $("#cursorGlow");
  const dot  = $("#cursorDot");
  if (!glow) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let active = false;
  let raf = null;

  const tick = () => {
    // suaviza o movimento (lerp) para um rastro suave
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    raf = requestAnimationFrame(tick);
  };

  const HOVER_SELECTOR = "a, button, .card, [role='button'], input";

  window.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (dot) dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    if (!active) {
      active = true;
      currentX = targetX;
      currentY = targetY;
      glow.classList.add("is-active");
      if (dot) dot.classList.add("is-active");
      raf = requestAnimationFrame(tick);
    }
    if (dot) dot.classList.toggle("is-hovering", !!e.target.closest(HOVER_SELECTOR));
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    active = false;
    glow.classList.remove("is-active");
    if (dot) dot.classList.remove("is-active");
    if (raf) cancelAnimationFrame(raf);
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  syncCounters();
  renderAll();

  // renderizar ícones lucide após primeiro render
  const startIcons = () => window.lucide && window.lucide.createIcons();
  if (window.lucide) startIcons();
  else window.addEventListener("load", startIcons);

  initFavorites();
  initRecent();
  initSearch();
  initScrollspy();
  initModal();
  initHeader();
  initBackToTop();
  initReveal();
  initParticles();
  initCursorGlow();
  initMagneticButton();
  initRipple();
  initCardSpotlight();
  initParallax();

  // contador anima quando o hero está visível
  const heroObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCounters();
        heroObs.disconnect();
      }
    });
  }, { threshold: 0.4 });
  const hero = $(".hero");
  if (hero) heroObs.observe(hero);
});
