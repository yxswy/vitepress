const express = require("express");
const path = require("path");
const manifest = require("./dist/server/ssr-manifest.json");
const fs = require('fs')
const { renderToString } = require('@vue/server-renderer')

const app = express();

// 'app.js' 是以入口的名字加上 `.js` 后缀命名的
const appPath = path.join(__dirname, "./dist", "server", manifest["main"]);
const createApp = require(appPath);

const port = 3000;

app.use("/img", express.static(path.join(__dirname, "./dist/client", "img")));
app.use("/js", express.static(path.join(__dirname, "./dist/client", "js")));
app.use("/css", express.static(path.join(__dirname, "./dist/client", "css")));
app.use(
	"/favicon.ico",
	express.static(path.join(__dirname, "./dist/client", "favicon.ico"))
);

app.get("/", async (req, res) => {
	const app = createApp()
	const appContent = await renderToString(app);
    fs.readFile(path.join(__dirname, "/dist/client/index.html"), (err, html) => {
        if (err) {
            throw err;
        }

        html = html
            .toString()
            .replace('<div id="app">', `<div id="app">${appContent}`);
        res.setHeader("Content-Type", "text/html");
        res.send(html);
    });
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
