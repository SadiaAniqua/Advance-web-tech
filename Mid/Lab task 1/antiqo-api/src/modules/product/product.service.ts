import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { Shop } from "../shop/entities/shop.entity";
import { CreateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) {}

  async create(dto: CreateProductDto) {
    const shop = await this.shopRepository.findOne({
      where: { id: dto.shopId },
    });
    if (!shop) {
      throw new NotFoundException("Shop not found");
    }

    const product = this.productRepository.create(dto);
    return await this.productRepository.save(product);
  }

  async findAll() {
    return await this.productRepository.find();
  }
}