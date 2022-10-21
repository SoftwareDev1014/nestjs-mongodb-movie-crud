import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { Users, UsersSchema } from './users.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";


@Module({
    imports:[
        MongooseModule.forFeature([
            {name: Users.name, schema: UsersSchema}
        ])
    ],
    controllers: [UserController],
    providers: [UsersService]
})
export class UsersModule{}