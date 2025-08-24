import { CommonModule, Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-menu/navBar.component';
import { BehaviorSubject, filter, first, map } from 'rxjs';
import { DataSourceService } from 'src/app/services/datasource.service';
import { SocialsComponent } from 'src/app/shared/components/socials/socials.component';
import { YmService } from 'src/app/shared/services/yandex-metrica/ym.service';
import { YmNavigationGoalService } from 'src/app/shared/services/yandex-metrica/utils/ym-navigation-goal.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss', 'header-media.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent, SocialsComponent],
  providers: [DataSourceService, YmService, YmNavigationGoalService],
})
export class HeaderComponent implements AfterViewInit {
  protected isNavBarOpen$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  private bgScrollEventListener = () => {};

  @ViewChild('bgRect', { read: ElementRef })
  bgRect?: ElementRef<HTMLDivElement>;

  constructor(
    private renderer: Renderer2,
    protected dataService: DataSourceService,
    private location: Location,
    private router: Router,
    protected ymService: YmService
  ) {}

  ngAfterViewInit() {
    if (this.location.path()) {
      this.bgRect?.nativeElement.classList.add('h-72');
    } else {
      this.bgScrollEventListener = this.renderer.listen(
        window,
        'scroll',
        () => {
          this.bgRect?.nativeElement.classList.add('h-72');
          this.bgScrollEventListener();
        }
      );
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          if (this.location.path()) {
            document
              .getElementsByClassName('header-container')[0]
              .setAttribute('style', 'background-color: #000000;');
            this.bgRect?.nativeElement.classList.add('h-72');
            this.bgScrollEventListener();
          }
        });
    }
  }
}
