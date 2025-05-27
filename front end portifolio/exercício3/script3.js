function media(){
    let num1 = Number(window.prompt("digite aqui o primeiro número:"))
    let num2 = Number (window.prompt("digite o segundo número:"))
    let num3 = Number (window.prompt("digite um terceiro número"))
    let pontosFaltando;
   
    let resultado = num1 + num2 + num3 / 3

    alura = "alura"
    
    alert("media" + resultado);
}

if(total >= 60){
    alert("Você atingiu a média" + total)
    alert("Aprovado")
}
else{
    pontosFaltando = 60 - total
    alert(nome + "reprovado, falta" + pontosFaltando + "pontos, estuda ai: + alura")
}  

