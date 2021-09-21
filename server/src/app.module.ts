import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false")],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule { }
