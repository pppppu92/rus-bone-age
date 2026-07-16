// --- Data Definitions ---
const BONE_LIST = [
    { id: "radius", name: "橈骨", assetDir: "radius", maxStage: 'I' },
    { id: "ulna", name: "尺骨", assetDir: "ulna", maxStage: 'H' },
    { id: "metacarpal_1", name: "第1中手骨", assetDir: "metacarpal_1", maxStage: 'I' },
    { id: "metacarpal_3", name: "第3中手骨", assetDir: "metacarpal_3", maxStage: 'I' },
    { id: "metacarpal_5", name: "第5中手骨", assetDir: "metacarpal_5", maxStage: 'I' },
    { id: "prox_phalanx_1", name: "第1基節骨", assetDir: "prox_phalanx_1", maxStage: 'I' },
    { id: "prox_phalanx_3", name: "第3基節骨", assetDir: "prox_phalanx_3", maxStage: 'I' },
    { id: "prox_phalanx_5", name: "第5基節骨", assetDir: "prox_phalanx_5", maxStage: 'I' },
    { id: "mid_phalanx_3", name: "第3中節骨", assetDir: "middle_phalanx_3", maxStage: 'I' },
    { id: "mid_phalanx_5", name: "第5中節骨", assetDir: "middle_phalanx_5", maxStage: 'I' },
    { id: "dist_phalanx_1", name: "第1末節骨", assetDir: "dist_phalanx_1", maxStage: 'I' },
    { id: "dist_phalanx_3", name: "第3末節骨", assetDir: "dist_phalanx_3", maxStage: 'I' },
    { id: "dist_phalanx_5", name: "第5末節骨", assetDir: "dist_phalanx_5", maxStage: 'I' }
];

const boysScores = {
    "radius": [0, 16, 21, 30, 39, 59, 87, 138, 213],
    "ulna": [0, 27, 30, 32, 40, 58, 107, 181],
    "metacarpal_1": [0, 6, 9, 14, 21, 26, 36, 49, 67],
    "metacarpal_3": [0, 4, 5, 9, 12, 19, 31, 43, 52],
    "metacarpal_5": [0, 4, 6, 9, 14, 18, 29, 43, 52],
    "prox_phalanx_1": [0, 7, 8, 11, 17, 26, 38, 52, 67],
    "prox_phalanx_3": [0, 4, 4, 9, 15, 23, 31, 40, 53],
    "prox_phalanx_5": [0, 4, 5, 9, 15, 21, 30, 39, 51],
    "mid_phalanx_3": [0, 4, 6, 9, 15, 22, 32, 43, 52],
    "mid_phalanx_5": [0, 6, 7, 9, 15, 23, 32, 42, 49],
    "dist_phalanx_1": [0, 5, 6, 11, 17, 26, 38, 46, 66],
    "dist_phalanx_3": [0, 4, 6, 8, 13, 18, 28, 34, 49],
    "dist_phalanx_5": [0, 5, 6, 9, 13, 18, 27, 34, 48]
};

const girlsScores = {
    "radius": [0, 23, 30, 44, 56, 78, 114, 160, 218],
    "ulna": [0, 30, 33, 37, 45, 74, 118, 173],
    "metacarpal_1": [0, 8, 12, 18, 24, 31, 43, 53, 67],
    "metacarpal_3": [0, 5, 8, 12, 16, 23, 37, 47, 53],
    "metacarpal_5": [0, 6, 9, 12, 17, 23, 35, 48, 52],
    "prox_phalanx_1": [0, 9, 11, 14, 20, 31, 44, 56, 67],
    "prox_phalanx_3": [0, 5, 7, 12, 19, 27, 37, 44, 54],
    "prox_phalanx_5": [0, 6, 7, 12, 18, 26, 35, 42, 51],
    "mid_phalanx_3": [0, 6, 8, 12, 18, 27, 36, 45, 52],
    "mid_phalanx_5": [0, 7, 8, 12, 18, 28, 35, 43, 49],
    "dist_phalanx_1": [0, 7, 9, 15, 22, 33, 48, 51, 68],
    "dist_phalanx_3": [0, 7, 8, 11, 15, 22, 33, 37, 49],
    "dist_phalanx_5": [0, 7, 8, 11, 15, 22, 32, 36, 47]
};

const boysAgeConversion = {
    125: "3Y3M", 128: "3Y4M", 131: "3Y5M", 133: "3Y6M", 136: "3Y7M", 139: "3Y8M", 141: "3Y9M", 143: "3Y10M", 146: "3Y11M",
    147: "4Y0M", 150: "4Y1M", 152: "4Y2M", 154: "4Y3M", 156: "4Y4M", 157: "4Y5M", 159: "4Y6M", 161: "4Y7M", 163: "4Y8M", 164: "4Y9M", 166: "4Y10M", 168: "4Y11M",
    169: "5Y0M", 171: "5Y1M", 172: "5Y2M", 174: "5Y3M", 175: "5Y4M", 177: "5Y5M", 179: "5Y6M", 180: "5Y7M", 182: "5Y8M", 183: "5Y9M", 185: "5Y10M", 187: "5Y11M",
    189: "6Y0M", 190: "6Y1M", 192: "6Y2M", 194: "6Y3M", 196: "6Y4M", 198: "6Y5M", 200: "6Y6M", 202: "6Y7M", 204: "6Y8M", 206: "6Y9M", 208: "6Y10M", 210: "6Y11M",
    212: "7Y0M", 215: "7Y1M", 217: "7Y2M", 219: "7Y3M", 221: "7Y4M", 223: "7Y5M", 225: "7Y6M", 227: "7Y7M", 230: "7Y8M", 232: "7Y9M", 234: "7Y10M", 236: "7Y11M",
    238: "8Y0M", 240: "8Y1M", 242: "8Y2M", 244: "8Y3M", 246: "8Y4M", 248: "8Y5M", 250: "8Y6M", 252: "8Y7M", 254: "8Y8M", 256: "8Y9M", 258: "8Y10M", 260: "8Y11M",
    262: "9Y0M", 264: "9Y1M", 266: "9Y2M", 267: "9Y3M", 269: "9Y4M", 271: "9Y5M", 273: "9Y6M", 275: "9Y7M", 277: "9Y8M", 279: "9Y9M", 281: "9Y10M", 282: "9Y11M",
    284: "10Y0M", 286: "10Y1M", 288: "10Y2M", 290: "10Y3M", 292: "10Y4M", 294: "10Y5M", 296: "10Y6M", 298: "10Y7M", 300: "10Y8M", 303: "10Y9M", 305: "10Y10M", 308: "10Y11M",
    311: "11Y0M", 314: "11Y1M", 317: "11Y2M", 321: "11Y3M", 325: "11Y4M", 329: "11Y5M", 333: "11Y6M", 338: "11Y7M", 343: "11Y8M", 348: "11Y9M", 354: "11Y10M", 360: "11Y11M",
    366: "12Y0M", 373: "12Y1M", 380: "12Y2M", 388: "12Y3M", 396: "12Y4M", 404: "12Y5M", 413: "12Y6M", 423: "12Y7M", 432: "12Y8M", 443: "12Y9M", 453: "12Y10M", 464: "12Y11M",
    475: "13Y0M", 487: "13Y1M", 499: "13Y2M", 511: "13Y3M", 524: "13Y4M", 537: "13Y5M", 551: "13Y6M", 564: "13Y7M", 578: "13Y8M", 593: "13Y9M", 608: "13Y10M", 623: "13Y11M",
    638: "14Y0M", 654: "14Y1M", 670: "14Y2M", 686: "14Y3M", 703: "14Y4M", 719: "14Y5M", 736: "14Y6M", 753: "14Y7M", 770: "14Y8M", 787: "14Y9M", 803: "14Y10M", 820: "14Y11M",
    836: "15Y0M", 852: "15Y1M", 868: "15Y2M", 883: "15Y3M", 898: "15Y4M", 912: "15Y5M", 926: "15Y6M", 940: "15Y7M", 952: "15Y8M", 964: "15Y9M", 975: "15Y10M", 986: "15Y11M",
    995: "16Y0M", 1000: "ADULT"
};

const girlsAgeConversion = {
    218: "3Y3M", 219: "3Y4M", 220: "3Y5M", 221: "3Y6M", 222: "3Y7M", 223: "3Y8M", 224: "3Y10M", 146: "3Y11M",
    226: "4Y1M", 227: "4Y2M", 228: "4Y3M", 229: "4Y4M", 230: "4Y6M", 232: "4Y7M", 233: "4Y8M", 234: "4Y9M", 236: "4Y10M", 237: "4Y11M",
    239: "5Y0M", 241: "5Y1M", 243: "5Y2M", 245: "5Y3M", 248: "5Y4M", 251: "5Y5M", 254: "5Y6M", 256: "5Y7M", 260: "5Y8M", 263: "5Y9M", 266: "5Y10M", 269: "5Y11M",
    273: "6Y0M", 276: "6Y1M", 280: "6Y2M", 284: "6Y3M", 287: "6Y4M", 291: "6Y5M", 294: "6Y6M", 298: "6Y7M", 302: "6Y8M", 305: "6Y9M", 309: "6Y10M", 312: "6Y11M",
    315: "7Y0M", 318: "7Y1M", 322: "7Y2M", 325: "7Y3M", 328: "7Y4M", 330: "7Y5M", 333: "7Y6M", 336: "7Y7M", 339: "7Y8M", 342: "7Y9M", 345: "7Y10M", 348: "7Y11M",
    351: "8Y0M", 354: "8Y1M", 357: "8Y2M", 360: "8Y3M", 363: "8Y4M", 367: "8Y5M", 370: "8Y6M", 374: "8Y7M", 378: "8Y8M", 380: "8Y9M", 386: "8Y10M", 390: "8Y11M",
    395: "9Y0M", 400: "9Y1M", 405: "9Y2M", 410: "9Y3M", 415: "9Y4M", 421: "9Y5M", 427: "9Y6M", 433: "9Y7M", 439: "9Y8M", 445: "9Y9M", 452: "9Y10M", 458: "9Y11M",
    465: "10Y0M", 472: "10Y1M", 480: "10Y2M", 487: "10Y3M", 495: "10Y4M", 503: "10Y5M", 511: "10Y6M", 519: "10Y7M", 527: "10Y8M", 536: "10Y9M", 540: "10Y10M", 554: "10Y11M",
    563: "11Y0M", 572: "11Y1M", 581: "11Y2M", 591: "11Y3M", 600: "11Y4M", 610: "11Y5M", 620: "11Y6M", 630: "11Y7M", 641: "11Y8M", 651: "11Y9M", 662: "11Y10M", 672: "11Y11M",
    683: "12Y0M", 694: "12Y1M", 705: "12Y2M", 715: "12Y3M", 726: "12Y4M", 738: "12Y5M", 749: "12Y6M", 760: "12Y7M", 771: "12Y8M", 782: "12Y9M", 794: "12Y10M", 805: "12Y11M",
    816: "13Y0M", 827: "13Y1M", 839: "13Y2M", 850: "13Y3M", 861: "13Y4M", 872: "13Y5M", 883: "13Y6M", 893: "13Y7M", 904: "13Y8M", 914: "13Y9M", 924: "13Y10M", 933: "13Y11M",
    943: "14Y0M", 952: "14Y1M", 960: "14Y2M", 968: "14Y3M", 976: "14Y4M", 983: "14Y5M", 990: "14Y6M", 996: "14Y7M", 1000: "ADULT"
};

// --- State ---
let currentStep = 1; // 1: Gender, 2: Bone Eval, 4: Result
let gender = null; // 'BOY' | 'GIRL'
let currentBoneIndex = 0;
let scores = {}; // e.g. { "radius": 0, "ulna": 2 ... }

// --- DOM Elements ---
const views = {
    1: document.getElementById('step1'),
    2: document.getElementById('step2'),
    4: document.getElementById('step4')
};

const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const drawerCloseBtn = document.getElementById('drawer-close-btn');
const boneListEl = document.getElementById('bone-list');
const resetBtn = document.getElementById('reset-btn');

const btnBoy = document.getElementById('btn-boy');
const btnGirl = document.getElementById('btn-girl');

const boneTitle = document.getElementById('bone-title');
const boneProgress = document.getElementById('bone-progress');
const imageGrid = document.getElementById('image-grid');

const totalScoreEl = document.getElementById('total-score');
const boneAgeEl = document.getElementById('bone-age');
const restartBtn = document.getElementById('restart-btn');

// --- Initialization ---
function init() {
    bindEvents();
    renderView();
}

function bindEvents() {
    menuBtn.addEventListener('click', openDrawer);
    drawerCloseBtn.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    resetBtn.addEventListener('click', resetApp);

    btnBoy.addEventListener('click', () => selectGender('BOY'));
    btnGirl.addEventListener('click', () => selectGender('GIRL'));
    
    restartBtn.addEventListener('click', resetApp);
}

// --- Navigation ---
function setStep(step) {
    currentStep = step;
    renderView();
}

function renderView() {
    Object.values(views).forEach(el => el.classList.add('hidden'));
    views[currentStep].classList.remove('hidden');

    if (currentStep === 2) {
        renderBoneEval();
    } else if (currentStep === 4) {
        renderResult();
    }
}

// --- State Modifiers ---
function selectGender(selectedGender) {
    gender = selectedGender;
    setStep(2);
}

function resetApp() {
    gender = null;
    currentBoneIndex = 0;
    scores = {};
    closeDrawer();
    setStep(1);
}

// --- Drawer Logic ---
function openDrawer() {
    updateDrawerList();
    drawer.classList.add('active');
    drawerOverlay.classList.add('active');
}

function closeDrawer() {
    drawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
}

function updateDrawerList() {
    boneListEl.innerHTML = '';
    BONE_LIST.forEach((bone, index) => {
        const li = document.createElement('li');
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'bone-list-name';
        nameSpan.textContent = bone.name;
        
        const stageSpan = document.createElement('span');
        const scoreIndex = scores[bone.id];
        
        if (scoreIndex !== undefined) {
            stageSpan.className = 'bone-list-stage';
            stageSpan.textContent = String.fromCharCode(65 + scoreIndex); // 0 -> A, 1 -> B...
        } else {
            stageSpan.className = 'bone-list-stage empty';
            stageSpan.textContent = '-';
        }

        li.appendChild(nameSpan);
        li.appendChild(stageSpan);
        
        li.addEventListener('click', () => {
            currentBoneIndex = index;
            closeDrawer();
            setStep(2);
        });
        
        boneListEl.appendChild(li);
    });
}

// --- Bone Evaluation Logic ---
function renderBoneEval() {
    const bone = BONE_LIST[currentBoneIndex];
    boneTitle.textContent = bone.name;
    boneProgress.textContent = `${currentBoneIndex + 1} / 13`;
    
    imageGrid.innerHTML = '';
    
    // Calculate number of stages based on maxStage (e.g., 'I' is 9 stages A-I, 'H' is 8 stages A-H)
    const numStages = bone.maxStage.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    
    const currentSelection = scores[bone.id];

    for (let i = 0; i < numStages; i++) {
        const stageLetter = String.fromCharCode(65 + i); // A, B, C...
        const fileName = `${stageLetter.toLowerCase()}.png`; // a.png, b.png...
        const imagePath = `assets/${bone.assetDir}/${fileName}`;

        const itemDiv = document.createElement('div');
        itemDiv.className = `image-item ${currentSelection === i ? 'selected' : ''}`;
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Stage ${stageLetter}`;
        // Add error handling in case image is missing during dev
        img.onerror = () => { img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23999">No Img</text></svg>'; };
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'image-label';
        labelDiv.textContent = stageLetter;

        itemDiv.appendChild(img);
        itemDiv.appendChild(labelDiv);

        itemDiv.addEventListener('click', () => selectStage(i));
        
        imageGrid.appendChild(itemDiv);
    }
}

function selectStage(stageIndex) {
    const bone = BONE_LIST[currentBoneIndex];
    scores[bone.id] = stageIndex;
    
    // Quick visual feedback before advancing
    renderBoneEval();
    
    setTimeout(() => {
        // Find next un-evaluated bone, or just go to next if iterating sequentially
        if (Object.keys(scores).length === 13) {
            setStep(4);
        } else {
            // Find the next un-evaluated bone
            let nextIndex = currentBoneIndex + 1;
            while(nextIndex < 13 && scores[BONE_LIST[nextIndex].id] !== undefined) {
                nextIndex++;
            }
            if (nextIndex < 13) {
                currentBoneIndex = nextIndex;
                setStep(2);
            } else {
                // If all subsequent are filled but we missed an earlier one
                for (let i = 0; i < 13; i++) {
                    if (scores[BONE_LIST[i].id] === undefined) {
                        currentBoneIndex = i;
                        setStep(2);
                        return;
                    }
                }
                setStep(4);
            }
        }
    }, 150);
}

// --- Result Calculation ---
function renderResult() {
    const scoreTable = gender === 'BOY' ? boysScores : girlsScores;
    const conversionMap = gender === 'BOY' ? boysAgeConversion : girlsAgeConversion;
    
    let totalScore = 0;
    
    for (const bone of BONE_LIST) {
        const stageIndex = scores[bone.id];
        if (stageIndex !== undefined) {
            const boneScores = scoreTable[bone.id];
            if (boneScores && stageIndex < boneScores.length) {
                totalScore += boneScores[stageIndex];
            }
        }
    }
    
    // Find matching age (max key <= totalScore)
    const keys = Object.keys(conversionMap).map(Number).sort((a, b) => a - b);
    let matchedAge = "N/A";
    
    for (let i = keys.length - 1; i >= 0; i--) {
        if (keys[i] <= totalScore) {
            matchedAge = conversionMap[keys[i]];
            break;
        }
    }
    
    totalScoreEl.textContent = totalScore;
    boneAgeEl.textContent = matchedAge;
}

// Start app
init();
