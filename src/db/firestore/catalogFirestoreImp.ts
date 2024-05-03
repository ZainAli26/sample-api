import { FirestoreDuplicatDataError } from "../../controllers/errors";
import { type Product } from "../../persistance/product";
import { getErrorMessage } from "../../utils/errors";
import { grpcErrorCodeToString, GrpcStatusStr } from "../../utils/grpcStatus";
import { logger } from "../../utils/logger";
import { type Catalog } from "../catalog";
import { firestoreClient } from "./firestore";
import { catalogPath } from "./firestoreCollectionPaths";

export class CatalogFirestoreImp implements Catalog {
    async addProduct(product: Product): Promise<string> {
        const documentId = product.id.toString()
        try {
        const doc = firestoreClient.collection(catalogPath()).doc(documentId);

        await doc.create(product);

        return doc.id;
        } catch (e) {
        const grpcStatusStr = grpcErrorCodeToString(e);

        switch (grpcStatusStr) {
            case GrpcStatusStr.ALREADY_EXISTS:
            throw new FirestoreDuplicatDataError("Trying to add duplicate data to DB")
        }

        logger.error(getErrorMessage(e));
        throw new Error("Failed to add a new product");
        }
    }

    async getProducts(): Promise<Product[]> {
        try {
            const collectionRef = firestoreClient.collection(catalogPath());
            const querySnapshot = await collectionRef.get(); // Get all documents
        
            // const products: Product[] = []; // Empty array to store retrieved documents
            const products: Product[] = querySnapshot.docs.map(doc => ({
                ...doc.data() as Product
              }));
        
            return products
          } catch (error) {
            logger.error(getErrorMessage(error));
            throw new Error("Failed to get products list");
          }
    } 
}