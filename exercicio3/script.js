let nome = prompt("Insira seu nome completo: ")
let nascimento = prompt("Insira sua data de nascimento: (DD/MM/AAAA)")
let endereco = prompt("Insira seu endereço: (Rua, número)")
let cpf = Number(prompt("Insira seu cpf (Obs: somente números)"))
let escolaridade = prompt("Insira sua escolaridade: ")
let temCNH = prompt("Você possui CNH")
let qtdFilhos
let temFilhos = confirm("Você tem filho(s)")
let percentual

if (temFilhos){
    qtdFilhos = Number(prompt("Quantos filhos você possui?"))
}else{
    qtdFilhos = 0
}

let cargo = prompt("Qual o seu cargo atual? ")
let salario = Number(prompt("Qual o seu salário atual? "))
let temComissao = confirm("Você recebe comissão? ")

if (temComissao){
    percentual = Number(prompt("Qual a porcentagem da sua comissão? (Ex: 23)")) 
}else{
    percentual = 0
}

let anoAdmissao = prompt("Digite o ano da sua admissão")

console.log(
    `Nome completo: ${nome} \n
    Data de nascimento: ${nascimento} \n
    Endereço: ${endereco} \n
    CPF: ${cpf} \n
    Escolaridade: ${escolaridade} \n
    Tem CNH: ${temCNH} \n
    Filhos: ${qtdFilhos} \n
    Cargo atual: ${cargo} \n
    Salário atual: ${salario} \n
    Percentual Comissão: ${percentual} \n
    Ano de admissão: ${anoAdmissao}`
)