import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

const instagramUrl = 'https://www.instagram.com/dancingdograku/';

const instagramImages = [
  {
    src: 'manual-ig-thumbnails/nfc2025_3.jpg',
    alt: 'Pistacho and Rakukuru dancing together at Paws on Ice during NordicFuzzCon 2026',
    url: 'https://www.instagram.com/p/DZk9A1cEd6h/'
  },
  {
    src: 'manual-ig-thumbnails/EA2025.png',
    alt: 'Riluxoria kicking the air with their arms on the other side and wearing a galaxy lolita dress with dark blue lights on the stage. Photo from Enter the Arena 2025 in Eurofurence',
    url: 'https://www.instagram.com/reel/DUgR1CujMBD/'
  },
  {
    src: 'manual-ig-thumbnails/reborn.png',
    alt: 'Riluxoria pointing very cutely with the title of the song name "Metamo Re:born"',
    url: 'https://www.instagram.com/reel/DQPY1coDM8K/'
  },
  {
    src: 'manual-ig-thumbnails/kemonoRuckus.jpg',
    alt: 'A pastel background and a Ruckus sticker with the title of the song "I wanna be a kemono!"',
    url: 'https://www.instagram.com/reel/C_q7_QtKu93/'
  },
] as const;

@Component({
  selector: 'app-manual-ig-widget',
  imports: [NgOptimizedImage],
  templateUrl: './manual-ig-widget.html',
  styleUrl: './manual-ig-widget.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManualIgWidget {
  protected readonly images = instagramImages;
  protected readonly profileUrl = instagramUrl;
}
