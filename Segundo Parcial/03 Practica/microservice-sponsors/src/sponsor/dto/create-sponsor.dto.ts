import { IsNotEmpty } from 'class-validator';

export class CreateSponsorDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  estado: string;
}
