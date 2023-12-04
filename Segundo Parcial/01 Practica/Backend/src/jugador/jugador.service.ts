import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJugadorDto } from './dto/create-jugador.dto';
import { UpdateJugadorDto } from './dto/update-jugador.dto';

import { Jugador } from './entities/jugador.entity';

@Injectable()
export class JugadorService {
  private jugadores: Jugador[] = [
    {
      id: 1,
      nombre: 'Darel',
      direccion: 'Manta',
      fecha: '01/01/2023',
    },
    {
      id: 2,
      nombre: 'Enrique',
      direccion: 'jijipjapa',
      fecha: '10/10/2023',
    },
  ];

  create(createJugadorDto: CreateJugadorDto) {
    return 'This action adds a new jugador';
  }

  findAll() {
    return `This action returns all jugador`;
  }

  findOne(id: number) {
    const jugador = this.jugadores.find((jugador) => jugador.id === id);
    if (!jugador) {
      throw new NotFoundException(`ID ${id} not found`);
    }
    return jugador;
  }

  findOneByName(name: string) {
    const jugador = this.jugadores.find((jugador) => jugador.nombre === name);
    if (!jugador) {
      throw new NotFoundException(`ID ${name} not found`);
    }
    return jugador;
  }

  update(id: number, updateJugadorDto: UpdateJugadorDto) {
    return `This action updates a #${id} jugador`;
  }

  remove(id: number) {
    return `This action removes a #${id} jugador`;
  }
}
