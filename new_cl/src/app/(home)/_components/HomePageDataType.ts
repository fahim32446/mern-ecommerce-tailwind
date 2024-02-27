export interface ProductListType {
  _id: string;
  title: string;
  description: string;
  image: string[];
  sku?: string;
  brands?: string;
  category: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  isNew?: boolean;
  count?: number;
  featured?: boolean | string;
}
export interface categoryType {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
