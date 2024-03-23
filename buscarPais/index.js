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
      ["AFGANISTAN", "AFG", "V","V","V"],
      ["ALBANIA", "ALB", "V-AVE", "-", "-"],
      ["ALEMANIA (OCDE)", "DEU", "-", "-", "-"],
      ["ANDORRA", "AND", "-", "-", "-"],
      ["ANGOLA", "AGO", "V-AVE", "-", "-"],
      ["ANTIGUA Y BARBUDA", "ATG", "V-AVE", "-", "-"],
      ["ARABIA SAUDITA", "SAU", "V", "V", "V", ],
      ["ARGELIA", "DZA", "V", "-", "-"],
      ["ARMENIA", "ARM", "-", "-", "-"],
      ["AUSTRALIA (OCDE)", "AUS", "-", "V", "V"],
      ["AUSTRIA (OCDE)", "AUT",  "-", "-", "-"],
      ["AZERBAIJAN", "AZE", "V", "-", "-"],
      ["BAHAMAS", "BHS", "V-AVE", "-", "-"],
      ["BAHREIN", "BHR", "V-AVE", "V", "V"],
      ["BANGLADESH", "BGD", "V", "-", "-"],
      ["BARBADOS", "BRB", "-", "-", "-"],
      ["BELARUS (BIELORRUSIA)", "BLR", "-/V", "-", "-"],
      ["BELARUS (BIELORRUSIA)", "BLR", "90 DIAS", "EN", "1 AÑO"],
      ["BELGICA (OCDE)", "BEL", "-", "-", "-"],
      ["BELICE", "BLZ", "V-AVE", "-", "-"],
      ["BENIN", "BEN", "V-AVE", "V", "V"],
        ["BHUTAN (BUTÁN)", "BTN", "V-AVE", "V", "V"],
        ["BOLIVIA", "BOL", "-", "-", "-"],
        ["BOSNIA Y HERZEGOVINA", "BIH", "-", "V", "V"],
        ["BOTSWANA", "BWA", "V-AVE", "-", "-"],
        ["BRASIL", "BRA", "-", "-", "-"],
        ["BRUNEI DARUSSALAM", "BRN", "V-AVE", "V", "V"],
        ["BULGARIA", "BGR", "-", "-", "-"],
        ["BULGARIA","90","EN","180","DIAS"],
        ["BURKINA FASO (ex ALTO VOLTA)", "BFA", "V-AVE", "V", "V"],
        ["BURUNDI", "BDI", "V-AVE", "V", "V"],
        ["CABO VERDE", "CPV", "V-AVE", "-", "-"],
        ["CAMBOYA (KAMPUCHEA)", "KHM", "V-AVE", "V", "V"],
        ["CAMERUN", "CMR", "V-AVE", "V", "V"],
        ["CANADA (OCDE)", "CAN", "-", "V", "V"],
        ["COLOMBIA", "COL", "-", "-", "-"],
        ["COMORES, ISLAS", "COM", "V", "V", "V"],
        ["CONGO, REP. DEMOC. del (ex Zaire)", "COD", "V-AVE", "V", "V"],
        ["CONGO, REP. POPULAR. del", "COG", "V-AVE", "V", "V"],
        ["COREA, REP. de (OCDE)", "KOR", "-", "-", "-"],
        ["COREA, REP. DEMOC. Y POP. de", "PRK", "V", "V", "V"],
        ["COSTA DE MARFIL (CÔTE D'IVOIRE)", "CIV", "V-AVE", "V", "V"],
        ["COSTA RICA", "CRI", "-", "-", "-"],
        ["CROACIA", "HRV", "-", "-", "-"],
      // Continuar con los demás países...
      ["CUBA", "CUB", "V-AVE", "-", "-", "-"],
  ["CHAD", "TCD", "V", "V", "V"],
  ["CHILE (OCDE)", "CHL", "-", "-", "-",],
  ["CHINA, REP. POPULAR", "CHN", "V-AVE","-","-"],
  ["CHIPRE", "CYP", "-", "-", "-"],
  ["DINAMARCA (OCDE)", "DNK", "-", "-", "-"],
  ["DJIBOUTI", "DJI", "V-AVE", "V", "V"],
  ["DOMINICA", "DMA", "-", "-", "-"],
  ["ECUADOR", "ECU", "-", "-", "-"],
  ["EGIPTO", "EGY", "V", "-", "-"],
  ["EGIPTO", "15", "DIAS", "RTU", ""],
  ["EL SALVADOR", "SLV", "-", "-", "-"],
  ["EMIRATOS ARABES UNIDOS", "ARE", "-", "-", "-"],
  ["ERITREA", "ERI", "V-AVE", "V", "V"],
  ["ESLOVENIA (OCDE)", "SVN", "-", "-", "-"],
  ["ESPAÑA (OCDE)", "ESP", "-", "-", "-"],
  ["ESTADOS UNIDOS DE AMERICA(OCDE)", "USA", "-", "V", "V"],
  ["ESTONIA (OCDE)", "EST", "-", "-", "-"],
  ["ESWATINI", " ", "V-AVE", "V", "V"],
  ["ETIOPIA", "ETH", "V-AVE", "V", "V"],
  ["FEDERACION RUSA", "RUS", "-", "-", "-"],
  ["FEDERACION RUSA", "90", "EN", "180", "DIAS"],
  ["FIJI", "FJI", "-", "-", "-"],
  ["FILIPINAS", "PHL", "V-AVE", "-", "-"],
  ["FILIPINAS","60","DIAS","RTU",""],
  ["FINLANDIA (OCDE)", "FIN", "-", "-", "-"],
      // Continuar con los demás países...
      ["FRANCIA (OCDE)", "FRA", "-", "-", "-"],
  ["GABON", "GAB", "V-AVE", "V", "V"],
  ["GAMBIA", "GMB", "V-AVE", "V", "V"],
  ["GEORGIA", "GEO", "-", "-", "-"],
  ["GEORGIA", "90", "EN", "180","DIAS"],
  ["GHANA", "GHA", "V-AVE", "V", "V"],
  ["GRANADA (GRENADA)", "GRD", "-", "-", "-"],
  ["GRECIA (OCDE)", "GRC", "-", "-", "-"],
  ["GUATEMALA", "GTM", "-", "-", "-"],
  ["GUINEA", "GIN", "V-AVE", "V", "V"],
  ["GUINEA-BISSAU", "GNB", "V-AVE", "V", "V"],
  ["GUINEA ECUATORIAL", "GNQ", "V-AVE", "V", "V"],
  ["GUYANA", "GUY", "-", "-", "-"],
  ["HAITI", "HTI", "V", "-", "-"],
  ["HONDURAS", "HND", "-", "-", "-"],
  ["HONG KONG con Pte. Británico B.N.O.", "GBN", "-", "-", "-"],
  ["HONG KONG con nuevo Pte. S.A.R.", "HKG", "-", "-", "-"],
  ["HUNGRIA (OCDE)", "HUN", "-", "-", "-"],
  ["INDIA", "IND", "V-AVE", "-", "-"],
  ["INDONESIA", "IDN", "V-AVE", "-", "-"],
  ["INDONESIA", "30", "DIAS", "RTU", ""],
  ["INTERPOL", "XPO", "V", "-", "-"],
  ["IRAK", "IRQ", "V", "V", "V"],
  ["IRAN", "IRN", "V", "V", "V"],
      //
      ["IRLANDA (OCDE)", "IRL", "-", "V", "V"],
  ["ISLANDIA (OCDE)", "ISL", "-", "-", "-"],
  ["ISRAEL (OCDE)", "ISR", "-", "-", "-"],
  ["ITALIA (OCDE)", "ITA", "-", "-", "-"],
  ["JAMAICA", "JAM", "-", "-", "-"],
  ["JAPON (OCDE)", "JPN", "-", "-", "-"],
  ["JORDANIA", "JOR", "V", "V", "V"],
  ["KAZAJSTAN", "KAZ", "-/V", "-", "-"],
  ["KAZAJSTAN", "HASTA 90", "DIAS", "DIPLOMATICO", ""],
  ["KAZAJSTAN", "30 DIAS", "INTERRUMPIBLES", "EN 1", "AÑO"],
  ["KENYA", "KEN", "V-AVE", "V", "V"],
  ["KIRGUISTAN", "KGZ", "V", "V", "V"],
  ["KIRIBATI", "KIR", "V-AVE", "V", "V"],
  ["KOSOVO", "XKK", "C/V", "x", "x"],
  ["KUWAIT", "KWT", "V", "V", "V"],
  ["LAOS (LAO)", "LAO", "V-AVE", "V", "V"],
  ["LESOTHO", "LSO", "V-AVE", "V", "V"],
  ["LETONIA (LATVIA) (OCDE)", "LVA", "-", "-", "-"],
  ["LIBANO", "LBN", "V", "V", "V"],
  ["LIBERIA", "LBR", "V", "V", "V"],
  ["LIBIA", "LBY", "V", "V", "V"],
  ["LIECHTENSTEIN", "LIE", "-", "-", "-"],
  ["LITUANIA", "LTU", "-", "-", "-"],
  ["LUXEMBURGO (OCDE)", "LUX", "-", "-", "-"],
      // Puedes continuar con el resto de la lista... 
      ["MACAO", "MAC", "-", "X","X"],
      ["MACEDONIA, ex Rep. Yugoslava de", "MKD", "-", "-","-"],
      ["MACEDONIA, ex Rep. Yugoslava de", "90", "EN", "180","DIAS"],
  ["MADAGASCAR", "MDG", "V-AVE", "V", "V"],
  ["MALASIA", "MYS", "-","-","-"],
  ["MALASIA", "MYS", "30","DIAS","RTU"],
  ["MALAWI", "MWI", "V-AVE", "V", "V"],
  ["MALDIVAS", "MDV", "V-AVE", "V", "V"],
  ["MALI", "MLI", "V", "V", "V"],
  ["MALTA, REPÚBLICA DE", "MLT", "-","-","-"],
  ["MALTA, Soberana Orden Militar de (Dto. N° 285/98)", "XOM", "x","-","-"],
  ["MARSHALL, ISLAS", "MHL", "V-AVE", "V", "V"],
  ["MARRUECOS", "MAR", "V","-","-"],
  ["MAURICIO", "MUS", "V-AVE", "V", "V"],
  ["MAURITANIA", "MRT", "V", "V", "V"],
  ["MEXICO (OCDE)", "MEX", "-","-","-"],
  ["MICRONESIA, Estados Federados de", "FSM", "V", "V", "V"],
  ["MOLDOVA", "MDA", "V-AVE", "V", "V"],
  ["MONACO", "MCO", "-","-","-"],
  ["MONGOLIA", "MNG", "-", "-", "-"],
  ["MONTENEGRO", "MNE", "-","-", "-"],
  ["MOZAMBIQUE", "MOZ", "V-AVE","-","-"],
  ["MYANMAR (ex BIRMANIA)", "MMR", "V-AVE", "V", "V"],
  ["NAMIBIA", "NAM", "V-AVE", "V", "V"],
      // Puedes continuar con el resto de la lista...
      ["NAURU", "NRU", "YAREN", "V-AVE", "V", "V"],
  ["NEPAL", "NPL", "KATMANDÚ", "V-AVE", "V", "V"],
  ["NICARAGUA", "NIC",  "-", "-", "-"],
  ["NIGER", "NER",  "V-AVE", "V", "V"],
  ["NIGERIA", "NGA", "V", "V", "V"],
  ["NORUEGA (OCDE)", "NOR",  "-", "-", "-"],
  ["NUEVA ZELANDIA (OCDE)", "NZL", "-", "-", "-"],
  ["OMAN", "OMN", "MASCATE", "V-AVE", "V", "V"],
  ["PAISES BAJOS (OCDE)", "NLD", "-", "-", "-"],
  ["PAKISTAN", "PAK", "V", "-", "-"],
  ["PALAU", "PLW", "V-AVE", "V", "V"],
  ["PALESTINA", "PSE", "V", "V", "V"],
  ["PANAMA", "PAN", "-", "-", "-"],
  ["PAPUA NUEVA GUINEA", "PNG", "V-AVE", "V", "V"],
  ["PARAGUAY", "PRY", "ASUNCIÓN", "-", "-", "-"],
  ["PERU", "PER", "LIMA", "-", "-", "-"],
  ["POLONIA (OCDE)", "POL", "VARSOVIA", "-", "-", "-"],
  ["PORTUGAL (OCDE)", "PRT", "LISBOA", "-", "-", "-"],
  ["PUERTO RICO", "PRI", "SAN JUAN", "-", "V", "V"],
  ["QATAR", "QAT", "DOHA", "-", "-", "-"],
  ["REINO UNIDO de GRAN BRETAÑA e IRLANDA DEL NORTE (OCDE)", "GBR", "LONDRES", "-", "-", "-"],
      // Puedes continuar con el resto de la lista...
      ["REPUBLICA ÁRABE SAHARAUI DEMOCRÁTICA (ex SAHARA OCCIDENTAL)", "ESH", "C/V","x","x"],
  ["REPUBLICA CENTRO AFRICANA", "CAF", "V-AVE", "V", "V"],
  ["REPUBLICA CHECA (OCDE)", "CZE", "-","-","-"],
  ["REPUBLICA DOMINICANA", "DOM", "V-AVE", "-","-"],
  ["REPUBLICA ESLOVACA (OCDE)", "SVK", "-","-","-"],
  ["REPUBLICA MOLDAVA NISTRINA", "x"],
  ["RUMANIA", "ROU", "-","-","-"],
  ["RUMANIA","90","EN","180","DIAS"],
  ["RWANDA / RUANDA", "RWA", "V-AVE", "V", "V"],
  ["SALOMON, ISLAS", "SLB", "V-AVE", "V", "V"],
  ["SAMOA OCCIDENTAL", "WSM", "V-AVE", "V", "V"],
  ["SAN CRISTOBAL Y NEVIS", "KNA", "-","-","-"],
  ["SAN MARINO", "SMR", "-","-","-"],
  ["SANTA LUCIA", "LCA", "-","-","-"],
  ["SANTA SEDE (ver VATICANO)", "VAT","x", "-","-"],
  ["SANTO TOME Y PRÍNCIPE", "STP", "V-AVE", "V", "V"],
  ["SAN VICENTE Y LAS GRANADINAS", "VCT", "-","-","-"],
  ["SENEGAL", "SEN", "V-AVE", "V", "V"],
  ["SERBIA", "SRB", "-","-","-"],
  ["SEYCHELLES", "SYC", "V-AVE", "V", "V"],
  ["SIERRA LEONA", "SLE", "V-AVE", "V", "V"],
  ["SINGAPUR", "SGP", "-","-","-"],
      // Puedes continuar con el resto de la lista...
      ["SIRIA", "SYR", "V","V","V"],
  ["SOMALIA", "SOM", "V", "V", "V"],
  ["SRI LANKA", "LKA", "V","V","V"],
  ["SUDAFRICA, REP. de", "ZAF", "-"],
  ["SUDAN, REPÚBLICA DEL", "SDN", "V", "V", "V"],
  ["SUDAN DEL SUR (Dto. Nº 1.072/11)", "SSD", "V", "V", "V"],
  ["SUECIA (OCDE)", "SWE", "-","-","-"],
  ["SUIZA (OCDE)", "CHE", "-","-","-"],
  ["SURINAME", "SUR", "-","-","-"],
  ["SWAZILANDIA (VER ESWATINI) ", "SWZ", "V-AVE", "V", "V"],
  ["TAILANDIA", "THA", "-","-","-"],
  ["TAIWAN", "TWN", "C/V - AVE","x","x"],
  ["TANZANIA", "TZA", "V-AVE", "V", "V"],
  ["TAYIKISTAN", "TJK", "V", "V", "V"],
  ["TIMOR-LESTE (ex Timor Oriental)", "TLS", "V", "V", "V"],
  ["TOGO", "TGO", "V-AVE", "V", "V"],
  ["TONGA", "TON", "V-AVE", "V", "V"],
  ["TRINIDAD Y TOBAGO", "TTO", "-","-","-"],
  ["TUNEZ", "TUN", "V", "-","-"],
  ["TURKMENISTAN", "TKM", "V", "V", "V"],
  ["TURQUIA (OCDE)", "TUR", "-","-","-"],
  ["TUVALU", "TUV", "V-AVE", "V", "V"],
      // Puedes continuar con el resto de la lista...
      ["UCRANIA", "UKR", "-","-","-"],
      ["UCRANIA", "90", "EN","1","AÑO"],
  ["UGANDA", "UGA", "V-AVE", "V", "V"],
  ["URUGUAY", "URY", "-","-","-"],
  ["UZBEKISTAN", "UZB", "V", "V", "V"],
  ["VANUATU", "VUT", "V-AVE", "V", "V"],
  ["VATICANO (ver SANTA SEDE)", "VAT", "-","x","x"],
  ["VENEZUELA", "VEN", "-","-","-"],
  ["VIETNAM", "VNM", "V-AVE", "-","-"],
  ["YEMEN", "YEM", "V", "V", "V"],
  ["ZAMBIA", "ZMB", "V-AVE", "V", "V"],
  ["ZIMBABWE", "ZWE", "V-AVE", "V", "V"],
    ];
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
      const headers = ["Pais", "Cod", "TA", "DIP", "OF"];
      headers.forEach((headerText) => {
        const headerCell = document.createElement("th");
        cabecera.appendChild(headerCell);
        headerCell.textContent = headerText;
      });

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
    };

    const toggleElement = (element, isHidden) => {
      // Alternar entre ocultar y mostrar el elemento
      element.hidden = isHidden;
    };
