document.getElementById('calcular').addEventListener('click', function () {
    let n1 = document.getElementById('num1').value;
    let operacao = document.getElementById('operacao').value;
    let n2 = document.getElementById('num2').value;

    // Converter os valores para números
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    // Verificar se os valores são válidos
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('resultado').innerText = "Digite números válidos!";
        return;
    }

    // Calcular o resultado com base na operação escolhida
    let resultado;
    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n2 !== 0 ? n1 / n2 : "Erro (divisão por zero)";
            break;
        default:
            resultado = "Operação inválida!";
    }

    // Exibir o resultado na tela
    document.getElementById('resultado').innerText = `${resultado}`;
});
