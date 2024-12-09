import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
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
  JSON: { input: any; output: any; }
};

export type IBalanceKeyInput = {
  cross_chain_user?: InputMaybe<ICrossChainUserInput>;
  token_id?: InputMaybe<Scalars['String']['input']>;
};

export type ICrossChainUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  chain_uid?: InputMaybe<Scalars['String']['input']>;
};

export type ICrossChainUserWithLimitInput = {
  limit?: InputMaybe<Scalars['String']['input']>;
  user: ICrossChainUserInput;
};

export type INextSwapPair = {
  token_in: Scalars['String']['input'];
  token_out: Scalars['String']['input'];
};

export type IPairInput = {
  token_1?: InputMaybe<Scalars['String']['input']>;
  token_2?: InputMaybe<Scalars['String']['input']>;
};

export type IRawQueryInput = {
  rawQuery: Scalars['JSON']['input'];
};

export type ISmartQueryInput = {
  contract_address: Scalars['String']['input'];
  msg: Scalars['JSON']['input'];
};

export type IVlps = {
  vlp_address?: InputMaybe<Scalars['String']['input']>;
};

export type ICodegenGeneratedChainsAllChainsQueryVariables = Exact<{
  chains_all_chains_show_all_chains?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedChainsAllChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_chains: Array<{ __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, logo: string }> } };

export type ICodegenGeneratedChainsChainConfigQueryVariables = Exact<{
  chains_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsChainConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', chain_config: { __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, logo: string } } };

export type ICodegenGeneratedChainsContractsQueryVariables = Exact<{
  chains_contracts_chainUId?: InputMaybe<Scalars['String']['input']>;
  chains_contracts_type?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsContractsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', contracts: Array<{ __typename?: 'Contract', ChainUID: string, ContractAddress: string, Type: string }> } };

export type ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string } } } };

export type ICodegenGeneratedChainsKeplrConfigBip44QueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigBip44Query = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', bip44: { __typename?: 'Bip44', coinType: number } } } };

export type ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigCurrenciesQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', currencies: Array<{ __typename?: 'Currencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string }> } } };

export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', feeCurrencies: Array<{ __typename?: 'FeeCurrencies', gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number } }> } } };

export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', feeCurrencies: Array<{ __typename?: 'FeeCurrencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number } }> } } };

export type ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigGaspricestepQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number } } } };

export type ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', stakeCurrency: { __typename?: 'StakeCurrency', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string } } } };

export type ICodegenGeneratedChainsKeplrConfigQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', chainID: string, chainName: string, coinType: number, explorer_url: string, features: Array<string>, rest: string, rpc: string, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string }, bip44: { __typename?: 'Bip44', coinType: number }, currencies: Array<{ __typename?: 'Currencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string }>, feeCurrencies: Array<{ __typename?: 'FeeCurrencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number } }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, low: number }, stakeCurrency: { __typename?: 'StakeCurrency', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string } } } };

export type ICodegenGeneratedChainsRouterConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsRouterConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', router_config: { __typename?: 'RouterConfig', chain_uid: string, contract_address: string, explorer_url: string, logo: string, type: string } } };

export type ICodegenGeneratedChainsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', router_config: { __typename?: 'RouterConfig', chain_uid: string, contract_address: string, explorer_url: string, logo: string, type: string } } };

export type ICodegenGeneratedCwBalanceQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  contract: Scalars['String']['input'];
  cw_balance_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedCwBalanceQuery = { __typename?: 'Query', cw: { __typename?: 'Cw', balance: { __typename?: 'Balance', balance: string } } };

export type ICodegenGeneratedCwTokenInfoQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedCwTokenInfoQuery = { __typename?: 'Query', cw: { __typename?: 'Cw', token_info: { __typename?: 'TokenInfo', decimals: number, name: string, symbol: string, total_supply: string } } };

export type ICodegenGeneratedCwQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedCwQuery = { __typename?: 'Query', cw: { __typename?: 'Cw', token_info: { __typename?: 'TokenInfo', decimals: number, name: string, symbol: string, total_supply: string } } };

export type ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>;


export type ICodegenGeneratedCwMulticallRawQueriesResultsQuery = { __typename?: 'Query', cw_multicall: { __typename?: 'MultiQuery', raw_queries: { __typename?: 'RawQueryResponse', results: Array<{ __typename?: 'ResultAndError', error: string, success: any }> } } };

export type ICodegenGeneratedCwMulticallRawQueriesQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>;


export type ICodegenGeneratedCwMulticallRawQueriesQuery = { __typename?: 'Query', cw_multicall: { __typename?: 'MultiQuery', raw_queries: { __typename?: 'RawQueryResponse', results: Array<{ __typename?: 'ResultAndError', error: string, success: any }> } } };

export type ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>;


export type ICodegenGeneratedCwMulticallSmartQueriesResultsQuery = { __typename?: 'Query', cw_multicall: { __typename?: 'MultiQuery', smart_queries: { __typename?: 'RawQueryResponse', results: Array<{ __typename?: 'ResultAndError', error: string, success: any }> } } };

export type ICodegenGeneratedCwMulticallSmartQueriesQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>;


export type ICodegenGeneratedCwMulticallSmartQueriesQuery = { __typename?: 'Query', cw_multicall: { __typename?: 'MultiQuery', smart_queries: { __typename?: 'RawQueryResponse', results: Array<{ __typename?: 'ResultAndError', error: string, success: any }> } } };

export type ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllPoolsPaginationQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllPoolsPoolsPairQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', pools: Array<{ __typename?: 'PairsInPool', pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllPoolsPoolsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', pools: Array<{ __typename?: 'PairsInPool', vlp: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedFactoryAllPoolsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllPoolsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number }, pools: Array<{ __typename?: 'PairsInPool', vlp: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedFactoryAllTokensPaginationQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_tokens_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllTokensPaginationQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_tokens: { __typename?: 'AllTokens', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedFactoryAllTokensQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_tokens_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllTokensQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_tokens: { __typename?: 'AllTokens', tokens: Array<string>, pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedFactoryAllowedDenomsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_allowed_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedFactoryAllowedDenomsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', allowed_denoms: Array<{ __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any }> } };

export type ICodegenGeneratedFactoryEscrowQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_escrow_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedFactoryEscrowQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', escrow: { __typename?: 'EscrowResponse', escrow_address: string, denoms: Array<{ __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any }> } } };

export type ICodegenGeneratedFactoryGetLptokenAddressQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_get_LpToken_address_vlp_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryGetLptokenAddressQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', get_LpToken_address: { __typename?: 'LpTokenAddr', token_address: string } } };

export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', total: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', total: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryPartnerFeesCollectedQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', total: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedFactoryStateQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryStateQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', state: { __typename?: 'ContractStateOfFactory', admin: string, chain_uid: string, hub_channel: string, router_contract: string } } };

export type ICodegenGeneratedFactoryVlpQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedFactoryVlpQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', vlp: string } };

export type ICodegenGeneratedFactoryQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', total: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } }, state: { __typename?: 'ContractStateOfFactory', admin: string, chain_uid: string, hub_channel: string, router_contract: string } } };

export type ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolFeesCollectedBreakdownQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', fees_collected: { __typename?: 'FeesResponse', breakdown: Array<{ __typename?: 'FeeBreakdown', token1: string, token2: string, total_fee: number }> } } };

export type ICodegenGeneratedPoolFeesCollectedQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolFeesCollectedQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', fees_collected: { __typename?: 'FeesResponse', total_overall: number, breakdown: Array<{ __typename?: 'FeeBreakdown', token1: string, token2: string, total_fee: number }> } } };

export type ICodegenGeneratedPoolMyPoolsPairQueryVariables = Exact<{
  pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
  pool_my_pools_user_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedPoolMyPoolsPairQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', my_pools: Array<{ __typename?: 'MyPools', pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } };

export type ICodegenGeneratedPoolMyPoolsUserQueryVariables = Exact<{
  pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
  pool_my_pools_user_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedPoolMyPoolsUserQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', my_pools: Array<{ __typename?: 'MyPools', user: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }> } };

export type ICodegenGeneratedPoolMyPoolsQueryVariables = Exact<{
  pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
  pool_my_pools_user_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedPoolMyPoolsQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', my_pools: Array<{ __typename?: 'MyPools', height: string, vlp: string, pair: { __typename?: 'Pair', token_1: string, token_2: string }, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }> } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', apr: string, total_liquidity: string, vlp: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number }, results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', apr: string, total_liquidity: string, vlp: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', volume: { __typename?: 'VolumeResponse', volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', pair: string, volume: string }> } } };

export type ICodegenGeneratedPoolVolumeQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolVolumeQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', volume: { __typename?: 'VolumeResponse', total_liquidity: string, total_volume: string, volume_24hours: string, volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', pair: string, volume: string }> } } };

export type ICodegenGeneratedPoolQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', fees_collected: { __typename?: 'FeesResponse', total_overall: number, breakdown: Array<{ __typename?: 'FeeBreakdown', token1: string, token2: string, total_fee: number }> }, volume: { __typename?: 'VolumeResponse', total_liquidity: string, total_volume: string, volume_24hours: string, volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', pair: string, volume: string }> } } };

export type ICodegenGeneratedRouterAllChainsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedRouterAllChainsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_chains: Array<{ __typename?: 'Chain', chain_id: string, chain_uid: string, factory_address: string }> } };

export type ICodegenGeneratedRouterAllEscrowsQueryVariables = Exact<{
  router_all_escrows_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_escrows_max?: InputMaybe<Scalars['String']['input']>;
  router_all_escrows_min?: InputMaybe<Scalars['String']['input']>;
  router_all_escrows_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllEscrowsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_escrows: Array<{ __typename?: 'AllEscrowsResponse', balance: string, chain_uid: string, token: string }> } };

export type ICodegenGeneratedRouterAllTokensQueryVariables = Exact<{
  router_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_tokens_max?: InputMaybe<Scalars['String']['input']>;
  router_all_tokens_min?: InputMaybe<Scalars['String']['input']>;
  router_all_tokens_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllTokensQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_tokens: { __typename?: 'TokenArray', tokens: Array<string> } } };

export type ICodegenGeneratedRouterAllVlpsVlpsQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsVlpsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', vlps: Array<{ __typename?: 'VlpWithTokenPair', token_1: string, token_2: string, vlp: string }> } } };

export type ICodegenGeneratedRouterAllVlpsQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', vlps: Array<{ __typename?: 'VlpWithTokenPair', token_1: string, token_2: string, vlp: string }> } } };

export type ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainChainChainTypeIbcQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain: { __typename?: 'ChainAndFactoryInfo', chain_type: { __typename?: 'ChainType', ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string } } } } } };

export type ICodegenGeneratedRouterChainChainChainTypeQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainChainChainTypeQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain: { __typename?: 'ChainAndFactoryInfo', chain_type: { __typename?: 'ChainType', ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string } } } } } };

export type ICodegenGeneratedRouterChainChainQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainChainQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain: { __typename?: 'ChainAndFactoryInfo', factory: string, factory_chain_id: string, chain_type: { __typename?: 'ChainType', ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string } } } } } };

export type ICodegenGeneratedRouterChainQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain_uid: string, chain: { __typename?: 'ChainAndFactoryInfo', factory: string, factory_chain_id: string, chain_type: { __typename?: 'ChainType', ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string } } } } } };

export type ICodegenGeneratedRouterEscrowsQueryVariables = Exact<{
  router_escrows_limit?: InputMaybe<Scalars['Int']['input']>;
  router_escrows_max?: InputMaybe<Scalars['String']['input']>;
  router_escrows_min?: InputMaybe<Scalars['String']['input']>;
  router_escrows_skip?: InputMaybe<Scalars['Int']['input']>;
  router_escrows_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterEscrowsQuery = { __typename?: 'Query', router: { __typename?: 'Router', escrows: Array<{ __typename?: 'Escrow', balance: string, chain_id: string, chain_uid: string }> } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', release_amounts: Array<{ __typename?: 'ReleaseAmounts', cross_chain_user: { __typename?: 'CrossChainUserWithLimit', user: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } }> } } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', release_amounts: Array<{ __typename?: 'ReleaseAmounts', cross_chain_user: { __typename?: 'CrossChainUserWithLimit', limit: string, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } }> } } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', release_amounts: Array<{ __typename?: 'ReleaseAmounts', amount: string, cross_chain_user: { __typename?: 'CrossChainUserWithLimit', limit: string, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } }> } } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', remaining_amount: string, release_amounts: Array<{ __typename?: 'ReleaseAmounts', amount: string, cross_chain_user: { __typename?: 'CrossChainUserWithLimit', limit: string, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } }> } } };

export type ICodegenGeneratedRouterSimulateSwapQueryVariables = Exact<{
  router_simulate_swap_amount_in: Scalars['String']['input'];
  router_simulate_swap_asset_in: Scalars['String']['input'];
  router_simulate_swap_asset_out: Scalars['String']['input'];
  router_simulate_swap_min_amount_out: Scalars['String']['input'];
  router_simulate_swap_swaps?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type ICodegenGeneratedRouterSimulateSwapQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_swap: { __typename?: 'TokenOut', amount_out: string, asset_out: string } } };

export type ICodegenGeneratedRouterStateQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedRouterStateQuery = { __typename?: 'Query', router: { __typename?: 'Router', state: { __typename?: 'ContractStateOfRouter', admin: string, virtual_balance_address: string, vlp_code_id: number } } };

export type ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables = Exact<{
  router_token_pairs_from_vlp_vlp: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenPairsFromVlpQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_pairs_from_vlp: { __typename?: 'VlpWithTokenPair', token_1: string, token_2: string, vlp: string } } };

export type ICodegenGeneratedRouterVlpQueryVariables = Exact<{
  router_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedRouterVlpQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp: { __typename?: 'VlpWithTokenPair', token_1: string, token_2: string, vlp: string } } };

export type ICodegenGeneratedRouterQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedRouterQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_chains: Array<{ __typename?: 'Chain', chain_id: string, chain_uid: string, factory_address: string }>, state: { __typename?: 'ContractStateOfRouter', admin: string, virtual_balance_address: string, vlp_code_id: number } } };

export type ICodegenGeneratedTokenGetAllFaucetsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedTokenGetAllFaucetsQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', get_all_faucets: Array<{ __typename?: 'Faucet', faucet_link: string, token: string }> } };

export type ICodegenGeneratedTokenTokenLiquiditiesQueryVariables = Exact<{
  token_token_liquidities_limit: Scalars['Int']['input'];
  token_token_liquidities_page: Scalars['Int']['input'];
}>;


export type ICodegenGeneratedTokenTokenLiquiditiesQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_liquidities: Array<{ __typename?: 'TokenLiquidity', token: string, total_liquidity: string, total_volume: string }> } };

export type ICodegenGeneratedTokenTokenLiquidityQueryVariables = Exact<{
  token_token_liquidity_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTokenTokenLiquidityQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_liquidity: { __typename?: 'TokenLiquidity', token: string, total_liquidity: string, total_volume: string } } };

export type ICodegenGeneratedTokenTokenMetadataByIdQueryVariables = Exact<{
  token_token_metadata_by_id_chain_uid?: InputMaybe<Scalars['String']['input']>;
  token_token_metadata_by_id_dex?: InputMaybe<Scalars['String']['input']>;
  token_token_metadata_by_id_token_id: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTokenTokenMetadataByIdQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_metadata_by_id: { __typename?: 'Metadata', coinDecimal: number, description: string, dex: string, displayName: string, image: string, price: string, tokenId: string } } };

export type ICodegenGeneratedTokenTokenMetadatasQueryVariables = Exact<{
  token_token_metadatas_chain_uid?: InputMaybe<Scalars['String']['input']>;
  token_token_metadatas_dex?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  token_token_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
  token_token_metadatas_offset?: InputMaybe<Scalars['Int']['input']>;
  token_token_metadatas_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedTokenTokenMetadatasQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_metadatas: Array<{ __typename?: 'Metadata', coinDecimal: number, description: string, dex: string, displayName: string, image: string, price: string, tokenId: string }> } };

export type ICodegenGeneratedTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedTokenQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', get_all_faucets: Array<{ __typename?: 'Faucet', faucet_link: string, token: string }> } };

export type ICodegenGeneratedVcoinBalanceQueryVariables = Exact<{
  vcoin_balance_balance_key?: InputMaybe<IBalanceKeyInput>;
}>;


export type ICodegenGeneratedVcoinBalanceQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', balance: { __typename?: 'VcoinBalance', amount: string } } };

export type ICodegenGeneratedVcoinStateQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedVcoinStateQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', state: { __typename?: 'ContractStateOfVcoin', admin: string, router: string } } };

export type ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables = Exact<{
  vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>;


export type ICodegenGeneratedVcoinUserBalanceBalancesQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', user_balance: { __typename?: 'VcoinBalanceResponse', balances: Array<{ __typename?: 'VcoinBalanceUserResponse', amount: string, token_id: string }> } } };

export type ICodegenGeneratedVcoinUserBalanceQueryVariables = Exact<{
  vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>;


export type ICodegenGeneratedVcoinUserBalanceQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', user_balance: { __typename?: 'VcoinBalanceResponse', balances: Array<{ __typename?: 'VcoinBalanceUserResponse', amount: string, token_id: string }> } } };

export type ICodegenGeneratedVcoinQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedVcoinQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', state: { __typename?: 'ContractStateOfVcoin', admin: string, router: string } } };

export type ICodegenGeneratedVlpAllPoolsPaginationQueryVariables = Exact<{
  contract: Scalars['String']['input'];
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPaginationQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables = Exact<{
  contract: Scalars['String']['input'];
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsPoolQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } }> } } };

export type ICodegenGeneratedVlpAllPoolsPoolsQueryVariables = Exact<{
  contract: Scalars['String']['input'];
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', chain_uid: string, pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } }> } } };

export type ICodegenGeneratedVlpAllPoolsQueryVariables = Exact<{
  contract: Scalars['String']['input'];
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number }, pools: Array<{ __typename?: 'Pools', chain_uid: string, pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } }> } } };

export type ICodegenGeneratedVlpFeeRecipientQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpFeeRecipientQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } };

export type ICodegenGeneratedVlpFeeQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpFeeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } };

export type ICodegenGeneratedVlpLiquidityPairQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpLiquidityPairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', liquidity: { __typename?: 'Liquidity', pair: { __typename?: 'Pair', token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpLiquidityQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpLiquidityQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', liquidity: { __typename?: 'Liquidity', token_1_reserve: string, token_2_reserve: string, total_lp_tokens: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpPoolQueryVariables = Exact<{
  contract: Scalars['String']['input'];
  vlp_pool_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPoolQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } } };

export type ICodegenGeneratedVlpStateFeeRecipientQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpStateFeeRecipientQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', fee: { __typename?: 'FeeInfo', recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } } };

export type ICodegenGeneratedVlpStateFeeQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpStateFeeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } } };

export type ICodegenGeneratedVlpStatePairQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpStatePairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pair: { __typename?: 'Pair', token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpStateQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpStateQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', admin: string, last_updated: number, router: string, total_lp_tokens: string, vcoin: string, fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }, pair: { __typename?: 'Pair', token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> }, lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables = Exact<{
  contract: Scalars['String']['input'];
  vlp_total_fees_collected_per_denom_denom: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected_per_denom: { __typename?: 'TotalFeesPerDenomResponse', euclid_fees: string, lp_fees: string } } };

export type ICodegenGeneratedVlpQueryVariables = Exact<{
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }, liquidity: { __typename?: 'Liquidity', token_1_reserve: string, token_2_reserve: string, total_lp_tokens: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }, state: { __typename?: 'ContractStateOfVlp', admin: string, last_updated: number, router: string, total_lp_tokens: string, vcoin: string, fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }, pair: { __typename?: 'Pair', token_1: string, token_2: string } }, total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> }, lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };


export const CodegenGeneratedChainsAllChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_CHAINS($chains_all_chains_show_all_chains: Boolean) {
  chains {
    all_chains(show_all_chains: $chains_all_chains_show_all_chains) {
      chain_id
      chain_uid
      display_name
      explorer_url
      factory_address
      logo
    }
  }
}
    `;
export const CodegenGeneratedChainsChainConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG($chains_chain_config_chain_id: String, $chains_chain_config_chain_uid: String) {
  chains {
    chain_config(
      chain_id: $chains_chain_config_chain_id
      chain_uid: $chains_chain_config_chain_uid
    ) {
      chain_id
      chain_uid
      display_name
      explorer_url
      factory_address
      logo
    }
  }
}
    `;
export const CodegenGeneratedChainsContractsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_CONTRACTS($chains_contracts_chainUId: String, $chains_contracts_type: String) {
  chains {
    contracts(chainUId: $chains_contracts_chainUId, type: $chains_contracts_type) {
      ChainUID
      ContractAddress
      Type
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigBech32ConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BECH32CONFIG($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigBip44Document = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BIP44($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      bip44 {
        coinType
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigCurrenciesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_CURRENCIES($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      currencies {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES_GASPRICESTEP($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      feeCurrencies {
        gasPriceStep {
          average
          high
          low
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
        gasPriceStep {
          average
          high
          low
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigGaspricestepDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_GASPRICESTEP($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      gasPriceStep {
        average
        high
        low
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigStakecurrencyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_STAKECURRENCY($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsKeplrConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG($chains_keplr_config_chain_id: String, $chains_keplr_config_chain_uid: String) {
  chains {
    keplr_config(
      chain_id: $chains_keplr_config_chain_id
      chain_uid: $chains_keplr_config_chain_uid
    ) {
      bech32Config {
        bech32PrefixAccAddr
        bech32PrefixAccPub
        bech32PrefixConsAddr
        bech32PrefixConsPub
        bech32PrefixValAddr
        bech32PrefixValPub
      }
      bip44 {
        coinType
      }
      chainID
      chainName
      coinType
      currencies {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
      }
      explorer_url
      features
      feeCurrencies {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
        gasPriceStep {
          average
          high
          low
        }
      }
      gasPriceStep {
        average
        high
        low
      }
      rest
      rpc
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsRouterConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ROUTER_CONFIG {
  chains {
    router_config {
      chain_uid
      contract_address
      explorer_url
      logo
      type
    }
  }
}
    `;
export const CodegenGeneratedChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS {
  chains {
    router_config {
      chain_uid
      contract_address
      explorer_url
      logo
      type
    }
  }
}
    `;
export const CodegenGeneratedCwBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_BALANCE($chain_uid: String!, $contract: String!, $cw_balance_address: String!) {
  cw(chain_uid: $chain_uid, contract: $contract) {
    balance(address: $cw_balance_address) {
      balance
    }
  }
}
    `;
export const CodegenGeneratedCwTokenInfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_TOKEN_INFO($chain_uid: String!, $contract: String!) {
  cw(chain_uid: $chain_uid, contract: $contract) {
    token_info {
      decimals
      name
      symbol
      total_supply
    }
  }
}
    `;
export const CodegenGeneratedCwDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW($chain_uid: String!, $contract: String!) {
  cw(chain_uid: $chain_uid, contract: $contract) {
    token_info {
      decimals
      name
      symbol
      total_supply
    }
  }
}
    `;
export const CodegenGeneratedCwMulticallRawQueriesResultsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES_RESULTS($chain_uid: String!, $cw_multicall_raw_queries_queries: [RawQueryInput!]!) {
  cw_multicall(chain_uid: $chain_uid) {
    raw_queries(queries: $cw_multicall_raw_queries_queries) {
      results {
        error
        success
      }
    }
  }
}
    `;
export const CodegenGeneratedCwMulticallRawQueriesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES($chain_uid: String!, $cw_multicall_raw_queries_queries: [RawQueryInput!]!) {
  cw_multicall(chain_uid: $chain_uid) {
    raw_queries(queries: $cw_multicall_raw_queries_queries) {
      results {
        error
        success
      }
    }
  }
}
    `;
export const CodegenGeneratedCwMulticallSmartQueriesResultsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES_RESULTS($chain_uid: String!, $cw_multicall_smart_queries_queries: [SmartQueryInput!]!) {
  cw_multicall(chain_uid: $chain_uid) {
    smart_queries(queries: $cw_multicall_smart_queries_queries) {
      results {
        error
        success
      }
    }
  }
}
    `;
export const CodegenGeneratedCwMulticallSmartQueriesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES($chain_uid: String!, $cw_multicall_smart_queries_queries: [SmartQueryInput!]!) {
  cw_multicall(chain_uid: $chain_uid) {
    smart_queries(queries: $cw_multicall_smart_queries_queries) {
      results {
        error
        success
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryAllPoolsPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ALL_POOLS_PAGINATION($chain_uid: String!, $factory_all_pools_limit: Int, $factory_all_pools_offset: Int) {
  factory(chain_uid: $chain_uid) {
    all_pools(limit: $factory_all_pools_limit, offset: $factory_all_pools_offset) {
      pagination {
        limit
        offset
        total_count
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryAllPoolsPoolsPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS_PAIR($chain_uid: String!, $factory_all_pools_limit: Int, $factory_all_pools_offset: Int) {
  factory(chain_uid: $chain_uid) {
    all_pools(limit: $factory_all_pools_limit, offset: $factory_all_pools_offset) {
      pools {
        pair {
          token_1
          token_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryAllPoolsPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS($chain_uid: String!, $factory_all_pools_limit: Int, $factory_all_pools_offset: Int) {
  factory(chain_uid: $chain_uid) {
    all_pools(limit: $factory_all_pools_limit, offset: $factory_all_pools_offset) {
      pools {
        pair {
          token_1
          token_2
        }
        vlp
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryAllPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ALL_POOLS($chain_uid: String!, $factory_all_pools_limit: Int, $factory_all_pools_offset: Int) {
  factory(chain_uid: $chain_uid) {
    all_pools(limit: $factory_all_pools_limit, offset: $factory_all_pools_offset) {
      pagination {
        limit
        offset
        total_count
      }
      pools {
        pair {
          token_1
          token_2
        }
        vlp
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryAllTokensPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ALL_TOKENS_PAGINATION($chain_uid: String!, $factory_all_tokens_limit: Int, $factory_all_tokens_offset: Int) {
  factory(chain_uid: $chain_uid) {
    all_tokens(limit: $factory_all_tokens_limit, offset: $factory_all_tokens_offset) {
      pagination {
        limit
        offset
        total_count
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryAllTokensDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ALL_TOKENS($chain_uid: String!, $factory_all_tokens_limit: Int, $factory_all_tokens_offset: Int) {
  factory(chain_uid: $chain_uid) {
    all_tokens(limit: $factory_all_tokens_limit, offset: $factory_all_tokens_offset) {
      pagination {
        limit
        offset
        total_count
      }
      tokens
    }
  }
}
    `;
export const CodegenGeneratedFactoryAllowedDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ALLOWED_DENOMS($chain_uid: String!, $factory_allowed_denoms_token_id: String) {
  factory(chain_uid: $chain_uid) {
    allowed_denoms(token_id: $factory_allowed_denoms_token_id) {
      ... on NativeTokenType {
        native {
          denom
        }
      }
      ... on SmartTokenType {
        smart {
          contract_address
        }
      }
      ... on VoucherTokenType {
        voucher
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryEscrowDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_ESCROW($chain_uid: String!, $factory_escrow_token_id: String) {
  factory(chain_uid: $chain_uid) {
    escrow(token_id: $factory_escrow_token_id) {
      denoms {
        ... on NativeTokenType {
          native {
            denom
          }
        }
        ... on SmartTokenType {
          smart {
            contract_address
          }
        }
        ... on VoucherTokenType {
          voucher
        }
      }
      escrow_address
    }
  }
}
    `;
export const CodegenGeneratedFactoryGetLptokenAddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS($chain_uid: String!, $factory_get_LpToken_address_vlp_address: String!) {
  factory(chain_uid: $chain_uid) {
    get_LpToken_address(vlp_address: $factory_get_LpToken_address_vlp_address) {
      token_address
    }
  }
}
    `;
export const CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL_TOTALS($chain_uid: String!) {
  factory(chain_uid: $chain_uid) {
    partner_fees_collected {
      total {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL($chain_uid: String!) {
  factory(chain_uid: $chain_uid) {
    partner_fees_collected {
      total {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryPartnerFeesCollectedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED($chain_uid: String!) {
  factory(chain_uid: $chain_uid) {
    partner_fees_collected {
      total {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_STATE($chain_uid: String!) {
  factory(chain_uid: $chain_uid) {
    state {
      admin
      chain_uid
      hub_channel
      router_contract
    }
  }
}
    `;
export const CodegenGeneratedFactoryVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_VLP($chain_uid: String!, $factory_vlp_pair: PairInput) {
  factory(chain_uid: $chain_uid) {
    vlp(pair: $factory_vlp_pair)
  }
}
    `;
export const CodegenGeneratedFactoryDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY($chain_uid: String!) {
  factory(chain_uid: $chain_uid) {
    partner_fees_collected {
      total {
        totals {
          amount
          denom
        }
      }
    }
    state {
      admin
      chain_uid
      hub_channel
      router_contract
    }
  }
}
    `;
export const CodegenGeneratedPoolFeesCollectedBreakdownDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_FEES_COLLECTED_BREAKDOWN {
  pool {
    fees_collected {
      breakdown {
        token1
        token2
        total_fee
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolFeesCollectedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_FEES_COLLECTED {
  pool {
    fees_collected {
      breakdown {
        token1
        token2
        total_fee
      }
      total_overall
    }
  }
}
    `;
export const CodegenGeneratedPoolMyPoolsPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_MY_POOLS_PAIR($pool_my_pools_chain_uid: String, $pool_my_pools_user_address: String!) {
  pool {
    my_pools(
      chain_uid: $pool_my_pools_chain_uid
      user_address: $pool_my_pools_user_address
    ) {
      pair {
        token_1
        token_2
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolMyPoolsUserDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_MY_POOLS_USER($pool_my_pools_chain_uid: String, $pool_my_pools_user_address: String!) {
  pool {
    my_pools(
      chain_uid: $pool_my_pools_chain_uid
      user_address: $pool_my_pools_user_address
    ) {
      user {
        address
        chain_uid
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolMyPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_MY_POOLS($pool_my_pools_chain_uid: String, $pool_my_pools_user_address: String!) {
  pool {
    my_pools(
      chain_uid: $pool_my_pools_chain_uid
      user_address: $pool_my_pools_user_address
    ) {
      height
      pair {
        token_1
        token_2
      }
      user {
        address
        chain_uid
      }
      vlp
    }
  }
}
    `;
export const CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      token: $pool_token_pair_with_liquidity_token
    ) {
      pagination {
        limit
        offset
        total_count
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      token: $pool_token_pair_with_liquidity_token
    ) {
      results {
        pair {
          token_1
          token_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      token: $pool_token_pair_with_liquidity_token
    ) {
      results {
        apr
        pair {
          token_1
          token_2
        }
        total_liquidity
        vlp
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolTokenPairWithLiquidityDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      token: $pool_token_pair_with_liquidity_token
    ) {
      pagination {
        limit
        offset
        total_count
      }
      results {
        apr
        pair {
          token_1
          token_2
        }
        total_liquidity
        vlp
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_VOLUME_VOLUME_BREAKDOWN_24HOURS {
  pool {
    volume {
      volume_breakdown_24hours {
        pair
        volume
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolVolumeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_VOLUME {
  pool {
    volume {
      total_liquidity
      total_volume
      volume_24hours
      volume_breakdown_24hours {
        pair
        volume
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL {
  pool {
    fees_collected {
      breakdown {
        token1
        token2
        total_fee
      }
      total_overall
    }
    volume {
      total_liquidity
      total_volume
      volume_24hours
      volume_breakdown_24hours {
        pair
        volume
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterAllChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_CHAINS {
  router {
    all_chains {
      chain_id
      chain_uid
      factory_address
    }
  }
}
    `;
export const CodegenGeneratedRouterAllEscrowsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_ESCROWS($router_all_escrows_limit: Int, $router_all_escrows_max: String, $router_all_escrows_min: String, $router_all_escrows_skip: Int) {
  router {
    all_escrows(
      limit: $router_all_escrows_limit
      max: $router_all_escrows_max
      min: $router_all_escrows_min
      skip: $router_all_escrows_skip
    ) {
      balance
      chain_uid
      token
    }
  }
}
    `;
export const CodegenGeneratedRouterAllTokensDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_TOKENS($router_all_tokens_limit: Int, $router_all_tokens_max: String, $router_all_tokens_min: String, $router_all_tokens_skip: Int) {
  router {
    all_tokens(
      limit: $router_all_tokens_limit
      max: $router_all_tokens_max
      min: $router_all_tokens_min
      skip: $router_all_tokens_skip
    ) {
      tokens
    }
  }
}
    `;
export const CodegenGeneratedRouterAllVlpsVlpsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS($router_all_vlps_limit: Int, $router_all_vlps_max: [String], $router_all_vlps_min: [String], $router_all_vlps_skip: Int) {
  router {
    all_vlps(
      limit: $router_all_vlps_limit
      max: $router_all_vlps_max
      min: $router_all_vlps_min
      skip: $router_all_vlps_skip
    ) {
      vlps {
        token_1
        token_2
        vlp
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterAllVlpsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_VLPS($router_all_vlps_limit: Int, $router_all_vlps_max: [String], $router_all_vlps_min: [String], $router_all_vlps_skip: Int) {
  router {
    all_vlps(
      limit: $router_all_vlps_limit
      max: $router_all_vlps_max
      min: $router_all_vlps_min
      skip: $router_all_vlps_skip
    ) {
      vlps {
        token_1
        token_2
        vlp
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterChainChainChainTypeIbcDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE_IBC($router_chain_chain_uid: String!) {
  router {
    chain(chain_uid: $router_chain_chain_uid) {
      chain {
        chain_type {
          ibc {
            from_factory_channel
            from_hub_channel
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterChainChainChainTypeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE($router_chain_chain_uid: String!) {
  router {
    chain(chain_uid: $router_chain_chain_uid) {
      chain {
        chain_type {
          ibc {
            from_factory_channel
            from_hub_channel
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterChainChainDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN($router_chain_chain_uid: String!) {
  router {
    chain(chain_uid: $router_chain_chain_uid) {
      chain {
        chain_type {
          ibc {
            from_factory_channel
            from_hub_channel
          }
        }
        factory
        factory_chain_id
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterChainDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_CHAIN($router_chain_chain_uid: String!) {
  router {
    chain(chain_uid: $router_chain_chain_uid) {
      chain {
        chain_type {
          ibc {
            from_factory_channel
            from_hub_channel
          }
        }
        factory
        factory_chain_id
      }
      chain_uid
    }
  }
}
    `;
export const CodegenGeneratedRouterEscrowsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ESCROWS($router_escrows_limit: Int, $router_escrows_max: String, $router_escrows_min: String, $router_escrows_skip: Int, $router_escrows_token: String!) {
  router {
    escrows(
      limit: $router_escrows_limit
      max: $router_escrows_max
      min: $router_escrows_min
      skip: $router_escrows_skip
      token: $router_escrows_token
    ) {
      balance
      chain_id
      chain_uid
    }
  }
}
    `;
export const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER_USER($router_simulate_release_escrow_amount: Int, $router_simulate_release_escrow_cross_chain_addresses: [CrossChainUserWithLimitInput], $router_simulate_release_escrow_token: String!) {
  router {
    simulate_release_escrow(
      amount: $router_simulate_release_escrow_amount
      cross_chain_addresses: $router_simulate_release_escrow_cross_chain_addresses
      token: $router_simulate_release_escrow_token
    ) {
      release_amounts {
        cross_chain_user {
          user {
            address
            chain_uid
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER($router_simulate_release_escrow_amount: Int, $router_simulate_release_escrow_cross_chain_addresses: [CrossChainUserWithLimitInput], $router_simulate_release_escrow_token: String!) {
  router {
    simulate_release_escrow(
      amount: $router_simulate_release_escrow_amount
      cross_chain_addresses: $router_simulate_release_escrow_cross_chain_addresses
      token: $router_simulate_release_escrow_token
    ) {
      release_amounts {
        cross_chain_user {
          limit
          user {
            address
            chain_uid
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS($router_simulate_release_escrow_amount: Int, $router_simulate_release_escrow_cross_chain_addresses: [CrossChainUserWithLimitInput], $router_simulate_release_escrow_token: String!) {
  router {
    simulate_release_escrow(
      amount: $router_simulate_release_escrow_amount
      cross_chain_addresses: $router_simulate_release_escrow_cross_chain_addresses
      token: $router_simulate_release_escrow_token
    ) {
      release_amounts {
        amount
        cross_chain_user {
          limit
          user {
            address
            chain_uid
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterSimulateReleaseEscrowDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW($router_simulate_release_escrow_amount: Int, $router_simulate_release_escrow_cross_chain_addresses: [CrossChainUserWithLimitInput], $router_simulate_release_escrow_token: String!) {
  router {
    simulate_release_escrow(
      amount: $router_simulate_release_escrow_amount
      cross_chain_addresses: $router_simulate_release_escrow_cross_chain_addresses
      token: $router_simulate_release_escrow_token
    ) {
      release_amounts {
        amount
        cross_chain_user {
          limit
          user {
            address
            chain_uid
          }
        }
      }
      remaining_amount
    }
  }
}
    `;
export const CodegenGeneratedRouterSimulateSwapDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_SIMULATE_SWAP($router_simulate_swap_amount_in: String!, $router_simulate_swap_asset_in: String!, $router_simulate_swap_asset_out: String!, $router_simulate_swap_min_amount_out: String!, $router_simulate_swap_swaps: [String!]) {
  router {
    simulate_swap(
      amount_in: $router_simulate_swap_amount_in
      asset_in: $router_simulate_swap_asset_in
      asset_out: $router_simulate_swap_asset_out
      min_amount_out: $router_simulate_swap_min_amount_out
      swaps: $router_simulate_swap_swaps
    ) {
      amount_out
      asset_out
    }
  }
}
    `;
export const CodegenGeneratedRouterStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_STATE {
  router {
    state {
      admin
      virtual_balance_address
      vlp_code_id
    }
  }
}
    `;
export const CodegenGeneratedRouterTokenPairsFromVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP($router_token_pairs_from_vlp_vlp: String!) {
  router {
    token_pairs_from_vlp(vlp: $router_token_pairs_from_vlp_vlp) {
      token_1
      token_2
      vlp
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP($router_vlp_pair: PairInput) {
  router {
    vlp(pair: $router_vlp_pair) {
      token_1
      token_2
      vlp
    }
  }
}
    `;
export const CodegenGeneratedRouterDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER {
  router {
    all_chains {
      chain_id
      chain_uid
      factory_address
    }
    state {
      admin
      virtual_balance_address
      vlp_code_id
    }
  }
}
    `;
export const CodegenGeneratedTokenGetAllFaucetsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS {
  token {
    get_all_faucets {
      faucet_link
      token
    }
  }
}
    `;
export const CodegenGeneratedTokenTokenLiquiditiesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITIES($token_token_liquidities_limit: Int!, $token_token_liquidities_page: Int!) {
  token {
    token_liquidities(
      limit: $token_token_liquidities_limit
      page: $token_token_liquidities_page
    ) {
      token
      total_liquidity
      total_volume
    }
  }
}
    `;
export const CodegenGeneratedTokenTokenLiquidityDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITY($token_token_liquidity_token: String!) {
  token {
    token_liquidity(token: $token_token_liquidity_token) {
      token
      total_liquidity
      total_volume
    }
  }
}
    `;
export const CodegenGeneratedTokenTokenMetadataByIdDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID($token_token_metadata_by_id_chain_uid: String, $token_token_metadata_by_id_dex: String, $token_token_metadata_by_id_token_id: String!) {
  token {
    token_metadata_by_id(
      chain_uid: $token_token_metadata_by_id_chain_uid
      dex: $token_token_metadata_by_id_dex
      token_id: $token_token_metadata_by_id_token_id
    ) {
      coinDecimal
      description
      dex
      displayName
      image
      price
      tokenId
    }
  }
}
    `;
export const CodegenGeneratedTokenTokenMetadatasDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS($token_token_metadatas_chain_uid: String, $token_token_metadatas_dex: [String], $token_token_metadatas_limit: Int, $token_token_metadatas_offset: Int, $token_token_metadatas_verified: Boolean) {
  token {
    token_metadatas(
      chain_uid: $token_token_metadatas_chain_uid
      dex: $token_token_metadatas_dex
      limit: $token_token_metadatas_limit
      offset: $token_token_metadatas_offset
      verified: $token_token_metadatas_verified
    ) {
      coinDecimal
      description
      dex
      displayName
      image
      price
      tokenId
    }
  }
}
    `;
export const CodegenGeneratedTokenDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN {
  token {
    get_all_faucets {
      faucet_link
      token
    }
  }
}
    `;
export const CodegenGeneratedVcoinBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_BALANCE($vcoin_balance_balance_key: BalanceKeyInput) {
  vcoin {
    balance(balance_key: $vcoin_balance_balance_key) {
      amount
    }
  }
}
    `;
export const CodegenGeneratedVcoinStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_STATE {
  vcoin {
    state {
      admin
      router
    }
  }
}
    `;
export const CodegenGeneratedVcoinUserBalanceBalancesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_USER_BALANCE_BALANCES($vcoin_user_balance_user: CrossChainUserInput) {
  vcoin {
    user_balance(user: $vcoin_user_balance_user) {
      balances {
        amount
        token_id
      }
    }
  }
}
    `;
export const CodegenGeneratedVcoinUserBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_USER_BALANCE($vcoin_user_balance_user: CrossChainUserInput) {
  vcoin {
    user_balance(user: $vcoin_user_balance_user) {
      balances {
        amount
        token_id
      }
    }
  }
}
    `;
export const CodegenGeneratedVcoinDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN {
  vcoin {
    state {
      admin
      router
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION($contract: String!, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pagination {
        limit
        offset
        total_count
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsPoolDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL($contract: String!, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        pool {
          lp_shares
          reserve_1
          reserve_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS($contract: String!, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        chain_uid
        pool {
          lp_shares
          reserve_1
          reserve_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS($contract: String!, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pagination {
        limit
        offset
        total_count
      }
      pools {
        chain_uid
        pool {
          lp_shares
          reserve_1
          reserve_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpFeeRecipientDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_FEE_RECIPIENT($contract: String!) {
  vlp(contract: $contract) {
    fee {
      recipient {
        address
        chain_uid
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpFeeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_FEE($contract: String!) {
  vlp(contract: $contract) {
    fee {
      euclid_fee_bps
      lp_fee_bps
      recipient {
        address
        chain_uid
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpLiquidityPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR($contract: String!) {
  vlp(contract: $contract) {
    liquidity {
      pair {
        token_1
        token_2
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpLiquidityDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_LIQUIDITY($contract: String!) {
  vlp(contract: $contract) {
    liquidity {
      pair {
        token_1
        token_2
      }
      token_1_reserve
      token_2_reserve
      total_lp_tokens
    }
  }
}
    `;
export const CodegenGeneratedVlpPoolDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POOL($contract: String!, $vlp_pool_chain_uid: String!) {
  vlp(contract: $contract) {
    pool(chain_uid: $vlp_pool_chain_uid) {
      lp_shares
      reserve_1
      reserve_2
    }
  }
}
    `;
export const CodegenGeneratedVlpStateFeeRecipientDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT($contract: String!) {
  vlp(contract: $contract) {
    state {
      fee {
        recipient {
          address
          chain_uid
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStateFeeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_FEE($contract: String!) {
  vlp(contract: $contract) {
    state {
      fee {
        euclid_fee_bps
        lp_fee_bps
        recipient {
          address
          chain_uid
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStatePairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_PAIR($contract: String!) {
  vlp(contract: $contract) {
    state {
      pair {
        token_1
        token_2
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE($contract: String!) {
  vlp(contract: $contract) {
    state {
      admin
      fee {
        euclid_fee_bps
        lp_fee_bps
        recipient {
          address
          chain_uid
        }
      }
      last_updated
      pair {
        token_1
        token_2
      }
      router
      total_lp_tokens
      vcoin
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS($contract: String!) {
  vlp(contract: $contract) {
    total_fees_collected {
      euclid_fees {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES($contract: String!) {
  vlp(contract: $contract) {
    total_fees_collected {
      euclid_fees {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS($contract: String!) {
  vlp(contract: $contract) {
    total_fees_collected {
      lp_fees {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES($contract: String!) {
  vlp(contract: $contract) {
    total_fees_collected {
      lp_fees {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED($contract: String!) {
  vlp(contract: $contract) {
    total_fees_collected {
      euclid_fees {
        totals {
          amount
          denom
        }
      }
      lp_fees {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM($contract: String!, $vlp_total_fees_collected_per_denom_denom: String!) {
  vlp(contract: $contract) {
    total_fees_collected_per_denom(denom: $vlp_total_fees_collected_per_denom_denom) {
      euclid_fees
      lp_fees
    }
  }
}
    `;
export const CodegenGeneratedVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP($contract: String!) {
  vlp(contract: $contract) {
    fee {
      euclid_fee_bps
      lp_fee_bps
      recipient {
        address
        chain_uid
      }
    }
    liquidity {
      pair {
        token_1
        token_2
      }
      token_1_reserve
      token_2_reserve
      total_lp_tokens
    }
    state {
      admin
      fee {
        euclid_fee_bps
        lp_fee_bps
        recipient {
          address
          chain_uid
        }
      }
      last_updated
      pair {
        token_1
        token_2
      }
      router
      total_lp_tokens
      vcoin
    }
    total_fees_collected {
      euclid_fees {
        totals {
          amount
          denom
        }
      }
      lp_fees {
        totals {
          amount
          denom
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CODEGEN_GENERATED_CHAINS_ALL_CHAINS(variables?: ICodegenGeneratedChainsAllChainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsAllChainsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsAllChainsQuery>(CodegenGeneratedChainsAllChainsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_ALL_CHAINS', 'query');
    },
    CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG(variables?: ICodegenGeneratedChainsChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsChainConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsChainConfigQuery>(CodegenGeneratedChainsChainConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG', 'query');
    },
    CODEGEN_GENERATED_CHAINS_CONTRACTS(variables?: ICodegenGeneratedChainsContractsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsContractsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsContractsQuery>(CodegenGeneratedChainsContractsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_CONTRACTS', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BECH32CONFIG(variables?: ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery>(CodegenGeneratedChainsKeplrConfigBech32ConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BECH32CONFIG', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BIP44(variables?: ICodegenGeneratedChainsKeplrConfigBip44QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigBip44Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigBip44Query>(CodegenGeneratedChainsKeplrConfigBip44Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BIP44', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_CURRENCIES(variables?: ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery>(CodegenGeneratedChainsKeplrConfigCurrenciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_CURRENCIES', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES_GASPRICESTEP(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery>(CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES_GASPRICESTEP', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery>(CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_GASPRICESTEP(variables?: ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery>(CodegenGeneratedChainsKeplrConfigGaspricestepDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_GASPRICESTEP', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_STAKECURRENCY(variables?: ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery>(CodegenGeneratedChainsKeplrConfigStakecurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_STAKECURRENCY', 'query');
    },
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG(variables?: ICodegenGeneratedChainsKeplrConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsKeplrConfigQuery>(CodegenGeneratedChainsKeplrConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG', 'query');
    },
    CODEGEN_GENERATED_CHAINS_ROUTER_CONFIG(variables?: ICodegenGeneratedChainsRouterConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsRouterConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsRouterConfigQuery>(CodegenGeneratedChainsRouterConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_ROUTER_CONFIG', 'query');
    },
    CODEGEN_GENERATED_CHAINS(variables?: ICodegenGeneratedChainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsQuery>(CodegenGeneratedChainsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS', 'query');
    },
    CODEGEN_GENERATED_CW_BALANCE(variables: ICodegenGeneratedCwBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwBalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedCwBalanceQuery>(CodegenGeneratedCwBalanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CW_BALANCE', 'query');
    },
    CODEGEN_GENERATED_CW_TOKEN_INFO(variables: ICodegenGeneratedCwTokenInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwTokenInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedCwTokenInfoQuery>(CodegenGeneratedCwTokenInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CW_TOKEN_INFO', 'query');
    },
    CODEGEN_GENERATED_CW(variables: ICodegenGeneratedCwQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedCwQuery>(CodegenGeneratedCwDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CW', 'query');
    },
    CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES_RESULTS(variables: ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallRawQueriesResultsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedCwMulticallRawQueriesResultsQuery>(CodegenGeneratedCwMulticallRawQueriesResultsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES_RESULTS', 'query');
    },
    CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES(variables: ICodegenGeneratedCwMulticallRawQueriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallRawQueriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedCwMulticallRawQueriesQuery>(CodegenGeneratedCwMulticallRawQueriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES', 'query');
    },
    CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES_RESULTS(variables: ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery>(CodegenGeneratedCwMulticallSmartQueriesResultsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES_RESULTS', 'query');
    },
    CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES(variables: ICodegenGeneratedCwMulticallSmartQueriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallSmartQueriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedCwMulticallSmartQueriesQuery>(CodegenGeneratedCwMulticallSmartQueriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ALL_POOLS_PAGINATION(variables: ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryAllPoolsPaginationQuery>(CodegenGeneratedFactoryAllPoolsPaginationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS_PAGINATION', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS_PAIR(variables: ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery>(CodegenGeneratedFactoryAllPoolsPoolsPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS_PAIR', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS(variables: ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryAllPoolsPoolsQuery>(CodegenGeneratedFactoryAllPoolsPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ALL_POOLS(variables: ICodegenGeneratedFactoryAllPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryAllPoolsQuery>(CodegenGeneratedFactoryAllPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ALL_TOKENS_PAGINATION(variables: ICodegenGeneratedFactoryAllTokensPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllTokensPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryAllTokensPaginationQuery>(CodegenGeneratedFactoryAllTokensPaginationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ALL_TOKENS_PAGINATION', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ALL_TOKENS(variables: ICodegenGeneratedFactoryAllTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryAllTokensQuery>(CodegenGeneratedFactoryAllTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ALL_TOKENS', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ALLOWED_DENOMS(variables: ICodegenGeneratedFactoryAllowedDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllowedDenomsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryAllowedDenomsQuery>(CodegenGeneratedFactoryAllowedDenomsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ALLOWED_DENOMS', 'query');
    },
    CODEGEN_GENERATED_FACTORY_ESCROW(variables: ICodegenGeneratedFactoryEscrowQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryEscrowQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryEscrowQuery>(CodegenGeneratedFactoryEscrowDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_ESCROW', 'query');
    },
    CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS(variables: ICodegenGeneratedFactoryGetLptokenAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryGetLptokenAddressQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryGetLptokenAddressQuery>(CodegenGeneratedFactoryGetLptokenAddressDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS', 'query');
    },
    CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL_TOTALS(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery>(CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL_TOTALS', 'query');
    },
    CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery>(CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL', 'query');
    },
    CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED(variables: ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryPartnerFeesCollectedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryPartnerFeesCollectedQuery>(CodegenGeneratedFactoryPartnerFeesCollectedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED', 'query');
    },
    CODEGEN_GENERATED_FACTORY_STATE(variables: ICodegenGeneratedFactoryStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryStateQuery>(CodegenGeneratedFactoryStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_STATE', 'query');
    },
    CODEGEN_GENERATED_FACTORY_VLP(variables: ICodegenGeneratedFactoryVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryVlpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryVlpQuery>(CodegenGeneratedFactoryVlpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_VLP', 'query');
    },
    CODEGEN_GENERATED_FACTORY(variables: ICodegenGeneratedFactoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryQuery>(CodegenGeneratedFactoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY', 'query');
    },
    CODEGEN_GENERATED_POOL_FEES_COLLECTED_BREAKDOWN(variables?: ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolFeesCollectedBreakdownQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolFeesCollectedBreakdownQuery>(CodegenGeneratedPoolFeesCollectedBreakdownDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_FEES_COLLECTED_BREAKDOWN', 'query');
    },
    CODEGEN_GENERATED_POOL_FEES_COLLECTED(variables?: ICodegenGeneratedPoolFeesCollectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolFeesCollectedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolFeesCollectedQuery>(CodegenGeneratedPoolFeesCollectedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_FEES_COLLECTED', 'query');
    },
    CODEGEN_GENERATED_POOL_MY_POOLS_PAIR(variables: ICodegenGeneratedPoolMyPoolsPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolMyPoolsPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolMyPoolsPairQuery>(CodegenGeneratedPoolMyPoolsPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_MY_POOLS_PAIR', 'query');
    },
    CODEGEN_GENERATED_POOL_MY_POOLS_USER(variables: ICodegenGeneratedPoolMyPoolsUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolMyPoolsUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolMyPoolsUserQuery>(CodegenGeneratedPoolMyPoolsUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_MY_POOLS_USER', 'query');
    },
    CODEGEN_GENERATED_POOL_MY_POOLS(variables: ICodegenGeneratedPoolMyPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolMyPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolMyPoolsQuery>(CodegenGeneratedPoolMyPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_MY_POOLS', 'query');
    },
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery>(CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION', 'query');
    },
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery>(CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR', 'query');
    },
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery>(CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS', 'query');
    },
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolTokenPairWithLiquidityQuery>(CodegenGeneratedPoolTokenPairWithLiquidityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY', 'query');
    },
    CODEGEN_GENERATED_POOL_VOLUME_VOLUME_BREAKDOWN_24HOURS(variables?: ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery>(CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_VOLUME_VOLUME_BREAKDOWN_24HOURS', 'query');
    },
    CODEGEN_GENERATED_POOL_VOLUME(variables?: ICodegenGeneratedPoolVolumeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolVolumeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolVolumeQuery>(CodegenGeneratedPoolVolumeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_VOLUME', 'query');
    },
    CODEGEN_GENERATED_POOL(variables?: ICodegenGeneratedPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolQuery>(CodegenGeneratedPoolDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_CHAINS(variables?: ICodegenGeneratedRouterAllChainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllChainsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllChainsQuery>(CodegenGeneratedRouterAllChainsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_CHAINS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_ESCROWS(variables?: ICodegenGeneratedRouterAllEscrowsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllEscrowsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllEscrowsQuery>(CodegenGeneratedRouterAllEscrowsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_ESCROWS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_TOKENS(variables?: ICodegenGeneratedRouterAllTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllTokensQuery>(CodegenGeneratedRouterAllTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_TOKENS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS(variables?: ICodegenGeneratedRouterAllVlpsVlpsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsVlpsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllVlpsVlpsQuery>(CodegenGeneratedRouterAllVlpsVlpsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_VLPS(variables?: ICodegenGeneratedRouterAllVlpsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllVlpsQuery>(CodegenGeneratedRouterAllVlpsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE_IBC(variables: ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainChainChainTypeIbcQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterChainChainChainTypeIbcQuery>(CodegenGeneratedRouterChainChainChainTypeIbcDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE_IBC', 'query');
    },
    CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE(variables: ICodegenGeneratedRouterChainChainChainTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainChainChainTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterChainChainChainTypeQuery>(CodegenGeneratedRouterChainChainChainTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE', 'query');
    },
    CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN(variables: ICodegenGeneratedRouterChainChainQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainChainQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterChainChainQuery>(CodegenGeneratedRouterChainChainDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN', 'query');
    },
    CODEGEN_GENERATED_ROUTER_CHAIN(variables: ICodegenGeneratedRouterChainQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterChainQuery>(CodegenGeneratedRouterChainDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_CHAIN', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ESCROWS(variables: ICodegenGeneratedRouterEscrowsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterEscrowsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterEscrowsQuery>(CodegenGeneratedRouterEscrowsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ESCROWS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER_USER(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER_USER', 'query');
    },
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER', 'query');
    },
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW(variables: ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterSimulateReleaseEscrowQuery>(CodegenGeneratedRouterSimulateReleaseEscrowDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW', 'query');
    },
    CODEGEN_GENERATED_ROUTER_SIMULATE_SWAP(variables: ICodegenGeneratedRouterSimulateSwapQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateSwapQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterSimulateSwapQuery>(CodegenGeneratedRouterSimulateSwapDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_SIMULATE_SWAP', 'query');
    },
    CODEGEN_GENERATED_ROUTER_STATE(variables?: ICodegenGeneratedRouterStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterStateQuery>(CodegenGeneratedRouterStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_STATE', 'query');
    },
    CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP(variables: ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenPairsFromVlpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenPairsFromVlpQuery>(CodegenGeneratedRouterTokenPairsFromVlpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP(variables?: ICodegenGeneratedRouterVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpQuery>(CodegenGeneratedRouterVlpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP', 'query');
    },
    CODEGEN_GENERATED_ROUTER(variables?: ICodegenGeneratedRouterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterQuery>(CodegenGeneratedRouterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER', 'query');
    },
    CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS(variables?: ICodegenGeneratedTokenGetAllFaucetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenGetAllFaucetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenGetAllFaucetsQuery>(CodegenGeneratedTokenGetAllFaucetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS', 'query');
    },
    CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITIES(variables: ICodegenGeneratedTokenTokenLiquiditiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenLiquiditiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenTokenLiquiditiesQuery>(CodegenGeneratedTokenTokenLiquiditiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITIES', 'query');
    },
    CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITY(variables: ICodegenGeneratedTokenTokenLiquidityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenLiquidityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenTokenLiquidityQuery>(CodegenGeneratedTokenTokenLiquidityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITY', 'query');
    },
    CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID(variables: ICodegenGeneratedTokenTokenMetadataByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenMetadataByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenTokenMetadataByIdQuery>(CodegenGeneratedTokenTokenMetadataByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID', 'query');
    },
    CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS(variables?: ICodegenGeneratedTokenTokenMetadatasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenMetadatasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenTokenMetadatasQuery>(CodegenGeneratedTokenTokenMetadatasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS', 'query');
    },
    CODEGEN_GENERATED_TOKEN(variables?: ICodegenGeneratedTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenQuery>(CodegenGeneratedTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN', 'query');
    },
    CODEGEN_GENERATED_VCOIN_BALANCE(variables?: ICodegenGeneratedVcoinBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinBalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVcoinBalanceQuery>(CodegenGeneratedVcoinBalanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VCOIN_BALANCE', 'query');
    },
    CODEGEN_GENERATED_VCOIN_STATE(variables?: ICodegenGeneratedVcoinStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVcoinStateQuery>(CodegenGeneratedVcoinStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VCOIN_STATE', 'query');
    },
    CODEGEN_GENERATED_VCOIN_USER_BALANCE_BALANCES(variables?: ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinUserBalanceBalancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVcoinUserBalanceBalancesQuery>(CodegenGeneratedVcoinUserBalanceBalancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VCOIN_USER_BALANCE_BALANCES', 'query');
    },
    CODEGEN_GENERATED_VCOIN_USER_BALANCE(variables?: ICodegenGeneratedVcoinUserBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinUserBalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVcoinUserBalanceQuery>(CodegenGeneratedVcoinUserBalanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VCOIN_USER_BALANCE', 'query');
    },
    CODEGEN_GENERATED_VCOIN(variables?: ICodegenGeneratedVcoinQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVcoinQuery>(CodegenGeneratedVcoinDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VCOIN', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION(variables: ICodegenGeneratedVlpAllPoolsPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPaginationQuery>(CodegenGeneratedVlpAllPoolsPaginationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL(variables: ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery>(CodegenGeneratedVlpAllPoolsPoolsPoolDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS(variables: ICodegenGeneratedVlpAllPoolsPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsQuery>(CodegenGeneratedVlpAllPoolsPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS(variables: ICodegenGeneratedVlpAllPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsQuery>(CodegenGeneratedVlpAllPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS', 'query');
    },
    CODEGEN_GENERATED_VLP_FEE_RECIPIENT(variables: ICodegenGeneratedVlpFeeRecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpFeeRecipientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpFeeRecipientQuery>(CodegenGeneratedVlpFeeRecipientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_FEE_RECIPIENT', 'query');
    },
    CODEGEN_GENERATED_VLP_FEE(variables: ICodegenGeneratedVlpFeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpFeeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpFeeQuery>(CodegenGeneratedVlpFeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_FEE', 'query');
    },
    CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR(variables: ICodegenGeneratedVlpLiquidityPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpLiquidityPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpLiquidityPairQuery>(CodegenGeneratedVlpLiquidityPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR', 'query');
    },
    CODEGEN_GENERATED_VLP_LIQUIDITY(variables: ICodegenGeneratedVlpLiquidityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpLiquidityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpLiquidityQuery>(CodegenGeneratedVlpLiquidityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_LIQUIDITY', 'query');
    },
    CODEGEN_GENERATED_VLP_POOL(variables: ICodegenGeneratedVlpPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPoolQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpPoolQuery>(CodegenGeneratedVlpPoolDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_POOL', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT(variables: ICodegenGeneratedVlpStateFeeRecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateFeeRecipientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStateFeeRecipientQuery>(CodegenGeneratedVlpStateFeeRecipientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_FEE(variables: ICodegenGeneratedVlpStateFeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateFeeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStateFeeQuery>(CodegenGeneratedVlpStateFeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_FEE', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_PAIR(variables: ICodegenGeneratedVlpStatePairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStatePairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStatePairQuery>(CodegenGeneratedVlpStatePairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_PAIR', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE(variables: ICodegenGeneratedVlpStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStateQuery>(CodegenGeneratedVlpStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS(variables: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES(variables: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS(variables: ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery>(CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES(variables: ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery>(CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED(variables: ICodegenGeneratedVlpTotalFeesCollectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedQuery>(CodegenGeneratedVlpTotalFeesCollectedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM(variables: ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery>(CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM', 'query');
    },
    CODEGEN_GENERATED_VLP(variables: ICodegenGeneratedVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpQuery>(CodegenGeneratedVlpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;