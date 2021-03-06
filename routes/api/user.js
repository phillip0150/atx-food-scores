const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);

router
  .route("/id/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.removeFav);

router
  .route("/id/:id/food")
  .get(userController.findById)
  .put(userController.removeFav)

module.exports = router;
