import { Component, OnInit, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation-sidebar',
  imports: [RouterLink], //RouterLink used in HTML for swapping pages without having to reload
  templateUrl: './navigation-sidebar.html',
  styleUrl: './navigation-sidebar.css',
})
export class NavigationSidebar implements OnInit {
  isDarkMode = false;
  isSidebarCollapsed = signal(false);

   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    //Check if we are in a browser, otherwise, we cannot use window.innerwidth, nor localStorage.getItem
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.isSidebarCollapsed.set(window.innerWidth < 978);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkMode();
    }
  }

  toggleTheme(): void {
    this.isDarkMode ? this.enableLightMode() : this.enableDarkMode();
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed.update((isCollapsed) => !isCollapsed);
  }

  private enableDarkMode(): void {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    this.isDarkMode = true;
  }

  private enableLightMode(): void {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    this.isDarkMode = false;
  }
}
