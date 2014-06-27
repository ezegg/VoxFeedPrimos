function convertirPrimos () {
	var cadena = $('#cadena').val();
	var arrayCadena = [];
	arrayCadena = cadena.split(',');
  var resultado = [];

	for (var i = 0; i < arrayCadena.length; i++) {
    var number = parseInt(arrayCadena[i]);
    console.log(number);
    var contador=2;
    for ( j = 2; j<number ; j++){ 
      if (number%j == 0){ 
        contador++; 
        break; 
        } 
    } 
      if (contador == 2){ 
        console.log('Es Primo'+number)
      }else{ 
        console.log('no es primo'+number)
        resultado.push(number);
        console.log(resultado.length);
      } 
  }
  //ordeamos de manera ascendente
  resultado.sort(function(a, b){return a-b});
  $('#noPrimos').val(resultado);  
}
