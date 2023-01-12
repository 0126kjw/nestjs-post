import { Posts } from '../../posts/entities/posts.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'example', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'name', length: 20 })
  name: string;

  @Column('int', { name: 'age' })
  age: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Posts, (posts) => posts.UserId)
  OwnedUserPosts: Posts[];
}
