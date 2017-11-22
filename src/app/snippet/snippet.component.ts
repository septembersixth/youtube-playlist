import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'snippet',
  templateUrl: 'snippet.component.html',
  styleUrls: ['snippet.component.css']
})
export class SnippetComponent implements OnInit {

  @Input() detail;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  goVideo(videoId) {
    this.router.navigate([`/video/${videoId}`]);
  }
}