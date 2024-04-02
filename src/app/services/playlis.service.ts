import { HttpClient } from '@angular/common/http';
import { PlaylistResponse } from '../models/PlaylistResponse';
import { Injectable } from '@angular/core';

const baseUrl = 'http://127.0.0.1:8000/playlists'

@Injectable({
    providedIn: 'root',
})
export class PlayListService {
  constructor(private http: HttpClient) {}

  getListPlayList() {
    return this.http.get<PlaylistResponse>(baseUrl);
  }

  getDetailsPlayList(id: string) {
    return this.http.get<any>(`${baseUrl}/${id}`);
  }
}
