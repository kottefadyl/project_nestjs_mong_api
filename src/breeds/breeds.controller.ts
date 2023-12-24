import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Req } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { AuthGuard } from '@nestjs/passport';
import { log } from 'console';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Post()
    @UseGuards(AuthGuard())
    async create(
      @Body() 
      createBreedDto: CreateBreedDto,
      @Req() req
      ) {   
    return this.breedsService.create(createBreedDto, req.user);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.breedsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.breedsService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateBreedDto: UpdateBreedDto) {
    return this.breedsService.update(name, updateBreedDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.breedsService.remove(name);
  }
}
