const ANCHO = 800;
const LARGO = 600;

let ship;
let balas = [];
let enemigos = [];
function setup() {
	createCanvas(ANCHO, LARGO);
	ship = new nave();
}

function draw() {
	background(0);
	if(ship.vida > 0){
		estrellas();
		ship.mostrar();
		ship.mover();
		addEnemy(enemigos);
		//mueve y muestra a los enemigos
		showE(enemigos);
		//Muestra y mueve a los abjetos bullet
		showB(balas);
		//Elimina objetos del array balas
		addScore(enemigos,balas,ship);
		deleteE(enemigos,balas);
		//condiciones del juego
		condiciones(ship,enemigos);
	}
	if(ship.vida == 0){
		fill(255);
		stroke(255);
		textAlign(CENTER);
		textSize(50);
		textFont('Impact');
		text('GAME OVER',ANCHO/2,LARGO/2);
		textSize(25);
		textAlign(CENTER);
		text('Score: ' + String(ship.score),ANCHO/2,(LARGO/2)+30);
	}
}

//Eventos del teclado
function keyPressed (){
	if(key === ' '){
		if(balas.length < 3){
			let bala = new bullet(ship.x3);
			balas.push(bala);
		}
	}
}
