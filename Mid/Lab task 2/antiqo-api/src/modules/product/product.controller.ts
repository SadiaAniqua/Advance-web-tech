import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/product.dto";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}