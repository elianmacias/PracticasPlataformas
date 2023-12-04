import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SponsorService } from './sponsor.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { SponsorMsg } from 'src/common/constants';

@Controller()
export class SponsorController {
  constructor(private readonly sponsorService: SponsorService) {}

  @MessagePattern(SponsorMsg.CREATE)
  create(@Payload() createSponsorDto: CreateSponsorDto) {
    return this.sponsorService.create(createSponsorDto);
  }

  @MessagePattern(SponsorMsg.FIND_ALL)
  findAll() {
    return this.sponsorService.findAll();
  }

  @MessagePattern(SponsorMsg.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.sponsorService.findOne(id);
  }

  @MessagePattern(SponsorMsg.UPDATE)
  update(@Payload() updateSponsorDto: UpdateSponsorDto) {
    return this.sponsorService.update(updateSponsorDto);
  }

  @MessagePattern(SponsorMsg.DELETE)
  remove(@Payload() id: number) {
    return this.sponsorService.remove(id);
  }
}
