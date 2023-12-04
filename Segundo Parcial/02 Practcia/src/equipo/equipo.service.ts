import { Injectable } from '@nestjs/common';
import { CreateEquipoInput } from './dto/create-equipo.input';
import { UpdateEquipoInput } from './dto/update-equipo.input';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquipoService {
  private registros: Equipo[] = [
    {
      id: 1,
      nombre: 'Barcelona',
      eliminado: false,
    },
    {
      id: 2,
      nombre: 'Emelec',
      eliminado: false,
    },
  ];
  create(createEquipoInput: CreateEquipoInput) {
    const element = new Equipo();
    element.id = this.registros.length + 1;
    element.nombre = createEquipoInput.nombre;
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

  update(id: number, updateEquipoInput: UpdateEquipoInput) {
    const element = this.findOne(id);
    element.nombre = updateEquipoInput.nombre;

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
