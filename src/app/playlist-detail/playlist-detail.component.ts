import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { PlayListService } from '../services/playlis.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone: true,
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css'],
  imports: [MatToolbarModule, CommonModule, MatCardModule, MatGridListModule, HttpClientModule],
})
export class PlaylistDetailComponent implements OnInit {
  playlistId: string = '';
  playlistDetails: any | undefined;
  allData: any[] = [];
  pageSize: number = 6;
  loading: boolean = false;
  startIndex: number = 0;
  allDataLoaded: boolean = false;
  tracksLength: number = 0;

  constructor(private route: ActivatedRoute, private playListService: PlayListService) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playlistId = id !== null ? id : '';

    this.fetchPlaylistDetails(this.playlistId);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.allDataLoaded) {
      this.loadMore();
    }
  }

  /**
   * Load more data when scroll
   * 
   * @returns 
   */
  loadMore() {
    if (this.loading || this.allDataLoaded) {
      return;
    }

    this.loading = true;

    setTimeout(() => {
      for (let i = this.startIndex; i < this.startIndex + this.pageSize; i++) {
        if (i < this.tracksLength) {
          this.allData.push({ ...this.allData[i] });
        } else {
          this.allDataLoaded = true;
          break;
        }
      }
      this.startIndex += this.pageSize;
      this.loading = false;
    }, 1000);
  }

  /**
   * Function that allows to get detail of playlist
   * 
   * @param id 
   */
  fetchPlaylistDetails(id: string): void {
    this.playListService.getDetailsPlayList(id).subscribe({
      next: (playlist: any) => {
        this.playlistDetails = playlist ? playlist : [];
        this.allData = playlist?.tracks?.data;
        this.tracksLength = this.allData?.length;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  /**
   * Function that allows to get formatted date
   * 
   * @param duration 
   * @returns 
   */
  formatDuration(duration: number): string {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
