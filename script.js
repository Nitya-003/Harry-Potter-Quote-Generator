const quotes = [
  { quote: "It is our choices, Harry, that show what we truly are.", character: "Dumbledore" },
  { quote: "Happiness can be found even in the darkest of times.", character: "Dumbledore" },
  { quote: "I solemnly swear that I am up to no good.", character: "Harry Potter" },
  { quote: "Fear of a name increases fear of the thing itself.", character: "Hermione" },
  { quote: "Always.", character: "Snape" },
  { quote: "Not my daughter, you bitch!", character: "Molly Weasley" },
  { quote: "You’re just as sane as I am.", character: "Luna Lovegood" },
  { quote: "We’ve all got both light and dark inside us.", character: "Sirius Black" },
  { quote: "Books! And cleverness! There are more important things.", character: "Hermione" },
  { quote: "Don't let the muggles get you down.", character: "Ron Weasley" },
  { quote: "You're a wizard, Harry.", character: "Hagrid" },
  { quote: "The world isn't split into good people and Death Eaters.", character: "Sirius Black" },
  { quote: "Anything’s possible if you’ve got enough nerve.", character: "Ginny Weasley" },
  { quote: "To the well-organized mind, death is but the next great adventure.", character: "Dumbledore" },
  { quote: "You're just like your father. Lazy and arrogant.", character: "Snape" },
  { quote: "Working hard is important. But believing in yourself matters more.", character: "Harry Potter" },
  { quote: "You’ll stay with me? Until the very end.", character: "Harry Potter" },
  { quote: "I can teach you how to bottle fame and brew glory.", character: "Snape" },
  { quote: "Wit beyond measure is man's greatest treasure.", character: "Luna Lovegood" },
  { quote: "I love magic.", character: "Harry Potter" },
  { quote: "Let us step into the night and pursue that flighty temptress, adventure.", character: "Dumbledore" }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const q = quotes[random];
  document.getElementById("quote").innerText = q.quote;
  document.getElementById("character").innerText = `— ${q.character}`;
}
