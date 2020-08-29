export interface Item {
  author: string;
  description: string;
  id: string;
  thumbnail: string;
  title: string;
  type: ItemType;
}

export enum ItemType {
  BOOK = 'BOOK',
  MOVIE = 'MOVIE',
}
