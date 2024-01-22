let valorPantalla = "";

function actualizarPantalla() {

    document.getElementById("pantalla").value = valorPantalla;

}

function agregarCaracter(char){

    valorPantalla += char; /*Sirve para poder concatenar los caracteres*/
    actualizarPantalla();
    
}

function limpiarpantalla(){

valorPantalla = "";
actualizarPantalla();

}

function calcular(){

try {
    valorPantalla = eval(valorPantalla).toString();
    actualizarPantalla();

} catch (e) {
    valorPantalla = "Error"
}

}
