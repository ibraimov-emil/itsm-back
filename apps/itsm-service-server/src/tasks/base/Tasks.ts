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
import { EmployeeTasks } from "../../employeeTasks/base/EmployeeTasks";
import { Services } from "../../services/base/Services";
import { DevelopmentStages } from "../../developmentStages/base/DevelopmentStages";

@ObjectType()
class Tasks {
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
    type: () => [EmployeeTasks],
  })
  @ValidateNested()
  @Type(() => EmployeeTasks)
  @IsOptional()
  employeeTasksItems?: Array<EmployeeTasks>;

  @ApiProperty({
    required: false,
    type: () => Services,
  })
  @ValidateNested()
  @Type(() => Services)
  @IsOptional()
  service?: Services | null;

  @ApiProperty({
    required: false,
    type: () => DevelopmentStages,
  })
  @ValidateNested()
  @Type(() => DevelopmentStages)
  @IsOptional()
  developmentStage?: DevelopmentStages | null;
}

export { Tasks as Tasks };
