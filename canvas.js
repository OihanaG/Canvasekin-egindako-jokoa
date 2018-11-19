document.addEventListener("keydown", function(e){

	if(e.keyCode == "39"){
		moverDerecha();
	}

	if(e.keyCode == "37"){
		moverIzquierda();
	}

	if(e.keyCode == "38"){
		moverArriba();
	}
	if(e.keyCode == "40"){
		moverAbajo();
	}
})

var objetua;


var ancho = 1200;
var alto = 900;

var canvas, ctx;

function inicializa(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
}

function dibujaObjetua(){
	objetua = new Image();
	objetua.src = 'img/character' + num + '.png';
	ctx.drawImage(objetua, 0,0, 400, 532, x, y, 50, 60);
}

function borraCanvas(){
	canvas.width = ancho;
	canvas.height = alto;
}

var radiobola= 10;
var xbola= Math.random() * 1150;
var ybola= Math.random() * 850;

function dibujaBola(){

	ctx.beginPath(); 
	ctx.arc(xbola, ybola, radiobola, 0, Math.PI*2, false);
	ctx.fillStyle = '#1ABC9C';
	ctx.strokeStyle = "#1ABC9C";
	ctx.stroke();
	ctx.fill();
}

	var xrojo = Math.random() * 1000;
	var yrojo = Math.random() * 700;

function dibujaRojo(){
	ctx.beginPath(); 
	ctx.arc(xrojo, yrojo, 20, 0, Math.PI*2, false);
	ctx.fillStyle = '#F44336';
	ctx.strokeStyle = "#F44336";
	ctx.stroke();
	ctx.fill();
}

	var xrojo2 = Math.random() * 1000;
	var yrojo2 = Math.random() * 700;
function dibujaGorria(){
	ctx.beginPath(); 
	ctx.arc(xrojo2, yrojo2, 20, 0, Math.PI*2, false);
	ctx.fillStyle = '#F44336';
	ctx.strokeStyle = "#F44336";
	ctx.stroke();
	ctx.fill();
}
	var xrojo3 = Math.random() * 1000;
	var yrojo3 = Math.random() * 700;
function dibujaGorria2(){
	ctx.beginPath(); 
	ctx.arc(xrojo3, yrojo3, 20, 0, Math.PI*2, false);
	ctx.fillStyle = '#F44336';
	ctx.strokeStyle = "#F44336";
	ctx.stroke();
	ctx.fill();
}

var FPS = 20;
setInterval(function(){
	principal();
},1000/20);

function principal(){
	borraCanvas();
	ctx.fillStyle = '#D0D3D4';
	ctx.fillRect(0, 0, 1200, 900);	
	dibujaObjetua();
	dibujaBola();
	dibujaRojo();
	movimientoRojo();
	bolaikutu();
	gorriaikutu();
	if(punt >= 10)
		{
			dibujaGorria();
		}
	if(punt >= 20)
		{
			dibujaGorria2();
		}
	ctx.font = "bold 32px Arial";
	ctx.fillStyle="#5B2C6F";
	ctx.fillText("Puntuazioa " + punt,900,50);
}


var punt=0;
function bolaikutu(){
	if (x-xbola<10 && x-xbola >-60 && y-ybola<10 && y-ybola>-70){
		xbola= Math.random() * 1150;
		ybola= Math.random() * 850;
		dibujaBola();
		punt++;
		if(punt== 5 || punt == 10 || punt == 15)
		{
			bolaabiadura();
		}
		if(punt==20)
		{
			bolaabiadura2();
		}
	}
}

function bolaabiadura(){
	if(dx<0){
		dx-=3;
	}
	else{
		dx+=3;
	}
	if(dy<0){
		dy-=3;
	}
	else{
		dy+=3;
	}
}

function bolaabiadura2(){
	if(dx2<0){
		dx2-=5;
	}
	else{
		dx2+=5;
	}
	if(dy2<0){
		dy2-=5;
	}
	else{
		dy2+=5;
	}
}

function gorriaikutu(){
	if(x-xrojo<20 && x-xrojo >-50 && y-yrojo<20 && y-yrojo>-60){
		alert("Galdu egin duzu");
	}
	if(punt>=10)
	{
		if(x-xrojo2<20 && x-xrojo2 >-50 && y-yrojo2<20 && y-yrojo2>-60){
			alert("Galdu egin duzu");
		}
	}
	if(punt>=20){
		if(x-xrojo3<20 && x-xrojo3 >-50 && y-yrojo3<20 && y-yrojo3>-60){
			alert("Galdu egin duzu");
		}
	}
}

var dx=15;
var dy=15;
var dx2=15;
var dy2=15;
var dx3=15;
var dy3=15;

function movimientoRojo(){
	if ( xrojo + 20 > 1200  || xrojo - 20 < 0) {
		dx= -dx;
	}
	if ( yrojo + 20 > 900  || yrojo - 20 < 0) {
		dy= -dy;
	}
	xrojo += dx;
	yrojo += dy;

	if ( xrojo2 + 20 > 1200  || xrojo2 - 20 < 0) {
		dx2= -dx2;
	}
	if ( yrojo2 + 20 > 900  || yrojo2 - 20 < 0) {
		dy2= -dy2;
	}
	xrojo2 += dx2;
	yrojo2 += dy2;

	if ( xrojo3 + 20 > 1200  || xrojo3 - 20 < 0) {
		dx3= -dx3;
	}
	if ( yrojo3 + 20 > 900  || yrojo3 - 20 < 0) {
		dy3= -dy3;
	}
	xrojo3 += dx3;
	yrojo3 += dy3;
}


var num =1;

var x=0;
var y=0;
var velocidad=10;

function moverDerecha(){
	if(num==16 || num>=16){
		num = 13;
	}
	num+=1;
	x += velocidad;
	if (x>1160){
		x-=velocidad;
	}
}

function moverIzquierda(){
	if(num==12 || num>=12){
		num = 9;
	}
	num+=1;
	x -= velocidad;
	if (x<-10){
		x+=velocidad;
	}
}
function moverArriba(){
	if(num==8 || num>=8){
		num = 5;
	}
	num+=1;
	y -= velocidad;
	if (y<-10){
		y+=velocidad;
	}
}
function moverAbajo(){
	if(num==4 || num>4){
		num = 1;
	}
	num+=1;
	y += velocidad;
	if (y>850){
		y-=velocidad;
	}
}