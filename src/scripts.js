export class Person {
  constructor(age) {
    this.age = age;
    this.earthAgeLimit = 72;
  }

  calcVenus() {
    this.venusAge = Math.floor(this.age/.62);
  }
}