import {Component, OnDestroy, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {PlaylistService} from "../playlist.service";

@Component({
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.css']
})
export class VideoComponent implements OnInit, OnDestroy {

  videoId;
  videoUrl: SafeResourceUrl;
  video;
  sub;

  constructor(
    private playlistService: PlaylistService,
    private params: ActivatedRoute,
    private sanitizer: DomSanitizer
  ){}

  ngOnInit() {
    const id = this.params.snapshot.paramMap.get('id');
    const url = 'https://www.youtube.com/embed/' + id;
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(url);

    this.sub = this.playlistService.playlist$
      .subscribe(playlist => {
        this.video = this.playlistService.getVideo(playlist.items, id);
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}