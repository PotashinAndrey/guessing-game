class GuessingGame {
    constructor() {
        this.minimum = null;
        this.maximum = null;
        this.guessingRange = null;
    }

    setRange(min, max) {
        this.maximum = max;
        this.minimum = min;
    }

    guess() {
        this.guessingRange = Math.ceil((this.maximum + this.minimum)/2);
        return this.guessingRange;
    }

    lower() {
        this.maximum = this.guessingRange;
    }

    greater() {
        this.minimum = this.guessingRange;
    }
}

module.exports = GuessingGame;
