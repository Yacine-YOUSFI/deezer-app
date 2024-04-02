import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PlayListService } from '../services/playlis.service';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

  playlist: any[] = [];

  constructor(private router: Router,  private playListService: PlayListService) {}

  ngOnInit(): void {
    this.playListService.getListPlayList().subscribe({
      next: (datas: any) => {
        this.playlist = datas?.data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  openPlaylistDetail(id: string) {
    this.router.navigate(['/playlists', id]);
  }
}