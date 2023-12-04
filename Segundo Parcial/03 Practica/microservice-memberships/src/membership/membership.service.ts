import { Injectable } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { Membership } from './entities/membership.entity';

@Injectable()
export class MembershipService {
  private registros: Membership[] = [
    {
      id: 1,
      nombre: 'Golden',
      estado: 'activo',
    },
    {
      id: 2,
      nombre: 'Platinium',
      estado: 'falta de pago',
    },
  ];

  create(createMembershipDto: CreateMembershipDto) {
    const element = new Membership();
    this.registros.sort((a, b) => b.id - a.id);
    element.id = this.registros[0].id + 1;
    element.nombre = createMembershipDto.nombre;
    element.estado = createMembershipDto.estado;
    this.registros.push(element);
    return element;
  }

  findAll() {
    return this.registros;
  }

  findOne(id: number) {
    return this.registros.find((item) => item.id === Number(id));
  }

  update(updateMembershipDto: UpdateMembershipDto) {
    const element = this.findOne(updateMembershipDto.id);
    element.nombre = updateMembershipDto.nombre;
    element.estado = updateMembershipDto.estado;

    this.registros = this.registros.map((item) => {
      if (item.id === updateMembershipDto.id) {
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
