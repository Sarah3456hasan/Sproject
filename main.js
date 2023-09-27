const gametype=`awesome`;
alert(`lets make ${gametype}games!`);
const myguess =Math.floor(Math.random()*20)+1;
let guesses=0;
let guess;
  while (guess!==myguess){
  guess=parseInt(prompt(`WHAT NUMBER AM I THINKING OF ?`),10);
  guesses++;
  if (guess<myguess) {
       alert(`higher.`); }
   else if (guess>myguess) {
       alert (`lower.`);}
}
  alert(`well done! you got it in ${guesses}!`);