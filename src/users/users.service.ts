import { UserResponseDto } from './dto/userResponse';
import { UserDto } from './dto/user.dto';
import { Users, UsersDocument } from './users.schema';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BadRequestException } from '@nestjs/common';

export class UsersService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<UsersDocument>
    ){}

    async signIn(info: UserDto):Promise<UserDto>{
        var bcrypt = require('bcryptjs');
        const user = await this.userModel.findOne({email: info.email});
        if(!user){
            throw new BadRequestException({errors:[{error:"Email or password is wrong"}], message:"Email or password is wrong"})
        }
        let isCheck = bcrypt.compareSync(info.password, user.password);
        if(isCheck==false){
            throw new BadRequestException({errors:[{error:"Email or password is wrong"}], message:"Email or password is wrong"})
        }
        return user;
    }
    async singUp(info: UserDto): Promise<UserDto>{
        var bcrypt = require('bcryptjs');
        info.password = bcrypt.hashSync(info.password);
        const user = await this.userModel.create(info);
        return user.save()
        // return this.generateToken(user)
    }
    async generateToken(user):Promise<UserResponseDto>{
        var jwt = require('jsonwebtoken');
        var token = jwt.sign({...user}, process.env.APP_PRIVATE_KEY);
        return {token}
    }
}