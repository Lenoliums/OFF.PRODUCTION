import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataSourceService } from 'src/app/services/datasource.service';
import { fullCart } from 'src/app/types';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { YmNavigationGoalService } from 'src/app/shared/services/yandex-metrica/utils/ym-navigation-goal.service';
registerLocaleData(localeRu, 'ru');
@Component({
  selector: 'price-item',
  templateUrl: 'price-item.component.html',
  styleUrls: ['price-item.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [DataSourceService, YmNavigationGoalService],
})
export class PriceItemComponent implements OnInit, OnDestroy {
  @Input() fullCart?: fullCart;

  protected isOptional = new BehaviorSubject<boolean>(false);
  protected isOpen = false;
  protected choosenOptions = new Set<string>();

  private destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    if (!this.fullCart?.inclusion?.length) {
      this.isOptional.next(true);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected toggleExpansion(): void {
    this.isOpen = !this.isOpen;
  }

  protected clickCheckBox(option: string): void {
    if (this.choosenOptions.has(option)) {
      this.choosenOptions.delete(option);
    } else {
      this.choosenOptions.add(option);
    }
    this.choosenOptions = new Set(this.choosenOptions);
  }

  protected choosenProps(): string {
    if (!this.fullCart) return '';

    if (this.isOptional.value) {
      return Array.from(this.choosenOptions).join(',');
    }

    return this.fullCart.name;
  }
}
