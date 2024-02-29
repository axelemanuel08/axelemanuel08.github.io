console.log("JS CARGADO");

let dates = 1;

const addDate = () => {
  dates++;
  const aditionalDate = document.getElementById("aditional-date");

  const labelDateIn = document.createElement("p");
  labelDateIn.textContent = "Fecha de " + dates + " ingreso:";
  labelDateIn.setAttribute("class", "label");

  const labelDateOut = document.createElement("p");
  labelDateOut.textContent = "Fecha de " + dates + " egreso:";
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

  console.log("Función ejecutada");
};

const onCountDays = () => {
  console.log("Contando días");
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
        continue; // Skip to the next iteration if dates are invalid
      }

      const differenceInMilliseconds = date2.getTime() - date1.getTime();
      if (differenceInMilliseconds < 1) {
        console.log("Error al seleccionar las fechas en el rango " + i);
      } else {
        // Convert difference to days, checking for non-zero difference beforehand
        if (differenceInMilliseconds > 0) {
          const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
          totalDays += differenceInDays;
        } else {
          console.log("Error al seleccionar las fechas en el rango " + i);
        }
      }
    } else {
      console.error("Faltan fechas en el rango " + i);
    }
  }

  message.textContent = "Diferencia total en días: " + totalDays; // Display total days
};

const onCalculateDate = () => {
    console.log("Calculando fecha");
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
  console.log("calculando Visa");
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

  console.log(desdeVisa); // Mostrar la fecha de entrada
  console.log(hastaVisa); // Mostrar la cantidad de días

  // Formatear la fecha de salida para mostrarla
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDepartureDate = salida.toLocaleDateString('es-ES', options);

  // Mostrar la fecha de vencimiento de la visa
  message.textContent = "Tu visa vence el " + formattedDepartureDate;
};
