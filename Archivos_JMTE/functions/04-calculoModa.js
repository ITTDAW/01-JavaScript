
/*En este archivo JS implementamos la funcion para calcular la moda de nuestro array de numeros*/

//MODA: Es el número que aparece más frecuentemente en un grupo de números. Por ejemplo, la moda de 2, 3, 3, 5, 7 y 10 es 3.

//Hay que tener en cuenta que la moda puede ser mas de un numero por ejemplo en 2,3,3,4,4,5,7,8,9, la moda serian 3 y 4

//Por esta razón el algoritmo de calcular la moda puede resultar un poco complejo para solucionar este conflicto y mostrar un valor unico o varios valores.
  
  function moda(){

    /*Declaramos dos variables, la primera establece el numero maximo de veces que se repite un numero y que obtenemos 
    cuando ya hemos recorrido toda nuestra matriz   y la segunda es el valor de la moda que obtendremos en la posicion correspondiente*/
     
    let maximaVecesQueSeRepite = 0;
    let modavalor =0;
    
    /*Declaramos una variable string cadena, la razón es porque si hay mas de un numero que se repite las mismas veces que otro
    la moda estaria representada por mas de un numero y lo concatenaremos en este string*/


    let cadena=""

    //Establecemos una variable booleana porque si no hay ningun numero repetido, vamos a escribir un texto
    let sihay=false;
  
  //Establecemos una matriz del mismo numero de filas que de columnas y con el valor de los terminos del array
  //Recorremos la fila i 
  for(let i=0; i<miarray.length; i++){
    //Cada vez que volvemos a i reseteamos el valor de las veces que se repite
   let  vecesQueSeRepite = 0;
   //ahora recorremos la fila j
                for(let j=0; j<miarray.length; j++){
                  /*cada vez que el termino del array en la posición i es igual al termino del array en la posición j, 
                  sumamos una unidad a vecesQueSeRepite*/
                    if(miarray[i] == miarray[j])
                        vecesQueSeRepite++;
                  }
        /*Salimos de ese segundo for y comparamos el termino vecesQueSeRepite con maxiamVecesQueSeRepite, primero lo comparamos si 
        el numero vecesQueSeRepite que acabamos de obtener es igual a maximaVecesQueSeRepite*/
       
        if(vecesQueSeRepite == maximaVecesQueSeRepite){
                  
          /*Tambien tenemos que tener en cuenta que si solo se ha repetido una vez eso significa que no esta repetido dos veces, es el
          resultado de comparar el mismo miembro de la matriz*/
                    if (vecesQueSeRepite==1){
                      maximaVecesQueSeRepite = vecesQueSeRepite;
                    }else{
          /*Si el numero de vecesQueSeRepite es igual a maximaVecesQueSeRepite y mayor de 1, entonces, primero tenemos que comparar
          que no sea nuestro numero repetido que ya hemos añadido a la cadena*/
                      if (miarray[i]==miarray[i-1]){

                      }else{
          
          /*Si es un numero nuevo que tiene las mismas repeticiones que otro que ya teniamos añadido, lo añadimos a nuestra cadena*/

                                 modavalor=miarray[i];
                                
                                cadena= cadena + modavalor + " , "
                                maximaVecesQueSeRepite = vecesQueSeRepite;

                      }

                              
                    
                               
                    
                    }
                    
        /*En el momento que encontramos un valor para vecesQueSeRepite mayor que el maximaVecesQueSeRepite, primero tenemos que descartar
        la primera vez que nos pasa que es con el segundo valor a cero. */
        } else if (vecesQueSeRepite>maximaVecesQueSeRepite){
                  
                        if (vecesQueSeRepite==1){
                          maximaVecesQueSeRepite = vecesQueSeRepite;

        /*Despues comparamos que no sea un valor que hayamos introducido a nuestra cadena*/
                        }else{
                        
                          sihay=true;
                         if (miarray[i]==miarray[i-1]){

                        }else{
        /*Y por ultimo al ser un valor mayor, eso quiere decir que tenemos un nuevo valor unico de moda y hay que resetear la cadena
        para solo incluir este valor en ella, y establecemos este como el valor de maximaVecesQueSeRepite*/
                          
                                   cadena="";
                                    modavalor=miarray[i];
                                    maximaVecesQueSeRepite = vecesQueSeRepite;
                                    cadena= cadena + modavalor + " , "
                   
                        }
                 
                      }
                           }
               


                   

             
  }       

          
   /*Primero nos aseguramos de que el array esta cargado para escapar del undefined, establecemos el valor de la cadena
  para el elemento del id resultadomoda*/

 if (miarray.length==0){

  document.getElementById("resultadomoda").innerHTML= "No hay números generados" ;
 }else {

 /*Si no hay ningun valor superior en ningun momento al maximo (no exiten numeros repetidos), pues establecemos para cadena un mensaje*/

  if (!sihay){

    cadena="La moda no existe / Ningún numero repetido"
    document.getElementById("resultadomoda").innerHTML= "La moda de los números es: "+ cadena ;
                
 

 
 
}else{
  document.getElementById("resultadomoda").innerHTML= "La moda de los números es: "+ cadena ;
}



  }

 
  
      
  }