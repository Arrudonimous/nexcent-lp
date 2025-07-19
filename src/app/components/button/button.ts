import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type Variants = "primary" | "secondary"
type Sizes = "small" | "medium"

@Component({
  selector: 'btn',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input("btn-text") btnText = "Button"
  @Input("variant") variant: Variants = "primary"
  @Input("size") size: Sizes = "medium"
}
