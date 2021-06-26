var web3 = new Web3(Web3.givenProvider);
var instance;
var user;


var contractAddress = "0x3Cadc4c8bD7ef0412F6D3b65aDEA2028906456eB";
var contractOwner;

$(document).ready(function () {
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];

        console.log(instance);

        instance.events.Birth()
        .on('data', (event) => {
          console.log(event);
          let owner = event.returnValues.owner;
          let kittyId = event.returnValues.kittyId;
          let mumId = event.returnValues.mumId;
          let dadId = event.returnValues.dadId;
          let genes = event.returnValues.genes        
          alert_msg("owner:" + owner
            + " kittyId:" + kittyId
            + " mumId:" + mumId
            + " dadId:" + dadId
            + " genes:" + genes,'success')
        })
        .on('error', console.error);

    })
})


function createKitty() {
    var dnaStr = getDna();
    let res;
    try {
      res = instance.methods.createKittyGen0(dnaStr).send();
    } catch (err) {
      console.log(err);
    }
  }