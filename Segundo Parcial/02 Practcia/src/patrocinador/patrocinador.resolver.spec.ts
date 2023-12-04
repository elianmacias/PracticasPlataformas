import { Test, TestingModule } from '@nestjs/testing';
import { PatrocinadorResolver } from './patrocinador.resolver';
import { PatrocinadorService } from './patrocinador.service';

describe('PatrocinadorResolver', () => {
  let resolver: PatrocinadorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatrocinadorResolver, PatrocinadorService],
    }).compile();

    resolver = module.get<PatrocinadorResolver>(PatrocinadorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
