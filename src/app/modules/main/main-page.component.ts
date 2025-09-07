import { Component } from '@angular/core';
import { PatnersMarqueeComponent } from './components/partners-marquee/patners-marquee.component';
import { TilingComponent } from '../../shared/components/tiling/tiling.component';
import { DataSourceService } from 'src/app/services/datasource.service';
import { RouterModule } from '@angular/router';
import { YmNavigationGoalService } from 'src/app/shared/services/yandex-metrica/utils/ym-navigation-goal.service';
import { VideoService } from 'src/app/shared/components/video/services/video.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingPlaceholderComponent } from './components/placeholder/placeholder.component';


@Component({
    selector: 'main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.scss'],
    standalone: true,
    imports: [PatnersMarqueeComponent, TilingComponent, RouterModule, CommonModule, LoadingPlaceholderComponent],
    providers: [DataSourceService, YmNavigationGoalService]
})

export class MainPageComponent {
    protected isLoaded$ = new BehaviorSubject<boolean>(false);
    protected isPreviewPlayed$ = new BehaviorSubject<boolean>(false);


    constructor(protected dataService: DataSourceService, protected videoService: VideoService) { }

    openVideo(){
        this.videoService.openVideo([this.dataService.showReel])
    }

    finishLoading(){
        this.isLoaded$.next(true);
        console.log('pupupup');
    }

    onTypingFinished() {
        this.isPreviewPlayed$.next(true);
    }
}