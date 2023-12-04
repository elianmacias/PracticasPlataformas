import { Module } from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { EquipoResolver } from './equipo.resolver';

@Module({
  providers: [EquipoResolver, EquipoService]
})
export class EquipoModule {}
