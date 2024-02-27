console.log("JS CARGADO");
const dates = 0;
const addDate = () => {
    const aditionalDate = document.getElementById("aditional-date");
    const labelDateIn = document.createElement("p");
    const labelDateOut = document.createElement("p");
    
    const dateIn = document.createElement("input");
    dateIn.setAttribute("type", "date");
    const dateOut = document.createElement("input");
    dateOut.setAttribute("type", "date");
    labelDateIn.textContent("Fecha de ingreso:")
    
    aditionalDate.appendChild(labelDateIn);
    aditionalDate.appendChild(dateIn);
    aditionalDate.appendChild(dateOut);
    console.log("funcion ejecutada");
}

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

const onCountDays = () => {
    console.log("Contando días");
    const countwi = document.getElementById("within").checked;
    const date1node = document.getElementById("arriving-date").value;
    const date2node = document.getElementById("leaving-date").value;
    const message = document.getElementById("mensaje1");

    // Convertir las cadenas de fecha a objetos Date
    const date1 = new Date(date1node);
    const date2 = new Date(date2node);

    // Verificar que las fechas sean válidas
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        console.error("Al menos una de las fechas no es válida");
        return;
    }

    // Calcular la diferencia en milisegundos
    const differenceInMilliseconds = date2.getTime() - date1.getTime();

    if(differenceInMilliseconds<1){
        console.log("Error al seleccionar las fechas")
    }else{
        // Convertir la diferencia de milisegundos a días
        let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        // Mostrar la diferencia en días
        if(countwi){
            differenceInDays++;
        }
        message.textContent = "Diferencia en días:" + differenceInDays;
    }
}
