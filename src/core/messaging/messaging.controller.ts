import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { FieldsDto } from './dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('messaging')
@Controller('rest/api/v1/messaging')
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @Post()
  @ApiOperation({ summary: 'create message' })
  async create(@Body() { fields }: FieldsDto): Promise<string> {
    if (
      (fields.message.id && fields.message.text) ||
      (!fields.message.id && !fields.message.text)
    ) {
      throw new HttpException(
        'Either id or text must be provided, but not both',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.messagingService.create(fields);
  }
}
