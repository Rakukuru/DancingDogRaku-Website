import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonasPage } from './sonas-page';

describe('SonasPage', () => {
  let component: SonasPage;
  let fixture: ComponentFixture<SonasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SonasPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SonasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
