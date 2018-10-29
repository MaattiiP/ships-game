//funciones auxiliares
function interceptar(bala,enemigo){
  return (dist(bala.xbullet,bala.ybullet,enemigo.x2enemy,enemigo.y2enemy)<30);
}
function deleteE(enemigos,balas){
  for(let z = 0; z < balas.length; z++){
    for(let w = 0; w < enemigos.length;w++){
      if(interceptar(balas[z],enemigos[w])){
  			enemigos.splice(w,1);
        balas[z].borrar = true;
      }
    }
    if((balas[z].borrar)||(balas[z].ybullet < 0)){
      balas.splice(z,1);
    }
  }
}

function showE (enemigos){
  for(let e = 0; e < enemigos.length ; e++){
    enemigos[e].mostrarE();
    enemigos[e].moverE();
  }
}
function showB(balas){
  for(let i = 0; i < balas.length ;i++){
    balas[i].mostrarB();
    balas[i].disparar();
  }
}
function condiciones(nave,enemigos){
  for(let i = 0; i< enemigos.length; i++){
    if(enemigos[i].y4enemy > nave.y3){
        console.log(nave.vida);
        enemigos.splice(i,1);
        nave.vida = nave.vida - 1;
    }
  }
}

function addEnemy(enemigos){
  if(enemigos.length == 0){
  for(let w = 0; enemigos.length < 16;w++){
    let enemigo = new enemy(50 * w ,random(-1500,-50));
    enemigos.push(enemigo);
    }
  }
}

function estrellas(){
  for(let i = 0;i<50;i++){
    stroke(255);
    point(random(0,ANCHO),random(0,LARGO));
  }
}

function addScore(enemigos,balas,nave){
  for(let z = 0; z < balas.length; z++){
    for(let w = 0; w < enemigos.length;w++){
      if(interceptar(balas[z],enemigos[w])){
        nave.score = nave.score + 25;
        console.log(nave.score);
      }
    }
  }
}
