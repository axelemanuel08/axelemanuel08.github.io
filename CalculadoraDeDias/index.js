const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', () => {
  console.log("abriendo");
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


let dates = 1;

const addDate = () => {
  dates++;
  const aditionalDate = document.getElementById("aditional-date");

  const labelDateIn = document.createElement("p");
  labelDateIn.textContent = "Fecha de " + dates + " Ingreso:";
  labelDateIn.setAttribute("class", "label");

  const labelDateOut = document.createElement("p");
  labelDateOut.textContent = "Fecha de " + dates + " Salida:";
  labelDateOut.setAttribute("class", "label");

  const dateIn = document.createElement("input");
  dateIn.setAttribute("type", "date");
  dateIn.setAttribute("id", `dateIn${dates}`); // Asign unique ID

  const dateOut = document.createElement("input");
  dateOut.setAttribute("type", "date");
  dateOut.setAttribute("id", `dateOut${dates}`); // Asign unique ID

  aditionalDate.appendChild(labelDateIn);
  aditionalDate.appendChild(dateIn);
  aditionalDate.appendChild(labelDateOut);
  aditionalDate.appendChild(dateOut);

};

const onCountDays = () => {
  let totalDays = 0;
  const message = document.getElementById("mensaje1");

  for (let i = 1; i <= dates; i++) {
    const dateIn = document.getElementById(`dateIn${i}`).value;
    const dateOut = document.getElementById(`dateOut${i}`).value;

    if (dateIn && dateOut) {
      // Validate dates
      const date1 = new Date(dateIn);
      const date2 = new Date(dateOut);

      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        message.textContent = "Fechas inválidas en el rango " + i;
        console.log(message.textContent);
        continue; // Skip to the next iteration if dates are invalid
      }

      const differenceInMilliseconds = date2.getTime() - date1.getTime();

      // Check for the same day and adjust totalDays accordingly
      if (date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()) {
        totalDays += 1;
      } else if (differenceInMilliseconds < 1) {
        message.textContent = "Error al seleccionar las fechas en el rango " + i;
      } else {
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        totalDays += Math.ceil(differenceInDays); // Use Math.ceil to round up for partial days
      }
    } else {
      message.textContent = "Faltan fechas en el rango " + i;
    }
  }

  message.textContent = "Cantidad de dias dentro del pais: " + totalDays; // Display total days
};

const onCalculateDate = () => {
    const input = document.getElementById("days").value;
    const today = new Date(); // Obtener la fecha actual
    const message = document.getElementById("mensaje2");
    const days = Number.parseInt(input);

    if (isNaN(days) || days < 1) {
        message.textContent = "No es un número válido";
    } else {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + days);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = futureDate.toLocaleDateString('es-ES', options);

        message.textContent = "La fecha maxima de permanencia es el: " + formattedDate;
    }
}
const onCountVisa = () => {
  const input2 = document.getElementById("hastaVisa").value;
  const today = new Date(); // Obtener la fecha actual
  const message = document.getElementById("mensaje3");
  const desdeVisa = new Date(document.getElementById("desdeVisa").value);
  const hastaVisa = Number.parseInt(input2);

  // Validar la entrada
  if (!desdeVisa || !hastaVisa || hastaVisa <= 0) {
    message.textContent = "Entrada inválida. Por favor, ingrese una fecha válida y un número positivo de días de permanencia.";
    return;
  }

  // Calcular la fecha de salida (fecha de vencimiento de la visa)
  const salida = new Date(desdeVisa);
  // Solución 1: Usar el método `Date.prototype.setDate()`
  // salida.setDate(salida.getDate() + hastaVisa - 1); // Restar 1 día de la fecha calculada

  // Solución 2: Usar los métodos `Date.prototype.setFullYear()` y `Date.prototype.setMonth()`
  salida.setFullYear(desdeVisa.getFullYear());
  salida.setMonth(desdeVisa.getMonth());
  salida.setDate(desdeVisa.getDate() + hastaVisa + 1);

  // Formatear la fecha de salida para mostrarla
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDepartureDate = salida.toLocaleDateString('es-ES', options);

  // Mostrar la fecha de vencimiento de la visa
  message.textContent = "Tu visa vence el " + formattedDepartureDate;
};
