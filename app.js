const stages = [
  { name: "插秧期", image: "assets/images/rice-stages/transplanting.png" },
  { name: "分蘖期", image: "assets/images/rice-stages/tillering.png" },
  { name: "拔节期", image: "assets/images/rice-stages/jointing.png" },
  { name: "抽穗期", image: "assets/images/rice-stages/heading.png" },
  { name: "成熟收割期", image: "assets/images/rice-stages/mature.png" }
];

const tools = [
  { id: "insecticide-sprayer", name: "喷雾器（驱虫药液）", image: "assets/images/tools/insecticide-sprayer.png" },
  { id: "net", name: "捕虫网", image: "assets/images/tools/net.png" },
  { id: "sticky-board", name: "粘虫板", image: "assets/images/tools/sticky-board.png" },
  { id: "fungicide-sprayer", name: "杀菌喷雾器", image: "assets/images/tools/fungicide-sprayer.png" },
  { id: "rake", name: "除草耙", image: "assets/images/tools/rake.png" },
  { id: "disease-shovel", name: "病害清理铲", image: "assets/images/tools/disease-shovel.png" }
];

const pests = [
  { id: "planthopper", name: "稻飞虱", toolId: "insecticide-sprayer", image: "assets/images/pests/planthopper.png" },
  { id: "borer", name: "稻螟虫", toolId: "net", image: "assets/images/pests/borer.png" },
  { id: "leafhopper", name: "稻叶蝉", toolId: "sticky-board", image: "assets/images/pests/leafhopper.png" },
  { id: "blast", name: "稻瘟病", toolId: "fungicide-sprayer", image: "assets/images/pests/blast.png" },
  { id: "sheath-blight", name: "纹枯病", toolId: "rake", image: "assets/images/pests/sheath-blight.png" },
  { id: "false-smut", name: "稻曲病", toolId: "disease-shovel", image: "assets/images/pests/false-smut.png" }
];

const positions = [
  { left: "22%", top: "28%" },
  { left: "48%", top: "38%" },
  { left: "68%", top: "25%" },
  { left: "34%", top: "58%" },
  { left: "72%", top: "62%" }
];

let selectedToolId = null;
let activePests = [];
let clearedPests = [];

const stageList = document.querySelector("#stageList");
const toolList = document.querySelector("#toolList");
const pestLayer = document.querySelector("#pestLayer");
const fieldPhoto = document.querySelector(".field-photo");
const message = document.querySelector("#message");
const winDialog = document.querySelector("#winDialog");
const resultList = document.querySelector("#resultList");
const restartButton = document.querySelector("#restartButton");

function pickRoundPests() {
  return [...pests]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((pest, index) => ({ ...pest, position: positions[index] }));
}

function renderStages() {
  const clearedCount = clearedPests.length;
  const activeStageIndex = Math.min(clearedCount + 1, stages.length - 1);
  const activeStage = stages[activeStageIndex];

  stageList.innerHTML = stages
    .map((stage, index) => `<li class="${index === activeStageIndex ? "active" : ""}">${stage.name}</li>`)
    .join("");

  fieldPhoto.style.backgroundImage = `url("${activeStage.image}")`;
}

function renderTools() {
  toolList.innerHTML = tools
    .map(
      (tool) => `
        <button class="tool-button ${tool.id === selectedToolId ? "selected" : ""}" type="button" data-tool-id="${tool.id}">
          <img class="tool-photo" src="${tool.image}" alt="" aria-hidden="true" />
          <span>${tool.name}</span>
        </button>
      `
    )
    .join("");

  toolList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedToolId = button.dataset.toolId;
      const tool = tools.find((item) => item.id === selectedToolId);
      message.textContent = `已选择：${tool.name}。现在点击稻田里的病虫害。`;
      renderTools();
    });
  });
}

function renderPests() {
  pestLayer.innerHTML = activePests
    .map(
      (pest) => `
        <div class="pest" style="left:${pest.position.left}; top:${pest.position.top}">
          <button type="button" data-pest-id="${pest.id}">
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
  const pest = activePests.find((item) => item.id === pestId);

  if (!selectedToolId) {
    message.textContent = "先选择一个工具吧";
    return;
  }

  if (selectedToolId !== pest.toolId) {
    message.textContent = "工具不对，请重新选择";
    return;
  }

  activePests = activePests.filter((item) => item.id !== pestId);
  clearedPests.push(pest);
  selectedToolId = null;
  message.textContent = `成功清除了${pest.name}！`;

  renderStages();
  renderTools();
  renderPests();

  if (clearedPests.length === 3) {
    showWinDialog();
  }
}

function showWinDialog() {
  resultList.innerHTML = clearedPests
    .map((pest) => {
      const tool = tools.find((item) => item.id === pest.toolId);
      return `<li>${pest.name}：${tool.name}</li>`;
    })
    .join("");
  winDialog.showModal();
}

function startGame() {
  selectedToolId = null;
  clearedPests = [];
  activePests = pickRoundPests();
  message.textContent = "先选择一个工具，再点击稻田里的病虫害。";
  renderStages();
  renderTools();
  renderPests();
}

restartButton.addEventListener("click", () => {
  winDialog.close();
  startGame();
});

startGame();
