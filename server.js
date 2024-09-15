import * as dotenv from "dotenv";
import express from "express";
const app = express();
import morgan from "morgan";

dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});
