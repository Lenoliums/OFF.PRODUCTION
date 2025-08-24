import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PatnersMarqueeComponent } from './components/partners-marquee/patners-marquee.component';
import { TilingComponent } from '../tiling/tiling.component';
import { DataSourceService } from 'src/app/services/datasource.service';
import { RouterModule } from '@angular/router';
import { YmNavigationGoalService } from 'src/app/shared/services/yandex-metrica/utils/ym-navigation-goal.service';


@Component({
    selector: 'main-page',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.scss'],
    standalone: true,
    imports: [PatnersMarqueeComponent, TilingComponent, RouterModule],
    providers: [DataSourceService, YmNavigationGoalService]
})

export class MainPageComponent {
    @ViewChild('logo', {read: ElementRef}) logoContainer?:ElementRef<HTMLDivElement>;


    constructor(protected dataService: DataSourceService) { }
}