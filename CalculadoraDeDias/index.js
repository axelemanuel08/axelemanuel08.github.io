const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

//Manejadores de eventos
openModalButton.addEventListener('click', () => {
  console.log("abriendo");
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

//Cerrar el modal cuando se hace click fuera
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const dateIn1 = document.getElementById("dateIn1");
const dateOut1 = document.getElementById("dateOut1");
const errDateIn1 = document.getElementById("errDateIn1");
const errDateOut1 = document.getElementById("errDateOut1");

dateIn1.addEventListener("change", () => {
  //Primero eliminar mensajes existentes
  errDateIn1.textContent = "";

  isOlderThanToday(dateIn1) ? errDateIn1.textContent = "La fecha ingresada es posterior al dia de hoy, esta intentando crear un transito a futuro en lugar de cotejar el existente." : null;
})
dateOut1.addEventListener("change", () => {
  errDateOut1.textContent = "";
  isOlderThanToday(dateOut1) ? errDateOut1.textContent = "La fecha ingresada es posterior al dia de hoy, esta intentando crear un transito a futuro en lugar de cotejar el existente." : null;
})

const isOlderThanToday = (dateElement) => {
  const today = new Date();
  const date = new Date(dateElement.value);
  return today <= date ? true : false;
}

//Contador de transitos
let dates = 1;

//Funcion para agregar nuevos campos para nuevos transitos
const addDate = () => {
  dates++;
  //Mejorar la estructura semantica de los nuevos transitos
  
  //Contenedor de transitos adicionales
  const aditionalDate = document.getElementById("aditional-date");

  //Elemento transito ingreso
  const labelDateIn = document.createElement("p");
  labelDateIn.textContent = "Fecha de " + dates + " Ingreso:";
  labelDateIn.setAttribute("class", "label");
  const dateIn = document.createElement("input");
  dateIn.setAttribute("type", "date");
  dateIn.setAttribute("id", `dateIn${dates}`); // Asignando ID unico
  const errDateIn = document.createElement("p");
  errDateIn.setAttribute("id", `errDateIn${dates}`);


  //Elemento transito egreso
  const labelDateOut = document.createElement("p");
  labelDateOut.textContent = "Fecha de " + dates + " Salida:";
  labelDateOut.setAttribute("class", "label");
  const dateOut = document.createElement("input");
  dateOut.setAttribute("type", "date");
  dateOut.setAttribute("id", `dateOut${dates}`); // Asignando ID unico
  const errDateOut = document.createElement("p");
  errDateOut.setAttribute("id", `errDateOut${dates}`);

  //Agregar ambos al DOM
  aditionalDate.appendChild(labelDateIn);
  aditionalDate.appendChild(dateIn);
  aditionalDate.appendChild(errDateIn);
  aditionalDate.appendChild(labelDateOut);
  aditionalDate.appendChild(dateOut);
  aditionalDate.appendChild(errDateOut);


  //Añadir los manejadores de eventos
  dateIn.addEventListener("change", () => {
    errDateIn.textContent = "";
    isOlderThanToday(dateIn) ? errDateIn.textContent = "La fecha ingresada es posterior al dia de hoy, esta intentando crear un transito a futuro en lugar de cotejar el existente." : null;
  })
  dateOut.addEventListener("change", () => {
    errDateOut.textContent = "";
    isOlderThanToday(dateOut) ? errDateOut.textContent = "La fecha ingresada es posterior al dia de hoy, esta intentando crear un transito a futuro en lugar de cotejar el existente." : null;
  })
};



//Funcion para contar los dias
const onCountDays = () => {
  //Variable contenedora de los dias
  let totalDays = 0;
  //Elemento que desplegará los mensajes necesarios para informar al usuario sobre el funcionamiento
  const errormsg = document.getElementById("errormsg");
  const message = document.getElementById("mensaje1");

  //mensajes a desplegar
  const error1 = document.getElementById("error1");
  const error2 = document.getElementById("error2");
  const error3 = document.getElementById("error3");

  error1.textContent = "";
  error2.textContent = "";
  error3.textContent = "";
  
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
        errormsg.appendChild(error1);
        error1.textContent = "Fechas inválidas en el transito " + i + " , debe ingresar una fecha valida";
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
        errormsg.appendChild(error2);
        error2.textContent = "Error al seleccionar las fechas en el transito " + i + ", la diferencia es negativa";
        //Si la diferencia es positiva
      } else {
        //Calculamos a cuantos dias equivalen
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        // Usando Math.ceil para redondear hacia arriba en caso de dias parciales
        totalDays += Math.ceil(differenceInDays); 
      }
    //Si no existen
    } else {
      errormsg.appendChild(error3);
      error3.textContent = "Faltan fechas en el transito " + i;
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
