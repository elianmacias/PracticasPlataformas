import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateJugadorInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  direccion: string;
}
