import { PartialType } from '@nestjs/mapped-types';
import { CreateFatherDto } from './create-father.dto';

import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateFatherDto extends PartialType(CreateFatherDto) {
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
