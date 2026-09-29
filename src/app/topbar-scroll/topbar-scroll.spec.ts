import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarScroll } from './topbar-scroll';

describe('TopbarScroll', () => {
  let component: TopbarScroll;
  let fixture: ComponentFixture<TopbarScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarScroll],
    }).compileComponents();

    fixture = TestBed.createComponent(TopbarScroll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
