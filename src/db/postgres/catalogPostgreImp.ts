import { DatabaseError as PgError } from 'pg';
import { type Catalog } from "../catalog";
import { addProductQuery, getAllProductsQuery } from "./postgresql-queries";
import { postgresClient, errorPostgresClientAlreadyConnectedString, PostgresErrorCodes } from "./postgres"
import { getErrorMessage } from "../../utils/errors";
import { type Product } from "../../persistance/product";
import { PostgresDuplicatDataError } from '../../controllers/errors';
import { logger } from '../../utils/logger';

export class CatalogPostgresImp implements Catalog {

    async connect(): Promise<void> {
        try {
            await postgresClient.connect();
        } catch (error) {
            if (getErrorMessage(error) === errorPostgresClientAlreadyConnectedString)
                logger.info("Connection already eastablished")
            else
                throw new Error("DB Connection Error")
        }
    }

    async addProduct(product: Product): Promise<string> {
        const query = addProductQuery(product)
        await this.connect()
        try {
            await postgresClient.query(query)
        } catch (error) {
            if (error instanceof PgError && error.code === PostgresErrorCodes.duplicateKeyError) {
                console.log(getErrorMessage(error))
                throw new PostgresDuplicatDataError("Trying to add duplicate data to DB")
            }
            logger.error(error)
            throw new Error("Failed to add a new product");
        }
        return product.id.toString()
        
        
    }
    
    async getProducts(): Promise<Product[]> {
        const query = getAllProductsQuery()
        await this.connect()
        const result = await postgresClient.query(query)
        const rows = result.rows
        const products: Product[] = rows.map((row: Product) =>(
            row
        ));
        return products
    }
}