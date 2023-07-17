document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault(); // tirando o comportamente padrão do formulário
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo; // gera números aleatórios
        numeroAleatorio = Math.floor(numeroAleatorio + 1); //arredondando o numero para baixo e somando mais 1 para não deixar que dê zero
        document.getElementById('resultado-valor').innerText = numeroAleatorio; //Digita no HTML 
        document.querySelector('.resultado').style.display = 'block';
    });
});
