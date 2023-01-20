import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  show: boolean = false;

  showMsg(): void{
    this.show = true; // !this.show; acao virse e versa: toggle

  }

}
