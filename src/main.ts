import "./style.css";

const btnAnterior = document.getElementById("anterior") as HTMLElement;
const btnSiguiente = document.getElementById("siguiente") as HTMLElement;
const turnoItem = document.getElementById("numero-turno") as HTMLElement;
const cambiarTurnoItem = document.getElementById('turno_manual') as HTMLTextAreaElement;

let turno: number = parseInt(turnoItem?.innerText || "01", 10);

const deshabilitarBtnAtras = () => {
  if (turno <= 1) {
    btnAnterior.setAttribute("disabled", "disabled"); // Deshabilita el botón "Atrás" si el turno es 01
  } else {
    btnAnterior.removeAttribute("disabled"); // Habilita el botón "Atrás" si el turno es mayor que 01
  }
};

const adelantarTurno = (): void => {
  turno += 1;
  deshabilitarBtnAtras();
  turnoItem.innerText = turno.toString().padStart(2, "0");
};
const atrasarTurno = (): void => {
    if(turno <=1){
        turno -= 1;
        deshabilitarBtnAtras();
        turnoItem.innerText = turno.toString().padStart(2, "0");
    }  
};
const actualizarTurnoManual = () => {
    if(cambiarTurnoItem.value !=''){
        const turnoManual = parseInt(cambiarTurnoItem.value, 10);
        if (!isNaN(turnoManual) && turnoManual >= 1) {
            turno = turnoManual;
            turnoItem.innerText = turno.toString().padStart(2, "0");
            deshabilitarBtnAtras();
        } else{
            alert("Introduce un número mayor que 1 :)");
        }
    }
};

btnAnterior.addEventListener("click", atrasarTurno);
btnSiguiente.addEventListener("click", adelantarTurno);
cambiarTurnoItem.addEventListener('input', actualizarTurnoManual);

deshabilitarBtnAtras();
