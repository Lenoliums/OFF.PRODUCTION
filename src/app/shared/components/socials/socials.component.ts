import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataSourceService } from 'src/app/services/datasource.service';

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
