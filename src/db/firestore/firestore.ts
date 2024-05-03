import * as FirebaseFirestore from "@google-cloud/firestore";

const firestoreClient = new FirebaseFirestore.Firestore();
firestoreClient.settings({
  ignoreUndefinedProperties: true,
});
  

export { firestoreClient };
