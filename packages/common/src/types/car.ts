type Car = {
  brand: string;
  model: string;
  engine: Car.Engine;
  paint: Car.Paint;
};

namespace Car {
  export type Engine = {
    size?: number;
    type: 'gasoline' | 'diesel' | 'electric';
  };

  export type Paint = {
    color: string;
    type: 'solid' | 'metallic' | 'pearlescent' | 'matte';
  };
}

export default Car;
