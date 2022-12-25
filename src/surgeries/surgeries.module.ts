import { Module } from '@nestjs/common';
import { SurgeriesService } from './surgeries.service';
import { SurgeriesController } from './surgeries.controller';

@Module({
  controllers: [SurgeriesController],
  providers: [SurgeriesService]
})
export class SurgeriesModule {}
