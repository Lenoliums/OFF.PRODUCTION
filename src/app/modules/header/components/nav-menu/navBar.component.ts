import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataSourceService } from 'src/app/services/datasource.service';
import { SocialsComponent } from 'src/app/shared/components/socials/socials.component';

@Component({
  selector: 'navBar',
  templateUrl: 'navBar.component.html',
  styleUrls: ['navBar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, SocialsComponent],
  providers: [DataSourceService],
})
export class NavBarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('navBarBg', { read: ElementRef })
  navBarBg?: ElementRef<HTMLDivElement>;

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  private navBarEventListener = () => {};

  constructor(
    private renderer: Renderer2,
    protected dataService: DataSourceService
  ) {}

  ngAfterViewInit() {
    document.body.style.overflow = 'hidden';
    this.navBarEventListener = this.renderer.listen(
      this.navBarBg?.nativeElement,
      'click',
      (evt) => {
        this.close.emit(false);
      }
    );
  }

  ngOnDestroy() {
    document.body.style.overflow = 'visible';
    this.navBarEventListener();
  }
}
