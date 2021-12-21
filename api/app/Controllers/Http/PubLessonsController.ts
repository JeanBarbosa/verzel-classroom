import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import Lesson from 'App/Models/Lesson'

export default class LessonsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { page } = request.qs()

      const lessons = await Lesson.query()
        .preload('courses')
        .orderBy('name', 'asc')
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

  public async show({ response, params }: HttpContextContract) {
    try {
      const lesson = await Lesson
        .query()
        .preload('courses')
        .where('id', params.id)
        .firstOrFail()

      return lesson

    } catch (err) {
      return response.status(400).send({
        error: {
          message: 'Aula não encontrada!!'
        }
      })
    }
  }
}
