import $ from 'jquery';
import { square as sq } from './modules/shape.js';

sq(100);
console.log('Hello World!');

const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));

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
console.log(square.area);

$('body').css('background', '#aaa');