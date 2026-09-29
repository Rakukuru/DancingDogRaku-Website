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
});
