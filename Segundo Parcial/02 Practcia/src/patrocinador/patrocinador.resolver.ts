import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatrocinadorService } from './patrocinador.service';
import { Patrocinador } from './entities/patrocinador.entity';
import { CreatePatrocinadorInput } from './dto/create-patrocinador.input';
import { UpdatePatrocinadorInput } from './dto/update-patrocinador.input';

@Resolver(() => Patrocinador)
export class PatrocinadorResolver {
  constructor(private readonly patrocinadorService: PatrocinadorService) {}

  @Mutation(() => Patrocinador)
  createPatrocinador(
    @Args('createPatrocinadorInput')
    createPatrocinadorInput: CreatePatrocinadorInput,
  ) {
    return this.patrocinadorService.create(createPatrocinadorInput);
  }

  @Query(() => [Patrocinador], { name: 'listadopatrocinador' })
  findAll() {
    return this.patrocinadorService.findAll();
  }

  @Query(() => Patrocinador, { name: 'idpatrocinador' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patrocinadorService.findOne(id);
  }

  @Mutation(() => Patrocinador)
  updatePatrocinador(
    @Args('updatePatrocinadorInput')
    updatePatrocinadorInput: UpdatePatrocinadorInput,
  ) {
    return this.patrocinadorService.update(
      updatePatrocinadorInput.id,
      updatePatrocinadorInput,
    );
  }

  @Mutation(() => Patrocinador)
  removePatrocinador(@Args('id', { type: () => Int }) id: number) {
    return this.patrocinadorService.remove(id);
  }
}
