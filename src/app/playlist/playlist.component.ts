import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PlaylistResponse } from '../models/PlaylistResponse';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

  playlist: any[] = [];

  constructor(private router: Router,  private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PlaylistResponse>('http://localhost:8000/all').subscribe(response => {
      this.playlist = response.data;
    });
  }

  openPlaylistDetail(id: string) {
    this.router.navigate(['/playlist', id]);
  }

}
