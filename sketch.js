var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png", "Jake2.png","jake3.png","jake4.PNG","jake5.png" );
 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite (200, 600, 300, 600);
 path.addImage ("path.png", pathImg);
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=0.6;

//crie um sprite de menino
boy = createSprite (200, 400, 100, 100);
boy.addAnimation ("Jake1.png", "Jake2.png","jake3.png","jake4.PNG","jake5.png", boyImg);
//adicione uma animação de corrida para ele
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);

leftBoundary.visible = false;
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);

rightBoundary.visible = false;
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
   boy.collide(rightBoundary)
  boy.collide(leftBoundary)
  path.velocityY = 4;
 
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX;
  boy.y = World.mouseY;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 300 ){
    path.y = height/2;
  }
  
  drawSprites();
}
