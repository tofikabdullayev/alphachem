interface Item {
  title: Lang;
  _id?: string;
  imageSrc: string;
}

export interface Product extends Item {}

export interface Slider extends Item {
  description: Lang;
}

interface Lang {
  az: string;
  en: string;
  ru: string;
}
