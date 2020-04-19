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

  test ('this should test for the persons time left on Earth', () => {
    expect(youngPerson.earthLifeExpectancy()).toEqual(37);
  });

  test ('this should test for the persons time left on Venus', () => {
    expect(youngPerson.venusLifeExpectancy()).toEqual(60);
  });

  test ('this should test for the persons time left on Mercury', () => {
    expect(youngPerson.mercuryLifeExpectancy()).toEqual(155);
  });

  test ('should test for the persons time left on Mars', () => {
    expect(youngPerson.marsLifeExpectancy()).toEqual(20);
  });

  test ('this should test for the persons time left on Jupiter', () => {
    expect(youngPerson.jupiterLifeExpectancy()).toEqual(4);
  });
});

// Tests for a person older than the Life Expectancy on each planet. //
describe ('User', () => {
  let elderlyPerson = new User(90);

  test ('this should test that the persons input is stored into the constructor as their age in Earth years', () => {
    expect(youngPerson.age).toEqual(0);
  });

  // test ('this should test for the persons age in Venus years', () => {
  //   youngPerson.calcVenus();
  //   expect(youngPerson.venusAge).toEqual(0);
  // });

  // test ('this should test for the persons age in Mercury years', () => {
  //   youngPerson.calcMercury();
  //   expect(youngPerson.mercuryAge).toEqual(0);
  // });

  // test ('this should test for the persons age in Mars years', () => {
  //   youngPerson.calcMars();
  //   expect(youngPerson.marsAge).toEqual(0);
  // });

  // test ('this should test for the persons age in Jupiter years', () => {
  //   youngPerson.calcJupiter();
  //   expect(youngPerson.jupiterAge).toEqual(0);
  // });

  // test ('this should test for the persons time left on Earth', () => {
  //   expect(youngPerson.earthLifeExpectancy()).toEqual(0);
  // });

  // test ('this should test for the persons time left on Venus', () => {
  //   expect(youngPerson.venusLifeExpectancy()).toEqual(0);
  // });

  // test ('this should test for the persons time left on Mercury', () => {
  //   expect(youngPerson.mercuryLifeExpectancy()).toEqual(0);
  // });

  // test ('should test for the persons time left on Mars', () => {
  //   expect(youngPerson.marsLifeExpectancy()).toEqual(0);
  // });

  // test ('this should test for the persons time left on Jupiter', () => {
  //   expect(youngPerson.jupiterLifeExpectancy()).toEqual(0);
  // });
});