import { Injectable } from '@nestjs/common';
import { CreateJugadorInput } from './dto/create-jugador.input';
import { UpdateJugadorInput } from './dto/update-jugador.input';
import { Jugador } from './entities/jugador.entity';

@Injectable()
export class JugadorService {
  private registros: Jugador[] = [
    {
      id: 1,
      nombre: 'Darel',
      direccion: 'Manta',
      eliminado: false,
    },
    {
      id: 2,
      nombre: 'Enrique',
      direccion: 'Jipijapa',
      eliminado: false,
    },
  ];

  create(createJugadorInput: CreateJugadorInput) {
    const element = new Jugador();
    element.id = this.registros.length + 1;
    element.nombre = createJugadorInput.nombre;
    element.direccion = createJugadorInput.direccion;
    element.eliminado = false;
    this.registros.push(element);
    return element;
  }

  findAll() {
    return this.registros;
  }

  findOne(id: number) {
    return this.registros.find((item) => item.id === id);
  }

  update(id: number, updateJugadorInput: UpdateJugadorInput) {
    const element = this.findOne(id);
    element.nombre = updateJugadorInput.nombre;
    element.direccion = updateJugadorInput.direccion;

    this.registros = this.registros.map((item) => {
      if (item.id === id) {
        return element;
      }
      return item;
    });

    return element;
  }

  remove(id: number) {
    this.registros.map((item) => {
      if (item.id === id) {
        item.eliminado = true;
      }

      return item;
    });

    return this.findOne(id);
  }
}
