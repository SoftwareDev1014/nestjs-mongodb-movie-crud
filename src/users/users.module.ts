import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users, UsersSchema } from './users.schema';

import { MongooseModule } from '@nestjs/mongoose';
import { Module } from "@nestjs/common";


@Module({
    imports:[
        MongooseModule.forFeature([
            {name: Users.name, schema: UsersSchema}
        ])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule{}