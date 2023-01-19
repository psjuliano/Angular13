import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PrimeiroComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
