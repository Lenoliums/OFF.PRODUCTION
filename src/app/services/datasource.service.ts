import { Injectable } from '@angular/core';

type navButtonContent = {
    enTitle: string,
    ruTitle: string,
    path?: string
}

type Social = {
    link: string,
    description: string
}

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

    constructor() { }
    
}