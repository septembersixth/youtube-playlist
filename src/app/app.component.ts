import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlaylistService} from "./playlist.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  sub;

  constructor(
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    this.sub = this.playlistService.load();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
