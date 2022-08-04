let idade = 20
let isMaiorIdade = true
let terminouOEnsinoMedio = true
let isCursandoOutraFaculdade = true

if (idade >= 18) {
    console.log(isMaiorIdade);
}else if (idade <= 18){
	console.log('ainda é menor de idade');
};

if (terminouOEnsinoMedio === true){
    console.log('Terminou o ensino médio');
}else if(terminouOEnsinoMedio === false){
    console.log('Não terminou o ensino médio.');
};

if (isCursandoOutraFaculdade === true){
    console.log('Ésta fazendo facul');
}else if(isCursandoOutraFaculdade === false){
    console.log('Não terminou o ensino médio');
};