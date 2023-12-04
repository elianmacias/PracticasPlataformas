import { Module } from '@nestjs/common';
import { MembresiaService } from './membresia.service';
import { MembresiaResolver } from './membresia.resolver';

@Module({
  providers: [MembresiaResolver, MembresiaService],
})
export class MembresiaModule {}
