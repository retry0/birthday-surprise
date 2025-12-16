function checkPassword() {
    const pass = document.getElementById("password").value;
    if (pass === "sayang") { // GANTI PASSWORD DI SINI
        window.location.href = "surprise.html";
    } else {
        document.getElementById("error").style.display = "block";
    }
}

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
