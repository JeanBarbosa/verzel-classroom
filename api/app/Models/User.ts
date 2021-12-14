import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Indication from 'App/Models/Indication';
import Invite from 'App/Models/Invite';

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
  public document: string

  @column()
  public phone: string

  @column()
  public pix: string

  @column()
  public rememberMeToken?: string

  @column()
  public isActive: boolean

  @column()
  public termsAccepted: boolean

  @column()
  public role: string

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

  @hasMany(() => Indication)
  public indications: HasMany<typeof Indication>

  @hasMany(() => Invite)
  public invite: HasMany<typeof Invite>
}
