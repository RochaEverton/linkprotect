import Web3 from "web3";

export async function connectContract(){
    if(!window.ethereum) throw new Error("Sem MetaMask instalada");

    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.requestAccounts();
    if(!accounts || !accounts.length) throw new Error("Carteira não permitida");

    alert(accounts[0]);
}