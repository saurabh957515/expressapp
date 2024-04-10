const express = require("express")
const app = express();
app.get("/hello", (req, res) => {
    res.send({
        name: "Saurabh is",
        Bio: "comming"
    })
})
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Server is starting.. on ", port)
})