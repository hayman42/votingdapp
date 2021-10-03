import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class VoteInfo {
    @Prop()
    poll: number;

    @Prop()
    content: string;

    @Prop()
    candidate: string;

    @Prop()
    win: string;
}

const VoteInfoSchema = SchemaFactory.createForClass(VoteInfo);

@Schema({ timestamps: true })
export class User {
    @Prop({ unique: true })
    name: string;

    @Prop()
    password: string;

    @Prop()
    address: string;

    @Prop({ type: [VoteInfoSchema] })
    voteinfo: VoteInfo[];
}

export const UserSchema = SchemaFactory.createForClass(User);