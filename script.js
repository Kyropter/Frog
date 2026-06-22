const frog = document.getElementById("frog");
const frogImg = document.getElementById("frogImg");
const message = document.getElementById("message");
const gameArea = document.getElementById("gameArea");

let frogX = 300;
let frogY = 300;
let jumpDistance = 120;
let safeDistance = 180;

// Aspettiamo che l'immagine sia caricata
frogImg.onload = () => {
    frog.style.left = frogX + "px";
    frog.style.top = frogY + "px";

    document.addEventListener("mousemove", handleMouseMove);
};

function handleMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rect = frog.getBoundingClientRect();
    const frogCenterX = rect.left + rect.width / 2;
    const frogCenterY = rect.top + rect.height / 2;

    const dx = frogCenterX - mouseX;
    const dy = frogCenterY - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < safeDistance) {
        const angle = Math.atan2(dy, dx);

        frogX += Math.cos(angle) * jumpDistance;
        frogY += Math.sin(angle) * jumpDistance;

        frogX = Math.max(0, Math.min(gameArea.clientWidth - rect.width, frogX));
        frogY = Math.max(0, Math.min(gameArea.clientHeight - rect.height, frogY));

        frog.style.left = frogX + "px";
        frog.style.top = frogY + "px";

        // salto
        frog.style.transform = "translateY(-25px)";
        setTimeout(() => frog.style.transform = "translateY(0)", 200);
    }
}

// Messaggio romantico
frog.addEventListener("click", () => {
    message.innerHTML = "❤️ I love you so frogging much ❤️";
    message.style.opacity = 1;

    setTimeout(() => {
        message.style.opacity = 0;
    }, 2000);
});
