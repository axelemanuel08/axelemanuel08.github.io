const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

const containerDateIn = document.getElementById("containerDateIn1");
const dateIn1 = document.getElementById("dateIn1");
//agarro el elemento div
const dinamicErrorIn = document.getElementById("dinamicErrorIn1");
const containerDateOut = document.getElementById("containerDateOut1");
const dateOut1 = document.getElementById("dateOut1");
const dinamicErrorOut = document.getElementById("dinamicErrorOut1");
const messageDisplay = document.getElementById("messageDisplay");
const errorContainer = document.getElementById("errormsg");
const message = document.getElementById("mensaje1");

//Contenedor de transitos adicionales
const counterDays = document.getElementById("counterday");

//Objeto Data
let data = {
  entries : 1,
  transits : [[null,null],[null,null]],
  today : new Date(),
};

const isLaterThanToday = (date) => {
  return date > data.today ? true : false;
}

const isLaterThanADate = (date1, date2) => {
  return date1 > date2 ? true : false;
}

const isTransitCompleted = () => {
  //
}

const isOverlapping = (date, data) => {
  for (let index = 1; index < data.length; index++){
    console.log(index);
    const transit = data[index];
    if(transit[0]==null | transit[1]==null){
      console.log("transito sin cerrar");
    }else{
      console.log("hay un transito cerrado, verificando");
      if(date > transit[0] && date < transit[1]){
        console.log("hay superposicion");
        return true;
      }else{
        console.log("sin superposicion")
      }
    }
  }
  return false;
}

const errHandler = (event, errElement) => {
  console.log("Hubo un cambio");
  errElement.textContent = "";
  const date = new Date(event.target.value);
  let ok = 0;
  isNaN(date.getTime()) ? (errElement.textContent = "La fecha no es valida") : ok++;
  isLaterThanToday(date) ? (errElement.textContent = "La fecha ingresada es posterior a hoy") : ok++;
  console.log(isOverlapping(date, data.transits));
  isOverlapping(date, data.transits) ? (errElement.textContent = "Hay alguna superposicion") : ok++;
  return ok == 3 ? true : false;
}

const displayErrorMsg = (container, msg) => {
  const p = document.createElement("p");
  p.textContent = msg;
  container.appendChild(p);
}

//Funcion para agregar nuevos campos para nuevos transitos
const addDate = () => {
  data.entries++;
  const transit = data.entries;
  //Contenedor de transitos adicionales
  const transitContainer = document.createElement("article");
  transitContainer.setAttribute("id", `transit${data.entries}`);
  counterDays.appendChild(transitContainer);
  //contenedor de cada transito
  transitContainer.setAttribute("id", `transit${data.entries}`)
  //Elemento transito ingreso
  const dateContainerIn = document.createElement("div");
  dateContainerIn.setAttribute("class", "date-container")
  const labelDateIn = document.createElement("label");
  labelDateIn.textContent = "Fecha de " + data.entries + " Ingreso:";
  labelDateIn.setAttribute("class", "label");
  labelDateIn.setAttribute("for",`dateIn${data.entries}`)
  const dateIn = document.createElement("input");
  dateIn.setAttribute("type", "date");
  dateIn.setAttribute("id", `dateIn${data.entries}`); // Asignando ID unico
  const errDateIn = document.createElement("p");
  errDateIn.setAttribute("id",`dinamicErrorIn${data.entries}`)
  //Elemento transito egreso
  const dateContainerOut = document.createElement("div");
  dateContainerOut.setAttribute("class", "date-container")
  const labelDateOut = document.createElement("label");
  labelDateOut.textContent = "Fecha de " + data.entries + " Salida:";
  labelDateOut.setAttribute("class", "label");
  labelDateOut.setAttribute("for",`dateOut${data.entries}`)
  const dateOut = document.createElement("input");
  dateOut.setAttribute("type", "date");
  dateOut.setAttribute("id", `dateOut${data.entries}`); // Asignando ID unico
  const errDateOut = document.createElement("p");
  errDateOut.setAttribute("id",`dinamicErrorOut${data.entries}`)

  //Agregar ambos al DOM

  transitContainer.appendChild(dateContainerIn);
  dateContainerIn.appendChild(labelDateIn);
  dateContainerIn.appendChild(dateIn);
  dateContainerIn.appendChild(errDateIn);
  
  
  transitContainer.appendChild(dateContainerOut);
  dateContainerOut.appendChild(labelDateOut);
  dateContainerOut.appendChild(dateOut);
  dateContainerOut.appendChild(errDateOut);

  //Agregar Dato
  const localData = [
    null,
    null
  ];
  data.transits.push(localData);

  //Errores dinamicos
  dateIn.addEventListener("change", (event) => {
    if(errHandler(event,errDateIn)) {
      data.transits[transit][0] = new Date(event.target.value);
     }else{
      data.transits[transit][0] = null;
     }
    console.log(transit);
    console.log(data.transits);
  })

  dateOut.addEventListener("change", (event) => {
    if(errHandler(event,errDateOut)) {
      data.transits[transit][1] = new Date(event.target.value);
     }else{
      data.transits[transit][1] = null;
     }
    console.log(transit);
    console.log(data.transits);
  })
};

//Funciones para contar los dias
const onCountDays = () => {
  //Limpiar mensajes anteriores
  messageDisplay.style.display = "none";
  errorContainer.innerHTML = "";
  message.textContent = "";
  //Variable contenedora de los dias
  let totalDays = 0;
  //Elemento que desplegará los mensajes necesarios para informar al usuario sobre el funcionamiento
  
  if(false){
  }else{
     //Iteracion sobre los transitos existentes
     
  console.log(Object.entries);
  for (let i = 1; i <= data.entries; i++) {
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
        displayErrorMsg(errorContainer,"Fechas inválidas en el transito " + i + " , debe ingresar una fecha valida");
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
        displayErrorMsg(errorContainer, "Error al seleccionar las fechas en el transito " + i + ", la diferencia es negativa");
        //Si la diferencia es positiva
      } else {
        //Calculamos a cuantos dias equivalen
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        // Usando Math.ceil para redondear hacia arriba en caso de dias parciales
        totalDays += Math.ceil(differenceInDays); 
      }
    //Si no existen
    } else {
      displayErrorMsg(errorContainer, "Faltan fechas en el transito " + i);
    }
  }
  //Mensaje final
  message.textContent = "Cantidad de dias dentro del pais: " + totalDays;
  }
  messageDisplay.style.display = "block";
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

/*-----------------------------------------------------------
Event Listeners
-----------------------------------------------------------*/

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

//Errores dinamicos
dateIn1.addEventListener("change", (event) => {
  if(errHandler(event,dinamicErrorIn)) {
    data.transits[1][0] = new Date(event.target.value);
   }else{
    data.transits[1][0] = null;
   }
  console.log(data.transits);
})

dateOut1.addEventListener("change", (event) => {
  if(errHandler(event,dinamicErrorOut)) {
    data.transits[1][1] = new Date(event.target.value);
   }else{
    data.transits[1][1] = null;
   }
  console.log(data.transits);
})

console.log(data);