import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SponsorModule } from './sponsor/sponsor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    SponsorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
