class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.beginPath();
    this.context.moveTo(100,700);
    this.context.lineTo(300,700);
    this.context.lineTo(200,650);
    this.context.lineTo(100,700);
    this.context.moveTo(200,650);
    this.context.lineTo(200,200);
    this.context.lineTo(500,200);
    this.context.lineTo(500,250);
    this.context.stroke();
    this.context.closePath();
  }

  drawLines() {
    const lines = this.secretWord.length;
    this.context.beginPath();

    let x = 400
    let y = 700

    for (let i=1; i <=lines; i++ ){
      this.context.moveTo(x,y);
      this.context.lineTo(x+50, y);
      x+=100;
    }

    this.context.stroke();
    this.context.cloasePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
