// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import StoreUserValidator from 'App/Validators/StoreUserValidator';
import User from 'App/Models/User'

export default class UsersController {
  public async register({ request }: HttpContextContract){
    const payload = await request.validate(StoreUserValidator);
    // const body = request.body();
    const user = await User.create(payload)
    return {message: user}
  }
}
