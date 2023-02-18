let canva = document.getElementById("canva");
let mario = document.getElementById("mario");
let bombe = document.getElementById("bombe");
let positionYBombe;
let intervalPositionBombe = setInterval(randomPosition, 1000);
let score = document.getElementById("score");
score.textContent = 0;
let hitValues = setInterval(hitbox, 5);



window.addEventListener("keydown", (event) => {
  // alert(event.key);
  if(event.key === "Enter"){
    // console.log(event.key);
    jumpInit();
    setTimeout(jumpClear, 700);
  }
})
function randomPosition(){
  positionYBombe = Math.floor(Math.random() * 50 + 1);
  bombe.style['bottom'] = `${positionYBombe}px`;
}
function jumpInit(){
  mario.style['animation'] = "jump .7s ease infinite";
}
function jumpClear(){
  mario.style['animation'] = "";
}
function hitbox(){
  let objectMario = window.getComputedStyle(mario, null);
  let objectBombe = window.getComputedStyle(bombe, null);
  let positionYMario = objectMario.getPropertyValue('bottom');
  let positionXBombe = objectBombe.getPropertyValue('left');
  let positionYBombe = objectBombe.getPropertyValue('bottom');
  let positionTopBombe = parseInt(positionYBombe.substring(0, positionYBombe.length - 2)) + 20;
  positionTopBombe = String(`${positionTopBombe}px`);
  let posXBombe = parseInt(positionXBombe.substring(0, positionXBombe.length - 2));
  console.log("Top Y bombe : " + positionTopBombe);
  console.log("x bombe : " + posXBombe);
  console.log("Y mario : " + positionYMario);
  if(posXBombe <= 50){
    score.textContent++;
  }

  if((posXBombe <= 35) 
  && positionYMario <= positionTopBombe){
    mario.style['display'] = "none";
    bombe.style['display'] = "none";
    bombe.style['animation'] = "";
    score = score.textContent;
    score = score - 1;
    alert(`Vous avez perdu !\nScore : ${score} pts !`);
    score = 0;
    window.location.reload();
    // clearInterval(randomPosition);
    // setTimeout(() => {
    //   mario.style['display'] = "inline";
    //   bombe.style['display'] = "inline";
    // }, 1000);
    // score = 0;
    // intervalPositionBombe = setInterval(randomPosition, 1000);
  }

}