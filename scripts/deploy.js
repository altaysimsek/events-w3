const hre = require("hardhat");

async function main() {
  const Events = await hre.ethers.getContractFactory("Events");
  const events = await Events.deploy();

  await events.deployed();

  console.log(`Lock with 1 ETH  deployed to ${events.address}`);
  console.log(events);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
