import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { Father } from './entities/father.entity';

@Injectable()
export class FatherService {
  private fathers: Father[] = [
    {
      id: 1,
      nombre: 'Carlos',
      tipoDeSangre: 'A+',
      observaciones: 'sin observaciones',
    },
    {
      id: 2,
      nombre: 'Benito',
      tipoDeSangre: 'O-',
      observaciones: 'esta enfermo',
    },
  ];

  create(createFatherDto: CreateFatherDto) {
    const father = new Father();
    father.id = this.fathers.length;
    father.nombre = createFatherDto.nombre;
    father.tipoDeSangre = createFatherDto.tipoDeSangre;
    father.observaciones = createFatherDto.observaciones;
    this.fathers.push(father);
    return father;
  }

  findAll(): Father[] {
    return this.fathers;
  }

  findOne(id: number) {
    const father = this.fathers.find((father) => father.id === id);
    if (!father) {
      throw new NotFoundException(`ID ${id} not found`);
    }
    return father;
  }

  findOneByName(name: string) {
    const father = this.fathers.find((father) => father.nombre === name);
    if (!father) {
      throw new NotFoundException(`ID ${name} not found`);
    }
    return father;
  }

  update(id: number, updateFatherDto: UpdateFatherDto) {
    const { nombre, tipoDeSangre, observaciones } = updateFatherDto;

    const father = this.findOne(id);

    father.nombre = nombre ? nombre : father.nombre;
    father.tipoDeSangre = tipoDeSangre ? tipoDeSangre : father.tipoDeSangre;
    father.observaciones = observaciones ? observaciones : father.observaciones;

    this.fathers = this.fathers.map((item) => {
      if (item.id === id) {
        return father;
      }
      return item;
    });

    return father;
  }

  remove(id: number) {
    this.findOne(id);
    this.fathers = this.fathers.filter((item) => item.id !== id);
  }
}
