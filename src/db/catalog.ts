import { type Product } from "../persistance/product";
import { CatalogFirestoreImp } from "./firestore/catalogFirestoreImp";
import { CatalogPostgresImp } from "./postgres/catalogPostgreImp";

export interface Catalog {
  addProduct: (product: Product) => Promise<string>;
  getProducts: () => Promise<Product[]>;
}

export let catalogDBHandler: Catalog;

if (process.env.DATABASE === "POSTGRES") {
  catalogDBHandler = new CatalogPostgresImp();
} else {
  catalogDBHandler = new CatalogFirestoreImp();
}
