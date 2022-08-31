//Arquivo que identifica a rota que o usuário está pedindo
const { Router } = require("express");

const usersRouter = require("./users.routes")
const notesRouter = require("./movieNotes.routes")
const tagsRouter = require("./movieTags.routes")

const routes = Router();

routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes;