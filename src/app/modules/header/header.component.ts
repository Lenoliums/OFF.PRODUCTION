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

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss', 'header-media.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, NavBarComponent],
  providers: [DataSourceService],
})
export class HeaderComponent implements AfterViewInit {
  protected isNavBarOpen$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  protected isSocialsOpen: boolean = false;

  private bgScrollEventListener = () => {};

  @ViewChild('mediaContainer', { read: ElementRef })
  mediaContainer?: ElementRef<HTMLDivElement>;
  @ViewChild('bgRect', { read: ElementRef })
  bgRect?: ElementRef<HTMLDivElement>;

  private mediaContainerEventListener = () => {};

  constructor(
    private renderer: Renderer2,
    protected dataService: DataSourceService,
    private location: Location,
    private router: Router
  ) {}

  openSocials() {
    this.isSocialsOpen = true;
    this.mediaContainerEventListener = this.renderer.listen(
      this.mediaContainer?.nativeElement,
      'mouseleave',
      () => {
        this.closeSocials();
      }
    );
  }
  closeSocials() {
    this.isSocialsOpen = false;
    this.mediaContainerEventListener();
  }

  ngAfterViewInit() {
    console.log(this.location.path());
    if (this.location.path()) {
      this.bgRect?.nativeElement.classList.add('h-85');
    } else {
      this.bgScrollEventListener = this.renderer.listen(
        window,
        'scroll',
        () => {
          this.bgRect?.nativeElement.classList.add('h-85');
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
            this.bgRect?.nativeElement.classList.add('h-85');
            this.bgScrollEventListener();
          }
        });
    }
  }
}
