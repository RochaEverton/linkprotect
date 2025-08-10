import Web3 from "web3";

async function connectContract(){
    if(!window.ethereum) throw new Error("Sem MetaMask instalada");

    const web3 = new Web3(window.ethereum)
}