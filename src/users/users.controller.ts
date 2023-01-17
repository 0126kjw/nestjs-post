import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  async getUsers(@Res() res: Response, @Param() param) {
    let user = await this.UsersService.getUser(param.email);
    console.log(user);
    res.json(user);
  }

  @Post()
  async createUser(@Body() body) {
    await this.UsersService.createUser(body.email, body.name, body.age);
  }
}
