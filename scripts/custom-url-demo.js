
const { ethers } = require('ethers');
// const {dotenv} = require('dotenv');

const { WrapperBuilder } = require("@redstone-finance/evm-connector");



// 定义一个async函数来调用合约
async function callContract() {
    // 定义provider对象，连接到以太坊网络
    const provider = new ethers.providers.JsonRpcProvider('https://alpha-rpc.scroll.io/l2');
    // 定义合约ABI和地址
    //   const { artifacts } = require("hardhat");


    const contractABI = [
        {
            "inputs": [],
            "name": "getMaxBlockTimestampDelay",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMaxDataTimestampDelay",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_receviedSigner",
                    "type": "address"
                }
            ],
            "name": "isSignerAuthorized",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_receivedTimestamp",
                    "type": "uint256"
                }
            ],
            "name": "isTimestampValid",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];


    const contractAddress = '0x97930C6200B214297b08A3d0295Bd24701b6A0d9';

    // console.log(provider.getSigner('0xdBcC2C6c892C8d3e3Fe4D325fEc810B7376A5Ed6')._isSigner)
    // 创建合约实例
    contract = new ethers.Contract(contractAddress, contractABI,  provider);

    // 连接到以太坊钱包
    //   await window.ethereum.enable();
    const wrappedContract = WrapperBuilder.wrap(contract).usingDataService({
        dataServiceId: "redstone-custom-urls-demo",
        uniqueSignersCount: 2,
        dataFeeds: ["0x6a5c47b78e9360b9"],
      }, ["https://d1zm8lxy9v2ddd.cloudfront.net"]);
    // 调用合约函数
    const valueFromOracle = await wrappedContract.getValue();
    // console.log(valueFromOracle)
    console.log({ valueFromOracle: valueFromOracle.toNumber() });
}

callContract();
