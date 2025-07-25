import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';
import { ClientsSection } from '../clients-section/clients-section';
import { WhoItIsForSection } from '../who-it-is-for-section/who-it-is-for-section';
import { HighlightSection } from '../highlight-section/highlight-section';

@Component({
  selector: 'home',
  imports: [
    Navbar,
    Header,
    ClientsSection,
    WhoItIsForSection,
    HighlightSection
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

}
