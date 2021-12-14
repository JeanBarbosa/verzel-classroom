import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Module from 'App/Models/Module'

export default class ModulesController {
  public async index ({}: HttpContextContract) {
  }

  public async store ({ request, response, auth }: HttpContextContract) {
     try {

      const data = request.only([
        'name',
        'short_description',
      ])

      const module = await Module.create({
        userId: auth.user?.id,
        ...data
      })

      return module
    } catch (err) {
      return response.status(400).send({
        error: {
          e: err.message,
          message: 'Erro ao salvar o módulo'
        }
      })
    }
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
