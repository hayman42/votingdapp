import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { setStatusRequestDto } from './dto/setstatus.request.dto';
import { voteRequestDto } from './dto/vote.request.dto';
import { PollService } from './poll.service';
describe('PollService', () => {
    let service: PollService;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        service = module.get<PollService>(PollService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    test('should get poll info', async () => {
        await service.getPollNumber();
    });

    afterEach(() => {
        module.close();
    })
});
