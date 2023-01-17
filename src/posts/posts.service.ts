import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postRepository: Repository<Posts>,
  ) {}

  async create(data: object) {
    await this.postRepository.save(data).then((res) => console.log(res));
  }

  findAll(): Promise<Posts[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Posts> {
    return this.postRepository.findOne({ where: { id } });
  }

  async update(id: number, data: object) {
    const book = await this.findOne(id).then((res) => res);
    if (book)
      return await this.postRepository.update(id, data).then((res) => res);
    return;
  }

  async remove(id: number) {
    return await this.postRepository.delete(id);
  }
}
