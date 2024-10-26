import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from './models/users.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';

@Resolver( () => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation( () => Users, { name: 'createUser' })
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);

  }

  @Query( () => [Users], { name: 'users' })
  async getUsers() {
    return this.usersService.getUsers();
  }

}
