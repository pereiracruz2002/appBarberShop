import { Request, Response } from 'express';
import FileService from '../services/FileService';

interface MulterRequest extends Request {
    file: any;
}


export default class FileController{
    async handler(request: Request, response: Response){
        const fileService = new FileService();
        const originalname  = (request as MulterRequest).file.originalname;
        const path = (request as MulterRequest).file.path;
        
        const result = await fileService.execute({
            userId:request.user.id,
            name: originalname,
            path
        });
    }
}