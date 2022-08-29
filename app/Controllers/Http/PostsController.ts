// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {

  public async getAllPost({response}: HttpContextContract){
    const post = await Post.all()
    // @ts-ignore
    return response.send({post})
  }

  public async sendPost({request, response, auth}: HttpContextContract){
    const body = request.input('content');
    console.log(body)
    const post = await Post.create({content: body.toString(), user_id: auth.user.id})
    // @ts-ignore
    return response.send({post})
  }
}
