/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type AmpUpdate = {
  __typename?: 'AmpUpdate';
  endAmp: Scalars['BigInt']['output'];
  endTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  poolId: Pool;
  scheduledTimestamp: Scalars['Int']['output'];
  startAmp: Scalars['BigInt']['output'];
  startTimestamp: Scalars['BigInt']['output'];
};

export type AmpUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AmpUpdate_Filter>>>;
  endAmp?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endAmp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endAmp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AmpUpdate_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startAmp?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startAmp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startAmp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AmpUpdate_OrderBy {
  EndAmp = 'endAmp',
  EndTimestamp = 'endTimestamp',
  Id = 'id',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  ScheduledTimestamp = 'scheduledTimestamp',
  StartAmp = 'startAmp',
  StartTimestamp = 'startTimestamp'
}

export type Balancer = {
  __typename?: 'Balancer';
  id: Scalars['ID']['output'];
  poolCount: Scalars['Int']['output'];
  pools?: Maybe<Array<Pool>>;
  protocolFeesCollector?: Maybe<Scalars['Bytes']['output']>;
  totalLiquidity: Scalars['BigDecimal']['output'];
  totalProtocolFee?: Maybe<Scalars['BigDecimal']['output']>;
  totalSwapCount: Scalars['BigInt']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
};


export type BalancerPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Pool_Filter>;
};

export type BalancerSnapshot = {
  __typename?: 'BalancerSnapshot';
  id: Scalars['ID']['output'];
  poolCount: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  totalLiquidity: Scalars['BigDecimal']['output'];
  totalProtocolFee?: Maybe<Scalars['BigDecimal']['output']>;
  totalSwapCount: Scalars['BigInt']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
  vault: Balancer;
};

export type BalancerSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BalancerSnapshot_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BalancerSnapshot_Filter>>>;
  poolCount?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_not?: InputMaybe<Scalars['Int']['input']>;
  poolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Balancer_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum BalancerSnapshot_OrderBy {
  Id = 'id',
  PoolCount = 'poolCount',
  Timestamp = 'timestamp',
  TotalLiquidity = 'totalLiquidity',
  TotalProtocolFee = 'totalProtocolFee',
  TotalSwapCount = 'totalSwapCount',
  TotalSwapFee = 'totalSwapFee',
  TotalSwapVolume = 'totalSwapVolume',
  Vault = 'vault',
  VaultId = 'vault__id',
  VaultPoolCount = 'vault__poolCount',
  VaultProtocolFeesCollector = 'vault__protocolFeesCollector',
  VaultTotalLiquidity = 'vault__totalLiquidity',
  VaultTotalProtocolFee = 'vault__totalProtocolFee',
  VaultTotalSwapCount = 'vault__totalSwapCount',
  VaultTotalSwapFee = 'vault__totalSwapFee',
  VaultTotalSwapVolume = 'vault__totalSwapVolume'
}

export type Balancer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Balancer_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Balancer_Filter>>>;
  poolCount?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  poolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  poolCount_not?: InputMaybe<Scalars['Int']['input']>;
  poolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pools_?: InputMaybe<Pool_Filter>;
  protocolFeesCollector?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_gt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_gte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  protocolFeesCollector_lt?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_lte?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_not?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  protocolFeesCollector_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Balancer_OrderBy {
  Id = 'id',
  PoolCount = 'poolCount',
  Pools = 'pools',
  ProtocolFeesCollector = 'protocolFeesCollector',
  TotalLiquidity = 'totalLiquidity',
  TotalProtocolFee = 'totalProtocolFee',
  TotalSwapCount = 'totalSwapCount',
  TotalSwapFee = 'totalSwapFee',
  TotalSwapVolume = 'totalSwapVolume'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Chest = {
  __typename?: 'Chest';
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  booster: Scalars['BigInt']['output'];
  freezedUntil: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  nerfParameter: Scalars['Int']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  unstaked: Scalars['BigInt']['output'];
  user: Scalars['Bytes']['output'];
  vestingDuration: Scalars['BigInt']['output'];
};

export type Chest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Chest_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  booster?: InputMaybe<Scalars['BigInt']['input']>;
  booster_gt?: InputMaybe<Scalars['BigInt']['input']>;
  booster_gte?: InputMaybe<Scalars['BigInt']['input']>;
  booster_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  booster_lt?: InputMaybe<Scalars['BigInt']['input']>;
  booster_lte?: InputMaybe<Scalars['BigInt']['input']>;
  booster_not?: InputMaybe<Scalars['BigInt']['input']>;
  booster_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  freezedUntil?: InputMaybe<Scalars['BigInt']['input']>;
  freezedUntil_gt?: InputMaybe<Scalars['BigInt']['input']>;
  freezedUntil_gte?: InputMaybe<Scalars['BigInt']['input']>;
  freezedUntil_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  freezedUntil_lt?: InputMaybe<Scalars['BigInt']['input']>;
  freezedUntil_lte?: InputMaybe<Scalars['BigInt']['input']>;
  freezedUntil_not?: InputMaybe<Scalars['BigInt']['input']>;
  freezedUntil_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  nerfParameter?: InputMaybe<Scalars['Int']['input']>;
  nerfParameter_gt?: InputMaybe<Scalars['Int']['input']>;
  nerfParameter_gte?: InputMaybe<Scalars['Int']['input']>;
  nerfParameter_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nerfParameter_lt?: InputMaybe<Scalars['Int']['input']>;
  nerfParameter_lte?: InputMaybe<Scalars['Int']['input']>;
  nerfParameter_not?: InputMaybe<Scalars['Int']['input']>;
  nerfParameter_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Chest_Filter>>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  unstaked?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  user?: InputMaybe<Scalars['Bytes']['input']>;
  user_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_gt?: InputMaybe<Scalars['Bytes']['input']>;
  user_gte?: InputMaybe<Scalars['Bytes']['input']>;
  user_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  user_lt?: InputMaybe<Scalars['Bytes']['input']>;
  user_lte?: InputMaybe<Scalars['Bytes']['input']>;
  user_not?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vestingDuration?: InputMaybe<Scalars['BigInt']['input']>;
  vestingDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  vestingDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  vestingDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  vestingDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  vestingDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  vestingDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  vestingDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Chest_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Booster = 'booster',
  FreezedUntil = 'freezedUntil',
  Id = 'id',
  NerfParameter = 'nerfParameter',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash',
  Unstaked = 'unstaked',
  User = 'user',
  VestingDuration = 'vestingDuration'
}

export type CircuitBreaker = {
  __typename?: 'CircuitBreaker';
  bptPrice: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  lowerBoundPercentage: Scalars['BigDecimal']['output'];
  pool: Pool;
  token: PoolToken;
  upperBoundPercentage: Scalars['BigDecimal']['output'];
};

export type CircuitBreaker_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CircuitBreaker_Filter>>>;
  bptPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  bptPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  bptPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lowerBoundPercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lowerBoundPercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerBoundPercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CircuitBreaker_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<PoolToken_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  upperBoundPercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  upperBoundPercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperBoundPercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum CircuitBreaker_OrderBy {
  BptPrice = 'bptPrice',
  Id = 'id',
  LowerBoundPercentage = 'lowerBoundPercentage',
  Pool = 'pool',
  PoolAddress = 'pool__address',
  PoolAlpha = 'pool__alpha',
  PoolAmp = 'pool__amp',
  PoolBaseToken = 'pool__baseToken',
  PoolBeta = 'pool__beta',
  PoolC = 'pool__c',
  PoolCreateTime = 'pool__createTime',
  PoolDSq = 'pool__dSq',
  PoolDelta = 'pool__delta',
  PoolEpsilon = 'pool__epsilon',
  PoolExpiryTime = 'pool__expiryTime',
  PoolFactory = 'pool__factory',
  PoolHoldersCount = 'pool__holdersCount',
  PoolId = 'pool__id',
  PoolIsInRecoveryMode = 'pool__isInRecoveryMode',
  PoolIsPaused = 'pool__isPaused',
  PoolJoinExitEnabled = 'pool__joinExitEnabled',
  PoolLambda = 'pool__lambda',
  PoolLastJoinExitAmp = 'pool__lastJoinExitAmp',
  PoolLastPostJoinExitInvariant = 'pool__lastPostJoinExitInvariant',
  PoolLowerTarget = 'pool__lowerTarget',
  PoolMainIndex = 'pool__mainIndex',
  PoolManagementAumFee = 'pool__managementAumFee',
  PoolManagementFee = 'pool__managementFee',
  PoolMustAllowlistLPs = 'pool__mustAllowlistLPs',
  PoolName = 'pool__name',
  PoolOfficialPool = 'pool__officialPool',
  PoolOfficialPoolWeight = 'pool__officialPoolWeight',
  PoolOracleEnabled = 'pool__oracleEnabled',
  PoolOwner = 'pool__owner',
  PoolPoolType = 'pool__poolType',
  PoolPoolTypeVersion = 'pool__poolTypeVersion',
  PoolPrincipalToken = 'pool__principalToken',
  PoolProtocolAumFeeCache = 'pool__protocolAumFeeCache',
  PoolProtocolId = 'pool__protocolId',
  PoolProtocolSwapFeeCache = 'pool__protocolSwapFeeCache',
  PoolProtocolYieldFeeCache = 'pool__protocolYieldFeeCache',
  PoolRoot3Alpha = 'pool__root3Alpha',
  PoolS = 'pool__s',
  PoolSqrtAlpha = 'pool__sqrtAlpha',
  PoolSqrtBeta = 'pool__sqrtBeta',
  PoolStrategyType = 'pool__strategyType',
  PoolSwapEnabled = 'pool__swapEnabled',
  PoolSwapFee = 'pool__swapFee',
  PoolSwapsCount = 'pool__swapsCount',
  PoolSymbol = 'pool__symbol',
  PoolTauAlphaX = 'pool__tauAlphaX',
  PoolTauAlphaY = 'pool__tauAlphaY',
  PoolTauBetaX = 'pool__tauBetaX',
  PoolTauBetaY = 'pool__tauBetaY',
  PoolTotalAumFeeCollectedInBpt = 'pool__totalAumFeeCollectedInBPT',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalProtocolFee = 'pool__totalProtocolFee',
  PoolTotalProtocolFeePaidInBpt = 'pool__totalProtocolFeePaidInBPT',
  PoolTotalShares = 'pool__totalShares',
  PoolTotalSwapFee = 'pool__totalSwapFee',
  PoolTotalSwapVolume = 'pool__totalSwapVolume',
  PoolTotalWeight = 'pool__totalWeight',
  PoolTx = 'pool__tx',
  PoolU = 'pool__u',
  PoolUnitSeconds = 'pool__unitSeconds',
  PoolUpperTarget = 'pool__upperTarget',
  PoolV = 'pool__v',
  PoolW = 'pool__w',
  PoolWrappedIndex = 'pool__wrappedIndex',
  PoolZ = 'pool__z',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenAssetManager = 'token__assetManager',
  TokenBalance = 'token__balance',
  TokenCashBalance = 'token__cashBalance',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIndex = 'token__index',
  TokenIsExemptFromYieldProtocolFee = 'token__isExemptFromYieldProtocolFee',
  TokenManagedBalance = 'token__managedBalance',
  TokenName = 'token__name',
  TokenOldPriceRate = 'token__oldPriceRate',
  TokenPaidProtocolFees = 'token__paidProtocolFees',
  TokenPriceRate = 'token__priceRate',
  TokenSymbol = 'token__symbol',
  TokenWeight = 'token__weight',
  UpperBoundPercentage = 'upperBoundPercentage'
}

export type GovernanceProposal = {
  __typename?: 'GovernanceProposal';
  calldatas: Array<Scalars['Bytes']['output']>;
  description: Scalars['String']['output'];
  executed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  proposer: Scalars['Bytes']['output'];
  targets: Array<Scalars['String']['output']>;
  values: Array<Scalars['BigInt']['output']>;
  voteAbstain: Scalars['BigInt']['output'];
  voteAgainst: Scalars['BigInt']['output'];
  voteEnd: Scalars['BigInt']['output'];
  voteFor: Scalars['BigInt']['output'];
  voteStart: Scalars['BigInt']['output'];
};

export type GovernanceProposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GovernanceProposal_Filter>>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  executed?: InputMaybe<Scalars['Boolean']['input']>;
  executed_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  executed_not?: InputMaybe<Scalars['Boolean']['input']>;
  executed_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceProposal_Filter>>>;
  proposer?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  proposer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  targets?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_not?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  values?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteAbstain?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteAbstain_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteAgainst?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteAgainst_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteEnd?: InputMaybe<Scalars['BigInt']['input']>;
  voteEnd_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteEnd_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteEnd_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteEnd_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteEnd_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteEnd_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteEnd_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteFor?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteFor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteStart?: InputMaybe<Scalars['BigInt']['input']>;
  voteStart_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteStart_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteStart_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteStart_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteStart_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteStart_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteStart_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum GovernanceProposal_OrderBy {
  Calldatas = 'calldatas',
  Description = 'description',
  Executed = 'executed',
  Id = 'id',
  Proposer = 'proposer',
  Targets = 'targets',
  Values = 'values',
  VoteAbstain = 'voteAbstain',
  VoteAgainst = 'voteAgainst',
  VoteEnd = 'voteEnd',
  VoteFor = 'voteFor',
  VoteStart = 'voteStart'
}

export type GovernanceVote = {
  __typename?: 'GovernanceVote';
  id: Scalars['ID']['output'];
  proposal: GovernanceProposal;
  support: Scalars['BigInt']['output'];
  voter: Scalars['Bytes']['output'];
  weight: Scalars['BigInt']['output'];
};

export type GovernanceVote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GovernanceVote_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GovernanceVote_Filter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<GovernanceProposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  support?: InputMaybe<Scalars['BigInt']['input']>;
  support_gt?: InputMaybe<Scalars['BigInt']['input']>;
  support_gte?: InputMaybe<Scalars['BigInt']['input']>;
  support_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  support_lt?: InputMaybe<Scalars['BigInt']['input']>;
  support_lte?: InputMaybe<Scalars['BigInt']['input']>;
  support_not?: InputMaybe<Scalars['BigInt']['input']>;
  support_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voter?: InputMaybe<Scalars['Bytes']['input']>;
  voter_contains?: InputMaybe<Scalars['Bytes']['input']>;
  voter_gt?: InputMaybe<Scalars['Bytes']['input']>;
  voter_gte?: InputMaybe<Scalars['Bytes']['input']>;
  voter_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  voter_lt?: InputMaybe<Scalars['Bytes']['input']>;
  voter_lte?: InputMaybe<Scalars['Bytes']['input']>;
  voter_not?: InputMaybe<Scalars['Bytes']['input']>;
  voter_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  voter_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  weight?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  weight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not?: InputMaybe<Scalars['BigInt']['input']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum GovernanceVote_OrderBy {
  Id = 'id',
  Proposal = 'proposal',
  ProposalDescription = 'proposal__description',
  ProposalExecuted = 'proposal__executed',
  ProposalId = 'proposal__id',
  ProposalProposer = 'proposal__proposer',
  ProposalVoteAbstain = 'proposal__voteAbstain',
  ProposalVoteAgainst = 'proposal__voteAgainst',
  ProposalVoteEnd = 'proposal__voteEnd',
  ProposalVoteFor = 'proposal__voteFor',
  ProposalVoteStart = 'proposal__voteStart',
  Support = 'support',
  Voter = 'voter',
  Weight = 'weight'
}

export type GradualWeightUpdate = {
  __typename?: 'GradualWeightUpdate';
  endTimestamp: Scalars['BigInt']['output'];
  endWeights: Array<Scalars['BigInt']['output']>;
  id: Scalars['ID']['output'];
  poolId: Pool;
  scheduledTimestamp: Scalars['Int']['output'];
  startTimestamp: Scalars['BigInt']['output'];
  startWeights: Array<Scalars['BigInt']['output']>;
};

export type GradualWeightUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_Filter>>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<GradualWeightUpdate_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum GradualWeightUpdate_OrderBy {
  EndTimestamp = 'endTimestamp',
  EndWeights = 'endWeights',
  Id = 'id',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  ScheduledTimestamp = 'scheduledTimestamp',
  StartTimestamp = 'startTimestamp',
  StartWeights = 'startWeights'
}

export enum InvestType {
  Exit = 'Exit',
  Join = 'Join'
}

export type JoinExit = {
  __typename?: 'JoinExit';
  amounts: Array<Scalars['BigDecimal']['output']>;
  id: Scalars['ID']['output'];
  pool: Pool;
  sender: Scalars['Bytes']['output'];
  timestamp: Scalars['Int']['output'];
  tx: Scalars['Bytes']['output'];
  type: InvestType;
  user: User;
  valueUSD?: Maybe<Scalars['BigDecimal']['output']>;
};

export type JoinExit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amounts?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<JoinExit_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<JoinExit_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tx?: InputMaybe<Scalars['Bytes']['input']>;
  tx_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  type?: InputMaybe<InvestType>;
  type_in?: InputMaybe<Array<InvestType>>;
  type_not?: InputMaybe<InvestType>;
  type_not_in?: InputMaybe<Array<InvestType>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valueUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  valueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum JoinExit_OrderBy {
  Amounts = 'amounts',
  Id = 'id',
  Pool = 'pool',
  PoolAddress = 'pool__address',
  PoolAlpha = 'pool__alpha',
  PoolAmp = 'pool__amp',
  PoolBaseToken = 'pool__baseToken',
  PoolBeta = 'pool__beta',
  PoolC = 'pool__c',
  PoolCreateTime = 'pool__createTime',
  PoolDSq = 'pool__dSq',
  PoolDelta = 'pool__delta',
  PoolEpsilon = 'pool__epsilon',
  PoolExpiryTime = 'pool__expiryTime',
  PoolFactory = 'pool__factory',
  PoolHoldersCount = 'pool__holdersCount',
  PoolId = 'pool__id',
  PoolIsInRecoveryMode = 'pool__isInRecoveryMode',
  PoolIsPaused = 'pool__isPaused',
  PoolJoinExitEnabled = 'pool__joinExitEnabled',
  PoolLambda = 'pool__lambda',
  PoolLastJoinExitAmp = 'pool__lastJoinExitAmp',
  PoolLastPostJoinExitInvariant = 'pool__lastPostJoinExitInvariant',
  PoolLowerTarget = 'pool__lowerTarget',
  PoolMainIndex = 'pool__mainIndex',
  PoolManagementAumFee = 'pool__managementAumFee',
  PoolManagementFee = 'pool__managementFee',
  PoolMustAllowlistLPs = 'pool__mustAllowlistLPs',
  PoolName = 'pool__name',
  PoolOfficialPool = 'pool__officialPool',
  PoolOfficialPoolWeight = 'pool__officialPoolWeight',
  PoolOracleEnabled = 'pool__oracleEnabled',
  PoolOwner = 'pool__owner',
  PoolPoolType = 'pool__poolType',
  PoolPoolTypeVersion = 'pool__poolTypeVersion',
  PoolPrincipalToken = 'pool__principalToken',
  PoolProtocolAumFeeCache = 'pool__protocolAumFeeCache',
  PoolProtocolId = 'pool__protocolId',
  PoolProtocolSwapFeeCache = 'pool__protocolSwapFeeCache',
  PoolProtocolYieldFeeCache = 'pool__protocolYieldFeeCache',
  PoolRoot3Alpha = 'pool__root3Alpha',
  PoolS = 'pool__s',
  PoolSqrtAlpha = 'pool__sqrtAlpha',
  PoolSqrtBeta = 'pool__sqrtBeta',
  PoolStrategyType = 'pool__strategyType',
  PoolSwapEnabled = 'pool__swapEnabled',
  PoolSwapFee = 'pool__swapFee',
  PoolSwapsCount = 'pool__swapsCount',
  PoolSymbol = 'pool__symbol',
  PoolTauAlphaX = 'pool__tauAlphaX',
  PoolTauAlphaY = 'pool__tauAlphaY',
  PoolTauBetaX = 'pool__tauBetaX',
  PoolTauBetaY = 'pool__tauBetaY',
  PoolTotalAumFeeCollectedInBpt = 'pool__totalAumFeeCollectedInBPT',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalProtocolFee = 'pool__totalProtocolFee',
  PoolTotalProtocolFeePaidInBpt = 'pool__totalProtocolFeePaidInBPT',
  PoolTotalShares = 'pool__totalShares',
  PoolTotalSwapFee = 'pool__totalSwapFee',
  PoolTotalSwapVolume = 'pool__totalSwapVolume',
  PoolTotalWeight = 'pool__totalWeight',
  PoolTx = 'pool__tx',
  PoolU = 'pool__u',
  PoolUnitSeconds = 'pool__unitSeconds',
  PoolUpperTarget = 'pool__upperTarget',
  PoolV = 'pool__v',
  PoolW = 'pool__w',
  PoolWrappedIndex = 'pool__wrappedIndex',
  PoolZ = 'pool__z',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Tx = 'tx',
  Type = 'type',
  User = 'user',
  UserId = 'user__id',
  ValueUsd = 'valueUSD'
}

export type LpMerkleTree = {
  __typename?: 'LPMerkleTree';
  id: Scalars['ID']['output'];
  merkleTree: Scalars['Bytes']['output'];
};

export type LpMerkleTree_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LpMerkleTree_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  merkleTree?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merkleTree_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_not?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LpMerkleTree_Filter>>>;
};

export enum LpMerkleTree_OrderBy {
  Id = 'id',
  MerkleTree = 'merkleTree'
}

export type LpRewardDistributionSnapshot = {
  __typename?: 'LPRewardDistributionSnapshot';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ipfsCid: Scalars['String']['output'];
  ipfsData?: Maybe<UserLpRewardDistributionMetaData>;
  ipfsMerkleTree?: Maybe<LpMerkleTree>;
};

export type LpRewardDistributionSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LpRewardDistributionSnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ipfsCid?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData?: InputMaybe<Scalars['String']['input']>;
  ipfsData_?: InputMaybe<UserLpRewardDistributionMetaData_Filter>;
  ipfsData_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsData_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsData_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsData_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsData_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsData_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsData_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_?: InputMaybe<LpMerkleTree_Filter>;
  ipfsMerkleTree_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsMerkleTree_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsMerkleTree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<LpRewardDistributionSnapshot_Filter>>>;
};

export enum LpRewardDistributionSnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  IpfsCid = 'ipfsCid',
  IpfsData = 'ipfsData',
  IpfsDataAddress = 'ipfsData__address',
  IpfsDataEpoch = 'ipfsData__epoch',
  IpfsDataId = 'ipfsData__id',
  IpfsDataIpfsCid = 'ipfsData__ipfsCid',
  IpfsDataValue = 'ipfsData__value',
  IpfsMerkleTree = 'ipfsMerkleTree',
  IpfsMerkleTreeId = 'ipfsMerkleTree__id',
  IpfsMerkleTreeMerkleTree = 'ipfsMerkleTree__merkleTree'
}

export type LatestPrice = {
  __typename?: 'LatestPrice';
  asset: Scalars['Bytes']['output'];
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  poolId: Pool;
  price: Scalars['BigDecimal']['output'];
  pricingAsset: Scalars['Bytes']['output'];
};

export type LatestPrice_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LatestPrice_Filter>>>;
  asset?: InputMaybe<Scalars['Bytes']['input']>;
  asset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LatestPrice_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pricingAsset?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum LatestPrice_OrderBy {
  Asset = 'asset',
  Block = 'block',
  Id = 'id',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  Price = 'price',
  PricingAsset = 'pricingAsset'
}

export type ManagementOperation = {
  __typename?: 'ManagementOperation';
  cashDelta: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  managedDelta: Scalars['BigDecimal']['output'];
  poolTokenId: PoolToken;
  timestamp: Scalars['Int']['output'];
  type: OperationType;
};

export type ManagementOperation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ManagementOperation_Filter>>>;
  cashDelta?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cashDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managedDelta?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managedDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ManagementOperation_Filter>>>;
  poolTokenId?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_?: InputMaybe<PoolToken_Filter>;
  poolTokenId_contains?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_gt?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_gte?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolTokenId_lt?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_lte?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolTokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolTokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<OperationType>;
  type_in?: InputMaybe<Array<OperationType>>;
  type_not?: InputMaybe<OperationType>;
  type_not_in?: InputMaybe<Array<OperationType>>;
};

export enum ManagementOperation_OrderBy {
  CashDelta = 'cashDelta',
  Id = 'id',
  ManagedDelta = 'managedDelta',
  PoolTokenId = 'poolTokenId',
  PoolTokenIdAddress = 'poolTokenId__address',
  PoolTokenIdAssetManager = 'poolTokenId__assetManager',
  PoolTokenIdBalance = 'poolTokenId__balance',
  PoolTokenIdCashBalance = 'poolTokenId__cashBalance',
  PoolTokenIdDecimals = 'poolTokenId__decimals',
  PoolTokenIdId = 'poolTokenId__id',
  PoolTokenIdIndex = 'poolTokenId__index',
  PoolTokenIdIsExemptFromYieldProtocolFee = 'poolTokenId__isExemptFromYieldProtocolFee',
  PoolTokenIdManagedBalance = 'poolTokenId__managedBalance',
  PoolTokenIdName = 'poolTokenId__name',
  PoolTokenIdOldPriceRate = 'poolTokenId__oldPriceRate',
  PoolTokenIdPaidProtocolFees = 'poolTokenId__paidProtocolFees',
  PoolTokenIdPriceRate = 'poolTokenId__priceRate',
  PoolTokenIdSymbol = 'poolTokenId__symbol',
  PoolTokenIdWeight = 'poolTokenId__weight',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type Minter = {
  __typename?: 'Minter';
  benfactors: Array<Scalars['Bytes']['output']>;
  id: Scalars['ID']['output'];
  lastMintedAmount: Scalars['BigInt']['output'];
  lastMintedTimestamp: Scalars['BigInt']['output'];
  mintingPeriod?: Maybe<Scalars['BigInt']['output']>;
  mints: Array<TokenMint>;
};


export type MinterMintsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenMint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenMint_Filter>;
};

export type Minter_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Minter_Filter>>>;
  benfactors?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  benfactors_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  benfactors_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  benfactors_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  benfactors_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  benfactors_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastMintedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastMintedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastMintedTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastMintedTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastMintedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintingPeriod?: InputMaybe<Scalars['BigInt']['input']>;
  mintingPeriod_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mintingPeriod_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mintingPeriod_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintingPeriod_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mintingPeriod_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mintingPeriod_not?: InputMaybe<Scalars['BigInt']['input']>;
  mintingPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mints_?: InputMaybe<TokenMint_Filter>;
  or?: InputMaybe<Array<InputMaybe<Minter_Filter>>>;
};

export enum Minter_OrderBy {
  Benfactors = 'benfactors',
  Id = 'id',
  LastMintedAmount = 'lastMintedAmount',
  LastMintedTimestamp = 'lastMintedTimestamp',
  MintingPeriod = 'mintingPeriod',
  Mints = 'mints'
}

export enum OperationType {
  Deposit = 'Deposit',
  Update = 'Update',
  Withdraw = 'Withdraw'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Pool = {
  __typename?: 'Pool';
  address: Scalars['Bytes']['output'];
  alpha?: Maybe<Scalars['BigDecimal']['output']>;
  amp?: Maybe<Scalars['BigInt']['output']>;
  baseToken?: Maybe<Scalars['Bytes']['output']>;
  beta?: Maybe<Scalars['BigDecimal']['output']>;
  c?: Maybe<Scalars['BigDecimal']['output']>;
  circuitBreakers?: Maybe<Array<CircuitBreaker>>;
  createTime: Scalars['Int']['output'];
  dSq?: Maybe<Scalars['BigDecimal']['output']>;
  delta?: Maybe<Scalars['BigDecimal']['output']>;
  epsilon?: Maybe<Scalars['BigDecimal']['output']>;
  expiryTime?: Maybe<Scalars['BigInt']['output']>;
  factory?: Maybe<Scalars['Bytes']['output']>;
  historicalValues?: Maybe<Array<PoolHistoricalLiquidity>>;
  holdersCount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  isInRecoveryMode?: Maybe<Scalars['Boolean']['output']>;
  isPaused?: Maybe<Scalars['Boolean']['output']>;
  joinExitEnabled?: Maybe<Scalars['Boolean']['output']>;
  lambda?: Maybe<Scalars['BigDecimal']['output']>;
  lastJoinExitAmp?: Maybe<Scalars['BigInt']['output']>;
  lastPostJoinExitInvariant?: Maybe<Scalars['BigDecimal']['output']>;
  lowerTarget?: Maybe<Scalars['BigDecimal']['output']>;
  mainIndex?: Maybe<Scalars['Int']['output']>;
  managementAumFee?: Maybe<Scalars['BigDecimal']['output']>;
  managementFee?: Maybe<Scalars['BigDecimal']['output']>;
  mustAllowlistLPs?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  officialPool: Scalars['Boolean']['output'];
  officialPoolWeight?: Maybe<Scalars['BigInt']['output']>;
  oracleEnabled: Scalars['Boolean']['output'];
  owner?: Maybe<Scalars['Bytes']['output']>;
  poolType?: Maybe<Scalars['String']['output']>;
  poolTypeVersion?: Maybe<Scalars['Int']['output']>;
  priceRateProviders?: Maybe<Array<PriceRateProvider>>;
  principalToken?: Maybe<Scalars['Bytes']['output']>;
  protocolAumFeeCache?: Maybe<Scalars['BigDecimal']['output']>;
  protocolId?: Maybe<Scalars['Int']['output']>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolSwapFeeCache?: Maybe<Scalars['BigDecimal']['output']>;
  protocolYieldFeeCache?: Maybe<Scalars['BigDecimal']['output']>;
  root3Alpha?: Maybe<Scalars['BigDecimal']['output']>;
  s?: Maybe<Scalars['BigDecimal']['output']>;
  shares?: Maybe<Array<PoolShare>>;
  snapshots?: Maybe<Array<PoolSnapshot>>;
  sqrtAlpha?: Maybe<Scalars['BigDecimal']['output']>;
  sqrtBeta?: Maybe<Scalars['BigDecimal']['output']>;
  strategyType: Scalars['Int']['output'];
  swapEnabled: Scalars['Boolean']['output'];
  swapFee: Scalars['BigDecimal']['output'];
  swaps?: Maybe<Array<Swap>>;
  swapsCount: Scalars['BigInt']['output'];
  symbol?: Maybe<Scalars['String']['output']>;
  tauAlphaX?: Maybe<Scalars['BigDecimal']['output']>;
  tauAlphaY?: Maybe<Scalars['BigDecimal']['output']>;
  tauBetaX?: Maybe<Scalars['BigDecimal']['output']>;
  tauBetaY?: Maybe<Scalars['BigDecimal']['output']>;
  tokens?: Maybe<Array<PoolToken>>;
  tokensList: Array<Scalars['Bytes']['output']>;
  totalAumFeeCollectedInBPT?: Maybe<Scalars['BigDecimal']['output']>;
  totalLiquidity: Scalars['BigDecimal']['output'];
  totalProtocolFee?: Maybe<Scalars['BigDecimal']['output']>;
  totalProtocolFeePaidInBPT?: Maybe<Scalars['BigDecimal']['output']>;
  totalShares: Scalars['BigDecimal']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
  totalWeight?: Maybe<Scalars['BigDecimal']['output']>;
  tx?: Maybe<Scalars['Bytes']['output']>;
  u?: Maybe<Scalars['BigDecimal']['output']>;
  unitSeconds?: Maybe<Scalars['BigInt']['output']>;
  upperTarget?: Maybe<Scalars['BigDecimal']['output']>;
  v?: Maybe<Scalars['BigDecimal']['output']>;
  vaultID: Balancer;
  w?: Maybe<Scalars['BigDecimal']['output']>;
  weightUpdates?: Maybe<Array<GradualWeightUpdate>>;
  wrappedIndex?: Maybe<Scalars['Int']['output']>;
  z?: Maybe<Scalars['BigDecimal']['output']>;
};


export type PoolCircuitBreakersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CircuitBreaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CircuitBreaker_Filter>;
};


export type PoolHistoricalValuesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
};


export type PoolPriceRateProvidersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriceRateProvider_Filter>;
};


export type PoolSharesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolShare_Filter>;
};


export type PoolSnapshotsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolSnapshot_Filter>;
};


export type PoolSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Swap_Filter>;
};


export type PoolTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolToken_Filter>;
};


export type PoolWeightUpdatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
};

export type PoolContract = {
  __typename?: 'PoolContract';
  id: Scalars['ID']['output'];
  pool: Pool;
};

export type PoolContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolContract_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolContract_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PoolContract_OrderBy {
  Id = 'id',
  Pool = 'pool',
  PoolAddress = 'pool__address',
  PoolAlpha = 'pool__alpha',
  PoolAmp = 'pool__amp',
  PoolBaseToken = 'pool__baseToken',
  PoolBeta = 'pool__beta',
  PoolC = 'pool__c',
  PoolCreateTime = 'pool__createTime',
  PoolDSq = 'pool__dSq',
  PoolDelta = 'pool__delta',
  PoolEpsilon = 'pool__epsilon',
  PoolExpiryTime = 'pool__expiryTime',
  PoolFactory = 'pool__factory',
  PoolHoldersCount = 'pool__holdersCount',
  PoolId = 'pool__id',
  PoolIsInRecoveryMode = 'pool__isInRecoveryMode',
  PoolIsPaused = 'pool__isPaused',
  PoolJoinExitEnabled = 'pool__joinExitEnabled',
  PoolLambda = 'pool__lambda',
  PoolLastJoinExitAmp = 'pool__lastJoinExitAmp',
  PoolLastPostJoinExitInvariant = 'pool__lastPostJoinExitInvariant',
  PoolLowerTarget = 'pool__lowerTarget',
  PoolMainIndex = 'pool__mainIndex',
  PoolManagementAumFee = 'pool__managementAumFee',
  PoolManagementFee = 'pool__managementFee',
  PoolMustAllowlistLPs = 'pool__mustAllowlistLPs',
  PoolName = 'pool__name',
  PoolOfficialPool = 'pool__officialPool',
  PoolOfficialPoolWeight = 'pool__officialPoolWeight',
  PoolOracleEnabled = 'pool__oracleEnabled',
  PoolOwner = 'pool__owner',
  PoolPoolType = 'pool__poolType',
  PoolPoolTypeVersion = 'pool__poolTypeVersion',
  PoolPrincipalToken = 'pool__principalToken',
  PoolProtocolAumFeeCache = 'pool__protocolAumFeeCache',
  PoolProtocolId = 'pool__protocolId',
  PoolProtocolSwapFeeCache = 'pool__protocolSwapFeeCache',
  PoolProtocolYieldFeeCache = 'pool__protocolYieldFeeCache',
  PoolRoot3Alpha = 'pool__root3Alpha',
  PoolS = 'pool__s',
  PoolSqrtAlpha = 'pool__sqrtAlpha',
  PoolSqrtBeta = 'pool__sqrtBeta',
  PoolStrategyType = 'pool__strategyType',
  PoolSwapEnabled = 'pool__swapEnabled',
  PoolSwapFee = 'pool__swapFee',
  PoolSwapsCount = 'pool__swapsCount',
  PoolSymbol = 'pool__symbol',
  PoolTauAlphaX = 'pool__tauAlphaX',
  PoolTauAlphaY = 'pool__tauAlphaY',
  PoolTauBetaX = 'pool__tauBetaX',
  PoolTauBetaY = 'pool__tauBetaY',
  PoolTotalAumFeeCollectedInBpt = 'pool__totalAumFeeCollectedInBPT',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalProtocolFee = 'pool__totalProtocolFee',
  PoolTotalProtocolFeePaidInBpt = 'pool__totalProtocolFeePaidInBPT',
  PoolTotalShares = 'pool__totalShares',
  PoolTotalSwapFee = 'pool__totalSwapFee',
  PoolTotalSwapVolume = 'pool__totalSwapVolume',
  PoolTotalWeight = 'pool__totalWeight',
  PoolTx = 'pool__tx',
  PoolU = 'pool__u',
  PoolUnitSeconds = 'pool__unitSeconds',
  PoolUpperTarget = 'pool__upperTarget',
  PoolV = 'pool__v',
  PoolW = 'pool__w',
  PoolWrappedIndex = 'pool__wrappedIndex',
  PoolZ = 'pool__z'
}

export type PoolHistoricalLiquidity = {
  __typename?: 'PoolHistoricalLiquidity';
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  poolId: Pool;
  poolLiquidity: Scalars['BigDecimal']['output'];
  poolShareValue: Scalars['BigDecimal']['output'];
  poolTotalShares: Scalars['BigDecimal']['output'];
  pricingAsset: Scalars['Bytes']['output'];
};

export type PoolHistoricalLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolHistoricalLiquidity_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolShareValue?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolShareValue_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolShareValue_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolTotalShares?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolTotalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  poolTotalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pricingAsset?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum PoolHistoricalLiquidity_OrderBy {
  Block = 'block',
  Id = 'id',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  PoolLiquidity = 'poolLiquidity',
  PoolShareValue = 'poolShareValue',
  PoolTotalShares = 'poolTotalShares',
  PricingAsset = 'pricingAsset'
}

export type PoolPartyBurner = {
  __typename?: 'PoolPartyBurner';
  beneficiary: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  jellyAmount: Scalars['BigInt']['output'];
  seiAmount: Scalars['BigInt']['output'];
};

export type PoolPartyBurner_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolPartyBurner_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  jellyAmount?: InputMaybe<Scalars['BigInt']['input']>;
  jellyAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  jellyAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  jellyAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  jellyAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  jellyAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  jellyAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  jellyAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolPartyBurner_Filter>>>;
  seiAmount?: InputMaybe<Scalars['BigInt']['input']>;
  seiAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  seiAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  seiAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  seiAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  seiAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  seiAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  seiAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum PoolPartyBurner_OrderBy {
  Beneficiary = 'beneficiary',
  Id = 'id',
  JellyAmount = 'jellyAmount',
  SeiAmount = 'seiAmount'
}

export type PoolShare = {
  __typename?: 'PoolShare';
  balance: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  poolId: Pool;
  userAddress: User;
};

export type PoolShare_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolShare_Filter>>>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolShare_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress?: InputMaybe<Scalars['String']['input']>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_not?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PoolShare_OrderBy {
  Balance = 'balance',
  Id = 'id',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  UserAddress = 'userAddress',
  UserAddressId = 'userAddress__id'
}

export type PoolSnapshot = {
  __typename?: 'PoolSnapshot';
  amounts: Array<Scalars['BigDecimal']['output']>;
  holdersCount: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigDecimal']['output'];
  pool: Pool;
  protocolFee?: Maybe<Scalars['BigDecimal']['output']>;
  swapFees: Scalars['BigDecimal']['output'];
  swapVolume: Scalars['BigDecimal']['output'];
  swapsCount: Scalars['BigInt']['output'];
  timestamp: Scalars['Int']['output'];
  totalShares: Scalars['BigDecimal']['output'];
};

export type PoolSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amounts?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
  holdersCount?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdersCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolSnapshot_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapFees?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapFees_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFees_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapsCount?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalShares?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolSnapshot_OrderBy {
  Amounts = 'amounts',
  HoldersCount = 'holdersCount',
  Id = 'id',
  Liquidity = 'liquidity',
  Pool = 'pool',
  PoolAddress = 'pool__address',
  PoolAlpha = 'pool__alpha',
  PoolAmp = 'pool__amp',
  PoolBaseToken = 'pool__baseToken',
  PoolBeta = 'pool__beta',
  PoolC = 'pool__c',
  PoolCreateTime = 'pool__createTime',
  PoolDSq = 'pool__dSq',
  PoolDelta = 'pool__delta',
  PoolEpsilon = 'pool__epsilon',
  PoolExpiryTime = 'pool__expiryTime',
  PoolFactory = 'pool__factory',
  PoolHoldersCount = 'pool__holdersCount',
  PoolId = 'pool__id',
  PoolIsInRecoveryMode = 'pool__isInRecoveryMode',
  PoolIsPaused = 'pool__isPaused',
  PoolJoinExitEnabled = 'pool__joinExitEnabled',
  PoolLambda = 'pool__lambda',
  PoolLastJoinExitAmp = 'pool__lastJoinExitAmp',
  PoolLastPostJoinExitInvariant = 'pool__lastPostJoinExitInvariant',
  PoolLowerTarget = 'pool__lowerTarget',
  PoolMainIndex = 'pool__mainIndex',
  PoolManagementAumFee = 'pool__managementAumFee',
  PoolManagementFee = 'pool__managementFee',
  PoolMustAllowlistLPs = 'pool__mustAllowlistLPs',
  PoolName = 'pool__name',
  PoolOfficialPool = 'pool__officialPool',
  PoolOfficialPoolWeight = 'pool__officialPoolWeight',
  PoolOracleEnabled = 'pool__oracleEnabled',
  PoolOwner = 'pool__owner',
  PoolPoolType = 'pool__poolType',
  PoolPoolTypeVersion = 'pool__poolTypeVersion',
  PoolPrincipalToken = 'pool__principalToken',
  PoolProtocolAumFeeCache = 'pool__protocolAumFeeCache',
  PoolProtocolId = 'pool__protocolId',
  PoolProtocolSwapFeeCache = 'pool__protocolSwapFeeCache',
  PoolProtocolYieldFeeCache = 'pool__protocolYieldFeeCache',
  PoolRoot3Alpha = 'pool__root3Alpha',
  PoolS = 'pool__s',
  PoolSqrtAlpha = 'pool__sqrtAlpha',
  PoolSqrtBeta = 'pool__sqrtBeta',
  PoolStrategyType = 'pool__strategyType',
  PoolSwapEnabled = 'pool__swapEnabled',
  PoolSwapFee = 'pool__swapFee',
  PoolSwapsCount = 'pool__swapsCount',
  PoolSymbol = 'pool__symbol',
  PoolTauAlphaX = 'pool__tauAlphaX',
  PoolTauAlphaY = 'pool__tauAlphaY',
  PoolTauBetaX = 'pool__tauBetaX',
  PoolTauBetaY = 'pool__tauBetaY',
  PoolTotalAumFeeCollectedInBpt = 'pool__totalAumFeeCollectedInBPT',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalProtocolFee = 'pool__totalProtocolFee',
  PoolTotalProtocolFeePaidInBpt = 'pool__totalProtocolFeePaidInBPT',
  PoolTotalShares = 'pool__totalShares',
  PoolTotalSwapFee = 'pool__totalSwapFee',
  PoolTotalSwapVolume = 'pool__totalSwapVolume',
  PoolTotalWeight = 'pool__totalWeight',
  PoolTx = 'pool__tx',
  PoolU = 'pool__u',
  PoolUnitSeconds = 'pool__unitSeconds',
  PoolUpperTarget = 'pool__upperTarget',
  PoolV = 'pool__v',
  PoolW = 'pool__w',
  PoolWrappedIndex = 'pool__wrappedIndex',
  PoolZ = 'pool__z',
  ProtocolFee = 'protocolFee',
  SwapFees = 'swapFees',
  SwapVolume = 'swapVolume',
  SwapsCount = 'swapsCount',
  Timestamp = 'timestamp',
  TotalShares = 'totalShares'
}

export type PoolToken = {
  __typename?: 'PoolToken';
  address: Scalars['String']['output'];
  assetManager: Scalars['Bytes']['output'];
  balance: Scalars['BigDecimal']['output'];
  cashBalance: Scalars['BigDecimal']['output'];
  circuitBreaker?: Maybe<CircuitBreaker>;
  decimals: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  isExemptFromYieldProtocolFee?: Maybe<Scalars['Boolean']['output']>;
  managedBalance: Scalars['BigDecimal']['output'];
  managements?: Maybe<Array<ManagementOperation>>;
  name: Scalars['String']['output'];
  oldPriceRate?: Maybe<Scalars['BigDecimal']['output']>;
  paidProtocolFees?: Maybe<Scalars['BigDecimal']['output']>;
  poolId?: Maybe<Pool>;
  priceRate: Scalars['BigDecimal']['output'];
  symbol: Scalars['String']['output'];
  token: Token;
  weight?: Maybe<Scalars['BigDecimal']['output']>;
};


export type PoolTokenManagementsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ManagementOperation_Filter>;
};

export type PoolToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<PoolToken_Filter>>>;
  assetManager?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetManager_lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_not?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetManager_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cashBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  cashBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  cashBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  circuitBreaker?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_?: InputMaybe<CircuitBreaker_Filter>;
  circuitBreaker_contains?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_ends_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_gt?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_gte?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  circuitBreaker_lt?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_lte?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_contains?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  circuitBreaker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_starts_with?: InputMaybe<Scalars['String']['input']>;
  circuitBreaker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['Int']['input']>;
  index_gt?: InputMaybe<Scalars['Int']['input']>;
  index_gte?: InputMaybe<Scalars['Int']['input']>;
  index_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  index_lt?: InputMaybe<Scalars['Int']['input']>;
  index_lte?: InputMaybe<Scalars['Int']['input']>;
  index_not?: InputMaybe<Scalars['Int']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isExemptFromYieldProtocolFee?: InputMaybe<Scalars['Boolean']['input']>;
  isExemptFromYieldProtocolFee_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isExemptFromYieldProtocolFee_not?: InputMaybe<Scalars['Boolean']['input']>;
  isExemptFromYieldProtocolFee_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  managedBalance?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managedBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managedBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managements_?: InputMaybe<ManagementOperation_Filter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  oldPriceRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  oldPriceRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  oldPriceRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolToken_Filter>>>;
  paidProtocolFees?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  paidProtocolFees_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  paidProtocolFees_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  priceRate?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceRate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weight_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolToken_OrderBy {
  Address = 'address',
  AssetManager = 'assetManager',
  Balance = 'balance',
  CashBalance = 'cashBalance',
  CircuitBreaker = 'circuitBreaker',
  CircuitBreakerBptPrice = 'circuitBreaker__bptPrice',
  CircuitBreakerId = 'circuitBreaker__id',
  CircuitBreakerLowerBoundPercentage = 'circuitBreaker__lowerBoundPercentage',
  CircuitBreakerUpperBoundPercentage = 'circuitBreaker__upperBoundPercentage',
  Decimals = 'decimals',
  Id = 'id',
  Index = 'index',
  IsExemptFromYieldProtocolFee = 'isExemptFromYieldProtocolFee',
  ManagedBalance = 'managedBalance',
  Managements = 'managements',
  Name = 'name',
  OldPriceRate = 'oldPriceRate',
  PaidProtocolFees = 'paidProtocolFees',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  PriceRate = 'priceRate',
  Symbol = 'symbol',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenDecimals = 'token__decimals',
  TokenFxOracleDecimals = 'token__fxOracleDecimals',
  TokenId = 'token__id',
  TokenLatestFxPrice = 'token__latestFXPrice',
  TokenLatestUsdPrice = 'token__latestUSDPrice',
  TokenLatestUsdPriceTimestamp = 'token__latestUSDPriceTimestamp',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalBalanceNotional = 'token__totalBalanceNotional',
  TokenTotalBalanceUsd = 'token__totalBalanceUSD',
  TokenTotalSwapCount = 'token__totalSwapCount',
  TokenTotalVolumeNotional = 'token__totalVolumeNotional',
  TokenTotalVolumeUsd = 'token__totalVolumeUSD',
  Weight = 'weight'
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  alpha?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  alpha_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  alpha_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amp?: InputMaybe<Scalars['BigInt']['input']>;
  amp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amp_not?: InputMaybe<Scalars['BigInt']['input']>;
  amp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  baseToken?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  baseToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beta?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  beta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  beta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  c?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  c_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  c_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  circuitBreakers_?: InputMaybe<CircuitBreaker_Filter>;
  createTime?: InputMaybe<Scalars['Int']['input']>;
  createTime_gt?: InputMaybe<Scalars['Int']['input']>;
  createTime_gte?: InputMaybe<Scalars['Int']['input']>;
  createTime_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  createTime_lt?: InputMaybe<Scalars['Int']['input']>;
  createTime_lte?: InputMaybe<Scalars['Int']['input']>;
  createTime_not?: InputMaybe<Scalars['Int']['input']>;
  createTime_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dSq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dSq_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  dSq_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delta?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  delta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  delta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  epsilon?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  epsilon_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  epsilon_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  expiryTime?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  expiryTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  expiryTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  factory?: InputMaybe<Scalars['Bytes']['input']>;
  factory_contains?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_gte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  factory_lt?: InputMaybe<Scalars['Bytes']['input']>;
  factory_lte?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  factory_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  historicalValues_?: InputMaybe<PoolHistoricalLiquidity_Filter>;
  holdersCount?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdersCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdersCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isInRecoveryMode?: InputMaybe<Scalars['Boolean']['input']>;
  isInRecoveryMode_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isInRecoveryMode_not?: InputMaybe<Scalars['Boolean']['input']>;
  isInRecoveryMode_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
  isPaused_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isPaused_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPaused_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  joinExitEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  joinExitEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  joinExitEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  joinExitEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  lambda?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lambda_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lambda_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastJoinExitAmp?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastJoinExitAmp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastJoinExitAmp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPostJoinExitInvariant?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lastPostJoinExitInvariant_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lastPostJoinExitInvariant_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lowerTarget?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lowerTarget_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  lowerTarget_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  mainIndex?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  mainIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_not?: InputMaybe<Scalars['Int']['input']>;
  mainIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  managementAumFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managementAumFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementAumFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managementFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  managementFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  managementFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  mustAllowlistLPs?: InputMaybe<Scalars['Boolean']['input']>;
  mustAllowlistLPs_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  mustAllowlistLPs_not?: InputMaybe<Scalars['Boolean']['input']>;
  mustAllowlistLPs_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  officialPool?: InputMaybe<Scalars['Boolean']['input']>;
  officialPoolWeight?: InputMaybe<Scalars['BigInt']['input']>;
  officialPoolWeight_gt?: InputMaybe<Scalars['BigInt']['input']>;
  officialPoolWeight_gte?: InputMaybe<Scalars['BigInt']['input']>;
  officialPoolWeight_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  officialPoolWeight_lt?: InputMaybe<Scalars['BigInt']['input']>;
  officialPoolWeight_lte?: InputMaybe<Scalars['BigInt']['input']>;
  officialPoolWeight_not?: InputMaybe<Scalars['BigInt']['input']>;
  officialPoolWeight_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  officialPool_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  officialPool_not?: InputMaybe<Scalars['Boolean']['input']>;
  officialPool_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  oracleEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  oracleEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  oracleEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  oracleEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  poolType?: InputMaybe<Scalars['String']['input']>;
  poolTypeVersion?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_gt?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_gte?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolTypeVersion_lt?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_lte?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_not?: InputMaybe<Scalars['Int']['input']>;
  poolTypeVersion_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  poolType_contains?: InputMaybe<Scalars['String']['input']>;
  poolType_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolType_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_gt?: InputMaybe<Scalars['String']['input']>;
  poolType_gte?: InputMaybe<Scalars['String']['input']>;
  poolType_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolType_lt?: InputMaybe<Scalars['String']['input']>;
  poolType_lte?: InputMaybe<Scalars['String']['input']>;
  poolType_not?: InputMaybe<Scalars['String']['input']>;
  poolType_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolType_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolType_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolType_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolType_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolType_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  priceRateProviders_?: InputMaybe<PriceRateProvider_Filter>;
  principalToken?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  principalToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  principalToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  protocolAumFeeCache?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolAumFeeCache_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolAumFeeCache_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolId?: InputMaybe<Scalars['Int']['input']>;
  protocolIdData?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_?: InputMaybe<ProtocolIdData_Filter>;
  protocolIdData_contains?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_gt?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_gte?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocolIdData_lt?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_lte?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocolIdData_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocolIdData_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolId_gt?: InputMaybe<Scalars['Int']['input']>;
  protocolId_gte?: InputMaybe<Scalars['Int']['input']>;
  protocolId_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolId_lt?: InputMaybe<Scalars['Int']['input']>;
  protocolId_lte?: InputMaybe<Scalars['Int']['input']>;
  protocolId_not?: InputMaybe<Scalars['Int']['input']>;
  protocolId_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocolSwapFeeCache?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolSwapFeeCache_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolSwapFeeCache_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolYieldFeeCache?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolYieldFeeCache_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolYieldFeeCache_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  root3Alpha?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  root3Alpha_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  root3Alpha_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  s?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  s_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  s_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  shares_?: InputMaybe<PoolShare_Filter>;
  snapshots_?: InputMaybe<PoolSnapshot_Filter>;
  sqrtAlpha?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtAlpha_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtAlpha_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtBeta?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtBeta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  sqrtBeta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  strategyType?: InputMaybe<Scalars['Int']['input']>;
  strategyType_gt?: InputMaybe<Scalars['Int']['input']>;
  strategyType_gte?: InputMaybe<Scalars['Int']['input']>;
  strategyType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  strategyType_lt?: InputMaybe<Scalars['Int']['input']>;
  strategyType_lte?: InputMaybe<Scalars['Int']['input']>;
  strategyType_not?: InputMaybe<Scalars['Int']['input']>;
  strategyType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  swapEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapEnabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  swapEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  swapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  swapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  swapsCount?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapsCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  swapsCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swaps_?: InputMaybe<Swap_Filter>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tauAlphaX?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauAlphaX_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaX_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauAlphaY?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauAlphaY_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauAlphaY_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaX?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaX_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaX_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaY?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tauBetaY_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tauBetaY_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokensList?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokensList_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokens_?: InputMaybe<PoolToken_Filter>;
  totalAumFeeCollectedInBPT?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalAumFeeCollectedInBPT_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalAumFeeCollectedInBPT_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFeePaidInBPT_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeePaidInBPT_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalShares_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalShares_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalWeight?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalWeight_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalWeight_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tx?: InputMaybe<Scalars['Bytes']['input']>;
  tx_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  u?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  u_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  u_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  unitSeconds?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unitSeconds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_not?: InputMaybe<Scalars['BigInt']['input']>;
  unitSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  upperTarget?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  upperTarget_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  upperTarget_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  v?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  v_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  v_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  vaultID?: InputMaybe<Scalars['String']['input']>;
  vaultID_?: InputMaybe<Balancer_Filter>;
  vaultID_contains?: InputMaybe<Scalars['String']['input']>;
  vaultID_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_ends_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_gt?: InputMaybe<Scalars['String']['input']>;
  vaultID_gte?: InputMaybe<Scalars['String']['input']>;
  vaultID_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vaultID_lt?: InputMaybe<Scalars['String']['input']>;
  vaultID_lte?: InputMaybe<Scalars['String']['input']>;
  vaultID_not?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_contains?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vaultID_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vaultID_starts_with?: InputMaybe<Scalars['String']['input']>;
  vaultID_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  w?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  w_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  w_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  weightUpdates_?: InputMaybe<GradualWeightUpdate_Filter>;
  wrappedIndex?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  wrappedIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_not?: InputMaybe<Scalars['Int']['input']>;
  wrappedIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  z?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  z_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  z_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Pool_OrderBy {
  Address = 'address',
  Alpha = 'alpha',
  Amp = 'amp',
  BaseToken = 'baseToken',
  Beta = 'beta',
  C = 'c',
  CircuitBreakers = 'circuitBreakers',
  CreateTime = 'createTime',
  DSq = 'dSq',
  Delta = 'delta',
  Epsilon = 'epsilon',
  ExpiryTime = 'expiryTime',
  Factory = 'factory',
  HistoricalValues = 'historicalValues',
  HoldersCount = 'holdersCount',
  Id = 'id',
  IsInRecoveryMode = 'isInRecoveryMode',
  IsPaused = 'isPaused',
  JoinExitEnabled = 'joinExitEnabled',
  Lambda = 'lambda',
  LastJoinExitAmp = 'lastJoinExitAmp',
  LastPostJoinExitInvariant = 'lastPostJoinExitInvariant',
  LowerTarget = 'lowerTarget',
  MainIndex = 'mainIndex',
  ManagementAumFee = 'managementAumFee',
  ManagementFee = 'managementFee',
  MustAllowlistLPs = 'mustAllowlistLPs',
  Name = 'name',
  OfficialPool = 'officialPool',
  OfficialPoolWeight = 'officialPoolWeight',
  OracleEnabled = 'oracleEnabled',
  Owner = 'owner',
  PoolType = 'poolType',
  PoolTypeVersion = 'poolTypeVersion',
  PriceRateProviders = 'priceRateProviders',
  PrincipalToken = 'principalToken',
  ProtocolAumFeeCache = 'protocolAumFeeCache',
  ProtocolId = 'protocolId',
  ProtocolIdData = 'protocolIdData',
  ProtocolIdDataId = 'protocolIdData__id',
  ProtocolIdDataName = 'protocolIdData__name',
  ProtocolSwapFeeCache = 'protocolSwapFeeCache',
  ProtocolYieldFeeCache = 'protocolYieldFeeCache',
  Root3Alpha = 'root3Alpha',
  S = 's',
  Shares = 'shares',
  Snapshots = 'snapshots',
  SqrtAlpha = 'sqrtAlpha',
  SqrtBeta = 'sqrtBeta',
  StrategyType = 'strategyType',
  SwapEnabled = 'swapEnabled',
  SwapFee = 'swapFee',
  Swaps = 'swaps',
  SwapsCount = 'swapsCount',
  Symbol = 'symbol',
  TauAlphaX = 'tauAlphaX',
  TauAlphaY = 'tauAlphaY',
  TauBetaX = 'tauBetaX',
  TauBetaY = 'tauBetaY',
  Tokens = 'tokens',
  TokensList = 'tokensList',
  TotalAumFeeCollectedInBpt = 'totalAumFeeCollectedInBPT',
  TotalLiquidity = 'totalLiquidity',
  TotalProtocolFee = 'totalProtocolFee',
  TotalProtocolFeePaidInBpt = 'totalProtocolFeePaidInBPT',
  TotalShares = 'totalShares',
  TotalSwapFee = 'totalSwapFee',
  TotalSwapVolume = 'totalSwapVolume',
  TotalWeight = 'totalWeight',
  Tx = 'tx',
  U = 'u',
  UnitSeconds = 'unitSeconds',
  UpperTarget = 'upperTarget',
  V = 'v',
  VaultId = 'vaultID',
  VaultIdId = 'vaultID__id',
  VaultIdPoolCount = 'vaultID__poolCount',
  VaultIdProtocolFeesCollector = 'vaultID__protocolFeesCollector',
  VaultIdTotalLiquidity = 'vaultID__totalLiquidity',
  VaultIdTotalProtocolFee = 'vaultID__totalProtocolFee',
  VaultIdTotalSwapCount = 'vaultID__totalSwapCount',
  VaultIdTotalSwapFee = 'vaultID__totalSwapFee',
  VaultIdTotalSwapVolume = 'vaultID__totalSwapVolume',
  W = 'w',
  WeightUpdates = 'weightUpdates',
  WrappedIndex = 'wrappedIndex',
  Z = 'z'
}

export type PriceRateProvider = {
  __typename?: 'PriceRateProvider';
  address: Scalars['Bytes']['output'];
  cacheDuration?: Maybe<Scalars['Int']['output']>;
  cacheExpiry?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  lastCached?: Maybe<Scalars['Int']['output']>;
  poolId: Pool;
  rate?: Maybe<Scalars['BigDecimal']['output']>;
  token: PoolToken;
};

export type PriceRateProvider_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<PriceRateProvider_Filter>>>;
  cacheDuration?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_gt?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_gte?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cacheDuration_lt?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_lte?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_not?: InputMaybe<Scalars['Int']['input']>;
  cacheDuration_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cacheExpiry?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_gt?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_gte?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cacheExpiry_lt?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_lte?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_not?: InputMaybe<Scalars['Int']['input']>;
  cacheExpiry_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lastCached?: InputMaybe<Scalars['Int']['input']>;
  lastCached_gt?: InputMaybe<Scalars['Int']['input']>;
  lastCached_gte?: InputMaybe<Scalars['Int']['input']>;
  lastCached_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastCached_lt?: InputMaybe<Scalars['Int']['input']>;
  lastCached_lte?: InputMaybe<Scalars['Int']['input']>;
  lastCached_not?: InputMaybe<Scalars['Int']['input']>;
  lastCached_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PriceRateProvider_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  rate_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  rate_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<PoolToken_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum PriceRateProvider_OrderBy {
  Address = 'address',
  CacheDuration = 'cacheDuration',
  CacheExpiry = 'cacheExpiry',
  Id = 'id',
  LastCached = 'lastCached',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  Rate = 'rate',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenAssetManager = 'token__assetManager',
  TokenBalance = 'token__balance',
  TokenCashBalance = 'token__cashBalance',
  TokenDecimals = 'token__decimals',
  TokenId = 'token__id',
  TokenIndex = 'token__index',
  TokenIsExemptFromYieldProtocolFee = 'token__isExemptFromYieldProtocolFee',
  TokenManagedBalance = 'token__managedBalance',
  TokenName = 'token__name',
  TokenOldPriceRate = 'token__oldPriceRate',
  TokenPaidProtocolFees = 'token__paidProtocolFees',
  TokenPriceRate = 'token__priceRate',
  TokenSymbol = 'token__symbol',
  TokenWeight = 'token__weight'
}

export type ProtocolIdData = {
  __typename?: 'ProtocolIdData';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ProtocolIdData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolIdData_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ProtocolIdData_Filter>>>;
};

export enum ProtocolIdData_OrderBy {
  Id = 'id',
  Name = 'name'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ampUpdate?: Maybe<AmpUpdate>;
  ampUpdates: Array<AmpUpdate>;
  balancer?: Maybe<Balancer>;
  balancerSnapshot?: Maybe<BalancerSnapshot>;
  balancerSnapshots: Array<BalancerSnapshot>;
  balancers: Array<Balancer>;
  chest?: Maybe<Chest>;
  chests: Array<Chest>;
  circuitBreaker?: Maybe<CircuitBreaker>;
  circuitBreakers: Array<CircuitBreaker>;
  governanceProposal?: Maybe<GovernanceProposal>;
  governanceProposals: Array<GovernanceProposal>;
  governanceVote?: Maybe<GovernanceVote>;
  governanceVotes: Array<GovernanceVote>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  lpmerkleTree?: Maybe<LpMerkleTree>;
  lpmerkleTrees: Array<LpMerkleTree>;
  lprewardDistributionSnapshot?: Maybe<LpRewardDistributionSnapshot>;
  lprewardDistributionSnapshots: Array<LpRewardDistributionSnapshot>;
  managementOperation?: Maybe<ManagementOperation>;
  managementOperations: Array<ManagementOperation>;
  minter?: Maybe<Minter>;
  minters: Array<Minter>;
  pool?: Maybe<Pool>;
  poolContract?: Maybe<PoolContract>;
  poolContracts: Array<PoolContract>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolPartyBurner?: Maybe<PoolPartyBurner>;
  poolPartyBurners: Array<PoolPartyBurner>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  pools: Array<Pool>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolIdDatas: Array<ProtocolIdData>;
  stakingMerkleTree?: Maybe<StakingMerkleTree>;
  stakingMerkleTrees: Array<StakingMerkleTree>;
  stakingRewardDistributionSnapshot?: Maybe<StakingRewardDistributionSnapshot>;
  stakingRewardDistributionSnapshots: Array<StakingRewardDistributionSnapshot>;
  swap?: Maybe<Swap>;
  swapFeeUpdate?: Maybe<SwapFeeUpdate>;
  swapFeeUpdates: Array<SwapFeeUpdate>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  tokenClaimed?: Maybe<TokenClaimed>;
  tokenClaimeds: Array<TokenClaimed>;
  tokenDeposited?: Maybe<TokenDeposited>;
  tokenDepositeds: Array<TokenDeposited>;
  tokenMint?: Maybe<TokenMint>;
  tokenMints: Array<TokenMint>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  tokenSnapshot?: Maybe<TokenSnapshot>;
  tokenSnapshots: Array<TokenSnapshot>;
  tokens: Array<Token>;
  tradePair?: Maybe<TradePair>;
  tradePairSnapshot?: Maybe<TradePairSnapshot>;
  tradePairSnapshots: Array<TradePairSnapshot>;
  tradePairs: Array<TradePair>;
  user?: Maybe<User>;
  userClaimedLPRewardDistribution?: Maybe<UserClaimedLpRewardDistribution>;
  userClaimedLPRewardDistributions: Array<UserClaimedLpRewardDistribution>;
  userClaimedStakingRewardDistribution?: Maybe<UserClaimedStakingRewardDistribution>;
  userClaimedStakingRewardDistributions: Array<UserClaimedStakingRewardDistribution>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  userLPRewardDistributionMetaData?: Maybe<UserLpRewardDistributionMetaData>;
  userLPRewardDistributionMetaDatas: Array<UserLpRewardDistributionMetaData>;
  userStakingRewardDistributionMetaData?: Maybe<UserStakingRewardDistributionMetaData>;
  userStakingRewardDistributionMetaDatas: Array<UserStakingRewardDistributionMetaData>;
  users: Array<User>;
  vestedLiquidities: Array<VestedLiquidity>;
  vestedLiquidity?: Maybe<VestedLiquidity>;
  vestedStaking?: Maybe<VestedStaking>;
  vestedStakings: Array<VestedStaking>;
  vestingLiquidityClaimed?: Maybe<VestingLiquidityClaimed>;
  vestingLiquidityClaimeds: Array<VestingLiquidityClaimed>;
  vestingStakingClaimed?: Maybe<VestingStakingClaimed>;
  vestingStakingClaimeds: Array<VestingStakingClaimed>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAmpUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAmpUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AmpUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AmpUpdate_Filter>;
};


export type QueryBalancerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBalancerSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBalancerSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BalancerSnapshot_Filter>;
};


export type QueryBalancersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balancer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balancer_Filter>;
};


export type QueryChestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Chest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Chest_Filter>;
};


export type QueryCircuitBreakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCircuitBreakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CircuitBreaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CircuitBreaker_Filter>;
};


export type QueryGovernanceProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernanceProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceProposal_Filter>;
};


export type QueryGovernanceVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGovernanceVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceVote_Filter>;
};


export type QueryGradualWeightUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGradualWeightUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
};


export type QueryJoinExitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryJoinExitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JoinExit_Filter>;
};


export type QueryLatestPriceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLatestPricesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LatestPrice_Filter>;
};


export type QueryLpmerkleTreeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLpmerkleTreesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpMerkleTree_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpMerkleTree_Filter>;
};


export type QueryLprewardDistributionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLprewardDistributionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpRewardDistributionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpRewardDistributionSnapshot_Filter>;
};


export type QueryManagementOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryManagementOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ManagementOperation_Filter>;
};


export type QueryMinterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Minter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Minter_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolContract_Filter>;
};


export type QueryPoolHistoricalLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
};


export type QueryPoolHistoricalLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolPartyBurnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolPartyBurnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolPartyBurner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolPartyBurner_Filter>;
};


export type QueryPoolShareArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolSharesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShare_Filter>;
};


export type QueryPoolSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSnapshot_Filter>;
};


export type QueryPoolTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolToken_Filter>;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QueryPriceRateProviderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPriceRateProvidersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceRateProvider_Filter>;
};


export type QueryProtocolIdDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolIdDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolIdData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolIdData_Filter>;
};


export type QueryStakingMerkleTreeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakingMerkleTreesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakingMerkleTree_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakingMerkleTree_Filter>;
};


export type QueryStakingRewardDistributionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakingRewardDistributionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakingRewardDistributionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakingRewardDistributionSnapshot_Filter>;
};


export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySwapFeeUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySwapFeeUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapFeeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapFeeUpdate_Filter>;
};


export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenClaimed_Filter>;
};


export type QueryTokenDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDeposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDeposited_Filter>;
};


export type QueryTokenMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenMint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenMint_Filter>;
};


export type QueryTokenPriceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenPricesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPrice_Filter>;
};


export type QueryTokenSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSnapshot_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTradePairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTradePairSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTradePairSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePairSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePairSnapshot_Filter>;
};


export type QueryTradePairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePair_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserClaimedLpRewardDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserClaimedLpRewardDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserClaimedLpRewardDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserClaimedLpRewardDistribution_Filter>;
};


export type QueryUserClaimedStakingRewardDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserClaimedStakingRewardDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserClaimedStakingRewardDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserClaimedStakingRewardDistribution_Filter>;
};


export type QueryUserInternalBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserInternalBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInternalBalance_Filter>;
};


export type QueryUserLpRewardDistributionMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserLpRewardDistributionMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserLpRewardDistributionMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserLpRewardDistributionMetaData_Filter>;
};


export type QueryUserStakingRewardDistributionMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserStakingRewardDistributionMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserStakingRewardDistributionMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserStakingRewardDistributionMetaData_Filter>;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type QueryVestedLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestedLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestedLiquidity_Filter>;
};


export type QueryVestedLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVestedStakingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVestedStakingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestedStaking_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestedStaking_Filter>;
};


export type QueryVestingLiquidityClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVestingLiquidityClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestingLiquidityClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestingLiquidityClaimed_Filter>;
};


export type QueryVestingStakingClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVestingStakingClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestingStakingClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestingStakingClaimed_Filter>;
};

export type StakingMerkleTree = {
  __typename?: 'StakingMerkleTree';
  id: Scalars['ID']['output'];
  merkleTree: Scalars['Bytes']['output'];
};

export type StakingMerkleTree_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakingMerkleTree_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  merkleTree?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_gt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_gte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  merkleTree_lt?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_lte?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_not?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  merkleTree_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StakingMerkleTree_Filter>>>;
};

export enum StakingMerkleTree_OrderBy {
  Id = 'id',
  MerkleTree = 'merkleTree'
}

export type StakingRewardDistributionSnapshot = {
  __typename?: 'StakingRewardDistributionSnapshot';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ipfsCid: Scalars['String']['output'];
  ipfsData?: Maybe<UserStakingRewardDistributionMetaData>;
  ipfsMerkleTree?: Maybe<StakingMerkleTree>;
};

export type StakingRewardDistributionSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakingRewardDistributionSnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ipfsCid?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData?: InputMaybe<Scalars['String']['input']>;
  ipfsData_?: InputMaybe<UserStakingRewardDistributionMetaData_Filter>;
  ipfsData_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsData_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsData_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsData_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsData_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsData_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsData_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsData_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsData_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_?: InputMaybe<StakingMerkleTree_Filter>;
  ipfsMerkleTree_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsMerkleTree_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsMerkleTree_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsMerkleTree_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<StakingRewardDistributionSnapshot_Filter>>>;
};

export enum StakingRewardDistributionSnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  IpfsCid = 'ipfsCid',
  IpfsData = 'ipfsData',
  IpfsDataAddress = 'ipfsData__address',
  IpfsDataEpoch = 'ipfsData__epoch',
  IpfsDataId = 'ipfsData__id',
  IpfsDataIpfsCid = 'ipfsData__ipfsCid',
  IpfsDataValue = 'ipfsData__value',
  IpfsMerkleTree = 'ipfsMerkleTree',
  IpfsMerkleTreeId = 'ipfsMerkleTree__id',
  IpfsMerkleTreeMerkleTree = 'ipfsMerkleTree__merkleTree'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  ampUpdate?: Maybe<AmpUpdate>;
  ampUpdates: Array<AmpUpdate>;
  balancer?: Maybe<Balancer>;
  balancerSnapshot?: Maybe<BalancerSnapshot>;
  balancerSnapshots: Array<BalancerSnapshot>;
  balancers: Array<Balancer>;
  chest?: Maybe<Chest>;
  chests: Array<Chest>;
  circuitBreaker?: Maybe<CircuitBreaker>;
  circuitBreakers: Array<CircuitBreaker>;
  governanceProposal?: Maybe<GovernanceProposal>;
  governanceProposals: Array<GovernanceProposal>;
  governanceVote?: Maybe<GovernanceVote>;
  governanceVotes: Array<GovernanceVote>;
  gradualWeightUpdate?: Maybe<GradualWeightUpdate>;
  gradualWeightUpdates: Array<GradualWeightUpdate>;
  joinExit?: Maybe<JoinExit>;
  joinExits: Array<JoinExit>;
  latestPrice?: Maybe<LatestPrice>;
  latestPrices: Array<LatestPrice>;
  lpmerkleTree?: Maybe<LpMerkleTree>;
  lpmerkleTrees: Array<LpMerkleTree>;
  lprewardDistributionSnapshot?: Maybe<LpRewardDistributionSnapshot>;
  lprewardDistributionSnapshots: Array<LpRewardDistributionSnapshot>;
  managementOperation?: Maybe<ManagementOperation>;
  managementOperations: Array<ManagementOperation>;
  minter?: Maybe<Minter>;
  minters: Array<Minter>;
  pool?: Maybe<Pool>;
  poolContract?: Maybe<PoolContract>;
  poolContracts: Array<PoolContract>;
  poolHistoricalLiquidities: Array<PoolHistoricalLiquidity>;
  poolHistoricalLiquidity?: Maybe<PoolHistoricalLiquidity>;
  poolPartyBurner?: Maybe<PoolPartyBurner>;
  poolPartyBurners: Array<PoolPartyBurner>;
  poolShare?: Maybe<PoolShare>;
  poolShares: Array<PoolShare>;
  poolSnapshot?: Maybe<PoolSnapshot>;
  poolSnapshots: Array<PoolSnapshot>;
  poolToken?: Maybe<PoolToken>;
  poolTokens: Array<PoolToken>;
  pools: Array<Pool>;
  priceRateProvider?: Maybe<PriceRateProvider>;
  priceRateProviders: Array<PriceRateProvider>;
  protocolIdData?: Maybe<ProtocolIdData>;
  protocolIdDatas: Array<ProtocolIdData>;
  stakingMerkleTree?: Maybe<StakingMerkleTree>;
  stakingMerkleTrees: Array<StakingMerkleTree>;
  stakingRewardDistributionSnapshot?: Maybe<StakingRewardDistributionSnapshot>;
  stakingRewardDistributionSnapshots: Array<StakingRewardDistributionSnapshot>;
  swap?: Maybe<Swap>;
  swapFeeUpdate?: Maybe<SwapFeeUpdate>;
  swapFeeUpdates: Array<SwapFeeUpdate>;
  swaps: Array<Swap>;
  token?: Maybe<Token>;
  tokenClaimed?: Maybe<TokenClaimed>;
  tokenClaimeds: Array<TokenClaimed>;
  tokenDeposited?: Maybe<TokenDeposited>;
  tokenDepositeds: Array<TokenDeposited>;
  tokenMint?: Maybe<TokenMint>;
  tokenMints: Array<TokenMint>;
  tokenPrice?: Maybe<TokenPrice>;
  tokenPrices: Array<TokenPrice>;
  tokenSnapshot?: Maybe<TokenSnapshot>;
  tokenSnapshots: Array<TokenSnapshot>;
  tokens: Array<Token>;
  tradePair?: Maybe<TradePair>;
  tradePairSnapshot?: Maybe<TradePairSnapshot>;
  tradePairSnapshots: Array<TradePairSnapshot>;
  tradePairs: Array<TradePair>;
  user?: Maybe<User>;
  userClaimedLPRewardDistribution?: Maybe<UserClaimedLpRewardDistribution>;
  userClaimedLPRewardDistributions: Array<UserClaimedLpRewardDistribution>;
  userClaimedStakingRewardDistribution?: Maybe<UserClaimedStakingRewardDistribution>;
  userClaimedStakingRewardDistributions: Array<UserClaimedStakingRewardDistribution>;
  userInternalBalance?: Maybe<UserInternalBalance>;
  userInternalBalances: Array<UserInternalBalance>;
  userLPRewardDistributionMetaData?: Maybe<UserLpRewardDistributionMetaData>;
  userLPRewardDistributionMetaDatas: Array<UserLpRewardDistributionMetaData>;
  userStakingRewardDistributionMetaData?: Maybe<UserStakingRewardDistributionMetaData>;
  userStakingRewardDistributionMetaDatas: Array<UserStakingRewardDistributionMetaData>;
  users: Array<User>;
  vestedLiquidities: Array<VestedLiquidity>;
  vestedLiquidity?: Maybe<VestedLiquidity>;
  vestedStaking?: Maybe<VestedStaking>;
  vestedStakings: Array<VestedStaking>;
  vestingLiquidityClaimed?: Maybe<VestingLiquidityClaimed>;
  vestingLiquidityClaimeds: Array<VestingLiquidityClaimed>;
  vestingStakingClaimed?: Maybe<VestingStakingClaimed>;
  vestingStakingClaimeds: Array<VestingStakingClaimed>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAmpUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAmpUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AmpUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AmpUpdate_Filter>;
};


export type SubscriptionBalancerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBalancerSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBalancerSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BalancerSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BalancerSnapshot_Filter>;
};


export type SubscriptionBalancersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balancer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Balancer_Filter>;
};


export type SubscriptionChestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Chest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Chest_Filter>;
};


export type SubscriptionCircuitBreakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCircuitBreakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CircuitBreaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CircuitBreaker_Filter>;
};


export type SubscriptionGovernanceProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernanceProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceProposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceProposal_Filter>;
};


export type SubscriptionGovernanceVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGovernanceVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GovernanceVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernanceVote_Filter>;
};


export type SubscriptionGradualWeightUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGradualWeightUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<GradualWeightUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GradualWeightUpdate_Filter>;
};


export type SubscriptionJoinExitArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionJoinExitsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<JoinExit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<JoinExit_Filter>;
};


export type SubscriptionLatestPriceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLatestPricesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LatestPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LatestPrice_Filter>;
};


export type SubscriptionLpmerkleTreeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLpmerkleTreesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpMerkleTree_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpMerkleTree_Filter>;
};


export type SubscriptionLprewardDistributionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLprewardDistributionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LpRewardDistributionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LpRewardDistributionSnapshot_Filter>;
};


export type SubscriptionManagementOperationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionManagementOperationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ManagementOperation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ManagementOperation_Filter>;
};


export type SubscriptionMinterArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Minter_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Minter_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolContract_Filter>;
};


export type SubscriptionPoolHistoricalLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHistoricalLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHistoricalLiquidity_Filter>;
};


export type SubscriptionPoolHistoricalLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolPartyBurnerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolPartyBurnersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolPartyBurner_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolPartyBurner_Filter>;
};


export type SubscriptionPoolShareArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolSharesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShare_Filter>;
};


export type SubscriptionPoolSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolSnapshot_Filter>;
};


export type SubscriptionPoolTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolToken_Filter>;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionPriceRateProviderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPriceRateProvidersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PriceRateProvider_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PriceRateProvider_Filter>;
};


export type SubscriptionProtocolIdDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolIdDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProtocolIdData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolIdData_Filter>;
};


export type SubscriptionStakingMerkleTreeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakingMerkleTreesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakingMerkleTree_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakingMerkleTree_Filter>;
};


export type SubscriptionStakingRewardDistributionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakingRewardDistributionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakingRewardDistributionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakingRewardDistributionSnapshot_Filter>;
};


export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSwapFeeUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSwapFeeUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SwapFeeUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SwapFeeUpdate_Filter>;
};


export type SubscriptionSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenClaimed_Filter>;
};


export type SubscriptionTokenDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDeposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDeposited_Filter>;
};


export type SubscriptionTokenMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenMint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenMint_Filter>;
};


export type SubscriptionTokenPriceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenPricesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenPrice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenPrice_Filter>;
};


export type SubscriptionTokenSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenSnapshot_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTradePairArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTradePairSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTradePairSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePairSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePairSnapshot_Filter>;
};


export type SubscriptionTradePairsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TradePair_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TradePair_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserClaimedLpRewardDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserClaimedLpRewardDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserClaimedLpRewardDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserClaimedLpRewardDistribution_Filter>;
};


export type SubscriptionUserClaimedStakingRewardDistributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserClaimedStakingRewardDistributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserClaimedStakingRewardDistribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserClaimedStakingRewardDistribution_Filter>;
};


export type SubscriptionUserInternalBalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserInternalBalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserInternalBalance_Filter>;
};


export type SubscriptionUserLpRewardDistributionMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserLpRewardDistributionMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserLpRewardDistributionMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserLpRewardDistributionMetaData_Filter>;
};


export type SubscriptionUserStakingRewardDistributionMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserStakingRewardDistributionMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserStakingRewardDistributionMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserStakingRewardDistributionMetaData_Filter>;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};


export type SubscriptionVestedLiquiditiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestedLiquidity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestedLiquidity_Filter>;
};


export type SubscriptionVestedLiquidityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVestedStakingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVestedStakingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestedStaking_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestedStaking_Filter>;
};


export type SubscriptionVestingLiquidityClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVestingLiquidityClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestingLiquidityClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestingLiquidityClaimed_Filter>;
};


export type SubscriptionVestingStakingClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVestingStakingClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<VestingStakingClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VestingStakingClaimed_Filter>;
};

export type Swap = {
  __typename?: 'Swap';
  caller: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  poolId: Pool;
  timestamp: Scalars['Int']['output'];
  tokenAmountIn: Scalars['BigDecimal']['output'];
  tokenAmountOut: Scalars['BigDecimal']['output'];
  tokenIn: Scalars['Bytes']['output'];
  tokenInSym: Scalars['String']['output'];
  tokenOut: Scalars['Bytes']['output'];
  tokenOutSym: Scalars['String']['output'];
  tx: Scalars['Bytes']['output'];
  userAddress: User;
  valueUSD: Scalars['BigDecimal']['output'];
};

export type SwapFeeUpdate = {
  __typename?: 'SwapFeeUpdate';
  endSwapFeePercentage: Scalars['BigDecimal']['output'];
  endTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  pool: Pool;
  scheduledTimestamp: Scalars['Int']['output'];
  startSwapFeePercentage: Scalars['BigDecimal']['output'];
  startTimestamp: Scalars['BigInt']['output'];
};

export type SwapFeeUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_Filter>>>;
  endSwapFeePercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  endSwapFeePercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  endSwapFeePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<SwapFeeUpdate_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  scheduledTimestamp?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  scheduledTimestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not?: InputMaybe<Scalars['Int']['input']>;
  scheduledTimestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  startSwapFeePercentage?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  startSwapFeePercentage_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  startSwapFeePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum SwapFeeUpdate_OrderBy {
  EndSwapFeePercentage = 'endSwapFeePercentage',
  EndTimestamp = 'endTimestamp',
  Id = 'id',
  Pool = 'pool',
  PoolAddress = 'pool__address',
  PoolAlpha = 'pool__alpha',
  PoolAmp = 'pool__amp',
  PoolBaseToken = 'pool__baseToken',
  PoolBeta = 'pool__beta',
  PoolC = 'pool__c',
  PoolCreateTime = 'pool__createTime',
  PoolDSq = 'pool__dSq',
  PoolDelta = 'pool__delta',
  PoolEpsilon = 'pool__epsilon',
  PoolExpiryTime = 'pool__expiryTime',
  PoolFactory = 'pool__factory',
  PoolHoldersCount = 'pool__holdersCount',
  PoolId = 'pool__id',
  PoolIsInRecoveryMode = 'pool__isInRecoveryMode',
  PoolIsPaused = 'pool__isPaused',
  PoolJoinExitEnabled = 'pool__joinExitEnabled',
  PoolLambda = 'pool__lambda',
  PoolLastJoinExitAmp = 'pool__lastJoinExitAmp',
  PoolLastPostJoinExitInvariant = 'pool__lastPostJoinExitInvariant',
  PoolLowerTarget = 'pool__lowerTarget',
  PoolMainIndex = 'pool__mainIndex',
  PoolManagementAumFee = 'pool__managementAumFee',
  PoolManagementFee = 'pool__managementFee',
  PoolMustAllowlistLPs = 'pool__mustAllowlistLPs',
  PoolName = 'pool__name',
  PoolOfficialPool = 'pool__officialPool',
  PoolOfficialPoolWeight = 'pool__officialPoolWeight',
  PoolOracleEnabled = 'pool__oracleEnabled',
  PoolOwner = 'pool__owner',
  PoolPoolType = 'pool__poolType',
  PoolPoolTypeVersion = 'pool__poolTypeVersion',
  PoolPrincipalToken = 'pool__principalToken',
  PoolProtocolAumFeeCache = 'pool__protocolAumFeeCache',
  PoolProtocolId = 'pool__protocolId',
  PoolProtocolSwapFeeCache = 'pool__protocolSwapFeeCache',
  PoolProtocolYieldFeeCache = 'pool__protocolYieldFeeCache',
  PoolRoot3Alpha = 'pool__root3Alpha',
  PoolS = 'pool__s',
  PoolSqrtAlpha = 'pool__sqrtAlpha',
  PoolSqrtBeta = 'pool__sqrtBeta',
  PoolStrategyType = 'pool__strategyType',
  PoolSwapEnabled = 'pool__swapEnabled',
  PoolSwapFee = 'pool__swapFee',
  PoolSwapsCount = 'pool__swapsCount',
  PoolSymbol = 'pool__symbol',
  PoolTauAlphaX = 'pool__tauAlphaX',
  PoolTauAlphaY = 'pool__tauAlphaY',
  PoolTauBetaX = 'pool__tauBetaX',
  PoolTauBetaY = 'pool__tauBetaY',
  PoolTotalAumFeeCollectedInBpt = 'pool__totalAumFeeCollectedInBPT',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalProtocolFee = 'pool__totalProtocolFee',
  PoolTotalProtocolFeePaidInBpt = 'pool__totalProtocolFeePaidInBPT',
  PoolTotalShares = 'pool__totalShares',
  PoolTotalSwapFee = 'pool__totalSwapFee',
  PoolTotalSwapVolume = 'pool__totalSwapVolume',
  PoolTotalWeight = 'pool__totalWeight',
  PoolTx = 'pool__tx',
  PoolU = 'pool__u',
  PoolUnitSeconds = 'pool__unitSeconds',
  PoolUpperTarget = 'pool__upperTarget',
  PoolV = 'pool__v',
  PoolW = 'pool__w',
  PoolWrappedIndex = 'pool__wrappedIndex',
  PoolZ = 'pool__z',
  ScheduledTimestamp = 'scheduledTimestamp',
  StartSwapFeePercentage = 'startSwapFeePercentage',
  StartTimestamp = 'startTimestamp'
}

export type Swap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  caller?: InputMaybe<Scalars['Bytes']['input']>;
  caller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  caller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  caller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  caller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tokenAmountIn?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenAmountIn_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenAmountOut?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenAmountOut_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tokenAmountOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tokenIn?: InputMaybe<Scalars['Bytes']['input']>;
  tokenInSym?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_gt?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_gte?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInSym_lt?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_lte?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInSym_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInSym_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIn_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenIn_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenOut?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOutSym?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_contains?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_gt?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_gte?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenOutSym_lt?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_lte?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenOutSym_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenOutSym_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenOut_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx?: InputMaybe<Scalars['Bytes']['input']>;
  tx_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tx_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tx_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tx_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userAddress?: InputMaybe<Scalars['String']['input']>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_not?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  valueUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  valueUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Swap_OrderBy {
  Caller = 'caller',
  Id = 'id',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  Timestamp = 'timestamp',
  TokenAmountIn = 'tokenAmountIn',
  TokenAmountOut = 'tokenAmountOut',
  TokenIn = 'tokenIn',
  TokenInSym = 'tokenInSym',
  TokenOut = 'tokenOut',
  TokenOutSym = 'tokenOutSym',
  Tx = 'tx',
  UserAddress = 'userAddress',
  UserAddressId = 'userAddress__id',
  ValueUsd = 'valueUSD'
}

export type Token = {
  __typename?: 'Token';
  address: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  fxOracleDecimals?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  latestFXPrice?: Maybe<Scalars['BigDecimal']['output']>;
  latestPrice?: Maybe<LatestPrice>;
  latestUSDPrice?: Maybe<Scalars['BigDecimal']['output']>;
  latestUSDPriceTimestamp?: Maybe<Scalars['BigInt']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pool?: Maybe<Pool>;
  symbol?: Maybe<Scalars['String']['output']>;
  totalBalanceNotional: Scalars['BigDecimal']['output'];
  totalBalanceUSD: Scalars['BigDecimal']['output'];
  totalSwapCount: Scalars['BigInt']['output'];
  totalVolumeNotional: Scalars['BigDecimal']['output'];
  totalVolumeUSD: Scalars['BigDecimal']['output'];
};

export type TokenClaimed = {
  __typename?: 'TokenClaimed';
  address: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  epochId: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ipfsCid: Scalars['String']['output'];
  user: UserClaimedStakingRewardDistribution;
};

export type TokenClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenClaimed_Filter>>>;
  epochId?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ipfsCid?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TokenClaimed_Filter>>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_?: InputMaybe<UserClaimedStakingRewardDistribution_Filter>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum TokenClaimed_OrderBy {
  Address = 'address',
  Amount = 'amount',
  EpochId = 'epochId',
  Id = 'id',
  IpfsCid = 'ipfsCid',
  User = 'user',
  UserId = 'user__id'
}

export type TokenDeposited = {
  __typename?: 'TokenDeposited';
  amount: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  epochId: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['Bytes']['output'];
};

export type TokenDeposited_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenDeposited_Filter>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epochId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not?: InputMaybe<Scalars['BigInt']['input']>;
  epochId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenDeposited_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenDeposited_OrderBy {
  Amount = 'amount',
  BlockTimestamp = 'blockTimestamp',
  EpochId = 'epochId',
  Id = 'id',
  Token = 'token'
}

export type TokenMint = {
  __typename?: 'TokenMint';
  amount: Scalars['BigInt']['output'];
  benefactor: Scalars['Bytes']['output'];
  epoch: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  mintInitiator: Scalars['Bytes']['output'];
  minter: Minter;
  timestamp: Scalars['BigInt']['output'];
};

export type TokenMint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenMint_Filter>>>;
  benefactor?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_contains?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_gt?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_gte?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  benefactor_lt?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_lte?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_not?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  benefactor_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  epoch?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mintInitiator?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  mintInitiator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_not?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  mintInitiator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  minter?: InputMaybe<Scalars['String']['input']>;
  minter_?: InputMaybe<Minter_Filter>;
  minter_contains?: InputMaybe<Scalars['String']['input']>;
  minter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  minter_ends_with?: InputMaybe<Scalars['String']['input']>;
  minter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minter_gt?: InputMaybe<Scalars['String']['input']>;
  minter_gte?: InputMaybe<Scalars['String']['input']>;
  minter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  minter_lt?: InputMaybe<Scalars['String']['input']>;
  minter_lte?: InputMaybe<Scalars['String']['input']>;
  minter_not?: InputMaybe<Scalars['String']['input']>;
  minter_not_contains?: InputMaybe<Scalars['String']['input']>;
  minter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  minter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  minter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  minter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  minter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  minter_starts_with?: InputMaybe<Scalars['String']['input']>;
  minter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<TokenMint_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TokenMint_OrderBy {
  Amount = 'amount',
  Benefactor = 'benefactor',
  Epoch = 'epoch',
  Id = 'id',
  MintInitiator = 'mintInitiator',
  Minter = 'minter',
  MinterId = 'minter__id',
  MinterLastMintedAmount = 'minter__lastMintedAmount',
  MinterLastMintedTimestamp = 'minter__lastMintedTimestamp',
  MinterMintingPeriod = 'minter__mintingPeriod',
  Timestamp = 'timestamp'
}

export type TokenPrice = {
  __typename?: 'TokenPrice';
  amount: Scalars['BigDecimal']['output'];
  asset: Scalars['Bytes']['output'];
  block: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  poolId: Pool;
  price: Scalars['BigDecimal']['output'];
  pricingAsset: Scalars['Bytes']['output'];
  timestamp: Scalars['Int']['output'];
};

export type TokenPrice_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<TokenPrice_Filter>>>;
  asset?: InputMaybe<Scalars['Bytes']['input']>;
  asset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  asset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  asset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  asset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenPrice_Filter>>>;
  poolId?: InputMaybe<Scalars['String']['input']>;
  poolId_?: InputMaybe<Pool_Filter>;
  poolId_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_gt?: InputMaybe<Scalars['String']['input']>;
  poolId_gte?: InputMaybe<Scalars['String']['input']>;
  poolId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_lt?: InputMaybe<Scalars['String']['input']>;
  poolId_lte?: InputMaybe<Scalars['String']['input']>;
  poolId_not?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  pricingAsset?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_gte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pricingAsset_lt?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_lte?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pricingAsset_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum TokenPrice_OrderBy {
  Amount = 'amount',
  Asset = 'asset',
  Block = 'block',
  Id = 'id',
  PoolId = 'poolId',
  PoolIdAddress = 'poolId__address',
  PoolIdAlpha = 'poolId__alpha',
  PoolIdAmp = 'poolId__amp',
  PoolIdBaseToken = 'poolId__baseToken',
  PoolIdBeta = 'poolId__beta',
  PoolIdC = 'poolId__c',
  PoolIdCreateTime = 'poolId__createTime',
  PoolIdDSq = 'poolId__dSq',
  PoolIdDelta = 'poolId__delta',
  PoolIdEpsilon = 'poolId__epsilon',
  PoolIdExpiryTime = 'poolId__expiryTime',
  PoolIdFactory = 'poolId__factory',
  PoolIdHoldersCount = 'poolId__holdersCount',
  PoolIdId = 'poolId__id',
  PoolIdIsInRecoveryMode = 'poolId__isInRecoveryMode',
  PoolIdIsPaused = 'poolId__isPaused',
  PoolIdJoinExitEnabled = 'poolId__joinExitEnabled',
  PoolIdLambda = 'poolId__lambda',
  PoolIdLastJoinExitAmp = 'poolId__lastJoinExitAmp',
  PoolIdLastPostJoinExitInvariant = 'poolId__lastPostJoinExitInvariant',
  PoolIdLowerTarget = 'poolId__lowerTarget',
  PoolIdMainIndex = 'poolId__mainIndex',
  PoolIdManagementAumFee = 'poolId__managementAumFee',
  PoolIdManagementFee = 'poolId__managementFee',
  PoolIdMustAllowlistLPs = 'poolId__mustAllowlistLPs',
  PoolIdName = 'poolId__name',
  PoolIdOfficialPool = 'poolId__officialPool',
  PoolIdOfficialPoolWeight = 'poolId__officialPoolWeight',
  PoolIdOracleEnabled = 'poolId__oracleEnabled',
  PoolIdOwner = 'poolId__owner',
  PoolIdPoolType = 'poolId__poolType',
  PoolIdPoolTypeVersion = 'poolId__poolTypeVersion',
  PoolIdPrincipalToken = 'poolId__principalToken',
  PoolIdProtocolAumFeeCache = 'poolId__protocolAumFeeCache',
  PoolIdProtocolId = 'poolId__protocolId',
  PoolIdProtocolSwapFeeCache = 'poolId__protocolSwapFeeCache',
  PoolIdProtocolYieldFeeCache = 'poolId__protocolYieldFeeCache',
  PoolIdRoot3Alpha = 'poolId__root3Alpha',
  PoolIdS = 'poolId__s',
  PoolIdSqrtAlpha = 'poolId__sqrtAlpha',
  PoolIdSqrtBeta = 'poolId__sqrtBeta',
  PoolIdStrategyType = 'poolId__strategyType',
  PoolIdSwapEnabled = 'poolId__swapEnabled',
  PoolIdSwapFee = 'poolId__swapFee',
  PoolIdSwapsCount = 'poolId__swapsCount',
  PoolIdSymbol = 'poolId__symbol',
  PoolIdTauAlphaX = 'poolId__tauAlphaX',
  PoolIdTauAlphaY = 'poolId__tauAlphaY',
  PoolIdTauBetaX = 'poolId__tauBetaX',
  PoolIdTauBetaY = 'poolId__tauBetaY',
  PoolIdTotalAumFeeCollectedInBpt = 'poolId__totalAumFeeCollectedInBPT',
  PoolIdTotalLiquidity = 'poolId__totalLiquidity',
  PoolIdTotalProtocolFee = 'poolId__totalProtocolFee',
  PoolIdTotalProtocolFeePaidInBpt = 'poolId__totalProtocolFeePaidInBPT',
  PoolIdTotalShares = 'poolId__totalShares',
  PoolIdTotalSwapFee = 'poolId__totalSwapFee',
  PoolIdTotalSwapVolume = 'poolId__totalSwapVolume',
  PoolIdTotalWeight = 'poolId__totalWeight',
  PoolIdTx = 'poolId__tx',
  PoolIdU = 'poolId__u',
  PoolIdUnitSeconds = 'poolId__unitSeconds',
  PoolIdUpperTarget = 'poolId__upperTarget',
  PoolIdV = 'poolId__v',
  PoolIdW = 'poolId__w',
  PoolIdWrappedIndex = 'poolId__wrappedIndex',
  PoolIdZ = 'poolId__z',
  Price = 'price',
  PricingAsset = 'pricingAsset',
  Timestamp = 'timestamp'
}

export type TokenSnapshot = {
  __typename?: 'TokenSnapshot';
  id: Scalars['ID']['output'];
  timestamp: Scalars['Int']['output'];
  token: Token;
  totalBalanceNotional: Scalars['BigDecimal']['output'];
  totalBalanceUSD: Scalars['BigDecimal']['output'];
  totalSwapCount: Scalars['BigInt']['output'];
  totalVolumeNotional: Scalars['BigDecimal']['output'];
  totalVolumeUSD: Scalars['BigDecimal']['output'];
};

export type TokenSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenSnapshot_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenSnapshot_Filter>>>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalBalanceNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TokenSnapshot_OrderBy {
  Id = 'id',
  Timestamp = 'timestamp',
  Token = 'token',
  TokenAddress = 'token__address',
  TokenDecimals = 'token__decimals',
  TokenFxOracleDecimals = 'token__fxOracleDecimals',
  TokenId = 'token__id',
  TokenLatestFxPrice = 'token__latestFXPrice',
  TokenLatestUsdPrice = 'token__latestUSDPrice',
  TokenLatestUsdPriceTimestamp = 'token__latestUSDPriceTimestamp',
  TokenName = 'token__name',
  TokenSymbol = 'token__symbol',
  TokenTotalBalanceNotional = 'token__totalBalanceNotional',
  TokenTotalBalanceUsd = 'token__totalBalanceUSD',
  TokenTotalSwapCount = 'token__totalSwapCount',
  TokenTotalVolumeNotional = 'token__totalVolumeNotional',
  TokenTotalVolumeUsd = 'token__totalVolumeUSD',
  TotalBalanceNotional = 'totalBalanceNotional',
  TotalBalanceUsd = 'totalBalanceUSD',
  TotalSwapCount = 'totalSwapCount',
  TotalVolumeNotional = 'totalVolumeNotional',
  TotalVolumeUsd = 'totalVolumeUSD'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fxOracleDecimals?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_gt?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_gte?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  fxOracleDecimals_lt?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_lte?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_not?: InputMaybe<Scalars['Int']['input']>;
  fxOracleDecimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  latestFXPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestFXPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestFXPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestPrice?: InputMaybe<Scalars['String']['input']>;
  latestPrice_?: InputMaybe<LatestPrice_Filter>;
  latestPrice_contains?: InputMaybe<Scalars['String']['input']>;
  latestPrice_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_gt?: InputMaybe<Scalars['String']['input']>;
  latestPrice_gte?: InputMaybe<Scalars['String']['input']>;
  latestPrice_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestPrice_lt?: InputMaybe<Scalars['String']['input']>;
  latestPrice_lte?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_contains?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  latestPrice_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestPrice_starts_with?: InputMaybe<Scalars['String']['input']>;
  latestPrice_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  latestUSDPrice?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPriceTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestUSDPriceTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  latestUSDPriceTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  latestUSDPrice_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  latestUSDPrice_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  latestUSDPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalBalanceNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapCount?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSwapCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSwapCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolumeNotional?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeNotional_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Token_OrderBy {
  Address = 'address',
  Decimals = 'decimals',
  FxOracleDecimals = 'fxOracleDecimals',
  Id = 'id',
  LatestFxPrice = 'latestFXPrice',
  LatestPrice = 'latestPrice',
  LatestPriceAsset = 'latestPrice__asset',
  LatestPriceBlock = 'latestPrice__block',
  LatestPriceId = 'latestPrice__id',
  LatestPricePrice = 'latestPrice__price',
  LatestPricePricingAsset = 'latestPrice__pricingAsset',
  LatestUsdPrice = 'latestUSDPrice',
  LatestUsdPriceTimestamp = 'latestUSDPriceTimestamp',
  Name = 'name',
  Pool = 'pool',
  PoolAddress = 'pool__address',
  PoolAlpha = 'pool__alpha',
  PoolAmp = 'pool__amp',
  PoolBaseToken = 'pool__baseToken',
  PoolBeta = 'pool__beta',
  PoolC = 'pool__c',
  PoolCreateTime = 'pool__createTime',
  PoolDSq = 'pool__dSq',
  PoolDelta = 'pool__delta',
  PoolEpsilon = 'pool__epsilon',
  PoolExpiryTime = 'pool__expiryTime',
  PoolFactory = 'pool__factory',
  PoolHoldersCount = 'pool__holdersCount',
  PoolId = 'pool__id',
  PoolIsInRecoveryMode = 'pool__isInRecoveryMode',
  PoolIsPaused = 'pool__isPaused',
  PoolJoinExitEnabled = 'pool__joinExitEnabled',
  PoolLambda = 'pool__lambda',
  PoolLastJoinExitAmp = 'pool__lastJoinExitAmp',
  PoolLastPostJoinExitInvariant = 'pool__lastPostJoinExitInvariant',
  PoolLowerTarget = 'pool__lowerTarget',
  PoolMainIndex = 'pool__mainIndex',
  PoolManagementAumFee = 'pool__managementAumFee',
  PoolManagementFee = 'pool__managementFee',
  PoolMustAllowlistLPs = 'pool__mustAllowlistLPs',
  PoolName = 'pool__name',
  PoolOfficialPool = 'pool__officialPool',
  PoolOfficialPoolWeight = 'pool__officialPoolWeight',
  PoolOracleEnabled = 'pool__oracleEnabled',
  PoolOwner = 'pool__owner',
  PoolPoolType = 'pool__poolType',
  PoolPoolTypeVersion = 'pool__poolTypeVersion',
  PoolPrincipalToken = 'pool__principalToken',
  PoolProtocolAumFeeCache = 'pool__protocolAumFeeCache',
  PoolProtocolId = 'pool__protocolId',
  PoolProtocolSwapFeeCache = 'pool__protocolSwapFeeCache',
  PoolProtocolYieldFeeCache = 'pool__protocolYieldFeeCache',
  PoolRoot3Alpha = 'pool__root3Alpha',
  PoolS = 'pool__s',
  PoolSqrtAlpha = 'pool__sqrtAlpha',
  PoolSqrtBeta = 'pool__sqrtBeta',
  PoolStrategyType = 'pool__strategyType',
  PoolSwapEnabled = 'pool__swapEnabled',
  PoolSwapFee = 'pool__swapFee',
  PoolSwapsCount = 'pool__swapsCount',
  PoolSymbol = 'pool__symbol',
  PoolTauAlphaX = 'pool__tauAlphaX',
  PoolTauAlphaY = 'pool__tauAlphaY',
  PoolTauBetaX = 'pool__tauBetaX',
  PoolTauBetaY = 'pool__tauBetaY',
  PoolTotalAumFeeCollectedInBpt = 'pool__totalAumFeeCollectedInBPT',
  PoolTotalLiquidity = 'pool__totalLiquidity',
  PoolTotalProtocolFee = 'pool__totalProtocolFee',
  PoolTotalProtocolFeePaidInBpt = 'pool__totalProtocolFeePaidInBPT',
  PoolTotalShares = 'pool__totalShares',
  PoolTotalSwapFee = 'pool__totalSwapFee',
  PoolTotalSwapVolume = 'pool__totalSwapVolume',
  PoolTotalWeight = 'pool__totalWeight',
  PoolTx = 'pool__tx',
  PoolU = 'pool__u',
  PoolUnitSeconds = 'pool__unitSeconds',
  PoolUpperTarget = 'pool__upperTarget',
  PoolV = 'pool__v',
  PoolW = 'pool__w',
  PoolWrappedIndex = 'pool__wrappedIndex',
  PoolZ = 'pool__z',
  Symbol = 'symbol',
  TotalBalanceNotional = 'totalBalanceNotional',
  TotalBalanceUsd = 'totalBalanceUSD',
  TotalSwapCount = 'totalSwapCount',
  TotalVolumeNotional = 'totalVolumeNotional',
  TotalVolumeUsd = 'totalVolumeUSD'
}

export type TradePair = {
  __typename?: 'TradePair';
  /** Token Address - Token Address */
  id: Scalars['ID']['output'];
  token0: Token;
  token1: Token;
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
};

export type TradePairSnapshot = {
  __typename?: 'TradePairSnapshot';
  id: Scalars['ID']['output'];
  pair: TradePair;
  timestamp: Scalars['Int']['output'];
  totalSwapFee: Scalars['BigDecimal']['output'];
  totalSwapVolume: Scalars['BigDecimal']['output'];
};

export type TradePairSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradePairSnapshot_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TradePairSnapshot_Filter>>>;
  pair?: InputMaybe<Scalars['String']['input']>;
  pair_?: InputMaybe<TradePair_Filter>;
  pair_contains?: InputMaybe<Scalars['String']['input']>;
  pair_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_gt?: InputMaybe<Scalars['String']['input']>;
  pair_gte?: InputMaybe<Scalars['String']['input']>;
  pair_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_lt?: InputMaybe<Scalars['String']['input']>;
  pair_lte?: InputMaybe<Scalars['String']['input']>;
  pair_not?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains?: InputMaybe<Scalars['String']['input']>;
  pair_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pair_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with?: InputMaybe<Scalars['String']['input']>;
  pair_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TradePairSnapshot_OrderBy {
  Id = 'id',
  Pair = 'pair',
  PairId = 'pair__id',
  PairTotalSwapFee = 'pair__totalSwapFee',
  PairTotalSwapVolume = 'pair__totalSwapVolume',
  Timestamp = 'timestamp',
  TotalSwapFee = 'totalSwapFee',
  TotalSwapVolume = 'totalSwapVolume'
}

export type TradePair_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TradePair_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TradePair_Filter>>>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSwapFee?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapFee_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSwapVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSwapVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TradePair_OrderBy {
  Id = 'id',
  Token0 = 'token0',
  Token0Address = 'token0__address',
  Token0Decimals = 'token0__decimals',
  Token0FxOracleDecimals = 'token0__fxOracleDecimals',
  Token0Id = 'token0__id',
  Token0LatestFxPrice = 'token0__latestFXPrice',
  Token0LatestUsdPrice = 'token0__latestUSDPrice',
  Token0LatestUsdPriceTimestamp = 'token0__latestUSDPriceTimestamp',
  Token0Name = 'token0__name',
  Token0Symbol = 'token0__symbol',
  Token0TotalBalanceNotional = 'token0__totalBalanceNotional',
  Token0TotalBalanceUsd = 'token0__totalBalanceUSD',
  Token0TotalSwapCount = 'token0__totalSwapCount',
  Token0TotalVolumeNotional = 'token0__totalVolumeNotional',
  Token0TotalVolumeUsd = 'token0__totalVolumeUSD',
  Token1 = 'token1',
  Token1Address = 'token1__address',
  Token1Decimals = 'token1__decimals',
  Token1FxOracleDecimals = 'token1__fxOracleDecimals',
  Token1Id = 'token1__id',
  Token1LatestFxPrice = 'token1__latestFXPrice',
  Token1LatestUsdPrice = 'token1__latestUSDPrice',
  Token1LatestUsdPriceTimestamp = 'token1__latestUSDPriceTimestamp',
  Token1Name = 'token1__name',
  Token1Symbol = 'token1__symbol',
  Token1TotalBalanceNotional = 'token1__totalBalanceNotional',
  Token1TotalBalanceUsd = 'token1__totalBalanceUSD',
  Token1TotalSwapCount = 'token1__totalSwapCount',
  Token1TotalVolumeNotional = 'token1__totalVolumeNotional',
  Token1TotalVolumeUsd = 'token1__totalVolumeUSD',
  TotalSwapFee = 'totalSwapFee',
  TotalSwapVolume = 'totalSwapVolume'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  sharesOwned?: Maybe<Array<PoolShare>>;
  swaps?: Maybe<Array<Swap>>;
  userInternalBalances?: Maybe<Array<UserInternalBalance>>;
};


export type UserSharesOwnedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolShare_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolShare_Filter>;
};


export type UserSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Swap_Filter>;
};


export type UserUserInternalBalancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserInternalBalance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserInternalBalance_Filter>;
};

export type UserClaimedLpRewardDistribution = {
  __typename?: 'UserClaimedLPRewardDistribution';
  id: Scalars['ID']['output'];
  snapshots: Array<Scalars['BigInt']['output']>;
  totalAmountOfClaimedToken: Scalars['BigInt']['output'];
};

export type UserClaimedLpRewardDistribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserClaimedLpRewardDistribution_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UserClaimedLpRewardDistribution_Filter>>>;
  snapshots?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountOfClaimedToken?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountOfClaimedToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountOfClaimedToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountOfClaimedToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalAmountOfClaimedToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountOfClaimedToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountOfClaimedToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalAmountOfClaimedToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum UserClaimedLpRewardDistribution_OrderBy {
  Id = 'id',
  Snapshots = 'snapshots',
  TotalAmountOfClaimedToken = 'totalAmountOfClaimedToken'
}

export type UserClaimedStakingRewardDistribution = {
  __typename?: 'UserClaimedStakingRewardDistribution';
  claimedTokens: Array<TokenClaimed>;
  id: Scalars['ID']['output'];
  snapshots: Array<Scalars['BigInt']['output']>;
};


export type UserClaimedStakingRewardDistributionClaimedTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenClaimed_Filter>;
};

export type UserClaimedStakingRewardDistribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserClaimedStakingRewardDistribution_Filter>>>;
  claimedTokens_?: InputMaybe<TokenClaimed_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UserClaimedStakingRewardDistribution_Filter>>>;
  snapshots?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  snapshots_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum UserClaimedStakingRewardDistribution_OrderBy {
  ClaimedTokens = 'claimedTokens',
  Id = 'id',
  Snapshots = 'snapshots'
}

export type UserInternalBalance = {
  __typename?: 'UserInternalBalance';
  balance: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['Bytes']['output'];
  tokenInfo?: Maybe<Token>;
  userAddress?: Maybe<User>;
};

export type UserInternalBalance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserInternalBalance_Filter>>>;
  balance?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UserInternalBalance_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  tokenInfo?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_?: InputMaybe<Token_Filter>;
  tokenInfo_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_gt?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_gte?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInfo_lt?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_lte?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenInfo_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenInfo_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  userAddress?: InputMaybe<Scalars['String']['input']>;
  userAddress_?: InputMaybe<User_Filter>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_not?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  userAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum UserInternalBalance_OrderBy {
  Balance = 'balance',
  Id = 'id',
  Token = 'token',
  TokenInfo = 'tokenInfo',
  TokenInfoAddress = 'tokenInfo__address',
  TokenInfoDecimals = 'tokenInfo__decimals',
  TokenInfoFxOracleDecimals = 'tokenInfo__fxOracleDecimals',
  TokenInfoId = 'tokenInfo__id',
  TokenInfoLatestFxPrice = 'tokenInfo__latestFXPrice',
  TokenInfoLatestUsdPrice = 'tokenInfo__latestUSDPrice',
  TokenInfoLatestUsdPriceTimestamp = 'tokenInfo__latestUSDPriceTimestamp',
  TokenInfoName = 'tokenInfo__name',
  TokenInfoSymbol = 'tokenInfo__symbol',
  TokenInfoTotalBalanceNotional = 'tokenInfo__totalBalanceNotional',
  TokenInfoTotalBalanceUsd = 'tokenInfo__totalBalanceUSD',
  TokenInfoTotalSwapCount = 'tokenInfo__totalSwapCount',
  TokenInfoTotalVolumeNotional = 'tokenInfo__totalVolumeNotional',
  TokenInfoTotalVolumeUsd = 'tokenInfo__totalVolumeUSD',
  UserAddress = 'userAddress',
  UserAddressId = 'userAddress__id'
}

export type UserLpRewardDistributionMetaData = {
  __typename?: 'UserLPRewardDistributionMetaData';
  address: Scalars['Bytes']['output'];
  epoch: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ipfsCid: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
};

export type UserLpRewardDistributionMetaData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<UserLpRewardDistributionMetaData_Filter>>>;
  epoch?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ipfsCid?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<UserLpRewardDistributionMetaData_Filter>>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum UserLpRewardDistributionMetaData_OrderBy {
  Address = 'address',
  Epoch = 'epoch',
  Id = 'id',
  IpfsCid = 'ipfsCid',
  Value = 'value'
}

export type UserStakingRewardDistributionMetaData = {
  __typename?: 'UserStakingRewardDistributionMetaData';
  address: Scalars['Bytes']['output'];
  epoch: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  ipfsCid: Scalars['String']['output'];
  value: Scalars['BigInt']['output'];
};

export type UserStakingRewardDistributionMetaData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<UserStakingRewardDistributionMetaData_Filter>>>;
  epoch?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ipfsCid?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_gte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_lt?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_lte?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  ipfsCid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with?: InputMaybe<Scalars['String']['input']>;
  ipfsCid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<UserStakingRewardDistributionMetaData_Filter>>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum UserStakingRewardDistributionMetaData_OrderBy {
  Address = 'address',
  Epoch = 'epoch',
  Id = 'id',
  IpfsCid = 'ipfsCid',
  Value = 'value'
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  sharesOwned_?: InputMaybe<PoolShare_Filter>;
  swaps_?: InputMaybe<Swap_Filter>;
  userInternalBalances_?: InputMaybe<UserInternalBalance_Filter>;
};

export enum User_OrderBy {
  Id = 'id',
  SharesOwned = 'sharesOwned',
  Swaps = 'swaps',
  UserInternalBalances = 'userInternalBalances'
}

export type VestedLiquidity = {
  __typename?: 'VestedLiquidity';
  amount: Scalars['BigInt']['output'];
  beneficiary: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type VestedLiquidity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VestedLiquidity_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VestedLiquidity_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VestedLiquidity_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Id = 'id',
  Timestamp = 'timestamp'
}

export type VestedStaking = {
  __typename?: 'VestedStaking';
  amount: Scalars['BigInt']['output'];
  beneficiary: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type VestedStaking_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VestedStaking_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VestedStaking_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VestedStaking_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Id = 'id',
  Timestamp = 'timestamp'
}

export type VestingLiquidityClaimed = {
  __typename?: 'VestingLiquidityClaimed';
  amount: Scalars['BigInt']['output'];
  beneficiary: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type VestingLiquidityClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VestingLiquidityClaimed_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VestingLiquidityClaimed_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VestingLiquidityClaimed_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Id = 'id',
  Timestamp = 'timestamp'
}

export type VestingStakingClaimed = {
  __typename?: 'VestingStakingClaimed';
  amount: Scalars['BigInt']['output'];
  beneficiary: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
};

export type VestingStakingClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<VestingStakingClaimed_Filter>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<VestingStakingClaimed_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum VestingStakingClaimed_OrderBy {
  Amount = 'amount',
  Beneficiary = 'beneficiary',
  Id = 'id',
  Timestamp = 'timestamp'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetPoolsQueryQueryVariables = Exact<{
  where: Pool_Filter;
  blockNumber: Scalars['Int']['input'];
}>;


export type GetPoolsQueryQuery = { __typename?: 'Query', pools: Array<{ __typename?: 'Pool', id: string, address: any, officialPoolWeight?: any | null }> };

export type GetPoolsSharesQueryQueryVariables = Exact<{
  where: Pool_Filter;
  blockNumber: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
}>;


export type GetPoolsSharesQueryQuery = { __typename?: 'Query', pools: Array<{ __typename?: 'Pool', totalShares: any, shares?: Array<{ __typename?: 'PoolShare', userAddress: { __typename?: 'User', id: string } }> | null }> };

export type GetTotalAlocationPerEpochQueryQueryVariables = Exact<{
  where: TokenMint_Filter;
}>;


export type GetTotalAlocationPerEpochQueryQuery = { __typename?: 'Query', tokenMints: Array<{ __typename?: 'TokenMint', amount: any, timestamp: any }> };


export const GetPoolsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pool_filter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"createTime"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"block"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockNumber"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"officialPoolWeight"}}]}}]}}]} as unknown as DocumentNode<GetPoolsQueryQuery, GetPoolsQueryQueryVariables>;
export const GetPoolsSharesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPoolsSharesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pool_filter"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"blockNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pools"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"createTime"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"asc"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"block"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"number"},"value":{"kind":"Variable","name":{"kind":"Name","value":"blockNumber"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shares"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"balance"}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"EnumValue","value":"desc"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalShares"}}]}}]}}]} as unknown as DocumentNode<GetPoolsSharesQueryQuery, GetPoolsSharesQueryQueryVariables>;
export const GetTotalAlocationPerEpochQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTotalAlocationPerEpochQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenMint_filter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenMints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<GetTotalAlocationPerEpochQueryQuery, GetTotalAlocationPerEpochQueryQueryVariables>;