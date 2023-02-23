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
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ response }) => {
  response.redirect('/posts')
})
// Route.get('/hello',()=> {
//   return 'test';
// });
Route.get('/hello/:name?', function ({params}){
  if(params.name === undefined){
    return 'test';
  }
  return 'test'+ params.name;
})

// Route.get('/post/:id', function ({params}){
//   return params.id;
// });
// Route.get('/post/:slug?', function ({params}){
//   return params.id;
// });


//Route.get('/','PostsController.index')
Route.get('/posts', 'PostsController.index')
Route.get('/posts/:id', 'PostsController.show').where('id',/^[0-9]+$/)
Route.get('/posts/create', 'PostsController.create')
Route.post('/posts', 'PostsController.store');
Route.get('/posts/:id/edit','PostsController.edit');
Route.post('/posts/:id/update','PostsController.update');
Route.get('/posts/:id/delete','PostsController.destroy');
