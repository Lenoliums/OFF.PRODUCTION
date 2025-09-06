import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ContactButtonComponent } from './modules/contact-button/contact-button.component';
import { YmNavigationGoalService } from './shared/services/yandex-metrica/utils/ym-navigation-goal.service';
import { YmService } from './shared/services/yandex-metrica/ym.service';
import { VideoComponent } from './shared/components/video/video.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    ContactButtonComponent,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
    VideoComponent
  ],
  providers: [
    YmNavigationGoalService,
    YmService, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
