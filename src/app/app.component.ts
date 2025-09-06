import { Component, OnDestroy, OnInit } from '@angular/core';
import { YmNavigationGoalService } from './shared/services/yandex-metrica/utils/ym-navigation-goal.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { YmService } from './shared/services/yandex-metrica/ym.service';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'offProd';
  private ngUnsubscribe$ = new Subject<void>();

  constructor(
    private ymGoalNavigation: YmNavigationGoalService,
    private ymService: YmService,
    private router: Router,
    private seoService: SeoService
  ){}
  
  ngOnInit(): void {
    this.ymGoalNavigation.handlerNavigation();
    this.router.events.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((event): void => {
      if (event instanceof NavigationEnd) {
        this.ymService.hit();
      }
    });
  }
  
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
