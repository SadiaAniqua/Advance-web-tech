import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateShopDto {
  @IsNotEmpty()
  @IsUUID()
  sellerId!: string;

  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}