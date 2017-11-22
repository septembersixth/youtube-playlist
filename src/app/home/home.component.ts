import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlaylistService} from "../playlist.service";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  playlist;
  playlistSub;

  constructor(
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.playlistSub = this.playlistService.playlist$
      .subscribe(playlist => {
        this.playlist = playlist;
      })
  }

  ngOnDestroy() {
    if (this.playlistSub) {
      this.playlistSub.unsubscribe();
    }
  }
}