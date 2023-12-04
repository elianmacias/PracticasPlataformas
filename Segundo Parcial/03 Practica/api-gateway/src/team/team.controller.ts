import { ApiTags } from '@nestjs/swagger';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { TeamDto } from './dto/team.dto';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { TeamMsg } from 'src/common/constants';
import { ITeam } from 'src/common/interfaces/team.interface';

@ApiTags('players')
@Controller('api/v2/team')
export class TeamController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxy = this.clientProxy.clientProxyTeams();

  @Post()
  create(@Body() teamDto: TeamDto) {
    return this._clientProxy.send(TeamMsg.CREATE, teamDto);
  }

  @Get()
  findAll(): Observable<ITeam[]> {
    return this._clientProxy.send(TeamMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<ITeam> {
    return this._clientProxy.send(TeamMsg.FIND_ONE, id);
  }

  @Put()
  update(@Body() dto: TeamDto): Observable<ITeam> {
    return this._clientProxy.send(TeamMsg.UPDATE, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<ITeam> {
    return this._clientProxy.send(TeamMsg.DELETE, id);
  }
}
