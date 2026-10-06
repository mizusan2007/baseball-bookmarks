"use strict";

const bookmarks = [
  { id: "mlb-tv", name: "MLB.TV", url: "https://www.mlb.com/tv", league: "MLB", category: "試合を見る", description: "MLB公式ライブ・見逃し配信", tags: ["配信", "映像", "公式"], favorite: true, icon: "TV" },
  { id: "pacific-league", name: "パ・リーグ.com", url: "https://pacificleague.com/", league: "NPB", category: "試合を見る", description: "パ・リーグ公式動画・ニュース", tags: ["配信", "映像", "公式"], favorite: true, icon: "PL" },
  { id: "mlb-film-room", name: "MLB Film Room", url: "https://www.mlb.com/ja/video", league: "MLB", category: "試合を見る", description: "MLB公式動画をプレーや選手から検索", tags: ["映像", "ハイライト", "公式"], favorite: false, icon: "▶" },
  { id: "mlb-com", name: "MLB.com", url: "https://www.mlb.com/", league: "MLB", category: "今日を追う", description: "MLB公式情報、日程、結果、ニュース", tags: ["公式", "試合", "ニュース"], favorite: false, icon: "MLB" },
  { id: "yahoo-sports", name: "Yahoo!スポーツ", url: "https://sports.yahoo.co.jp/", league: "NPB", category: "今日を追う", description: "NPBの試合速報、日程、結果、ニュース", tags: ["速報", "試合", "ニュース"], favorite: false, icon: "Y!" },
  { id: "the-athletic", name: "The Athletic", url: "https://www.nytimes.com/athletic/", league: "MLB", category: "今日を追う", description: "MLBニュース、取材記事、分析", tags: ["ニュース", "記事", "分析"], favorite: false, icon: "TA" },
  { id: "baseball-reference", name: "Baseball Reference", url: "https://www.baseball-reference.com/", league: "MLB", category: "選手を調べる", description: "歴代記録、選手・チーム成績を検索", tags: ["選手検索", "成績", "歴代記録"], favorite: false, icon: "BR" },
  { id: "npb-player-search", name: "NPB選手検索", url: "https://npb.jp/bis/players/all/index.html", league: "NPB", category: "選手を調べる", description: "現役・OBを含むNPB公式選手検索", tags: ["選手検索", "現役", "OB", "公式"], favorite: false, icon: "名" },
  { id: "npbase", name: "NPBase", url: "https://npbase.jp", league: "NPB", category: "選手を調べる", description: "NPBの試合速報、記録、選手・チームデータ", tags: ["選手", "成績", "速報"], favorite: false, icon: "NP" },
  { id: "baseball-freak", name: "Baseball Freak", url: "https://baseball-freak.com/", league: "NPB", category: "成績を見る", description: "プロ野球の試合、選手情報、各種記録", tags: ["成績", "選手", "記録"], favorite: false, icon: "BF" },
  { id: "baseball-data", name: "Baseball Data", url: "https://baseball-data.com/", league: "NPB", category: "成績を見る", description: "プロ野球の成績、記録、ランキング", tags: ["成績", "ランキング"], favorite: false, icon: "BD" },
  { id: "short-stop", name: "Short-Stop", url: "https://short-stop.jp/", league: "NPB", category: "成績を見る", description: "NPBの打撃・投手成績ランキングと年度別データ", tags: ["成績", "ランキング", "OPS", "K-BB%"], favorite: false, icon: "SS" },
  { id: "fangraphs", name: "FanGraphs", url: "https://www.fangraphs.com/", league: "MLB", category: "データを深掘り", description: "セイバーメトリクス、選手成績、分析記事", tags: ["WAR", "セイバー", "分析"], favorite: false, icon: "FG" },
  { id: "baseball-savant", name: "Baseball Savant", url: "https://baseballsavant.mlb.com/", league: "MLB", category: "データを深掘り", description: "Statcastデータ、検索、可視化", tags: ["Statcast", "分析", "打球"], favorite: false, icon: "BS" },
  { id: "tjstats", name: "TJStats", url: "https://tjstats.ca/", league: "MLB", category: "データを深掘り", description: "MLB・MiLBの高度なデータと成績分析", tags: ["分析", "MiLB", "Stuff+"], favorite: false, icon: "TJ" },
  { id: "fangraphs-depth-charts", name: "FanGraphs Depth Charts", url: "https://www.fangraphs.com/depthcharts.aspx?position=Team", league: "MLB", category: "データを深掘り", description: "チーム別予測、デプスチャート、予測WAR", tags: ["予測", "WAR", "デプス"], favorite: false, icon: "DC" },
  { id: "npb-basement", name: "NPB Basement", url: "https://npbbasement.com", league: "NPB", category: "データを深掘り", description: "NPBのWAR、守備・打撃・投球データ", tags: ["WAR", "守備", "分析"], favorite: false, icon: "NB" },
  { id: "npb-scholar", name: "NPB Scholar", url: "https://baseballscholar.com/", league: "NPB", category: "データを深掘り", description: "NPBの成績、独自指標、データ比較", tags: ["分析", "指標", "データ"], favorite: false, icon: "NS" },
  { id: "omata-pitcher-analysis", name: "お股ニキ 投手分析", url: "https://moonomt.com/pitcher/frederic-tarnok/2025", league: "MLB", category: "データを深掘り", description: "投手プロフィール、球種、球質の分析", tags: ["投手", "球種", "球質"], favorite: false, icon: "OM" },
  { id: "npb-roster-announcement", name: "NPB公示", url: "https://npb.jp/announcement/roster/", league: "NPB", category: "公示・編成を見る", description: "出場選手登録・登録抹消の公式公示", tags: ["公示", "登録", "抹消", "公式"], favorite: false, icon: "公" },
  { id: "cots-contracts", name: "Cots Contracts", url: "https://legacy.baseballprospectus.com/compensation/cots/", league: "MLB", category: "公示・編成を見る", description: "MLB選手の契約、年俸、オプション情報", tags: ["契約", "年俸", "編成"], favorite: false, icon: "C" },
  { id: "mlb-trade-rumors", name: "MLB Trade Rumors", url: "https://www.mlbtraderumors.com/", league: "MLB", category: "公示・編成を見る", description: "移籍、契約、ロースター関連情報", tags: ["移籍", "契約", "ニュース"], favorite: false, icon: "TR" },
  { id: "game-strategy-explorer", name: "Game Strategy Explorer", url: "https://baseballsavant.mlb.com/game-strategy-explorer", league: "MLB", category: "分析ツール", description: "勝利確率、得点期待値、試合状況別の戦術分析", tags: ["戦術", "勝利確率", "得点期待値"], favorite: false, icon: "GS" },
  { id: "npb-pitch-profile", name: "NPB Pitch Profile", url: "https://npbpitchprofile-stjm6eueundydvjbqfxlbv.streamlit.app", league: "NPB", category: "分析ツール", description: "投手の球種、球質、投球プロフィール", tags: ["投手", "球種", "球質"], favorite: false, icon: "P" },
  { id: "npb-bat-profile", name: "NPB Bat Profile", url: "https://npbbatprofile-7knoehzqmixokxxxj2weeq.streamlit.app", league: "NPB", category: "分析ツール", description: "打者の打撃プロフィールと打球データ", tags: ["打者", "打球", "分析"], favorite: false, icon: "B" }
];

const categories = [
  { name: "すべて", icon: "ALL", description: "全25サイト", accent: "#63a7ff" },
  { name: "試合を見る", icon: "▶", description: "配信・映像", accent: "#f15963" },
  { name: "今日を追う", icon: "◉", description: "速報・ニュース", accent: "#63a7ff" },
  { name: "選手を調べる", icon: "名", description: "選手検索", accent: "#55c7b0" },
  { name: "成績を見る", icon: "表", description: "記録・順位", accent: "#f0b34d" },
  { name: "データを深掘り", icon: "深", description: "指標・分析", accent: "#a58bff" },
  { name: "公示・編成を見る", icon: "公", description: "登録・契約", accent: "#ff8c6b" },
  { name: "分析ツール", icon: "具", description: "検索・可視化", accent: "#4ed3a1" }
];

const categoryNames = categories.map((item) => item.name);
const accentByCategory = Object.fromEntries(categories.map((item) => [item.name, item.accent]));
const state = { query: "", category: "すべて", league: "ALL" };
const recentStorageKey = "baseballPortalRecentV1";

const elements = {
  searchForm: document.querySelector("#siteSearchForm"), search: document.querySelector("#siteSearch"),
  favorites: document.querySelector("#favoriteLinks"), categoryFilters: document.querySelector("#categoryFilters"),
  clearFilters: document.querySelector("#clearFilters"), status: document.querySelector("#resultStatus"),
  recentSection: document.querySelector("#recentSection"), recentGrid: document.querySelector("#recentGrid"),
  clearRecent: document.querySelector("#clearRecent"), groups: document.querySelector("#bookmarkGroups"),
  empty: document.querySelector("#emptyState"), library: document.querySelector("#library")
};

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function normalize(value) { return String(value).normalize("NFKC").toLocaleLowerCase("ja"); }
function getCategoryAccent(category) { return accentByCategory[category] || "#63a7ff"; }

function linkMarkup(bookmark, className = "bookmark-card") {
  return `
    <a class="${className}" href="${escapeHtml(bookmark.url)}" target="_blank" rel="noopener noreferrer" data-bookmark-id="${bookmark.id}" style="--accent:${getCategoryAccent(bookmark.category)}">
      <span class="letter-icon" aria-hidden="true">${escapeHtml(bookmark.icon)}</span>
      <span class="link-copy">
        <span class="link-meta"><span class="league-badge league-badge--${bookmark.league.toLowerCase()}">${bookmark.league}</span><span>${escapeHtml(bookmark.category)}</span></span>
        <strong>${escapeHtml(bookmark.name)}</strong><small>${escapeHtml(bookmark.description)}</small>
      </span><span class="external-arrow" aria-hidden="true">↗</span>
    </a>`;
}

function favoriteMarkup(bookmark) {
  return `
    <a class="favorite-link favorite-link--${bookmark.league.toLowerCase()}" href="${escapeHtml(bookmark.url)}" target="_blank" rel="noopener noreferrer" data-bookmark-id="${bookmark.id}">
      <span><small>FAVORITE · ${bookmark.league}</small><strong>${escapeHtml(bookmark.name)}</strong><em>${escapeHtml(bookmark.description)}</em></span>
      <span class="favorite-icon" aria-hidden="true">${escapeHtml(bookmark.icon)}</span>
    </a>`;
}

function renderFavorites() { elements.favorites.innerHTML = bookmarks.filter((item) => item.favorite).map(favoriteMarkup).join(""); }

function renderCategoryFilters() {
  elements.categoryFilters.innerHTML = categories.map((category) => {
    const count = category.name === "すべて" ? bookmarks.length : bookmarks.filter((item) => item.category === category.name).length;
    return `
      <button class="task-button" type="button" data-category="${escapeHtml(category.name)}" aria-pressed="${state.category === category.name}" style="--accent:${category.accent}">
        <span class="task-icon" aria-hidden="true">${escapeHtml(category.icon)}</span>
        <span><strong>${escapeHtml(category.name)}</strong><small>${escapeHtml(category.description)} · ${count}</small></span>
      </button>`;
  }).join("");
}

function getFilteredBookmarks() {
  const query = normalize(state.query.trim());
  const isDefault = !query && state.category === "すべて" && state.league === "ALL";
  return bookmarks.filter((bookmark) => {
    if (isDefault && bookmark.favorite) return false;
    if (state.category !== "すべて" && bookmark.category !== state.category) return false;
    if (state.league !== "ALL" && bookmark.league !== state.league) return false;
    if (!query) return true;
    return normalize([bookmark.name, bookmark.description, bookmark.category, bookmark.league, ...bookmark.tags].join(" ")).includes(query);
  });
}

function renderGroups() {
  const filtered = getFilteredBookmarks();
  const relevant = categoryNames.slice(1).filter((category) => filtered.some((item) => item.category === category));
  elements.groups.innerHTML = relevant.map((category) => {
    const items = filtered.filter((item) => item.category === category);
    return `<section class="bookmark-group" aria-labelledby="group-${escapeHtml(category)}"><div class="group-heading"><h3 id="group-${escapeHtml(category)}">${escapeHtml(category)}</h3><span>${items.length}件</span></div><div class="bookmark-grid">${items.map((item) => linkMarkup(item)).join("")}</div></section>`;
  }).join("");
  const conditions = [];
  if (state.query.trim()) conditions.push(`「${state.query.trim()}」`);
  if (state.category !== "すべて") conditions.push(state.category);
  if (state.league !== "ALL") conditions.push(state.league);
  elements.status.textContent = `${filtered.length}件を表示${conditions.length ? `（${conditions.join(" / ")}）` : " · お気に入り2件は上部に表示"}`;
  elements.empty.hidden = filtered.length !== 0;
  elements.groups.hidden = filtered.length === 0;
  elements.clearFilters.disabled = conditions.length === 0;
  updateControls();
}

function updateControls() {
  document.querySelectorAll("[data-category]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.category === state.category)));
  document.querySelectorAll("[data-league]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.league === state.league)));
  document.querySelectorAll("[data-nav-action]").forEach((button) => {
    const action = button.dataset.navAction;
    const active = (action === "home" && state.league === "ALL") || action === state.league;
    if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
  });
}

function getRecentIds() {
  try { const stored = JSON.parse(localStorage.getItem(recentStorageKey) || "[]"); return Array.isArray(stored) ? stored.filter((id) => typeof id === "string").slice(0, 4) : []; }
  catch { return []; }
}

function rememberBookmark(id) {
  if (!bookmarks.some((item) => item.id === id)) return;
  try { localStorage.setItem(recentStorageKey, JSON.stringify([id, ...getRecentIds().filter((recentId) => recentId !== id)].slice(0, 4))); renderRecent(); }
  catch { /* The link still opens when storage is unavailable. */ }
}

function renderRecent() {
  const items = getRecentIds().map((id) => bookmarks.find((item) => item.id === id)).filter(Boolean);
  elements.recentSection.hidden = items.length === 0;
  elements.recentGrid.innerHTML = items.map((item) => linkMarkup(item, "recent-card")).join("");
}

function scrollToLibrary() { elements.library.scrollIntoView({ behavior: "smooth", block: "start" }); }

function clearAllFilters({ focusSearch = false } = {}) {
  state.query = ""; state.category = "すべて"; state.league = "ALL"; elements.search.value = "";
  renderCategoryFilters(); renderGroups(); if (focusSearch) elements.search.focus();
}

function setCategory(category) { state.category = categoryNames.includes(category) ? category : "すべて"; renderCategoryFilters(); renderGroups(); scrollToLibrary(); }
function setLeague(league) { state.league = ["ALL", "MLB", "NPB"].includes(league) ? league : "ALL"; renderGroups(); scrollToLibrary(); }

document.addEventListener("click", (event) => {
  const bookmarkLink = event.target.closest("[data-bookmark-id]"); if (bookmarkLink) rememberBookmark(bookmarkLink.dataset.bookmarkId);
  const categoryButton = event.target.closest("[data-category]"); if (categoryButton) setCategory(categoryButton.dataset.category);
  const leagueButton = event.target.closest("[data-league]"); if (leagueButton) setLeague(leagueButton.dataset.league);
  const navButton = event.target.closest("[data-nav-action]");
  if (navButton) {
    const action = navButton.dataset.navAction;
    if (action === "home") { clearAllFilters(); document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" }); }
    else if (action === "search") { document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" }); window.setTimeout(() => elements.search.focus(), 250); }
    else setLeague(action);
  }
  if (event.target.closest("[data-empty-clear]")) clearAllFilters({ focusSearch: true });
});

elements.search.addEventListener("input", () => { state.query = elements.search.value; renderGroups(); });
elements.searchForm.addEventListener("submit", (event) => { event.preventDefault(); scrollToLibrary(); });
elements.clearFilters.addEventListener("click", () => clearAllFilters());
elements.clearRecent.addEventListener("click", () => { try { localStorage.removeItem(recentStorageKey); } catch { /* no-op */ } renderRecent(); });

document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable;
  if (event.key === "/" && !isTyping) { event.preventDefault(); document.querySelector("#home").scrollIntoView({ behavior: "smooth", block: "start" }); elements.search.focus(); }
  if (event.key === "Escape") clearAllFilters({ focusSearch: true });
});

renderFavorites(); renderCategoryFilters(); renderRecent(); renderGroups();
