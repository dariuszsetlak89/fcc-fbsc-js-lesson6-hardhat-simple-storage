const { ethers, run, network } = require("hardhat");

async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    );
    console.log("Deploying contract...");
    const simpleStorage = await SimpleStorageFactory.deploy();
    await simpleStorage.deployed();
    console.log(`Deployed contract to: ${simpleStorage.address}`);

    // Smart contract verification - only on Goerli testnet, when Etherscan Api key is given
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...");
        await simpleStorage.deployTransaction.wait(6);
        await verify(simpleStorage.address, []);
    }

    // Read the current value of favoriteNumber
    const currentValue = await simpleStorage.retrieve();
    console.log(`Current Value is: ${currentValue}`);

    // Update the current value
    const transactionResponse = await simpleStorage.store(33);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated Value is: ${updatedValue}`);
}

// Smart contract verification function
// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
    console.log("Verifying contract...");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        });
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!");
        } else {
            console.log(e);
        }
    }
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
