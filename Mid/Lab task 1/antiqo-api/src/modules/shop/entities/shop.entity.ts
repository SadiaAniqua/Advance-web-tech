import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "shops" })
export class Shop {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "seller_id", type: "uuid" })
  sellerId!: string;

  @Column()
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ name: "approval_status", default: "pending" })
  approvalStatus!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}