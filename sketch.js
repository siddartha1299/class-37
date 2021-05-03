var canvas;
var gameState=0;
var database,form,game,player;
var playerCount;

function setup(){
cnavas=createCanvas(400,400);
database=firebase.database();
game=new Game();
game.getState();
game.start();



}
function draw(){
    if(playerCount===4){
game.update(1)

    }
if(gameState===1){
    clear();
    game.play();

}


}