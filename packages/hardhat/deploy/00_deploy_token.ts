import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployTokenContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy MockLSK
  await deploy("MockLSK", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });

  // Deploy SimpleUSDC
  await deploy("SimpleUSDC", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployTokenContracts;
deployTokenContracts.tags = ["MockLSK", "SimpleUSDC"];
