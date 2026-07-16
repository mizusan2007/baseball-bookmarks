"use strict";

const bookmarks = [
  {
    id: "mlb-tv",
    name: "MLB.TV",
    url: "https://www.mlb.com/tv",
    league: "MLB",
    category: "見る",
    description: "MLB公式ライブ・見逃し配信",
    tags: ["配信", "映像", "公式"],
    favorite: true,
    icon: "TV",
    size: "featured"
  },
  {
    id: "pacific-league",
    name: "パ・リーグ.com",
    url: "https://pacificleague.com/",
    league: "NPB",
    category: "見る",
    description: "パ・リーグ公式動画・ニュース",
    tags: ["配信", "映像", "公式"],
    favorite: true,
    icon: "PL",
    size: "wide"
  },
  {
    id: "mlb-film-room",
    name: "MLB Film Room",
    url: "https://www.mlb.com/ja/video",
    league: "MLB",
    category: "見る",
    description: "MLB公式動画をプレーや選手から検索",
    tags: ["映像", "公式"],
    favorite: false,
    icon: "▶",
    size: "wide"
  },
  {
    id: "mlb-com",
    name: "MLB.com",
    url: "https://www.mlb.com/",
    league: "MLB",
    category: "試合・公式情報",
    description: "MLB公式情報、試合日程、ニュース、成績",
    tags: ["公式", "試合", "ニュース"],
    favorite: false,
    icon: "MLB",
    size: "wide"
  },
  {
    id: "yahoo-sports",
    name: "Yahoo!スポーツ",
    url: "https://sports.yahoo.co.jp/",
    league: "NPB",
    category: "試合・公式情報",
    description: "NPBの試合速報、日程、結果、ニュース",
    tags: ["速報", "試合", "ニュース"],
    favorite: false,
    icon: "Y!",
    size: "standard"
  },
  {
    id: "baseball-reference",
    name: "Baseball Reference",
    url: "https://www.baseball-reference.com/",
    league: "MLB",
    category: "選手・成績",
    description: "歴代記録、選手・チーム成績を検索",
    tags: ["成績", "歴代記録"],
    favorite: false,
    icon: "BR",
    size: "wide"
  },
  {
    id: "npbase",
    name: "NPBase",
    url: "https://npbase.jp",
    league: "NPB",
    category: "選手・成績",
    description: "NPBの試合速報、記録、選手・チームデータ",
    tags: ["成績", "選手", "速報"],
    favorite: false,
    icon: "NP",
    size: "standard"
  },
  {
    id: "baseball-freak",
    name: "Baseball Freak",
    url: "https://baseball-freak.com/",
    league: "NPB",
    category: "選手・成績",
    description: "プロ野球の試合、選手情報、各種記録",
    tags: ["成績", "選手"],
    favorite: false,
    icon: "BF",
    size: "compact"
  },
  {
    id: "baseball-data",
    name: "Baseball Data",
    url: "https://baseball-data.com/",
    league: "NPB",
    category: "選手・成績",
    description: "プロ野球の成績、記録、ランキング",
    tags: ["成績", "ランキング"],
    favorite: false,
    icon: "BD",
    size: "compact"
  },
  {
    id: "fangraphs",
    name: "FanGraphs",
    url: "https://www.fangraphs.com/",
    league: "MLB",
    category: "高度な分析",
    description: "セイバーメトリクス、選手成績、分析記事",
    tags: ["WAR", "セイバー", "分析"],
    favorite: false,
    icon: "FG",
    size: "featured"
  },
  {
    id: "baseball-savant",
    name: "Baseball Savant",
    url: "https://baseballsavant.mlb.com/",
    league: "MLB",
    category: "高度な分析",
    description: "Statcastデータ、検索、可視化",
    tags: ["Statcast", "分析", "打球"],
    favorite: false,
    icon: "BS",
    size: "wide"
  },
  {
    id: "tjstats",
    name: "TJStats",
    url: "https://tjstats.ca/",
    league: "MLB",
    category: "高度な分析",
    description: "MLB・MiLBの高度なデータと成績分析",
    tags: ["分析", "MiLB", "Stuff+"],
    favorite: false,
    icon: "TJ",
    size: "standard"
  },
  {
    id: "fangraphs-depth-charts",
    name: "FanGraphs Depth Charts",
    url: "https://www.fangraphs.com/depthcharts.aspx?position=Team",
    league: "MLB",
    category: "高度な分析",
    description: "チーム別予測、デプスチャート、予測WAR",
    tags: ["予測", "WAR", "デプス"],
    favorite: false,
    icon: "DC",
    size: "wide"
  },
  {
    id: "npb-basement",
    name: "NPB Basement",
    url: "https://npbbasement.com",
    league: "NPB",
    category: "高度な分析",
    description: "NPBの選手評価、WAR、守備・打撃・投球データ",
    tags: ["WAR", "守備", "分析"],
    favorite: false,
    icon: "NB",
    size: "featured"
  },
  {
    id: "npb-scholar",
    name: "NPB Scholar",
    url: "https://npbscholar.com",
    league: "NPB",
    category: "高度な分析",
    description: "NPBの分析とデータ検索",
    tags: ["分析", "データ"],
    favorite: false,
    icon: "NS",
    size: "compact"
  },
  {
    id: "omata-pitcher-analysis",
    name: "お股ニキ 投手分析",
    url: "https://moonomt.com/pitcher/frederic-tarnok/2025",
    league: "MLB",
    category: "高度な分析",
    description: "投手プロフィール、球種、球質の分析",
    tags: ["投手", "球種", "球質"],
    favorite: false,
    icon: "OM",
    size: "standard"
  },
  {
    id: "cots-contracts",
    name: "Cots Contracts",
    url: "https://legacy.baseballprospectus.com/compensation/cots/",
    league: "MLB",
    category: "契約・移籍",
    description: "MLB選手の契約、年俸、オプション情報",
    tags: ["契約", "年俸"],
    favorite: false,
    icon: "C",
    size: "standard"
  },
  {
    id: "mlb-trade-rumors",
    name: "MLB Trade Rumors",
    url: "https://www.mlbtraderumors.com/",
    league: "MLB",
    category: "契約・移籍",
    description: "移籍、契約、ロースター関連情報",
    tags: ["移籍", "契約", "ニュース"],
    favorite: false,
    icon: "TR",
    size: "wide"
  },
  {
    id: "game-strategy-explorer",
    name: "Game Strategy Explorer",
    url: "https://baseballsavant.mlb.com/game-strategy-explorer",
    league: "MLB",
    category: "ツール",
    description: "勝利確率、得点期待値、試合状況別の戦術分析",
    tags: ["戦術", "勝利確率", "得点期待値"],
    favorite: false,
    icon: "GS",
    size: "featured"
  },
  {
    id: "npb-pitch-profile",
    name: "NPB Pitch Profile",
    url: "https://npbpitchprofile-stjm6eueundydvjbqfxlbv.streamlit.app",
    league: "NPB",
    category: "ツール",
    description: "投手の球種、球質、投球プロフィール",
    tags: ["投手", "球種", "球質"],
    favorite: false,
    icon: "P",
    size: "wide"
  },
  {
    id: "npb-bat-profile",
    name: "NPB Bat Profile",
    url: "https://npbbatprofile-7knoehzqmixokxxxj2weeq.streamlit.app",
    league: "NPB",
    category: "ツール",
    description: "打者の打撃プロフィールと打球データ",
    tags: ["打者", "打球", "分析"],
    favorite: false,
    icon: "B",
    size: "wide"
  }
];

const categoryOrder = ["すべて", "見る", "試合・公式情報", "選手・成績", "高度な分析", "契約・移籍", "ツール"];
const categoryAccents = {
  "見る": "#f15963",
  "試合・公式情報": "#63a7ff",
  "選手・成績": "#f0b34d",
  "高度な分析": "#a58bff",
  "契約・移籍": "#ff8c6b",
  "ツール": "#4ed3a1"
};

const state = {
  query: "",
  category: "すべて",
  league: "ALL"
};

const elements = {
  searchForm: document.querySelector("#siteSearchForm"),
  search: document.querySelector("#siteSearch"),
  heroes: document.querySelector("#favoriteHeroes"),
  categoryFilters: document.querySelector("#categoryFilters"),
  leagueFilters: document.querySelector("#leagueFilters"),
  clearFilters: document.querySelector("#clearFilters"),
  status: document.querySelector("#resultStatus"),
  recentSection: document.querySelector("#recentSection"),
  recentGrid: document.querySelector("#recentGrid"),
  clearRecent: document.querySelector("#clearRecent"),
  groups: document.querySelector("#bookmarkGroups"),
  empty: document.querySelector("#emptyState"),
  library: document.querySelector("#library")
};

const recentStorageKey = "baseballPortalRecentV1";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value).normalize("NFKC").toLocaleLowerCase("ja");
}

function heroMarkup(bookmark) {
  const theme = bookmark.league === "MLB" ? "mlb" : "npb";
  return `
    <a class="hero-card hero-card--${theme}" href="${escapeHtml(bookmark.url)}" target="_blank" rel="noopener noreferrer" data-bookmark-id="${bookmark.id}">
      <span class="hero-card-top">
        <span class="hero-card-label">FAVORITE · ${bookmark.league}</span>
        <span class="external-mark" aria-hidden="true">↗</span>
      </span>
      <span>
        <strong>${escapeHtml(bookmark.name)}</strong>
        <p>${escapeHtml(bookmark.description)}</p>
      </span>
      <span class="hero-card-bottom">
        <span class="hero-card-icon" aria-hidden="true">${escapeHtml(bookmark.icon)}</span>
        <span class="hero-card-label">OPEN SITE</span>
      </span>
    </a>`;
}

function cardMarkup(bookmark, compact = false) {
  const accent = categoryAccents[bookmark.category] || "#63a7ff";
  if (compact) {
    return `
      <a class="recent-card" href="${escapeHtml(bookmark.url)}" target="_blank" rel="noopener noreferrer" data-bookmark-id="${bookmark.id}" style="--accent:${accent}">
        <span class="letter-icon" aria-hidden="true">${escapeHtml(bookmark.icon)}</span>
        <span><strong>${escapeHtml(bookmark.name)}</strong><small>${bookmark.league} · ${escapeHtml(bookmark.category)}</small></span>
      </a>`;
  }

  const leagueClass = bookmark.league.toLowerCase();
  const primaryTag = bookmark.tags[0] || bookmark.category;
  return `
    <a class="bookmark-card bookmark-card--${bookmark.size}" href="${escapeHtml(bookmark.url)}" target="_blank" rel="noopener noreferrer" data-bookmark-id="${bookmark.id}" style="--accent:${accent}">
      <span class="card-top">
        <span class="letter-icon" aria-hidden="true">${escapeHtml(bookmark.icon)}</span>
        <span class="card-meta">
          <span class="league-badge league-badge--${leagueClass}">${bookmark.league}</span>
          <span class="tag-badge">${escapeHtml(primaryTag)}</span>
        </span>
      </span>
      <span class="card-body">
        <strong>${escapeHtml(bookmark.name)}</strong>
        <p>${escapeHtml(bookmark.description)}</p>
      </span>
      <span class="card-footer">
        <span class="external-text">外部サイト</span>
        <span class="external-arrow" aria-hidden="true">↗</span>
      </span>
    </a>`;
}

function renderHeroes() {
  elements.heroes.innerHTML = bookmarks.filter((item) => item.favorite).map(heroMarkup).join("");
}

function renderCategoryFilters() {
  elements.categoryFilters.innerHTML = categoryOrder.map((category) => `
    <button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${state.category === category}">${escapeHtml(category)}</button>
  `).join("");
}

function getFilteredBookmarks() {
  const query = normalize(state.query.trim());
  const isDefault = !query && state.category === "すべて" && state.league === "ALL";
  return bookmarks.filter((bookmark) => {
    if (isDefault && bookmark.favorite) return false;
    if (state.category !== "すべて" && bookmark.category !== state.category) return false;
    if (state.league !== "ALL" && bookmark.league !== state.league) return false;
    if (!query) return true;
    const haystack = normalize([bookmark.name, bookmark.description, bookmark.category, bookmark.league, ...bookmark.tags].join(" "));
    return haystack.includes(query);
  });
}

function renderGroups() {
  const filtered = getFilteredBookmarks();
  const relevantCategories = categoryOrder.slice(1).filter((category) => filtered.some((item) => item.category === category));

  elements.groups.innerHTML = relevantCategories.map((category, index) => {
    const items = filtered.filter((item) => item.category === category);
    return `
      <section class="bookmark-group" aria-labelledby="group-${index}">
        <div class="group-heading">
          <div><span class="section-index">${String(index + 1).padStart(2, "0")}</span><h3 id="group-${index}">${escapeHtml(category)}</h3></div>
          <span>${items.length} ${items.length === 1 ? "site" : "sites"}</span>
        </div>
        <div class="bento-grid">${items.map((item) => cardMarkup(item)).join("")}</div>
      </section>`;
  }).join("");

  const conditions = [];
  if (state.query.trim()) conditions.push(`「${state.query.trim()}」`);
  if (state.category !== "すべて") conditions.push(state.category);
  if (state.league !== "ALL") conditions.push(state.league);
  const conditionText = conditions.length ? `（${conditions.join(" / ")}）` : "";
  const visibleCount = filtered.length;
  elements.status.textContent = `${visibleCount}件を表示${conditionText}${conditions.length === 0 ? ` · お気に入り2件は上部に表示` : ""}`;
  elements.empty.hidden = visibleCount !== 0;
  elements.groups.hidden = visibleCount === 0;
  elements.clearFilters.disabled = conditions.length === 0;

  renderRecent();
  updateFilterControls();
}

function updateFilterControls() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.category === state.category));
  });
  document.querySelectorAll("[data-league]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.league === state.league));
  });
}

function getRecentIds() {
  try {
    const stored = JSON.parse(localStorage.getItem(recentStorageKey) || "[]");
    return Array.isArray(stored) ? stored.filter((id) => typeof id === "string").slice(0, 4) : [];
  } catch {
    return [];
  }
}

function rememberBookmark(id) {
  if (!bookmarks.some((item) => item.id === id)) return;
  try {
    const next = [id, ...getRecentIds().filter((recentId) => recentId !== id)].slice(0, 4);
    localStorage.setItem(recentStorageKey, JSON.stringify(next));
    renderRecent();
  } catch {
    // Storage may be unavailable in private browsing. The link still opens normally.
  }
}

function renderRecent() {
  const hasActiveFilters = state.query.trim() || state.category !== "すべて" || state.league !== "ALL";
  const items = getRecentIds().map((id) => bookmarks.find((item) => item.id === id)).filter(Boolean);
  elements.recentSection.hidden = hasActiveFilters || items.length === 0;
  elements.recentGrid.innerHTML = items.map((item) => cardMarkup(item, true)).join("");
}

function clearAllFilters({ focusSearch = false } = {}) {
  state.query = "";
  state.category = "すべて";
  state.league = "ALL";
  elements.search.value = "";
  renderGroups();
  if (focusSearch) elements.search.focus();
}

function scrollToLibrary() {
  elements.library.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setCategory(category) {
  state.category = categoryOrder.includes(category) ? category : "すべて";
  renderCategoryFilters();
  renderGroups();
  scrollToLibrary();
}

function setLeague(league) {
  state.league = ["ALL", "MLB", "NPB"].includes(league) ? league : "ALL";
  renderGroups();
  scrollToLibrary();
}

function updateActiveNav(action) {
  document.querySelectorAll("[data-nav-action]").forEach((button) => {
    if (button.dataset.navAction === action) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

document.addEventListener("click", (event) => {
  const bookmarkLink = event.target.closest("[data-bookmark-id]");
  if (bookmarkLink) rememberBookmark(bookmarkLink.dataset.bookmarkId);

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) setCategory(categoryButton.dataset.category);

  const leagueButton = event.target.closest("[data-league]");
  if (leagueButton) setLeague(leagueButton.dataset.league);

  const quickCategory = event.target.closest("[data-quick-category]");
  if (quickCategory) setCategory(quickCategory.dataset.quickCategory);

  const quickLeague = event.target.closest("[data-quick-league]");
  if (quickLeague) setLeague(quickLeague.dataset.quickLeague);

  const navButton = event.target.closest("[data-nav-action]");
  if (navButton) {
    const action = navButton.dataset.navAction;
    updateActiveNav(action);
    if (action === "home") {
      clearAllFilters();
      document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (action === "favorite") {
      clearAllFilters();
      elements.heroes.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (action === "search") {
      document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => elements.search.focus(), 250);
    } else {
      setLeague(action);
    }
  }

  if (event.target.closest("[data-empty-clear]")) clearAllFilters({ focusSearch: true });
});

elements.search.addEventListener("input", () => {
  state.query = elements.search.value;
  renderGroups();
  if (state.query.trim()) scrollToLibrary();
});

elements.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

elements.clearFilters.addEventListener("click", () => clearAllFilters());

elements.clearRecent.addEventListener("click", () => {
  try { localStorage.removeItem(recentStorageKey); } catch { /* no-op */ }
  renderRecent();
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable;
  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" });
    elements.search.focus();
  }
  if (event.key === "Escape") {
    clearAllFilters({ focusSearch: true });
  }
});

renderHeroes();
renderCategoryFilters();
renderGroups();
