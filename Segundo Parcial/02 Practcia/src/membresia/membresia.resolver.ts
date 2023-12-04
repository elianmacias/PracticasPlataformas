import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MembresiaService } from './membresia.service';
import { Membresia } from './entities/membresia.entity';
import { CreateMembresiaInput } from './dto/create-membresia.input';
import { UpdateMembresiaInput } from './dto/update-membresia.input';

@Resolver(() => Membresia)
export class MembresiaResolver {
  constructor(private readonly membresiaService: MembresiaService) {}

  @Mutation(() => Membresia)
  createMembresia(
    @Args('createMembresiaInput') createMembresiaInput: CreateMembresiaInput,
  ) {
    return this.membresiaService.create(createMembresiaInput);
  }

  @Query(() => [Membresia], { name: 'listadomembresia' })
  findAll() {
    return this.membresiaService.findAll();
  }

  @Query(() => Membresia, { name: 'idmembresia' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.membresiaService.findOne(id);
  }

  @Mutation(() => Membresia)
  updateMembresia(
    @Args('updateMembresiaInput') updateMembresiaInput: UpdateMembresiaInput,
  ) {
    return this.membresiaService.update(
      updateMembresiaInput.id,
      updateMembresiaInput,
    );
  }

  @Mutation(() => Membresia)
  removeMembresia(@Args('id', { type: () => Int }) id: number) {
    return this.membresiaService.remove(id);
  }
}
