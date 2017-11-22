import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {VideoComponent} from "./video.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':id', component: VideoComponent}
    ])
  ]
})
export class VideoModule {
}