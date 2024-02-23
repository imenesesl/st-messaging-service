import {
  IsNotEmpty,
  IsString,
  ValidateNested,
  IsIn,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IFields,
  DestinationNode,
  IDestination,
  IMessage,
  IMessageFields,
  ISender,
  IOrganization,
} from './types';

export class DestinationDto implements IDestination {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['guardians', 'workspaces', 'tutors', 'channels', 'threads'])
  node: DestinationNode;
}

export class MessageDto implements IMessage {
  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  text?: string;
}

export class SenderDto implements ISender {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bond?: string;
}

export class OrganizationDto implements IOrganization {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  workspace: string;
}

export class MessageFieldsDto implements IMessageFields {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => SenderDto)
  sender: SenderDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => OrganizationDto)
  organization: OrganizationDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DestinationDto)
  destination: DestinationDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MessageDto)
  message: MessageDto;
}

export class FieldsDto implements IFields {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MessageFieldsDto)
  fields: MessageFieldsDto;
}
