
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
cp vars/chaincode/KBA-Automobile/node/collections.json ./vars/KBA-Automobile_collection_config.json
```

```
minifab ccup -n KBA-Automobile -l node -v 1.1 -d false
```

# Invoke chaincode functions
```
minifab invoke -n KBA-Automobile -p '"createCar","car03","Tata","Tiago","Red", "09/09/2024", "Fact-01"'
```

```
minifab query -n KBA-Automobile -p '"readCar","car03"'
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

