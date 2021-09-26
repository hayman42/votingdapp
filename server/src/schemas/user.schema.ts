import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ unique: true })
    name: String;

    @Prop()
    password: String;

    @Prop()
    address: String;
}

export const UserSchema = SchemaFactory.createForClass(User);