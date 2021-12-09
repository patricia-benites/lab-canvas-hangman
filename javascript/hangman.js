class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    const randIndex = Math.floor(Math.random() * this.words.length)
    return this.words[randIndex];
  }

  checkIfLetter(keyCode) {
    if (keyCode >=65 && keyCode <=90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
   return this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    if (this.secretWord.contains(letter)) {
      this.guessedLetters.concat(letter);
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.contains(letter)) {
      this.errorsLeft-=1;
      if (!this.letters.includes(letter)){
        this.letters.push(letter);
      }
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    }
    return true;
  }

  checkWinner() {
    let userWord = this.guessedLetters.split('').sort();
    let pickedWord = this.secretWord.split('').sort();
    return JSON.stringify(userWord) === JSON.stringify(this.pickWord);
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
