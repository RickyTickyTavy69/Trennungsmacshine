export default class Devision {
  constructor(options) {
    this.frase = options.frase;
    this.devisionWord = options.devisionWord;
    this.devideWhere = options.devideWhere;
    this.result = null;
    this.word = null;
    this.result1 = null;
    this.result2 = null;
  }

  devide() {
    if (this.frase.split(" ").indexOf(this.devisionWord) !== -1) {
      if (
        this.frase.split(" ").indexOf(this.devisionWord) === 0 ||
        this.frase.split(" ").indexOf(this.devisionWord) ===
          this.frase.split(" ").length - 1
      ) {
        this.word = "";
      } else {
        this.word = this.frase.slice(
          this.frase.indexOf(this.devisionWord),
          this.frase.indexOf(this.devisionWord) + this.devisionWord.length
        );
      }

      console.log(".............", this.word, this.frase);
    } else {
      return {
        message: "error",
        text: "Es ist ein Fehler aufgetreten. Biite überprüfen Sie Ihre Eingaben, Sie DAU",
      };
    }
    this.result = this.frase.split(` ${this.devisionWord} `);
    console.log("2", this.result);
    if (this.devideWhere === "danach") {
      this.result1 = `${this.result[0]} ${this.word}`;
      this.result2 = this.result[1];
    } else {
      this.result1 = this.result[0];
      this.result2 = `${this.word} ${this.result[1]}`;
    }

    return {
      message: "success",
      frase1: this.result1,
      frase2: this.result2,
    };
  }
}
