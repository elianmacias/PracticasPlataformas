import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

import { JugadorService } from '../jugador/jugador.service';
import { Jugador } from '../jugador/entities/jugador.entity';

interface ConnectedClients {
  [id: string]: {
    socket: Socket;
    jugador: Jugador;
  };
}

@Injectable()
export class MensajesWsService {
  private connectedClients: ConnectedClients = {};

  constructor(private readonly service: JugadorService) {}

  async registerClient(client: Socket, name: string) {
    const jugador = this.service.findOneByName(name);
    if (!jugador) {
      console.log('no encontrado en bd');
      throw new Error('jugador no encontrado');
    }

    this.connectedClients[client.id] = {
      socket: client,
      jugador: jugador,
    };
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    // return Object.keys(this.connectedClients).length;
    // console.log(this.connectedClients)
    return Object.keys(this.connectedClients);
  }

  getName(id: string) {
    return this.connectedClients[id].jugador.nombre;
  }
}
