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
import { EmployeeRolesWhereInput } from "./EmployeeRolesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmployeeRolesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmployeeRolesWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRolesWhereInput)
  @IsOptional()
  @Field(() => EmployeeRolesWhereInput, {
    nullable: true,
  })
  every?: EmployeeRolesWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeRolesWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRolesWhereInput)
  @IsOptional()
  @Field(() => EmployeeRolesWhereInput, {
    nullable: true,
  })
  some?: EmployeeRolesWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeRolesWhereInput,
  })
  @ValidateNested()
  @Type(() => EmployeeRolesWhereInput)
  @IsOptional()
  @Field(() => EmployeeRolesWhereInput, {
    nullable: true,
  })
  none?: EmployeeRolesWhereInput;
}
export { EmployeeRolesListRelationFilter as EmployeeRolesListRelationFilter };
