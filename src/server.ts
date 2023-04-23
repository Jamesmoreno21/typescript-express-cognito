import App from "./app";
import dotenv from "dotenv";


// Configure dotenv
dotenv.config();

const app = new App({
    port: parseInt(process.env.PORT || "3000"),
    middleWares: [],
    controllers: [],
});


app.listen();