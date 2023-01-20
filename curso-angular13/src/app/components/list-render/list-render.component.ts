import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [

    {name: 'Turca', type: 'Dog', age:4},
    {name: 'Tom', type: 'Cat', age:6},
    {name: 'Frida', type: 'Dog', age:8},
    {name: 'Bob', type: 'Horse', age:2},
  ];
  animal: Animal = {
    name: 'Teste',
    type: 'alguma coisa',
    age: 10,
  }
  animalsDetails = '';

  showAge(animal:Animal){
    this.animalsDetails = `O Pet ${animal.name} tem ${animal.age} anos!`;
  }
}
