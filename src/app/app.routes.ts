import { Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'playlists', component: PlaylistComponent },
    { path: 'playlists/:id', component: PlaylistDetailComponent }
];
