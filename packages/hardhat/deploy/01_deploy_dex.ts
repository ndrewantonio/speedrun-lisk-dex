import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploySimpleDEX: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, get } = hre.deployments;

  // Get deployed token addresses
  const mockLSK = await get("MockLSK");
  const simpleUSDC = await get("SimpleUSDC");

  console.log("Deploying SimpleDEX with:");
  console.log("  Token A (MockLSK):", mockLSK.address);
  console.log("  Token B (SimpleUSDC):", simpleUSDC.address);

  await deploy("SimpleDEX", {
    from: deployer,
    args: [mockLSK.address, simpleUSDC.address],
    log: true,
    autoMine: true,
  });
};

export default deploySimpleDEX;
deploySimpleDEX.tags = ["SimpleDEX"];
deploySimpleDEX.dependencies = ["MockLSK", "SimpleUSDC"];
