/*
Complete a função abaixo de forma que ela receba uma variável como 
parametro e retorne um vetor no final.

Essa variável passada por parametro terá as seguintes propriedades:

1) Ela também será um vetor.

2) Cada um de seus valores serão vetores com números.

Você deve processar esta variavel de forma a retornar um novo vetor
 com a soma dos valores destes subvetores.

Exemplo:

[ [1,1] , [1,1,1] , [0,0,0,1] ] retornará [2, 3, 1]

[ [1,1,1] , [2,2,2] , [3,3,3] ] retornará [3, 6, 9]

[ [0,0,1] , [2,0,0] , [0,3,0] ] retornará [1, 2, 3]

Dica: Como estamos lidando com vetores dentro de vetores, 
você precisará fazer um loop dentro de um loop (tente o FOR ou FOR OF).
*/



function somarSubVetores(vetor){
    let resultado = [];
	
	for(let indice = 0; indice < vetor.length; indice++){
		let subVetor = vetor[indice];
		let soma = 0;

		for(let subIndice = 0; subIndice < subVetor.length; subIndice++){
			soma = soma + subVetor[subIndice];
		}
		resultado[indice] = soma;
	   }
	   return resultado;
	}