const nacionalidade = prompt("Escreva aqui a sua nacionalidade...");

const nacionalidades = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"];

if(nacionalidade === nacionalidades[0]){
    console.log('Sua nacionalidade é', nacionalidade);
}else if (nacionalidade === nacionalidades[1]) {
    console.log('sua nacionalidade é', nacionalidade);
}else if (nacionalidade === nacionalidades[2]) {
    console.log('sua nacionalidade é', nacionalidade);
}else if (nacionalidade === nacionalidades[3]) {
    console.log('sua nacionalidade é', nacionalidade);
}else if (nacionalidade === nacionalidades[4]) {
    console.log('sua nacionalidade é', nacionalidade);
}else {
    console.logas('Nacionalidade não encontrada');
};
