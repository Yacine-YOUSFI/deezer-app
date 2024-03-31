import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import { PlaylistComponent } from './playlist/playlist.component';
import { DataViewModule } from 'primeng/dataview';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    PlaylistDetailComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    DataViewModule,
    MatGridListModule,
    BrowserModule,
    CommonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
