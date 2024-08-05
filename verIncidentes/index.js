const menu = document.getElementById("menu-incidentes");
const p = document.getElementById("info");

const onChange = () => {
  switch(menu.value){
    case "coincidencia":
      p.textContent = "Se utiliza para encuadrar incidentes generales y notificar de algun alerta.";
      break;
    case "documento-objetado":
      p.textContent = "Se ultiliza para encuadrar incidentes referidos a la documentacion del migrante durante el escaneo del mismo.";
      break;
    case "excepcion-biometrica":
      p.textContent = "Se utiliza para encuadrar errores durante la toma biometrica del migrante";
      break;
    case "documentacion-fraudulenta":
      p.textContent = "Se utiliza en situaciones de sospecha / identificacion de documentacion fraudulente o adulterada";
      break;
    case "incidencia-biometrica":
      p.textContent = "";
      break;
    default:
      p.textContent = "Elige una opción";
  }
}