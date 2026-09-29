import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtWidget } from './yt-widget';

describe('YtWidget', () => {
  let component: YtWidget;
  let fixture: ComponentFixture<YtWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YtWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(YtWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
