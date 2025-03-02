import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TilingContent } from 'src/app/types';

@Component({
    selector: 'tiling',
    templateUrl: 'tiling.component.html',
    styleUrls: ['tiling.component.scss'],
    standalone: true,
    imports: [CommonModule],
})

export class TilingComponent implements OnInit {
    @Input() content: Array<TilingContent> = [];
    constructor() { }

    ngOnInit() { }
}