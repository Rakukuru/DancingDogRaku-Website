import { afterNextRender, Component, computed, DestroyRef, inject, input, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sparkle',
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
    '[style.transform]': '"translateY(" + parallaxOffset() + "px)"',
  },
  imports: [],
  templateUrl: './sparkle.html',
  styleUrl: './sparkle.css',
})
export class Sparkle {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly scrollY = signal(0);

  size = input<number>(80);
  rotation = input<number>(0);
  color = input<string>('#ff8a00');
  strokeWidth = input<number>(3);
  scrollFactor = input<number>(0.75);

  parallaxOffset = computed(() => this.scrollY() * (1 - this.scrollFactor()));

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView;

      if (!window) {
        return;
      }

      const updateScrollPosition = () => this.scrollY.set(window.scrollY);
      updateScrollPosition();
      window.addEventListener('scroll', updateScrollPosition, { passive: true });

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', updateScrollPosition);
      });
    });
  }
}
