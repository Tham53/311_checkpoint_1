const express = require('express');

const router = express.Router();

const usersController = require("../controllers/users");

//* Can GET users all at once
router.get("/users", usersController.listUsers);

//* Can GET users by id
router.get("/users/:id", usersController.showUser);

//* Can POST to create a new user
router.post("/users", usersController.createUser);

//* Can PUT to update a user
router.put("/users/:id", usersController.updateUser);

//* Can DELETE a user by its id
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;


