import { Person } from './../src/scripts.js';

describe ('Person', () => {
  let youngPerson = new Person(35);

  test ('this should test that the persons input is stored into the constructor as their age in Earth years', () => {
    expect(youngPerson.age).toEqual(35);
  });
});