import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  private registros: Player[] = [
    {
      id: 1,
      nombre: 'Darel',
      direccion: 'Manta',
    },
    {
      id: 2,
      nombre: 'Enrique',
      direccion: 'Jipijapa',
    },
  ];

  create(createPlayerDto: CreatePlayerDto) {
    const element = new Player();
    this.registros.sort((a, b) => b.id - a.id);
    element.id = this.registros[0].id + 1;
    element.nombre = createPlayerDto.nombre;
    element.direccion = createPlayerDto.direccion;
    this.registros.push(element);
    return element;
  }

  findAll() {
    return this.registros;
  }

  findOne(id: number) {
    return this.registros.find((item) => item.id === Number(id));
  }

  update(updatePlayerDto: UpdatePlayerDto) {
    const element = this.findOne(updatePlayerDto.id);
    element.nombre = updatePlayerDto.nombre;
    element.direccion = updatePlayerDto.direccion;

    this.registros = this.registros.map((item) => {
      if (item.id === updatePlayerDto.id) {
        return element;
      }
      return item;
    });

    return element;
  }

  remove(id: number) {
    const element = this.findOne(id);

    this.registros = this.registros.filter((item) => item.id !== Number(id));

    return element;
  }
}
