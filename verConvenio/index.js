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

const menu = document.getElementById("menu-convenios");
  menu.addEventListener("change", () => {
    const indiceSeleccionado = menu.selectedIndex;
    const valorSeleccionado = menu.value;
    console.log(indiceSeleccionado + valorSeleccionado);
  });
