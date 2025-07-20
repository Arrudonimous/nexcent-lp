import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';

@Component({
  selector: 'home',
  imports: [Navbar, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
