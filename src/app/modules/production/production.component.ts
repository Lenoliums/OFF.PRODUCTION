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
export class ProductionPageComponent {
}
