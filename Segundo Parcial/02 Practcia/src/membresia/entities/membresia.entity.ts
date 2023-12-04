import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Membresia {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  estado: string;

  @Field(() => Boolean)
  eliminado: boolean;
}
