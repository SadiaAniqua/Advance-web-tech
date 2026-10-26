import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ name: "password_hash", select: false })
  passwordHash!: string;

  @Column({ default: "buyer" })
  role!: string;

  @Column({ default: "active" })
  status!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}