let batatas = []
function add(){
let produto = document.getElementById("txt").value;
let posicao = batatas.indexOf(produto);
if(posicao == -1){
    batatas.push(produto);
document.getElementById("lista").innerHTML = batatas;
}
else {
    alert("este produto já está cadastrado!")
}
}




function remove(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if(posicao == -1){ 
        alert("Não foi encontrado produto com o nome: " + produto);
        // alert("cadastrar produto com o nome: " + produto)
    
    }
    else {

    batatas.splice(posicao, 1);
    document.getElementById("lista").innerHTML = batatas;
    }

}