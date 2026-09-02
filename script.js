const elementosIdioma = document.querySelectorAll("[data-es]");

const botonES = document.getElementById("es-btn");
const botonFR = document.getElementById("fr-btn");


function cambiarIdioma(idioma) {

    elementosIdioma.forEach(elemento => {

        elemento.textContent = elemento.dataset[idioma];

    });

    if (idioma === "es") {

        botonES.classList.add("idioma-activo");
        botonFR.classList.remove("idioma-activo");

    } else {

        botonFR.classList.add("idioma-activo");
        botonES.classList.remove("idioma-activo");

    }

}


botonES.addEventListener("click", () => {
    cambiarIdioma("es");
    actualizarPlaceholders("es");
});


botonFR.addEventListener("click", () => {
    cambiarIdioma("fr");
    actualizarPlaceholders("fr");
});
function actualizarPlaceholders(idioma) {

    document.querySelectorAll("[data-placeholder-es]").forEach(elemento => {

        if (idioma === "es") {

            elemento.placeholder =
                elemento.dataset.placeholderEs;

        } else {

            elemento.placeholder =
                elemento.dataset.placeholderFr;

        }

    });

}

actualizarPlaceholders("es");

/* =========================
   CUENTA ATRÁS
========================= */

const fechaBoda =
    new Date("2027-02-06T12:30:00");

function actualizarCuentaAtras() {

    const ahora = new Date();

    const diferencia =
        fechaBoda - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }


    const dias =
        Math.floor(
            diferencia / (1000 * 60 * 60 * 24)
        );

    const horas =
        Math.floor(
            (diferencia / (1000 * 60 * 60)) % 24
        );

    const minutos =
        Math.floor(
            (diferencia / (1000 * 60)) % 60
        );

    const segundos =
        Math.floor(
            (diferencia / 1000) % 60
        );


    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}


actualizarCuentaAtras();

setInterval(
    actualizarCuentaAtras,
    1000
);