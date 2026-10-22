import { Component } from '@angular/core';
import { ContentBlock } from "../../content-block/content-block";
import { drawings } from '../../../../public/drawings';
import { galleryImages } from '../../../../public/gallery-images';
@Component({
  selector: 'app-sonas-page',
  imports: [ContentBlock],
  templateUrl: './sonas-page.html',
  styleUrl: './sonas-page.css',
})
export class SonasPage {
  rakuCsheet = drawings[0];
  riluxCsheet = drawings[1];
  riluxPhoto = galleryImages[4]
  ruckusCsheet = drawings[2];
  ruckusPhoto = galleryImages[7]
}
