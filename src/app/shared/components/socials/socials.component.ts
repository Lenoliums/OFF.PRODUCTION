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
  selector: 'socials',
  templateUrl: 'socials.component.html',
  styleUrls: ['socials.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [DataSourceService],
})
export class SocialsComponent {
  constructor(protected dataService: DataSourceService) {}
}
