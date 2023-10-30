class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;

    }
    saludar(){
        console.log("Hola soy "+ this.nombre+" y tengo "+this.edad +" años")
    }
}

class Programador extends Persona{
    constructor(nombre,edad,experiencia){

        super(nombre,edad);
        this.experiencia = experiencia;

    }
    codear(){
        console.log("Soy "+this.nombre+" tengo "+this.edad+" y tengo experiencia años de "+this.experiencia)
    }
}


var martin = new Persona("Felipe",32);
martin.saludar()

var programador = new Programador("Felipe",32,5);
programador.codear();