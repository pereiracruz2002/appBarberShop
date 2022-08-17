import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class CreateSessionsController{
    async handler(request: Request, response: Response): Promise<Response>{
        const createSessionsService = new CreateSessionsService();
       
        const { email, password } = request.body;
        const result = await createSessionsService.execute({ email, password });
        return response.json(result);
    }
}