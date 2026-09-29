import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavigationSidebar } from './navigation-sidebar';

describe('NavigationSidebar', () => {
  let component: NavigationSidebar;
  let fixture: ComponentFixture<NavigationSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSidebar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should collapse and restore the sidebar when toggled', () => {
    const toggle = fixture.nativeElement.querySelector('.sidebar-toggle') as HTMLButtonElement;

    expect(component.isSidebarCollapsed()).toBe(false);
    toggle.click();
    expect(component.isSidebarCollapsed()).toBe(true);
    toggle.click();
    expect(component.isSidebarCollapsed()).toBe(false);
  });
});
