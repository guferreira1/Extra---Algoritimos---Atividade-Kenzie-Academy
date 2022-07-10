let salario = parseInt(prompt('Digite seu salário'))
let vendas = parseInt(prompt('Digite o valor total das vendas'))
let comissao = 1200
let saque = parseInt(prompt('Qual valor deseja sacar ?'))

function calculateSalary(salario, vendas){
    let salarioComissao = 0

    if(vendas < comissao){
        salarioComissao = salario + ((vendas/100) *3)
    }
    if(vendas > comissao){
        salarioComissao = salario + ((vendas/100) *5)
    }
    return salarioComissao
}
console.log(calculateSalary(salario, vendas))


function cashMachine(saque, salario, vendas){
    
    let saldoAtual = calculateSalary(salario, vendas) - saque
    let notas = []
    let plural = 0
    let result = ''
    let notaIndice = 0
   
        
        if(Math.floor(saque / 200) >= 1 ){
            notas.push(Math.floor(saque / 200))
            saque = saque - 200 * Math.floor(saque / 200)
        } else {
            notas.push(0)
        }
        if(Math.floor(saque / 100) >=1 ){
            notas.push(Math.floor(saque / 100))
            saque = saque - 100 * Math.floor(saque / 100)
        } else {
            notas.push(0)
        }
        if(Math.floor(saque / 50) >=1 ) {
            notas.push(Math.floor(saque / 50))
            saque = saque - 50 * Math.floor(saque / 50)
        } else {
            notas.push(0)
        }
        for(let i = 0; i < notas.length; i++){
            if(notas[i] > 1){
                plural = 'notas'
            } else {
                plural = 'nota'
            }
            if(i === 0){
                notaIndice = '200'
            }
            if( i === 1){
                notaIndice = '100'
            }
            if( i === 2){
                notaIndice = '50'
            }
            result = result + `${notas[i]} ${plural} de ${notaIndice}, `
        }
       
    return `Notas sacadas: ${result} saldo: ${saldoAtual} reais.`
}
console.log(cashMachine(saque, salario, vendas))


let estoqueAtual = 100
let estoqueMaximo = 200
let estoqueMinimo = 50

function calculateStock(estoqueAtual, estoqueMaximo, estoqueMinimo){
    let estoqueMedia = (estoqueMaximo + estoqueMinimo) / 2

    if(estoqueAtual >= estoqueMedia){
        return `Não efetuar a compra`
    }
    else {
        return `Pode efetuar a compra`
    }
}
console.log(calculateStock(estoqueAtual, estoqueMaximo, estoqueMinimo))



let anoNascimento = 1995
let anoAtual = 2022

function calculateAge(anoNascimento, anoAtual){
    let idade = anoAtual - anoNascimento;
    let idadeMeses = idade * 12
    let idadeSemana = idade * 52
    let idadeDias = idade * 365

    return `A idade é: ${idade} anos; em meses: ${idadeMeses} meses; em semanas: ${idadeSemana} semanas; em dias: ${idadeDias} dias` 
}
console.log(calculateAge(anoNascimento, anoAtual))



let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function getDiagonal(matriz){
    let result = []

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(i === j){
                result.push(matriz[i][j])
            }
        }
    }
    return result
}
console.log(getDiagonal(matriz))