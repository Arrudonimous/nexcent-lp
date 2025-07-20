import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'highlight-section',
  imports: [NgOptimizedImage, Button],
  templateUrl: './highlight-section.html',
  styleUrl: './highlight-section.scss'
})
export class HighlightSection {
  @Input("image-src") imageSrc: string = ""
  @Input("title") title: string = ""
  @Input("text-content") textContent: string = ""
  @Input("btn-text") btnText: string = ""
}
