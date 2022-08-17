import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';

export default class ListUserController{
    async handler(request: Request, response: Response): Promise<Response>{
        console.log(request.user.id);
        const listUsersService = new ListUserService();
        const result = await listUsersService.execute();
        return response.json(result);
    }
}