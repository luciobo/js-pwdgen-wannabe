const userName = prompt("Inserisci il tuo nome");
const userSurame = prompt("Inserisci il tuo Cognome");
const userColor = prompt("Inserisci il tuo colore preferito");

const h2NomeUntente = document.getElementById ("nome_utente");

h2NomeUntente.innerHTML = (userName + "" + userSurame)

const paragrafo = document.getElementById ("paragrafo");

paragrafo.innerHTML = `${userName} ${userSurame} ${userColor} 21`




