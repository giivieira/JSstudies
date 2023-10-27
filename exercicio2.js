/*
A função abaixo receberá 2 parâmetros, um vetor com apenas valores numéricos e um número.

Faça com que ela multiplique cada item do vetor pelo segundo parâmetro apenas se o item do vetor for maior que 5. Após isso, ela deve retornar o novo vetor.

Exemplo:

calcularVetor([1,5,10, 20], 2) retornará [2, 5, 20, 40] pois só 10 e 20 são maiores que 5.

calcularVetor([1,3,4, 5], 10) retornará [1, 3, 4, 5] pois nenhum é maior que 5.

calcularVetor([15, 20, 25, 30], 3) retornará [45, 60, 75, 90].
 */


function calcularVetor(vetor, numero){
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > 5){
           vetor [i] = vetor [i] * numero;
        }
    }
       return vetor;
    
}