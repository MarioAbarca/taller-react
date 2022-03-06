function solucion(tipo){
    var baraja = new Object();
    var barajaArreglo = [];
    baraja.orden;
    baraja.extras;
    baraja.inicio;
  
    switch (tipo) {
  case "francés":
      baraja['orden'] = ['corazones', 'tréboles', 'diamantes', 'picas'];
      baraja['especiales'] = ['jota', 'reina', 'rey', 'as'];
      baraja['inicio'] = 1;
      break;
  case "español":
      baraja['orden'] = ['monedas', 'copas', 'esapadas', 'bastones'];
      baraja['especiales'] = ['escudero', 'caballo', 'rey'];
      baraja['inicio'] = 1;
    break;
  case "suizo":
      baraja['orden'] = ['escudos', 'rosas', 'campanas', 'bellotas'];
      baraja['especiales'] = ['escudero', 'caballo', 'rey'];
      baraja['inicio'] = 6;
    break;
  default:
    console.log ("No existe esta baraja");
    break;
}
  for(var j = 0; j < 4; j++){
    for (var i = baraja.inicio; i < 11; i++) {
     barajaArreglo.push(i + '_de_' + baraja.orden[j]);
    }
    for(var k = 0; k < baraja.orden.length - 1; k++){
      barajaArreglo.push(baraja.especiales[k] + '_de_' + baraja.orden[j]);
    }
  }
  return barajaArreglo;
}

console.log(solucion("suizo"));