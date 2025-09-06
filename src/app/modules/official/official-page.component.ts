import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/services/datasource.service';
import { TilingComponent } from '../../shared/components/tiling/tiling.component';


@Component({
    selector: 'official-page',
    templateUrl: 'official-page.component.html',
    styleUrls: ['official-page.component.scss'],
    standalone: true,
    imports: [TilingComponent],
    providers: [DataSourceService]
})

export class OfficialPageComponent implements OnInit {

    constructor(
        protected dataService: DataSourceService
    ) { }

    ngOnInit() { }
}