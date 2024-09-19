function CalcularIdadeCachorro(){
    let IdadeCachorro = document.getElementById("inpIdadeCachorro").value
    
    let IdadeH = IdadeCachorro * 7

    if(IdadeH >= 65){
        document.getElementById("pIdadeCachorro").innerHTML = "cachorro aposentado: " +IdadeH 
    }
    else {

        document.getElementById("pIdadeCachorro").innerHTML = "seu cachorro não está aposentado: " +IdadeH 
    }
}