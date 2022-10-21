import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({ timestamps: true })
export class Users extends Document {
  @Prop({ required: true, trim: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true, trim: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
