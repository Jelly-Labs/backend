import { graphql } from '../gql';

export const GET_POOLS_QUERY = graphql(`
  query GetPoolsQuery($where: Pool_filter!, $blockNumber: Int!) {
    pools(
      orderBy: createTime
      orderDirection: asc
      where: $where
      block: { number: $blockNumber }
    ) {
      id
      address
      officialPoolWeight
    }
  }
`);

export const GET_POOLS_SHARES_QUERY = graphql(`
  query GetPoolsSharesQuery(
    $where: Pool_filter!
    $blockNumber: Int!
    $skip: Int!
  ) {
    pools(
      orderBy: createTime
      orderDirection: asc
      where: $where
      block: { number: $blockNumber }
    ) {
      shares(first: 1000, skip: $skip, orderBy: balance, orderDirection: desc) {
        userAddress {
          id
        }
      }
      totalShares
    }
  }
`);

export const GET_TOTAL_ALLOCATION_PER_EPOCH = graphql(`
  query GetTotalAlocationPerEpochQuery($where: TokenMint_filter!) {
    tokenMints(where: $where) {
      amount
      timestamp
    }
  }
`);
