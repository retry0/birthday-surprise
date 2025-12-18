/* ================= CHECK PASSWORD ================= */
function checkPassword() {
    const input = document.getElementById("password");
    const error = document.getElementById("error");
    const card = document.querySelector(".login-card");

    // 🔐 GANTI TANGGAL LAHIR DI SINI
    const correctPassword = "19121997"; // DDMMYYYY

    if (!input) return;

    if (input.value === correctPassword) {
        // Optional: small delay biar elegan
        setTimeout(() => {
            window.location.href = "surprise.html";
        }, 500);
    } else {
        // Tampilkan error
        error.style.display = "block";

        // Shake card
        card.classList.add("shake");

        // Hapus shake setelah animasi
        setTimeout(() => {
            card.classList.remove("shake");
        }, 500);

        // Clear input (optional)
        input.value = "";
        input.focus();
    }
}


/* ================= FADE-IN MUSIC ================= */
function playSurpriseMusic() {
    const music = document.getElementById("music");
    if (!music || music.dataset.played === "true") return;

    music.dataset.played = "true";
    music.volume = 0;
    music.play();

    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 0.6) {
            vol += 0.02;
            music.volume = Math.min(vol, 0.6);
        } else {
            clearInterval(fade);
        }
    }, 120);
}

/* ================= TYPING EFFECT ================= */
const message = `
Di hari istimewa ini,
aku ingin kamu tahu satu hal…

Kamu adalah alasan
senyumku setiap hari 💕

Terima kasih sudah hadir
di hidupku 💖
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
        playMemoriesAuto();
    }
}

/* ================= MEMORY AUTO PLAY ================= */
function playMemoriesAuto() {
    const memories = document.querySelectorAll(".memories figure");
    const viewer = document.getElementById("memoryViewer");
    const img = document.getElementById("memoryImg");
    const caption = document.getElementById("memoryCaption");
    const pageTwo = document.getElementById("pageTwo");

    let index = 0;

    function showNext() {
        if (index >= memories.length) {
            setTimeout(() => {
                viewer.classList.add("hidden");
                pageTwo.classList.remove("hidden");
            }, 2000);
            return;
        }

        img.src = memories[index].querySelector("img").src;
        caption.innerText = memories[index].dataset.caption;

        viewer.classList.remove("hidden");

        setTimeout(() => {
            viewer.classList.add("hidden");
            index++;
            setTimeout(showNext, 700);
        }, 2500);
    }

    showNext();
}

/* ================= START BUTTON ================= */
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", () => {
        playSurpriseMusic();     // 🎶 fade-in music
        startBtn.style.display = "none";
        typeEffect();
    });
});
