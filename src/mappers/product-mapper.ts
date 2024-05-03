import { type Product as ProductView } from "../viewModels/product";
import { type Product } from "../persistance/product";
import { type IMapper } from "./mapper";

export class ProductMapper implements IMapper<Product, ProductView> {
  public toViewModel(product: Product): ProductView {
    const viewModel: ProductView = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
    };
    return viewModel;
  }

  public toModel(productView: ProductView): Product {
    const product: Product = {
      id: productView.id,
      name: productView.name,
      price: productView.price,
      description: productView.description,
    };
    return product;
  }
}
