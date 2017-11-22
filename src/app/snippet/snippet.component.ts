import {Component, Inject, OnInit, Optional} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";
import {APP_BASE_HREF} from "@angular/common";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public message: string;
  public data;

  constructor(
    private httpClient: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {}

  ngOnInit() {
    this.message = 'Hello';

    let url =
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';
    this.httpClient
      .get(url)
      .subscribe(data => {
        this.data = data;
      });


    this.httpClient
      .get('http://localhost:3000/stats/language/dutch')
      .subscribe(data => {
        console.log(data);
      });
  }
}