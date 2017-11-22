import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {SnippetComponent} from "./snippet/snippet.component";
import {PlaylistService} from "./playlist.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnippetComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'video', loadChildren: './video/video.module#VideoModule'}
    ])
  ],
  providers: [PlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
