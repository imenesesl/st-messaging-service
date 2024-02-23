export enum NodeTypes {
  GUARDIANS = 'guardians',
  WORKSPACES = 'workspaces',
  TUTORS = 'tutors',
  CHANNELS = 'channels',
  THREADS = 'threads',
}

export type DestinationNode =
  | NodeTypes.GUARDIANS
  | NodeTypes.WORKSPACES
  | NodeTypes.TUTORS
  | NodeTypes.CHANNELS
  | NodeTypes.THREADS;

export interface IDestination {
  id: string;
  node: DestinationNode;
  type: string;
}

export interface IMessage {
  id?: string;
  text?: string;
}

export interface ISender {
  id: string;
  bond?: string;
}

export interface IOrganization {
  id: string;
  workspace: string;
}

export interface IMessageFields {
  sender: ISender;
  organization: IOrganization;
  destination: IDestination;
  message: IMessage;
}

export interface IFields {
  fields: IMessageFields;
}
