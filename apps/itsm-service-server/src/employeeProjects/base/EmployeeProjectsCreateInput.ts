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
import { EmployeesWhereUniqueInput } from "../../employees/base/EmployeesWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ProjectsWhereUniqueInput } from "../../projects/base/ProjectsWhereUniqueInput";

@InputType()
class EmployeeProjectsCreateInput {
  @ApiProperty({
    required: false,
    type: () => EmployeesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeesWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeesWhereUniqueInput, {
    nullable: true,
  })
  employee?: EmployeesWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ProjectsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectsWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectsWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectsWhereUniqueInput | null;
}

export { EmployeeProjectsCreateInput as EmployeeProjectsCreateInput };
