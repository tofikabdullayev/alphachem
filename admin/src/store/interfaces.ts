interface Item {
  title: Lang;
  _id?: string;
  imageSrc: string;
}

export interface Product extends Item {}

export interface Slider extends Item {
  description: Lang;
}

export interface Contacts {
  adress: Lang;
  phones: string[];
  emails: string[];
  location: {
    lat: string;
    long: string;
  };
  _id?: string;
}

interface Lang {
  az: string;
  en: string;
  ru: string;
}
