import Decimal from 'decimal.js';
import { Pool } from '../../gql/graphql';

export interface AddFileResponse {
  data: {
    Name: string;
    Hash: string;
    Size: string;
  };
}

export type DatabaseConfig = {
  DB_NAME: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_SYNCHRONIZE: boolean;
};

export interface User {
  address: string;
  claimAmount: string;
}

export type IPFSConfig = {
  host: string;
  port: number;
  protocol: string;
  apiKey: string;
  apiSecret: string;
};

export type Amount = {
  amount: string;
  timestamp: number;
};

export type JoinExit = {
  valueUSD: string;
  type: string;
  timestamp: number;
  tx: string;
};
export interface Pools {
  pools: Pool[];
}

export interface TokenMints {
  tokenMints: Amount[];
}

export interface JoinExits {
  joinExits: JoinExit[];
}

export interface MapSlot {
  poolAddress: string;
  lpId: string;
  blockNumber?: number;
}

export interface ChestMapSlot {
  chestAddress: string;
  lpId: string;
  blockNumber?: number;
}

type NestedObjectValue = number | Decimal;

export type NestedObject = {
  [key: string]: NestedObjectValue | NestedObject;
};

export interface MerkleTreeWithValueTypes {
  format: string;
  tree: string[];
  values: Array<[string, number]>[];
  leafEncoding: string[];
}

export interface MerkleTreeDataWithValueTypes {
  merkleTree: {
    format: string;
    tree: string[];
    values: { value: string[]; treeIndex: number }[];
    leafEncoding: string[];
  };
  merkleTreeRoot: string;
  blockNumbers: number[];
  name: string;
  epoch: string;
}
