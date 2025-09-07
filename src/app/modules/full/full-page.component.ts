import { Component, OnInit, TrackByFunction } from '@angular/core';
import { DataSourceService } from 'src/app/services/datasource.service';
import { PriceItemComponent } from './components/price-item/price-item.component';
import { fullCart } from 'src/app/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'full-page',
  templateUrl: 'full-page.component.html',
  styleUrls: ['full-page.component.scss'],
  standalone: true,
  imports: [PriceItemComponent, CommonModule],
  providers: [DataSourceService],
})
export class FullPageComponent implements OnInit {
  protected readonly fullCards: Array<fullCart> = this.dataService.fullCards;

  constructor(protected dataService: DataSourceService) {}

  ngOnInit(): void {}

  protected delay(i: number): number {
    const width = window.innerWidth;

    if (width <= 667) {
      return 0;
    } else if (width <= 1153) {
      return (i % 2) * 200;
    } else {
      return (i % 3) * 200;
    }
  }

  protected trackByCard: TrackByFunction<fullCart> = (
    index: number,
    card: fullCart
  ) => {
    return card.name || index;
  };
}
