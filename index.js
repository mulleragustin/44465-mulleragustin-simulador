alert(`Hola bienvenido al minikiosco`)

let subtotal = 0;

let seguircomprando=`si`;
while(seguircomprando == `si`){
  let listaproductos = ingresoproducto();
  if(listaproductos < 1 || listaproductos>5 || isNaN(listaproductos)){
    alert(`Se esperaba que se ingrese un numero del 1 al 5`);
    ingresoproducto()};
  let precio = opcionaprecio(listaproductos);
  
  let cantidad = prompt(`Ingrese cantidad`);

  subtotal = subtotal + (precio * cantidad);

  seguircomprando = prompt(`Desea seguir comprando?
  ingrese "si" para seguir
  ingrese cualquier cosa para terminar`);
}
alert(`subtotal: $${subtotal}`);
let opciondepago = ingresoopciondepago();
if(opciondepago < 1 || opciondepago>5 || isNaN(opciondepago)){
  alert(`Se esperaba que se ingrese un numero del 1 al 5`);
  opciondepago = ingresoopciondepago();
};
let total = 0;
let mensaje = ``;
switch (opciondepago){
  case 1: 
      total = subtotal - (subtotal * 0.1 );
      mensaje = `El total es $${total}`;
      break;
  case 2: 
      total = subtotal ;
      mensaje = `El total es $${total}`;
      break;
  case 3: 
      total = subtotal + (subtotal * 0.15 );
      mensaje = `El total es $${total}, 3 coutas de $${total/3} cada una.`;
      break;
  case 4: 
      total = subtotal + (subtotal * 0.25 );
      mensaje = `El total es $${total}, 6 coutas de $${total/6} cada una.`;
      break;
  case 5: 
      total = subtotal + (subtotal * 0.55 );
      mensaje = `El total es $${total}, 12 coutas de $${total/12} cada una.`;
      break;
};
alert(mensaje);
alert(`Gracias por su compra`);





//--------------------------------------------------funciones

function opcionaprecio(a){
  let precioelegido = 0;
  switch (a){
    case 1 : 
      precioelegido = 75;
      break;
    case 2 : 
      precioelegido = 300;
      break;
    case 3 : 
      precioelegido = 1000;
      break;
    case 4 : 
      precioelegido = 500;
      break;
    case 5 : 
      precioelegido = 200;
      break;
  }
  return precioelegido;
}
function ingresoproducto(){
  return parseInt(prompt(`Ingrese la opcion de lo que desee comprar
  Producto        Precio
---------------------------------------    
1 - Alfajor          $75
2 - Coca Cola    $300
3 - Fernet          $1000
4 - Yerba           $500
5 - Chocolate    $200`));
};
function ingresoopciondepago(){
  return parseInt(prompt(`Como desea pagar?
  seleccione opcion
      Modo de pago              Descuento/Recargo
      ---------------------------------------------
  1 - transferencia               -10%
  2 - credito/debito 1 pago       sin intereses
  3 - credito 3 cuotas          15% intereses
  4 - credito 6 cuotas          25% intereses
  5 - credito 12 cuotas         55% intereses`));
};