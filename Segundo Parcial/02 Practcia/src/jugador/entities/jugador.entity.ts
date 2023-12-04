import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Jugador {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  direccion: string;

  @Field(() => Boolean)
  eliminado: boolean;
}
