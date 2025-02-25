import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main/main-page.component';
import { OfficialPageComponent } from './modules/official/official-page.component';

const routes: Routes = [{
    path: '',
    component: MainPageComponent
  },
  {
    path: 'official',
    component: OfficialPageComponent
  }
];

@NgModule({
  imports: [MainPageComponent, OfficialPageComponent, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
