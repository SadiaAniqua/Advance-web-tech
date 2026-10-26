import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateShopsTable1777000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "shops",
        columns: [
          { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
          { name: "seller_id", type: "uuid", isNullable: false },
          { name: "name", type: "varchar", isNullable: false },
          { name: "description", type: "text", isNullable: true },
          { name: "approval_status", type: "varchar", isNullable: false, default: "'pending'" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            columnNames: ["seller_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("shops");
  }
}