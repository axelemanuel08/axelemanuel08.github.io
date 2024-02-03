    // Declarar las variables en el ámbito global
    const input = document.getElementById("searchInput");
    const tabla = document.getElementById("resultTable");
    const referenceLink = document.getElementById("reference-link");
    referenceLink.hidden = true;

    // Declarar dataObject como un array de arrays
    const listaDePaises = [
      ["AFGANISTAN", "AFG", "V","V","V"],
      ["ALBANIA", "ALB", "V", "-", "-"],
      ["ALEMANIA (OCDE)", "BERLÍN", "-", "-", "-"],
      ["ANDORRA", "AND", "-", "-", "-"],
      ["ANGOLA", "AGO", "V", "-", "-"],
      ["ANTIGUA Y BARBUDA", "ATG", "V", "V", "V"],
      ["ARABIA SAUDITA", "SAU", "V", "V", "V", ],
      ["ARGELIA", "DZA", "V", "-", "-"],
      ["ARMENIA", "ARM", "-", "-", "-"],
      ["AUSTRALIA (OCDE)", "AUS", "-", "V", "V"],
      ["AUSTRIA (OCDE)", "AUT",  "-", "-", "-"],
      ["AZERBAIJAN", "AZE", "V", "-", "-"],
      ["BAHAMAS", "BHS", "V", "V", "V"],
      ["BAHREIN", "BHR", "V", "V", "V"],
      ["BANGLADESH", "BGD", "V", "V", "V"],
      ["BARBADOS", "BRB", "-", "-", "-"],
      ["BELARUS (BIELORRUSIA)", "BLR", "V", "-", "-"],
      ["BELGICA (OCDE)", "BEL", "-", "-", "-"],
      ["BELICE", "BLZ", "V", "-", "-"],
      ["BENIN", "BEN", "V", "V", "V"],
        ["BHUTAN (BUTÁN)", "BTN", "V", "V", "V"],
        ["BOLIVIA", "BOL", "-", "-", "-"],
        ["BOSNIA Y HERZEGOVINA", "BIH", "V", "V", "V"],
        ["BOTSWANA", "BWA", "V", "V", "V"],
        ["BRASIL", "BRA", "-", "-", "-"],
        ["BRUNEI DARUSSALAM", "BRN", "V", "V", "V"],
        ["BULGARIA", "BGR", "-", "-", "-"],
        ["BULGARIA","90","EN","180","DIAS"],
        ["BURKINA FASO (ex ALTO VOLTA)", "BFA", "V", "V", "V"],
        ["BURUNDI", "BDI", "V", "V", "V"],
        ["CABO VERDE", "CPV", "V", "V", "V"],
        ["CAMBOYA (KAMPUCHEA)", "KHM", "V", "V", "V"],
        ["CAMERUN", "CMR", "V", "V", "V"],
        ["CANADA (OCDE)", "CAN", "-", "V", "V"],
        ["COLOMBIA", "COL", "-", "-", "-"],
        ["COMORES, ISLAS", "COM", "V", "V", "V"],
        ["CONGO, REP. DEMOC. del (ex Zaire)", "COD", "V", "V", "V"],
        ["CONGO, REP. POPULAR. del", "COG", "V", "V", "V"],
        ["COREA, REP. de (OCDE)", "KOR", "-", "-", "-"],
        ["COREA, REP. DEMOC. Y POP. de", "PRK", "V", "V", "V"],
        ["COSTA DE MARFIL (CÔTE D'IVOIRE)", "CIV", "V", "V", "V"],
        ["COSTA RICA", "CRI", "-", "-", "-"],
        ["CROACIA", "HRV", "-", "-", "-"],
      // Continuar con los demás países...
      ["CUBA", "CUB", "V", "-", "-", "-"],
  ["CHAD", "TCD", "V", "V", "V"],
  ["CHILE (OCDE)", "CHL", "-", "-", "-",],
  ["CHINA, REP. POPULAR", "CHN", "V-AVE","-","-"],
  ["CHIPRE", "CYP", "-", "V", "V"],
  ["DINAMARCA (OCDE)", "DNK", "-", "-", "-"],
  ["DJIBOUTI", "DJI", "V", "V", "V"],
  ["DOMINICA", "DMA", "V", "V", "V"],
  ["ECUADOR", "ECU", "-", "-", "-"],
  ["EGIPTO", "EGY", "V", "-", "-"],
  ["EGIPTO", "15", "DIAS", "RTU", ""],
  ["EL SALVADOR", "SLV", "-", "-", "-"],
  ["EMIRATOS ARABES UNIDOS", "ARE", "V", "V", "V"],
  ["ERITREA", "ERI", "V", "V", "V"],
  ["ESLOVENIA (OCDE)", "SVN", "-", "-", "-"],
  ["ESPAÑA (OCDE)", "ESP", "-", "-", "-"],
  ["ESTADOS UNIDOS DE AMERICA(OCDE)", "USA", "-", "V", "V"],
  ["ESTONIA (OCDE)", "EST", "-", "-", "-"],
  ["ETIOPIA", "ETH", "V", "V", "V"],
  ["FEDERACION RUSA", "RUS", "-", "-", "-"],
  ["FEDERACION RUSA", "90", "EN", "180", "DIAS"],
  ["FIJI", "FJI", "V", "V", "V"],
  ["FILIPINAS", "PHL", "V", "-", "-"],
  ["FILIPINAS","60","DIAS","RTU",""],
  ["FINLANDIA (OCDE)", "FIN", "-", "-", "-"],
      // Continuar con los demás países...
      ["FRANCIA (OCDE)", "FRA", "-", "-", "-"],
  ["GABON", "GAB", "V", "V", "V"],
  ["GAMBIA", "GMB", "V", "V", "V"],
  ["GEORGIA", "GEO", "-", "-", "-"],
  ["GEORGIA", "90", "EN", "180","DIAS"],
  ["GHANA", "GHA", "V", "V", "V"],
  ["GRANADA (GRENADA)", "GRD", "-", "-", "-"],
  ["GRECIA (OCDE)", "GRC", "-", "-", "-"],
  ["GUATEMALA", "GTM", "-", "-", "-"],
  ["GUINEA", "GIN", "V", "V", "V"],
  ["GUINEA-BISSAU", "GNB", "V", "V", "V"],
  ["GUINEA ECUATORIAL", "GNQ", "V", "V", "V"],
  ["GUYANA", "GUY", "-", "-", "-"],
  ["HAITI", "HTI", "-", "-", "-"],
  ["HONDURAS", "HND", "-", "-", "-"],
  ["HONG KONG con Pte. Británico B.N.O.", "GBN", "-", "-", "-"],
  ["HONG KONG con nuevo Pte. S.A.R.", "HKG", "-", "-", "-"],
  ["HUNGRIA (OCDE)", "HUN", "-", "-", "-"],
  ["INDIA", "IND", "V", "-", "-"],
  ["INDONESIA", "IDN", "V", "-", "-"],
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
  ["KAZAJSTAN", "KAZ", "-", "V", "-"],
  ["KAZAJSTAN", "90", "DIAS", "RTU", ""],
  ["KAZAJSTAN", "30", "EN", "1", "AÑO"],
  ["KENYA", "KEN", "V", "V", "V"],
  ["KIRGUISTAN", "KGZ", "V", "V", "V"],
  ["KIRIBATI", "KIR", "V", "V", "V"],
  ["KOSOVO", "XKK", "C/V", "x", "x"],
  ["KUWAIT", "KWT", "V", "V", "V"],
  ["LAOS (LAO)", "LAO", "V", "V", "V"],
  ["LESOTHO", "LSO", "V", "V", "V"],
  ["LETONIA (LATVIA) (OCDE)", "LVA", "-", "-", "-"],
  ["LIBANO", "LBN", "V", "V", "V"],
  ["LIBERIA", "LBR", "V", "V", "V"],
  ["LIBIA", "LBY", "V", "V", "V"],
  ["LIECHTENSTEIN", "LIE", "-", "-", "-"],
  ["LITUANIA", "LTU", "-", "-", "-"],
  ["LUXEMBURGO (OCDE)", "LUX", "-", "-", "-"],
      // Puedes continuar con el resto de la lista... 
      ["MACAO", "MAC", "V", "x","x"],
      ["MACEDONIA, ex Rep. Yugoslava de", "MKD", "-", "-","-"],
      ["MACEDONIA, ex Rep. Yugoslava de", "90", "EN", "180","DIAS"],
  ["MADAGASCAR", "MDG", "V", "V", "V"],
  ["MALASIA", "MYS", "-","-","-"],
  ["MALAWI", "MWI", "V", "V", "V"],
  ["MALDIVAS", "MDV", "V", "V", "V"],
  ["MALI", "MLI", "V", "V", "V"],
  ["MALTA, REPÚBLICA DE", "MLT", "-","-","-"],
  ["MALTA, Soberana Orden Militar de (Dto. N° 285/98)", "XOM", "x","-","-"],
  ["MARSHALL, ISLAS", "MHL", "V", "V", "V"],
  ["MARRUECOS", "MAR", "V","-","-"],
  ["MAURICIO", "MUS", "V", "V", "V"],
  ["MAURITANIA", "MRT", "V", "V", "V"],
  ["MEXICO (OCDE)", "MEX", "-","-","-"],
  ["MICRONESIA, Estados Federados de", "FSM", "V", "V", "V"],
  ["MOLDOVA", "MDA", "V", "V", "V"],
  ["MONACO", "MCO", "-","-","-"],
  ["MONGOLIA", "MNG", "V", "V", "V"],
  ["MONTENEGRO", "MNE", "-","V", "V"],
  ["MOZAMBIQUE", "MOZ", "V","-","-"],
  ["MYANMAR (ex BIRMANIA)", "MMR", "V", "V", "V"],
  ["NAMIBIA", "NAM", "V", "V", "V"],
      // Puedes continuar con el resto de la lista...
      ["NAURU", "NRU", "YAREN", "V", "V", "V"],
  ["NEPAL", "NPL", "KATMANDÚ", "V", "V", "V"],
  ["NICARAGUA", "NIC", "MANAGUA", "-", "-", "-"],
  ["NIGER", "NER", "NIAMEY", "V", "V", "V"],
  ["NIGERIA", "NGA", "ABUJA", "V", "V", "V"],
  ["NORUEGA (OCDE)", "NOR", "OSLO", "-", "-", "-"],
  ["NUEVA ZELANDIA (OCDE)", "NZL", "WELLINGTON", "-", "-", "-"],
  ["OMAN", "OMN", "MASCATE", "V", "V", "V"],
  ["PAISES BAJOS (OCDE)", "NLD", "AMSTERDAM", "-", "-", "-"],
  ["PAKISTAN", "PAK", "ISLAMABAD", "V", "-", "-"],
  ["PALAU", "PLW", "KOROR", "V", "V", "V"],
  ["PALESTINA", "PSE", "V", "V", "V"],
  ["PANAMA", "PAN", "CIUDAD DE PANAMÁ", "-", "-", "-"],
  ["PAPUA NUEVA GUINEA", "PNG", "PORT MORESBY", "V", "V", "V"],
  ["PARAGUAY", "PRY", "ASUNCIÓN", "-", "-", "-"],
  ["PERU", "PER", "LIMA", "-", "-", "-"],
  ["POLONIA (OCDE)", "POL", "VARSOVIA", "-", "-", "-"],
  ["PORTUGAL (OCDE)", "PRT", "LISBOA", "-", "-", "-"],
  ["PUERTO RICO", "PRI", "SAN JUAN", "-", "V", "V"],
  ["QATAR", "QAT", "DOHA", "V", "V", "V"],
  ["REINO UNIDO de GRAN BRETAÑA e IRLANDA DEL NORTE (OCDE)", "GBR", "LONDRES", "-", "-", "-"],
      // Puedes continuar con el resto de la lista...
      ["REPUBLICA ÁRABE SAHARAUI DEMOCRÁTICA (ex SAHARA OCCIDENTAL)", "ESH", "C/V","x","x"],
  ["REPUBLICA CENTRO AFRICANA", "CAF", "V", "V", "V"],
  ["REPUBLICA CHECA (OCDE)", "CZE", "-","-","-"],
  ["REPUBLICA DOMINICANA", "DOM", "V", "-","-"],
  ["REPUBLICA ESLOVACA (OCDE)", "SVK", "-","-","-"],
  ["REPUBLICA MOLDAVA NISTRINA", "x"],
  ["RUMANIA", "ROU", "-","-","-"],
  ["RUMANIA","90","EN","180","DIAS"],
  ["RWANDA / RUANDA", "RWA", "V", "V", "V"],
  ["SALOMON, ISLAS", "SLB", "V", "V", "V"],
  ["SAMOA OCCIDENTAL", "WSM", "V", "V", "V"],
  ["SAN CRISTOBAL Y NEVIS", "KNA", "-","-","-"],
  ["SAN MARINO", "SMR", "-","-","-"],
  ["SANTA LUCIA", "LCA", "-","-","-"],
  ["SANTA SEDE (ver VATICANO)", "VAT","x", "-","-"],
  ["SANTO TOME Y PRÍNCIPE", "STP", "V", "V", "V"],
  ["SAN VICENTE Y LAS GRANADINAS", "VCT", "-","-","-"],
  ["SENEGAL", "SEN", "V", "V", "V"],
  ["SERBIA", "SRB", "-","-","-"],
  ["SEYCHELLES", "SYC", "V", "V", "V"],
  ["SIERRA LEONA", "SLE", "V", "V", "V"],
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
  ["SWAZILANDIA", "SWZ", "V", "V", "V"],
  ["TAILANDIA", "THA", "-","-","-"],
  ["TAIWAN", "TWN", "C/V","x","x"],
  ["TANZANIA", "TZA", "V", "V", "V"],
  ["TAYIKISTAN", "TJK", "V", "V", "V"],
  ["TIMOR-LESTE (ex Timor Oriental)", "TLS", "V", "V", "V"],
  ["TOGO", "TGO", "V", "V", "V"],
  ["TONGA", "TON", "V", "V", "V"],
  ["TRINIDAD Y TOBAGO", "TTO", "-","-","-"],
  ["TUNEZ", "TUN", "V", "-","-"],
  ["TURKMENISTAN", "TKM", "V", "V", "V"],
  ["TURQUIA (OCDE)", "TUR", "-","-","-"],
  ["TUVALU", "TUV", "V", "V", "V"],
      // Puedes continuar con el resto de la lista...
      ["UCRANIA", "UKR", "-","-","-"],
      ["UCRANIA", "90", "EN","1","AÑO"],
  ["UGANDA", "UGA", "V", "V", "V"],
  ["URUGUAY", "URY", "-","-","-"],
  ["UZBEKISTAN", "UZB", "V", "V", "V"],
  ["VANUATU", "VUT", "V", "V", "V"],
  ["VATICANO (ver SANTA SEDE)", "VAT", "-","x","x"],
  ["VENEZUELA", "VEN", "-","-","-"],
  ["VIETNAM", "VNM", "V", "-","-"],
  ["YEMEN", "YEM", "V", "V", "V"],
  ["ZAMBIA", "ZMB", "V", "V", "V"],
  ["ZIMBABWE", "ZWE", "V", "V", "V"],
    ];
    
    console.log(listaDePaises.length);
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
        item.forEach((value, index) => {
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
