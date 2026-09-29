import { Component, input } from '@angular/core';

@Component({
  selector: 'app-content-block',
  imports: [],
  templateUrl: './content-block.html',
  styleUrl: './content-block.css',
})
export class ContentBlock {
  title = input.required<string>();
  decorator = input<'1' | '2' | '3' | '4'>('1');
  image = input<string>();
  imagePosition = input<'left' | 'right'>('right');
}
