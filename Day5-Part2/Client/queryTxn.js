const { ClientApplication } = require('./client')

let userClient = new ClientApplication()
userClient.submitTxn(
    "manufacturer",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "queryTxn",
    "",
    "readCar",
    "Car-03",
).then(result => {
            // Decode the Uint8Array to a string
            const decodedString = new TextDecoder().decode(result);
    
            // Parse the string as JSON
            const jsonObject = JSON.parse(decodedString);
            
            // Log the JSON object
            console.log(jsonObject);
});


userClient.submitTxn(
    "dealer",
    "autochannel",
    "KBA-Automobile",
    "OrderContract",
    "queryTxn",
    "",
    "readOrder",
    "Order-08",
).then(result => {
        // Decode the Uint8Array to a string
        const decodedString = new TextDecoder().decode(result);
    
        // Parse the string as JSON
        const jsonObject = JSON.parse(decodedString);
        
        // Log the JSON object
        console.log(jsonObject);
});

