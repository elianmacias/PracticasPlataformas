import { Module } from '@nestjs/common';
import { FatherService } from './father.service';
import { FatherController } from './father.controller';

import { Father } from './entities/father.entity';

@Module({
  controllers: [FatherController],
  providers: [FatherService],
  imports: [Father],
  exports: [FatherService, Father],
})
export class FatherModule {}
