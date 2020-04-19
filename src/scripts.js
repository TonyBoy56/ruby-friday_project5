export class Person {
  constructor(age) {
    this.age = age;
    this.earthAgeLimit = 72;
  }

  calcVenus() {
    this.venusAge = Math.floor(this.age/.62);
  }

  calcMercury() {
    this.mercuryAge = Math.floor(this.age/.24);
  }

  calcMars() {
    this.marsAge = Math.floor(this.age/1.88);
  }

  calcJupiter() {
    this.jupiterAge = Math.floor(this.age/11.86);
  }
  
  earthLifeExpectancy() {
    let timeLeft;
    if (this.age === this.earthAgeLimit) {
      timeLeft = (this.age - this.earthAgeLimit);
    } else if (this.age > this.earthAgeLimit) {
      timeLeft = (this.age - this.earthAgeLimit);
    } else if (this.age < this.earthAgeLimit) {
      timeLeft = (this.earthAgeLimit - this.age);
    }
    return timeLeft;
  }

  venusLifeExpectancy() {
    const planetLE = 116;
    let timeLeft;
    if (this.venusAge === planetLE) {
      timeLeft = (this.venusAge - planetLE);
    } else if (this.venusAge > planetLE) {
      timeLeft = (this.venusAge - planetLE);
    } else if (this.venusAge < planetLE) {
      timeLeft = (planetLE - this.venusAge);
    }
    return timeLeft;
  }
  
  mercuryLifeExpectancy() {
    const planetLE = 300;
    let timeLeft;
    if (this.mercuryAge === planetLE) {
      timeLeft = (this.mercuryAge - planetLE);
    } else if (this.mercuryAge > planetLE) {
      timeLeft = (this.mercuryAge - planetLE);
    } else if (this.mercuryAge < planetLE) {
      timeLeft = (planetLE - this.mercuryAge);
    }
    return timeLeft;
  }

  marsLifeExpectancy() {
    const planetLE = 38;
    let timeLeft;
    if (this.marsAge === planetLE) {
      timeLeft = (this.marsAge - planetLE);
    } else if (this.marsAge > planetLE) {
      timeLeft = (this.marsAge - planetLE);
    } else if (this.marsAge < planetLE) {
      timeLeft = (planetLE - this.marsAge);
    }
    return timeLeft;
  }

  jupiterLifeExpectancy() {
    const planetLE = 6;
    let timeLeft;
    if (this.jupiterAge === planetLE) {
      timeLeft = (this.jupiterAge - planetLE);
    } else if (this.jupiterAge > planetLE) {
      timeLeft = (this.jupiterAge - planetLE);
    } else if (this.jupiterAge < planetLE) {
      timeLeft = (planetLE - this.jupiterAge);
    }
    return timeLeft;
  }
}