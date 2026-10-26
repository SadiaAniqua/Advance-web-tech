import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Shop } from "./entities/shop.entity";
import { User } from "../user/entities/user.entity";
import { CreateShopDto } from "./dto/shop.dto";

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateShopDto) {
    const seller = await this.userRepository.findOne({
      where: { id: dto.sellerId },
    });
    if (!seller) {
      throw new NotFoundException("Seller not found");
    }
    if (seller.role !== "seller") {
      throw new BadRequestException("This user is not a seller");
    }

    const shop = this.shopRepository.create(dto);
    return await this.shopRepository.save(shop);
  }

  async findAll() {
    return await this.shopRepository.find();
  }
}