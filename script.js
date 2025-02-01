const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Array of random messages
const randomMessages = [
    "Oh wow, bold move! 🙄",
    "You sure? Regret’s a real thing, y’know. 😏",
    "Cold. Ice cold. 🥶",
    "Oof, someone’s got no heart! 💔",
    "Wow, commitment issues much? 😂",
    "Bet you won’t say that to my face. 🤨",
    "Oh, playing hard to get? Cute. 😏",
    "I see, you like the chase. Typical. 😏",
    "Hard to get or just hard to please? 🤔",
    "You’re really making me work for this, huh? 😂",
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    return randomMessages[randomIndex];
}

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Awww 🥹🥹🥹 Never knew you felt this way 🥹😁.";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

// Function to pick a random message
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    return randomMessages[randomIndex];
}

function moveButtonRandomly(button) {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    question.textContent = getRandomMessage();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - buttonRect.width;
    const maxY = wrapperRect.height - buttonRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    // Temporarily set position: absolute to move the button
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", () => moveButtonRandomly(noBtn));
noBtn.addEventListener("click", () => moveButtonRandomly(noBtn));