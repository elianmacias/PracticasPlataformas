export enum RabbitMQ {
  SponsorQueue = 'sponsors',
}

export enum SponsorMsg {
  CREATE = 'CREATE_SPONSOR',
  FIND_ALL = 'FIND_SPONSORS',
  FIND_ONE = 'FIND_SPONSOR',
  UPDATE = 'UPDATE_SPONSOR',
  DELETE = 'DELETE_SPONSOR',
}
