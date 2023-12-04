export enum RabbitMQ {
  PlayerQueue = 'players',
}

export enum PlayerMsg {
  CREATE = 'CREATE_PLAYER',
  FIND_ALL = 'FIND_PLAYERS',
  FIND_ONE = 'FIND_PLAYER',
  UPDATE = 'UPDATE_PLAYER',
  DELETE = 'DELETE_PLAYER',
}
