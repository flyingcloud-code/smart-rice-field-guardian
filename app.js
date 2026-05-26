const tools = [
  { id: "insecticide-sprayer", name: "喷雾器（驱虫药液）", image: "assets/images/tools/insecticide-sprayer.png" },
  { id: "net", name: "捕虫网", image: "assets/images/tools/net.png" },
  { id: "sticky-board", name: "粘虫板", image: "assets/images/tools/sticky-board.png" },
  { id: "fungicide-sprayer", name: "杀菌喷雾器", image: "assets/images/tools/fungicide-sprayer.png" },
  { id: "rake", name: "除草耙", image: "assets/images/tools/rake.png" },
  { id: "disease-shovel", name: "病害清理铲", image: "assets/images/tools/disease-shovel.png" }
];

const pests = {
  thrips: { id: "thrips", name: "稻蓟马", toolId: "sticky-board", image: "assets/images/pests/thrips.png" },
  planthopper: { id: "planthopper", name: "稻飞虱", toolId: "insecticide-sprayer", image: "assets/images/pests/planthopper.png" },
  "water-weevil": { id: "water-weevil", name: "稻水象甲", toolId: "net", image: "assets/images/pests/water-weevil.png" },
  borer: { id: "borer", name: "稻螟虫", toolId: "net", image: "assets/images/pests/borer.png" },
  blast: { id: "blast", name: "稻瘟病", toolId: "fungicide-sprayer", image: "assets/images/pests/blast.png" },
  "leaf-folder": { id: "leaf-folder", name: "稻纵卷叶螟", toolId: "net", image: "assets/images/pests/leaf-folder.png" },
  "sheath-blight": { id: "sheath-blight", name: "纹枯病", toolId: "rake", image: "assets/images/pests/sheath-blight.png" },
  leafhopper: { id: "leafhopper", name: "稻叶蝉", toolId: "sticky-board", image: "assets/images/pests/leafhopper.png" },
  "bacterial-blight": { id: "bacterial-blight", name: "白叶枯病", toolId: "fungicide-sprayer", image: "assets/images/pests/bacterial-blight.png" },
  "neck-blast": { id: "neck-blast", name: "穗颈瘟", toolId: "fungicide-sprayer", image: "assets/images/pests/neck-blast.png" },
  "false-smut": { id: "false-smut", name: "稻曲病", toolId: "disease-shovel", image: "assets/images/pests/false-smut.png" }
};

const stages = [
  {
    id: "transplanting",
    name: "插秧期",
    image: "assets/images/rice-stages/transplanting.png",
    summary: "小秧苗刚进入水田，重点观察嫩叶和幼苗受害。",
    pestIds: ["thrips", "water-weevil", "planthopper", "borer", "blast"]
  },
  {
    id: "tillering",
    name: "分蘖期",
    image: "assets/images/rice-stages/tillering.png",
    summary: "秧苗分枝变密，虫害和叶部病害更容易出现。",
    pestIds: ["leaf-folder", "leafhopper", "planthopper", "sheath-blight", "borer"]
  },
  {
    id: "jointing",
    name: "拔节期",
    image: "assets/images/rice-stages/jointing.png",
    summary: "稻秆快速长高，重点保护茎秆和叶片。",
    pestIds: ["sheath-blight", "bacterial-blight", "leaf-folder", "borer", "blast"]
  },
  {
    id: "heading",
    name: "抽穗期",
    image: "assets/images/rice-stages/heading.png",
    summary: "稻穗开始形成，重点保护稻穗和上部叶片。",
    pestIds: ["neck-blast", "false-smut", "sheath-blight", "leaf-folder", "bacterial-blight"]
  },
  {
    id: "mature",
    name: "成熟收割期",
    image: "assets/images/rice-stages/mature.png",
    summary: "稻谷成熟前，重点保护产量和稻穗品质。",
    pestIds: ["false-smut", "neck-blast", "planthopper", "sheath-blight", "borer"]
  }
];

const positions = [
  { left: "14%", top: "18%" },
  { left: "42%", top: "20%" },
  { left: "70%", top: "18%" },
  { left: "26%", top: "58%" },
  { left: "62%", top: "58%" }
];

const maxAttempts = 4;
const targetClears = 3;
const pestCount = 5;

let mode = "auto";
let selectedToolId = null;
let currentStageIndex = 0;
let activePests = [];
let clearedPests = [];
let completedStageIds = new Set();
let attempts = 0;
let roundClosed = false;
let feedbackLocked = false;

const modeButtons = document.querySelectorAll("[data-mode]");
const stageList = document.querySelector("#stageList");
const toolList = document.querySelector("#toolList");
const pestLayer = document.querySelector("#pestLayer");
const fieldPhoto = document.querySelector(".field-photo");
const message = document.querySelector("#message");
const stageTitle = document.querySelector("#stageTitle");
const stageSummary = document.querySelector("#stageSummary");
const attemptCount = document.querySelector("#attemptCount");
const clearedCount = document.querySelector("#clearedCount");
const remainingCount = document.querySelector("#remainingCount");
const stageDialog = document.querySelector("#stageDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogText = document.querySelector("#dialogText");
const resultList = document.querySelector("#resultList");
const primaryDialogButton = document.querySelector("#primaryDialogButton");
const secondaryDialogButton = document.querySelector("#secondaryDialogButton");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getCurrentStage() {
  return stages[currentStageIndex];
}

function getTool(toolId) {
  return tools.find((tool) => tool.id === toolId);
}

function pickStagePests(stage) {
  return stage.pestIds
    .slice(0, pestCount)
    .map((pestId, index) => ({ ...pests[pestId], position: positions[index] }));
}

function playTone(type) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;
  const settings = {
    tool: { frequency: 520, duration: 0.07, type: "sine", volume: 0.035 },
    success: { frequency: 760, duration: 0.16, type: "triangle", volume: 0.055 },
    fail: { frequency: 180, duration: 0.18, type: "sawtooth", volume: 0.035 }
  }[type];

  oscillator.type = settings.type;
  oscillator.frequency.setValueAtTime(settings.frequency, now);
  if (type === "success") oscillator.frequency.exponentialRampToValueAtTime(1040, now + settings.duration);
  if (type === "fail") oscillator.frequency.exponentialRampToValueAtTime(120, now + settings.duration);
  gain.gain.setValueAtTime(settings.volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + settings.duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + settings.duration);
  oscillator.onended = () => context.close();
}

function setMode(nextMode) {
  mode = nextMode;
  modeButtons.forEach((button) => {
    button.classList.toggle("selected", button.dataset.mode === mode);
  });

  if (mode === "auto") {
    completedStageIds = new Set();
    currentStageIndex = 0;
  }

  startStage(currentStageIndex);
}

function startStage(stageIndex) {
  currentStageIndex = stageIndex;
  selectedToolId = null;
  clearedPests = [];
  attempts = 0;
  roundClosed = false;
  feedbackLocked = false;
  activePests = pickStagePests(getCurrentStage());
  message.textContent = "先选择一个工具，再点击稻田里的病虫害。5 个目标里，4 次尝试内完成 3 个即可过关。";
  renderAll();
}

function renderAll() {
  renderStages();
  renderStageInfo();
  renderTools();
  renderPests();
  renderStats();
}

function renderStages() {
  stageList.innerHTML = stages
    .map((stage, index) => {
      const classes = [
        index === currentStageIndex ? "active" : "",
        completedStageIds.has(stage.id) ? "complete" : ""
      ]
        .filter(Boolean)
        .join(" ");
      return `
        <li class="${classes}">
          <button type="button" data-stage-index="${index}">
            ${index + 1}. ${stage.name}
          </button>
        </li>
      `;
    })
    .join("");

  stageList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      mode = "manual";
      modeButtons.forEach((modeButton) => modeButton.classList.toggle("selected", modeButton.dataset.mode === mode));
      startStage(Number(button.dataset.stageIndex));
    });
  });
}

function renderStageInfo() {
  const stage = getCurrentStage();
  stageTitle.textContent = `${stage.name}关卡`;
  stageSummary.textContent = stage.summary;
  fieldPhoto.style.backgroundImage = `url("${stage.image}")`;
}

function renderStats() {
  attemptCount.textContent = `${attempts}/${maxAttempts}`;
  clearedCount.textContent = `${clearedPests.length}/${targetClears}`;
  remainingCount.textContent = String(Math.max(maxAttempts - attempts, 0));
}

function renderTools() {
  toolList.innerHTML = tools
    .map(
      (tool) => `
        <button class="tool-button ${tool.id === selectedToolId ? "selected" : ""}" type="button" data-tool-id="${tool.id}" ${roundClosed ? "disabled" : ""}>
          <img class="tool-photo" src="${tool.image}" alt="" aria-hidden="true" />
          <span>${tool.name}</span>
        </button>
      `
    )
    .join("");

  toolList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      playTone("tool");
      selectedToolId = button.dataset.toolId;
      const tool = getTool(selectedToolId);
      message.textContent = `已选择：${tool.name}。现在点击稻田里的病虫害。`;
      renderTools();
    });
  });
}

function renderPests() {
  pestLayer.innerHTML = activePests
    .map(
      (pest) => `
        <div class="pest" data-pest-card="${pest.id}" style="left:${pest.position.left}; top:${pest.position.top}">
          <button type="button" data-pest-id="${pest.id}" ${roundClosed ? "disabled" : ""}>
            <img class="photo" src="${pest.image}" alt="" aria-hidden="true" />
            <span class="name">${pest.name}</span>
          </button>
        </div>
      `
    )
    .join("");

  pestLayer.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => handlePestClick(button.dataset.pestId));
  });
}

function handlePestClick(pestId) {
  if (roundClosed || feedbackLocked) return;

  const pest = activePests.find((item) => item.id === pestId);
  if (!pest) return;

  if (!selectedToolId) {
    message.textContent = "先选择一个工具吧";
    return;
  }

  attempts += 1;

  if (selectedToolId !== pest.toolId) {
    selectedToolId = null;
    message.textContent = "工具不对，请重新选择";
    showPestFeedback(pestId, "fail");
    playTone("fail");
    renderTools();
    renderStats();
    feedbackLocked = true;
    window.setTimeout(() => {
      feedbackLocked = false;
      if (attempts >= maxAttempts) showStageFailed();
    }, 520);
    return;
  }

  clearedPests.push(pest);
  selectedToolId = null;
  showPestFeedback(pestId, "success");
  playTone("success");
  message.textContent = `成功清除了${pest.name}！`;

  renderTools();
  renderStats();
  feedbackLocked = true;

  window.setTimeout(() => {
    activePests = activePests.filter((item) => item.id !== pestId);
    feedbackLocked = false;
    renderPests();

    if (clearedPests.length === targetClears) {
      showStageCompleted();
    } else if (attempts >= maxAttempts) {
      showStageFailed();
    }
  }, 520);
}

function showPestFeedback(pestId, type) {
  const pestCard = document.querySelector(`[data-pest-card="${pestId}"]`);
  if (!pestCard) return;
  pestCard.classList.remove("success", "fail");
  pestCard.classList.add(type);
}

function showStageCompleted() {
  const stage = getCurrentStage();
  roundClosed = true;
  completedStageIds.add(stage.id);
  renderStages();
  renderTools();
  renderPests();

  const isLastAutoStage = mode === "auto" && currentStageIndex === stages.length - 1;
  dialogTitle.textContent = isLastAutoStage ? "智慧稻田守护完成！" : "本阶段守护成功！";
  dialogText.textContent = isLastAutoStage
    ? "你完成了水稻从插秧到成熟的全部守护任务。"
    : `${stage.name}已完成。看看这次清除了哪些病虫害。`;
  resultList.innerHTML = clearedPests
    .map((pest) => `<li>${pest.name}：${getTool(pest.toolId).name}</li>`)
    .join("");

  if (mode === "auto") {
    primaryDialogButton.textContent = isLastAutoStage ? "重新开始" : "下一步";
    primaryDialogButton.onclick = () => {
      stageDialog.close();
      if (isLastAutoStage) {
        completedStageIds = new Set();
        startStage(0);
      } else {
        startStage(currentStageIndex + 1);
      }
    };
    secondaryDialogButton.textContent = "再玩本关";
    secondaryDialogButton.onclick = () => {
      stageDialog.close();
      startStage(currentStageIndex);
    };
  } else {
    primaryDialogButton.textContent = "再玩本关";
    primaryDialogButton.onclick = () => {
      stageDialog.close();
      startStage(currentStageIndex);
    };
    secondaryDialogButton.textContent = "返回关卡选择";
    secondaryDialogButton.onclick = () => {
      stageDialog.close();
      message.textContent = "请选择想练习的水稻阶段。";
    };
  }
  stageDialog.showModal();
}

function showStageFailed() {
  roundClosed = true;
  renderTools();
  renderPests();
  dialogTitle.textContent = "再试一次";
  dialogText.textContent = `${getCurrentStage().name}还差一点。4 次尝试用完了，重新观察再挑战。`;
  resultList.innerHTML = clearedPests.length
    ? clearedPests.map((pest) => `<li>${pest.name}：${getTool(pest.toolId).name}</li>`).join("")
    : "<li>这次还没有清除病虫害。</li>";
  primaryDialogButton.textContent = "再试一次";
  primaryDialogButton.onclick = () => {
    stageDialog.close();
    startStage(currentStageIndex);
  };
  secondaryDialogButton.textContent = mode === "manual" ? "返回关卡选择" : "留在本关";
  secondaryDialogButton.onclick = () => {
    stageDialog.close();
    roundClosed = false;
    message.textContent = mode === "manual" ? "请选择想练习的阶段。" : "请点击“再试一次”重新挑战本阶段。";
    renderTools();
    renderPests();
  };
  stageDialog.showModal();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

startStage(0);
