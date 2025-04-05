import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/datasource.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { PriceItemComponent } from './components/price-item/price-item.component';
import { fullCart } from 'src/app/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'full-page',
  templateUrl: 'full-page.component.html',
  styleUrls: ['full-page.component.scss'],
  standalone: true,
  imports: [CarouselModule, PriceItemComponent, CommonModule],
  providers: [DataSourceService],
})
export class FullPageComponent implements OnInit {
  protected readonly customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 2,
      },
      1120: {
        items: 3,
      },
    },
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayHoverPause: true,
  };

  protected readonly fullCards: Array<fullCart> = this.dataService.fullCards;

  constructor(protected dataService: DataSourceService) {}

  ngOnInit() {}
}
