export interface ContinentModel {
  name: Name;
  capital: Capital;
  independent: boolean;
  currencies: string;
  idd: number;
  languages: string;
  borders: string;
  population: number;
  flags: Flags;
}

export interface Name {
  common: string;
}

export interface Capital{
  capital: string;
}

export interface Flags {
  alt: string;
  png: string;
}
