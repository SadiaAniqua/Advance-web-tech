import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employees" })
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  password!: string;

  @Column({ type: "int" })
  age!: number;

  @Column({ name: "years_of_working", type: "int" })
  yearsOfWorking!: number;
}