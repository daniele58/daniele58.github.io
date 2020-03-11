var body = ['scemo/a', 'coglione/a', 'stuppagghiaro/a', 'una merdaccia', 'stronzo/a','cazzone/a', 'insensibile', 'incosciente', 'negligente', 'menomato', 'ritardato/a', 'giustificato per la 104', 'portatore di COVID-19', 'il paziente 0', 'stato a Bergamo', 'di Codogno', 'in quarantena', 'un/a fascialattughe', 'miserabile', 'maleducato/a];

var insult = '';

function rand(thing){
 return thing[Math.floor(Math.random() * thing.length)];
}



function myFunction(){
  insult = 'Sei ' + rand(body) + '!';
  document.getElementsByClassName("paragraph")[0].innerHTML = insult;
}
