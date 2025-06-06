import { Component } from '@angular/core';
import { SocialsComponent } from '../../shared/components/socials/socials.component';
import { CommonModule } from '@angular/common';
import { DataSourceService } from 'src/app/services/datasource.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  standalone: true,
  imports: [CommonModule, SocialsComponent, RouterModule],
  providers: [DataSourceService],
})
export class FooterComponent {
  protected siteMapContent = this.dataService.navButtonsContent.slice(1);
  constructor(private dataService: DataSourceService) {}
}
