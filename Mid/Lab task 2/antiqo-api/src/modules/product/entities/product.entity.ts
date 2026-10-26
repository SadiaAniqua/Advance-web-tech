import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "shop_id", type: "uuid" })
  shopId!: string;

  @Column()
  category!: string;

  @Column()
  title!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({
    type: "numeric",
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: number) => value,
      from: (value: string) => parseFloat(value),
    },
  })
  price!: number;

  @Column({ type: "int" })
  stock!: number;

  @Column()
  condition!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}