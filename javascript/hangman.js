class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[0];
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
   return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    if (this.secretWord.includes(letter)) {
      this.guessedLetters = this.guessedLetters.concat(letter);
      this.letters.push(letter);
    }
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
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
    let userWord = [... new Set(this.guessedLetters.split('').sort())];
    let pickedWord = [... new Set(this.secretWord.split('').sort())];
    return JSON.stringify(userWord) === JSON.stringify(pickedWord);
  }
}

let hangman;


const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
    
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // console.log(event);
  const keyCode = event.keyCode;
  const letter = event.key;
  if (hangman.checkIfLetter(keyCode) && hangman.checkClickedLetters(letter)) {
    hangman.addWrongLetter(letter);
    hangman.addCorrectLetter(letter);

    if (letter === hangman.guessedLetters.slice(-1)) {
      let letterIndexes = [];
      const word = hangman.secretWord;
     
      for(let i=0; i<word.length;i++) {
          if (word[i] === letter) letterIndexes.push(i);
      }

      for (index of letterIndexes){
        hangmanCanvas.writeCorrectLetter(index);
      }

      if (hangman.checkWinner()) {
        hangmanCanvas.winner();
      }
       
    } else {
      const errorsLeft = hangman.errorsLeft;
      hangmanCanvas.writeWrongLetter(letter, errorsLeft);
      hangmanCanvas.drawHangman(errorsLeft);

      if (hangman.checkGameOver()) {
        hangmanCanvas.gameOver();

      }
    }
  }
  
});
