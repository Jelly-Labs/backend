import { Test, TestingModule } from '@nestjs/testing';
import { QqlService } from './qql.service';

describe('QqlService', () => {
  let service: QqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QqlService],
    }).compile();

    service = module.get<QqlService>(QqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
