import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsTable1777000000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
          { name: "shop_id", type: "uuid", isNullable: false },
          { name: "category", type: "varchar", isNullable: false },
          { name: "title", type: "varchar", isNullable: false },
          { name: "description", type: "text", isNullable: true },
          { name: "price", type: "numeric", precision: 10, scale: 2, isNullable: false },
          { name: "stock", type: "int", isNullable: false },
          { name: "condition", type: "varchar", isNullable: false },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            columnNames: ["shop_id"],
            referencedTableName: "shops",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}