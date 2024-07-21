const { Router } = require("express");
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const userController = require("../controllers/userController");
const borrowController = require("../controllers/borrowController");
const validator = require("../middlewares/validationMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();

router.post("/signup", validator, signupController.signupUser);
router.post("/login", loginController.loginUser);
router.get("/user", authMiddleware, userController.getUser);
router.post("/borrow", authMiddleware, borrowController.borrowMoney);


module.exports = router;