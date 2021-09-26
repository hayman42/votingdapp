import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PollModule } from './poll/poll.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/nest"),
    AuthModule,
    PollModule,
    ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
