import { Component, signal } from '@angular/core';
import { NavigationSidebar } from './navigation-sidebar/navigation-sidebar';
import { Footer } from './footer/footer';
import { RouterOutlet } from "@angular/router";
import { TopbarScroll } from "./topbar-scroll/topbar-scroll";

@Component({
  selector: 'app-root',
  imports: [NavigationSidebar, Footer, RouterOutlet, TopbarScroll],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MyWebsite');
}
