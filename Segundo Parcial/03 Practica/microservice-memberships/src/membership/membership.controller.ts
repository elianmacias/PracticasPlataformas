import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { MembershipMsg } from 'src/common/constants';

@Controller()
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @MessagePattern(MembershipMsg.CREATE)
  create(@Payload() createMembershipDto: CreateMembershipDto) {
    return this.membershipService.create(createMembershipDto);
  }

  @MessagePattern(MembershipMsg.FIND_ALL)
  findAll() {
    return this.membershipService.findAll();
  }

  @MessagePattern(MembershipMsg.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.membershipService.findOne(id);
  }

  @MessagePattern(MembershipMsg.UPDATE)
  update(@Payload() updateMembershipDto: UpdateMembershipDto) {
    return this.membershipService.update(updateMembershipDto);
  }

  @MessagePattern(MembershipMsg.DELETE)
  remove(@Payload() id: number) {
    return this.membershipService.remove(id);
  }
}
