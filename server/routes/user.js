import { Router } from 'express';
import { register,verifyuser } from '../controllers/user.js';


const router=Router();

router.post("/verify",verifyuser)
router.post("/register",register)

export default router;