import { Module } from '@nestjs/common';
import { SurgicalTeamsService } from './surgical-teams.service';
import { SurgicalTeamsController } from './surgical-teams.controller';

@Module({
  controllers: [SurgicalTeamsController],
  providers: [SurgicalTeamsService]
})
export class SurgicalTeamsModule {}
