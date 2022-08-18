import { Router } from 'express';
import multer from 'multer';
import ListUserController from '../controllers/ListUserController';
import CreateUserController from '../controllers/CreateUserController';
import UpdateUserControllers from '../controllers/UpdateUserController';
import CreateSessionsController from '../controllers/CreateSessionsController';
import FileController from '../controllers/FileControllers';
import isAuthenticate from '../middlewares/isAuthenticate';
import upload from '../config/upload';

const listUserController   = new ListUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserControllers();
const sessionCreateController = new CreateSessionsController();
const fileController  = new FileController();
const uploadMulter = multer(upload);

const router = Router();

router.get('/users',isAuthenticate,listUserController.handler);
router.post('/users',createUserController.handler);
router.put('/users/:id',updateUserController.handler);

router.post('/files', uploadMulter.single('file'), fileController.handler)

router.post('/sessions',sessionCreateController.handler);

export default router;