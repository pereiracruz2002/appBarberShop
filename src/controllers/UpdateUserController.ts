import { Request, Response } from 'express';
import UpdateUserService from '../services/UpdateUserService';

export default class UpdateUserControllers{
   
    async handler(request: Request, response: Response){
        const id = request.params.id;
        const updateUserService = new UpdateUserService();
        const result = await updateUserService.execute(id, request.body);
        return response.json(result);
    }
}