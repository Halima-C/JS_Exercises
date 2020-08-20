// let number = prompt('Quel est votre nombre ?');

//     function factorial(number){
//         return (number != 1) ? number * factorial(number - 1) : 1;
//         return (number === 0) ? 1;
//     }
//     alert(factorial(number));

    let nbr = prompt("De quel nombre veux-tu calculer la factorielle ?");

function fact(nbr) {

  if (nbr === 0)
  {
     return 1;
  }
  return nbr * fact(nbr-1);
}

alert(fact(nbr));
console.log(fact(nbr));