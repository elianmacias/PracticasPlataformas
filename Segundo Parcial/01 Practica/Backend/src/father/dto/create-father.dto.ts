import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFatherDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipoDeSangre: string;

  @IsString()
  @IsNotEmpty()
  observaciones: string;
}
