import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePatrocinadorInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  estado: string;
}
