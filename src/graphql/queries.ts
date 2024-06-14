import { graphql } from '../gql';

export const GET_POOLS_QUERY = graphql(`
  query GetPoolsQuery($where: Pool_filter!, $blockNumber: Int!) {
    pools(
      orderBy: createTime
      orderDirection: asc
      where: $where
      block: { number: $blockNumber }
    ) {
      shares {
        userAddress {
          id
        }
      }
      id
      address
      totalShares
      officialPoolWeight
    }
  }
`);

export const GET_TOTAL_ALLOCATION_PER_EPOCH = graphql(`
  query GetTotalAlocationPerEpochQuery($where: TokenMint_filter!) {
    tokenMints(where: $where) {
      amount
    }
  }
`);
