import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lesson from 'App/Models/Lesson'

export default class LessonsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { page } = request.qs()

      const lessons = await Lesson.query()
        .orderBy('id', 'desc')
        .paginate(page)

      return lessons
    } catch (err) {
      return response.status(400).send({
        error: {
          message: 'Algo de errado aconteceu ao tentar carregar a lista.'
        }
      })
    }
  }

  public async store({ request, response, auth }: HttpContextContract) {
    try {

      const data = request.only([
        'name',
        'url',
        'start_date',
        'description'
      ])

      const lesson = await Lesson.create({
        userId: auth.use('api').user!.id,
        ...data
      })

      return lesson
    } catch (err) {
      return response.status(400).send({
        error: {
          message: 'Erro ao salvar a aula.'
        }
      })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const lesson = await Lesson.findByOrFail('id', params.id)

      return lesson

    } catch (err) {
      return response.status(400).send({
        error: {
          message: 'Aula não encontrada!!'
        }
      })
    }
  }

  public async update({ request, response, auth }: HttpContextContract) {
    try {
      const data = request.only([
        'name',
        'url',
        'start_date',
        'description'
      ])

      const lesson = await Lesson.findOrFail(auth.use('api').user!.id)

      lesson.merge(data)
      await lesson.save()

      return lesson
    } catch (error) {
      return response.status(400).send({
        error: {
          message: 'Algo de errado aconteceu ao tentar salvar os dados da aula.'
        }
      })
    }
  }

  public async destroy({ response, params, auth }: HttpContextContract) {
    try {
      const lesson = await Lesson.findOrFail(params.id)

      if (lesson.userId !== auth.user?.id) {
        return response.status(401).send({
          error: {
            message: 'Sem permissão para apagar o recurso'
          }
        })
      }

      await lesson.delete()

    } catch (err) {
      return response.status(403).send({
        error: {
          message: 'Erro ao apagar a aula'
        }
      })
    }
  }
}
