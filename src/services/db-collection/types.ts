export type WhereFilter =
  | '<'
  | '<='
  | '=='
  | '!='
  | '>='
  | '>'
  | 'array-contains'
  | 'in'
  | 'not-in'
  | 'array-contains-any';

export interface FilterWhere {
  key: string;
  operation: WhereFilter;
  value: any;
}

export interface Options {
  limit?: number;
}
