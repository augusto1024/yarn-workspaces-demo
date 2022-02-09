import Car, { createCar, getCarColor } from '@yarn_workspaces_demo/common';

let car: Car;
car = createCar(
  'Tesla',
  'Model S',
  { type: 'electric' },
  { color: 'black', type: 'matte' }
);

console.log(getCarColor(car));
