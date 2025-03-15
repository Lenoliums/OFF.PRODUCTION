import { Injectable } from '@angular/core';
import { navButtonContent, Social, TilingContent} from '../types';
@Injectable()
export class DataSourceService {

    public readonly navButtonsContent: Array<navButtonContent> = [
        {
            enTitle: 'OFF.PRODUCTION',
            ruTitle: 'OFF.PRODUCTION',
            path: ''
        },
        {
            enTitle: 'OFFICIAL',
            ruTitle: 'ПОРТФОЛИО',
            path: 'official'
        },
        {
            enTitle: 'FULL',
            ruTitle: 'ПРАЙСЫ'
        },
        {
            enTitle: 'FRAME',
            ruTitle: 'КЛИЕНТЫ'
        },
        {
            enTitle: 'PRODUCTION',
            ruTitle: 'КОМАНДА'
        },
    ]

    public readonly socials : Array<Social> = [
        {
            link: '',
            description: 'VK',
        },
        {
            link: '',
            description: 'Telegram',
        },
        {
            link: '',
            description: 'YouTube',
        },
    ]

    public readonly partners: Array<string> = [
        'Московский Спорт',
        'ФТАР',
        'СберБанк',
        'Яндекс',
        'YOUTA'
    ]

    
    public readonly phoneNumber: string = "+7 (953) 326-96-62";

    public readonly portfolio: Array<TilingContent> = [
        {
            title: 'European weightlifting championship 2020',
            video: './assets/video/video-3.MOV',
            description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            partner: 'ФТАР',
            preview: './assets/preview/video-3.png'
        },
        {
            title: 'Sport',
            video: './assets/video/video-4.mp4',
            description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            partner: 'Московский Спорт',
            preview: './assets/preview/video-4.png'
        },
        {
            title: 'Auto Tuning Show 2018',
            video: './assets/video/video-5.mp4',
            description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            partner: 'GO2EX',
            preview: './assets/preview/video-5.png'
        },
        {
            title: 'ЛисМаркет',
            video: './assets/video/video-6.mp4',
            description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            partner: 'ЛисМаркет',
            preview: './assets/preview/video-6.png'
        },
        {
            title: 'Прорыв 2024',
            video: './assets/video/video-7.mp4',
            description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            partner: 'Московский Спорт',
            preview: './assets/preview/video-7.png'
        },
        {
            title: 'XHL 3x3',
            video: './assets/video/video-8.mp4',
            description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            partner: 'XHL',
            preview: './assets/preview/video-8.png'
        },
        {
            title: 'Русское Поле',
            video: './assets/video/video-9.mp4',
            description: 'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text',
            partner: 'GO2EX',
            preview: './assets/preview/video-9.png'
        },
    ]

    constructor() { }
    
}