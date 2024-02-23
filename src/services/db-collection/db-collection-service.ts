import { Injectable } from '@nestjs/common';
import { FirebaseEngine } from '@modules/firebase';
import { FilterWhere, Options } from './types';

@Injectable()
export class DBCollectionService {
  private db = FirebaseEngine.firestore();

  async createDocument<T>(collection: string, data: T): Promise<string> {
    const doc = await this.db.collection(collection).add(data);
    return doc.id;
  }

  async findDocuments(
    collection: string,
    filter?: FilterWhere[],
    options?: Options,
  ) {
    const { limit } = options;

    const query = this.db.collection(collection);

    if (filter) {
      filter.forEach(({ key, operation, value }) => {
        query.where(key, operation, value);
      });
    }

    if (limit) query.limit(limit);

    const records = await query.get();
    return records.docs;
  }
}
