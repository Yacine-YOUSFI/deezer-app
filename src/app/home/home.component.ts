import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-playlist',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToPlaylists() {
    this.router.navigateByUrl('/playlists');
  }
}