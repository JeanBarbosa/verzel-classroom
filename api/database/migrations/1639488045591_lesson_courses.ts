import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LessonCourses extends BaseSchema {
  protected tableName = 'lesson_courses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('course_id').unsigned().references('courses.id')
      table.integer('lesson_id').unsigned().references('lessons.id')
      // table.unique(['course_id', 'lesson_id'])

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
