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
  console.log('get page')
  return { message: 'u just run a server with adonis' }
})

// Route.post('/login', async ({request}) => {
//   const content = request.only(['username', 'password'])
//   console.log('post login' + content)
//   return { user: content }
// })

Route.post('/register', 'UsersController.register')


Route.get('/register', async () => {
  console.log('get register')
  return { message: 'u need to register' }
})

