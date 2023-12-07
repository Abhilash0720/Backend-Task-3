const express = require('express');
const usercontroller = './controller/user.js'
const router = express.Router();

router.get('/',usercontroller.getUsers)
router.create('/',usercontroller.create)
router.get('/',usercontroller.getUserById)
router.edit('/',usercontroller.editUserById)
router.delete('/',usercontroller.deleteUserB)
router.login('/',usercontroller. login)




