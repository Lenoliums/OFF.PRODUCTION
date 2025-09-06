type navButtonContent = {
  enTitle: string;
  ruTitle: string;
  path?: string;
};

type Social = {
  link: string;
  description: string;
  imgPath: string;
};

type TilingContent = {
  title: string;
  video: string;
  description?: string;
  partner: string;
  preview: string;
};

type Partners = {
  title: string;
  marqueeImg: string;
};


type VideoItem = {
  title: string;
  video: string;
  partner: string;
}

type OptionsNames = 'Предпродакшн' | 'Продакшн' | 'Постпродакшн';
type PreProductionItems =
  | 'Сценарий'
  | 'Раскадровка'
  | 'Креатив'
  | 'Режиссерский сценарий'
  | 'Скаутинг локаций';

type ProductionItems =
  | 'Сокращенная команда'
  | 'Упрощенное оборудование'
  | 'Актеры'
  | 'Гример'
  | 'Костюмер';

type PostProductionItems =
  | 'Монтаж'
  | 'Инфографика'
  | 'Саунд дизайн'
  | '2Д графика'
  | '3Д графика'
  | 'Создание музыки';

interface PreProductionItem {
  optionsName: OptionsNames;
  options: Set<PreProductionItems>;
  allOptions: Array<PreProductionItems>;
}

interface ProductionItem {
  optionsName: OptionsNames;
  options: Set<ProductionItems>;
  allOptions: Array<ProductionItems>;
}

interface PostProductionItem {
  optionsName: OptionsNames;
  options: Set<PostProductionItems>;
  allOptions: Array<PostProductionItems>;
}

type fullCart = {
  name: string;
  price: number;
  inclusion: Array<string>;
};

export {
  navButtonContent,
  Social,
  TilingContent,
  fullCart,
  PreProductionItems,
  ProductionItems,
  PostProductionItems,
  PreProductionItem,
  ProductionItem,
  PostProductionItem,
  Partners,
  VideoItem
};
