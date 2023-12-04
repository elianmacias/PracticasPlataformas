import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateMembresiaInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  estado: string;
}
