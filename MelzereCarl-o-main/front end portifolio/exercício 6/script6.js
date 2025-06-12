let cliques= 0;
let mostraHTML= document.getElementById("mostraHTML")

 function contador(){

    cliques++; 

    mostraHTML.innerHTML = `<p>Número de cliques: ${cliques}</p>`;
    console.log(cliques);

}

function zerarcontagem(){
    cliques = 0;
    
    mostraHTML.innerHTML = `<p> Número de cliques: ${cliques}</p>`;
    console.log(cliques);
    
}