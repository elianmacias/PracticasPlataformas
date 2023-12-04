import { CreateMembresiaInput } from './create-membresia.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateMembresiaInput extends PartialType(CreateMembresiaInput) {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;
}
