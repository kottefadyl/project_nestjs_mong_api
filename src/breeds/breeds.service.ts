import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { Breed } from './entities/breed.entity';
import { BreedDocument } from 'src/schemas/breed.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class BreedsService {
  constructor(@InjectModel(Breed.name) private breedModel: Model<BreedDocument>) {}

  async create(createBreedDto: CreateBreedDto, user: User): Promise<Breed> {
    const data = Object.assign(createBreedDto, { user: user._id} )
    const createBreed = new this.breedModel(data);
    return  createBreed.save();
  }

  async findAll() {
    return this.breedModel.find();
  }

  findOne(name: string) {
    return this.breedModel.findOne({name})
  }

  update(name: string, updateBreedDto: UpdateBreedDto) {
    return this.breedModel.updateOne({name},{$set:{...updateBreedDto}});
  }

  remove(name: string) {
    return this.breedModel.deleteOne({name});
  }
}
