import { config } from "@onflow/fcl";
if (process.env.Chain_ENV == "testnet"){
    config({
        "accessNode.api": "https://rest-testnet.onflow.org",
        "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn/",
        "0x01":"0x83f8ed4318375647"
    })
} else {
    config({
        "accessNode.api": "http://localhost:8888",
        "discovery.wallet": "http://localhost:8701/fcl/authn",
        "0x01":"0xf8d6e0586b0a20c7"
    })
}