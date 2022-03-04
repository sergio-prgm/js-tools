const express = require("express");
const app = require("./api/app")
const port = 3000

// const app = express();

app.listen(process.env.PORT || port, () => console.log(`Server running on Port ${port}`))