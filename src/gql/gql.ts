/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetPoolsQuery($where: Pool_filter!, $blockNumber: Int!) {\n    pools(\n      orderBy: createTime\n      orderDirection: asc\n      where: $where\n      block: { number: $blockNumber }\n    ) {\n      id\n      address\n      officialPoolWeight\n    }\n  }\n": types.GetPoolsQueryDocument,
    "\n  query GetPoolsSharesQuery(\n    $where: Pool_filter!\n    $blockNumber: Int!\n    $skip: Int!\n  ) {\n    pools(\n      orderBy: createTime\n      orderDirection: asc\n      where: $where\n      block: { number: $blockNumber }\n    ) {\n      shares(first: 1000, skip: $skip, orderBy: balance, orderDirection: desc) {\n        userAddress {\n          id\n        }\n      }\n      totalShares\n    }\n  }\n": types.GetPoolsSharesQueryDocument,
    "\n  query GetTotalAlocationPerEpochQuery($where: TokenMint_filter!) {\n    tokenMints(where: $where) {\n      amount\n      timestamp\n    }\n  }\n": types.GetTotalAlocationPerEpochQueryDocument,
    "\n  query GetJoinExitsPerAddressQuery($where: JoinExit_filter!) {\n    joinExits(where: $where, orderBy: timestamp, orderDirection: asc) {\n      valueUSD\n      type\n      timestamp\n      tx\n    }\n  }\n": types.GetJoinExitsPerAddressQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPoolsQuery($where: Pool_filter!, $blockNumber: Int!) {\n    pools(\n      orderBy: createTime\n      orderDirection: asc\n      where: $where\n      block: { number: $blockNumber }\n    ) {\n      id\n      address\n      officialPoolWeight\n    }\n  }\n"): (typeof documents)["\n  query GetPoolsQuery($where: Pool_filter!, $blockNumber: Int!) {\n    pools(\n      orderBy: createTime\n      orderDirection: asc\n      where: $where\n      block: { number: $blockNumber }\n    ) {\n      id\n      address\n      officialPoolWeight\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPoolsSharesQuery(\n    $where: Pool_filter!\n    $blockNumber: Int!\n    $skip: Int!\n  ) {\n    pools(\n      orderBy: createTime\n      orderDirection: asc\n      where: $where\n      block: { number: $blockNumber }\n    ) {\n      shares(first: 1000, skip: $skip, orderBy: balance, orderDirection: desc) {\n        userAddress {\n          id\n        }\n      }\n      totalShares\n    }\n  }\n"): (typeof documents)["\n  query GetPoolsSharesQuery(\n    $where: Pool_filter!\n    $blockNumber: Int!\n    $skip: Int!\n  ) {\n    pools(\n      orderBy: createTime\n      orderDirection: asc\n      where: $where\n      block: { number: $blockNumber }\n    ) {\n      shares(first: 1000, skip: $skip, orderBy: balance, orderDirection: desc) {\n        userAddress {\n          id\n        }\n      }\n      totalShares\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTotalAlocationPerEpochQuery($where: TokenMint_filter!) {\n    tokenMints(where: $where) {\n      amount\n      timestamp\n    }\n  }\n"): (typeof documents)["\n  query GetTotalAlocationPerEpochQuery($where: TokenMint_filter!) {\n    tokenMints(where: $where) {\n      amount\n      timestamp\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetJoinExitsPerAddressQuery($where: JoinExit_filter!) {\n    joinExits(where: $where, orderBy: timestamp, orderDirection: asc) {\n      valueUSD\n      type\n      timestamp\n      tx\n    }\n  }\n"): (typeof documents)["\n  query GetJoinExitsPerAddressQuery($where: JoinExit_filter!) {\n    joinExits(where: $where, orderBy: timestamp, orderDirection: asc) {\n      valueUSD\n      type\n      timestamp\n      tx\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;