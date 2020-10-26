// Raccolta input
var surnames = ['Rossi', 'Verdi', 'Gialli'];
var userSurname = prompt("Inserisci il cognome");



// Elaborazione dati

// aggiungo elemento generato dall utente all array
surnames.push(userSurname);

// trasformo tutti gli elementi dell array in stringhe lower cased
var surnamesLowerCase = [];
for (var i = 0; i < surnames.length; i++){
  surnamesLowerCase.push(surnames[i].toLowerCase());
}

// ordino l'array di stringhe
surnamesLowerCase.sort();

// Stampo l'output dei dati che ho elaborato
var i = 0;
while( i < surnamesLowerCase.length ){

  // stampa l'elemento <li> nell'HTML
  var firstLetter = surnamesLowerCase[i].charAt(0);
  firstLetter = firstLetter.toUpperCase();
  var surnameWithUpperCapital = firstLetter + surnamesLowerCase[i].slice(1);
  document.getElementById('list').innerHTML += '<li>'+surnameWithUpperCapital+'</li>';

  // memorizza l'indice della stringa inserita dall'utente nell'array ordinato
  if( surnamesLowerCase[i] == userSurname.toLowerCase() ){
    document.getElementById('position').innerHTML = i + 1;
  }

  i++;
}
