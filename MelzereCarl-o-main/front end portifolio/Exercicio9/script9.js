let mostraHTML = document.getElementById("mostraHTML")


function cliques() {
    let meses = prompt("Digite um texto").toUpperCase();
    let estacao
    let cor 

    if(meses ==="DEZEMBRO" || meses === "JANEIRO" || meses === "FEVEIRO"){
        estacao = "Verão"
        cor = "#"
    }else if(meses === "MARÇO" || meses === "ABRIL" || meses === "MAIO"){
        estacao = "Outono"
    }else if (meses === "JUNHO" || meses === "JULHO" || meses === "MAIO"){
        estacao = "Intervalo"
    }else if (meses === "SETEMBRO" || meses === "OUTUBRO" || meses === "NOVEMBRO"){
        estacao = "Primavera"
    }
    
    mostraHTML.innerHTML = `<p>O mês ${meses} pertence a estação: ${estacao}</p>`

}
