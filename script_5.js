const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

const cloneBooks = JSON.parse(JSON.stringify(books)); //je clone le JSON afin que les modifications faites n'alterent pas l'original


console.log("Question 1, tous les livres ont-t-ils été emprutés au moins une fois ?")
const resultat = books.find( numero => numero.rended === 0);
console.log("nous cherchons si la valeur de render est égale à 0 dans un cas, si tous les livres ont été empruntés, cette valeur renvoie un resultat indéfini :" + resultat);




console.log ("Voici le livre qui a été le plus emprunté")
let arr2 = cloneBooks.sort(function(a, b) { 
  return  b.rented - a.rented; 
});
console.log(arr2.shift(0))



console.log ("Voici le livre qui a été le moins emprunté")
let arr = cloneBooks.sort(function(a, b) { 
  return  a.rented - b.rented; //return  b.rented - a.rented; pour du plus grand au plus petit
});
console.log(arr.shift(0))


console.log ("Voici le livre dont l'id est 873495")
const resultat2 = books.find( numero => numero.id === 873495);
console.log(resultat2);

console.log ("Trouvons le livre dont l'id est 133712")
const resultat3 = books.find( numero => numero.id === 133712);
console.log(resultat3);
console.log("regarde, il est présent dans la liste !")
console.log(books)
console.log ("Maintenant, supprimons le de la liste !")
const resultat4 = books.shift( numero => numero.id === 133712);
console.log(books);

console.log("Voici la liste triée sans le livre précédemment supprimé")
for(var i=0; i<books.length; i++) {
        console.log(books[i].title);
    }

