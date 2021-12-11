class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
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
      x+=80;
    }

    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    const lines = this.secretWord.length;
    this.context.beginPath();
    const letter = this.secretWord[index].toUpperCase()
    this.context.font = "30px Arial";
    

    let x = 400
    let y = 690

    for (let i=0; i <=lines-1; i++ ){
      if (i == index) {
        this.context.moveTo(x,y);
        this.context.fillText(letter,x+15, y);
      }
      x+=80;
    }

    this.context.stroke();
    this.context.closePath();

  }

  writeWrongLetter(letter, errorsLeft) {
    const letterPosition = 9 - errorsLeft
    const letterToWrite = letter.toUpperCase()
    this.context.beginPath();
    this.context.font = "30px Arial";
   
    
    let x = 700
    let y = 300

    for (let i=0; i <=9; i++ ){
      if (i == letterPosition) {
        this.context.moveTo(x,y);
        this.context.fillText(letterToWrite,x+15, y);
      }
      x+=50;
    }

    this.context.stroke();
    this.context.closePath();


  }

  drawHangman(errorsLeft) {
    const bodyPart = {
      9: "head",
      8: "body",
      7: "rightLeg",
      6: "leftLeg",
      5: "rightArm",
      4: "leftArm",
      3: "rightFoot",
      2: "leftFoot",
      1: "rightHand",
      0: "leftHand"
    }


    this.context.beginPath();

    if (bodyPart[errorsLeft] == "head"){
      this.context.arc(500, 280, 30, 0, Math.PI * 2);
    } else if (bodyPart[errorsLeft] == "body") {
      this.context.moveTo(500,310);
      this.context.lineTo(500,410);
    } else if (bodyPart[errorsLeft] == "rightLeg") {
      this.context.moveTo(500,410);
      this.context.lineTo(550,440);
    } else if (bodyPart[errorsLeft] == "leftLeg") {
      this.context.moveTo(500,410);
      this.context.lineTo(450,440);
    } else if (bodyPart[errorsLeft] == "rightArm") {
      this.context.moveTo(500,360);
      this.context.lineTo(550,330);
    } else if (bodyPart[errorsLeft] == "leftArm") {
      this.context.moveTo(500,360);
      this.context.lineTo(450,330);
    } else if (bodyPart[errorsLeft] == "rightFoot") {
      this.context.moveTo(550,440);
      this.context.lineTo(555,430);
    } else if (bodyPart[errorsLeft] == "leftFoot") {
      this.context.moveTo(450,440);
      this.context.lineTo(445,430);
    } else if (bodyPart[errorsLeft] == "rightHand") {
      this.context.moveTo(550,330);
      this.context.lineTo(550,320);
    } else if (bodyPart[errorsLeft] == "leftHand") {
      this.context.moveTo(450,330);
      this.context.lineTo(450,320);
    }




    this.context.stroke();
    this.context.closePath();
  }

  gameOver() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    const img = new Image();
    img.src = "../images/gameover.png";
    img.onload = () => {
      this.context.drawImage(img, 0, 0);
      };
  }

  winner() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    const img = new Image();
    img.src = "../images/awesome.png";
    img.onload = () => {
      this.context.drawImage(img, 0, 0);
      };
}
}