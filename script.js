/* ================= PASSWORD ================= */
function checkPassword() {
    const input = document.getElementById("password").value;
    const birthday = "14021998"; // 🔁 GANTI TANGGAL LAHIR (DDMMYYYY)

    if (input === birthday) {
        window.location.href = "surprise.html";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

/* ================= TYPING EFFECT ================= */
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
    const typing = document.getElementById("typing");
    if (!typing) return;

    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    } else {
        revealMemories();
    }
}

window.onload = typeEffect;

/* ================= MEMORY REVEAL ================= */
function revealMemories() {
    const photos = document.querySelectorAll(".memory");
    let index = 0;

    const interval = setInterval(() => {
        if (index < photos.length) {
            photos[index].classList.remove("hidden");
            photos[index].classList.add("show");
            index++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
}

/* ================= HEART EFFECT ================= */
function showLove() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}
