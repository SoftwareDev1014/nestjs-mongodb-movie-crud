import { UserResponseDto } from './dto/userResponse';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Post, Request } from '@nestjs/common';


@Controller('')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  async signup(
    @Request() req: Request,
    @Body() info: UserDto,
  ): Promise<any> {
    try {
        const user = await  this.userService.singUp(info);
        return this.userService.generateToken(user)
    } catch (error) {
        return error
    }
  }

  @Post('signin')
  async login(@Request() req, @Body() info: UserDto): Promise<any> {
    try {
        const user =  await this.userService.signIn(info);
        return this.userService.generateToken(user)
    } catch (error) {
        return error
    }
  }
}
