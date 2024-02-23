import { Module } from '@nestjs/common';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';
import { DBCollectionService } from '@services/db-collection';
import { BondAPI } from '@api/bond';

@Module({
  controllers: [MessagingController],
  providers: [MessagingService, DBCollectionService, BondAPI],
})
export class MessagingModule {}
