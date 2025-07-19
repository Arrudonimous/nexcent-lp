import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'navbar',
  imports: [NgOptimizedImage, Button],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  standalone: true
})
export class Navbar {

}
