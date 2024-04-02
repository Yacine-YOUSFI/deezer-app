import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaylistDetailComponent } from './playlist-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PlayListService } from '../services/playlis.service';
import { of } from 'rxjs';

describe('PlaylistDetailComponent', () => {
  let component: PlaylistDetailComponent;
  let fixture: ComponentFixture<PlaylistDetailComponent>;
  let playlistService: PlayListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistDetailComponent, RouterTestingModule],
      providers: [PlayListService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistDetailComponent);
    component = fixture.componentInstance;
    playlistService = TestBed.inject(PlayListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve detail playList from service', () => {
    spyOn(playlistService, 'getDetailsPlayList').and.returnValue(of());
    component.fetchPlaylistDetails('276102231');
    expect(component.playlistDetails).not.toBeNull();
  });
});
