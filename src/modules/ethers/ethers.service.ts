import { Injectable } from '@nestjs/common';
import Decimal from 'decimal.js';
import { Contract, ethers, Wallet } from 'ethers';

import { AppConfigService } from '../../app_config/app_config.service';
import { BALANCE_OF_STORAGE, TOTAL_SUPPLY } from '../../constants';
import { MapSlot } from '../../types/interface';
import { IpfsService } from '../ipfs/ipfs.service';

@Injectable()
export class EthersService {
  private readonly provider: ethers.providers.JsonRpcProvider;
  private readonly wallet: Wallet;
  private readonly stakingDistributionSmartContract: Contract;
  private readonly lpDistributionSmartContract: Contract;
  private readonly chestSmartContract: Contract;
  private readonly dailySnapshotSmartContract: Contract;
  private readonly governanceSmartContract: Contract;
  private readonly minterSmartContract: Contract;
  private readonly officialPoolContract: Contract;

  constructor(
    private readonly appConfigService: AppConfigService,
    private readonly ipfsService: IpfsService,
  ) {
    this.provider = new ethers.providers.JsonRpcProvider(
      this.appConfigService.getInfuraSepoliaUrl(),
    );
    this.wallet = new ethers.Wallet(
      this.appConfigService.getPrivateKey(),
      this.provider,
    );
    this.dailySnapshotSmartContract = new ethers.Contract(
      this.appConfigService.dailySnapshotAddress(),
      this.appConfigService.dailySnapshotAbi(),
      this.wallet,
    );
    this.officialPoolContract = new ethers.Contract(
      this.appConfigService.officialPoolAddress(),
      this.appConfigService.officialPoolAbi(),
      this.wallet,
    );
    this.minterSmartContract = new ethers.Contract(
      this.appConfigService.minterAddress(),
      this.appConfigService.minterAbi(),
      this.wallet,
    );
    this.governanceSmartContract = new ethers.Contract(
      this.appConfigService.governanceAddress(),
      this.appConfigService.governanceAbi(),
      this.wallet,
    );
    this.lpDistributionSmartContract = new ethers.Contract(
      this.appConfigService.lpDistributionAddress(),
      this.appConfigService.lpDistributionAbi(),
      this.wallet,
    );
    this.stakingDistributionSmartContract = new ethers.Contract(
      this.appConfigService.stakingDistributionAddress(),
      this.appConfigService.stakingDistributionAbi(),
      this.wallet,
    );
    this.chestSmartContract = new ethers.Contract(
      this.appConfigService.chestAddress(),
      this.appConfigService.chestAbi(),
      this.provider,
    );
  }

  getProvider() {
    return this.provider;
  }
  getDailySnapshotContract() {
    return this.dailySnapshotSmartContract;
  }

  getLPDistributionSmartContract() {
    return this.lpDistributionSmartContract;
  }

  getStakingDistributionSmartContract() {
    return this.stakingDistributionSmartContract;
  }

  getChestSmartContract() {
    return this.chestSmartContract;
  }

  getGovernanceSmartContract() {
    return this.governanceSmartContract;
  }

  getMinterSmartContract() {
    return this.minterSmartContract;
  }

  getOfficialPoolContract() {
    return this.officialPoolContract;
  }

  /**
   * Retrieves the current block number from the Ethereum provider.
   *
   * @returns {Promise<number>} - A Promise resolving to the current block number.
   */
  async getBlockNumber(): Promise<number> {
    return await this.provider.getBlockNumber();
  }

  /**
   * Retrieves the current block number timestamp from the Ethereum provider.
   *
   * @returns {Promise<number>} - A Promise resolving to the current block number timestamp.
   */
  async getBlockNumberTimestamp(blockNumber: number): Promise<number> {
    return (await this.provider.getBlock(blockNumber)).timestamp;
  }

  /**
   * Retrieves a random block number within the last hour based on the current block number.
   *
   * @returns {Promise<number>} - A Promise resolving to the random block number within the last hour.
   */
  async getRandomBlockLastHour(): Promise<number> {
    const currentBlockNumber = await this.getBlockNumber();
    const blockCreationTime = 12;
    const blocksPerHour = 3600 / blockCreationTime;

    const randomBlocks = Math.floor(Math.random() * blocksPerHour);

    return currentBlockNumber - randomBlocks;
  }

  /**
   * Retrieves the storage balance at a specific slot for a given poolAddress, lpId, and blockNumber.
   *
   * @param {MapSlot} params - An object containing poolAddress, lpId, and blockNumber.
   * @returns {Promise<string>} - A Promise resolving to the storage balance at the specified slot.
   */
  async getBalanceOfStorageAt({
    poolAddress,
    lpId,
    blockNumber,
  }: MapSlot): Promise<string> {
    const slot = this.mapSlot(BALANCE_OF_STORAGE, lpId);

    return await this.provider.getStorageAt(
      poolAddress,
      slot,
      ethers.utils.hexValue(blockNumber),
    );
  }

  /**
   * Retrieves the total supply of a token from a specified storage slot in the provided poolAddress.
   *
   * @param {string} poolAddress - The pool address where the token's total supply is stored.
   * @returns {Promise<number>} - A Promise resolving to the total supply of the token.
   */
  async getTotalSupply(poolAddress: string): Promise<number> {
    return new Decimal(
      await this.provider.getStorageAt(
        poolAddress,
        TOTAL_SUPPLY,
        ethers.utils.hexValue(await this.provider.getBlockNumber()),
      ),
    ).toNumber();
  }

  async getChestStorageIndex(blockNumber: number): Promise<string> {
    return await this.provider.getStorageAt(
      this.appConfigService.chestAddress(),
      this.generateZeroPadValue(8),
      ethers.utils.hexValue(blockNumber),
    );
  }

  async getChestStorageOwners(index: number, blockNumber: number) {
    const slot = this.mapSlot(
      this.generateZeroPadValue(2),
      this.generateZeroPadValue(index),
    );

    return await this.provider.getStorageAt(
      this.appConfigService.chestAddress(),
      slot,
      ethers.utils.hexValue(blockNumber),
    );
  }
  async getLPWeightOfTotalAllocation(lpAddress: string, blockNumber: number) {
    let i = 0;
    const blkNmb = new Decimal(blockNumber);
    while (true) {
      try {
        const benefactor = await this.getMinterSmartContract().beneficiaries(
          i,
          { blockTag: blkNmb.toHexadecimal() },
        );

        if (benefactor[0].toLowerCase() === lpAddress) {
          return benefactor[1].toString();
        }
        ++i;
      } catch (e) {
        console.log(e);
        break;
      }
    }
  }

  async getChestVestingPositionTotalVestedAmount(
    index: number,
    blockNumber: number,
  ) {
    const slotToStruct = this.mapSlot(
      this.generateZeroPadValue(9),
      this.generateZeroPadValue(index),
    );

    return await this.provider.getStorageAt(
      this.appConfigService.chestAddress(),
      slotToStruct,
      ethers.utils.hexValue(blockNumber),
    );
  }

  async getChestVestingPositionReleasedAmount(
    index: number,
    blockNumber: number,
  ) {
    const slotToStruct = this.mapSlot(
      this.generateZeroPadValue(9),
      this.generateZeroPadValue(index),
    );

    // Convert the hex string to a BigNumber
    const currentSlot = ethers.BigNumber.from(slotToStruct);

    // Increment the slot by one
    const nextSlot = currentSlot.add(1);

    return await this.provider.getStorageAt(
      this.appConfigService.chestAddress(),
      nextSlot,
      ethers.utils.hexValue(blockNumber),
    );
  }

  async getChestVestingPositionSlot2(index: number, blockNumber: number) {
    const slotToStruct = this.mapSlot(
      this.generateZeroPadValue(9),
      this.generateZeroPadValue(index),
    );

    // Convert the hex string to a BigNumber
    const currentSlot = ethers.BigNumber.from(slotToStruct);

    // Increment the slot by one
    const nextSlot = currentSlot.add(2);

    // Convert the next slot back to a hex string
    const nextSlotHex = nextSlot.toHexString();

    // Since ethers.js pads the hex string, we trim it to 32 bytes if necessary
    const trimmedNextSlotHex =
      nextSlotHex.length > 66
        ? '0x' + nextSlotHex.slice(nextSlotHex.length - 64)
        : nextSlotHex;

    const result = await this.provider.getStorageAt(
      this.appConfigService.chestAddress(),
      trimmedNextSlotHex,
      ethers.utils.hexValue(blockNumber),
    );

    return this.decodeVestingPositionSlot2(result);
  }

  private decodeVestingPositionSlot2(data: string) {
    const dataBytes32 = ethers.utils.hexZeroPad(data, 32);

    const cliffTimestamp = ethers.BigNumber.from(
      '0x' + dataBytes32.substring(54, 66),
    ).toNumber();
    const boosterTimestamp = ethers.BigNumber.from(
      '0x' + dataBytes32.substring(42, 54),
    ).toNumber();
    const vestingDuration = ethers.BigNumber.from(
      '0x' + dataBytes32.substring(34, 42),
    ).toNumber();
    const accumulatedBooster = ethers.BigNumber.from(
      '0x' + dataBytes32.substring(4, 34),
    ).toString();
    const nerfParameter = ethers.BigNumber.from(
      '0x' + dataBytes32.substring(2, 4),
    ).toNumber();

    return {
      cliffTimestamp,
      boosterTimestamp,
      vestingDuration,
      accumulatedBooster,
      nerfParameter,
    };
  }

  /**
   * Asynchronous function to retrieve proof for a given address and claim amount.
   * @param address - The address for which proof is needed.
   * @returns {Promise<{ amount: string; proof: boolean }>} indicating whether the proof was successfully obtained.
   */
  async getProof(
    address: string,
    ipfsHash: string,
  ): Promise<{
    kind: 'error' | 'success';
    message?: string;
    payload?: { amount: string; proof: boolean };
  }> {
    let proof = null;
    let amount = null;

    const tree = await this.ipfsService.get(ipfsHash);

    for (const [index, value] of tree.entries()) {
      if (value[0] === address) {
        proof = tree.getProof(index);
        amount = value[1];
      }
    }

    if (!proof) {
      return {
        kind: 'error',
        message: 'The user address is not a valid',
      };
    }

    return {
      kind: 'success',
      payload: { amount, proof },
    };
  }

  /**
   * Computes a keccak256 hash based on the concatenation of byte representations of lpId and mapSlotRoot.
   *
   * @param {string} mapSlotRoot - The map slot root value.
   * @param {string} stringToConcat - The stringToConcat value.
   * @returns {string} - The keccak256 hash result.
   */
  private mapSlot(mapSlotRoot: string, stringToConcat: string): string {
    return ethers.utils.keccak256(
      ethers.utils.concat([
        this.fixedField(stringToConcat),
        this.fixedField(mapSlotRoot),
      ]),
    );
  }

  /**
   * Pads the byte representation of the input value to a specified length using the ethers library.
   *
   * @param {string} value - The input value to be converted to bytes and padded.
   * @param length - The desired length of the padded byte representation (default is 32).
   * @returns {string} - The padded byte representation of the input value.
   */
  private fixedField(value: string, length = 32): string {
    return ethers.utils.hexZeroPad(this.dynamicField(value), length);
  }

  /**
   * Converts the input value to bytes using the ethers library.
   *
   * @param {string} value - The input value to be converted to bytes.
   * @returns {Uint8Array} - The result of converting the input value to bytes.
   */
  private dynamicField(value: string): Uint8Array {
    return ethers.utils.arrayify(value);
  }

  private generateZeroPadValue(value: string | number) {
    return ethers.utils.hexZeroPad(ethers.utils.hexlify(value), 32);
  }
}
