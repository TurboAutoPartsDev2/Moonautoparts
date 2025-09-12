export interface Option {
  _id: string;
  option: string;
}

export interface Year {
  _id: string;
  year: number;
  Options: Option[];
}

export interface Model {
  _id: string;
  model: string;
  years: Year[];
}

export interface Make {
  _id: string;
  make: string;
  models: Model[];
}
