import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class CreateUserController{
    
    async handler(request: Request, response: Response){
        
        const createUserServices =  new CreateUserService();
        const result = await createUserServices.execute(request.body);
        return response.json(result);
    }

  
}