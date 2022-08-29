// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreUserValidator from 'App/Validators/StoreUserValidator';
import User from 'App/Models/User'


export default class UsersController {
  public async index({auth}: HttpContextContract){
    await auth.use('web').authenticate()
    console.log('get page', auth.user!)
    // @ts-ignore
    return { message: `u are login as ${auth.user.email}` }
  }

  public async register({ request }: HttpContextContract){
    const payload = await request.validate(StoreUserValidator);
    const user = await User.create(payload)
    return {message: user}
  }

  public async login({request, response, auth}: HttpContextContract){
    try {
    const {email, password} = request.only(['email', 'password'])
      await auth.use('web').attempt(email, password)
    // @ts-ignore
      response.status(200).send({message: `u are login as ${auth.user.email}`})

    }catch (e) {
      console.log(e)
      response.status(400).send({error: 'Wrong password'})
    }
  }

  public async logout({ response, auth }: HttpContextContract){
    await auth.use('web').logout()
    response.send("you have logged out")
  }
}
