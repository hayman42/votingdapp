import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { AuthService } from './auth.service';
import { registerRequestDto } from './dto/register.request.dto';
import { signInRequestDto } from './dto/signin.request.dto';

describe('AuthService', () => {
  let service: AuthService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('should register', async () => {
    const requestDto = new registerRequestDto("asdf", "qwer", "zxcv");
    const res = await service.register(requestDto);
    console.log(res);
    expect(res).toBeTruthy();
  });

  test('should signin', async () => {
    const requestDto = new signInRequestDto("asdf", "qwer");
    const res = await service.signIn(requestDto);
    console.log(res);
    expect(res).toBeTruthy();
  });

  afterEach(() => {
    module.close();
  })
});
