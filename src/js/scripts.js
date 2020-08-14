(function(){
  console.log('Hello World');

  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]

  // es6 class
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    get area() {
      return this.calcArea();
    }

    calcArea() {
      return this.height * this.width;
    }
  }
  const square = new Rectangle(10, 10);
  console.log(square.area); // 100

})();
