/* PASSWORD */
function checkPassword() {
    const input = document.getElementById("password").value;
    const birthday = "19121997"; // 🔁 GANTI

    if (input === birthday) {
        window.location.href = "surprise.html";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

/* TYPING */
const message = `
Di hari istimewa ini,
aku ingin kamu tahu satu hal…

Kamu adalah alasan
senyumku setiap hari 💕

Terima kasih sudah hadir,
mencintai, dan menemani aku.

Aku mencintaimu,
hari ini, esok,
dan selamanya 💖
`;

let i = 0;
function typeEffect() {
    const el = document.getElementById("typing");
    if (!el) return;

    if (i < message.length) {
        el.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    } else {
        revealMemories();
    }
}

/* MEMORY */
function revealMemories() {
    const items = document.querySelectorAll(".memory");
    let index = 0;

    const interval = setInterval(() => {
        if (index < items.length) {
            items[index].classList.remove("hidden");
            items[index].classList.add("show");
            index++;
        } else {
            clearInterval(interval);
            setTimeout(showStageTwo, 1500);
        }
    }, 2500);
}

/* STAGE 2 */
function showStageTwo() {
    document.getElementById("stageTwo").classList.remove("hidden");
}

/* START */
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("music");

    if (startBtn && music) {
        startBtn.addEventListener("click", () => {
            music.play();
            startBtn.style.display = "none";
            typeEffect();
        });
    }
});

/* HEART */
function showLove() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.bottom = "0";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = "24px";
        heart.style.animation = "floatUp 4s linear";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}
