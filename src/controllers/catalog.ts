import { catalogDBHandler } from "../db/catalog";
import { productMapper } from "../mappers/mapper";
import { type Product } from "../persistance/product";
import { type Product as ProductView } from "../viewModels/product";
import { DuplicatDataError } from "./errors";
import { logger } from "../utils/logger";

// Define a Catalog class representing a collection of products
export class Catalog {
  // Method to add a product to the catalog
  async addProduct(productView: ProductView): Promise<{
    response: { message: string };
    statusCode: number;
  }> {
    try {
      const product: Product = productMapper.toModel(productView);
      product.available = true;
      const productId: string = await catalogDBHandler.addProduct(product);
      const message = `product added successfully with productId: ${productId}`;
      logger.info(message);
      return {
        statusCode: 200,
        response: {
          message,
        },
      };
    } catch (error) {
      if (error instanceof DuplicatDataError) {
        logger.info(error);
        return {
          statusCode: 400,
          response: {
            message: `product already exists with productId: ${productView.id}`,
          },
        };
      }
      logger.error(error);
      return {
        statusCode: 503,
        response: { message: `Internal server error` },
      };
    }
  }

  // Method to get all products from the catalog
  async getAllProducts(): Promise<{
    response: { data: ProductView[]; message: string };
    statusCode: number;
  }> {
    try {
      const products: Product[] = await catalogDBHandler.getProducts();
      const productViewlist: ProductView[] = products.map((product) =>
        productMapper.toViewModel(product),
      );
      const message = `Successfull fetched the products`;
      logger.info(message);
      return {
        response: {
          data: productViewlist,
          message,
        },
        statusCode: 200,
      };
    } catch (error) {
      logger.error(error);
      return {
        statusCode: 503,
        response: { data: [], message: `Internal server error` },
      };
    }
  }

  // // Method to find a product by ID
  // findProductById(id: number): Product | undefined {
  //   return this.products.find((product) => product.id === id);
  // }

  // // Method to remove a product by ID
  // removeProductById(id: number): boolean {
  //   const index = this.products.findIndex((product) => product.id === id);
  //   if (index !== -1) {
  //     this.products.splice(index, 1);
  //     return true; // Product removed successfully
  //   }
  //   return false; // Product with given ID not found
  // }
}
