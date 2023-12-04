import { Injectable } from '@nestjs/common';
import { CreatePatrocinadorInput } from './dto/create-patrocinador.input';
import { UpdatePatrocinadorInput } from './dto/update-patrocinador.input';
import { Patrocinador } from './entities/patrocinador.entity';

@Injectable()
export class PatrocinadorService {
  private registros: Patrocinador[] = [
    {
      id: 1,
      nombre: 'Coca cola',
      estado: 'activo',
      eliminado: false,
    },
    {
      id: 2,
      nombre: 'esquina de ales',
      estado: 'pendiente',
      eliminado: false,
    },
  ];

  create(createPatrocinadorInput: CreatePatrocinadorInput) {
    const element = new Patrocinador();
    element.id = this.registros.length + 1;
    element.nombre = createPatrocinadorInput.nombre;
    element.estado = createPatrocinadorInput.estado;
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

  update(id: number, updatePatrocinadorInput: UpdatePatrocinadorInput) {
    const element = this.findOne(id);
    element.nombre = updatePatrocinadorInput.nombre;
    element.estado = updatePatrocinadorInput.estado;

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
