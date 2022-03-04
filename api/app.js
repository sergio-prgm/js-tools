const express = require("express")
const app = express()
const path = require("path")

app.use("/static", express.static(path.resolve("./", "frontend", "static")))

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("./", "frontend", "index.html"))
})

module.exports = app