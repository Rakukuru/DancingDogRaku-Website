import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTv } from './gallery-tv';

describe('GalleryTv', () => {
  let component: GalleryTv;
  let fixture: ComponentFixture<GalleryTv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryTv],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryTv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
