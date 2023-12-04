import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { JugadorModule } from '../jugador/jugador.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports: [JugadorModule],
})
export class MensajesWsModule {}
