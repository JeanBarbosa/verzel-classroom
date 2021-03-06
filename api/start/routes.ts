/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { greeting: 'verzel-classroom' }
})

Route.post('users', 'UsersController.store')
Route.put('users/:id', 'UsersController.update').middleware('auth')

Route.post('login', 'SessionsController.store')

Route.post('forgotpasswords', 'ForgotPasswordsController.store')
Route.put('forgotpasswords', 'ForgotPasswordsController.update')

//Public modules/classes
Route.get('modules', 'PubCoursesController.index')
Route.get('modules/:id', 'PubCoursesController.show')
Route.get('classes', 'PubLessonsController.index')
Route.get('classes/:id', 'PubLessonsController.show')


//Modules
Route.get('courses', 'CoursesController.index').middleware('auth')
Route.post('courses', 'CoursesController.store').middleware('auth')
Route.put('courses/:id', 'CoursesController.update').middleware('auth')
Route.get('courses/:id', 'CoursesController.show').middleware('auth')
Route.delete('courses/:id', 'CoursesController.destroy').middleware('auth')

//lessons
Route.get('lessons', 'LessonsController.index').middleware('auth')
Route.post('lessons', 'LessonsController.store').middleware('auth')
Route.put('lessons/:id', 'LessonsController.update').middleware('auth')
Route.get('lessons/:id', 'LessonsController.show').middleware('auth')
Route.delete('lessons/:id', 'LessonsController.destroy').middleware('auth')

//Graphics
Route.get('graphics', 'GraphicsController.index').middleware('auth')
