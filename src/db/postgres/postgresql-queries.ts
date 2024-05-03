import { type Product } from "../../persistance/product";

export function getAllProductsQuery(): string {
    return "select * from catalog"
}

export function addProductQuery(product: Product): string {
    const query = `INSERT INTO "catalog" (id, name, price, description, available)
    VALUES (${product.id}, '${product.name}', ${product.price}, '${product.description}', ${product.available})`
    return query
}
