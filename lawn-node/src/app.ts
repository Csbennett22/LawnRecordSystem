import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("first middleware");
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("second middleware");
  next();
});

app.get("/lawns", (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World" });
});

app.listen(8000);
