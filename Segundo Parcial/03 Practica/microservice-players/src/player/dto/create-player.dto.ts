import { IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  direccion: string;
}
