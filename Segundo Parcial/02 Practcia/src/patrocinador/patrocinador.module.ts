import { Module } from '@nestjs/common';
import { PatrocinadorService } from './patrocinador.service';
import { PatrocinadorResolver } from './patrocinador.resolver';

@Module({
  providers: [PatrocinadorResolver, PatrocinadorService]
})
export class PatrocinadorModule {}
