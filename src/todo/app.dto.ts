import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType()
export class Todo {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
