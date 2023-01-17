import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async getUser(email: string) {
    let user = await this.userRepository.findOne({
      where: { email },
    });
    return user;
  }

  async createUser(email: string, name: string, age: number) {
    await this.userRepository.save({
      email,
      name,
      age,
    });
  }
}
