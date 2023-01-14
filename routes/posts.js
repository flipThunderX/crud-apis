const express = require("express");
const router = express.Router();
const Posts = require("../modal/Posts");

//To get all post
reouter.get("/", (req,res) => {
	Posts.find()
	.then((resp) => res.status(200).json(resp))
	.catch((err) => res.status(400).json("Request Failed"));
});

//To create a new post
router.post("/", (req, res) => {
	const { title, description } = req.body;
	const post = new Posts({
		title, 
		description,
	});
	post
		.save()
		.then((resp) => res.status(200).json(resp))
		.catch((err) => res.status(400).json("Request Failed"));
});

//To delete a specific post
reouter.delete("/:id", (req, res) => {
	Posts.remove({ _id: req.params.id})
		.then((resp) => res.status(200).json(resp))
		.catch((err) => res.status(400).json("Request Failed"));
});

//to delete multiple post
router.post("/delete", (req, res) => {
	Posts.deleteMany({ _id: list, list: { $in: req.body.list } })
		.then((resp) => res.status(200).json(resp))
		.catch((err) => res.status(400).json("Request Failed"));
});

//To get a specific post
router.get("/:id", (req,res) => {
	Posts.findById(req.params.id)
		.then((resp) => res.status(200).json(resp))
		.catch((err) => res.status(400).json("Request Failed"));
});

//To update specific post
router.patch("/:id", (req, res) => {
	Post.updateOne({ _id: req.params.id }, { $set: req.body })
		.then((resp) => res.status(200).json(resp))
		.catch((err) => res.status(400).json("Request Failed"));
});

module.exports = router;
		
