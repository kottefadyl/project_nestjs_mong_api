
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../auth/schemas/user.schema';


export type BreedDocument = Breed & Document

@Schema()
export class Breed {
  @Prop()
  name: string;

  @Prop()
  furType: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref:'User'})
  user: User;
}

export const BreedSchema = SchemaFactory.createForClass(Breed);
