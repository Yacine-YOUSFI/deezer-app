import { Routes } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';

export const routes: Routes = [
    { path: 'playlist', component: PlaylistComponent },
    { path: 'playlist/:id', component: PlaylistDetailComponent }
];
