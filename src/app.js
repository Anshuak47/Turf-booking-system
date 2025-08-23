import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import router from "./routes/healthCheck.routes.js";
import showBookingRouter from "./routes/showbooking.routes.js";

app.use("/api/v1/healthcheck", router);
app.use("/api/v1/showbooking", showBookingRouter);

export { app };
