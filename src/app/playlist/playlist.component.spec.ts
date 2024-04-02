import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistComponent } from './playlist.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayListService } from '../services/playlis.service';
import { PlaylistResponse } from '../models/PlaylistResponse';
import { of } from 'rxjs';

describe('PlaylistComponent', () => {
  let component: PlaylistComponent;
  let fixture: ComponentFixture<PlaylistComponent>;
  let playlistService: PlayListService;
  let playlistResponse: PlaylistResponse;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistComponent, HttpClientModule],
      providers: [PlayListService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistComponent);
    component = fixture.componentInstance;
    playlistService = TestBed.inject(PlayListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve playList from service', () => {
    spyOn(playlistService, 'getListPlayList').and.returnValue(of(playlistResponse));
    component.ngOnInit();
    expect(component.playlist).not.toBeNull();
  });
});
