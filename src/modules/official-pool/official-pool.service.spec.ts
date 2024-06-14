import { Test, TestingModule } from '@nestjs/testing';
import { OfficialPoolService } from './official-pool.service';

describe('OfficialPoolService', () => {
  let service: OfficialPoolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficialPoolService],
    }).compile();

    service = module.get<OfficialPoolService>(OfficialPoolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
