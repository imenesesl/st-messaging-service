import { NodeTypes, ISender, IDestination } from '@core/messaging/types';
import { Injectable } from '@nestjs/common';
import { DBCollectionService } from '@services/db-collection';

@Injectable()
export class BondAPI {
  constructor(private readonly dbCollectionService: DBCollectionService) {}

  private path(collection: string) {
    return `${collection}/bonds`;
  }

  async create(collection: string, node: NodeTypes, ids: string[]) {
    return this.dbCollectionService.createDocument(this.path(collection), {
      ids,
      node,
    });
  }

  async find(collection: string, ids: string[]) {
    return this.dbCollectionService.findDocuments(
      this.path(collection),
      [{ key: 'ids', operation: 'array-contains-any', value: ids }],
      { limit: 1 },
    );
  }

  async get(collection: string, sender: ISender, destination: IDestination) {
    if (sender.bond) return sender.bond;

    const ids = [
      `${sender.id}#${destination.id}`,
      `${destination.id}#${sender.id}`,
    ];

    const docs = await this.find(collection, ids);

    if (!docs.length) {
      return this.create(collection, destination.node, ids);
    }
    return docs[0].id;
  }
}
