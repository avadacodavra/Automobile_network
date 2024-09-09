# Building your first chaincode

### Create folders to keep the chaincode files
```
mkdir Chaincode
```
```
cd Chaincode
```
```
mkdir KBA-Automobile
```

```
cd KBA-Automobile
```

### Initialize new Nodejs project
```
npm init -y
```

### Install the necessary packages required to build chaincode
```
npm i fabric-contract-api
npm i fabric-shim

```

### Add script to start the chaincode
In package.json, add 
```
"start": "fabric-chaincode-node start"
```

### Create index.js to add chaincode initialisation part
```
touch index.js
```

### Create folder to keep the contract file
```
mkdir lib
```
```
cd lib
```

### Create car-contract.js to add functions related to car asset
```
touch car-contract.js
```


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

```
cp -r ../Chaincode/KBA-Automobile/* vars/chaincode/KBA-Automobile/node/
```

```
minifab ccup -n KBA-Automobile -l node -v 1.0 -d false
```


# Invoke chaincode functions
```
minifab invoke -n KBA-Automobile -p '"createCar","car01","Tata","Tiago","Red"'
```

```
minifab query -n KBA-Automobile -p '"readCar","car01"'
```

# Down minifab without removing files
```
minifab down
```

# Restarting minifab network
```
minifab restart
```

# Clear minifab network
```
minifab cleanup
```

