import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1777000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
          { name: "name", type: "varchar", isNullable: false },
          { name: "email", type: "varchar", isNullable: false, isUnique: true },
          { name: "password_hash", type: "varchar", isNullable: false },
          { name: "role", type: "varchar", isNullable: false, default: "'buyer'" },
          { name: "status", type: "varchar", isNullable: false, default: "'active'" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}