let disfraces = [
"images/bruja.jpeg",
"images/Centauro.jpeg",
"images/enchufe.jpeg",
"images/escoba.jpeg", 
"images/ketchup.jpeg",
"images/labellaylabestia.jpeg",
"images/momia.jpeg",
"images/vampiro.jpeg",
// Añadir mas segun sea necesario
];


function elegirDisfrazAleatorio() {
let randomIndex = Math.floor(Math.random() * disfraces.length);    // Seleccionar un numero aleatorio entre 0 y el numero de disfraces
let selectedDisfraz = disfraces[randomIndex];    // Encontrar el index de la imagen aleatoria
document.getElementById("disfraz").src = selectedDisfraz;   // Poner el src (source) de la imagen al index seleccionado aleatoriamente
}


function elegirDisfrazDesdeLista() {
    let selectedValue = document.getElementById("disfrazDropdown").value;
    document.getElementById("disfraz").src = selectedValue;
}


function populateDropdown() {  // Crear las opciones para el dropdown
    let dropdown = document.getElementById("disfrazDropdown");  // Buscar el dropdown por ID

    disfraces.forEach((disfraz, index) => {
        let option = document.createElement("option"); // Crear la opcion para el dropdown
        option.value = disfraz; // Poner el valor de la opcion como el valor del item del array
        option.text = "Disfraz " + (index + 1); // Mostrar "Disfraz 1", "Disfraz 2", etc.
        dropdown.add(option); // Finalmente añadir la opcion
    })
}

// Event listeners de los botones
document.getElementById("botonAleatorio").onclick = elegirDisfrazAleatorio;
document.getElementById("botonElegir").onclick = elegirDisfrazDesdeLista;

// Llamar a la funcion DUHH
populateDropdown();


