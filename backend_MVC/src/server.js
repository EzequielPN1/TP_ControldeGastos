import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { routerUsuarios } from '../router/usuarios.js';
import { routerGastos } from "../router/gastos.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(routerUsuarios)
app.use('/gastos',routerGastos)

const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});