var ERC721MintableComplete = artifacts.require('DimejiERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_two, 1);
            await this.contract.mint(account_two, 2);

        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call();
            assert.equal(2, totalSupply, "Total token minted should be four");
        })

        it('should get token balance', async function () { 
            let balanceOne = await this.contract.balanceOf.call(account_two);
            assert.equal(2, balanceOne, "account_one should have two tokens on its own.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenUriOne = await this.contract.tokenURI.call(1);
            assert.equal("https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", tokenUriOne, "Invalid token URI");
        })

        it('should transfer token from one owner to another', async function () { 
                await this.contract.transferFrom(account_two, account_three, 2, { from: account_two });
                let ownerOftok = await this.contract.ownerOf.call(2);
                assert.equal(account_three, ownerOftok, "Token not transferred.");
            })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let denied = false;
            try  {
                await this.contract.mint(account_three, 3, { from: account_two });
            } catch(e) {
                denied = true;
            }
            assert.equal(true, denied, "Unable to mint");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner();
            assert.equal(account_one, owner, "You are not the owner of this token");
        })

    });
})