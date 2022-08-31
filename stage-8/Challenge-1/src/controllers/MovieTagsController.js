const knex = require('../database/knex');

class MovieTagsController {
  
  async index(request, response){
    const {user_id} = request.params;

    const tags = await knex("movie_tags")
    .where({user_id}) //não precisa informar user_id: user_id pq tem nomes iguais
    
    return response.json(tags);
  }
}
module.exports = MovieTagsController;