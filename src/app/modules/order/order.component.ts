import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';


@Component({
    selector: 'app-order',
    templateUrl: 'order.component.html',
    styleUrls: ['order.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, NgxMaskModule],
    providers: []
})

export class OrderPageComponent implements OnInit {
    public orderForm = new FormGroup({
        phone: new FormControl("", [Validators.required, Validators.pattern("[0-9]{10}")]),
        name: new FormControl("", Validators.required)
    });
    public console(t:any){
        console.log(t)
    }

    constructor() { }

    ngOnInit() {}
}