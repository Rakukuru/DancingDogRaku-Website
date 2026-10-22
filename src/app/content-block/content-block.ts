import { Component, computed, input } from '@angular/core';
import { decorators } from '../../../public/decorators';

@Component({
  selector: 'app-content-block',
  imports: [],
  templateUrl: './content-block.html',
  styleUrl: './content-block.css',
})
export class ContentBlock {
  title = input.required<string>();
  decorator = input<'1' | '2' | '3' | '4'>('1');
  decoratorImage = computed(() =>
    decorators.find(({ id }) => id === Number(this.decorator())),
  );
  image = input<string>();
  altText = input<string>();
  imagePosition = input<'left' | 'right'>('right');
}
