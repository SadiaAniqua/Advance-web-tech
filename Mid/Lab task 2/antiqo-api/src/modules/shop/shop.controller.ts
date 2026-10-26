import { Body, Controller, Get, Post } from "@nestjs/common";
import { ShopService } from "./shop.service";
import { CreateShopDto } from "./dto/shop.dto";

@Controller("shops")
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  create(@Body() dto: CreateShopDto) {
    return this.shopService.create(dto);
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }
}