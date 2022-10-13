const Web3 = require("web3")

const web3 = new Web3(new web3.provider.HttpProvider(""))

web3.eth.getbalance("0x8987hbubh", function(err, result){
if(err){
console.log(err)
}else{
console.log(web3.utils.fromWei(result, "ether") +"Eth")
}
})
