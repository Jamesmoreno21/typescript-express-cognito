import App from "./app";
import dotenv from "dotenv";
import HomeController from "./controllers/home.controller";


// Configure dotenv
dotenv.config();

const app = new App({
    port: parseInt(process.env.PORT || "3000"),
    middleWares: [],
    controllers: [new HomeController()],
});


app.listen();