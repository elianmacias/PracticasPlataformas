export enum RabbitMQ {
  MembershipQueue = 'memberships',
}

export enum MembershipMsg {
  CREATE = 'CREATE_MEMBERSHIP',
  FIND_ALL = 'FIND_MEMBERSHIPS',
  FIND_ONE = 'FIND_MEMBERSHIP',
  UPDATE = 'UPDATE_MEMBERSHIP',
  DELETE = 'DELETE_MEMBERSHIP',
}
