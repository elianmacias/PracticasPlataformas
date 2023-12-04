import { IsNotEmpty } from 'class-validator';

export class CreateMembershipDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  estado: string;
}
