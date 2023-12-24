import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsModule } from './breeds/breeds.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:67jRctLieG7kfZzk@cluster0.vrbgryc.mongodb.net/progest?retryWrites=true&w=majority'), BreedsModule, AuthModule] ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
