import {  Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Breed } from './entities/breed.entity';
import { BreedSchema } from '../schemas/breed.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule,MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }])],
  controllers: [BreedsController],
  providers: [BreedsService],
})
export class BreedsModule {}
