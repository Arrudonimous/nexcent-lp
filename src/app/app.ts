import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'nexcent-lp';
}
