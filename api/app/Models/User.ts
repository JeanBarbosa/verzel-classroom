import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'

import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public avatar: string

  @column()
  public username: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public job: string

  @column()
  public tags: string

  @column()
  public rememberMeToken?: string

  @column()
  public isActive: boolean

  @column()
  public termsAccepted: boolean

  @column()
  public roles: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

}
