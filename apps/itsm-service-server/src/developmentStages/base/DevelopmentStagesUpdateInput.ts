/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TasksUpdateManyWithoutDevelopmentStagesItemsInput } from "./TasksUpdateManyWithoutDevelopmentStagesItemsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DevelopmentStagesUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TasksUpdateManyWithoutDevelopmentStagesItemsInput,
  })
  @ValidateNested()
  @Type(() => TasksUpdateManyWithoutDevelopmentStagesItemsInput)
  @IsOptional()
  @Field(() => TasksUpdateManyWithoutDevelopmentStagesItemsInput, {
    nullable: true,
  })
  tasksItems?: TasksUpdateManyWithoutDevelopmentStagesItemsInput;
}

export { DevelopmentStagesUpdateInput as DevelopmentStagesUpdateInput };
