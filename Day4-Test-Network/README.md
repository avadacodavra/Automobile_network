### Fabric Test Network commands 

Note: Open a terminal in the KBA-CHF Folder & Execute the Following Commands

```bash
curl -sSLO https://raw.githubusercontent.com/hyperledger/fabric/main/scripts/install-fabric.sh && chmod +x install-fabric.sh
```

```bash
./install-fabric.sh -f '2.5.4' -c '1.5.7'
```

```bash
sudo cp fabric-samples/bin/* /usr/local/bin
```

## To use the script navigate to test-network folder inside the fabric-samples folder,

```
cd fabric-samples/test-network/
```
```
./network.sh -h
```
```
./network.sh up createChannel
```
```
docker ps -a
```

### Deploy asset-transfer basic sample chaincode listed in the samples.

```bash
./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-go -ccl go
```

## Setup the Org1 Terminal
```
export FABRIC_CFG_PATH=$PWD/../config/
export CORE_PEER_TLS_ENABLED=true
export CORE_PEER_LOCALMSPID="Org1MSP"
export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/ms
export CORE_PEER_ADDRESS=localhost:7051

```

## Invoke InitLedger function

```bash
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"InitLedger","Args":[]}'
```

## Query all assets
```
peer chaincode query -C mychannel -n basic -c '{"Args":["GetAllAssets"]}'
```

## Read asset
```
peer chaincode query -C mychannel -n basic -c '{"function":"ReadAsset","Args":["asset5"]}'
```

## Down Network
```
./network.sh down
```

### Add new organisation

`cd addOrg3`

`./addOrg3.sh up`


### Stopping the network

`./addOrg3.sh down`

`cd ..`

`./network.sh down`

