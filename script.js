// A função está agora fora do "DOMContentLoaded" para ser acessível globalmente
function generateNumber(){
    const inputs = document.querySelectorAll(".valuetion");

    if (inputs.length < 2) {
        alert("Não foi possível encontrar os campos de entrada.");
        return;
    }

    const minElement = inputs[0]; // Primeiro input
    const maxElement = inputs[1]; // Segundo input

    const min = parseInt(minElement.value);
    const max = parseInt(maxElement.value);

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
}

// Atribuindo a função ao evento de clique do botão, após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao").addEventListener("click", generateNumber);
});
