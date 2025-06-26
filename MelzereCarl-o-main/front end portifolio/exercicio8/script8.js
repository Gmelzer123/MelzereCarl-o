let mostraHTML= document.getElementById("mostraHTML")
let numero = 0
let num_adiv = 0

numero = parseINT(Math.randow() * 101);

function adivinhar(){

    num_adiv = Number(window.prompt("Digite um numero de 1 a 100"));

    

    frase = mostraHTML.innerHTML += `<p>Voce escolheu ${num_adiv}.</p>`

    console.log(numero);

   if (num_adiv > numero) {
    mostraHTML.innerHTML += `<p>"Voce escolheu ${num_adiv}. meu numero é MENOR</p>`
    
   }else{
    mostraHTML.innerHTML = `<p>Voce escilheu ${num_adiv}. meu numero é MAIOR</p>`
   }

   if(numero == num_adiv){
    mostraHTML.innerHTML = `<p> Parabens voce acerto</p>`
   }
}