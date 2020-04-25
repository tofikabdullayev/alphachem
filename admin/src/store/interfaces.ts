export interface Product {
  title: Lang;
  _id?: string;
  imageSrc: string;
}

export interface Slider extends Product {
  description: Lang;
}

interface Lang {
  az: string;
  en: string;
  ru: string;
}
