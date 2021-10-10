pragma solidity ^0.5.5;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import './verifier.sol';
import './ERC721Mintable.sol';

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is BatisERC721Token, Verifier{


// TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint index;
        address senderAddress;
    }
    uint256 solutionCounter = 0;
// TODO define an array of the above struct
    Solution[] public solutions;
// TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) public Solutionssubmitted;
// TODO Create an event to emit when a solution is added
    event SolutionAdded(uint Solindex, address Solsender);


// TODO Create a function to add the solutions to the array and emit the event
    function add(uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory input) public {
        Solution memory latestSolution = Solution({
                index: solutionCounter++,
                senderAddress: msg.sender
            });
            
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        Solutionssubmitted[key] = latestSolution;
        solutions.push(latestSolution);
        
        emit SolutionAdded(latestSolution.index, latestSolution.senderAddress);
    }


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
    function mintVerified(uint256[2] memory a, uint256[2][2] memory b, uint256[2] memory c, uint256[2] memory input, uint256 tokenId) public {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(Solutionssubmitted[key].senderAddress == address(0), 'Already submitted');
        require(verifyTx(a, b, c, input), 'Is not Valid');
        add(a, b, c, input);
        super.mint(msg.sender, tokenId);
    }
}
  


























