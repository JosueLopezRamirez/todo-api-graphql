import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Todo, TodoInput } from './app.dto';
import { AppService } from './app.service';

const pubSub = new PubSub();

@Resolver()
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query(() => [Todo])
  async todo() {
    return this.appService.find();
  }

  @Mutation(() => Todo)
  async addTodo(@Args('data') data: TodoInput): Promise<Todo> {
    const todo = await this.appService.create(data);
    pubSub.publish('todoAdded', { todoAdded: todo });
    return todo;
  }

  @Subscription(() => Todo)
  todoAdded() {
    return pubSub.asyncIterator('todoAdded');
  }
}
