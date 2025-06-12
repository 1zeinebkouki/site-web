const citations = [
  { texte: "Le savoir est une arme.", auteur: "Nelson Mandela" },
  { texte: "La simplicité est la sophistication suprême.", auteur: "Leonardo da Vinci" },
  { texte: "Apprendre à coder, c'est apprendre à penser.", auteur: "Steve Jobs" }
];
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quotecompteur = document.getElementById("compteur");
const button = document.getElementById("new-quote");
let compteur = 0 
button.addEventListener("click", function() {
  const random = Math.floor(Math.random() * citations.length);
  quoteText.innerText = citations[random].texte;
  quoteAuthor.innerText = "- " + citations[random].auteur;
  compteur++;
  quotecompteur.innerText = "Compteur ="+ compteur;
});
console.log("hello")


