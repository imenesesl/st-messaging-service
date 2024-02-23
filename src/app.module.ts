import { Module } from '@nestjs/common';
import { MessagingModule } from '@core/messaging/messaging.module';
import { FirebaseEngine } from '@modules/firebase';

@Module({
  imports: [MessagingModule],
})
export class AppModule {
  constructor() {
    FirebaseEngine.init();
  }
}
