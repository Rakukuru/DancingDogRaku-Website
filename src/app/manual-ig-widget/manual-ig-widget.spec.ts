import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualIgWidget } from './manual-ig-widget';

describe('ManualIgWidget', () => {
  let component: ManualIgWidget;
  let fixture: ComponentFixture<ManualIgWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualIgWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(ManualIgWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
