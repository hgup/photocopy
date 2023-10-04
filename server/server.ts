// server/server.ts
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// API routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Serve the static React build files
app.use(express.static(path.join(__dirname, "../client/build")));

// Serve the React app for any other requests
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
