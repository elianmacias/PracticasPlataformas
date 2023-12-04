export enum RabbitMQ {
  PlayerQueue = 'players',
  TeamQueue = 'teams',
  SponsorQueue = 'sponsors',
  MembershipQueue = 'memberships',
}

export enum PlayerMsg {
  CREATE = 'CREATE_PLAYER',
  FIND_ALL = 'FIND_PLAYERS',
  FIND_ONE = 'FIND_PLAYER',
  UPDATE = 'UPDATE_PLAYER',
  DELETE = 'DELETE_PLAYER',
}

export enum TeamMsg {
  CREATE = 'CREATE_TEAM',
  FIND_ALL = 'FIND_TEAMS',
  FIND_ONE = 'FIND_TEAM',
  UPDATE = 'UPDATE_TEAM',
  DELETE = 'DELETE_TEAM',
}

export enum SponsorMsg {
  CREATE = 'CREATE_SPONSOR',
  FIND_ALL = 'FIND_SPONSORS',
  FIND_ONE = 'FIND_SPONSOR',
  UPDATE = 'UPDATE_SPONSOR',
  DELETE = 'DELETE_SPONSOR',
}

export enum MembershipMsg {
  CREATE = 'CREATE_MEMBERSHIP',
  FIND_ALL = 'FIND_MEMBERSHIPS',
  FIND_ONE = 'FIND_MEMBERSHIP',
  UPDATE = 'UPDATE_MEMBERSHIP',
  DELETE = 'DELETE_MEMBERSHIP',
}
