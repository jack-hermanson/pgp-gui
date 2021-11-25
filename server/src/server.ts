import express from "express";
import * as http from "http";
import sslRedirect from "heroku-ssl-redirect";
import path from "path";

// express server
const app = express();
app.set("port", process.env.PORT || 5000);

// ssl
app.use(sslRedirect());

// static
const staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

// production redirects
if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../../client/build", "index.html")
        );
    });
}

// http server
const server = http.createServer(app);
server.listen(app.get("port"), () => {
    console.log(`Server is listening on port ${app.get("port")}.`);
});
