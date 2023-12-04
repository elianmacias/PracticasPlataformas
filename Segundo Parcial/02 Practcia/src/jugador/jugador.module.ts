import { Module } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { JugadorResolver } from './jugador.resolver';

@Module({
  providers: [JugadorResolver, JugadorService],
})
export class JugadorModule {}
