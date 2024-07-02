let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false){
  console.log("Game Started !!");
  started=true;

  levelUp();
}
});

function gameFlash(btn){
  btn.classList.add("Flash");
  setTimeout( function(){
   btn.classList.remove("Flash");
  },250);
}

function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout( function(){
   btn.classList.remove("userFlash");
  },250);
}

function levelUp(){
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;

  let randomIdx=Math.floor(Math.random()*3);
  randomColor=btns[randomIdx];
  let randomBtn=document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randomBtn);
}

function checkAns(idx){
//  let idx=level-1;

  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
    console.log("same value");
  }else{
    h2.innerHTML=`Game over ! Your Score was <b>${level}</b> Press any key to start`;
  }
}
function btnPress(){
  console.log(this);
  let btn=this;
  userFlash(btn);

  userColor=btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnPress);
  
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}