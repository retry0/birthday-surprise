/* ================= PASSWORD ================= */
function checkPassword() {
    const input = document.getElementById("password").value;
    const birthday = "19121997"; // 🔁 GANTI

    if (input === birthday) {
        window.location.href = "surprise.html";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

/* ================= TYPING ================= */
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
        playMemories();
    }
}

/* ================= MEMORY FRAME FULLSCREEN ================= */
function playMemories() {
    const memories = document.querySelectorAll(".memory");
    const viewer = document.getElementById("photoViewer");
    const img = document.getElementById("viewerImg");
    const caption = document.getElementById("viewerCaption");

    let index = 0;

    function showNext() {
        if (index >= memories.length) {
            setTimeout(showStageTwo, 2500);
            return;
        }

        img.src = memories[index].querySelector("img").src;
        caption.innerText =
            memories[index].querySelector("figcaption").innerText;

        viewer.classList.remove("hidden");

        setTimeout(() => {
            viewer.classList.add("hidden");
            index++;
            setTimeout(showNext, 700);
        }, 2300);
    }

    showNext();
}

/* ================= STAGE TWO ================= */
function showStageTwo() {
    document.getElementById("stageTwo").classList.remove("hidden");
}

/* ================= START ================= */
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("music");

    startBtn.addEventListener("click", () => {
        music.play();
        startBtn.style.display = "none";
        typeEffect();
    });
});
