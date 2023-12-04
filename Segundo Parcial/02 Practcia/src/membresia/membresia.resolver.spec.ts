import { Test, TestingModule } from '@nestjs/testing';
import { MembresiaResolver } from './membresia.resolver';
import { MembresiaService } from './membresia.service';

describe('MembresiaResolver', () => {
  let resolver: MembresiaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembresiaResolver, MembresiaService],
    }).compile();

    resolver = module.get<MembresiaResolver>(MembresiaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
