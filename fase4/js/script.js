function procesarRespuestas() {
    let total = 5;
    let puntos = 0;

    let myform = document.forms["formulario"];
    let respuestasCorrectas = ["b", "a", "c", "b", "c"];

    for (let i = 1; i <= total; i++) {
        if (myform["r" + i].value == null ||
            myform["r" + i].value == "") {
            alert("Favor responder todas las preguntas");
            return false;
        } else {
            if (myform["r" + i].value === respuestasCorrectas[i - 1])
                puntos++;
        }
    }
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "Obtuviste " + puntos + " puntos de " + total + " posibles";
    return false;
}