// ----------------------
// Data
// ----------------------
const levels = [
  { id: 1, maxItems: 6 },
  { id: 2, maxItems: 12 },
  { id: 3, maxItems: 20 }
];

const iconSvg = {
  numbers: `<img class="categoryIconImage" src="assets/icon/number.png" alt="Numeri icon" />`,
  colors: `<img class="categoryIconImage" src="assets/icon/color.png" alt="Colori icon" />`,
  animals: `<img class="categoryIconImage" src="assets/animali/cat.png" alt="Cat face" />`,
  days: `<img class="categoryIconImage" src="assets/week.png" alt="Week icon" />`,
  school: `<img class="categoryIconImage" src="assets/school%20object/pencil.png" alt="School object icon" />`,
  food: `<img class="categoryIconImage" src="assets/icon/food.png" alt="Cibo icon" />`
};

const categories = [
  {
    id: "numbers",
    label: "Numeri",
    iconSvg: iconSvg.numbers,
    items: [
      { id: "1", word: "one", type: "text", display: "1" },
      { id: "2", word: "two", type: "text", display: "2" },
      { id: "3", word: "three", type: "text", display: "3" },
      { id: "4", word: "four", type: "text", display: "4" },
      { id: "5", word: "five", type: "text", display: "5" },
      { id: "6", word: "six", type: "text", display: "6" },
      { id: "7", word: "seven", type: "text", display: "7" },
      { id: "8", word: "eight", type: "text", display: "8" },
      { id: "9", word: "nine", type: "text", display: "9" },
      { id: "10", word: "ten", type: "text", display: "10" },
      { id: "11", word: "eleven", type: "text", display: "11" },
      { id: "12", word: "twelve", type: "text", display: "12" },
      { id: "13", word: "thirteen", type: "text", display: "13" },
      { id: "14", word: "fourteen", type: "text", display: "14" },
      { id: "15", word: "fifteen", type: "text", display: "15" },
      { id: "16", word: "sixteen", type: "text", display: "16" },
      { id: "17", word: "seventeen", type: "text", display: "17" },
      { id: "18", word: "eighteen", type: "text", display: "18" },
      { id: "19", word: "nineteen", type: "text", display: "19" },
      { id: "20", word: "twenty", type: "text", display: "20" }
    ]
  },
  {
    id: "colors",
    label: "Colori",
    iconSvg: iconSvg.colors,
    items: [
      { id: "red", word: "red", type: "color", display: "#ff4f4f" },
      { id: "blue", word: "blue", type: "color", display: "#3b7bff" },
      { id: "yellow", word: "yellow", type: "color", display: "#ffd944" },
      { id: "green", word: "green", type: "color", display: "#4fd6a3" },
      { id: "orange", word: "orange", type: "color", display: "#ff9f3f" },
      { id: "purple", word: "purple", type: "color", display: "#8a7bff" },
      { id: "pink", word: "pink", type: "color", display: "#ff7acb" },
      { id: "black", word: "black", type: "color", display: "#2b2b2b" },
      { id: "white", word: "white", type: "color", display: "#ffffff" },
      { id: "brown", word: "brown", type: "color", display: "#b07b54" }
    ]
  },
  {
    id: "animals",
    label: "Animali",
    iconSvg: iconSvg.animals,
    items: [
      { id: "cat", word: "cat", type: "image", display: "assets/animali/cat.png" },
      { id: "cow", word: "cow", type: "image", display: "assets/animali/cow.png" },
      { id: "dog", word: "dog", type: "image", display: "assets/animali/dog.png" },
      { id: "elephant", word: "elephant", type: "image", display: "assets/animali/elephant.png" },
      { id: "fish", word: "fish", type: "image", display: "assets/animali/fish.png" },
      { id: "lion", word: "lion", type: "image", display: "assets/animali/lion.png" },
      { id: "monkey", word: "monkey", type: "image", display: "assets/animali/monkey.png" },
      { id: "snake", word: "snake", type: "image", display: "assets/animali/snake.png" },
      { id: "tiger", word: "tiger", type: "image", display: "assets/animali/tiger.png" }
    ]
  },
  {
    id: "days",
    label: "Giorni",
    iconSvg: iconSvg.days,
    items: [
      { id: "monday", word: "monday", type: "text", display: "Monday", itWord: "Lunedì" },
      { id: "tuesday", word: "tuesday", type: "text", display: "Tuesday", itWord: "Martedì" },
      { id: "wednesday", word: "wednesday", type: "text", display: "Wednesday", itWord: "Mercoledì" },
      { id: "thursday", word: "thursday", type: "text", display: "Thursday", itWord: "Giovedì" },
      { id: "friday", word: "friday", type: "text", display: "Friday", itWord: "Venerdì" },
      { id: "saturday", word: "saturday", type: "text", display: "Saturday", itWord: "Sabato" },
      { id: "sunday", word: "sunday", type: "text", display: "Sunday", itWord: "Domenica" }
    ]
  },
  {
    id: "school",
    label: "School Objects",
    iconSvg: iconSvg.school,
    items: [
      { id: "exercise-book", word: "exercise book", type: "image", display: "assets/school%20object/exercise%20book.png" },
      { id: "felt-tip-pen", word: "felt tip pen", type: "image", display: "assets/school%20object/felt%20tip%20pen.png" },
      { id: "glue-stick", word: "glue stick", type: "image", display: "assets/school%20object/glue%20stick.png" },
      { id: "pen", word: "pen", type: "image", display: "assets/school%20object/pen.png" },
      { id: "pencil-case", word: "pencil case", type: "image", display: "assets/school%20object/pencil%20case.png" },
      { id: "pencil", word: "pencil", type: "image", display: "assets/school%20object/pencil.png" },
      { id: "rubber", word: "rubber", type: "image", display: "assets/school%20object/rubber.png" },
      { id: "ruler", word: "ruler", type: "image", display: "assets/school%20object/ruler.png" },
      { id: "school-bag", word: "school bag", type: "image", display: "assets/school%20object/school%20bag.png" },
      { id: "scissors", word: "scissors", type: "image", display: "assets/school%20object/scissors.png" },
      { id: "sharpener", word: "sharpener", type: "image", display: "assets/school%20object/sharpener.png" }
    ]
  },
  {
    id: "food",
    label: "Cibo",
    iconSvg: iconSvg.food,
    items: [
      { id: "apple", word: "apple", type: "image", display: "assets/food/apple.png" },
      { id: "banana", word: "banana", type: "image", display: "assets/food/banana.png" },
      { id: "bread", word: "bread", type: "image", display: "assets/food/bread.png" },
      { id: "cheese", word: "cheese", type: "image", display: "assets/food/cheese.png" },
      { id: "egg", word: "egg", type: "image", display: "assets/food/egg.png" },
      { id: "fish", word: "fish", type: "image", display: "assets/food/fish.png" },
      { id: "milk", word: "milk", type: "image", display: "assets/food/milk.png" },
      { id: "pizza", word: "pizza", type: "image", display: "assets/food/pizza.png" },
      { id: "rice", word: "rice", type: "image", display: "assets/food/rice.png" },
      { id: "water", word: "water", type: "image", display: "assets/food/water.png" }
    ]
  }
];

const iconLibrary = {
  cat: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="18" fill="#ffd46a"/><path d="M18 28l8-8 2 12" fill="#ffb56a"/><path d="M46 28l-8-8-2 12" fill="#ffb56a"/><circle cx="26" cy="34" r="3" fill="#2b2b2b"/><circle cx="38" cy="34" r="3" fill="#2b2b2b"/><path d="M28 42c2 3 6 3 8 0" stroke="#2b2b2b" stroke-width="2" fill="none"/></svg>`,
  dog: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="36" r="18" fill="#f5b27c"/><rect x="16" y="20" width="10" height="16" rx="4" fill="#e59b63"/><rect x="38" y="20" width="10" height="16" rx="4" fill="#e59b63"/><circle cx="26" cy="34" r="3" fill="#2b2b2b"/><circle cx="38" cy="34" r="3" fill="#2b2b2b"/><circle cx="32" cy="40" r="4" fill="#2b2b2b"/></svg>`,
  bird: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="30" cy="34" r="16" fill="#9bd7ff"/><circle cx="26" cy="32" r="3" fill="#2b2b2b"/><path d="M42 32l8 4-8 4" fill="#ffd46a"/><path d="M22 44c6 6 16 6 22 0" stroke="#2b2b2b" stroke-width="2" fill="none"/></svg>`,
  fish: `<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="30" cy="34" rx="18" ry="12" fill="#6ed0ff"/><circle cx="26" cy="32" r="3" fill="#2b2b2b"/><path d="M44 34l10-8v16z" fill="#5bb7e6"/></svg>`,
  lion: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="20" fill="#ffb347"/><circle cx="32" cy="34" r="14" fill="#ffd46a"/><circle cx="27" cy="34" r="3" fill="#2b2b2b"/><circle cx="37" cy="34" r="3" fill="#2b2b2b"/><path d="M28 42c2 3 6 3 8 0" stroke="#2b2b2b" stroke-width="2" fill="none"/></svg>`,
  tiger: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="18" fill="#ff9f3f"/><path d="M20 28h8M36 28h8M20 40h8M36 40h8" stroke="#2b2b2b" stroke-width="2"/><circle cx="26" cy="34" r="3" fill="#2b2b2b"/><circle cx="38" cy="34" r="3" fill="#2b2b2b"/></svg>`,
  elephant: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="30" cy="34" r="18" fill="#b0c4ff"/><rect x="38" y="32" width="12" height="16" rx="6" fill="#9fb6ff"/><circle cx="24" cy="34" r="3" fill="#2b2b2b"/><circle cx="34" cy="34" r="3" fill="#2b2b2b"/></svg>`,
  monkey: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="18" fill="#c28a5b"/><circle cx="18" cy="34" r="8" fill="#b07b54"/><circle cx="46" cy="34" r="8" fill="#b07b54"/><circle cx="28" cy="34" r="3" fill="#2b2b2b"/><circle cx="36" cy="34" r="3" fill="#2b2b2b"/></svg>`,
  rabbit: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="36" r="16" fill="#f3d9ff"/><rect x="20" y="10" width="8" height="20" rx="4" fill="#e6c4ff"/><rect x="36" y="10" width="8" height="20" rx="4" fill="#e6c4ff"/><circle cx="27" cy="34" r="3" fill="#2b2b2b"/><circle cx="37" cy="34" r="3" fill="#2b2b2b"/></svg>`,
  frog: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="36" r="16" fill="#7ee081"/><circle cx="22" cy="30" r="6" fill="#a6f0a8"/><circle cx="42" cy="30" r="6" fill="#a6f0a8"/><circle cx="22" cy="30" r="2" fill="#2b2b2b"/><circle cx="42" cy="30" r="2" fill="#2b2b2b"/></svg>`,
  book: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="16" width="16" height="32" rx="4" fill="#8a7bff"/><rect x="34" y="16" width="16" height="32" rx="4" fill="#6dd0ff"/><rect x="18" y="20" width="8" height="20" rx="3" fill="#fff"/><rect x="38" y="20" width="8" height="20" rx="3" fill="#fff"/></svg>`,
  pencil: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="10" width="24" height="38" rx="6" fill="#ffd46a"/><polygon points="32,54 22,46 42,46" fill="#ff7acb"/></svg>`,
  pen: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="26" y="10" width="12" height="32" rx="5" fill="#47b7ff"/><rect x="24" y="42" width="16" height="10" rx="4" fill="#8a7bff"/></svg>`,
  ruler: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="24" width="36" height="14" rx="6" fill="#ffd46a"/><path d="M20 24v8M26 24v6M32 24v8M38 24v6M44 24v8" stroke="#2b2b2b" stroke-width="2"/></svg>`,
  eraser: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="26" width="28" height="16" rx="6" fill="#ff7acb"/><rect x="18" y="34" width="28" height="8" rx="4" fill="#ffd46a"/></svg>`,
  backpack: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="16" width="24" height="32" rx="8" fill="#47b7ff"/><rect x="24" y="28" width="16" height="12" rx="4" fill="#fff"/></svg>`,
  chair: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="22" y="18" width="20" height="16" rx="4" fill="#8a7bff"/><rect x="22" y="34" width="20" height="8" rx="4" fill="#6dd0ff"/><rect x="22" y="42" width="6" height="12" rx="3" fill="#8a7bff"/><rect x="36" y="42" width="6" height="12" rx="3" fill="#8a7bff"/></svg>`,
  desk: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="14" y="22" width="36" height="10" rx="4" fill="#ffd46a"/><rect x="18" y="32" width="6" height="18" rx="3" fill="#ff7acb"/><rect x="40" y="32" width="6" height="18" rx="3" fill="#ff7acb"/></svg>`,
  notebook: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="16" width="24" height="32" rx="6" fill="#4fd6a3"/><rect x="24" y="20" width="16" height="4" rx="2" fill="#fff"/><rect x="24" y="28" width="16" height="4" rx="2" fill="#fff"/></svg>`,
  scissors: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="22" cy="38" r="6" fill="#ff7acb"/><circle cx="40" cy="38" r="6" fill="#47b7ff"/><path d="M24 34l16-16" stroke="#2b2b2b" stroke-width="3"/><path d="M40 34L24 18" stroke="#2b2b2b" stroke-width="3"/></svg>`,
  rubber: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="16" y="28" width="32" height="16" rx="6" fill="#ff9fd7"/><rect x="16" y="36" width="32" height="8" rx="4" fill="#ffd46a"/></svg>`,
  sharpener: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="22" width="28" height="22" rx="6" fill="#8a7bff"/><circle cx="32" cy="33" r="6" fill="#fff"/><circle cx="32" cy="33" r="3" fill="#2b2b2b"/></svg>`,
  glue: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="26" y="12" width="12" height="10" rx="3" fill="#ffd46a"/><rect x="22" y="22" width="20" height="30" rx="6" fill="#47b7ff"/><rect x="26" y="30" width="12" height="12" rx="4" fill="#fff"/></svg>`,
  felt: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="12" width="28" height="36" rx="8" fill="#4fd6a3"/><rect x="22" y="44" width="20" height="8" rx="4" fill="#ffd46a"/></svg>`,
  schoolbag: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="14" width="24" height="34" rx="8" fill="#ff7acb"/><rect x="24" y="26" width="16" height="12" rx="4" fill="#fff"/><rect x="26" y="10" width="12" height="6" rx="3" fill="#ffd46a"/></svg>`,
  "exercise-book": `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="18" y="14" width="28" height="36" rx="6" fill="#6dd0ff"/><rect x="22" y="20" width="20" height="4" rx="2" fill="#fff"/><rect x="22" y="28" width="20" height="4" rx="2" fill="#fff"/><rect x="22" y="36" width="20" height="4" rx="2" fill="#fff"/></svg>`
};

// ----------------------
// Storage keys
// ----------------------
const STORAGE_CATEGORY_PROGRESS = "ewaCategoryProgress";
const STORAGE_SELECTED_CATEGORY = "ewaSelectedCategory";
const STORAGE_SELECTED_MASCOT = "ewaSelectedMascot";
const STORAGE_STATS = "ewaStats";
const STORAGE_PLAYER_MODE = "ewaPlayerMode";
const STORAGE_PLAYER_NAMES = "ewaPlayerNames";
const STORAGE_PLAYER_MASCOTS = "ewaPlayerMascots";
const STORAGE_POINTS = "ewaPoints";
const STORAGE_SELECTED_VOICE = "ewaSelectedVoice";

// ----------------------
// State
// ----------------------
const maxRounds = 5;
let round = 1;
let stars = 0;
let options = [];
let correctItem = null;
let inputLocked = false;
let triesThisRound = 0;
let recentHistory = [];

let currentCategoryId = categories[0].id;
let currentGameMode = "choice"; // "choice" | "build" | "type"
let selectedMascot = "mascot-1";
let playerMode = "single"; // "single" | "two"
let currentPlayerIndex = 0;
let playerScores = [0, 0];
let playerNames = ["Giocatore 1", "Giocatore 2"];
let playerMascots = ["mascot-1", "mascot-2"];
let mascotTargetIndex = 0;
let winMascotId = null;

// Level 2 letters state
let targetWord = "";
let built = [];
let bank = [];

// ----------------------
// UI refs
// ----------------------
const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const winScreen  = document.getElementById("winScreen");
const progressScreen = document.getElementById("progressScreen");

const startBtn = document.getElementById("startBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");
const backHomeBtn = document.getElementById("backHomeBtn");

const categoryGrid = document.getElementById("categoryGrid");
const progressPill = document.getElementById("progressPill");
const openProgressBtn = document.getElementById("openProgressBtn");
const progressTableBody = document.getElementById("progressTableBody");
const progressTotalP1 = document.getElementById("progressTotalP1");
const progressTotalP2 = document.getElementById("progressTotalP2");
const progressP1Label = document.getElementById("progressP1Label");
const progressP2Label = document.getElementById("progressP2Label");
const resetPointsBtn = document.getElementById("resetPointsBtn");
const backHomeFromProgressBtn = document.getElementById("backHomeFromProgressBtn");

const gameChoiceBtn = document.getElementById("gameChoiceBtn");
const gameBuildBtn = document.getElementById("gameBuildBtn");
const gameTypeBtn = document.getElementById("gameTypeBtn");
const playerSingleBtn = document.getElementById("playerSingleBtn");
const playerTwoBtn = document.getElementById("playerTwoBtn");
const player1NameInput = document.getElementById("player1Name");
const player2NameInput = document.getElementById("player2Name");
const voiceSelect = document.getElementById("voiceSelect");

const speaker = document.getElementById("speaker");
const reinforcement = document.getElementById("reinforcement");
const promptText = document.getElementById("promptText");
const optionsDiv = document.getElementById("options");
const lettersGame = document.getElementById("lettersGame");
const builtWordEl = document.getElementById("builtWord");
const letterBankEl = document.getElementById("letterBank");
const clearWordBtn = document.getElementById("clearWordBtn");
const hintBtn = document.getElementById("hintBtn");
const typingGame = document.getElementById("typingGame");
const typingFigure = document.getElementById("typingFigure");
const typingInput = document.getElementById("typingInput");
const typingSubmitBtn = document.getElementById("typingSubmitBtn");

const starsTop = document.getElementById("stars");
const levelLabel = document.getElementById("levelLabel");
const progressDiv = document.getElementById("progress");
const playerTurnLabel = document.getElementById("playerTurnLabel");

const winTitle = document.getElementById("winTitle");
const winSubtitle = document.getElementById("winSubtitle");
const winStars = document.getElementById("winStars");
const winStage = document.getElementById("winStage");
const newBadge = document.getElementById("newBadge");
const newBadgeLabel = document.getElementById("newBadgeLabel");
const continueBtn = document.getElementById("continueBtn");
const homeFromWinBtn = document.getElementById("homeFromWinBtn");

const mascotOverlay = document.getElementById("mascotOverlay");
const mascotHome = document.getElementById("mascotHome");
const mascotGame = document.getElementById("mascotGame");
const mascotWin = document.getElementById("mascotWin");
const overlayTitle = document.querySelector(".overlayTitle");
const overlaySubtitle = document.querySelector(".overlaySubtitle");
const player1MascotImg = document.getElementById("player1MascotImg");
const player2MascotImg = document.getElementById("player2MascotImg");
const player1MascotLabel = document.getElementById("player1MascotLabel");
const player2MascotLabel = document.getElementById("player2MascotLabel");
const changeMascotP1Btn = document.getElementById("changeMascotP1Btn");
const changeMascotP2Btn = document.getElementById("changeMascotP2Btn");

// ----------------------
// Audio
// ----------------------
let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}
function tone(freq, durMs, type = "sine", gainVal = 0.08, when = 0) {
  ensureAudio();
  const t0 = audioCtx.currentTime + when;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(gainVal, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + durMs / 1000);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(t0);
  osc.stop(t0 + durMs / 1000 + 0.02);
}
function noiseBurst(durMs, gainVal = 0.06, when = 0) {
  ensureAudio();
  const t0 = audioCtx.currentTime + when;
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * (durMs / 1000), audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();
  src.buffer = buffer;
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(gainVal, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + durMs / 1000);
  src.connect(gain).connect(audioCtx.destination);
  src.start(t0);
  src.stop(t0 + durMs / 1000 + 0.02);
}
function soundApplause() {
  // Light synthetic applause: multiple short noise bursts.
  const bursts = 6;
  for (let i = 0; i < bursts; i++) {
    const jitter = i * 0.08 + Math.random() * 0.04;
    const gain = 0.04 + Math.random() * 0.03;
    noiseBurst(60, gain, jitter);
  }
}
function soundCorrect() {
  tone(660, 80, "sine", 0.08, 0);
  tone(880, 120, "sine", 0.07, 0.08);
  soundApplause();
}
function soundWrong() {
  tone(180, 160, "square", 0.06, 0);
  noiseBurst(80, 0.05, 0.05);
}
function soundWin() {
  tone(523.25, 110, "sine", 0.08, 0.00);
  tone(659.25, 110, "sine", 0.08, 0.12);
  tone(783.99, 160, "sine", 0.08, 0.24);
  tone(1046.50, 220, "sine", 0.07, 0.40);
}

// ----------------------
// Persistence
// ----------------------
function loadProgress() {
  const raw = localStorage.getItem(STORAGE_CATEGORY_PROGRESS);
  if (!raw) return null;
  try { return JSON.parse(raw) || null; } catch { return null; }
}
function saveProgress(progress) {
  localStorage.setItem(STORAGE_CATEGORY_PROGRESS, JSON.stringify(progress));
}
function initProgress() {
  const progress = {};
  categories.forEach((c, idx) => {
    progress[c.id] = {
      levelUnlocked: idx === 0 ? 1 : 0,
      levelCompleted: 0
    };
  });
  saveProgress(progress);
  return progress;
}

function loadStats() {
  const raw = localStorage.getItem(STORAGE_STATS);
  if (!raw) return {};
  try { return JSON.parse(raw) || {}; } catch { return {}; }
}
function saveStats(stats) {
  localStorage.setItem(STORAGE_STATS, JSON.stringify(stats));
}

function loadSelectedCategory() {
  const v = localStorage.getItem(STORAGE_SELECTED_CATEGORY);
  if (v && categories.find(c => c.id === v)) currentCategoryId = v;
}
function saveSelectedCategory() {
  localStorage.setItem(STORAGE_SELECTED_CATEGORY, currentCategoryId);
}

function loadMascot() {
  const v = localStorage.getItem(STORAGE_SELECTED_MASCOT);
  if (v) selectedMascot = v;
}
function saveMascot() {
  localStorage.setItem(STORAGE_SELECTED_MASCOT, selectedMascot);
}
function loadPlayerMode() {
  const v = localStorage.getItem(STORAGE_PLAYER_MODE);
  if (v === "single" || v === "two") playerMode = v;
}
function savePlayerMode() {
  localStorage.setItem(STORAGE_PLAYER_MODE, playerMode);
}
function loadPlayerNames() {
  const raw = localStorage.getItem(STORAGE_PLAYER_NAMES);
  if (!raw) return;
  try {
    const v = JSON.parse(raw);
    if (Array.isArray(v) && v.length >= 2) {
      playerNames[0] = String(v[0] || "Giocatore 1");
      playerNames[1] = String(v[1] || "Giocatore 2");
    }
  } catch {
    // ignore
  }
}
function savePlayerNames() {
  localStorage.setItem(STORAGE_PLAYER_NAMES, JSON.stringify(playerNames));
}
function loadPlayerMascots() {
  const raw = localStorage.getItem(STORAGE_PLAYER_MASCOTS);
  if (!raw) {
    if (selectedMascot) playerMascots[0] = selectedMascot;
    return;
  }
  try {
    const v = JSON.parse(raw);
    if (Array.isArray(v) && v.length >= 2) {
      playerMascots[0] = v[0] || "mascot-1";
      playerMascots[1] = v[1] || "mascot-2";
    }
  } catch {
    // ignore
  }
}
function savePlayerMascots() {
  localStorage.setItem(STORAGE_PLAYER_MASCOTS, JSON.stringify(playerMascots));
}
function loadPoints() {
  const raw = localStorage.getItem(STORAGE_POINTS);
  if (!raw) return { totals: [0, 0], byCategory: {} };
  try {
    const v = JSON.parse(raw);
    if (!v || typeof v !== "object") return { totals: [0, 0], byCategory: {} };
    if (!v.byCategory || typeof v.byCategory !== "object") v.byCategory = {};
    if (!Array.isArray(v.totals) || v.totals.length < 2) v.totals = [0, 0];
    v.totals[0] = Number(v.totals[0]) || 0;
    v.totals[1] = Number(v.totals[1]) || 0;
    return v;
  } catch {
    return { totals: [0, 0], byCategory: {} };
  }
}
function savePoints(points) {
  localStorage.setItem(STORAGE_POINTS, JSON.stringify(points));
}
function normalizeName(name, fallback) {
  const trimmed = String(name || "").trim();
  return trimmed.length ? trimmed : fallback;
}
function updatePlayerNameInputs() {
  player1NameInput.value = playerNames[0];
  player2NameInput.value = playerNames[1];
}
function mascotLabelFromId(id) {
  const map = {
    "mascot-1": "Momo",
    "mascot-2": "Luna",
    "mascot-3": "Nino",
    "mascot-4": "Zoe",
    "mascotte-5": "Maya",
    "mascotte-6": "Lillo"
  };
  return map[id] || "Momo";
}

// ----------------------
// Helpers
// ----------------------
function getCategory() { return categories.find(c => c.id === currentCategoryId); }
function getProgress() { return loadProgress() || initProgress(); }

function getCurrentLevel() {
  const progress = getProgress();
  return progress[currentCategoryId]?.levelUnlocked || 1;
}
function getLevelMaxItems(levelId) {
  return levels.find(l => l.id === levelId)?.maxItems || 6;
}
function totalRounds() {
  return maxRounds * (playerMode === "two" ? 2 : 1);
}

function updateProgressPill() {
  const levelId = getCurrentLevel();
  const cat = getCategory();
  progressPill.textContent = `Categoria: ${cat.label} · Livello ${levelId}`;
}
function updateLevelLabel() {
  const levelId = getCurrentLevel();
  const cat = getCategory();
  levelLabel.textContent = `${cat.label} · Livello ${levelId}`;
}

function updateProgressDots() {
  const total = totalRounds();
  progressDiv.textContent = "●".repeat(round) + "○".repeat(total - round);
}
function setReinforcement(text, visible) {
  reinforcement.textContent = text || "";
  reinforcement.className = visible ? "visible" : "hidden";
}

function updateGameModeUI() {
  if (currentGameMode === "choice") {
    gameChoiceBtn.classList.add("active");
    gameBuildBtn.classList.remove("active");
    gameTypeBtn.classList.remove("active");
  } else if (currentGameMode === "build") {
    gameBuildBtn.classList.add("active");
    gameChoiceBtn.classList.remove("active");
    gameTypeBtn.classList.remove("active");
  } else {
    gameTypeBtn.classList.add("active");
    gameChoiceBtn.classList.remove("active");
    gameBuildBtn.classList.remove("active");
  }
}
function updatePlayerModeUI() {
  if (playerMode === "single") {
    playerSingleBtn.classList.add("active");
    playerTwoBtn.classList.remove("active");
  } else {
    playerTwoBtn.classList.add("active");
    playerSingleBtn.classList.remove("active");
  }
}
function updatePlayerTurnLabel() {
  if (playerMode === "two") {
    const label = normalizeName(playerNames[currentPlayerIndex], `Giocatore ${currentPlayerIndex + 1}`);
    playerTurnLabel.textContent = `Turno: ${label}`;
  } else {
    playerTurnLabel.textContent = "";
  }
}
function updateScoreDisplay() {
  if (playerMode === "two") {
    const n1 = normalizeName(playerNames[0], "Giocatore 1");
    const n2 = normalizeName(playerNames[1], "Giocatore 2");
    starsTop.textContent = `${n1} ${playerScores[0]} · ${n2} ${playerScores[1]}`;
  } else {
    const n1 = normalizeName(playerNames[0], "Giocatore 1");
    starsTop.textContent = `⭐ ${n1} ${playerScores[0]}`;
  }
}

function updateMascotUI() {
  const p1Src = `assets/${playerMascots[0]}.png`;
  const p2Src = `assets/${playerMascots[1]}.png`;
  mascotHome.src = p1Src;

  const activeMascotId = playerMode === "two" ? playerMascots[currentPlayerIndex] : playerMascots[0];
  mascotGame.src = `assets/${activeMascotId}.png`;
  mascotWin.src = `assets/${winMascotId || activeMascotId}.png`;

  player1MascotImg.src = p1Src;
  player2MascotImg.src = p2Src;
  const n1 = normalizeName(playerNames[0], "Giocatore 1");
  const n2 = normalizeName(playerNames[1], "Giocatore 2");
  player1MascotLabel.textContent = `${n1} · ${mascotLabelFromId(playerMascots[0])}`;
  player2MascotLabel.textContent = `${n2} · ${mascotLabelFromId(playerMascots[1])}`;
}

function showOnly(screen) {
  homeScreen.classList.add("hiddenScreen");
  gameScreen.classList.add("hiddenScreen");
  winScreen.classList.add("hiddenScreen");
  progressScreen.classList.add("hiddenScreen");
  screen.classList.remove("hiddenScreen");
}

function showHome() {
  showOnly(homeScreen);
  updateProgressPill();
  updateLevelLabel();
  renderCategories();
  updateGameModeUI();
  updatePlayerModeUI();
  updateMascotUI();
  updatePlayerNameInputs();
}
function showProgress() {
  showOnly(progressScreen);
  renderProgressTable();
}
function showGame() {
  showOnly(gameScreen);
  updateProgressPill();
  updateLevelLabel();
  updateGameModeUI();
  updatePlayerModeUI();
  updateMascotUI();
  updatePlayerTurnLabel();
  updateScoreDisplay();

  if (currentGameMode === "choice") {
    promptText.textContent = "Tocca";
    optionsDiv.classList.remove("hiddenBox");
    lettersGame.classList.add("hiddenBox");
    typingGame.classList.add("hiddenBox");
    builtWordEl.innerHTML = "";
    letterBankEl.innerHTML = "";
  } else if (currentGameMode === "build") {
    promptText.textContent = "Costruisci";
    optionsDiv.classList.add("hiddenBox");
    lettersGame.classList.remove("hiddenBox");
    typingGame.classList.add("hiddenBox");
    optionsDiv.innerHTML = "";
  } else {
    promptText.textContent = "Scrivi";
    optionsDiv.classList.add("hiddenBox");
    lettersGame.classList.add("hiddenBox");
    typingGame.classList.remove("hiddenBox");
    optionsDiv.innerHTML = "";
  }
}
function showWin(payload) {
  showOnly(winScreen);
  winTitle.textContent = payload.title;
  winSubtitle.textContent = payload.subtitle;
  winStars.textContent = String(payload.stars);
  winStage.textContent = payload.stageLabel;
  newBadge.textContent = payload.badgeEmoji || "🌟";
  newBadgeLabel.textContent = payload.badgeLabel || "Continua!";
  updateMascotUI();
}

// ----------------------
// Speech (TTS)
// ----------------------
let ttsPrimed = false;
let cachedVoice = null;
let selectedVoiceId = "";

function voiceId(v) {
  return v ? `${v.name}||${v.lang}` : "";
}
function loadSelectedVoice() {
  const v = localStorage.getItem(STORAGE_SELECTED_VOICE);
  if (v) selectedVoiceId = v;
}
function saveSelectedVoice() {
  localStorage.setItem(STORAGE_SELECTED_VOICE, selectedVoiceId);
}
function pickEnglishVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = speechSynthesis.getVoices() || [];
  if (selectedVoiceId) {
    const chosen = voices.find(v => voiceId(v) === selectedVoiceId);
    if (chosen) return chosen;
  }
  const preferred = voices.find(v => v.lang === "en-US") || voices.find(v => v.lang.startsWith("en")) || null;
  return preferred;
}
function primeTTS() {
  if (ttsPrimed || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
  const u = new SpeechSynthesisUtterance(" ");
  u.volume = 0;
  u.rate = 1;
  speechSynthesis.speak(u);
  speechSynthesis.cancel();
  ttsPrimed = true;
}
function unlockTTS() {
  if ("speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined") {
    speechSynthesis.resume();
    primeTTS();
  }
}
function speakWord(word, onEnd = null) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") return;
  if (!ttsPrimed) {
    primeTTS();
    setTimeout(() => speakWord(word, onEnd), 50);
    return;
  }
  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = "en-US";
  utter.rate = 0.95;
  utter.pitch = 1.0;
  utter.volume = 1;
  if (!cachedVoice) cachedVoice = pickEnglishVoice();
  if (cachedVoice) utter.voice = cachedVoice;
  if (typeof onEnd === "function") {
    utter.onend = onEnd;
    utter.onerror = onEnd;
  }
  const speakNow = () => {
    speechSynthesis.resume();
    speechSynthesis.speak(utter);
  };
  if (speechSynthesis.speaking || speechSynthesis.pending) {
    speechSynthesis.cancel();
    setTimeout(speakNow, 80);
  } else {
    speakNow();
  }
}
function speakCurrent() {
  if (!correctItem) return;
  speakWord(correctItem.word);
}

function renderVoiceOptions() {
  if (!voiceSelect || !("speechSynthesis" in window)) return;
  const voices = speechSynthesis.getVoices() || [];
  const english = voices.filter(v => v.lang.startsWith("en"));
  const list = english.length ? english : voices;
  voiceSelect.innerHTML = "";

  if (!list.length) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "Voce non disponibile";
    voiceSelect.appendChild(opt);
    voiceSelect.disabled = true;
    return;
  }

  voiceSelect.disabled = false;
  list.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = voiceId(v);
    opt.textContent = `${v.name} (${v.lang})`;
    voiceSelect.appendChild(opt);
  });

  const preferred = pickEnglishVoice();
  const preferredId = preferred ? voiceId(preferred) : "";
  const valueToSet = selectedVoiceId || preferredId || voiceId(list[0]);
  voiceSelect.value = valueToSet;
  selectedVoiceId = valueToSet;
  saveSelectedVoice();
  cachedVoice = pickEnglishVoice();
}

// ----------------------
// Categories
// ----------------------
function renderCategories() {
  const progress = getProgress();
  categoryGrid.innerHTML = "";
  categories.forEach((cat, idx) => {
    const info = progress[cat.id];
    const locked = !info || info.levelUnlocked === 0;

    const card = document.createElement("div");
    card.className = "categoryCard" + (locked ? " locked" : "") + (cat.id === currentCategoryId ? " selected" : "");

    const icon = document.createElement("div");
    icon.className = "categoryIcon";
    icon.innerHTML = cat.iconSvg;

    const text = document.createElement("div");
    const title = document.createElement("div");
    title.className = "categoryLabel";
    title.textContent = cat.label;
    const sub = document.createElement("div");
    sub.className = "categorySub";
    if (locked) sub.textContent = "Bloccata";
    else sub.textContent = `Livello ${info.levelUnlocked}`;

    text.appendChild(title);
    text.appendChild(sub);

    card.appendChild(icon);
    card.appendChild(text);

    card.addEventListener("click", () => {
      if (locked) return;
      currentCategoryId = cat.id;
      saveSelectedCategory();
      updateProgressPill();
      renderCategories();
    });

    categoryGrid.appendChild(card);
  });
}

function renderProgressTable() {
  if (!progressTableBody) return;
  const progress = getProgress();
  const points = loadPoints();
  progressTableBody.innerHTML = "";

  categories.forEach((cat) => {
    const info = progress[cat.id];
    const level = info ? info.levelCompleted : 0;
    const row = document.createElement("tr");
    const tdCat = document.createElement("td");
    const tdP1 = document.createElement("td");
    const tdP2 = document.createElement("td");
    tdCat.textContent = cat.label;
    tdP1.textContent = String(points.byCategory?.[cat.id]?.[0] || 0);
    tdP2.textContent = String(points.byCategory?.[cat.id]?.[1] || 0);
    row.appendChild(tdCat);
    row.appendChild(tdP1);
    row.appendChild(tdP2);
    progressTableBody.appendChild(row);
  });

  if (progressTotalP1) progressTotalP1.textContent = String(points.totals?.[0] || 0);
  if (progressTotalP2) progressTotalP2.textContent = String(points.totals?.[1] || 0);
  if (progressP1Label) progressP1Label.textContent = normalizeName(playerNames[0], "Giocatore 1");
  if (progressP2Label) progressP2Label.textContent = normalizeName(playerNames[1], "Giocatore 2");
}

// ----------------------
// Spaced repetition
// ----------------------
function statKey(item) {
  return `${currentCategoryId}:${item.id}`;
}
function ensureStat(stats, key) {
  if (!stats[key]) stats[key] = { seen: 0, wrong: 0, correctFirstTry: 0 };
  return stats[key];
}
function weightFor(stats, key) {
  const s = ensureStat(stats, key);
  const w = 1 + (s.wrong * 2) + Math.max(0, s.seen - s.correctFirstTry) * 0.2 - (s.correctFirstTry * 0.3);
  return Math.max(0.6, w);
}
function pickItemWeighted(items) {
  const stats = loadStats();
  const penalties = new Set(recentHistory.slice(-2));
  let total = 0;
  const pool = [];
  items.forEach(item => {
    const key = statKey(item);
    let w = weightFor(stats, key);
    if (penalties.has(item.id)) w *= 0.35;
    pool.push({ item, w });
    total += w;
  });
  let r = Math.random() * total;
  for (const p of pool) {
    r -= p.w;
    if (r <= 0) return p.item;
  }
  return items[Math.floor(Math.random() * items.length)];
}

// ----------------------
// Level 2 (letters)
// ----------------------
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildLettersForWord(word) {
  const chars = word.split("");
  const shuffled = shuffleArray(chars);
  return shuffled.map((ch, idx) => ({ id: `${ch}-${idx}-${Math.random().toString(16).slice(2)}`, ch, used: false }));
}
function renderBuiltWord() {
  builtWordEl.innerHTML = "";
  built.forEach((ch, i) => {
    const t = document.createElement("div");
    t.className = "letterTile";
    t.textContent = ch.toUpperCase();
    t.addEventListener("click", () => {
      if (inputLocked) return;
      removeBuiltAt(i);
    });
    builtWordEl.appendChild(t);
  });
  if (built.length === 0) {
    const ghost = document.createElement("div");
    ghost.style.color = "#9aa7a4";
    ghost.style.fontWeight = "900";
    ghost.textContent = "…";
    builtWordEl.appendChild(ghost);
  }
}
function renderLetterBank() {
  letterBankEl.innerHTML = "";
  bank.forEach(item => {
    const b = document.createElement("div");
    b.className = "letterTile" + (item.used ? " used" : "");
    b.textContent = item.ch.toUpperCase();
    b.addEventListener("click", () => {
      if (inputLocked || item.used) return;
      addLetter(item.id);
    });
    letterBankEl.appendChild(b);
  });
}
function addLetter(id) {
  const idx = bank.findIndex(x => x.id === id);
  if (idx < 0 || bank[idx].used) return;

  ensureAudio();

  bank[idx].used = true;
  built.push(bank[idx].ch);

  const attempt = built.join("");
  if (!targetWord.startsWith(attempt)) {
    soundWrong();
    shakeEl(builtWordEl);
    setReinforcement("Ops, riprova ✨", true);
    setTimeout(() => setReinforcement("", false), 650);

    built.pop();
    bank[idx].used = false;
    renderBuiltWord();
    renderLetterBank();
    return;
  }

  renderBuiltWord();
  renderLetterBank();
  checkLettersCompletion();
}
function removeBuiltAt(builtIndex) {
  const ch = built[builtIndex];
  built.splice(builtIndex, 1);

  const usedIdx =
    bank.map((x, i) => ({ x, i }))
      .reverse()
      .find(o => o.x.used && o.x.ch === ch)?.i ?? -1;
  if (usedIdx >= 0) bank[usedIdx].used = false;

  renderBuiltWord();
  renderLetterBank();
}
function clearBuilt() {
  built = [];
  bank = bank.map(x => ({ ...x, used: false }));
  renderBuiltWord();
  renderLetterBank();
}
function hintOneLetter() {
  const current = built.join("");
  const nextIndex = current.length;
  if (nextIndex >= targetWord.length) return;

  const needed = targetWord[nextIndex];
  const idx = bank.findIndex(x => !x.used && x.ch === needed);
  if (idx >= 0) {
    bank[idx].used = true;
    built.push(bank[idx].ch);
    renderBuiltWord();
    renderLetterBank();
    checkLettersCompletion();
  }
}
function checkLettersCompletion() {
  const attempt = built.join("");
  if (attempt.length !== targetWord.length) return;
  triesThisRound += 1;

  if (attempt === targetWord) {
    checkCorrectAnswer();
  } else {
    soundWrong();
    speakCurrent();

    const stats = loadStats();
    ensureStat(stats, statKey(correctItem)).wrong += 1;
    saveStats(stats);

    if (triesThisRound >= 3) {
      failRoundReveal();
    } else {
      setReinforcement("Riprova ✨", true);
      setTimeout(() => setReinforcement("", false), 700);
    }
  }
}

// ----------------------
// Level 3 (typing)
// ----------------------
function normalizeTypedWord(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}
function setTypingEnabled(enabled) {
  typingInput.disabled = !enabled;
  typingSubmitBtn.disabled = !enabled;
  if (enabled) {
    setTimeout(() => typingInput.focus(), 30);
  }
}
function clearTypingInput() {
  typingInput.value = "";
  typingInput.classList.remove("shake");
}
function renderTypingFigure() {
  typingFigure.innerHTML = "";
  if (currentCategoryId === "days" && correctItem.itWord) {
    const t = document.createElement("div");
    t.className = "optionText";
    t.textContent = correctItem.itWord;
    typingFigure.appendChild(t);
  } else {
    renderOptionContent(typingFigure, correctItem);
  }
}
function checkTypedAnswer() {
  if (inputLocked) return;
  ensureAudio();
  triesThisRound += 1;

  const attempt = normalizeTypedWord(typingInput.value);
  const expected = normalizeTypedWord(correctItem.word);

  if (attempt && attempt === expected) {
    checkCorrectAnswer();
  } else {
    const stats = loadStats();
    ensureStat(stats, statKey(correctItem)).wrong += 1;
    saveStats(stats);

    soundWrong();
    speakCurrent();
    typingInput.value = "";
    typingInput.placeholder = "Scrivi qui...";
    typingInput.classList.remove("shake");
    void typingInput.offsetWidth;
    typingInput.classList.add("shake");

    if (triesThisRound >= 3) {
      failRoundReveal();
    } else {
      setReinforcement("Riprova ✨", true);
      setTimeout(() => setReinforcement("", false), 700);
    }
  }
}

// ----------------------
// Options
// ----------------------
function buildOptions(correct, items) {
  const arr = [correct];
  while (arr.length < 3) {
    const n = items[Math.floor(Math.random() * items.length)];
    if (!arr.find(x => x.id === n.id)) arr.push(n);
  }
  return arr.sort(() => Math.random() - 0.5);
}
function renderOptionContent(container, item) {
  if (item.type === "color") {
    const swatch = document.createElement("div");
    swatch.className = "colorSwatch";
    swatch.style.background = item.display;
    container.appendChild(swatch);
  } else if (item.type === "image") {
    const img = document.createElement("img");
    img.className = "optionImage";
    img.src = item.display;
    img.alt = item.word;
    img.loading = "lazy";
    container.appendChild(img);
  } else if (item.type === "icon") {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = iconLibrary[item.display] || iconSvg.school;
    container.appendChild(wrapper);
  } else {
    const t = document.createElement("div");
    t.className = "optionText";
    t.textContent = item.display;
    container.appendChild(t);
  }
}
function renderOptions() {
  optionsDiv.innerHTML = "";
  options.forEach(item => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.dataset.id = item.id;
    renderOptionContent(btn, item);
    btn.addEventListener("click", () => checkLevel1(item));
    optionsDiv.appendChild(btn);
  });
}

// ----------------------
// Feedback helpers
// ----------------------
function shakeEl(el) {
  el.classList.remove("shake");
  void el.offsetWidth;
  el.classList.add("shake");
  setTimeout(() => el.classList.remove("shake"), 280);
}

// ----------------------
// Round lifecycle
// ----------------------
function newRound(forceItem = null) {
  const levelId = getCurrentLevel();
  const cat = getCategory();
  const maxItems = Math.min(getLevelMaxItems(levelId), cat.items.length);
  const pool = cat.items.slice(0, maxItems);

  triesThisRound = 0;
  correctItem = forceItem || pickItemWeighted(pool);

  const stats = loadStats();
  ensureStat(stats, statKey(correctItem)).seen += 1;
  saveStats(stats);

  recentHistory.push(correctItem.id);
  if (recentHistory.length > 10) recentHistory.shift();

  setReinforcement("", false);

  if (currentGameMode === "choice") {
    options = buildOptions(correctItem, pool);
    renderOptions();
    setTypingEnabled(false);
  } else if (currentGameMode === "build") {
    targetWord = correctItem.word;
    built = [];
    bank = buildLettersForWord(targetWord);
    renderBuiltWord();
    renderLetterBank();
    setTypingEnabled(false);
  } else {
    targetWord = correctItem.word;
    renderTypingFigure();
    clearTypingInput();
    setTypingEnabled(true);
  }

  speakCurrent();
}

function nextRound() {
  if (round === totalRounds()) endSession();
  else {
    round++;
    if (playerMode === "two") {
      currentPlayerIndex = (currentPlayerIndex + 1) % 2;
      updatePlayerTurnLabel();
      updateMascotUI();
    }
    updateProgressDots();
    newRound(null);
  }
}

function resetSession() {
  round = 1;
  stars = 0;
  currentPlayerIndex = 0;
  playerScores = [0, 0];
  winMascotId = null;
  recentHistory = [];
  updateProgressDots();
  setReinforcement("", false);
  inputLocked = false;
  clearTypingInput();
  setTypingEnabled(false);
  updateScoreDisplay();
  updateLevelLabel();
  updatePlayerTurnLabel();
  updateMascotUI();
}

// ----------------------
// Correct answer
// ----------------------
function checkCorrectAnswer() {
  if (inputLocked) return;
  inputLocked = true;
  setTypingEnabled(false);

  const stats = loadStats();
  const s = ensureStat(stats, statKey(correctItem));
  if (triesThisRound === 1) s.correctFirstTry += 1;
  saveStats(stats);

  stars += 1;
  playerScores[currentPlayerIndex] += 1;
  const points = loadPoints();
  points.totals = points.totals || [0, 0];
  points.byCategory = points.byCategory || {};
  if (!Array.isArray(points.byCategory[currentCategoryId])) {
    points.byCategory[currentCategoryId] = [0, 0];
  }
  points.totals[currentPlayerIndex] = (points.totals[currentPlayerIndex] || 0) + 1;
  points.byCategory[currentCategoryId][currentPlayerIndex] =
    (points.byCategory[currentCategoryId][currentPlayerIndex] || 0) + 1;
  savePoints(points);
  updateScoreDisplay();
  soundCorrect();
  setReinforcement(`${correctItem.word}`, true);

  let advanced = false;
  const postSpeechPauseMs = 1000;
  const proceed = () => {
    if (advanced) return;
    advanced = true;
    setTimeout(() => {
      setReinforcement("", false);
      inputLocked = false;
      nextRound();
    }, postSpeechPauseMs);
  };
  const fallbackMs = Math.max(650, correctItem.word.length * 120);
  const fallback = setTimeout(proceed, fallbackMs);
  speakWord(correctItem.word, () => {
    clearTimeout(fallback);
    proceed();
  });
}

function checkLevel1(item) {
  if (inputLocked) return;
  ensureAudio();
  triesThisRound += 1;

  if (item.id === correctItem.id) {
    checkCorrectAnswer();
  } else {
    const stats = loadStats();
    ensureStat(stats, statKey(correctItem)).wrong += 1;
    saveStats(stats);

    soundWrong();
    speakCurrent();
    if (triesThisRound >= 3) {
      failRoundReveal();
    }
  }
}

// ----------------------
// Fail round reveal
// ----------------------
function failRoundReveal() {
  inputLocked = true;
  setTypingEnabled(false);

  if (currentGameMode === "choice") {
    const correctEl = optionsDiv.querySelector(`[data-id="${correctItem.id}"]`);
    if (correctEl) correctEl.classList.add("correct");
  }

  setReinforcement(`Risposta: ${correctItem.word}`, true);
  const extraHoldMs = currentGameMode === "type" ? 2000 : 1100;
  const proceed = () => {
    setTimeout(() => {
      setReinforcement("", false);
      inputLocked = false;
      nextRound();
    }, extraHoldMs);
  };
  const fallbackMs = Math.max(650, correctItem.word.length * 120);
  const fallback = setTimeout(proceed, fallbackMs);
  speakWord(correctItem.word, () => {
    clearTimeout(fallback);
    proceed();
  });
}

// ----------------------
// End session / progression
// ----------------------
function endSession() {
  const progress = getProgress();
  const catProgress = progress[currentCategoryId];
  const currentLevel = getCurrentLevel();

  if (catProgress) {
    catProgress.levelCompleted = Math.max(catProgress.levelCompleted, currentLevel);
    if (currentLevel < 3) {
      catProgress.levelUnlocked = Math.max(catProgress.levelUnlocked, currentLevel + 1);
    } else {
      // unlock next category
      const currentIdx = categories.findIndex(c => c.id === currentCategoryId);
      const nextCat = categories[currentIdx + 1];
      if (nextCat) {
        progress[nextCat.id] = progress[nextCat.id] || { levelUnlocked: 1, levelCompleted: 0 };
        if (progress[nextCat.id].levelUnlocked === 0) progress[nextCat.id].levelUnlocked = 1;
      }
    }
    saveProgress(progress);
  }

  soundWin();

  const cat = getCategory();
  let subtitle = `Hai completato il livello ${currentLevel} di ${cat.label}!`;
  let title = "Bravo!";
  let starsText = String(playerScores[0]);
  const n1 = normalizeName(playerNames[0], "Giocatore 1");
  const n2 = normalizeName(playerNames[1], "Giocatore 2");

  if (playerMode === "two") {
    const p1 = playerScores[0];
    const p2 = playerScores[1];
    if (p1 === p2) title = "Pareggio!";
    else title = `Vince ${p1 > p2 ? n1 : n2}!`;
    subtitle = `${n1} ${p1} · ${n2} ${p2}`;
    starsText = `${n1} ${p1} · ${n2} ${p2}`;
    if (p1 === p2) winMascotId = playerMascots[0];
    else winMascotId = playerMascots[p1 > p2 ? 0 : 1];
  } else if (currentLevel === 3) {
    subtitle = `Hai completato tutti i livelli di ${cat.label}!`;
    winMascotId = playerMascots[0];
  }

  showWin({
    title,
    subtitle,
    stars: starsText,
    stageLabel: `${cat.label} · Livello ${currentLevel}`,
    badgeEmoji: currentLevel === 3 ? "🏆" : "🌟",
    badgeLabel: currentLevel === 3 ? "Categoria completata!" : "Prossimo livello sbloccato!"
  });
}

// ----------------------
// Start game
// ----------------------
function startGame() {
  resetSession();
  showGame();
  newRound(null);
}

// ----------------------
// Mascot
// ----------------------
function openMascotOverlay() {
  mascotOverlay.classList.remove("hiddenScreen");
}
function closeMascotOverlay() {
  mascotOverlay.classList.add("hiddenScreen");
  overlayTitle.textContent = "Scegli la tua mascotte";
  overlaySubtitle.textContent = "Potrai cambiarla quando vuoi.";
}

// ----------------------
// Events
// ----------------------
speaker.addEventListener("click", () => {
  ensureAudio();
  tone(760, 50, "sine", 0.05, 0);
  unlockTTS();
  speakCurrent();
});


startBtn.addEventListener("click", () => {
  ensureAudio();
  unlockTTS();
  startGame();
});

resetProgressBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_CATEGORY_PROGRESS);
  localStorage.removeItem(STORAGE_STATS);
  localStorage.removeItem(STORAGE_SELECTED_CATEGORY);
  localStorage.removeItem(STORAGE_POINTS);
  currentCategoryId = categories[0].id;
  resetSession();
  showHome();
});

backHomeBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  showHome();
});

homeFromWinBtn.addEventListener("click", () => showHome());

continueBtn.addEventListener("click", () => {
  showHome();
});

changeMascotP1Btn.addEventListener("click", () => {
  mascotTargetIndex = 0;
  const n1 = normalizeName(playerNames[0], "Giocatore 1");
  overlayTitle.textContent = `Mascotte di ${n1}`;
  overlaySubtitle.textContent = "Scegli la mascotte per il giocatore 1.";
  openMascotOverlay();
});

changeMascotP2Btn.addEventListener("click", () => {
  mascotTargetIndex = 1;
  const n2 = normalizeName(playerNames[1], "Giocatore 2");
  overlayTitle.textContent = `Mascotte di ${n2}`;
  overlaySubtitle.textContent = "Scegli la mascotte per il giocatore 2.";
  openMascotOverlay();
});

document.querySelectorAll(".mascotChoice").forEach((btn) => {
  const img = btn.querySelector("img");
  if (img) {
    img.addEventListener("error", () => btn.classList.add("broken"));
  }
  btn.addEventListener("click", () => {
    playerMascots[mascotTargetIndex] = btn.dataset.mascot;
    savePlayerMascots();
    updateMascotUI();
    closeMascotOverlay();
  });
});

gameChoiceBtn.addEventListener("click", () => {
  currentGameMode = "choice";
  updateGameModeUI();
});

gameBuildBtn.addEventListener("click", () => {
  currentGameMode = "build";
  updateGameModeUI();
});

gameTypeBtn.addEventListener("click", () => {
  currentGameMode = "type";
  updateGameModeUI();
});

playerSingleBtn.addEventListener("click", () => {
  playerMode = "single";
  savePlayerMode();
  updatePlayerModeUI();
  updateProgressDots();
  updatePlayerTurnLabel();
  updateScoreDisplay();
  updateMascotUI();
});

playerTwoBtn.addEventListener("click", () => {
  playerMode = "two";
  savePlayerMode();
  updatePlayerModeUI();
  updateProgressDots();
  updatePlayerTurnLabel();
  updateScoreDisplay();
  updateMascotUI();
});

player1NameInput.addEventListener("input", () => {
  playerNames[0] = normalizeName(player1NameInput.value, "Giocatore 1");
  savePlayerNames();
  updatePlayerTurnLabel();
  updateScoreDisplay();
  updateMascotUI();
});

player2NameInput.addEventListener("input", () => {
  playerNames[1] = normalizeName(player2NameInput.value, "Giocatore 2");
  savePlayerNames();
  updatePlayerTurnLabel();
  updateScoreDisplay();
  updateMascotUI();
});

voiceSelect.addEventListener("change", () => {
  selectedVoiceId = voiceSelect.value || "";
  saveSelectedVoice();
  cachedVoice = pickEnglishVoice();
  speakCurrent();
});

clearWordBtn.addEventListener("click", () => {
  ensureAudio();
  tone(520, 60, "sine", 0.05, 0);
  clearBuilt();
});

hintBtn.addEventListener("click", () => {
  ensureAudio();
  triesThisRound = Math.max(triesThisRound, 1);
  tone(880, 60, "sine", 0.05, 0);
  hintOneLetter();
});

resetPointsBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_POINTS);
  renderProgressTable();
});

openProgressBtn.addEventListener("click", () => {
  showProgress();
});

backHomeFromProgressBtn.addEventListener("click", () => {
  showHome();
});

typingSubmitBtn.addEventListener("click", () => {
  checkTypedAnswer();
});

typingInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    checkTypedAnswer();
  }
});

// ----------------------
// INIT
// ----------------------
function init() {
  if ("speechSynthesis" in window) {
    speechSynthesis.onvoiceschanged = () => {
      cachedVoice = pickEnglishVoice();
      renderVoiceOptions();
    };
  }
  loadSelectedVoice();
  loadSelectedCategory();
  loadMascot();
  loadPlayerMode();
  loadPlayerNames();
  loadPlayerMascots();
  getProgress();

  updateProgressDots();
  updateProgressPill();
  updateGameModeUI();
  updatePlayerModeUI();
  updateMascotUI();
  updatePlayerNameInputs();
  renderCategories();
  renderVoiceOptions();

  showHome();

  if (!localStorage.getItem(STORAGE_PLAYER_MASCOTS)) {
    mascotTargetIndex = 0;
    const n1 = normalizeName(playerNames[0], "Giocatore 1");
    overlayTitle.textContent = `Mascotte di ${n1}`;
    overlaySubtitle.textContent = "Scegli la mascotte per il giocatore 1.";
    openMascotOverlay();
  }
}

init();
