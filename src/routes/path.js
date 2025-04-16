const express = require("express");
const router = express.Router();

const{writeMethod} = require("../controllers/readMethod");

router.post("/register",writeMethod);


module.exports = router;