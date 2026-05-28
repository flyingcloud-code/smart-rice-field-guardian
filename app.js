const tools = [
  {
    id: "insecticide-sprayer",
    name: "喷雾器（驱虫药液）",
    image: "assets/images/tools/insecticide-sprayer.png",
    description: "把驱虫药液均匀喷到稻株上，适合处理会吸食汁液的小虫。",
    targets: ["稻飞虱"]
  },
  {
    id: "net",
    name: "捕虫网",
    image: "assets/images/tools/net.png",
    description: "用网捕捉或清理较大的害虫，适合会啃食叶片、茎秆或稻穗的虫害。",
    targets: ["稻水象甲", "稻螟虫", "稻纵卷叶螟"]
  },
  {
    id: "sticky-board",
    name: "粘虫板",
    image: "assets/images/tools/sticky-board.png",
    description: "利用黄色粘板吸引并粘住小型飞虫，适合观察和减少小虫数量。",
    targets: ["稻蓟马", "稻叶蝉"]
  },
  {
    id: "fungicide-sprayer",
    name: "杀菌喷雾器",
    image: "assets/images/tools/fungicide-sprayer.png",
    description: "喷洒杀菌药液，适合处理由病菌引起的叶片、茎秆或稻穗病害。",
    targets: ["稻瘟病", "穗颈瘟", "白叶枯病"]
  },
  {
    id: "rake",
    name: "除草耙",
    image: "assets/images/tools/rake.png",
    description: "清理田间杂草和病叶，帮助稻田通风，减少病害继续扩散。",
    targets: ["纹枯病"]
  },
  {
    id: "disease-shovel",
    name: "病害清理铲",
    image: "assets/images/tools/disease-shovel.png",
    description: "小心剔除已经明显患病的稻穗或病部，避免病害继续传播。",
    targets: ["稻曲病"]
  }
];

const pests = {
  thrips: {
    id: "thrips",
    name: "稻蓟马",
    toolId: "sticky-board",
    image: "assets/images/pests/thrips.png",
    intro: "稻蓟马喜欢吸食嫩叶汁液，幼苗叶片会出现发白、卷曲或长得慢。",
    control: "用粘虫板监测和诱捕小虫，严重时配合老师讲解的安全防治方法。"
  },
  planthopper: {
    id: "planthopper",
    name: "稻飞虱",
    toolId: "insecticide-sprayer",
    image: "assets/images/pests/planthopper.png",
    intro: "稻飞虱常聚在稻株下部吸汁，数量多时会让稻株变黄、变弱。",
    control: "使用喷雾器均匀处理稻株下部，重点让药液到达虫子聚集的位置。"
  },
  "water-weevil": {
    id: "water-weevil",
    name: "稻水象甲",
    toolId: "net",
    image: "assets/images/pests/water-weevil.png",
    intro: "稻水象甲会啃食嫩叶，幼虫还会伤害稻根，让秧苗长势变差。",
    control: "用捕虫网清理成虫，并观察田边和水面附近的稻苗。"
  },
  borer: {
    id: "borer",
    name: "稻螟虫",
    toolId: "net",
    image: "assets/images/pests/borer.png",
    intro: "稻螟虫幼虫会钻进稻秆里取食，可能造成枯心苗或白穗。",
    control: "用捕虫网清除可见虫体，并重点检查受害茎秆附近。"
  },
  blast: {
    id: "blast",
    name: "稻瘟病",
    toolId: "fungicide-sprayer",
    image: "assets/images/pests/blast.png",
    intro: "稻瘟病常在叶片上形成梭形病斑，严重时会影响稻株生长。",
    control: "使用杀菌喷雾器处理病斑区域，防止病害继续扩散。"
  },
  "leaf-folder": {
    id: "leaf-folder",
    name: "稻纵卷叶螟",
    toolId: "net",
    image: "assets/images/pests/leaf-folder.png",
    intro: "稻纵卷叶螟会把叶片卷起来并在里面取食，叶片会出现白色伤痕。",
    control: "用捕虫网处理可见幼虫，并注意检查卷起来的叶片。"
  },
  "sheath-blight": {
    id: "sheath-blight",
    name: "纹枯病",
    toolId: "rake",
    image: "assets/images/pests/sheath-blight.png",
    intro: "纹枯病常出现在稻株下部叶鞘，形成云纹状病斑，密植潮湿时更明显。",
    control: "用除草耙清理病叶杂草，帮助稻田通风，并配合药剂防治。"
  },
  leafhopper: {
    id: "leafhopper",
    name: "稻叶蝉",
    toolId: "sticky-board",
    image: "assets/images/pests/leafhopper.png",
    intro: "稻叶蝉会跳会飞，也会吸食叶片汁液，让叶片变黄或出现斑点。",
    control: "用粘虫板诱捕小型飞虫，帮助减少稻田里的虫量。"
  },
  "bacterial-blight": {
    id: "bacterial-blight",
    name: "白叶枯病",
    toolId: "fungicide-sprayer",
    image: "assets/images/pests/bacterial-blight.png",
    intro: "白叶枯病会让叶尖和叶缘出现黄白色枯斑，严重时大片叶子枯黄。",
    control: "使用杀菌喷雾器处理病叶区域，并提醒不要让病叶接触更多健康稻株。"
  },
  "neck-blast": {
    id: "neck-blast",
    name: "穗颈瘟",
    toolId: "fungicide-sprayer",
    image: "assets/images/pests/neck-blast.png",
    intro: "穗颈瘟发生在稻穗颈部，可能让稻穗变白、结实变差。",
    control: "使用杀菌喷雾器重点处理稻穗和穗颈部位。"
  },
  "false-smut": {
    id: "false-smut",
    name: "稻曲病",
    toolId: "disease-shovel",
    image: "assets/images/pests/false-smut.png",
    intro: "稻曲病会让部分稻粒变成黄绿色或橙色小球，影响稻穗品质。",
    control: "用病害清理铲剔除明显患病稻穗，减少继续传播。"
  }
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
  { x: 14, y: 18 },
  { x: 42, y: 20 },
  { x: 70, y: 18 },
  { x: 26, y: 58 },
  { x: 62, y: 58 }
];

const maxAttempts = 4;
const targetClears = 3;
const pestCount = 5;
let mode = "auto";
let interactionMode = "teaching";
let challengeEnabled = false;
let challengeSpeed = 2;
let selectedToolId = null;
let currentStageIndex = 0;
let activePests = [];
let clearedPests = [];
let completedStageIds = new Set();
let attempts = 0;
let roundClosed = false;
let feedbackLocked = false;
let dragState = null;
let suppressToolClick = false;
let movementFrame = null;
let lastMovementTime = 0;

const modeButtons = document.querySelectorAll("[data-mode]");
const interactionModeButtons = document.querySelectorAll("[data-interaction-mode]");
const challengeToggle = document.querySelector("#challengeToggle");
const speedSlider = document.querySelector("#speedSlider");
const speedValue = document.querySelector("#speedValue");
const openPestGuide = document.querySelector("#openPestGuide");
const stageList = document.querySelector("#stageList");
const toolList = document.querySelector("#toolList");
const toolInfo = document.querySelector("#toolInfo");
const pestLayer = document.querySelector("#pestLayer");
const field = document.querySelector("#field");
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
const imageDialog = document.querySelector("#imageDialog");
const closeImageDialog = document.querySelector("#closeImageDialog");
const imageDialogTitle = document.querySelector("#imageDialogTitle");
const largePestImage = document.querySelector("#largePestImage");
const imageDialogText = document.querySelector("#imageDialogText");
const pestGuideDialog = document.querySelector("#pestGuideDialog");
const closePestGuide = document.querySelector("#closePestGuide");
const pestGuideSummary = document.querySelector("#pestGuideSummary");
const pestGuideStages = document.querySelector("#pestGuideStages");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getCurrentStage() {
  return stages[currentStageIndex];
}

function getTool(toolId) {
  return tools.find((tool) => tool.id === toolId);
}

function getPest(pestId) {
  return pests[pestId];
}

function pickStagePests(stage) {
  return stage.pestIds
    .slice(0, pestCount)
    .map((pestId, index) => {
      const position = positions[index];
      const direction = Math.random() > 0.5 ? 1 : -1;
      return {
        ...pests[pestId],
        x: position.x,
        y: position.y,
        vx: direction * (0.65 + Math.random() * 0.7),
        vy: (Math.random() > 0.5 ? 1 : -1) * (0.45 + Math.random() * 0.6),
        speedFactor: 0.42 + Math.random() * 1.28
      };
    });
}

function playSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const context = new AudioContext();
    const now = context.currentTime;
    const melodies = {
      tool: [
        [523.25, 0, 0.055],
        [659.25, 0.055, 0.055],
        [783.99, 0.11, 0.075]
      ],
      success: [
        [659.25, 0, 0.07],
        [783.99, 0.075, 0.07],
        [987.77, 0.15, 0.09],
        [1318.51, 0.245, 0.12]
      ],
      fail: [
        [392, 0, 0.09],
        [349.23, 0.1, 0.09],
        [293.66, 0.2, 0.15]
      ],
      complete: [
        [523.25, 0, 0.08],
        [659.25, 0.085, 0.08],
        [783.99, 0.17, 0.08],
        [1046.5, 0.255, 0.12],
        [783.99, 0.4, 0.08],
        [1046.5, 0.49, 0.16]
      ],
      retry: [
        [329.63, 0, 0.11],
        [392, 0.12, 0.11],
        [493.88, 0.24, 0.13],
        [440, 0.39, 0.16]
      ]
    };
    const wave = type === "fail" ? "square" : "triangle";
    const volume = type === "complete" ? 0.06 : 0.045;
    const notes = melodies[type] || melodies.tool;

    notes.forEach(([frequency, delay, duration]) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const start = now + delay;
      oscillator.type = wave;
      oscillator.frequency.setValueAtTime(frequency, start);
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.02);
    });

    const lastNote = notes[notes.length - 1];
    window.setTimeout(() => context.close(), (lastNote[1] + lastNote[2] + 0.08) * 1000);
  } catch {
    // Audio feedback should never block the core touch interaction.
  }
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
  stopChallengeMovement();
  currentStageIndex = stageIndex;
  selectedToolId = null;
  clearedPests = [];
  attempts = 0;
  roundClosed = false;
  feedbackLocked = false;
  activePests = pickStagePests(getCurrentStage());
  message.textContent = "选择工具后，可以点击目标，也可以把工具拖到稻田目标上。5 个目标里，4 次尝试内完成 3 个即可过关。";
  renderAll();
  startChallengeMovement();
}

function renderAll() {
  renderStages();
  renderInteractionMode();
  renderChallengeControls();
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

function renderInteractionMode() {
  document.body.classList.toggle("game-info-off", interactionMode === "game");
  interactionModeButtons.forEach((button) => {
    button.classList.toggle("selected", button.dataset.interactionMode === interactionMode);
  });
}

function renderChallengeControls() {
  challengeToggle.checked = challengeEnabled;
  speedSlider.disabled = !challengeEnabled;
  speedSlider.value = String(challengeSpeed);
  speedValue.textContent = String(challengeSpeed);
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
    const tool = getTool(button.dataset.toolId);
    button.addEventListener("mouseenter", () => renderToolInfo(tool));
    button.addEventListener("focus", () => renderToolInfo(tool));
    button.addEventListener("pointerdown", (event) => startToolDrag(event, tool));
    button.addEventListener("click", () => {
      if (suppressToolClick) {
        suppressToolClick = false;
        return;
      }
      playSound("tool");
      selectedToolId = button.dataset.toolId;
      const tool = getTool(selectedToolId);
      renderToolInfo(tool);
      message.textContent = `已选择：${tool.name}。可以点击目标，也可以把工具拖到目标上。`;
      renderTools();
    });
  });
}

function renderToolInfo(tool) {
  toolInfo.innerHTML = `
    <strong>${tool.name}</strong>
    <p>${tool.description}</p>
    <small>适合处理：${tool.targets.join("、")}</small>
  `;
}

function renderPests() {
  pestLayer.innerHTML = activePests
    .map(
      (pest) => `
        <div class="pest" data-pest-card="${pest.id}" style="left:${pest.x}%; top:${pest.y}%">
          <button class="pest-image-button" type="button" data-pest-image-id="${pest.id}" aria-label="查看${pest.name}大图">
            <img class="photo" src="${pest.image}" alt="" aria-hidden="true" />
          </button>
          <button class="pest-action-button" type="button" data-pest-id="${pest.id}" ${roundClosed ? "disabled" : ""}>
            <span class="name">${pest.name}</span>
          </button>
          <div class="pest-tip" role="tooltip">
            <strong>${pest.name}</strong>
            <p>${pest.intro}</p>
            <small>防治：${pest.control}</small>
          </div>
        </div>
      `
    )
    .join("");

  pestLayer.querySelectorAll("button").forEach((button) => {
    if (button.dataset.pestId) {
      button.addEventListener("click", () => handlePestClick(button.dataset.pestId));
    }
    if (button.dataset.pestImageId) {
      button.addEventListener("click", () => {
        if (interactionMode === "teaching") {
          openPestImage(button.dataset.pestImageId);
          return;
        }
        handlePestClick(button.dataset.pestImageId);
      });
    }
  });
}

function openPestGuideDialog() {
  const uniquePestCount = Object.keys(pests).length;
  pestGuideSummary.textContent = `当前游戏共包含 ${uniquePestCount} 种水稻病虫害。下面按水稻生长阶段展示每个阶段会遇到的重点对象。`;
  pestGuideStages.innerHTML = stages
    .map((stage) => {
      const stagePests = stage.pestIds.map((pestId) => pests[pestId]);
      return `
        <section class="guide-stage">
          <h3>${stage.name}</h3>
          <p>${stage.summary}</p>
          <div class="guide-pest-grid">
            ${stagePests
              .map(
                (pest) => `
                  <article class="guide-pest">
                    <img src="${pest.image}" alt="" aria-hidden="true" />
                    <div>
                      <strong>${pest.name}</strong>
                      <span>${getTool(pest.toolId).name}</span>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
  pestGuideDialog.showModal();
}

function openPestImage(pestId) {
  const pest = getPest(pestId);
  imageDialogTitle.textContent = pest.name;
  largePestImage.src = pest.image;
  largePestImage.alt = `${pest.name}大图`;
  imageDialogText.textContent = pest.intro;
  imageDialog.showModal();
}

function handlePestClick(pestId) {
  processAttempt(selectedToolId, pestId);
}

function startToolDrag(event, tool) {
  if (roundClosed || feedbackLocked || event.button > 0) return;

  selectedToolId = tool.id;
  renderToolInfo(tool);
  toolList.querySelectorAll(".tool-button").forEach((button) => {
    button.classList.toggle("selected", button.dataset.toolId === tool.id);
  });

  const ghost = document.createElement("div");
  ghost.className = "drag-tool";
  ghost.innerHTML = `
    <img src="${tool.image}" alt="" aria-hidden="true" />
    <span>${tool.name}</span>
  `;
  document.body.appendChild(ghost);

  dragState = {
    pointerId: event.pointerId,
    toolId: tool.id,
    ghost,
    startX: event.clientX,
    startY: event.clientY,
    didDrag: false,
    startedSound: false
  };

  buttonCapture(event.currentTarget, event.pointerId);
  moveDragGhost(event.clientX, event.clientY);
  message.textContent = `拖动${tool.name}去碰到稻田里的目标。`;
  document.body.classList.add("dragging-tool");
  window.addEventListener("pointermove", handleToolDragMove);
  window.addEventListener("pointerup", finishToolDrag);
  window.addEventListener("pointercancel", cancelToolDrag);
}

function buttonCapture(button, pointerId) {
  try {
    button.setPointerCapture(pointerId);
  } catch {
    // Pointer capture is a convenience, not required for the drag interaction.
  }
}

function handleToolDragMove(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  const dx = Math.abs(event.clientX - dragState.startX);
  const dy = Math.abs(event.clientY - dragState.startY);
  if (dx + dy > 8) {
    dragState.didDrag = true;
    if (!dragState.startedSound) {
      dragState.startedSound = true;
      playSound("tool");
    }
  }
  moveDragGhost(event.clientX, event.clientY);
  highlightCollidingPest(event.clientX, event.clientY);
}

function moveDragGhost(clientX, clientY) {
  if (!dragState) return;
  dragState.ghost.style.left = `${clientX}px`;
  dragState.ghost.style.top = `${clientY}px`;
}

function finishToolDrag(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  const currentDrag = dragState;
  const targetPestId = currentDrag.didDrag ? getPestAtPoint(event.clientX, event.clientY) : null;
  suppressToolClick = currentDrag.didDrag;
  cleanupToolDrag();

  if (targetPestId) {
    processAttempt(currentDrag.toolId, targetPestId);
    return;
  }

  if (currentDrag.didDrag) {
    message.textContent = "工具还没有碰到病虫害目标，再试试看。";
  }
}

function cancelToolDrag(event) {
  if (dragState && event.pointerId !== dragState.pointerId) return;
  cleanupToolDrag();
}

function cleanupToolDrag() {
  document.body.classList.remove("dragging-tool");
  document.querySelectorAll(".pest.drag-over").forEach((item) => item.classList.remove("drag-over"));
  if (dragState?.ghost) dragState.ghost.remove();
  dragState = null;
  window.removeEventListener("pointermove", handleToolDragMove);
  window.removeEventListener("pointerup", finishToolDrag);
  window.removeEventListener("pointercancel", cancelToolDrag);
}

function highlightCollidingPest(clientX, clientY) {
  const pestId = getPestAtPoint(clientX, clientY);
  document.querySelectorAll(".pest").forEach((card) => {
    card.classList.toggle("drag-over", card.dataset.pestCard === pestId);
  });
}

function getPestAtPoint(clientX, clientY) {
  const fieldRect = field.getBoundingClientRect();
  if (
    clientX < fieldRect.left ||
    clientX > fieldRect.right ||
    clientY < fieldRect.top ||
    clientY > fieldRect.bottom
  ) {
    return null;
  }

  const pestCards = Array.from(document.querySelectorAll(".pest"));
  const match = pestCards.find((card) => {
    const rect = card.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });
  return match?.dataset.pestCard || null;
}

function processAttempt(toolId, pestId) {
  if (roundClosed || feedbackLocked) return;

  const pest = activePests.find((item) => item.id === pestId);
  if (!pest) return;

  if (!toolId) {
    message.textContent = "先选择一个工具吧";
    return;
  }

  attempts += 1;

  if (toolId !== pest.toolId) {
    selectedToolId = null;
    message.textContent = "工具不对，请重新选择";
    showPestFeedback(pestId, "fail");
    playSound("fail");
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
  playSound("success");
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

function startChallengeMovement() {
  stopChallengeMovement();
  if (!challengeEnabled || roundClosed) return;
  lastMovementTime = performance.now();
  movementFrame = window.requestAnimationFrame(moveChallengePests);
}

function stopChallengeMovement() {
  if (movementFrame) {
    window.cancelAnimationFrame(movementFrame);
    movementFrame = null;
  }
}

function moveChallengePests(timestamp) {
  if (!challengeEnabled || roundClosed) {
    stopChallengeMovement();
    return;
  }

  const delta = Math.min(timestamp - lastMovementTime, 48);
  lastMovementTime = timestamp;
  const speed = getChallengeSpeedRate();

  activePests = activePests.map((pest) => {
    let nextX = pest.x + pest.vx * pest.speedFactor * speed * delta;
    let nextY = pest.y + pest.vy * pest.speedFactor * speed * delta;
    let nextVx = pest.vx;
    let nextVy = pest.vy;

    if (nextX < 5 || nextX > 82) {
      nextVx *= -1;
      nextX = Math.max(5, Math.min(82, nextX));
    }

    if (nextY < 8 || nextY > 76) {
      nextVy *= -1;
      nextY = Math.max(8, Math.min(76, nextY));
    }

    return { ...pest, x: nextX, y: nextY, vx: nextVx, vy: nextVy };
  });

  updatePestPositions();
  movementFrame = window.requestAnimationFrame(moveChallengePests);
}

function getChallengeSpeedRate() {
  return 0.001 + (challengeSpeed - 1) * 0.00075;
}

function updatePestPositions() {
  activePests.forEach((pest) => {
    const card = document.querySelector(`[data-pest-card="${pest.id}"]`);
    if (!card) return;
    card.style.left = `${pest.x}%`;
    card.style.top = `${pest.y}%`;
  });
}

function showStageCompleted() {
  const stage = getCurrentStage();
  roundClosed = true;
  stopChallengeMovement();
  completedStageIds.add(stage.id);
  renderStages();
  renderTools();
  renderPests();
  playSound("complete");

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
  stopChallengeMovement();
  renderTools();
  renderPests();
  playSound("retry");
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

interactionModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    interactionMode = button.dataset.interactionMode;
    renderInteractionMode();
    message.textContent =
      interactionMode === "teaching"
        ? "教学模式：移到病虫害上可看说明，点击小图可看大图。"
        : "游戏模式：已关闭病虫害悬停说明和小图放大，专注完成挑战。";
  });
});

challengeToggle.addEventListener("change", () => {
  challengeEnabled = challengeToggle.checked;
  renderChallengeControls();
  message.textContent = challengeEnabled
    ? "挑战模式已开启：目标会移动。选择速度后，拖动工具去碰撞目标。"
    : "挑战模式已关闭：目标保持固定。";
  startChallengeMovement();
});

speedSlider.addEventListener("input", () => {
  challengeSpeed = Number(speedSlider.value);
  renderChallengeControls();
  message.textContent = `挑战速度已调到 ${challengeSpeed}。`;
});

closeImageDialog.addEventListener("click", () => imageDialog.close());
openPestGuide.addEventListener("click", openPestGuideDialog);
closePestGuide.addEventListener("click", () => pestGuideDialog.close());

startStage(0);
