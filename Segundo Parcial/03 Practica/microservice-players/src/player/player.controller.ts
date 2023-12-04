import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerMsg } from 'src/common/constants';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @MessagePattern(PlayerMsg.CREATE)
  create(@Payload() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @MessagePattern(PlayerMsg.FIND_ALL)
  findAll() {
    return this.playerService.findAll();
  }

  @MessagePattern(PlayerMsg.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.playerService.findOne(id);
  }

  @MessagePattern(PlayerMsg.UPDATE)
  update(@Payload() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(updatePlayerDto);
  }

  @MessagePattern(PlayerMsg.DELETE)
  remove(@Payload() id: number) {
    return this.playerService.remove(id);
  }
}
