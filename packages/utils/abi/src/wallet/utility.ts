import { ethers } from 'ethers';

export interface SweepOptions {
  controllerPrivateKey: string;
  proxyAddress: string;
  tokenAddress: string;
  toAddress: string;
  amount: string; // BigNumberish / Hex string
  rpcUrl: string;
}

export async function sweepTokenFromProxy(options: SweepOptions) {
  const provider = new ethers.JsonRpcProvider(options.rpcUrl);
  const controllerWallet = new ethers.Wallet(options.controllerPrivateKey, provider);

  // 1. Encode Inner Calldata (ERC-20 transfer)
  const erc20Interface = new ethers.Interface([
    'function transfer(address to, uint256 amount) returns (bool)'
  ]);
  const innerCalldata = erc20Interface.encodeFunctionData('transfer', [
    options.toAddress,
    options.amount
  ]);

  // 2. ABI Sequence Proxy execute function
  const proxyAbi = [
    'function execute(address target, uint256 value, bytes calldata data) external returns (bytes memory)'
  ];
  const proxyContract = new ethers.Contract(options.proxyAddress, proxyAbi, controllerWallet);

  // 3. Transaction Controller Proxy
  const tx = await proxyContract.execute(
    options.tokenAddress, // e.g. USDT Contract
    0,                    // Native ETH value = 0
    innerCalldata
  );

  console.log('Sweep Tx Broadcasted:', tx.hash);
  return await tx.wait();
}
