import { Module } from '@nestjs/common';
import { SponsorController } from './sponsor.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [SponsorController],
})
export class SponsorModule {}
