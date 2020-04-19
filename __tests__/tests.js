import { Person } from './../src/scripts.js';

describe ('Person', () => {
  let youngPerson = new Person(35);

  test ('this should test that the persons input is stored into the constructor as their age in Earth years', () => {
    expect(youngPerson.age).toEqual(35);
  });

  test ('this should test for the persons age in Venus years', () => {
    youngPerson.calcVenus();
    expect(youngPerson.venusAge).toEqual(56);
  });

  test ('this should test for the persons age in Mercury years', () => {
    youngPerson.calcMercury();
    expect(youngPerson.mercuryAge).toEqual(145);
  });

  test ('this should test for the persons age in Mars years', () => {
    youngPerson.calcMars();
    expect(youngPerson.marsAge).toEqual(18);
  });

  test ('this should test for the persons age in Jupiter years', () => {
    youngPerson.calcJupiter();
    expect(youngPerson.jupiterAge).toEqual(2);
  });

  test ('this should test for the users time left on Earth', () => {
    expect();
  });
});