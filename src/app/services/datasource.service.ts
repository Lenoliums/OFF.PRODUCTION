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

    public navButtonsContent: Array<navButtonContent> = [
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

    public socials : Array<Social> = [
        {
            link: 'http://twitter.com/wesbos',
            description: 'Twitter',
        },
        {
            link: 'http://facebook.com/wesbos.developer',
            description: 'Facebook',
        },
        {
            link: 'http://wesbos.com',
            description: 'Blog',
        },
        {
            link: 'http://wesbos.com/courses',
            description: 'Course Catalog',
        },
    ]

    public partners: Array<string> = [
        'Московский Спорт',
        'ФТАР',
        'СберБанк',
        'Яндекс',
        'YOUTA'
    ]

    constructor() { }
    
}