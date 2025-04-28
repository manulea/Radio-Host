import { Request, Response, NextFunction } from 'express';

class IndexController {

    
    public getRadioHosts(req: Request, res: Response): void {
        // Logic to get radio hosts
        res.send("List of radio hosts");
    }

    public getRadioHost(req: Request, res: Response): void {
        // Logic to get a specific radio host by ID
        const { id } = req.params;
        res.send(`Details of radio host with ID: ${id}`);
    }

    public createRadioHost(req: Request, res: Response): void {
        // Logic to create a new radio host
        const newHost = req.body;
        res.status(201).send(`Radio host created: ${JSON.stringify(newHost)}`);
    }

    public updateRadioHost(req: Request, res: Response): void {
        // Logic to update an existing radio host by ID
        const { id } = req.params;
        const updatedHost = req.body;
        res.send(`Radio host with ID: ${id} updated to: ${JSON.stringify(updatedHost)}`);
    }

    public deleteRadioHost(req: Request, res: Response): void {
        // Logic to delete a radio host by ID
        const { id } = req.params;
        res.send(`Radio host with ID: ${id} deleted`);
    }
    
}

export const getRadioHost = (req: Request, res: Response, next: NextFunction): void => {
    res.send('Get Radio Host');
  };
  
  export const createRadioHost = (req: Request, res: Response, next: NextFunction): void => {
    res.send('Create Radio Host');
  };
  
  export const updateRadioHost = (req: Request, res: Response, next: NextFunction): void => {
    res.send('Update Radio Host');
  };
  
  export const deleteRadioHost = (req: Request, res: Response, next: NextFunction): void => {
    res.send('Delete Radio Host');
  };

export default IndexController;