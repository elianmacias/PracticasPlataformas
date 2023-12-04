import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Patrocinador {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  nombre: string;

  @Field(() => String)
  estado: string;

  @Field(() => Boolean)
  eliminado: boolean;
}
