import Car from './types';

export const createCar = (brand: string, model: string, engine: Car.Engine, paint: Car.Paint): Car => ({
  brand,
  model,
  engine,
  paint
});

export const getCarColor = ({ brand, model, paint: { color, type } }: Car): string =>
  `This ${brand} ${model} is ${type} ${color}`;

export { default } from './types';
