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
}