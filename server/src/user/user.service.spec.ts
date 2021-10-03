import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { makePollRequestDto } from 'src/poll/dto/makepoll.request.dto';
import { voteRequestDto } from 'src/poll/dto/vote.request.dto';
import { PollService } from 'src/poll/poll.service';
import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    let pollservice: PollService;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        service = module.get<UserService>(UserService);
        pollservice = module.get<PollService>(PollService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(pollservice).toBeDefined();
    });

    test('should get user info', async () => {
        const user = await service.getInfo("asdf");
        console.log(user);
    });

    test('should vote', async () => {
        const name = "asdf";
        const dto = new makePollRequestDto(["a", "b", "c"], "best alphabet");
        await pollservice.makePoll(dto)

        const votedto = new voteRequestDto(name, 0, "b");
        const user = await service.addVoteInfo(votedto);
        console.log(user);
    });

    afterEach(() => {
        module.close();
    })
});
