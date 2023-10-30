function viajar (destino){
    if (destino === 'Brasil') {

        console.log("Gire a la derecha")
        
    }else if (destino === 'Argentina') {

        console.log("Gire a la izquierda")
        
    }else{
        console.log("Siga derecho")
    }
}

viajar("Colombia");

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);