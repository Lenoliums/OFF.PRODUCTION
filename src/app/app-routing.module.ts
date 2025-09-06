import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main/main-page.component';
import { OfficialPageComponent } from './modules/official/official-page.component';
import { OrderPageComponent } from './modules/order/order.component';
import { FullPageComponent } from './modules/full/full-page.component';
import { ProductionPageComponent } from './modules/production/production.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: { 
      title: 'OFF.PRODUCTION — видеопродакшен и создание контента для бизнеса и событий', 
      description: 'От идеи до реализации — профессиональный видеопродакшен с опытом более 10 лет. Мы создаём уникальный контент для чемпионатов, мероприятий и брендов, помогающий выделиться среди конкурентов.', 
      keywords: 'видеопродакшен, создание видео, контент для бизнеса, видеосъёмка чемпионатов, профессиональное видео, OFF.PRODUCTION, видеоконтент, съемка спортивных мероприятий' 
    }
  },
  {
    path: 'official',
    component: OfficialPageComponent,
    data: { 
      title: 'Портфолио OFF.PRODUCTION — Лучшие видеопроекты и кейсы', 
      description: 'Портфолио OFF.PRODUCTION: уникальные видеопроекты, включая чемпионаты, автошоу, фестивали и корпоративные ролики. Профессиональный видеопродакшен с опытом более 10 лет.', 
      keywords: 'портфолио видеопродакшен, видеопроекты, съемка чемпионатов, корпоративные видео, видео для мероприятий, рекламное видео, OFF.PRODUCTION, лучшие кейсы видео' 
    }
  },
  {
    path: 'order',
    component: OrderPageComponent,
    data: { 
      title: 'Связаться с OFF.PRODUCTION — Форма обратной связи и заказ услуг', 
      description: 'Свяжитесь с командой OFF.PRODUCTION — профессионального видеопродакшена. Заполните форму, чтобы обсудить проект, задать вопросы или получить консультацию.', 
      keywords: 'контакты видеопродакшен, форма связи, OFF.PRODUCTION, заказать видеоуслуги, обратная связь, видеопродакшен контакты, связь с командой' 
    }
  },
  {
    path: 'full',
    component: FullPageComponent,
    data: { 
      title: 'Прайс-лист OFF.PRODUCTION — Цены на видеопродакшн услуги 2025', 
      description: 'Ознакомьтесь с актуальными ценами на услуги видеопродакшна OFF.PRODUCTION: рекламные ролики, презентационные фильмы, репортажи, интервью, обучающие видео и многое другое.', 
      keywords: 'цены видеопродакшн, прайс-лист видеоуслуг, стоимость съемки роликов, видеопродакшн цены, OFF.PRODUCTION, видеосъемка, рекламное видео, корпоративное видео' 
    }
  },
  {
    path: 'production',
    component: ProductionPageComponent,
    data: { 
      title: 'Команда OFF.PRODUCTION — Профессиональный видеопродакшен с опытом 10 лет', 
      description: 'Мы — команда профессионалов с 10-летним опытом в видеопродакшене. Снимаем, монтируем и транслируем проекты любой сложности. Оперативность и качество — наши главные принципы.', 
      keywords: 'команда видеопродакшн, профессиональный видеопродакшн, OFF.PRODUCTION, видеосъемка, монтаж видео, прямые эфиры, видеопроекты, опытная команда' 
    }
  },
];

@NgModule({
  imports: [
    MainPageComponent,
    OfficialPageComponent,
    OrderPageComponent,
    FullPageComponent,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
