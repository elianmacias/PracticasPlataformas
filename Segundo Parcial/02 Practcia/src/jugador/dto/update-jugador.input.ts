import { CreateJugadorInput } from './create-jugador.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateJugadorInput extends PartialType(CreateJugadorInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
