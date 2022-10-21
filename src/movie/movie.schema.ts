import { Users } from './../users/users.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema({ timestamps: true })
export class Movie extends Document {
  @Prop({ required: true, trim: true })
  thumbnail_link: string;

  @Prop({ required: true, trim: true })
  video_link: string;

  @Prop({ required: true, trim: true })
  title: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({ required: false, trim: true, ref: "Users", type:MongooseSchema.Types.ObjectId, })
  user: Users;

  @Prop({ required: false, trim: true, default:0 })
  rank: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
