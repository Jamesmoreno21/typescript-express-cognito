import express from 'express';
import { Application } from 'express';

type AppProps = {
  port: number;
  middleWares: any;
  controllers: any;
};

class App {
  public app: Application;
  public port: number;

  // Constructor function
  constructor(appConfig: AppProps) {
    this.app = express();
    this.port = appConfig.port;

    this.initializeMiddlewares(appConfig.middleWares);
    this.initializeControllers(appConfig.controllers);
  }
  // Initialize middlewares
  private initializeMiddlewares(middleWares: [any]) {
    middleWares.forEach((middleWare: any) => {
      this.app.use(middleWare);
    });
  }
  // Initialize controllers
  private initializeControllers(controllers: [any]) {
    // Loop through controllers and register them
    controllers.forEach((controller: any) => {
      this.app.use(controller.path, controller.router);
    });
  }
  // Start the server
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
