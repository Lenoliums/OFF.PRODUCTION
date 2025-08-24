import { Injectable } from '@angular/core';
import {
  fullCart,
  navButtonContent,
  PostProductionItems,
  PreProductionItems,
  ProductionItems,
  Social,
  TilingContent,
  Partners,
} from '../types';
@Injectable()
export class DataSourceService {
  public readonly navButtonsContent: Array<navButtonContent> = [
    {
      enTitle: 'OFF.PRODUCTION',
      ruTitle: 'OFF.PRODUCTION',
      path: '',
    },
    {
      enTitle: 'OFFICIAL',
      ruTitle: 'ПОРТФОЛИО',
      path: 'official',
    },
    {
      enTitle: 'FULL',
      ruTitle: 'ПРАЙСЫ',
      path: 'full',
    },
    {
      enTitle: 'FRAME',
      ruTitle: 'КЛИЕНТЫ',
      path: 'frame',
    },
    {
      enTitle: 'PRODUCTION',
      ruTitle: 'КОМАНДА',
      path: 'production',
    },
  ];

  public readonly socials: Array<Social> = [
    {
      link: 'https://vk.com/offullframe',
      description: 'VK',
      imgPath: './assets/icons/vk.svg',
    },
    {
      link: 'https://t.me/offullframe',
      description: 'Telegram',
      imgPath: './assets/icons/tg.svg',
    },
    {
      link: 'https://www.instagram.com/offulframe?igsh=dGZvdHU1NmhsNWZx&utm_source=qr',
      description: 'Instagram',
      imgPath: './assets/icons/instagram.svg',
    },
  ];

  public readonly partners: Array<Partners> = [
    {
      title: 'Московский Спорт',
      marqueeImg: './assets/partners/московский_спорт.png',
    },
    {
      title: 'ФТАР',
      marqueeImg: './assets/partners/фтар.png',
    },
    {
      title: 'СберБанк',
      marqueeImg: './assets/partners/сбер.png',
    },
    {
      title: 'Яндекс',
      marqueeImg: './assets/partners/яндекс.png',
    },
    {
      title: 'YOUTA',
      marqueeImg: './assets/partners/йота.png',
    },
    {
      title: 'Сrabbit',
      marqueeImg: './assets/partners/крэббит.png',
    },
  ];

  public readonly phoneNumber: string = '+7 (953) 326-96-62';

  public readonly portfolio: Array<TilingContent> = [
    {
      title: 'European weightlifting championship 2020',
      video: './assets/video/video-3.MOV',
      description:
        'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
      partner: 'ФТАР',
      preview: './assets/preview/video-3.png',
    },
    {
      title: 'Sport',
      video: './assets/video/video-4.mp4',
      description:
        'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
      partner: 'Московский Спорт',
      preview: './assets/preview/video-4.png',
    },
    {
      title: 'Auto Tuning Show 2018',
      video: './assets/video/video-5.mp4',
      description:
        'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
      partner: 'GO2EX',
      preview: './assets/preview/video-5.png',
    },
    {
      title: 'ЛисМаркет',
      video: './assets/video/video-6.mp4',
      description:
        'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
      partner: 'ЛисМаркет',
      preview: './assets/preview/video-6.png',
    },
    {
      title: 'Прорыв 2024',
      video: './assets/video/video-7.mp4',
      description:
        'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
      partner: 'Московский Спорт',
      preview: './assets/preview/video-7.png',
    },
    {
      title: 'XHL 3x3',
      video: './assets/video/video-8.mp4',
      description:
        'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
      partner: 'XHL',
      preview: './assets/preview/video-8.png',
    },
    {
      title: 'Русское Поле',
      video: './assets/video/video-9.mp4',
      description:
        'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
      partner: 'GO2EX',
      preview: './assets/preview/video-9.png',
    },
  ];

  public readonly PreProductionItems: Array<PreProductionItems> = [
    'Сценарий',
    'Раскадровка',
    'Креатив',
    'Режиссерский сценарий',
    'Скаутинг локаций',
  ];

  public readonly ProductionItems: Array<ProductionItems> = [
    'Сокращенная команда',
    'Упрощенное оборудование',
    'Актеры',
    'Гример',
    'Костюмер',
  ];

  public readonly PostProductionItems: Array<PostProductionItems> = [
    'Монтаж',
    'Инфографика',
    'Саунд дизайн',
    '2Д графика',
    '3Д графика',
    'Создание музыки',
  ];

  public readonly fullCards: Array<fullCart> = [
    {
      name: 'Рекламный ролик (бренд, продукт)',
      price: 150000,
      inclusion: [
        'Разработка концепции и сценария',
        'Подбор локаций, актёров, реквизита',
        'Съёмка (1–2 смены)',
        'Режиссёр, оператор, ассистенты',
        'Свет, звук, техника',
        'Постпродакшн: монтаж, цветокор, графика, саунд-дизайн',
      ],
    },
    {
      name: 'Презентационный мини-фильм (для компании)',
      price: 80000,
      inclusion: [
        'Интервью с руководством и сотрудниками',
        'Съёмка на производстве/в офисе',
        'Дроны, графика, титры',
        'Написание сценария и режиссура',
        'Озвучка, музыка',
        'Монтаж (2–5 мин финальный продукт)',
      ],
    },
    {
      name: 'Репортажная съёмка (событие, конференция, выставка)',
      price: 30000,
      inclusion: [
        '1–2 оператора',
        'Мобильный свет, петлички',
        'Быстрый монтаж (можно сдать в течение суток)',
        'Титры, лого, музыка',
        'Возможность монтажа reels/shorts',
      ],
    },
    {
      name: 'Интервью',
      price: 30000,
      inclusion: [
        'Подготовка локации',
        'Свет, 2 камеры, звук',
        'Монтаж, титры',
        'Готовая версия + фрагменты для соцсетей',
      ],
    },
    {
      name: 'Подкаст',
      price: 25000,
      inclusion: [
        '2–4 камеры',
        'Звукозапись (петлички/шумоподавление)',
        'Свет',
        'Монтаж, титры, оформление',
        'Подготовка видео и аудиоформата',
      ],
    },
    {
      name: 'Обучающие ролики',
      price: 30000,
      inclusion: [
        'Сценарий, раскадровка',
        'Запись лекции или постановочных сцен',
        'Инфографика, анимация, субтитры',
        'Монтаж, саунд-дизайн',
      ],
    },
    {
      name: 'Обзоры (товаров, услуг)',
      price: 30000,
      inclusion: [
        'Сценарий, локация',
        'Съёмка с демонстрацией продукта',
        'Озвучка или ведущий',
        'Постобработка, графика, вставки',
      ],
    },
    {
      name: 'Съёмка спортивных мероприятий',
      price: 50000,
      inclusion: [
        'Многокамерная съёмка (в том числе с дронов, GoPro)',
        'Репортаж + slow-motion фрагменты',
        'Прямой эфир (по запросу)',
        'Монтаж хайлайтов',
        'Комментаторская дорожка (опция)',
      ],
    },
  ];

  constructor() {}
}
