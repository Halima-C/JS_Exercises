let diez="#";
var nb = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var x=0;
let espace=" ";
for(nb ; nb>=0 ; nb --){
    x++;
    console.log(espace.repeat(nb)+diez.repeat(x-1));
  }