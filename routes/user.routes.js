import express from "express"
import { createUser, login, logout } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const app = express.Router();

app.post("/newUser", createUser);
app.post("/login", login);

app.use(isAuthenticated)

app.get('/logout', logout)

export default app;