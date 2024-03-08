import express from "express";
import path from "path";
import cors from "cors";
import { homeRouter } from "./routes/index.js";
import { basePath } from "./consts.js";

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
	console.log(new Date().toLocaleTimeString(), ": ", req.url);
	next();
});

app.use(express.static(path.join(basePath, "public")));
app.use(cors());
app.use("/home", homeRouter);

app.get("/test/:time", (req, res) => {
	const { time = 30000 } = req.params;
	setTimeout(() => res.send("RESPONSE"), time);
});

//app.get("/", (_, res) => res.send("hi universe"));

app.listen(PORT, () =>
	console.log(`PORT @ ${PORT} @ ${new Date().toLocaleTimeString()}`)
);
