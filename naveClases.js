const GRID=5;
//Objetos de los distintos elementos del juego
//Nave
class nave {
//Atributos pertenecientes a la nave
	constructor(){
	this.x1 = (ANCHO/2)-30;
	this.y1 = LARGO-10;
	this.x2 = (ANCHO/2)+30;
	this.y2 = LARGO-10;
	this.x3 = (ANCHO/2);
	this.y3 = LARGO-60;
	this.xspeed = 6;
	this.vida = 3;
	this.score = 0;
	}
//Dibuja el triangualo
	mostrar(){
		stroke(102,0,51);
		strokeWeight(1);
		fill(51,0,25,100);
		triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
	}
//funcion encargarda de mover el triangulo
	mover(){
		if((keyIsDown(LEFT_ARROW)) && (this.x1 > 0)){
		this.x1 = this.x1 - this.xspeed;
		this.x2 = this.x2 - this.xspeed;
		this.x3 = this.x3 - this.xspeed;
		}
		if((keyIsDown(RIGHT_ARROW)) && (this.x2 < ANCHO)){
		this.x1 = this.x1 + this.xspeed;
		this.x2 = this.x2 + this.xspeed;
		this.x3 = this.x3 + this.xspeed;
		}
	}
}
//Bullets
class bullet{
//Atributos pertenecientes a los circulos
	constructor(xnave){
		this.xbullet = xnave;
		this.ybullet = LARGO-65;
		this.bspeed = 5;
		this.aux = 0;
		this.borrar = false;
	}
//Dibuja los circulos
	mostrarB(){
		stroke(204,0,0);
		strokeWeight(0.75)
		fill(153,0,0,50);
		ellipse(this.xbullet,this.ybullet,10);
	}
//Se encarga de mover los circulos
	disparar(){
		this.ybullet = this.ybullet - this.bspeed;
	}
}
//Enemigos

class enemy {
	constructor(initX,initY){
		this.x1enemy = initX;
		this.y1enemy = initY;
		this.x2enemy = initX+25;
		this.y2enemy = initY+25;
		this.x3enemy = initX+50;
		this.y3enemy = initY;
		this.x4enemy = initX+25;
		this.y4enemy = initY+50;
		this.espeed = 1.5;
	}
	mostrarE(){
		stroke(0,0,102);
		strokeWeight(1);
		fill(0,0,51,200);
		quad(this.x1enemy,this.y1enemy,this.x2enemy,this.y2enemy,this.x3enemy,this.y3enemy,this.x4enemy,this.y4enemy);
	}
	moverE(){
		this.y1enemy = this.y1enemy + this.espeed;
		this.y2enemy = this.y2enemy + this.espeed;
		this.y3enemy = this.y3enemy + this.espeed;
		this.y4enemy = this.y4enemy + this.espeed;
	}
}
