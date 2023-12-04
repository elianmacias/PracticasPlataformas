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

import { SponsorDto } from './dto/sponsor.dto';

import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { SponsorMsg } from 'src/common/constants';
import { ISponsor } from 'src/common/interfaces/sponsor.interface';

@ApiTags('sponsors')
@Controller('api/v2/sponsor')
export class SponsorController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxy = this.clientProxy.clientProxySponsors();

  @Post()
  create(@Body() dto: SponsorDto) {
    return this._clientProxy.send(SponsorMsg.CREATE, dto);
  }

  @Get()
  findAll(): Observable<ISponsor[]> {
    return this._clientProxy.send(SponsorMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<ISponsor> {
    return this._clientProxy.send(SponsorMsg.FIND_ONE, id);
  }

  @Put()
  update(@Body() dto: SponsorDto): Observable<ISponsor> {
    return this._clientProxy.send(SponsorMsg.UPDATE, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<ISponsor> {
    return this._clientProxy.send(SponsorMsg.DELETE, id);
  }
}
