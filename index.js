const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(200);
	res.setHeader("Content-Type", "text/html");
	res.sendFile("/index.html", { root: __dirname });
});

app.get("/contact-me", (req, res) => {
	res.status(200);
	res.setHeader("Content-Type", "text/html");
	res.sendFile("/contact-me.html", { root: __dirname });
});

app.get("/about", (req, res) => {
	res.status(200);
	res.setHeader("Content-Type", "text/html");
	res.sendFile("/about.html", { root: __dirname });
});

app.get("*", (req, res) => {
	res.status(404);
	res.setHeader("Content-Type", "text/html");
	res.sendFile("/404.html", { root: __dirname });
});

app.listen(6969, () => {
	console.log("server is running on http://localhost:6969");
});
