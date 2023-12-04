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

import { MembershipDto } from './dto/membership.dto';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { MembershipMsg } from 'src/common/constants';
import { IMembership } from 'src/common/interfaces/membership.interface';

@ApiTags('memberships')
@Controller('api/v2/membership')
export class MembershipController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxy = this.clientProxy.clientProxyMemberships();

  @Post()
  create(@Body() dto: MembershipDto) {
    return this._clientProxy.send(MembershipMsg.CREATE, dto);
  }

  @Get()
  findAll(): Observable<IMembership[]> {
    return this._clientProxy.send(MembershipMsg.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<IMembership> {
    return this._clientProxy.send(MembershipMsg.FIND_ONE, id);
  }

  @Put()
  update(@Body() dto: MembershipDto): Observable<IMembership> {
    return this._clientProxy.send(MembershipMsg.UPDATE, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<IMembership> {
    return this._clientProxy.send(MembershipMsg.DELETE, id);
  }
}
