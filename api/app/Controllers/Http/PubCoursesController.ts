import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'

export default class PubCoursesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { page } = request.qs()

      const courses = await Course.query()
        .preload('lessons')
        .orderBy('name', 'asc')
        .paginate(page)

      return courses
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
      const course = await Course
        .query()
        .preload('lessons')
        .where('id', params.id)
        .firstOrFail()

      return course

    } catch (err) {
      return response.status(400).send({
        error: {
          message: 'Módulo não encontrada!!'
        }
      })
    }
  }

}
