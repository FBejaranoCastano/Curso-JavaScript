/* -------------------------------------------------------------------------- */
/*                               CREAR UN OBJETO                              */
/* -------------------------------------------------------------------------- */
var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };

 /* -------------------------------------------------------------------------- */
 /*                     OBJETO DENTRO DE UN OBJETO EJEMPLO                     */
 /* -------------------------------------------------------------------------- */
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

/* -------------------------------------------------------------------------- */
/*                     ACCEDER A UNA PROPIEDAD DEL OBJETO                     */
/* -------------------------------------------------------------------------- */
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

 /* -------------------------------------------------------------------------- */
 /*                                   EDITAR                                   */
 /* -------------------------------------------------------------------------- */
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

/* -------------------------------------------------------------------------- */
/*                         FUNCION DENTRO DE UN OBJETO                        */
/* -------------------------------------------------------------------------- */
var misFunciones = {
   saludar: function(){
      console.log('Hola')
   }
}

misFunciones.saludar;


/* -------------------------------------------------------------------------- */
/*                             CREAR   PROPIEDADES                            */
/* -------------------------------------------------------------------------- */
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

/* -------------------------------------------------------------------------- */
/*                                   BORRAR                                   */
/* -------------------------------------------------------------------------- */
delete autos.marcas;
console.log(autos);

 /* -------------------------------------------------------------------------- */
 /*                                DOT NOTATION                                */
 /* -------------------------------------------------------------------------- */
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

/* -------------------------------------------------------------------------- */
/*                              BRACKET NOTATION                              */
/* -------------------------------------------------------------------------- */
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

/* -------------------------------------------------------------------------- */
/*                              OBJETOS AVAZADOS                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*              EJEMPLO CUANDO SE LE PASA PARAMETROS A UN OBJETO              */
/* -------------------------------------------------------------------------- */
var comidas = {};
var diferenciasDeNotaciones = function(propUno, propDos){
   comidas[propUno] = ["Frutas","Vegetales"];
   comidas[propDos] = ["Hamburguesas","Papas Fritas"]
   console.log(comidas);
}

diferenciasDeNotaciones("saludables", "noSaludables")



/* -------------------------------------------------------------------------- */
/*                  HAS OWN PROPERTY == TIENE ESTA PROPIEDAD                  */
/* -------------------------------------------------------------------------- */
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);
J
/* -------------------------------------------------------------------------- */
/*                NOMBRE DE TODAS LAS PROPIEDADES DE UN OBJETO                */
/* -------------------------------------------------------------------------- */
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

/* -------------------------------------------------------------------------- */
/*                             RECORRER UN OBJETO                             */
/* -------------------------------------------------------------------------- */
var mundo = {continentes: 7, paises: 195, oceanos: 5};
for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}
//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: function () {
      console.log('Mi perro es un  ' + this.raza);
   },
};
