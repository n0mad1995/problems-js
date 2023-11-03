class Shape {
  area(): number {
    return 0;
  }
}
 class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

function sumOfAllAreas(...shapes: Shape[]): number {
  let totalArea = 0;
  for (const shape of shapes) {
    totalArea += shape.area();
  }
  return totalArea;
}

export { Shape, Rectangle, Circle, sumOfAllAreas };
