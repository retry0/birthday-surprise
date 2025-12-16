function startSurprise() {
    document.getElementById("music").play();
    confetti();
}

function confetti() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 2 + Math.random() * 3 + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}
