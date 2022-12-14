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



Route.group(() => {
    Route.get('/', 'UsersController.index')
    Route.get('/register', async () => {
      console.log('get register')
      return { message: 'u need to register' }
    })
    Route.post('/register', 'UsersController.register')
    Route.post('/login', 'UsersController.login')
    Route.post('/logout', 'UsersController.logout')

  Route.group(() => {
    Route.get('/', 'UsersController.getAllUsers')
  }).prefix('/users').middleware('auth')


  Route.group(() => {
    Route.get('/', 'PostsController.getAllPost')
    Route.post('/', 'PostsController.sendPost')
  }).prefix('/post').middleware('auth')


  }).prefix('/api/v1')
