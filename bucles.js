for (let i = 1 ; i <= 10 ; i++) {
    
    console.log(i)
}
var suma = 0;
while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };


switch ("Manzanas") {
    case "Naranjas":
      console.log("El kilogramo de naranjas cuesta $0.59.");
      break;
    case "Manzanas":
      console.log("El kilogramo de manzanas cuesta $0.32.");
      break;
    case "Platanos":
      console.log("El kilogramo de platanos cuesta $0.48.");
      break;
    case "Cerezas":
      console.log("El kilogramo de cerezas cuesta $3.00.");
      break;
    case "Mangos":
    case "Papayas":
      console.log("El kilogramo de mangos y papayas cuesta $2.79.");
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
  }

  var i = 0;
  do {
    i += 1;
    console.log(i);
  } while (i < 5);