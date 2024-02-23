import { Injectable } from '@nestjs/common';
import { IDestination, IMessageFields, IOrganization } from './types';
import { DBCollectionService } from '@services/db-collection';
import { BondAPI } from '@api/bond';

@Injectable()
export class MessagingService {
  constructor(
    private readonly dbCollectionService: DBCollectionService,
    private readonly bondAPI: BondAPI,
  ) {}

  private path(organization: IOrganization, destination: IDestination) {
    return `organizations/${organization.id}/${destination.node}/${organization.workspace}`;
  }

  async create({
    sender,
    destination,
    message,
    organization,
  }: IMessageFields): Promise<string> {
    let bond = sender.bond;
    const path = this.path(organization, destination);

    if (!bond) bond = await this.bondAPI.get(path, sender, destination);

    const destinationPath = `${path}/history/${bond}/messages`;

    return this.dbCollectionService.createDocument(destinationPath, {
      text: message.text,
      sender_id: sender.id,
      destination_id: destination.id,
    });
  }
}
