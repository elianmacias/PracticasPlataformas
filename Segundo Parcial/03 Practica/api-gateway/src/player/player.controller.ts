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
import { PlayerDTO } from './dto/player.dto';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { IPlayer } from 'src/common/interfaces/player.interface';
import { PlayerMsg } from 'src/common/constants';

@ApiTags('players')
@Controller('api/v2/player')
export class PlayerController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyPlayer = this.clientProxy.clientProxyPlayers();

  @Post()
  create(@Body() playerDto: PlayerDTO): Observable<IPlayer> {
    return this._clientProxyPlayer.send(PlayerMsg.CREATE, playerDto);
  }

  @Get()
  findAll(): Observable<IPlayer[]> {
    return this._clientProxyPlayer.send(PlayerMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<IPlayer> {
    return this._clientProxyPlayer.send(PlayerMsg.FIND_ONE, id);
  }

  @Put()
  update(@Body() playerDto: PlayerDTO): Observable<IPlayer> {
    return this._clientProxyPlayer.send(PlayerMsg.UPDATE, playerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<IPlayer> {
    return this._clientProxyPlayer.send(PlayerMsg.DELETE, id);
  }
}
