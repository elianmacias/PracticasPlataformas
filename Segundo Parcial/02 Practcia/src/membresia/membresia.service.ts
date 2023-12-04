import { Injectable } from '@nestjs/common';
import { CreateMembresiaInput } from './dto/create-membresia.input';
import { UpdateMembresiaInput } from './dto/update-membresia.input';
import { Membresia } from './entities/membresia.entity';
@Injectable()
export class MembresiaService {
  private registros: Membresia[] = [
    {
      id: 1,
      nombre: 'Golden',
      estado: 'activo',
      eliminado: false,
    },
    {
      id: 2,
      nombre: 'Platinium',
      estado: 'falta de pago',
      eliminado: false,
    },
  ];

  create(createMembresiaInput: CreateMembresiaInput) {
    const element = new Membresia();
    element.id = this.registros.length + 1;
    element.nombre = createMembresiaInput.nombre;
    element.estado = createMembresiaInput.estado;
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

  update(id: number, updateMembresiaInput: UpdateMembresiaInput) {
    const element = this.findOne(id);
    element.nombre = updateMembresiaInput.nombre;
    element.estado = updateMembresiaInput.estado;

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
