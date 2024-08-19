import "./style.css";

const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
const turnoItem = document.getElementById("numero-turno");

const cambiarTurnoItem = document.getElementById("turno_manual");

let turno: number = parseInt(turnoItem?.innerText || "01", 10);

const habilitarDeshabilitarBtnAtras = () => {
  if (
    btnAnterior !== null &&
    btnAnterior !== undefined &&
    btnAnterior instanceof HTMLButtonElement
  ) {
    if (turno <= 1) {
      btnAnterior.setAttribute("disabled", "disabled");
    } else {
      btnAnterior.removeAttribute("disabled");
    }
  }
};

const cambiarTurno = (turno: number) => {
  if (
    turnoItem !== null &&
    turnoItem !== undefined &&
    turnoItem instanceof HTMLElement
  ) {
    turnoItem.innerText = turno.toString().padStart(2, "0");
  }
};
const adelantarTurno = (): void => {
  turno += 1;
  cambiarTurno(turno);
  habilitarDeshabilitarBtnAtras();
};

const atrasarTurno = (): void => {
  if (turno > 1) {
    turno -= 1;
    cambiarTurno(turno);
    habilitarDeshabilitarBtnAtras();
  }
};
const actualizarTurnoManual = () => {
  if (
    cambiarTurnoItem !== null &&
    cambiarTurnoItem !== undefined &&
    cambiarTurnoItem instanceof HTMLTextAreaElement &&
    cambiarTurnoItem.value != ""
  ) {
    const turnoManual = parseInt(cambiarTurnoItem.value, 10);
    if (!isNaN(turnoManual) && turnoManual >= 1) {
      turno = turnoManual;
      cambiarTurno(turno);
      habilitarDeshabilitarBtnAtras();
    } else {
      alert("Introduce un número mayor que 1 :)");
    }
  }
};

if (
  btnAnterior !== null &&
  btnAnterior !== undefined &&
  btnAnterior instanceof HTMLButtonElement
) {
  btnAnterior.addEventListener("click", atrasarTurno);
}
if (
  btnSiguiente !== null &&
  btnSiguiente !== undefined &&
  btnSiguiente instanceof HTMLButtonElement
) {
  btnSiguiente.addEventListener("click", adelantarTurno);
}
if (
  cambiarTurnoItem !== null &&
  cambiarTurnoItem !== undefined &&
  cambiarTurnoItem instanceof HTMLTextAreaElement
) {
  cambiarTurnoItem.addEventListener("input", actualizarTurnoManual);
}
