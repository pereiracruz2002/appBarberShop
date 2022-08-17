import { Router } from 'express';
import ListUserController from '../controllers/ListUserController';
import CreateUserController from '../controllers/CreateUserController';
import UpdateUserControllers from '../controllers/UpdateUserController';
import CreateSessionsController from '../controllers/CreateSessionsController';
import isAuthenticate from '../middlewares/isAuthenticate';

const listUserController   = new ListUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserControllers();
const sessionCreateController = new CreateSessionsController();

const router = Router();

router.get('/users',isAuthenticate,listUserController.handler);
router.post('/users',createUserController.handler);
router.put('/users/:id',updateUserController.handler);

router.post('/sessions',sessionCreateController.handler);

export default router;