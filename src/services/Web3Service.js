import Web3 from "web3";
import ABI from "./ABI.json"

const CONTRACT_ADDRESS = "0xf601ec85826c6886eE55A0cf416151ccdd1705f5";

export async function connectContract() {
    if (!window.ethereum) throw new Error("Sem MetaMask instalada");

    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.requestAccounts();
    if (!accounts || !accounts.length) throw new Error("Carteira não permitida");

    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from: accounts[0] });
}

export async function addLink({ url, linkId, feeInWey }){
    const contract = await connectContract();
    return contract.methods.addLink(url, linkId, feeInWey).send();
}