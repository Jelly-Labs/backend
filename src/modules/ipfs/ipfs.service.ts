import { Injectable, Logger } from '@nestjs/common';
import { StandardMerkleTree } from '@openzeppelin/merkle-tree';

import { AppConfigService } from '../../app_config/app_config.service';
import { MerkleTreeDataWithValueTypes } from '../../types/interface';

@Injectable()
export class IpfsService {
  private readonly logger = new Logger(IpfsService.name);

  constructor(private readonly appConfigService: AppConfigService) {}

  /**
   * Adds a file to IPFS based on the provided options.
   *
   * @param {MerkleTreeDataWithValueTypes} data - The json adding the file to IPFS.
   * @returns {Promise<string>} - A Promise resolving to the IPFS hash of the added file.
   */
  async upload(data: MerkleTreeDataWithValueTypes): Promise<string> {
    const res = await fetch(this.appConfigService.getPinataIpfsfUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.appConfigService.getPinataIpfsJwt()}`,
      },
      body: JSON.stringify(data),
    });
    const { IpfsHash } = await res.json();

    // pin to graph ipfs as well (to speed up sync with the graph node)
    const formdata = new FormData();
    formdata.append('', JSON.stringify(data));

    const requestOptions = {
      method: 'POST',
      body: formdata,
    };

    await fetch(this.appConfigService.getGraphIPFSEndpoint(), requestOptions)
      .then((response) => response.text())
      .then((result) =>
        this.logger.debug('Post to The Graph IPFS response: ' + result),
      )
      .catch((error) =>
        this.logger.error('Failed to post to The Graph IPFS. Error: ', error),
      );

    return IpfsHash;
  }

  /**
   * Fetches content from IPFS based on the provided IPFS hash.
   *
   * @param {string} ipfsHash - The IPFS hash to fetch content from.
   * @returns {Promise<StandardMerkleTree>} - A Promise resolving to the loaded StandardMerkleTree.
   */
  async get(ipfsHash: string): Promise<any> {
    const ipfsJSON = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
    const content = await ipfsJSON.json();

    return StandardMerkleTree.load(content.merkleTree);
  }

  /**
   * Fetches content from IPFS based on the provided IPFS hash.
   *
   * @param {string} ipfsHash - The IPFS hash to fetch content from.
   * @returns {Promise<number>} - A Promise resolving to the epoch value.
   */
  async getEpoch(ipfsHash: string): Promise<any> {
    const ipfsJSON = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
    const content = await ipfsJSON.json();

    return content.epoch;
  }

  /**
   * Fetches content from IPFS based on the provided IPFS hash.
   *
   * @param {string} ipfsHash - The IPFS hash to fetch content from.
   * @returns {Promise<Object>} - A Promise resolving to the loaded StandardMerkleTree.
   */
  async getAllContent(ipfsHash: string): Promise<any> {
    const ipfsJSON = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
    const content = await ipfsJSON.json();

    return content;
  }

  /**
   * Generates a Merkle root from a list of nodes and saves the tree structure to a JSON file.
   *
   * @param {string[][]} nodes - An array of nodes, where each node is an array of strings.
   * @param {number[]} blockNumbers - Weekly block number snapshot
   * @returns {{ content: MerkleTreeDataWithValueTypes; root: string }} - The file path where the Merkle tree structure is saved and the Merkle tree root.
   */
  generateIpfsContent = (
    nodes: string[][],
    blockNumbers: number[],
    name: string,
    epoch: string,
  ): { content: MerkleTreeDataWithValueTypes } => {
    const tree = StandardMerkleTree.of(nodes, ['address', 'uint256']);

    return {
      content: {
        merkleTree: tree.dump(),
        blockNumbers,
        name,
        epoch,
        merkleTreeRoot: tree.root,
      },
    };
  };
}
