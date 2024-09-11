# Private Data Collection

# Start the minifab network
#### open new terminal at minifab network directory and execute
```
./startNetwork.sh
```

# Deploy the chaincode to the minifab network

```
sudo chmod -R 777 vars/
```

```
mkdir -p vars/chaincode/KBA-Automobile/node
```


Note: Execute the following commands from Network folder

1. Copy the latest update chaincode which inclueds the collection file and order contract
```bash
cp -r ../Chaincode/KBA-Automobile/* vars/chaincode/KBA-Automobile/node/
```

```bash
cp vars/chaincode/KBA-Automobile/node/collections.json ./vars/KBA-Automobile_collection_config.json
```

2. Deploy the latest chaincode (if you are updating the chaincode make sure to increase the version or else you can normally deploy with normal version 1.0 itself)

```bash
minifab ccup -n KBA-Automobile -l node -v 3.0 -d false -r true
```

3. First create the base-64 equivalent data

```bash
MAKE=$(echo -n "Tata" | base64 | tr -d \\n)
MODEL=$(echo -n "Tiago" | base64 | tr -d \\n)
COLOR=$(echo -n "White" | base64 | tr -d \\n)
DEALER_NAME=$(echo -n "XXX" | base64 | tr -d \\n)
```

These are created as an environmental variable with base 64 encoding

4. Now create an order using these variables with this command:

```bash
minifab invoke -n KBA-Automobile -p '"OrderContract:createOrder","ord01"' -t '{"make":"'$MAKE'","model":"'$MODEL'","color":"'$COLOR'","dealerName":"'$DEALER_NAME'"}' -o dealer.auto.com
```

5. To query the order use this command:

```bash
minifab query -n KBA-Automobile -p '"OrderContract:readOrder","ord01"'
```

6. When you try to read this order from any other organization other than manufacturer or dealer you will not be able to read that transaction.

```bash
minifab query -n KBA-Automobile -p '"OrderContract:readOrder","ord01"' -o mvd.auto.com
```

