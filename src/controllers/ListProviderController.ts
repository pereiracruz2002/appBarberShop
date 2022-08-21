import { Request, Response } from 'express';
import ListProviderService from '../services/ListProviderService';

export default class ListProviderController{

    async handler(request: Request, response: Response){
        const providerService = new ListProviderService();
        const result = await providerService.execute();
        return response.json(result);
    }
}