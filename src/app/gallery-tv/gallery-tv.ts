import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { galleryImages } from '../../../public/gallery-images';

@Component({
  selector: 'app-gallery-tv',
  imports: [NgbCarouselModule],
  templateUrl: './gallery-tv.html',
  styleUrl: './gallery-tv.css',
})
export class GalleryTv {
  protected readonly images = galleryImages;

  protected lightboxVisible = false;
  protected selectedImageIndex = 0;

  @ViewChild('galleryCarousel') protected readonly galleryCarousel?: NgbCarousel;

  protected get currentImage() {
    return this.images[this.selectedImageIndex];
  }

  protected goPrev(): void {
    this.galleryCarousel?.prev();
  }

  protected goNext(): void {
    this.galleryCarousel?.next();
  }

  protected openLightbox(index: number): void {
    this.selectedImageIndex = index;
    this.lightboxVisible = true;
  }

  protected closeLightbox(): void {
    this.lightboxVisible = false;
  }

  protected lightboxPrev(event: Event): void {
    event.stopPropagation();
    this.selectedImageIndex = (this.selectedImageIndex + this.images.length - 1) % this.images.length;
  }

  protected lightboxNext(event: Event): void {
    event.stopPropagation();
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.images.length;
  }
}
