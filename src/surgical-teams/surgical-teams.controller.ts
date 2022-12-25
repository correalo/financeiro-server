import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SurgicalTeamsService } from './surgical-teams.service';
import { CreateSurgicalTeamDto } from './dto/create-surgical-team.dto';
import { UpdateSurgicalTeamDto } from './dto/update-surgical-team.dto';

@Controller('surgical-teams')
export class SurgicalTeamsController {
  constructor(private readonly surgicalTeamsService: SurgicalTeamsService) {}

  @Post()
  create(@Body() createSurgicalTeamDto: CreateSurgicalTeamDto) {
    return this.surgicalTeamsService.create(createSurgicalTeamDto);
  }

  @Get()
  findAll() {
    return this.surgicalTeamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surgicalTeamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurgicalTeamDto: UpdateSurgicalTeamDto) {
    return this.surgicalTeamsService.update(+id, updateSurgicalTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surgicalTeamsService.remove(+id);
  }
}
