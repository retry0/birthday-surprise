function checkPassword() {
    const input = document.getElementById("password").value;
    const birthday = "19121997"; // GANTI

    if (input === birthday) {
        window.location.href = "surprise.html";
    } else {
        const card = document.querySelector(".login-card");
        const error = document.getElementById("error");

        error.style.display = "block";
        card.classList.add("shake");

        setTimeout(() => {
            card.classList.remove("shake");
        }, 500);
    }
}

/* TYPING */
const message = `
Di hari istimewa ini,
aku ingin kamu tahu satu hal…

Kamu adalah alasan
senyumku setiap hari 💕

Aku mencintaimu,
hari ini dan seterusnya 💖
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

/* MEMORY AUTO SHOW */
function playMemoriesAuto() {
    const memories = document.querySelectorAll(".memories figure");
    const viewer = document.getElementById("memoryViewer");
    const img = document.getElementById("memoryImg");
    const caption = document.getElementById("memoryCaption");
    const pageTwo = document.getElementById("pageTwo");

    let index = 0;

    function showNext() {
        if (index >= memories.length) {
            // ⏳ Delay emosional sebelum page two
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

/* START */
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("music");

    startBtn.addEventListener("click", () => {
        music.play();
        startBtn.style.display = "none";
        typeEffect();
    });
});
