import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlock } from './content-block';

describe('ContentBlock', () => {
  let component: ContentBlock;
  let fixture: ComponentFixture<ContentBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the decorator image matching the decorator ID', () => {
    fixture.componentRef.setInput('decorator', '3');
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('.decorator');

    expect(image.getAttribute('src')).toBe('decorators/border3.webp');
    expect(image.getAttribute('alt')).toBe('Futuristic title decorator 3');
  });
});
