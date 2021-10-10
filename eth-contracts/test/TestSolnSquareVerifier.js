
const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var ERC721MintableComplete = artifacts.require('DimejiERC721Token');
const proof = require("./proof");

contract('TestSolnSquareVerifier', async(accounts) => {
    beforeEach(async function () { 
        this.solnSquareVerifier = await SolnSquareVerifier.new({from: accounts[0]});
        this.contract = await ERC721MintableComplete.new({from: accounts[0]});  
      });
// Test if a new solution can be added for contract - SolnSquareVerifier
it("Test if a new solution can be added for contract", async function(){
    await this.solnSquareVerifier.add(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs, {from: accounts[0]});

    let result = await this.solnSquareVerifier.solutions(0);
    assert.equal(0, result.index, "solution should have index 0.");
    assert.equal(accounts[0], result.senderAddress, "solution should be added by msg.sender.");
})

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
it('Test if an ERC721 token can be minted for contract', async function (){
    let tokenId = 2;

    await this.solnSquareVerifier.mintVerified(proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs, tokenId, {from: accounts[0]});

    let result = await this.solnSquareVerifier.solutions(0);
    assert.equal(0, result.index, "One solution should be added with index 0.");
    assert.equal(accounts[0], result.senderAddress, "One solution should be added by msg.sender.");

})
})