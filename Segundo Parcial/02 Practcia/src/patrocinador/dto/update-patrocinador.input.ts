import { CreatePatrocinadorInput } from './create-patrocinador.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdatePatrocinadorInput extends PartialType(
  CreatePatrocinadorInput,
) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
