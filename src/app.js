import express from "express";
import router from "./routes/index.routes.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import morgan from "morgan";
import bodyparser from 'body-parser';

const app = express();

//middlewares
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(morgan("dev"));
app.use(cookieParser('ml-213ds-d3d31'));
app.use(session({
    secret: 'ml-213ds-d3d31',
    resave: true,
    saveUninitialized: true
}));

app.use(router);

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;
