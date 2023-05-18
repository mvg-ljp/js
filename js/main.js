//entrada de datos > procesamiento de datos > salida
//ETAPA 1 > ENTRADA DE DATOS
let altura = parseInt(prompt("Ingrese Altura: (160/165/170/175/180/190/200):"));
let busto = parseInt(prompt("Ingrese Medida de Busto:(80/85/90/95/100/105/110):"));
let cintura = parseInt(prompt("Ingrese Medida de Cintura:(65/70/80/90/100):"));
let cadera = parseInt(prompt("Ingrese Medida Cadera:(90/95/100/105/110):"));


if (altura <= 165 && busto <= 85 && cintura <= 65 && cadera <= 95) {
    talle = "S";
  } else {
    talle = "M";
  }
  
  console.log("El talle es " + talle); // muestra por consola el talle correspondiente
  

//ETAPA 2 > procesamiento de datos