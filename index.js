const express = require("express");
const mongoose = require("mongoose")
require("dotenv/config");

const app = express();

//server port
const port = process.env.PORT || 5005;

//routes
const postRouter = require("./routes/posts");

app.use(express.json());
app.use("/post", postRouter);

//database connection
mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB connected "));
	
//server connection
app.listen(port, () => console.log('app running successfully in the port ${port}'));
