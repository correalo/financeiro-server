import { Injectable } from '@nestjs/common';
import { CreateSurgicalTeamDto } from './dto/create-surgical-team.dto';
import { UpdateSurgicalTeamDto } from './dto/update-surgical-team.dto';

@Injectable()
export class SurgicalTeamsService {
  create(createSurgicalTeamDto: CreateSurgicalTeamDto) {
    return 'This action adds a new surgicalTeam';
  }

  findAll() {
    return `This action returns all surgicalTeams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surgicalTeam`;
  }

  update(id: number, updateSurgicalTeamDto: UpdateSurgicalTeamDto) {
    return `This action updates a #${id} surgicalTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} surgicalTeam`;
  }
}
