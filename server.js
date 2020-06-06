const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/api/user", require("./routes/user.route"));

app.listen(app.get("port"), ()=>{
    console.log("Servidor corriendo en el puerto: ", app.get("port"));
});