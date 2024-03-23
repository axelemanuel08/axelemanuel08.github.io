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
   
   // Declarar las variables en el ámbito global
    const input = document.getElementById("searchInput");
    const tabla = document.getElementById("resultTable");
    const referenceLink = document.getElementById("reference-link");
    referenceLink.hidden = true;

    // Declarar dataObject como un array de arrays
    const listaDePaises = [
        ["BRASIL", "BRA", "NO" ,"ARE 180","ARE 180","AR"],
        ["PARAGUAY", "PRY", "NO" ,"ARE 180","ARE 180","AR"],
        ["URUGUAY", "URY", "NO" ,"ARE 180","ARE 180","AR"],
        ["BOLIVIA", "BOL", "NO" ,"ARE 180","ARE 180","AR"],
        ["PERU", "PER", "NO" ,"ARE 180","ARE 180","AR"],
        ["VENEZUELA", "VEN", "NO" ,"ARE 180","ARE 180","AR"],
        ["CHILE", "CHL", "SI" ,"RTU 90","RTU 90","AR"],
        ["COLOMBIA", "COL", "SI" ,"RTU 90","RTU 90","AR"],
        ["ECUADOR", "ECU", "SI" ,"RTU 90","RTU 90","AR"],
        ["ESPAÑA", "ESP", "SI" ,"-","RTU 90","-"],
        ["ITALIA", "ITA", "SI" ,"-","RTU 90","-"],
        ["NORUEGA", "NOR", "SI" ,"-","RTU 90","-"],
        ["SUECIA", "SWE", "SI" ,"-","RTU 90","-"],
        ["PANAMA", "PAN", "SI" ,"-","RTU 90","-"],
        ["EL SALVADOR", "SLV", "SI" ,"-","RTU 90","-"],
        ["HONDURAS", "HND", "SI" ,"-","RTU 90","-"],
        ["NICARAGUA", "NIC", "SI" ,"-","RTU 90","-"],
        ["ESTADOS UNIDOS", "USA", "SI" ,"-","RTU 90","-"],
        ["FRANCIA", "FRA", "NO" ,"-","ARE 180","-"],
        ["MEXICO", "MEX", "NO" ,"-","ARE 180","-"],
        ["CANADA", "CAN", "NO" ,"-","ARE 180","-"],
        ["SUIZA", "CHE", "NO" ,"-","ARE 180","-"],
        ["RUSIA", "RUS", "NO" ,"-","ARE 180","-"],
        ["DINAMARCA", "DNK", "NO" ,"-","ARE 180","-"],
        ["OTROS", "-", "NO" ,"-","ARE 180","-"],
    ];
    
    //Funcion Buscadora
    const onChangeValue = () => {
      const search = input.value.trim().toLowerCase();

      // Verificar si la longitud del campo de búsqueda es mayor que 3
    if (search.length > 2) {
      // Realizar la búsqueda solo si hay más de tres caracteres
      value(search, listaDePaises);
      toggleElement(tabla, false);
      toggleElement(referenceLink, false);
    } else {
      // Ocultar la tabla si la longitud del campo de búsqueda es 3 o menos
      toggleElement(tabla, true);
      toggleElement(referenceLink, true);
    }
  };

    const value = (search, dataObject) => {
      // Limpiar la tabla antes de agregar nuevas filas
      tabla.textContent = "";

      // Filtrar los datos que coinciden con la búsqueda
      const matchingData = dataObject.filter((item) => {
        return item.some((itemValue) => String(itemValue).toLowerCase().includes(search));
      });

      // Agregar la cabecera al HTML antes de iterar sobre los datos coincidentes
      const cabecera = document.createElement("tr");
      tabla.appendChild(cabecera);

      // Crear celdas de encabezado con los textos "Pais", "TA", "Dip", "Of"
      const headers = ["Pais", "Cod", "Convenio?", "C.I.", "Pas", "Ced. Ext"];
      headers.forEach((headerText) => {
        const headerCell = document.createElement("th");
        cabecera.appendChild(headerCell);
        headerCell.textContent = headerText;
      });
      //Si no encontramos el pais, entonces no hay convenio
      if(matchingData==0){
        //Aplica el pais "Otros" el objeto debe ser un array de arrays
        renderData([["OTROS", "-", "NO" ,"-","ARE 180","-"]])
        return;
      }
      renderData(matchingData);
    };

    const renderData = (matchingData) => {
      // Iterar sobre los datos coincidentes y agregar filas a la tabla
      matchingData.forEach((item) => {
        const fila = document.createElement("tr");
        tabla.appendChild(fila);

        // Iterar sobre los elementos del array
        item.forEach((value) => {
          const columna = document.createElement("td");
          fila.appendChild(columna);
          const data = document.createElement("p");
          columna.appendChild(data);
          // Muestra el valor en la tabla
          data.textContent = value;
        });
      });

      // Verificar si no se encontraron coincidencias para ocultar la tabla
      if (tabla.children.length === 0) {
        toggleElement(tabla, true);
        toggleElement(referenceLink, true);
      }
    }

    const toggleElement = (element, isHidden) => {
      // Alternar entre ocultar y mostrar el elemento
      element.hidden = isHidden;
    };
