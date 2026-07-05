// ======================================
// LOADING SCREEN
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 3000);

});

// ======================================
// LETTERS
// ======================================

const letterButtons = document.querySelectorAll(".letter-button");

letterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.parentElement;

        card.classList.toggle("open");

    });

});

// ============================
// MUSIC
// ============================

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;

music.volume = 0.35;

musicButton.addEventListener("click", async () => {

    if (!isPlaying) {

        try {

            await music.play();

            musicButton.textContent = "❚❚";

            isPlaying = true;

        } catch (err) {

            console.log(err);

        }

    }

    else {

        music.pause();

        musicButton.textContent = "▶";

        isPlaying = false;

    }

});

// ======================================
// OPTIONAL
// Start song from beginning when page refreshes
// ======================================

music.currentTime = 0;