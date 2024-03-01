const { ethers } = require("ethers");
const { formatUnits } = require("@ethersproject/units");

const provider = new ethers.providers.AlchemyProvider('goerli','ghyL9rqp8AuaJSGz3tk8EUMKf1QjpHsg');

async function getBlock(){
    try{
        const address = '0xD794481DC63c974c5C49FAF7D3766b93Cfec1B13';
        const balance = await provider.getBalance(address);
         const block = await provider.getBlock();
        const ethBal = formatUnits(balance, "ether");
        console.log('Eth', ethBal);
        console.log('block', block);
    }catch(e){
        console.error(e);
        
    }
}
getBlock();
