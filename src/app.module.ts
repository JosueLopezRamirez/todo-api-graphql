import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'xvtic80nbnaf25oh',
      password: 'iw43u8r394ccyld2',
      database: 'ruczjqxgbxued7uf',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  providers: [],
})
export class AppModule {}
