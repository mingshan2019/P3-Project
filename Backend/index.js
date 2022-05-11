const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ express: "Hello from server!" });
    res.send({message: 'A msg from backend'})
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})