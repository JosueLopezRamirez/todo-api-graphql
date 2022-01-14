import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { TodoInput } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Todo)
    private repository: Repository<Todo>,
  ) {}

  find() {
    return this.repository.find();
  }

  create(data: TodoInput) {
    return this.repository.save(data);
  }
}
