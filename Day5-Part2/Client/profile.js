let profile = {
    manufacturer: {
        "cryptoPath": "../Network/vars/keyfiles/peerOrganizations/manufacturer.auto.com",
        "keyDirectoryPath": "../Network/vars/keyfiles/peerOrganizations/manufacturer.auto.com/users/Admin@manufacturer.auto.com/msp/keystore",
        "certPath": "../Network/vars/keyfiles/peerOrganizations/manufacturer.auto.com/users/Admin@manufacturer.auto.com/msp/signcerts/Admin@manufacturer.auto.com-cert.pem",
        "tlsCertPath": "../Network/vars/keyfiles/peerOrganizations/manufacturer.auto.com/users/Admin@manufacturer.auto.com/tls/ca.crt",
        "peerEndpoint": "localhost:7003",
        "peerHostAlias": "peer1.manufacturer.auto.com",
        "mspId": "manufacturer-auto-com"
    },
    dealer: {
        "cryptoPath": "../Network/vars/keyfiles/peerOrganizations/dealer.auto.com",
        "keyDirectoryPath": "../Network/vars/keyfiles/peerOrganizations/dealer.auto.com/users/Admin@dealer.auto.com/msp/keystore",
        "certPath": "../Network/vars/keyfiles/peerOrganizations/dealer.auto.com/users/Admin@dealer.auto.com/msp/signcerts/Admin@dealer.auto.com-cert.pem",
        "tlsCertPath": "../Network/vars/keyfiles/peerOrganizations/dealer.auto.com/users/Admin@dealer.auto.com/tls/ca.crt",
        "peerEndpoint": "localhost:7004",
        "peerHostAlias": "peer1.dealer.auto.com",
        "mspId": "dealer-auto-com"
    },
    mvd: {
        "cryptoPath": "../Network/vars/keyfiles/peerOrganizations/mvd.auto.com",
        "keyDirectoryPath": "../Network/vars/keyfiles/peerOrganizations/mvd.auto.com/users/Admin@mvd.auto.com/msp/keystore",
        "certPath": "../Network/vars/keyfiles/peerOrganizations/mvd.auto.com/users/Admin@mvd.auto.com/msp/signcerts/Admin@mvd.auto.com-cert.pem",
        "tlsCertPath": "../Network/vars/keyfiles/peerOrganizations/mvd.auto.com/users/Admin@mvd.auto.com/tls/ca.crt",
        "peerEndpoint": "localhost:7005",
        "peerHostAlias": "peer1.mvd.auto.com",
        "mspId": "mvd-auto-com"
    }
}
module.exports = { profile }
