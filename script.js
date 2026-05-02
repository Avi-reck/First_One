// ========================================
// 🎪 THE CHAOS GENERATOR - JavaScript
// ========================================

// ========== CRAZY IDEAS ==========
const crazyIdeas = [
    "🚀 Build a chatbot that only speaks in memes!",
    "🎨 Create an app that turns your mood into colors!",
    "🎮 Make a game where you play as a sentient potato!",
    "🌮 Design a food delivery app... for pets!",
    "🎭 Build an AI that only tells dad jokes!",
    "🚗 Create a car that drives in reverse by default!",
    "🎵 Make a music player that plays backward songs!",
    "📱 Design an app that only works upside down!",
    "🧠 Build a brain-training game for hamsters!",
    "🌙 Create a social media platform just for cats!"
];

// ========== ASCII ART ==========
const asciiArt = [
    `
    \\😎//
     (o_o)
     /| |\\
      / \\
    `,
    `
     ^__^
     (oo)\\_______
     (__)\\       )\\/\\
         ||----w |
         ||     ||
    `,
    `
    <(^_^)>
     / \\ / \\
    /   V   \\
    `,
    `
    ╔══════════╗
    ║ CHAOTIC! ║
    ╚══════════╝
     ↓ ↓ ↓ ↓ ↓
     ~ ~ ~ ~ ~
    `,
    `
    🎪🎪🎪
    🎨✨🎭
    🚀💻🎉
    `
];

// ========== MOTIVATIONAL QUOTES ==========
const motivations = [
    "✨ Your code works? That's basically magic!",
    "🌟 Every bug is a feature waiting to happen!",
    "💪 This repo will inspire millions! Probably.",
    "🎯 You're doing great! Seriously, keep going!",
    "🚀 First GitHub repo? You're officially a legend!",
    "💡 The chaos is the feature, not a bug!",
    "🎨 Your code is poetry in motion!",
    "🔥 This is way better than your first try!",
    "⭐ GitHub's algorithms are probably talking about you!",
    "🎉 Who needs clean code anyway? This is art!"
];

// ========== EMOJI PARTY ==========
const emojis = [
    '🎉', '✨', '🎊', '🎈', '🎁', '🎀', '🌟', '⭐',
    '🚀', '💫', '🌠', '💥', '🔥', '⚡', '🌈', '🎨',
    '🎭', '🎪', '🎯', '💝'
];

// ========== TITLE CLICK COUNTER ==========
let titleClicks = 0;

// ========== KONAMI CODE ==========
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];
let konamiIndex = 0;

// ========== PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎪 THE CHAOS GENERATOR LOADED! 🎪');
    initializeEventListeners();
    generateInitialContent();
});

// ========== INITIALIZE EVENT LISTENERS ==========
function initializeEventListeners() {
    // Title click counter
    document.querySelector('h1').addEventListener('click', titleClick);

    // Konami code listener
    document.addEventListener('keydown', checkKonamiCode);
}

// ========== GENERATE INITIAL CONTENT ==========
function generateInitialContent() {
    generateIdea();
    generateArt();
    getMotivation();
}

// ========== 🎲 GENERATE CRAZY IDEA ==========
function generateIdea() {
    const randomIdea = crazyIdeas[
        Math.floor(Math.random() * crazyIdeas.length)
    ];
    const ideaElement = document.getElementById('idea');
    ideaElement.textContent = randomIdea;
    animateOutput(ideaElement);
    console.log('💡 Idea generated:', randomIdea);
}

// ========== 🎨 GENERATE ASCII ART ==========
function generateArt() {
    const randomArt = asciiArt[
        Math.floor(Math.random() * asciiArt.length)
    ];
    const artElement = document.getElementById('art');
    artElement.textContent = randomArt;
    animateOutput(artElement);
    console.log('🎨 Art generated');
}

// ========== 💡 GET MOTIVATION ==========
function getMotivation() {
    const randomQuote = motivations[
        Math.floor(Math.random() * motivations.length)
    ];
    const motivationElement = document.getElementById('motivation');
    motivationElement.textContent = randomQuote;
    animateOutput(motivationElement);
    console.log('🌟 Motivation:', randomQuote);
}

// ========== 🌈 TOGGLE RAINBOW MODE ==========
function toggleRainbow() {
    const body = document.body;
    const status = document.getElementById('rainbow-status');

    body.classList.toggle('rainbow-mode');

    if (body.classList.contains('rainbow-mode')) {
        status.textContent = '🌈 RAINBOW MODE ACTIVATED! 🌈';
        console.log('🌈 Rainbow mode ON');
    } else {
        status.textContent = '🌈 Rainbow mode deactivated';
        console.log('🌈 Rainbow mode OFF');
    }

    animateOutput(status);
}

// ========== 🎉 EMOJI PARTY ==========
function emojiParty() {
    const container = document.getElementById('emoji-container');

    // Generate 20 emojis
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        const randomEmoji = emojis[
            Math.floor(Math.random() * emojis.length)
        ];
        const randomX = Math.random() * window.innerWidth;
        const randomY = window.innerHeight;
        const randomDuration = 3 + Math.random() * 2; // 3-5 seconds
        const randomDelay = Math.random() * 0.5;

        emoji.className = 'emoji';
        emoji.textContent = randomEmoji;
        emoji.style.left = randomX + 'px';
        emoji.style.top = randomY + 'px';
        emoji.style.animationDuration = randomDuration + 's';
        emoji.style.animationDelay = randomDelay + 's';

        container.appendChild(emoji);

        // Remove emoji after animation
        setTimeout(() => {
            emoji.remove();
        }, (randomDuration + randomDelay) * 1000);
    }

    console.log('🎉 Emoji Party Started!');
}

// ========== 🎮 KONAMI CODE DETECTION ==========
function checkKonamiCode(e) {
    const key = e.key;

    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0; // Reset for next activation
        }
    } else {
        konamiIndex = 0;
    }
}

// ========== 🎮 EASTER EGG ACTIVATION ==========
function activateEasterEgg() {
    alert('🎮 KONAMI CODE ACTIVATED! 🎮\n\n🎉 DOUBLE EMOJI PARTY! 🎉');
    console.log('🎮 EASTER EGG TRIGGERED!');

    // Double emoji party
    emojiParty();
    setTimeout(emojiParty, 1000);
}

// ========== TITLE CLICK COUNTER ==========
function titleClick() {
    titleClicks++;
    console.log(`Title clicked ${titleClicks} times`);

    if (titleClicks === 5) {
        alert('🎉 Secret feature unlocked! Emoji party time!');
        emojiParty();
        titleClicks = 0; // Reset counter
    }
}

// ========== ANIMATE OUTPUT ==========
function animateOutput(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'fadeInScale 0.5s ease-out';
    }, 10);
}

// ========== CONSOLE WELCOME MESSAGE ==========
console.log(`
%c🎪 WELCOME TO THE CHAOS GENERATOR! 🎪
%c
Features:
✨ 🎲 Crazy Idea Generator
✨ 🎨 ASCII Art Creator
✨ 💡 Motivation Meter
✨ 🌈 Rainbow Mode
✨ 🎉 Emoji Party
✨ 🎮 Secret Easter Egg (Konami Code)
✨ 🖱️ Title Click Counter (Click 5 times!)

Have fun! 🚀
`, 'font-size: 16px; color: #667eea; font-weight: bold;', 'font-size: 12px; color: #666;');

// ========== BONUS: LOG EASTER EGG HINT ==========
console.log('%c🎮 Tip: Try the Konami Code! (↑ ↑ ↓ ↓ ← → ← → B A)', 'color: #ff6b6b; font-weight: bold;');
console.log('%c💡 Tip: Click the title 5 times for a surprise!', 'color: #ffa502; font-weight: bold;');
