import { Component } from '@angular/core';
import { SocialsComponent } from '../../shared/components/socials/socials.component';
import { CommonModule } from '@angular/common';
import { DataSourceService } from 'src/app/services/datasource.service';
import { RouterModule } from '@angular/router';
import { YmNavigationGoalService } from 'src/app/shared/services/yandex-metrica/utils/ym-navigation-goal.service';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  standalone: true,
  imports: [CommonModule, SocialsComponent, RouterModule],
  providers: [DataSourceService, YmNavigationGoalService],
})
export class FooterComponent {
  protected siteMapContent = this.dataService.navButtonsContent;
  constructor(protected dataService: DataSourceService) {}
}
