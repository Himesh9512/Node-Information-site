const http = require("http");
const fs = require("fs");

const customReadFile = (res, path, code) => {
	fs.readFile(path, (err, data) => {
		if (err) {
			return res
				.writeHead(500, {
					"Content-Type": "text/plain",
				})
				.end("Internal Server error");
		}
		return res
			.writeHead(code, {
				ContentType: "text/html",
			})
			.end(data);
	});
};

const server = http.createServer(async (req, res) => {
	const url = req.url;

	switch (url) {
		case "/":
			customReadFile(res, "./index.html", 200);

		case "/contact-me":
			customReadFile(res, "./contact-me.html", 200);

		case "/about":
			customReadFile(res, "./about.html", 200);

		default:
			customReadFile(res, "./404.html", 404);
	}
});

server.listen(6969, () => {
<<<<<<< HEAD
	console.log("the server is running!");
=======
	const { port } = server.address();

	console.log(`the server is running on http://localhost:${port}`);
>>>>>>> 5c028faeb46abf71e5a4c8c1692d6fd404647c33
});
