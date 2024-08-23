const { Router } = require('express') 
const RbacController = require("../controllers/RbacController")

const RbacRouter = new Router()

RbacRouter.get("/listPermissions", RbacController.listPermissions)
RbacRouter.get("/listRoles", RbacController.listRoles)
RbacRouter.post("/createOnePermission", RbacController.createOnePermission)
RbacRouter.post("/createOneRole", RbacController.createOneRole)

module.exports = RbacRouter