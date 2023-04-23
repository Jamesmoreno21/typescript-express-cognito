import App from "./app";
import dotenv from "dotenv";
import HomeController from "./controllers/home.controller";
import bodyParser from "body-parser";

// Configure dotenv
dotenv.config();

const app = new App({
    port: parseInt(process.env.PORT || "3000"),
    middleWares: [
        // Parse JSON request bodies
        bodyParser.json(), 
        // Parse URL-encoded request bodies
        bodyParser.urlencoded({ extended: true }), 
    ],
    controllers: [
        new HomeController()
    ],
});


app.listen();