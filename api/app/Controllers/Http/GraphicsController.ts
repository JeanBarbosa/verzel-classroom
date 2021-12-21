import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class GraphicsController {
  public async index({ response }: HttpContextContract) {
    try {

      //TODO obter os dados reais
      const data = [
        {
          month: 'Jun',
          assistidas: 4,
          Criadas: 12,
        },
        {
          month: 'Jul',
          assistidas: 3,
          Criadas: 9,
        },
        {
          month: 'Ago',
          assistidas: 2,
          Criadas: 18,
        },
        {
          month: 'Set',
          assistidas: 10,
          Criadas: 3,
        },
        {
          month: 'Out',
          assistidas: 5,
          Criadas: 14,
        },
        {
          month: 'Nov',
          assistidas: 8,
          Criadas: 3,
        },
        {
          month: 'Dez',
          assistidas: 12,
          Criadas: 7,
        },
      ];

      return data
    } catch (err) {
      return response.status(400).send({
        error: {
          err: err.message,
          message: 'Algo de errado aconteceu ao tentar carregar os dados.'
        }
      })
    }
  }
}
