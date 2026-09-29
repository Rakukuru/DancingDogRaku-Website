import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink], //RouterLink used in HTML for swapping pages without having to reload
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {}
