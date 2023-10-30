var listaCompras = [];
listaCompras[1] = "Tomates";
listaCompras[2] = "Naranjas";
console.log(listaCompras.length);


// PUSH y UNSHiFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHiFT
colores.shift();
colores.pop();

console.log(colores);

// iNCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

var palabra = 'Henri';
var palabraSeparada = palabra.split('')
console.log(palabraSeparada);
palabraSeparada. pop ( );
palabraSeparada. push('y') ;
console.log(palabraSeparada);

var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

//REOCORRER ARREGLO

var numerosArreglo = [1,2,3,4,5]
numerosArreglo.forEach(numerito => console.log(numerito))
numerosArreglo.forEach(num => {if (num >= 3) {console.log(num)}});

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
// WHiLE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);



