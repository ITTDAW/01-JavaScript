

/*En este archivo JS vamos a implementar la funcion de la mediana 

MEDIANA: La mediana es el valor que ocupa el lugar central de todos los datos cuando éstos están ordenados de menor a mayor.*/

function mediana(){

    //Nosotros ya tenemos el array ordenado de menor a mayor y asi lo recibimos, si no estuviera ordenado, habría que hacerlo.

    /*Si el numero de elementos del array es par, definimos dos posiciones, la posicion miarray.lenght/2 y la anterior,
    despues miramos el valor del elemento del array en esa posicion, sumamos ambos y la mitad seria la el valor de la mediana.*/
    if (miarray.length%2==0) {
        var pos1=miarray.length/2
        var pos2=pos1-1
        var elem1=miarray[pos1]
        var elem2=miarray[pos2]
        var mediana=(elem1+elem2)/2
    
    /*Si el numero de elementos es impar, calculamos una nueva posicion restando uno al numero de elementos del array y lo dividimos entre 
    dos, el valor de ese elemento del array en esa posicion es la mediana*/
    } else {
        var pos_central=(miarray.length-1)/2
        var mediana=miarray[pos_central]
    }
    

    /*De la misma forma que con la moda, si no tenemos array generado, nos da un mensaje de que no hay numeros, si todo es correcto
    en el elemento resultadosmediana transferimos el valor conseguido en mediana*/
    if (miarray.length==0){

        document.getElementById("resultadomediana").innerHTML= "No hay números generados" ;
        
    }else{
    
    document.getElementById("resultadomediana").innerHTML= " La mediana de los números es: "+ (mediana)  ;

    }

}

