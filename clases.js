class Auto{
    constructor(puertas,color,marca,año,ruedas){
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion(){
        console.log("Este carro marca "+ this.marca+ " de color "+ this.color)
    }
}

var miAuto = new  Auto(2,"Rojo","Mazda",2013,4)
miAuto.informacion();

class Futball{

    constructor(jugador){
        this.jugador = jugador
    }
    obtenerNombre(){console.log(this.jugador)}

}

var argentina = new Futball("Messi");
var colombia = new Futball("Falcao");

argentina.obtenerNombre();
colombia.obtenerNombre();