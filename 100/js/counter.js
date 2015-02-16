var contador = 1;
var correcto='false';
var celda1 = new celda(0,0);
var celda2 = new celda(0,0);
var on = 'false';
var cronometro;


/*FUNCION A LA QUE SE LLAMA CUANDO EL USUARIO SELECCIONA UNA CASILLA*/
function aniadirNumero(nombre){
	if(on=='false'){
		timer();
		on='true';
	}
	seleccionarCelda(nombre);
	if(correcto=='true' && contador!=100){
		document.getElementById(nombre).innerHTML = contador;
		contador++;
		marcarCeldas();
		if(movimiento=='false'){
			stop();
			$("#game-top").fadeIn(1000);
  			$("#game-end").fadeIn(1000);
			var finContador = document.getElementById("score").innerHTML=(contador-1);
			var finTiempo = document.getElementById("time").innerHTML=(document.getElementById("minutos").innerHTML+":"+document.getElementById("segundos").innerHTML);
			
			var link = document.createElement('a');

			link.setAttribute('href', 'https://twitter.com/share');

			link.setAttribute('class', 'twitter-share-button');

			link.setAttribute('style', 'margin-top:5px;');

			link.setAttribute("data-text" , "Can you beat me? I just did "+finContador+" tiles in "+finTiempo+" minutes" );

			twi.appendChild(link);
			!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
		}
	}else if(contador == 100){
		stop();
		alert('WOOOO YOU WON!!!');
		$("#game-top").fadeIn(1000);
  		$("#game-end").fadeIn(1000);
  		document.getElementById("titleEnd").innerHTML="YOU WON!";
		var finContador = document.getElementById("score").innerHTML=100;
		var finTiempo = document.getElementById("time").innerHTML=(document.getElementById("minutos").innerHTML+":"+document.getElementById("segundos").innerHTML);
	
		var link = document.createElement('a');

		link.setAttribute('href', 'https://twitter.com/share');

		link.setAttribute('class', 'twitter-share-button');

		link.setAttribute('style', 'margin-top:5px;');

		link.setAttribute("data-text" , "Can you beat me? I just did "+finContador+" tiles in "+finTiempo+" minutes" );

		twi.appendChild(link);
		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	}
}



function seleccionarCelda(nombre){
	var x = nombre.slice(0,nombre.indexOf("x"));
	var y = nombre.substring(nombre.indexOf("x")+1);

	var x = parseInt(x);
	var y = parseInt(y);

	if(celda1.x == 0 && celda1.y == 0){
		celda1.x = x;
		celda1.y = y;
		correcto = 'true';
		return true;
	}else{
		celda2.x = x;
		celda2.y = y;
		validarMovimiento();
		if(correcto=='true'){
			desmarcarCeldas();
			cambiarCeldas();
		}
	}
}


/*COMPROBAMOS QUE LA CELDA SEA LA CORRECTA*/

function validarMovimiento(){	
	if((celda1.x == (celda2.x)) && (celda2.y == (celda1.y-3))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if((celda1.x == (celda2.x)) && (celda2.y == (celda1.y+3))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if((celda2.x == (celda1.x-3)) && (celda1.y == (celda2.y))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if((celda2.x == (celda1.x+3)) && (celda1.y == (celda2.y))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if(((celda2.x == (celda1.x-2)) && (celda2.y == (celda1.y+2)))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if(((celda2.x == (celda1.x-2)) && (celda2.y == (celda1.y-2)))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if(((celda2.x == (celda1.x+2)) && (celda2.y == (celda1.y+2)))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if(((celda2.x == (celda1.x+2)) && (celda2.y == (celda1.y+2)))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else if(((celda2.x == (celda1.x+2)) && (celda2.y == (celda1.y-2)))){
		if(comprobarCeldaVacia(celda2.x,celda2.y)){
			correcto = 'true';
			return true;
		}else{
			correcto='false';
			return false;
		}
	}else{
		correcto = 'false';
		return false;
	}
}




/*IMPEDIMOS QUE EL USUARIO SELECCIONE UNA CASILLA YA RELLENA*/
function comprobarCeldaVacia(x,y){
		if((x<1||x>10)||(y<1||y>10)){
			return false;
		}
		var celda = x+"x"+y;
		var campo = document.getElementById(celda).innerHTML;
		
		if(campo == null || campo==""){
			return true;
		}else {
			return false;
		}
	
}



var movimiento = "true";
function marcarCeldas(){
	movimiento = "false";

	document.getElementById(celda1.x+"x"+(celda1.y)).style.backgroundColor='#C5FFFF';

	if(comprobarCeldaVacia(celda1.x, celda1.y-3)){
		if(contador==2){
			document.getElementById(celda1.x+"x"+(celda1.y-3)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	if(comprobarCeldaVacia(celda1.x, celda1.y+3)){
		if(contador==2){
			document.getElementById(celda1.x+"x"+(celda1.y+3)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	if(comprobarCeldaVacia(celda1.x-3, celda1.y)){
		if(contador==2){
			document.getElementById((celda1.x-3)+"x"+(celda1.y)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	if(comprobarCeldaVacia(celda1.x+3, celda1.y)){
		if(contador==2){
			document.getElementById((celda1.x+3)+"x"+(celda1.y)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	if(comprobarCeldaVacia(celda1.x-2, celda1.y-2)){
		if(contador==2){
			document.getElementById((celda1.x-2)+"x"+(celda1.y-2)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	if(comprobarCeldaVacia(celda1.x-2, celda1.y+2)){
		if(contador==2){
			document.getElementById((celda1.x-2)+"x"+(celda1.y+2)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	if(comprobarCeldaVacia(celda1.x+2, celda1.y-2)){
		if(contador==2){
			document.getElementById((celda1.x+2)+"x"+(celda1.y-2)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	if(comprobarCeldaVacia(celda1.x+2, celda1.y+2)){
		if(contador==2){
			document.getElementById((celda1.x+2)+"x"+(celda1.y+2)).style.backgroundColor='#FFAE89';
		}
		movimiento = "true";
	}
	return;
}

function desmarcarCeldas(){
	document.getElementById(celda1.x+"x"+(celda1.y)).style.backgroundColor='#FFFFFF';

	if(contador == 2){
		if(comprobarCeldaVacia(celda1.x, celda1.y-3)){
			document.getElementById(celda1.x+"x"+(celda1.y-3)).style.backgroundColor='#FFFFFF';
		}
		if(comprobarCeldaVacia(celda1.x, celda1.y+3)){
			document.getElementById(celda1.x+"x"+(celda1.y+3)).style.backgroundColor='#FFFFFF';
		}
		if(comprobarCeldaVacia(celda1.x-3, celda1.y)){
			document.getElementById((celda1.x-3)+"x"+(celda1.y)).style.backgroundColor='#FFFFFF';
		}
		if(comprobarCeldaVacia(celda1.x+3, celda1.y)){
			document.getElementById((celda1.x+3)+"x"+(celda1.y)).style.backgroundColor='#FFFFFF';
		}
		if(comprobarCeldaVacia(celda1.x-2, celda1.y-2)){
			document.getElementById((celda1.x-2)+"x"+(celda1.y-2)).style.backgroundColor='#FFFFFF';
		}
		if(comprobarCeldaVacia(celda1.x-2, celda1.y+2)){
			document.getElementById((celda1.x-2)+"x"+(celda1.y+2)).style.backgroundColor='#FFFFFF';
		}
		if(comprobarCeldaVacia(celda1.x+2, celda1.y-2)){
			document.getElementById((celda1.x+2)+"x"+(celda1.y-2)).style.backgroundColor='#FFFFFF';
		}
		if(comprobarCeldaVacia(celda1.x+2, celda1.y+2)){
			document.getElementById((celda1.x+2)+"x"+(celda1.y+2)).style.backgroundColor='#FFFFFF';
		}
	}
	return;
}


function ponerFondoBlanco(){
	var elementos = document.getElementByClass.innerHTML;
	for (var i = 0; i < elementos.length; i++) {
		elementos.style.backgroundColor="white";
	};
}

function celda(x,y){
	this.x = x;
	this.y = y;
}

function cambiarCeldas(){
	celda1.x = celda2.x;
	celda1.y = celda2.y;
}


function stop(){
	clearInterval(cronometro);
}

function timer(){
	contador_s =01;
    contador_m =00;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");
 
    cronometro = setInterval(
        function(){
            if(contador_s==60){
                contador_s=00;
                contador_m++;
                
                if(contador_m<10){
                	m.innerHTML = "0"+contador_m;
                }else{
                	m.innerHTML = contador_m;
                }

                if(contador_m==60){
       	            contador_m=00;
                }
            }
 			if(contador_s<10){
 				s.innerHTML = "0"+contador_s;
 			}else{
 				s.innerHTML = contador_s;
 			}
           
            contador_s++;
 
        }
     ,1000);
}

