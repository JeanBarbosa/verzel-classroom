import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Lessons extends BaseSchema {
  protected tableName = 'lessons'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('name', 255).notNullable()
      table.dateTime('start_date').notNullable()
      table.string('url', 255)
      table.string('description', 400)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
