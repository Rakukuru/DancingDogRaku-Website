import { Component } from '@angular/core';
import { Hero } from "../../hero/hero"
import { ContentBlock } from "../../content-block/content-block";
import { ManualIgWidget } from '../../manual-ig-widget/manual-ig-widget';
import { GalleryTv } from '../../gallery-tv/gallery-tv';
import { Sparkle } from '../../sparkle/sparkle/sparkle';
@Component({
  selector: 'app-main-page',
  imports: [Hero, ContentBlock,  ManualIgWidget, GalleryTv, Sparkle],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
