/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClientsWhereUniqueInput } from "../../clients/base/ClientsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ClientsUpdateManyWithoutUsersInput {
  @Field(() => [ClientsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsWhereUniqueInput],
  })
  connect?: Array<ClientsWhereUniqueInput>;

  @Field(() => [ClientsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsWhereUniqueInput],
  })
  disconnect?: Array<ClientsWhereUniqueInput>;

  @Field(() => [ClientsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClientsWhereUniqueInput],
  })
  set?: Array<ClientsWhereUniqueInput>;
}

export { ClientsUpdateManyWithoutUsersInput as ClientsUpdateManyWithoutUsersInput };
