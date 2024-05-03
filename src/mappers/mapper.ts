import { ProductMapper } from "./product-mapper";

export interface IMapper<T, R> {
  toViewModel: (model: T) => R;

  toModel: (dto: R) => T;
}

export const productMapper = new ProductMapper();
