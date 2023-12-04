import { IsNotEmpty } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  color: string;
}
