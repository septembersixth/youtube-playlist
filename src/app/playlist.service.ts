import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";

const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

@Injectable()
export class PlaylistService {

  public playlist$: Subject<any> = new ReplaySubject(1);;

  constructor(
    private httpClient: HttpClient
  ) {}

  load() {
    this.httpClient.get(url)
      .subscribe(playlist => {
        this.playlist$.next(playlist);
      });
  }

  getVideo(playlist, videoId) {
    return playlist.find(item => {
      return item.snippet.resourceId.videoId === videoId;
    });
  }

}