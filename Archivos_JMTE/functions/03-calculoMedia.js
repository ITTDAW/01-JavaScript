
//Creamos la función media que simplemente recibe el valor de la suma calculado anteriormente y lo divide entre el tamaño del array

//MEDIA:  sirve para obtener la media aritmética entre un grupo de valores

function media(){

  let media= suma/10;

  /*Para evitar el undefined, le decimos que si no existe array compuesto de numeros aun, nos presente en el elemento correspondiente
  un texto explicativo*/
  if (miarray.length==0){

    document.getElementById("resultadomedia").innerHTML= "No hay números generados" ;
    
}else{

  // Si todo es correcto en el elemento con id resultadomedia, presentamos el valor de la media
   document.getElementById("resultadomedia").innerHTML= "La media de los números es "+ media ;

}
}

 

 


  
  







