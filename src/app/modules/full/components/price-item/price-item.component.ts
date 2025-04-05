import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, first } from 'rxjs';
import { DataSourceService } from 'src/app/services/datasource.service';
import { fullCart } from 'src/app/types';

@Component({
  selector: 'price-item',
  templateUrl: 'price-item.component.html',
  styleUrls: ['price-item.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [DataSourceService],
})
export class PriceItemComponent implements OnInit {
  @Input() fullCart?: fullCart;
  protected isOptional = new BehaviorSubject(false);
  protected choosenOptions = new Set();

  constructor() {}

  ngOnInit(): void {
    if (
      !this.fullCart?.postProduction.options.size &&
      !this.fullCart?.production.options.size &&
      !this.fullCart?.preProduction.options.size
    ) {
      this.isOptional.next(true);
    }
  }

  protected clickCheckBox(option: string) {
    if (this.choosenOptions.has(option)) {
      this.choosenOptions.delete(option);
    } else {
      this.choosenOptions.add(option);
    }
  }
  protected choosenProps() {
    if (!this.fullCart) return '';
    if (this.isOptional.value) {
      return Array.from(this.choosenOptions).join(',');
    }
    return (
      Array.from(this.fullCart.preProduction.options).join(',') +
      ',' +
      Array.from(this.fullCart.production.options).join(',') +
      ',' +
      Array.from(this.fullCart.postProduction.options).join(',')
    );
  }
}
