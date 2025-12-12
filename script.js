// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// DARK MODE TOGGLE
const themeBtn = document.getElementById("themeToggle");

if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("dark", "true");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("dark", "false");
    }
});

// MUSIC PLAYER + AUTOPLAY FIX
const musicBtn = document.getElementById("musicToggle");
const audio = document.getElementById("bg-music");

// coba autoplay saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
    audio.play().then(() => {
        musicBtn.textContent = "🎵";
    }).catch(() => {
        // jika diblokir browser → munculkan tombol manual
        const btn = document.createElement("button");
        btn.innerText = "Klik untuk memulai musik 🎵";
        btn.style.position = "fixed";
        btn.style.bottom = "20px";
        btn.style.right = "20px";
        btn.style.padding = "15px 20px";
        btn.style.fontSize = "16px";
        btn.style.borderRadius = "10px";
        btn.style.border = "none";
        btn.style.cursor = "pointer";
        btn.style.zIndex = "9999";

        btn.onclick = () => {
            audio.play();
            musicBtn.textContent = "🎵";
            btn.remove();
        };

        document.body.appendChild(btn);
    });
});

let playing = false;

musicBtn.addEventListener("click", () => {
    playing = !playing;

    if (playing) {
        audio.play();
        musicBtn.textContent = "🎵";
    } else {
        audio.pause();
        musicBtn.textContent = "🔇";
    }
});

// Reveal scroll animation
function revealElements() {
    document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", revealElements);

// Back to top button
const backTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 450 ? "block" : "none";
});
backTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
