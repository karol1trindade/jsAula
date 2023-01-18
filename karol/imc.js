function somar(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    let imc = peso/(altura*altura)
    let saida = document.createElement("p")
    saida.id = "saida"
    saida.innerHTML = "seu imc é:"+imc
    document.body.appendChild(saida)
}