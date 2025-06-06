import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-production',
  templateUrl: 'production.component.html',
  styleUrls: ['production.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskModule],
  providers: [],
})
export class ProductionPageComponent implements OnInit {
  public productionForm = new FormGroup({
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    name: new FormControl('', Validators.required),
  });
  public console(t: any) {
    console.log(t);
  }

  constructor() {}

  ngOnInit() {}
}
