import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'

export default class CoursesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { page } = request.qs()

      const courses = await Course.query()
        .preload('lessons')
        .orderBy('id', 'desc')
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

  public async store({ request, response, auth }: HttpContextContract) {
    try {

      const data = request.only([
        'name',
        'short_description',
      ])

      const course = await Course.create({
        userId: auth.user?.id,
        ...data
      })

      return course
    } catch (err) {
      return response.status(400).send({
        error: {
          e: err.message,
          message: 'Erro ao salvar o módulo'
        }
      })
    }
  }


  public async show({ response, params }: HttpContextContract) {
    try {
      const course = await Course.findByOrFail('id', params.id)

      return course

    } catch (err) {
      return response.status(400).send({
        error: {
          message: 'Módulo não encontrada!!'
        }
      })
    }
  }

  public async update({ request, response, auth }: HttpContextContract) {
    try {
      const data = request.only([
        'name',
        'short_description'
      ])

      const course = await Course.findOrFail(auth.use('api').user!.id)

      course.merge(data)
      await course.save()

      return course
    } catch (error) {
      return response.status(400).send({
        error: {
          message: 'Algo de errado aconteceu ao tentar salvar os dados do módulo.'
        }
      })
    }
  }

  public async destroy({ response, params, auth }: HttpContextContract) {
    try {
      const course = await Course.findOrFail(params.id)

      if (course.userId !== auth.user?.id) {
        return response.status(401).send({
          error: {
            message: 'Sem permissão para apagar o recurso'
          }
        })
      }

      await course.delete()

    } catch (err) {
      return response.status(403).send({
        error: {
          message: 'Erro ao apagar o módulo'
        }
      })
    }
  }
}
