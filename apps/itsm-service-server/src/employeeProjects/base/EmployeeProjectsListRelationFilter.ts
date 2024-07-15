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
import { EmployeeProjectsWhereInput } from "./EmployeeProjectsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeProjectsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeProjectsWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeProjectsWhereInput)
  @IsOptional()
  @Field(() => EmployeeProjectsWhereInput, {
    nullable: true,
  })
  every?: EmployeeProjectsWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeProjectsWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeProjectsWhereInput)
  @IsOptional()
  @Field(() => EmployeeProjectsWhereInput, {
    nullable: true,
  })
  some?: EmployeeProjectsWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeProjectsWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeProjectsWhereInput)
  @IsOptional()
  @Field(() => EmployeeProjectsWhereInput, {
    nullable: true,
  })
  none?: EmployeeProjectsWhereInput;
}
export { EmployeeProjectsListRelationFilter as EmployeeProjectsListRelationFilter };
