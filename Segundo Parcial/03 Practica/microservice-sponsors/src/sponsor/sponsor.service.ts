import { Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { Sponsor } from './entities/sponsor.entity';

@Injectable()
export class SponsorService {
  private registros: Sponsor[] = [
    {
      id: 1,
      nombre: 'Coca cola',
      estado: 'activo',
    },
    {
      id: 2,
      nombre: 'esquina de ales',
      estado: 'pendiente',
    },
  ];

  create(createSponsorDto: CreateSponsorDto) {
    const element = new Sponsor();
    this.registros.sort((a, b) => b.id - a.id);
    element.id = this.registros[0].id + 1;
    element.nombre = createSponsorDto.nombre;
    element.estado = createSponsorDto.estado;
    this.registros.push(element);
    return element;
  }

  findAll() {
    return this.registros;
  }

  findOne(id: number) {
    return this.registros.find((item) => item.id === Number(id));
  }

  update(updateSponsorDto: UpdateSponsorDto) {
    const element = this.findOne(updateSponsorDto.id);
    element.nombre = updateSponsorDto.nombre;
    element.estado = updateSponsorDto.estado;

    this.registros = this.registros.map((item) => {
      if (item.id === updateSponsorDto.id) {
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
