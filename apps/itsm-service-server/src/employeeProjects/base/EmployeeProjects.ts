/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Employees } from "../../employees/base/Employees";
import { Projects } from "../../projects/base/Projects";

@ObjectType()
class EmployeeProjects {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Employees,
  })
  @ValidateNested()
  @Type(() => Employees)
  @IsOptional()
  employee?: Employees | null;

  @ApiProperty({
    required: false,
    type: () => Projects,
  })
  @ValidateNested()
  @Type(() => Projects)
  @IsOptional()
  project?: Projects | null;
}

export { EmployeeProjects as EmployeeProjects };
