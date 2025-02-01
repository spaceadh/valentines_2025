const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Awww 🥹🥹🥹 Never knew you felt this way 🥹.";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

function moveButtonRandomly(button) {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

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