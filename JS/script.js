//seleciona os elementos da página
const calcularButton = document.getElementById('calcularButton');
//saída HTML
const resultadoParagrafo = document.getElementById('resultado');

//Adiciona um evento de clique ao botão para calcular a soma
calcularButton.addEventListener('click', () => {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;

    fetch(`http://localhost:3000/api/somar?numero1=${numero1}&numero2=${numero2}`)
        .then(response => response.json())
        .then(data => {
            //exibe o resultado da soma
            resultadoParagrafo.textContent = `Resultado da soma: ${data.soma}`;
            //resultadoParagrafo.textContent = "HELLO WORLD!";
        })
        .catch(error => {
            console.error('Erro ao calcular a soma: ', error);
            resultadoParagrafo.textContent = 'Erro ao calcular a soma';
        }); 
});

suButton.addEventListener('click', () => {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
        
    fetch(`http://localhost:3000/api/sube?numero1=${numero1}&numero2=${numero2}`)
        .then(response => response.json())
        .then(data => {
            //exibe o resultado da soma
            resultadoParagrafo.textContent = `Resultado da subtração: ${data.sub}`;
            //resultadoParagrafo.textContent = "HELLO WORLD!";
        })
        .catch(error => {
            console.error('Erro ao calcular a soma: ', error);
            resultadoParagrafo.textContent = 'Erro ao calcular a subtração';
        }); 
});

diButton.addEventListener('click', () => {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
        
    fetch(`http://localhost:3000/api/divi?numero1=${numero1}&numero2=${numero2}`)
        .then(response => response.json())
        .then(data => {
            //exibe o resultado da soma
            resultadoParagrafo.textContent = `Resultado da divisão: ${data.div}`;
            //resultadoParagrafo.textContent = "HELLO WORLD!";
        })
        .catch(error => {
            console.error('Erro ao calcular a soma: ', error);
            resultadoParagrafo.textContent = 'Erro ao calcular a divisão';
        }); 
});

muButton.addEventListener('click', () => {
    const numero1 = document.getElementById('numero1').value;
    const numero2 = document.getElementById('numero2').value;
        
    fetch(`http://localhost:3000/api/mu?numero1=${numero1}&numero2=${numero2}`)
        .then(response => response.json())
        .then(data => {
            //exibe o resultado da soma
            resultadoParagrafo.textContent = `Resultado da multiplicação: ${data.mult}`;
            //resultadoParagrafo.textContent = "HELLO WORLD!";
        })
        .catch(error => {
            console.error('Erro ao calcular a soma: ', error);
            resultadoParagrafo.textContent = 'Erro ao calcular a multiplicação';
        }); 
});