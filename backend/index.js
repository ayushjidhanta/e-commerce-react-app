import express from "express";
import { signupUser, loginUser } from "./controller/user-controller.js";
import connectToMongo from "./db.js";
import cors from 'cors'
//import DefaultData from "./default.js";
connectToMongo();

const app = express();
const port = 5000;
const router = express.Router();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Successfully running on ", port);
});


app.use("/signup", router.post("/createuser", signupUser));

app.use("/auth", router.post("/login", loginUser));
;

// app.use("/login", (req, res) => {
//     res.send("login screen");
// })

// DefaultData();