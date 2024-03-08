import express from "express";
import { basePath } from "../consts.js";
import fs from "fs";

const router = express.Router();
const fileDirPath = basePath + "/files";

router.get("/file/:filename", (req, res) => {
	const { filename } = req.params;
	const filepath = fileDirPath + "/" + filename;
	res.sendFile(filepath);
});

router.get("/files", (req, res) => {
	console.log("home/files");
	fs.readdir(fileDirPath, (err, files) => {
		if (err) {
			console.error(err);
			return res.status(500).json({ error: err });
		}

		return res.json({ data: files });
	});
});

export default router;
