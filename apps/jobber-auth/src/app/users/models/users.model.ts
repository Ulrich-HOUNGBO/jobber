import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Users extends AbstractModel {
  @Field()
  email: string;
}
