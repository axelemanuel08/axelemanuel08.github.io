console.log("JS CARGADO");

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

        message.textContent = "La fecha de salida sería el: " + formattedDate;
    }
}

const onCountDays = () => {
    console.log("Contando días");
    const countwi = document.getElementById("within").checked;
    const date1 = document.getElementById("arriving-date").value;
    const date2 = document.getElementById("leaving-date").value;
    const message = document.getElementById("mensaje1");

    // Convertir las cadenas de fecha a objetos Date
    const date1Object = new Date(date1);
    const date2Object = new Date(date2);

    // Verificar que las fechas sean válidas
    if (isNaN(date1Object.getTime()) || isNaN(date2Object.getTime())) {
        console.error("Al menos una de las fechas no es válida");
        return;
    }

    // Calcular la diferencia en milisegundos
    const differenceInMilliseconds = date2Object.getTime() - date1Object.getTime();

    if(differenceInMilliseconds<1){
        console.log("Error al seleccionar las fechas")
    }else{
        // Convertir la diferencia de milisegundos a días
        let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        // Mostrar la diferencia en días
        if(countwi){
            differenceInDays++;
        }
        mensaje1.textContent = "Diferencia en días:" + differenceInDays;
    }
}