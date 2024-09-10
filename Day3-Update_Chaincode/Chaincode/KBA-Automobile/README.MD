# Upgrading the Chaincode

To upgrade the chaincode we have to **increase the version** while deploying the chaincode.

Follow these steps to upgrade the chaincode

**Note: Before executing these steps make sure you have given necessary permission and created the chaincode folder inside the vars folder.**

If not do these steps before proceeding

```bash
sudo chmod -R 777 vars/

mkdir -p vars/chaincode/KBA-Automobile/node
```


1. Copy the latest chaincode to minifab network

```bash
cp -r ../Chaincode/KBA-Automobile/* vars/chaincode/KBA-Automobile/node/
```

2. Deploy the new chaincode to the network by increasing the version

```bash
minifab ccup -n KBA-Automobile -l node -v 2.0 -d false
```

3. Now invoke the latest function of the updated chaincode

```bash
minifab invoke -n KBA-Automobile -p '"createCar","car05","Tata","Tiago","White","22/06/2023","F-01"'

minifab invoke -n KBA-Automobile -p '"deleteCar","car05"'
```


## Blockchain Explorer

To view the blocks in the form of blockchain explorer we have to execute the following commands:

```bash
minifab explorerup
```

**userid: exploreradmin**

**password: exploreradminpw**

To bring the explorer down execute the following command:

```bash
minifab explorerdown
```

## CouchDB

To view the contents in the couchdb go to this url with these credentials:

**userid: admin**

**password: adminpw**

## Block Details

To check the details of the latest block execute this command:

```bash
minifab blockquery
```
The block details will be stored in a json file.

To view the deatils of a particular block execute this command followed by the no of the block:

```bash
minifab blockquery -b x (x - represents block no)

minifab blockquery -b 6
```

## To view the blockchain file data 

To view the blockchain files we have to enter inside the docker container. Execute these commands:

1. Go inside any particular peer container. In this case it is mvd peer.

```bash
docker exec -it peer1.mvd.auto.com /bin/sh
```

2. Go to the following location to view the block files

```bash
ls var/hyperledger/production/ledgersData/chains/chains/autochannel/
```

3. To read the contents of the blockfile execute these command

```bash
cat var/hyperledger/production/ledgersData/chains/chains/autochannel/blockfile_000000
```

**Each block file is generated after 64MB of Data in it.**

4. To exit from the container execute this command

```bash
exit
```
