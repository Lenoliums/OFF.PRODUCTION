import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main/main-page.component';
import { OfficialPageComponent } from './modules/official/official-page.component';
import { OrderPageComponent } from './modules/order/order.component';
import { FullPageComponent } from './modules/full/full-page.component';

const routes: Routes = [{
    path: '',
    component: MainPageComponent
  },
  {
    path: 'official',
    component: OfficialPageComponent
  },
  {
    path: 'order',
    component: OrderPageComponent
  },
  {
    path: 'full',
    component: FullPageComponent
  }
];

@NgModule({
  imports: [MainPageComponent, OfficialPageComponent, OrderPageComponent, FullPageComponent, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
