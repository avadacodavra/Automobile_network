var express = require("express");
var router = express.Router();
const { clientApplication } = require("../../Client/client");
let userClient = new clientApplication();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Manufacturer Dashboard" });
});

router.post("/api/car", (req, res) => {
  userClient.submitTxn(
    "manufacturer",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "invokeTxn",
    "",
    "createCar",
    `${req.body.carId}`,
    `${req.body.make}`,
    `${req.body.model}`,
    `${req.body.color}`,
    `${req.body.dateOfManufacture}`,
    `${req.body.manufacturerName}`
  ).then((message) => {
    // console.log(message.toString())
    console.log(new TextDecoder().decode(message));
    res.send("Car Created");
  });
});

router.get("/api/car/:carId", (req, res) => {
  userClient.submitTxn(
    "manufacturer",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "queryTxn",
    "",
    "readCar",
    `${req.params.carId}`
  ).then((message) => {
    // console.log(message.toString())
    console.log(new TextDecoder().decode(message));
    res.send(new TextDecoder().decode(message));
  });

  //res.send("get request");
});


module.exports = router;