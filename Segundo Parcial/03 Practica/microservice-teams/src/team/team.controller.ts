import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamMsg } from 'src/common/constants';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @MessagePattern(TeamMsg.CREATE)
  create(@Payload() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @MessagePattern(TeamMsg.FIND_ALL)
  findAll() {
    return this.teamService.findAll();
  }

  @MessagePattern(TeamMsg.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.teamService.findOne(id);
  }

  @MessagePattern(TeamMsg.UPDATE)
  update(@Payload() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(updateTeamDto);
  }

  @MessagePattern(TeamMsg.DELETE)
  remove(@Payload() id: number) {
    return this.teamService.remove(id);
  }
}
