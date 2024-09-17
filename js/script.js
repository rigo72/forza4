function posizionaPedina(){
    let contTurno = 0;
    if(contTurno % 2 == 0){
        document.getElementById("bot1").style.backgroundColor = "red";
    }else{
        document.getElementById("bot2").style.backgroundColor = "yellow";
        contTurno ++;
    }
}