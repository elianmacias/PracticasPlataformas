import { Module } from '@nestjs/common';
import { MembershipController } from './membership.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [MembershipController],
})
export class MembershipModule {}
