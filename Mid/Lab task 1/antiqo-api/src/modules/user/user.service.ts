import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as argon2 from "argon2";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const existing = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException("Email is already registered");
    }

    const passwordHash = await argon2.hash(dto.password, {
      type: argon2.argon2id,
    });

    const user = this.userRepository.create({
      name: dto.name,
      email: dto.email,
      role: dto.role,
      passwordHash,
    });
    const saved = await this.userRepository.save(user);

    // never send the password hash back
    return {
      id: saved.id,
      name: saved.name,
      email: saved.email,
      role: saved.role,
      status: saved.status,
      createdAt: saved.createdAt,
    };
  }

  async findAll() {
    return await this.userRepository.find();
  }
}