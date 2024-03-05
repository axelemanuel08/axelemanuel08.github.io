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

// Opcional: Cerrar el modal cuando se hace click fuera
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


//Contador de transitos
let dates = 1;

//Funcion para agregar nuevos campos para nuevos transitos
const addDate = () => {
  dates++;
  //Contenedor de transitos adicionales
  const aditionalDate = document.getElementById("aditional-date");

  //Elemento transito ingreso
  const labelDateIn = document.createElement("p");
  labelDateIn.textContent = "Fecha de " + dates + " Ingreso:";
  labelDateIn.setAttribute("class", "label");
  const dateIn = document.createElement("input");
  dateIn.setAttribute("type", "date");
  dateIn.setAttribute("id", `dateIn${dates}`); // Asignando ID unico

  //Elemento transito egreso
  const labelDateOut = document.createElement("p");
  labelDateOut.textContent = "Fecha de " + dates + " Salida:";
  labelDateOut.setAttribute("class", "label");
  const dateOut = document.createElement("input");
  dateOut.setAttribute("type", "date");
  dateOut.setAttribute("id", `dateOut${dates}`); // Asignando ID unico

  //Agregar ambos al DOM
  aditionalDate.appendChild(labelDateIn);
  aditionalDate.appendChild(dateIn);
  aditionalDate.appendChild(labelDateOut);
  aditionalDate.appendChild(dateOut);

};

//Funcion para contar los dias
const onCountDays = () => {
  //Variable contenedora de los dias
  let totalDays = 0;
  //Elemento que desplegará los mensajes necesarios para informar al usuario sobre el funcionamiento
  const message = document.getElementById("mensaje1");

  //Iteracion sobre los transitos existentes
  for (let i = 1; i <= dates; i++) {
    //Obtener los datos de las fechas
    const dateIn = document.getElementById(`dateIn${i}`).value;
    const dateOut = document.getElementById(`dateOut${i}`).value;

    //Si existen
    if (dateIn && dateOut) {
      // Creamos sus respectivos objetos para su posterior manipulacion
      const date1 = new Date(dateIn);
      const date2 = new Date(dateOut);

      //Si no hay nada dentro
      if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        //Informamos del error de datos
        message.textContent = "Fechas inválidas en el rango " + i;
        //Continuamos con la siguiente iteracion
        continue; 
      }

      //La variable contendrá la diferencia en milisegundos
      const differenceInMilliseconds = date2.getTime() - date1.getTime();

      //Si es el mismo dia, mismo mes y mismo año, o sea entra y sale el mismo dia se suma un dia (+1)
      if (date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()) {
        totalDays += 1;
        //Si la diferencia es negativa
      } else if (differenceInMilliseconds < 1) {
        message.textContent = "Error al seleccionar las fechas en el rango " + i;
        //Si la diferencia es positiva
      } else {
        //Calculamos a cuantos dias equivalen
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        // Usando Math.ceil para redondear hacia arriba en caso de dias parciales
        totalDays += Math.ceil(differenceInDays); 
      }
    //Si no existen
    } else {
      message.textContent = "Faltan fechas en el rango " + i;
    }
  }
  //Mensaje final
  message.textContent = "Cantidad de dias dentro del pais: " + totalDays;
};

const onCalculateDate = () => {
    const input = document.getElementById("days").value;
    const today = new Date();
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
  const message = document.getElementById("mensaje3");
  const desdeVisa = new Date(document.getElementById("desdeVisa").value);
  const hastaVisa = Number.parseInt(input2);

  console.log(desdeVisa.getTime());
  // Validar la entrada
  if (!hastaVisa || hastaVisa <= 0) {
    message.textContent = "Entrada inválida. Por favor, ingrese un número positivo de días de permanencia.";
    return;
  }

  //Si no hay nada dentro
  if (isNaN(desdeVisa.getTime())) {
    //Informamos del error de datos
    message.textContent = "Entrada inválida. Por favor, ingrese una fecha válida.";
    //Continuamos con la siguiente iteracion
    return; 
  }

  //Para los pesados
  if((desdeVisa.getTime() - 1672531200000) <= 0){
    console.log("Ingreso");
    message.textContent = "La fecha debe ser posterior al 01-01-2023";
    return;
  }
  // Calcular la fecha de permanencia
  desdeVisa.setDate(desdeVisa.getDate() + hastaVisa + 1);
  console.log(desdeVisa.getDate());

  // Formatear la fecha de salida para mostrarla
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDepartureDate = desdeVisa.toLocaleDateString('es-ES', options);

  // Mostrar la fecha limite de la permanencia
  message.textContent = "La permanencia vence el " + formattedDepartureDate;
};
