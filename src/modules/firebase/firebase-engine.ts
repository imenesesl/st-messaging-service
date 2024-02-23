import * as admin from 'firebase-admin';
import * as serviceAccount from './service-account-key.json';

export class FirebaseEngine {
  static init() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  static firestore = () => admin.firestore();
}
