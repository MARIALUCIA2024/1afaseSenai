function executar1008(){
    let id, horas, valorHora, salario
    // let id
    // let valorHora
    // let salario
    id = Number(prompt("Digite seu id:"))

    // id = Number('45') que é texto prompt - entre aspas é texto
    // id = 45 foi convertido para numero

    horas = Number(prompt("Quantas horas você trabalhou?"))
    valorHora = Number(prompt("Quanto voce ganha por hora?"))

    salario = horas * valorHora

    alert("ID: " + id + "\nSalário: R$" + salario.toFixed(2))

}

  function executar1009(){
    let id, nome, salarioFixo, totalVendas

    nome = prompt("Digite o seu nome")
    salarioFixo = Number(prompt("SalarioFixo"))
    totalVendas = Number(prompt("totalVendas"))
    comissão = totalVendas * 15/100

    

    total = salarioFixo + comissão



    alert (nome +"\nSalário: R$" + total)
  } 

  function executar1038(){
    let item, qtdItem

    
  }