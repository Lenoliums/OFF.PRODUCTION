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
  VideoItem,
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
    // {
    //   enTitle: 'FRAME',
    //   ruTitle: 'КЛИЕНТЫ',
    //   path: 'frame',
    // },
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

  public readonly showReel: VideoItem = {
    title: '',
    partner: '',
    video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/OFF%20SHOWREEL.mp4'
  }

  public readonly portfolio: Array<TilingContent> = [
    {
      title: 'European weightlifting championship 2020',
      video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/portfolio/EUROWC2020.MOV',
      description:
        'мы запечатлели величие континентального чемпионата, где сила встречается с мастерством. Каждая попытка, каждый рекорд и эмоции чемпионов — всё снято с максимальной зрелищностью',
      partner: 'ФТАР',
      preview: './assets/preview/video-3.png',
    },
    {
      title: 'Sport',
      video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/portfolio/AMBITION%20FITNESS%20PROMO.mp4',
      description:
        'мы сняли место, где рождаются сила и мотивация. Каждый тренажёр, каждая зона и каждое занятие предстают в виде кинематографического опыта для зрителя',
      partner: 'Московский Спорт',
      preview: './assets/preview/video-4.png',
    },
    {
      title: 'Auto Tuning Show 2018',
      video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/portfolio/Auto%20Tuning%20Show%202018%20%E2%88%92%20%D0%92%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%20%D1%83%D0%BD%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D1%82%D1%8E%D0%BD%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D1%8B%D1%85%20%D0%BC%D0%B0%D1%88%D0%B8%D0%BD.mp4',
      description:
        'ярчайшее автошоу Европы ожило в наших кадрах! Мы передали мощь, стиль и уникальность каждого автомобиля, превращая событие в настоящее визуальное приключение',
      partner: 'GO2EX',
      preview: './assets/preview/video-5.png',
    },
    {
      title: 'ЛисМаркет',
      video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/portfolio/LisMarket.mp4',
      description:
        'гастрономический мир, свежесть и уют магазина раскрыты через наши объективы. Мы сделали видео, которое буквально заставляет почувствовать вкус и атмосферу ярмарки',
      partner: 'ЛисМаркет',
      preview: './assets/preview/video-6.png',
    },
    {
      title: 'Прорыв 2024',
      video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/portfolio/PROryv_review.mp4',
      description:
        'мы показываем событие, где энергия и вдохновение переплетаются с амбициями участников. Каждый момент — настоящий заряд драйва и эмоций',
      partner: 'Московский Спорт',
      preview: './assets/preview/video-7.png',
    },
    {
      title: 'XHL 3x3',
      video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/portfolio/SPORT%20INTRO_4%D0%BA.mp4',
      description:
        'динамика, скорость и зрелищность хоккея в формате 3 на 3 запечатлены нами максимально эффектно. Энергия игроков и накал борьбы ощущаются в каждом кадре',
      partner: 'XHL',
      preview: './assets/preview/video-8.png',
    },
    {
      title: 'Русское Поле',
      video: 'https://disk.yandex.ru/d/wBHlFep0cSf2eQ/portfolio/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B5%20%D0%9F%D0%BE%D0%BB%D0%B5%20%E2%80%93%20%D0%9F%D1%80%D0%BE%D0%BC%D0%BE.mp4',
      description:
        'фестиваль традиций и культуры предстал перед зрителем во всей красе. Мы создали визуальную поэму, где музыка, ремёсла и народные обряды оживают в каждом кадре',
      partner: 'GO2EX',
      preview: './assets/preview/video-9.png',
    },
    {
      title: 'Подкаст про аудит серверов',
      video: 'https://disk.yandex.ru/i/UERkT9MJLPDnAg',
      description:
        'наш продакшн превратил сложную IT-тему в стильный и понятный контент. Чистый звук, грамотный монтаж и качественная съёмка сделали подкаст не только полезным, но и по-настоящему увлекательным',
      partner: 'Сrabbit',
      preview: './assets/preview/video-10.png',
    },
    {
      title: 'Обзор сервера',
      video: 'https://disk.yandex.ru/i/fxgv3QXZJ1zRcA',
      description:
        'наша команда показала мощность и функционал современного оборудования в стильной и наглядной подаче. Качественная съёмка, детальные планы и динамичный монтаж подчёркивают каждый аспект сервера — от дизайна до производительности',
      partner: 'Сrabbit',
      preview: './assets/preview/video-11.png',
    },
    {
      title: '30-летие МГПУ',
      video: 'https://cloud.mail.ru/public/RnHm/2WPSUtXym',
      description:
        'наш продакшн создал юбилейный ролик, в котором соединились история, достижения и атмосфера праздника. Торжественные кадры, яркие эмоции и профессиональный монтаж подчеркнули значимость даты и масштаб события',
      partner: 'Сrabbit',
      preview: './assets/preview/video-12.png',
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
