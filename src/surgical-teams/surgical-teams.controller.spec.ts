import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalTeamsController } from './surgical-teams.controller';
import { SurgicalTeamsService } from './surgical-teams.service';

describe('SurgicalTeamsController', () => {
  let controller: SurgicalTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurgicalTeamsController],
      providers: [SurgicalTeamsService],
    }).compile();

    controller = module.get<SurgicalTeamsController>(SurgicalTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
