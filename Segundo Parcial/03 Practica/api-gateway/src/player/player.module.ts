import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { PlayerController } from './player.controller';

@Module({
  imports: [ProxyModule],
  controllers: [PlayerController],
})
export class PlayerModule {}
