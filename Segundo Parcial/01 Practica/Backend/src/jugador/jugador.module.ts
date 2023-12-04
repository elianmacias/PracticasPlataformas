import { Module } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';

import { Jugador } from './entities/jugador.entity';

@Module({
  controllers: [JugadorController],
  providers: [JugadorService],
  imports: [Jugador],
  exports: [JugadorService, Jugador],
})
export class JugadorModule {}
