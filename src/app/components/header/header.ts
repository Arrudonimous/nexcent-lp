import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'header-component',
  imports: [NgOptimizedImage, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
