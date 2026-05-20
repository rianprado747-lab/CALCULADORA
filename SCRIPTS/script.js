function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    // A função insert(num) é usada para inserir um número ou operador na calculadora.
    // Ela pega o conteúdo atual do elemento com o id 'resultado' e adiciona o novo número ou operador a ele, atualizando o display da calculadora.
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
    // A função clean() é usada para limpar o conteúdo do elemento com o id 'resultado'.
    // Ela define o innerHTML desse elemento como uma string vazia, efetivamente removendo qualquer texto ou número que estava sendo exibido. 
    // Isso é útil para reiniciar a calculadora e começar uma nova operação.
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    // A função substring() é usada para extrair uma parte de uma string. O método recebe dois argumentos:
    // o índice de início e o índice de fim. No caso, estamos usando resultado.length - 1 para obter o índice do último caractere da string,
    // e resultado.substring(0, resultado.length - 1) retorna a string sem o último caractere.    
}
function calcular() 
{
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    // A função calcular() é usada para avaliar a expressão matemática que o usuário inseriu na calculadora.
    // Ela pega o conteúdo do elemento com o id 'resultado' e, se houver algo lá, usa a função eval() para calcular o resultado da expressão.
    // O resultado é então exibido no mesmo elemento. A função eval() é poderosa, mas deve ser usada com cuidado, pois pode executar código malicioso se a entrada não for controlada.
    else{
        document.getElementById('resultado').innerHTML = "inválido";
    }

}   