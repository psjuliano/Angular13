import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Juliano';
  userData = {
    email: 'psouzajuliano@gmail.com',
    role: 'admin'
  };

  
  title = 'curso-angular13';
}
