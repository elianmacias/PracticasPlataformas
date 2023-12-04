import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EquipoService } from './equipo.service';
import { Equipo } from './entities/equipo.entity';
import { CreateEquipoInput } from './dto/create-equipo.input';
import { UpdateEquipoInput } from './dto/update-equipo.input';

@Resolver(() => Equipo)
export class EquipoResolver {
  constructor(private readonly equipoService: EquipoService) {}

  @Mutation(() => Equipo)
  createEquipo(
    @Args('createEquipoInput') createEquipoInput: CreateEquipoInput,
  ) {
    return this.equipoService.create(createEquipoInput);
  }

  @Query(() => [Equipo], { name: 'listadoequipo' })
  findAll() {
    return this.equipoService.findAll();
  }

  @Query(() => Equipo, { name: 'idequipo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.equipoService.findOne(id);
  }

  @Mutation(() => Equipo)
  updateEquipo(
    @Args('updateEquipoInput') updateEquipoInput: UpdateEquipoInput,
  ) {
    return this.equipoService.update(updateEquipoInput.id, updateEquipoInput);
  }

  @Mutation(() => Equipo)
  removeEquipo(@Args('id', { type: () => Int }) id: number) {
    return this.equipoService.remove(id);
  }
}
