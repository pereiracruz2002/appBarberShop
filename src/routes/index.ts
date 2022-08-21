import { Router } from 'express';
import multer from 'multer';
import ListUserController from '../controllers/ListUserController';
import CreateUserController from '../controllers/CreateUserController';
import UpdateUserControllers from '../controllers/UpdateUserController';
import CreateSessionsController from '../controllers/CreateSessionsController';
import FileController from '../controllers/FileControllers';
import isAuthenticate from '../middlewares/isAuthenticate';
import upload from '../config/upload';
import ListProviderController from '../controllers/ListProviderController';


const listUserController   = new ListUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserControllers();
const sessionCreateController = new CreateSessionsController();
const fileController  = new FileController();
const listController = new ListProviderController();
const uploadMulter = multer(upload);

const router = Router();
router.post('/users',createUserController.handler);
router.post('/sessions',sessionCreateController.handler);
router.use(isAuthenticate);
router.get('/users',listUserController.handler);
router.put('/users/:id',updateUserController.handler);
router.get('/providers',listController.handler);
router.post('/files',uploadMulter.single('file'), fileController.handler)



export default router;