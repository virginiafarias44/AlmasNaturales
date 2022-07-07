function menuH() {
	var botonH = document.getElementById('botonera')
	if (botonH.style.display=='none') {
		botonH.style.display='block'
	} else {
		botonH.style.display='none'
	}
}

function ocultarB(){
	var menuHam = document.getElementById('menu_h')
	var botonera = document.getElementById('botonera')
	if (menuHam.style.display == 'block'){
		botonera.style.display ='none'
	}
}

function promoON(caja, txt){
	var texto = document.getElementById(txt)
	texto.style.opacity = '1'
	var cajas = document.getElementById(caja)
	cajas.style.opacity = '0.4'
}
function promoOF(cajas, txts){
	var textos = document.getElementById(txts)
	textos.style.opacity = '0'
	var div = document.getElementById(cajas)
	div.style.opacity = '1'
}