import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  private registros: Team[] = [
    {
      id: 1,
      nombre: 'Barcelona',
      color: 'amarrilo',
    },
    {
      id: 2,
      nombre: 'Emelec',
      color: 'azul',
    },
  ];

  create(createTeamDto: CreateTeamDto) {
    const element = new Team();
    this.registros.sort((a, b) => b.id - a.id);
    element.id = this.registros[0].id + 1;
    element.nombre = createTeamDto.nombre;
    element.color = createTeamDto.color;
    this.registros.push(element);
    return element;
  }

  findAll() {
    return this.registros;
  }

  findOne(id: number) {
    return this.registros.find((item) => item.id === Number(id));
  }

  update(updateTeamDto: UpdateTeamDto) {
    const element = this.findOne(updateTeamDto.id);
    element.nombre = updateTeamDto.nombre;
    element.color = updateTeamDto.color;

    this.registros = this.registros.map((item) => {
      if (item.id === updateTeamDto.id) {
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
