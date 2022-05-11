const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/init", (req, res) => {
    res.json({ message: "server started!" });
  });

  app.get("/connect", (req, res) => {
    res.send({message: 'A msg from backend'})
  });  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

