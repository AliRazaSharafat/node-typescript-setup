import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/test", (req: Request, res: Response) => {
  console.log("req", req);
  console.log("res", res);
  console.log("test");
});

app.listen(process.env.PORT || 5001, () => console.log("Server is starting"));
