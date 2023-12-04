import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Equipo {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => Boolean)
  eliminado: boolean;
}
