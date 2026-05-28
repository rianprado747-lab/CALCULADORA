function insert(num) {
    var resultado = document.getElementById('resultado');
    var numero = resultado.innerHTML;//AinnerHTML propriedade em JavaScript éUsado para obter ou definir o conteúdo HTML dentro de um elemento
    
    // operadores
    const operadores = ['+','-','*','/'];

    //pegando o ultimo caracter digitado no display 
    const lastcaracter = numero.slice(-1);//Oslice() método em JavaScriptExtrai uma parte de uma string e a retorna como uma nova string sem modificar a original.
    // sintaxe slice(inicio do indice,final do indice)

    //impede começar com operador
    if (numero === '' && operadores.includes(num)){//O JavaScript possui um método integrado .includes()usado para verificar se um valor específico existe dentro de um Array ou uma String , retornando true ou false
        return;//declaração return encerra a execução de uma função e especifica o valor a ser enviado de volta para quem a chamou  
    }

    // impede dois operadores seguidos
    if (operadores.includes(lastcaracter) && operadores.includes(num)){
        //troca o operador antigo pelo novo
        resultado.innerHTML = numero.slice(0, -1) + num;
        return;
    }

    // impede dois pontos  . seguidos 
    if (lastcaracter === '.' && num === '.'){
        return;
    }

    //adiciona numero normalmente 
    resultado.innerHTML += num;
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
        try {//se tiver algo no visor tenta calcular
        document.getElementById('resultado').innerHTML = eval(resultado);
        }
        catch{//se o usuario digiou algo errado limpa o visor
        clean()
    }
    // A função calcular() é usada para avaliar a expressão matemática que o usuário inseriu na calculadora.
    // Ela pega o conteúdo do elemento com o id 'resultado' e, se houver algo lá, usa a função eval() para calcular o resultado da expressão.
    // O resultado é então exibido no mesmo elemento. A função eval() é poderosa, mas deve ser usada com cuidado, pois pode executar código malicioso se a entrada não for controlada.
}
else{
    clean()
}
}   
document.addEventListener('keydown',function(evento){//captura a entrada do teclado na pagina
    const tecla = evento.key;//guarda a tecla digitada
    if (/[0-9\/\*\-\+\.]/.test(tecla)){//verificando qual tecla foi selecionada, o /[0-9\ é uma regex, ela funciona como uma lista de permissôes
// o test(tecla) verifica se a tecla apertada esta dentro da lista,se sim executa o insert
        insert(tecla);
    }
    if(tecla === 'Enter'|| tecla ==='='){
        evento.preventDefault();//previne o comportamento padrão do navegador (enter = recarregar ou enviar formulario)
        calcular();
    }
    if(tecla === 'Backspace'){//se a tecla de apagar for pressionada chama a funcao apagar
        back()
    }
    if(tecla === 'Escape'|| tecla.toLowerCase() === 'c'){//se o esc ou a letra c(convertida para minuscula) for pressionada
        clean()//a funcao limpar é chamada
    }
    if(tecla ==='Delete'){// se delete for pressionado a funcao limpar é chamada
        clean()
    }

})
