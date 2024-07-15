/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TasksWhereUniqueInput } from "../../tasks/base/TasksWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TasksUpdateManyWithoutServicesItemsInput {
  @Field(() => [TasksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TasksWhereUniqueInput],
  })
  connect?: Array<TasksWhereUniqueInput>;

  @Field(() => [TasksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TasksWhereUniqueInput],
  })
  disconnect?: Array<TasksWhereUniqueInput>;

  @Field(() => [TasksWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TasksWhereUniqueInput],
  })
  set?: Array<TasksWhereUniqueInput>;
}

export { TasksUpdateManyWithoutServicesItemsInput as TasksUpdateManyWithoutServicesItemsInput };
