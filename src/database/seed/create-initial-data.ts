import { Posts } from '../../posts/entities/posts.entity';
import { Users } from '../../users/entities/users.entity';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder() // 쿼리빌더
      .insert()
      .into(Users)
      .values([{ id: 1, email: 'hello@world.com', name: '홍길동', age: 50 }])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Posts)
      .values([
        {
          id: 1,
          title: '시딩을 이용한 첫 게시글',
          contents: '안녕하세요',
          UserId: 1,
        },
      ])
      .execute();
  }
}
