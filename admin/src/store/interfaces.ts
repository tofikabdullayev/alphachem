export interface Product {
  title: Lang;
  _id: string;
  imageSrc: string;
}

export interface Slider {
  title: Lang;
  description: Lang;
  _id: string;
  imageSrc: string;
}

interface Lang {
  az: string;
  en: string;
  ru: string;
}
