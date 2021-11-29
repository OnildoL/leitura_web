import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateUsersManaira1637957342700 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'users',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true
                        },
                        {
                            name: 'user',
                            type: 'int',
                        },
                        {
                            name: 'password',
                            type: 'varchar',
                        },
                        {
                            name: 'name',
                            type: 'varchar',
                        },
                        {
                            name: 'role',
                            type: 'int',
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()'
                        },
                        {
                            name: 'updated_at',
                            type: 'timestamp',
                            default: 'now()'
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }
}
