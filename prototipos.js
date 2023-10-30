//LOS PROTOTIPOS SIRVEN PARA INGRESAR AL CONSTRUCTOR Y ASÍ EDITAR O AGREGAR METODOS

Array.prototype.mayoresQueTres = function(){
    var arregloModificado = [];

    for (let i = 0; i < this.length; i++) {

        if (this[i] > 3) {
            arregloModificado.push(false)
        }else{
            arregloModificado.push(this[i])
        }
    }
    return arregloModificado;
}

var arreglo = [1,2,3,4,5];
var nuevoArreglo = arreglo.mayoresQueTres();

console.log(nuevoArreglo)

/* -------------------------------------------------------------------------- */
/*                                EJEMPLO N° 2                                */
/* -------------------------------------------------------------------------- */

class Latinoamerica{
    constructor(){
        this.paises =  [];
    }
}

Latinoamerica.prototype.agregarPais = function(pais){
    this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarPais("Colombia");

console.log(continente.paises)