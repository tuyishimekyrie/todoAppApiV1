import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Todo app apiV1");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
