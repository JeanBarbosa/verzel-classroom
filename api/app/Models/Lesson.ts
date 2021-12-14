import { DateTime } from 'luxon'
import {
  BaseModel,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Course from 'App/Models/Course'

export default class Lesson extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public name: string

  @column.dateTime()
  public startDate: DateTime

  @column()
  public url: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Course, {
    pivotTable: 'lesson_courses',
    pivotTimestamps: true
  })
  public courses: ManyToMany<typeof Course>
}
