//selecting element
const player0active =document.querySelector('.player--0');
const player1active =document.querySelector('.player--1');
const score0El =document.querySelector('#score--0');
const score1El =document.querySelector('#score--1');
const diceEl =document.querySelector('.dice');
const btnnew =document.querySelector('.btn--new');
const btnroll =document.querySelector('.btn--roll');
const btnhold =document.querySelector('.btn--hold');
const current0score =document.querySelector('#current--1');
const current1score =document.querySelector('#current--0');

let scores,currentscore,activeplayer,playing;


const init = function(){
scores = [0,0];
currentscore = 0;
activeplayer =0;
 playing = true;

 score0El.textContent=0;
  score1El.textContent=0;
  current0score.textContent=0;
  current1score.textContent=0;

  diceEl.classList.add('hidden');
  player0active.classList.remove('player--winner');
  player1active.classList.remove('player--winner');
  player0active.classList.add('player--active');
  player1active.classList.remove('player--active');
};
init();

const switchplayer = function(){document.getElementById(`current--${activeplayer}`).textContent=0;
activeplayer = activeplayer=== 0 ? 1:0 ;
currentscore=0;
player0active.classList.toggle('player--active');
player1active.classList.toggle('player--active');

};
//starting conditions


//start dice functionality
btnroll.addEventListener('click',function(){
  if(playing){
  //1.generating random number
  const dice= Math.floor(Math.random()*6)+1;

  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src= `dice-${dice}.png`;
  //checked for rolled 1
  if (dice!==1) {
    //add dice current score
    currentscore+=dice;
    document.getElementById(`current--${activeplayer}`).textContent=currentscore;


  }else{
    //Switch to next player
    switchplayer();
  }

  }
});
btnhold.addEventListener('click',function(){
  if(playing){
  //add current score to active player
  scores[activeplayer] += currentscore;
  document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
  //check if player score is >=100
  if(scores[activeplayer]>=20){
    playing=false;
    diceEl.classList.add('hidden');
    //finish game
    document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active')
  }else{
    switchplayer();
  }
}


  //switch to next player
  
});
btnnew.addEventListener('click',init);
 