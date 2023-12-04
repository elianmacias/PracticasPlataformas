import { CreateEquipoInput } from './create-equipo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateEquipoInput extends PartialType(CreateEquipoInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
