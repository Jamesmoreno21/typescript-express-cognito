import express, { Request, Response } from 'express';

class HomeController {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.home);
  }

  private home = (req: Request, res: Response) => {
    res.send('Hello World!');
  };
}

export default HomeController;
