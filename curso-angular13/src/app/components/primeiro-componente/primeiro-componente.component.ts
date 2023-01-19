import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  name: string = 'Priscila';
  age: number = 36;
  job = 'Programadora';
  hobbies = ['Correr', 'dormir', 'estudar'];
  car = {
    name: "Focus",
    year: 2023,
  };


}
