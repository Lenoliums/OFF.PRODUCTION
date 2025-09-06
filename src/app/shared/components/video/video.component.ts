import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { VideoService } from './services/video.service';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: 'video.component.html',
  styleUrls: ['video.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class VideoComponent implements OnDestroy {

  @ViewChild('videoWrapper') videoWrapper?: ElementRef;

  constructor(protected videoService: VideoService) {}

  closeVideo() {
    this.videoService.closeVideo();
  }

  ngOnDestroy() {
  }
}
