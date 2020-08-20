let diez="#";
// for(let count = 1; count <=nbetage; count++){
//     console.log(diez.repeat(count));
//   }
  

var nb = prompt("cb d'etage tu veux ");
var x=0;
let espace=" ";
for(nb ; nb>=0 ; nb --){
    x++;
    console.log(espace.repeat(nb)+diez.repeat(x));
  }