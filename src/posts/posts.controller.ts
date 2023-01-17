import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async create(@Body() createBookDto: CreatePostDto, @Res() res: Response) {
    await this.postsService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<Response> {
    let post = await this.postsService.findOne(+id);
    if (post) return res.status(HttpStatus.OK).json(post);
    return res.json({
      error: 'This resource  no longer exist or has been removed',
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdatePostDto,
    @Res() res: Response,
  ) {
    const response = await this.postsService.update(+id, updateBookDto);
    if (response)
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Book information updated successfully' });
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ error: 'The resource to be updated no longer exist' });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.postsService.remove(+id);
    res.status(HttpStatus.OK).json({ message: 'deleted successfully' });
  }
}
