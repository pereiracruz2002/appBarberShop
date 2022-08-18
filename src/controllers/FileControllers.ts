import { Request, Response } from 'express';
export default class FileController{
    async handler(request: Request, response: Response){
        return response.json({
            ok:true
        })
    }
}