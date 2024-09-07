const { ClientApplication } = require('./client');

let userClient = new ClientApplication();
userClient.submitTxn(
    "manufacturer",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "invokeTxn",
    "",
    "createCar",
    "Car-13",
    "Tata",
    "Nexon",
    "White",
    "22/05/2023",
    "Manufacturer-2"
).then(result => {
    console.log(new TextDecoder().decode(result))
})