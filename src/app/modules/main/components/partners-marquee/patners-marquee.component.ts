import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataSourceService } from 'src/app/services/datasource.service';

@Component({
  selector: 'patners-marquee',
  templateUrl: 'patners-marquee.component.html',
  styleUrls: ['patners-marquee.component.scss'],
  standalone: true,
  providers: [DataSourceService],
  imports: [CommonModule],
})
export class PatnersMarqueeComponent {
  partnersLines: Array<Array<string>> = [];

  constructor(private dataService: DataSourceService) {
    this.generatePartnersLines();
  }

  private generatePartnersLines() {
    for (let i = 0; i < 3; i++) {
      this.partnersLines.push(
        this.dataService.partners
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => (i % 2 === 0 ? value.title : value.marqueeImg))
      );
    }
  }
}
