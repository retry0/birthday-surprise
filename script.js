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

/* TYPING EFFECT */
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

window.onload = typeEffect;

/* MEMORY REVEAL */
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

/* HEART EFFECT */
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
