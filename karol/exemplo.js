/*var txt = document.getElementsByTagName("p")[0]

txt.innerHTML = "encontrei o paragrafo"
txt.id = "p0"
txt.className = "negrito"

txt.style.color = "green"
txt.style.fontStyle = "italic"

var novoP = document.createElement("p")

novoP.id = "p4"
novoP.className = "red"
novoP.innerHTML =" novo paragrafo"
novoP.style.color = "blue"

document.body.appendChild(novoP)

var pVelho = document.getElementById(novoP)*/

var idade = document.getElementById("idade").value
    var idadeHumana = number(idade - 2)*4+21

function somar(){
    let idade = document.getElementById("idade").value
    let idadeH = (idade - 2)*4 + 21
    let saida = document.createElement("p")
    saida.id = "saida"
    saida.innerHTML = "A idade do seu cahorro em idade humana é:"+idadeH
    document.body.appendChild(saida)
}