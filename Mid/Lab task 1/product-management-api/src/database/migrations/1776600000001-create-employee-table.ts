import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployeeTable1776600000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
          { name: "name", type: "varchar", isNullable: false },
          { name: "email", type: "varchar", isNullable: false },
          { name: "phone", type: "varchar", isNullable: false },
          { name: "password", type: "varchar", isNullable: false },
          { name: "age", type: "int", isNullable: false },
          { name: "years_of_working", type: "int", isNullable: false },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
  }
}