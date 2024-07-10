import express from "express"
import { register , login, users} from "../Controllers/user.js"

const router = express.Router();

// register user

router.post('/register', register) // /api/user/register

// login user

router.post('/login', login) // /api/user/login

// get all user

router.get('/users', users) // /api/user/users

export default router