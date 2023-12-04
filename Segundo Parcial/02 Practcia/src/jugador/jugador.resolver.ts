import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JugadorService } from './jugador.service';
import { Jugador } from './entities/jugador.entity';
import { CreateJugadorInput } from './dto/create-jugador.input';
import { UpdateJugadorInput } from './dto/update-jugador.input';

@Resolver(() => Jugador)
export class JugadorResolver {
  constructor(private readonly jugadorService: JugadorService) {}

  @Mutation(() => Jugador)
  createJugador(
    @Args('createJugadorInput') createJugadorInput: CreateJugadorInput,
  ) {
    return this.jugadorService.create(createJugadorInput);
  }

  @Query(() => [Jugador], { name: 'listadojugadores' })
  findAll() {
    return this.jugadorService.findAll();
  }

  @Query(() => Jugador, { name: 'idjugador' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jugadorService.findOne(id);
  }

  @Mutation(() => Jugador)
  updateJugador(
    @Args('updateJugadorInput') updateJugadorInput: UpdateJugadorInput,
  ) {
    return this.jugadorService.update(
      updateJugadorInput.id,
      updateJugadorInput,
    );
  }

  @Mutation(() => Jugador)
  removeJugador(@Args('id', { type: () => Int }) id: number) {
    return this.jugadorService.remove(id);
  }
}
