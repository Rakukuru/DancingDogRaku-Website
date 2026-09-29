import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sparkle } from './sparkle';

describe('Sparkle', () => {
  let component: Sparkle;
  let fixture: ComponentFixture<Sparkle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sparkle],
    }).compileComponents();

    fixture = TestBed.createComponent(Sparkle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
