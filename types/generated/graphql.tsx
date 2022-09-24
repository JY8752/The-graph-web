import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Approval = {
  __typename?: 'Approval';
  approved: Scalars['Bytes'];
  id: Scalars['ID'];
  owner: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
};

export type ApprovalForAll = {
  __typename?: 'ApprovalForAll';
  approved: Scalars['Boolean'];
  id: Scalars['ID'];
  operator: Scalars['Bytes'];
  owner: Scalars['Bytes'];
};

export type ApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  approved?: InputMaybe<Scalars['Boolean']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  approved_not?: InputMaybe<Scalars['Boolean']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  operator?: InputMaybe<Scalars['Bytes']>;
  operator_contains?: InputMaybe<Scalars['Bytes']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  operator_not?: InputMaybe<Scalars['Bytes']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum ApprovalForAll_OrderBy {
  Approved = 'approved',
  Id = 'id',
  Operator = 'operator',
  Owner = 'owner'
}

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  approved?: InputMaybe<Scalars['Bytes']>;
  approved_contains?: InputMaybe<Scalars['Bytes']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']>>;
  approved_not?: InputMaybe<Scalars['Bytes']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Approval_OrderBy {
  Approved = 'approved',
  Id = 'id',
  Owner = 'owner',
  TokenId = 'tokenId'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type MetaTransactionExecuted = {
  __typename?: 'MetaTransactionExecuted';
  functionSignature: Scalars['Bytes'];
  id: Scalars['ID'];
  relayerAddress: Scalars['Bytes'];
  userAddress: Scalars['Bytes'];
};

export type MetaTransactionExecuted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  functionSignature?: InputMaybe<Scalars['Bytes']>;
  functionSignature_contains?: InputMaybe<Scalars['Bytes']>;
  functionSignature_in?: InputMaybe<Array<Scalars['Bytes']>>;
  functionSignature_not?: InputMaybe<Scalars['Bytes']>;
  functionSignature_not_contains?: InputMaybe<Scalars['Bytes']>;
  functionSignature_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  relayerAddress?: InputMaybe<Scalars['Bytes']>;
  relayerAddress_contains?: InputMaybe<Scalars['Bytes']>;
  relayerAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  relayerAddress_not?: InputMaybe<Scalars['Bytes']>;
  relayerAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  relayerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userAddress?: InputMaybe<Scalars['Bytes']>;
  userAddress_contains?: InputMaybe<Scalars['Bytes']>;
  userAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userAddress_not?: InputMaybe<Scalars['Bytes']>;
  userAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  userAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum MetaTransactionExecuted_OrderBy {
  FunctionSignature = 'functionSignature',
  Id = 'id',
  RelayerAddress = 'relayerAddress',
  UserAddress = 'userAddress'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnershipTransferred = {
  __typename?: 'OwnershipTransferred';
  id: Scalars['ID'];
  newOwner: Scalars['Bytes'];
  previousOwner: Scalars['Bytes'];
};

export type OwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newOwner?: InputMaybe<Scalars['Bytes']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  newOwner_not?: InputMaybe<Scalars['Bytes']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousOwner?: InputMaybe<Scalars['Bytes']>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum OwnershipTransferred_OrderBy {
  Id = 'id',
  NewOwner = 'newOwner',
  PreviousOwner = 'previousOwner'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  metaTransactionExecuted?: Maybe<MetaTransactionExecuted>;
  metaTransactionExecuteds: Array<MetaTransactionExecuted>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type QueryApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type QueryMetaTransactionExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMetaTransactionExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaTransactionExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetaTransactionExecuted_Filter>;
};


export type QueryOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  metaTransactionExecuted?: Maybe<MetaTransactionExecuted>;
  metaTransactionExecuteds: Array<MetaTransactionExecuted>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type SubscriptionApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type SubscriptionMetaTransactionExecutedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMetaTransactionExecutedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaTransactionExecuted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetaTransactionExecuted_Filter>;
};


export type SubscriptionOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type Transfer = {
  __typename?: 'Transfer';
  artisticVocation?: Maybe<Scalars['String']>;
  catOrDogPerson?: Maybe<Scalars['String']>;
  characteristics?: Maybe<Scalars['String']>;
  from: Scalars['Bytes'];
  id: Scalars['ID'];
  idealVacation?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  personality?: Maybe<Scalars['String']>;
  relationshipStatus?: Maybe<Scalars['String']>;
  to: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
  workStyle?: Maybe<Scalars['String']>;
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  artisticVocation?: InputMaybe<Scalars['String']>;
  artisticVocation_contains?: InputMaybe<Scalars['String']>;
  artisticVocation_contains_nocase?: InputMaybe<Scalars['String']>;
  artisticVocation_ends_with?: InputMaybe<Scalars['String']>;
  artisticVocation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  artisticVocation_gt?: InputMaybe<Scalars['String']>;
  artisticVocation_gte?: InputMaybe<Scalars['String']>;
  artisticVocation_in?: InputMaybe<Array<Scalars['String']>>;
  artisticVocation_lt?: InputMaybe<Scalars['String']>;
  artisticVocation_lte?: InputMaybe<Scalars['String']>;
  artisticVocation_not?: InputMaybe<Scalars['String']>;
  artisticVocation_not_contains?: InputMaybe<Scalars['String']>;
  artisticVocation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  artisticVocation_not_ends_with?: InputMaybe<Scalars['String']>;
  artisticVocation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  artisticVocation_not_in?: InputMaybe<Array<Scalars['String']>>;
  artisticVocation_not_starts_with?: InputMaybe<Scalars['String']>;
  artisticVocation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  artisticVocation_starts_with?: InputMaybe<Scalars['String']>;
  artisticVocation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  catOrDogPerson?: InputMaybe<Scalars['String']>;
  catOrDogPerson_contains?: InputMaybe<Scalars['String']>;
  catOrDogPerson_contains_nocase?: InputMaybe<Scalars['String']>;
  catOrDogPerson_ends_with?: InputMaybe<Scalars['String']>;
  catOrDogPerson_ends_with_nocase?: InputMaybe<Scalars['String']>;
  catOrDogPerson_gt?: InputMaybe<Scalars['String']>;
  catOrDogPerson_gte?: InputMaybe<Scalars['String']>;
  catOrDogPerson_in?: InputMaybe<Array<Scalars['String']>>;
  catOrDogPerson_lt?: InputMaybe<Scalars['String']>;
  catOrDogPerson_lte?: InputMaybe<Scalars['String']>;
  catOrDogPerson_not?: InputMaybe<Scalars['String']>;
  catOrDogPerson_not_contains?: InputMaybe<Scalars['String']>;
  catOrDogPerson_not_contains_nocase?: InputMaybe<Scalars['String']>;
  catOrDogPerson_not_ends_with?: InputMaybe<Scalars['String']>;
  catOrDogPerson_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  catOrDogPerson_not_in?: InputMaybe<Array<Scalars['String']>>;
  catOrDogPerson_not_starts_with?: InputMaybe<Scalars['String']>;
  catOrDogPerson_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  catOrDogPerson_starts_with?: InputMaybe<Scalars['String']>;
  catOrDogPerson_starts_with_nocase?: InputMaybe<Scalars['String']>;
  characteristics?: InputMaybe<Scalars['String']>;
  characteristics_contains?: InputMaybe<Scalars['String']>;
  characteristics_contains_nocase?: InputMaybe<Scalars['String']>;
  characteristics_ends_with?: InputMaybe<Scalars['String']>;
  characteristics_ends_with_nocase?: InputMaybe<Scalars['String']>;
  characteristics_gt?: InputMaybe<Scalars['String']>;
  characteristics_gte?: InputMaybe<Scalars['String']>;
  characteristics_in?: InputMaybe<Array<Scalars['String']>>;
  characteristics_lt?: InputMaybe<Scalars['String']>;
  characteristics_lte?: InputMaybe<Scalars['String']>;
  characteristics_not?: InputMaybe<Scalars['String']>;
  characteristics_not_contains?: InputMaybe<Scalars['String']>;
  characteristics_not_contains_nocase?: InputMaybe<Scalars['String']>;
  characteristics_not_ends_with?: InputMaybe<Scalars['String']>;
  characteristics_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  characteristics_not_in?: InputMaybe<Array<Scalars['String']>>;
  characteristics_not_starts_with?: InputMaybe<Scalars['String']>;
  characteristics_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  characteristics_starts_with?: InputMaybe<Scalars['String']>;
  characteristics_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Bytes']>;
  from_contains?: InputMaybe<Scalars['Bytes']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']>>;
  from_not?: InputMaybe<Scalars['Bytes']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  idealVacation?: InputMaybe<Scalars['String']>;
  idealVacation_contains?: InputMaybe<Scalars['String']>;
  idealVacation_contains_nocase?: InputMaybe<Scalars['String']>;
  idealVacation_ends_with?: InputMaybe<Scalars['String']>;
  idealVacation_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idealVacation_gt?: InputMaybe<Scalars['String']>;
  idealVacation_gte?: InputMaybe<Scalars['String']>;
  idealVacation_in?: InputMaybe<Array<Scalars['String']>>;
  idealVacation_lt?: InputMaybe<Scalars['String']>;
  idealVacation_lte?: InputMaybe<Scalars['String']>;
  idealVacation_not?: InputMaybe<Scalars['String']>;
  idealVacation_not_contains?: InputMaybe<Scalars['String']>;
  idealVacation_not_contains_nocase?: InputMaybe<Scalars['String']>;
  idealVacation_not_ends_with?: InputMaybe<Scalars['String']>;
  idealVacation_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  idealVacation_not_in?: InputMaybe<Array<Scalars['String']>>;
  idealVacation_not_starts_with?: InputMaybe<Scalars['String']>;
  idealVacation_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  idealVacation_starts_with?: InputMaybe<Scalars['String']>;
  idealVacation_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_contains_nocase?: InputMaybe<Scalars['String']>;
  image_ends_with?: InputMaybe<Scalars['String']>;
  image_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_contains_nocase?: InputMaybe<Scalars['String']>;
  image_not_ends_with?: InputMaybe<Scalars['String']>;
  image_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_starts_with?: InputMaybe<Scalars['String']>;
  image_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  image_starts_with?: InputMaybe<Scalars['String']>;
  image_starts_with_nocase?: InputMaybe<Scalars['String']>;
  personality?: InputMaybe<Scalars['String']>;
  personality_contains?: InputMaybe<Scalars['String']>;
  personality_contains_nocase?: InputMaybe<Scalars['String']>;
  personality_ends_with?: InputMaybe<Scalars['String']>;
  personality_ends_with_nocase?: InputMaybe<Scalars['String']>;
  personality_gt?: InputMaybe<Scalars['String']>;
  personality_gte?: InputMaybe<Scalars['String']>;
  personality_in?: InputMaybe<Array<Scalars['String']>>;
  personality_lt?: InputMaybe<Scalars['String']>;
  personality_lte?: InputMaybe<Scalars['String']>;
  personality_not?: InputMaybe<Scalars['String']>;
  personality_not_contains?: InputMaybe<Scalars['String']>;
  personality_not_contains_nocase?: InputMaybe<Scalars['String']>;
  personality_not_ends_with?: InputMaybe<Scalars['String']>;
  personality_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  personality_not_in?: InputMaybe<Array<Scalars['String']>>;
  personality_not_starts_with?: InputMaybe<Scalars['String']>;
  personality_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  personality_starts_with?: InputMaybe<Scalars['String']>;
  personality_starts_with_nocase?: InputMaybe<Scalars['String']>;
  relationshipStatus?: InputMaybe<Scalars['String']>;
  relationshipStatus_contains?: InputMaybe<Scalars['String']>;
  relationshipStatus_contains_nocase?: InputMaybe<Scalars['String']>;
  relationshipStatus_ends_with?: InputMaybe<Scalars['String']>;
  relationshipStatus_ends_with_nocase?: InputMaybe<Scalars['String']>;
  relationshipStatus_gt?: InputMaybe<Scalars['String']>;
  relationshipStatus_gte?: InputMaybe<Scalars['String']>;
  relationshipStatus_in?: InputMaybe<Array<Scalars['String']>>;
  relationshipStatus_lt?: InputMaybe<Scalars['String']>;
  relationshipStatus_lte?: InputMaybe<Scalars['String']>;
  relationshipStatus_not?: InputMaybe<Scalars['String']>;
  relationshipStatus_not_contains?: InputMaybe<Scalars['String']>;
  relationshipStatus_not_contains_nocase?: InputMaybe<Scalars['String']>;
  relationshipStatus_not_ends_with?: InputMaybe<Scalars['String']>;
  relationshipStatus_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  relationshipStatus_not_in?: InputMaybe<Array<Scalars['String']>>;
  relationshipStatus_not_starts_with?: InputMaybe<Scalars['String']>;
  relationshipStatus_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  relationshipStatus_starts_with?: InputMaybe<Scalars['String']>;
  relationshipStatus_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Bytes']>;
  to_contains?: InputMaybe<Scalars['Bytes']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']>>;
  to_not?: InputMaybe<Scalars['Bytes']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  workStyle?: InputMaybe<Scalars['String']>;
  workStyle_contains?: InputMaybe<Scalars['String']>;
  workStyle_contains_nocase?: InputMaybe<Scalars['String']>;
  workStyle_ends_with?: InputMaybe<Scalars['String']>;
  workStyle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workStyle_gt?: InputMaybe<Scalars['String']>;
  workStyle_gte?: InputMaybe<Scalars['String']>;
  workStyle_in?: InputMaybe<Array<Scalars['String']>>;
  workStyle_lt?: InputMaybe<Scalars['String']>;
  workStyle_lte?: InputMaybe<Scalars['String']>;
  workStyle_not?: InputMaybe<Scalars['String']>;
  workStyle_not_contains?: InputMaybe<Scalars['String']>;
  workStyle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  workStyle_not_ends_with?: InputMaybe<Scalars['String']>;
  workStyle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  workStyle_not_in?: InputMaybe<Array<Scalars['String']>>;
  workStyle_not_starts_with?: InputMaybe<Scalars['String']>;
  workStyle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  workStyle_starts_with?: InputMaybe<Scalars['String']>;
  workStyle_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Transfer_OrderBy {
  ArtisticVocation = 'artisticVocation',
  CatOrDogPerson = 'catOrDogPerson',
  Characteristics = 'characteristics',
  From = 'from',
  Id = 'id',
  IdealVacation = 'idealVacation',
  Image = 'image',
  Personality = 'personality',
  RelationshipStatus = 'relationshipStatus',
  To = 'to',
  TokenId = 'tokenId',
  WorkStyle = 'workStyle'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
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
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetTransfersQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type GetTransfersQuery = { __typename?: 'Query', transfers: Array<{ __typename?: 'Transfer', id: string, from: any, to: any, tokenId: any, image: string, personality?: string | null, characteristics?: string | null, catOrDogPerson?: string | null, relationshipStatus?: string | null, idealVacation?: string | null, artisticVocation?: string | null, workStyle?: string | null }> };


export const GetTransfersDocument = gql`
    query GetTransfers($first: Int!) {
  transfers(first: $first) {
    id
    from
    to
    tokenId
    image
    personality
    characteristics
    catOrDogPerson
    relationshipStatus
    idealVacation
    artisticVocation
    workStyle
  }
}
    `;

/**
 * __useGetTransfersQuery__
 *
 * To run a query within a React component, call `useGetTransfersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransfersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransfersQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetTransfersQuery(baseOptions: Apollo.QueryHookOptions<GetTransfersQuery, GetTransfersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransfersQuery, GetTransfersQueryVariables>(GetTransfersDocument, options);
      }
export function useGetTransfersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransfersQuery, GetTransfersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransfersQuery, GetTransfersQueryVariables>(GetTransfersDocument, options);
        }
export type GetTransfersQueryHookResult = ReturnType<typeof useGetTransfersQuery>;
export type GetTransfersLazyQueryHookResult = ReturnType<typeof useGetTransfersLazyQuery>;
export type GetTransfersQueryResult = Apollo.QueryResult<GetTransfersQuery, GetTransfersQueryVariables>;