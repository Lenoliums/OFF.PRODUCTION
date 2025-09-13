import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, first, map, Observable } from 'rxjs';
import { VideoItem } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  // public readonly BASE_URL = 'https://getfile.dokpub.com/yandex/get/';
  videos$ = new BehaviorSubject<VideoItem[]>([]);

  private currentIndexSubject = new BehaviorSubject<number>(0);
  private isOpenSubject = new BehaviorSubject<boolean>(false);

  currentIndex$ = this.currentIndexSubject.asObservable();
  isOpen$ = this.isOpenSubject.asObservable();

  currentVideo$: Observable<VideoItem | null> = combineLatest([
  this.currentIndex$,
  this.videos$,
]).pipe(
  map(([ind, videos]) => {
    if (ind === null || ind === undefined || ind < 0 || ind >= videos.length) {
      return null;
    }
    return {
      ...videos[ind]
    };
  })
);

  openVideo(videos: VideoItem[], currentIndex = 0) {
    this.videos$.next(videos);
    this.currentIndexSubject.next(currentIndex);
    this.isOpenSubject.next(true);
  }

  closeVideo() {
    this.isOpenSubject.next(false);
    this.videos$.next([]);
    this.currentIndexSubject.next(0);
  }

  nextVideo() {
    combineLatest([
      this.currentIndex$,
      this.videos$,
    ]).pipe(first()).subscribe(([ind, videos])=>{
      if(ind === videos.length-1){
        this.currentIndexSubject.next(0)
      }
      else {
        this.currentIndexSubject.next(ind + 1)
      }
    })
  }

  prevVideo() {
    combineLatest([
      this.currentIndex$,
      this.videos$,
    ]).pipe(first()).subscribe(([ind, videos])=>{
      if(ind === 0){
        this.currentIndexSubject.next(videos.length-1)
      }
      else {
        this.currentIndexSubject.next(ind - 1)
      }
    })
  }
}
