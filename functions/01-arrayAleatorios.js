
// Definimos un array vacio, el cual cargaremos mas tarde y una variable llamada suma, en donde 
// acumularemos los valores de los distintos numeros del array
let miarray=[];
let suma=0;

/*Todo lo que está dentro de un documento HTML es un objeto en javascript, las etiquetas que están dentro del archivo es 
conocido como DOM (Document Object Model). Para poder manipular los objetos del dom con javascript es necesario que obtengas
 el elemento, para eso se declara un id, ya que un id no se puede repetir, solo existirá un único id por elemento.
 Con el  innerHTML se añade html dentro de un elemento, al ponerle "" , lo que hacemos es dejar en blanco ese elemento
 de esta forma es como si reseteamos los contenidos de esos elementos (borramos lo que habia)*/

    document.getElementById("resultado").innerHTML="";
    document.getElementById("resultadomedia").innerHTML="";
    document.getElementById("resultadomoda").innerHTML="";
    document.getElementById("resultadomediana").innerHTML="";
  
// A continuación creamos la funcion que nos genera los numeros y los carga en el array definido anteriormente
function  GeneraNumeros() {
  
   //Cargo el array con 10 valores aleatorios entre 0 y 100
     for(let i=0;i<10;i++){
     miarray[i]=Math.floor((Math.random() * (101-0))+0);

     
    
}

// Ahora utilizamos el metodo de la burbuja para ordenar los elementos del array de menor a mayor
for (let i=0; i<miarray.length; i++){
 
  for (let j=0; j<miarray.length-1; j++) {
      if (miarray[j]>miarray[i]) {
          aux=miarray[i]
          miarray[i]=miarray[j]
          miarray[j]=aux
      } /* Fin del if*/
  } /* Fin del for interno*/
} /* fin del for externo*/


}