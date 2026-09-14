const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");

const landing = document.querySelector(".landing");
const mission = document.getElementById("mission");


// Comenzar la misión
startButton.addEventListener("click", () => {

    landing.style.opacity = "0";
    landing.style.transform = "scale(0.97)";
    landing.style.transition = "all 0.6s ease";

    setTimeout(() => {

        landing.style.display = "none";

        mission.classList.remove("hidden");

        mission.style.opacity = "0";
        mission.style.transform = "scale(1.03)";

        requestAnimationFrame(() => {

            mission.style.transition = "all 0.8s ease";

            mission.style.opacity = "1";
            mission.style.transform = "scale(1)";

        });

    }, 600);

});


// Volver a la portada
backButton.addEventListener("click", () => {

    mission.style.opacity = "0";

    setTimeout(() => {

        mission.classList.add("hidden");

        landing.style.display = "flex";

        requestAnimationFrame(() => {

            landing.style.opacity = "1";
            landing.style.transform = "scale(1)";

        });

    }, 500);

});