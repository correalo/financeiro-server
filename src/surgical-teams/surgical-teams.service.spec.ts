import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalTeamsService } from './surgical-teams.service';

describe('SurgicalTeamsService', () => {
  let service: SurgicalTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurgicalTeamsService],
    }).compile();

    service = module.get<SurgicalTeamsService>(SurgicalTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
