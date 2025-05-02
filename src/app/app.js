import express from "express";
import cors from "cors";
import userRoutes from "../app/modules/users/user.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
// Add all your module routes to the parent router
const apiV2Router = express.Router();
apiV2Router.use("/users", userRoutes);
// Use the version prefix once
app.use("/api/v2", apiV2Router);

export default app;
