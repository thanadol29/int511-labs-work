import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import View from '@ioc:Adonis/Core/View';

interface Post {
  id: number;
  title: string;
  body: string;
}

const posts: Post[] = [{
  id: 1,
  title: 'Hello AdonisJS',
  body: 'Adonis includes everything you need to create fully functional web app or an API server.'
},
{
  id: 2,
  title: 'VueJS',
  body: 'Vue is a progressive framework for building user interfaces.'
}]

export default class PostsController {
  // public async index({ }: HttpContextContract) {
  //   return [
  //     {
  //       id: 1,
  //       title: 'Post 1'
  //     },
  //     {
  //       id: 2,
  //       title: 'Post 2'
  //     }
  //   ]
  // }
  async index({ view }: HttpContextContract) {
    // return posts;
    //response.redirect( ).toRoute('home')
    return view.render('posts', { posts: posts })
  }

  async show({ view, params }: HttpContextContract) {
    const id = params.id;
    const post = posts.find((p) => p.id === Number(id));

    return view.render('detail', { post })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('post')
  }

  public async store({ request, response }: HttpContextContract) {
    const title = request.input('title')
    const body = request.input('body')
    const newId = posts.slice(-1)[0].id + 1
    const newPost: Post = { id: newId, title: title, body: body }
    posts.push(newPost)
    response.redirect().toPath('/posts')
  }


  public async edit({ params, view }: HttpContextContract) {
    const id = params.id
    const post = posts.find(p => p.id == Number(id))
    return view.render('post', { post: post })
  }

  public async update({ params, request, response }: HttpContextContract) {
    const id = params.id
    const index = posts.findIndex(p => p.id == Number(id))
    posts[index].title = request.input('title')
    posts[index].body = request.input('body')
    response.redirect().toPath('/posts')
  }

  public async destroy({params,response }: HttpContextContract) { 
    const id = params.id
    const index = posts.findIndex( p => p.id == Number(id) )        
    posts.splice(index,1)        
    response.redirect().toPath('/posts')
  }
}
