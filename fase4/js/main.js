const processResponses = () => {
    let total = 5, points = 0;

    let mainForm = document.forms["questionnaireForm"];
    let correctAnswers = ["a", "b", "b", "c", "a"];

    for (let i = 1; i <= total; i++) {
        if (mainForm["r" + i].value == null || mainForm["r" + i].value == '') {
            alert('Por favor. Responder todas las preguntas!');
            return false;
        } else {
            if(mainForm["r" + i].value === correctAnswers[i - 1]){
                points ++;
            }
        }  
    }

    let result = document.getElementById('result');
    result.innerHTML = `!Obtuviste ${points} puntos de ${total} posibles!`;
    return false; 
}