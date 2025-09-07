import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TilingContent } from 'src/app/types';
import { VideoComponent } from '../video/video.component';
import { VideoService } from '../video/services/video.service';

@Component({
    selector: 'tiling',
    templateUrl: 'tiling.component.html',
    styleUrls: ['tiling.component.scss'],
    standalone: true,
    imports: [CommonModule],
})

export class TilingComponent implements OnInit {

    @Input() content: Array<TilingContent> = [];
    constructor(protected videoService: VideoService) { }

    chooseVideo(i: number){
        this.videoService.openVideo(this.content.map((el)=>({ title: el.title,
        video: el.video,
        partner: el.partner})), i)
    }

  protected delay(i: number): number {
    const width = window.innerWidth;

    if (width <= 650) {
      return 0;
    } else return (i % 2) * 200;
  }

    ngOnInit() { }
}