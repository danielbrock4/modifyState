const { expect, assert } = require('chai')

describe('ModifyVariable', function () {
	it('should change x to 1337', async function () {
		// point to contract
		const ModifyVariable = await ethers.getContractFactory('ModifyVariable')
		// point to constructor and pass in 10 to set state variable to 10
		const contract = await ModifyVariable.deploy(10)
		// deploy contract
		await contract.deployed()

		// modify x from 10 to 1337 via this function!
		// calls the modifyToLeet() function on the instance which prompts a change to the state variable to 1337
		await contract.modifyToLeet()

		// getter for state variable x
		const newX = await contract.x()

		// assert.equal() verifies if change was successful
		assert.equal(newX.toNumber(), 1337)
	})
})

// run test with npx hardhat test
