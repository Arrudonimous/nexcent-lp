import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';
import { ClientsSection } from '../clients-section/clients-section';

@Component({
  selector: 'home',
  imports: [Navbar, Header, ClientsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
