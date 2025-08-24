import { inject, Injectable, OnDestroy } from '@angular/core';
import { Navigation, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { YmService } from '../ym.service';
import { YmNavigationGoal } from '../interfaces/ym-navigation-goal.interfaces';

@Injectable()
export class YmNavigationGoalService implements OnDestroy {
  private router = inject(Router);
  private ymService = inject(YmService);

  private ngUnsubscribe$ = new Subject<void>();

  handlerNavigation(): void {
    this.router.events.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((event): void => {
      if (event instanceof NavigationStart) {
        history.replaceState({}, '');
      }

      if (event instanceof NavigationEnd) {
        this.reachGoal();
      }
    });
  }

  private reachGoal(): void {
    const currentNavigation: Navigation | null = this.router.getCurrentNavigation();

    const hasPreviousNavigation = Boolean(currentNavigation?.previousNavigation);

    if (hasPreviousNavigation) {
      const ymGoalName = (currentNavigation?.extras.state as YmNavigationGoal)?.ymGoalName;
      if (!ymGoalName) return;
      this.ymService.reachGoal(ymGoalName);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
