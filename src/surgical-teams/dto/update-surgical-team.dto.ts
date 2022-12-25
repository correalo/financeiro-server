import { PartialType } from '@nestjs/mapped-types';
import { CreateSurgicalTeamDto } from './create-surgical-team.dto';

export class UpdateSurgicalTeamDto extends PartialType(CreateSurgicalTeamDto) {}
