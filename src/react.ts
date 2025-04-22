import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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

export enum ISortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum ITokenPairSortBy {
  CREATED_AT = 'CREATED_AT',
  TOTAL_LIQUIDITY = 'TOTAL_LIQUIDITY'
}

export type IVlps = {
  vlp_address?: InputMaybe<Scalars['String']['input']>;
};

export type ICodegenGeneratedChainsAllChainsQueryVariables = Exact<{
  chains_all_chains_show_all_chains?: InputMaybe<Scalars['Boolean']['input']>;
  chains_all_chains_type?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsAllChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_chains: Array<{ __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, logo: string, type: string }> } };

export type ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', native_currency: { __typename?: 'NativeCurrency', decimals: number, name: string, symbol: string } }> } };

export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string> } } }> } };

export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string> } } }> } };

export type ICodegenGeneratedChainsAllEvmChainsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', chain_id: string, chain_uid: string, explorer_url: string, name: string, native_currency: { __typename?: 'NativeCurrency', decimals: number, name: string, symbol: string }, rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string> } } }> } };

export type ICodegenGeneratedChainsChainConfigQueryVariables = Exact<{
  chains_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsChainConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', chain_config: { __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, logo: string, type: string } } };

export type ICodegenGeneratedChainsContractsQueryVariables = Exact<{
  chains_contracts_chainUId?: InputMaybe<Scalars['String']['input']>;
  chains_contracts_type?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsContractsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', contracts: Array<{ __typename?: 'Contract', ChainUID: string, ContractAddress: string, Type: string }> } };

export type ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', native_currency: { __typename?: 'NativeCurrency', decimals: number, name: string, symbol: string } } } };

export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string> } } } } };

export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string> } } } } };

export type ICodegenGeneratedChainsEvmChainConfigQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', chain_id: string, chain_uid: string, explorer_url: string, name: string, native_currency: { __typename?: 'NativeCurrency', decimals: number, name: string, symbol: string }, rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string> } } } } };

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


export type ICodegenGeneratedChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', chain_id: string, chain_uid: string, explorer_url: string, name: string, native_currency: { __typename?: 'NativeCurrency', decimals: number, name: string, symbol: string }, rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string> } } }>, router_config: { __typename?: 'RouterConfig', chain_uid: string, contract_address: string, explorer_url: string, logo: string, type: string } } };

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
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', apr: string, created_at: string, tags: Array<string>, total_liquidity: string, vlp: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number }, results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', apr: string, created_at: string, tags: Array<string>, total_liquidity: string, vlp: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }> } } };

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

export type ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables = Exact<{
  router_token_denoms_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenDenomsDenomsQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_denoms: { __typename?: 'TokenDenomsResponse', denoms: Array<{ __typename?: 'TokenDenom', chain_uid: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> } } };

export type ICodegenGeneratedRouterTokenDenomsQueryVariables = Exact<{
  router_token_denoms_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenDenomsQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_denoms: { __typename?: 'TokenDenomsResponse', denoms: Array<{ __typename?: 'TokenDenom', chain_uid: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> } } };

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

export type ICodegenGeneratedTokenAllDexesQueryVariables = Exact<{
  token_all_dexes_limit?: InputMaybe<Scalars['Int']['input']>;
  token_all_dexes_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTokenAllDexesQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', all_dexes: Array<{ __typename?: 'DexMetadata', bg_color: string, chain_uid: string, dex_name: string, display_name: string, fg_color: string, logo: string }> } };

export type ICodegenGeneratedTokenDexMetadataQueryVariables = Exact<{
  token_dex_metadata_dex: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTokenDexMetadataQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', dex_metadata: { __typename?: 'DexMetadata', bg_color: string, chain_uid: string, dex_name: string, display_name: string, fg_color: string, logo: string } } };

export type ICodegenGeneratedTokenGetAllFaucetsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedTokenGetAllFaucetsQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', get_all_faucets: Array<{ __typename?: 'Faucet', faucet_link: string, token: string }> } };

export type ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables = Exact<{
  token_token_denoms_chain_uid?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
  token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedTokenTokenDenomsDenomsQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_denoms: Array<{ __typename?: 'TokenDenomWithTokenIdResponse', denoms: Array<{ __typename?: 'TokenDenom', chain_uid: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> }> } };

export type ICodegenGeneratedTokenTokenDenomsQueryVariables = Exact<{
  token_token_denoms_chain_uid?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
  token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedTokenTokenDenomsQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_denoms: Array<{ __typename?: 'TokenDenomWithTokenIdResponse', token_id: string, denoms: Array<{ __typename?: 'TokenDenom', chain_uid: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> }> } };

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
  token_token_metadata_by_id_token_id: Scalars['String']['input'];
  token_token_metadata_by_id_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedTokenTokenMetadataByIdQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_metadata_by_id: { __typename?: 'Metadata', chain_uids: Array<string>, coinDecimal: number, description: string, dex: Array<string>, displayName: string, image: string, price: string, price_change_7d: number, price_change_24h: number, tags: Array<string>, tokenId: string, total_volume: number, total_volume_24h: number } } };

export type ICodegenGeneratedTokenTokenMetadatasQueryVariables = Exact<{
  token_token_metadatas_chain_uids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_metadatas_dex?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
  token_token_metadatas_offset?: InputMaybe<Scalars['Int']['input']>;
  token_token_metadatas_show_volume?: InputMaybe<Scalars['Boolean']['input']>;
  token_token_metadatas_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedTokenTokenMetadatasQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_metadatas: Array<{ __typename?: 'Metadata', chain_uids: Array<string>, coinDecimal: number, description: string, dex: Array<string>, displayName: string, image: string, price: string, price_change_7d: number, price_change_24h: number, tags: Array<string>, tokenId: string, total_volume: number, total_volume_24h: number }> } };

export type ICodegenGeneratedTokenTokensMetadataQueryVariables = Exact<{
  token_tokens_metadata_token_ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
  token_tokens_metadata_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedTokenTokensMetadataQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', tokens_metadata: Array<{ __typename?: 'Metadata', chain_uids: Array<string>, coinDecimal: number, description: string, dex: Array<string>, displayName: string, image: string, price: string, price_change_7d: number, price_change_24h: number, tags: Array<string>, tokenId: string, total_volume: number, total_volume_24h: number }> } };

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
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPaginationQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsPoolQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } }> } } };

export type ICodegenGeneratedVlpAllPoolsPoolsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', chain_uid: string, pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } }> } } };

export type ICodegenGeneratedVlpAllPoolsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pagination: { __typename?: 'PaginationInfo', limit: number, offset: number, total_count: number }, pools: Array<{ __typename?: 'Pools', chain_uid: string, pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } }> } } };

export type ICodegenGeneratedVlpFeeRecipientQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpFeeRecipientQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } };

export type ICodegenGeneratedVlpFeeQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpFeeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } };

export type ICodegenGeneratedVlpLiquidityPairQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpLiquidityPairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', liquidity: { __typename?: 'Liquidity', pair: { __typename?: 'Pair', token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpLiquidityQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpLiquidityQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', liquidity: { __typename?: 'Liquidity', token_1_reserve: string, token_2_reserve: string, total_lp_tokens: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpPoolQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_pool_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPoolQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', pool: { __typename?: 'Pool', lp_shares: string, reserve_1: string, reserve_2: string } } };

export type ICodegenGeneratedVlpStateFeeRecipientQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStateFeeRecipientQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', fee: { __typename?: 'FeeInfo', recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } } };

export type ICodegenGeneratedVlpStateFeeQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStateFeeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } } } } };

export type ICodegenGeneratedVlpStatePairQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStatePairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pair: { __typename?: 'Pair', token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpStatePoolConfigStableQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStatePoolConfigStableQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pool_config: { __typename?: 'PoolConfig', stable: { __typename?: 'StablePoolConfig', amp_factor: string } } } } };

export type ICodegenGeneratedVlpStatePoolConfigQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStatePoolConfigQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pool_config: { __typename?: 'PoolConfig', constant_product: any, stable: { __typename?: 'StablePoolConfig', amp_factor: string } } } } };

export type ICodegenGeneratedVlpStateQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStateQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', admin: string, last_updated: number, router: string, total_lp_tokens: string, vcoin: string, fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }, pair: { __typename?: 'Pair', token_1: string, token_2: string }, pool_config: { __typename?: 'PoolConfig', constant_product: any, stable: { __typename?: 'StablePoolConfig', amp_factor: string } } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> }, lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_total_fees_collected_per_denom_denom: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected_per_denom: { __typename?: 'TotalFeesPerDenomResponse', euclid_fees: string, lp_fees: string } } };

export type ICodegenGeneratedVlpQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }, liquidity: { __typename?: 'Liquidity', token_1_reserve: string, token_2_reserve: string, total_lp_tokens: string, pair: { __typename?: 'Pair', token_1: string, token_2: string } }, state: { __typename?: 'ContractStateOfVlp', admin: string, last_updated: number, router: string, total_lp_tokens: string, vcoin: string, fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string } }, pair: { __typename?: 'Pair', token_1: string, token_2: string }, pool_config: { __typename?: 'PoolConfig', constant_product: any, stable: { __typename?: 'StablePoolConfig', amp_factor: string } } }, total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> }, lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string }> } } } };


export const CodegenGeneratedChainsAllChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_CHAINS($chains_all_chains_show_all_chains: Boolean, $chains_all_chains_type: String) {
  chains {
    all_chains(
      show_all_chains: $chains_all_chains_show_all_chains
      type: $chains_all_chains_type
    ) {
      chain_id
      chain_uid
      display_name
      explorer_url
      factory_address
      logo
      type
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsAllChainsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsAllChainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsAllChainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsAllChainsQuery({
 *   variables: {
 *      chains_all_chains_show_all_chains: // value for 'chains_all_chains_show_all_chains'
 *      chains_all_chains_type: // value for 'chains_all_chains_type'
 *   },
 * });
 */
export function useCodegenGeneratedChainsAllChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>(CodegenGeneratedChainsAllChainsDocument, options);
      }
export function useCodegenGeneratedChainsAllChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>(CodegenGeneratedChainsAllChainsDocument, options);
        }
export type CodegenGeneratedChainsAllChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllChainsQuery>;
export type CodegenGeneratedChainsAllChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllChainsLazyQuery>;
export type CodegenGeneratedChainsAllChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>;
export function refetchCodegenGeneratedChainsAllChainsQuery(variables?: ICodegenGeneratedChainsAllChainsQueryVariables) {
      return { query: CodegenGeneratedChainsAllChainsDocument, variables: variables }
    }
export const CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_NATIVE_CURRENCY {
  chains {
    all_evm_chains {
      native_currency {
        decimals
        name
        symbol
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>(CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument, options);
      }
export function useCodegenGeneratedChainsAllEvmChainsNativeCurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>(CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument, options);
        }
export type CodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery>;
export type CodegenGeneratedChainsAllEvmChainsNativeCurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsNativeCurrencyLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>;
export function refetchCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery(variables?: ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables) {
      return { query: CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument, variables: variables }
    }
export const CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS_DEFAULT {
  chains {
    all_evm_chains {
      rpc_urls {
        default {
          http
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>(CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument, options);
      }
export function useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>(CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument, options);
        }
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>;
export function refetchCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery(variables?: ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables) {
      return { query: CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument, variables: variables }
    }
export const CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS {
  chains {
    all_evm_chains {
      rpc_urls {
        default {
          http
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>(CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument, options);
      }
export function useCodegenGeneratedChainsAllEvmChainsRpcUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>(CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument, options);
        }
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>;
export function refetchCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery(variables?: ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables) {
      return { query: CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument, variables: variables }
    }
export const CodegenGeneratedChainsAllEvmChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS {
  chains {
    all_evm_chains {
      chain_id
      chain_uid
      explorer_url
      name
      native_currency {
        decimals
        name
        symbol
      }
      rpc_urls {
        default {
          http
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsAllEvmChainsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsAllEvmChainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsAllEvmChainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsAllEvmChainsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainsAllEvmChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>(CodegenGeneratedChainsAllEvmChainsDocument, options);
      }
export function useCodegenGeneratedChainsAllEvmChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>(CodegenGeneratedChainsAllEvmChainsDocument, options);
        }
export type CodegenGeneratedChainsAllEvmChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsQuery>;
export type CodegenGeneratedChainsAllEvmChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>;
export function refetchCodegenGeneratedChainsAllEvmChainsQuery(variables?: ICodegenGeneratedChainsAllEvmChainsQueryVariables) {
      return { query: CodegenGeneratedChainsAllEvmChainsDocument, variables: variables }
    }
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
      type
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsChainConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsChainConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsChainConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsChainConfigQuery({
 *   variables: {
 *      chains_chain_config_chain_id: // value for 'chains_chain_config_chain_id'
 *      chains_chain_config_chain_uid: // value for 'chains_chain_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsChainConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>(CodegenGeneratedChainsChainConfigDocument, options);
      }
export function useCodegenGeneratedChainsChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>(CodegenGeneratedChainsChainConfigDocument, options);
        }
export type CodegenGeneratedChainsChainConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsChainConfigQuery>;
export type CodegenGeneratedChainsChainConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsChainConfigLazyQuery>;
export type CodegenGeneratedChainsChainConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>;
export function refetchCodegenGeneratedChainsChainConfigQuery(variables?: ICodegenGeneratedChainsChainConfigQueryVariables) {
      return { query: CodegenGeneratedChainsChainConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsContractsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsContractsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsContractsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsContractsQuery({
 *   variables: {
 *      chains_contracts_chainUId: // value for 'chains_contracts_chainUId'
 *      chains_contracts_type: // value for 'chains_contracts_type'
 *   },
 * });
 */
export function useCodegenGeneratedChainsContractsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>(CodegenGeneratedChainsContractsDocument, options);
      }
export function useCodegenGeneratedChainsContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>(CodegenGeneratedChainsContractsDocument, options);
        }
export type CodegenGeneratedChainsContractsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsContractsQuery>;
export type CodegenGeneratedChainsContractsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsContractsLazyQuery>;
export type CodegenGeneratedChainsContractsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>;
export function refetchCodegenGeneratedChainsContractsQuery(variables?: ICodegenGeneratedChainsContractsQueryVariables) {
      return { query: CodegenGeneratedChainsContractsDocument, variables: variables }
    }
export const CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_NATIVE_CURRENCY($chains_evm_chain_config_chain_id: String, $chains_evm_chain_config_chain_uid: String) {
  chains {
    evm_chain_config(
      chain_id: $chains_evm_chain_config_chain_id
      chain_uid: $chains_evm_chain_config_chain_uid
    ) {
      native_currency {
        decimals
        name
        symbol
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery({
 *   variables: {
 *      chains_evm_chain_config_chain_id: // value for 'chains_evm_chain_config_chain_id'
 *      chains_evm_chain_config_chain_uid: // value for 'chains_evm_chain_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>(CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument, options);
      }
export function useCodegenGeneratedChainsEvmChainConfigNativeCurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>(CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument, options);
        }
export type CodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery>;
export type CodegenGeneratedChainsEvmChainConfigNativeCurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigNativeCurrencyLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>;
export function refetchCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery(variables?: ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables) {
      return { query: CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument, variables: variables }
    }
export const CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS_DEFAULT($chains_evm_chain_config_chain_id: String, $chains_evm_chain_config_chain_uid: String) {
  chains {
    evm_chain_config(
      chain_id: $chains_evm_chain_config_chain_id
      chain_uid: $chains_evm_chain_config_chain_uid
    ) {
      rpc_urls {
        default {
          http
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery({
 *   variables: {
 *      chains_evm_chain_config_chain_id: // value for 'chains_evm_chain_config_chain_id'
 *      chains_evm_chain_config_chain_uid: // value for 'chains_evm_chain_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>(CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument, options);
      }
export function useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>(CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument, options);
        }
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>;
export function refetchCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery(variables?: ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables) {
      return { query: CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument, variables: variables }
    }
export const CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS($chains_evm_chain_config_chain_id: String, $chains_evm_chain_config_chain_uid: String) {
  chains {
    evm_chain_config(
      chain_id: $chains_evm_chain_config_chain_id
      chain_uid: $chains_evm_chain_config_chain_uid
    ) {
      rpc_urls {
        default {
          http
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery({
 *   variables: {
 *      chains_evm_chain_config_chain_id: // value for 'chains_evm_chain_config_chain_id'
 *      chains_evm_chain_config_chain_uid: // value for 'chains_evm_chain_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>(CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument, options);
      }
export function useCodegenGeneratedChainsEvmChainConfigRpcUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>(CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument, options);
        }
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>;
export function refetchCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery(variables?: ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables) {
      return { query: CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument, variables: variables }
    }
export const CodegenGeneratedChainsEvmChainConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG($chains_evm_chain_config_chain_id: String, $chains_evm_chain_config_chain_uid: String) {
  chains {
    evm_chain_config(
      chain_id: $chains_evm_chain_config_chain_id
      chain_uid: $chains_evm_chain_config_chain_uid
    ) {
      chain_id
      chain_uid
      explorer_url
      name
      native_currency {
        decimals
        name
        symbol
      }
      rpc_urls {
        default {
          http
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedChainsEvmChainConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsEvmChainConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsEvmChainConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsEvmChainConfigQuery({
 *   variables: {
 *      chains_evm_chain_config_chain_id: // value for 'chains_evm_chain_config_chain_id'
 *      chains_evm_chain_config_chain_uid: // value for 'chains_evm_chain_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsEvmChainConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>(CodegenGeneratedChainsEvmChainConfigDocument, options);
      }
export function useCodegenGeneratedChainsEvmChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>(CodegenGeneratedChainsEvmChainConfigDocument, options);
        }
export type CodegenGeneratedChainsEvmChainConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigQuery>;
export type CodegenGeneratedChainsEvmChainConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>;
export function refetchCodegenGeneratedChainsEvmChainConfigQuery(variables?: ICodegenGeneratedChainsEvmChainConfigQueryVariables) {
      return { query: CodegenGeneratedChainsEvmChainConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>(CodegenGeneratedChainsKeplrConfigBech32ConfigDocument, options);
      }
export function useCodegenGeneratedChainsKeplrConfigBech32ConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>(CodegenGeneratedChainsKeplrConfigBech32ConfigDocument, options);
        }
export type CodegenGeneratedChainsKeplrConfigBech32ConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery>;
export type CodegenGeneratedChainsKeplrConfigBech32ConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBech32ConfigLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigBech32ConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigBech32ConfigQuery(variables?: ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigBech32ConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigBip44Query__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigBip44Query` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigBip44Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigBip44Query({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigBip44Query(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>(CodegenGeneratedChainsKeplrConfigBip44Document, options);
      }
export function useCodegenGeneratedChainsKeplrConfigBip44LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>(CodegenGeneratedChainsKeplrConfigBip44Document, options);
        }
export type CodegenGeneratedChainsKeplrConfigBip44QueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBip44Query>;
export type CodegenGeneratedChainsKeplrConfigBip44LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBip44LazyQuery>;
export type CodegenGeneratedChainsKeplrConfigBip44QueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigBip44Query(variables?: ICodegenGeneratedChainsKeplrConfigBip44QueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigBip44Document, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigCurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigCurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigCurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigCurrenciesQuery({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>(CodegenGeneratedChainsKeplrConfigCurrenciesDocument, options);
      }
export function useCodegenGeneratedChainsKeplrConfigCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>(CodegenGeneratedChainsKeplrConfigCurrenciesDocument, options);
        }
export type CodegenGeneratedChainsKeplrConfigCurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigCurrenciesQuery>;
export type CodegenGeneratedChainsKeplrConfigCurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigCurrenciesLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigCurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigCurrenciesQuery(variables?: ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigCurrenciesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>(CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument, options);
      }
export function useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>(CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument, options);
        }
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>(CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument, options);
      }
export function useCodegenGeneratedChainsKeplrConfigFeecurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>(CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument, options);
        }
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigGaspricestepQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigGaspricestepQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigGaspricestepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigGaspricestepQuery({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigGaspricestepQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>(CodegenGeneratedChainsKeplrConfigGaspricestepDocument, options);
      }
export function useCodegenGeneratedChainsKeplrConfigGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>(CodegenGeneratedChainsKeplrConfigGaspricestepDocument, options);
        }
export type CodegenGeneratedChainsKeplrConfigGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigGaspricestepQuery>;
export type CodegenGeneratedChainsKeplrConfigGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigGaspricestepLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigGaspricestepQuery(variables?: ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigGaspricestepDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>(CodegenGeneratedChainsKeplrConfigStakecurrencyDocument, options);
      }
export function useCodegenGeneratedChainsKeplrConfigStakecurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>(CodegenGeneratedChainsKeplrConfigStakecurrencyDocument, options);
        }
export type CodegenGeneratedChainsKeplrConfigStakecurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery>;
export type CodegenGeneratedChainsKeplrConfigStakecurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigStakecurrencyLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigStakecurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigStakecurrencyQuery(variables?: ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigStakecurrencyDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsKeplrConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsKeplrConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsKeplrConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsKeplrConfigQuery({
 *   variables: {
 *      chains_keplr_config_chain_id: // value for 'chains_keplr_config_chain_id'
 *      chains_keplr_config_chain_uid: // value for 'chains_keplr_config_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedChainsKeplrConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>(CodegenGeneratedChainsKeplrConfigDocument, options);
      }
export function useCodegenGeneratedChainsKeplrConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>(CodegenGeneratedChainsKeplrConfigDocument, options);
        }
export type CodegenGeneratedChainsKeplrConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigQuery>;
export type CodegenGeneratedChainsKeplrConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>;
export function refetchCodegenGeneratedChainsKeplrConfigQuery(variables?: ICodegenGeneratedChainsKeplrConfigQueryVariables) {
      return { query: CodegenGeneratedChainsKeplrConfigDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedChainsRouterConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsRouterConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsRouterConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsRouterConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainsRouterConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>(CodegenGeneratedChainsRouterConfigDocument, options);
      }
export function useCodegenGeneratedChainsRouterConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>(CodegenGeneratedChainsRouterConfigDocument, options);
        }
export type CodegenGeneratedChainsRouterConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsRouterConfigQuery>;
export type CodegenGeneratedChainsRouterConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsRouterConfigLazyQuery>;
export type CodegenGeneratedChainsRouterConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>;
export function refetchCodegenGeneratedChainsRouterConfigQuery(variables?: ICodegenGeneratedChainsRouterConfigQueryVariables) {
      return { query: CodegenGeneratedChainsRouterConfigDocument, variables: variables }
    }
export const CodegenGeneratedChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS {
  chains {
    all_evm_chains {
      chain_id
      chain_uid
      explorer_url
      name
      native_currency {
        decimals
        name
        symbol
      }
      rpc_urls {
        default {
          http
        }
      }
    }
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

/**
 * __useCodegenGeneratedChainsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedChainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedChainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedChainsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>(CodegenGeneratedChainsDocument, options);
      }
export function useCodegenGeneratedChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>(CodegenGeneratedChainsDocument, options);
        }
export type CodegenGeneratedChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsQuery>;
export type CodegenGeneratedChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsLazyQuery>;
export type CodegenGeneratedChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>;
export function refetchCodegenGeneratedChainsQuery(variables?: ICodegenGeneratedChainsQueryVariables) {
      return { query: CodegenGeneratedChainsDocument, variables: variables }
    }
export const CodegenGeneratedCwBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_BALANCE($chain_uid: String!, $contract: String!, $cw_balance_address: String!) {
  cw(chain_uid: $chain_uid, contract: $contract) {
    balance(address: $cw_balance_address) {
      balance
    }
  }
}
    `;

/**
 * __useCodegenGeneratedCwBalanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedCwBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedCwBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedCwBalanceQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      contract: // value for 'contract'
 *      cw_balance_address: // value for 'cw_balance_address'
 *   },
 * });
 */
export function useCodegenGeneratedCwBalanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>(CodegenGeneratedCwBalanceDocument, options);
      }
export function useCodegenGeneratedCwBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>(CodegenGeneratedCwBalanceDocument, options);
        }
export type CodegenGeneratedCwBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedCwBalanceQuery>;
export type CodegenGeneratedCwBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwBalanceLazyQuery>;
export type CodegenGeneratedCwBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>;
export function refetchCodegenGeneratedCwBalanceQuery(variables: ICodegenGeneratedCwBalanceQueryVariables) {
      return { query: CodegenGeneratedCwBalanceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedCwTokenInfoQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedCwTokenInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedCwTokenInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedCwTokenInfoQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      contract: // value for 'contract'
 *   },
 * });
 */
export function useCodegenGeneratedCwTokenInfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>(CodegenGeneratedCwTokenInfoDocument, options);
      }
export function useCodegenGeneratedCwTokenInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>(CodegenGeneratedCwTokenInfoDocument, options);
        }
export type CodegenGeneratedCwTokenInfoQueryHookResult = ReturnType<typeof useCodegenGeneratedCwTokenInfoQuery>;
export type CodegenGeneratedCwTokenInfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwTokenInfoLazyQuery>;
export type CodegenGeneratedCwTokenInfoQueryResult = Apollo.QueryResult<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>;
export function refetchCodegenGeneratedCwTokenInfoQuery(variables: ICodegenGeneratedCwTokenInfoQueryVariables) {
      return { query: CodegenGeneratedCwTokenInfoDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedCwQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedCwQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedCwQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedCwQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      contract: // value for 'contract'
 *   },
 * });
 */
export function useCodegenGeneratedCwQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>(CodegenGeneratedCwDocument, options);
      }
export function useCodegenGeneratedCwLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>(CodegenGeneratedCwDocument, options);
        }
export type CodegenGeneratedCwQueryHookResult = ReturnType<typeof useCodegenGeneratedCwQuery>;
export type CodegenGeneratedCwLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwLazyQuery>;
export type CodegenGeneratedCwQueryResult = Apollo.QueryResult<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>;
export function refetchCodegenGeneratedCwQuery(variables: ICodegenGeneratedCwQueryVariables) {
      return { query: CodegenGeneratedCwDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedCwMulticallRawQueriesResultsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedCwMulticallRawQueriesResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedCwMulticallRawQueriesResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedCwMulticallRawQueriesResultsQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      cw_multicall_raw_queries_queries: // value for 'cw_multicall_raw_queries_queries'
 *   },
 * });
 */
export function useCodegenGeneratedCwMulticallRawQueriesResultsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>(CodegenGeneratedCwMulticallRawQueriesResultsDocument, options);
      }
export function useCodegenGeneratedCwMulticallRawQueriesResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>(CodegenGeneratedCwMulticallRawQueriesResultsDocument, options);
        }
export type CodegenGeneratedCwMulticallRawQueriesResultsQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesResultsQuery>;
export type CodegenGeneratedCwMulticallRawQueriesResultsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesResultsLazyQuery>;
export type CodegenGeneratedCwMulticallRawQueriesResultsQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>;
export function refetchCodegenGeneratedCwMulticallRawQueriesResultsQuery(variables: ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables) {
      return { query: CodegenGeneratedCwMulticallRawQueriesResultsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedCwMulticallRawQueriesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedCwMulticallRawQueriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedCwMulticallRawQueriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedCwMulticallRawQueriesQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      cw_multicall_raw_queries_queries: // value for 'cw_multicall_raw_queries_queries'
 *   },
 * });
 */
export function useCodegenGeneratedCwMulticallRawQueriesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>(CodegenGeneratedCwMulticallRawQueriesDocument, options);
      }
export function useCodegenGeneratedCwMulticallRawQueriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>(CodegenGeneratedCwMulticallRawQueriesDocument, options);
        }
export type CodegenGeneratedCwMulticallRawQueriesQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesQuery>;
export type CodegenGeneratedCwMulticallRawQueriesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesLazyQuery>;
export type CodegenGeneratedCwMulticallRawQueriesQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>;
export function refetchCodegenGeneratedCwMulticallRawQueriesQuery(variables: ICodegenGeneratedCwMulticallRawQueriesQueryVariables) {
      return { query: CodegenGeneratedCwMulticallRawQueriesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedCwMulticallSmartQueriesResultsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedCwMulticallSmartQueriesResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedCwMulticallSmartQueriesResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedCwMulticallSmartQueriesResultsQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      cw_multicall_smart_queries_queries: // value for 'cw_multicall_smart_queries_queries'
 *   },
 * });
 */
export function useCodegenGeneratedCwMulticallSmartQueriesResultsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>(CodegenGeneratedCwMulticallSmartQueriesResultsDocument, options);
      }
export function useCodegenGeneratedCwMulticallSmartQueriesResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>(CodegenGeneratedCwMulticallSmartQueriesResultsDocument, options);
        }
export type CodegenGeneratedCwMulticallSmartQueriesResultsQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesResultsQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesResultsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesResultsLazyQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesResultsQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>;
export function refetchCodegenGeneratedCwMulticallSmartQueriesResultsQuery(variables: ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables) {
      return { query: CodegenGeneratedCwMulticallSmartQueriesResultsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedCwMulticallSmartQueriesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedCwMulticallSmartQueriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedCwMulticallSmartQueriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedCwMulticallSmartQueriesQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      cw_multicall_smart_queries_queries: // value for 'cw_multicall_smart_queries_queries'
 *   },
 * });
 */
export function useCodegenGeneratedCwMulticallSmartQueriesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>(CodegenGeneratedCwMulticallSmartQueriesDocument, options);
      }
export function useCodegenGeneratedCwMulticallSmartQueriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>(CodegenGeneratedCwMulticallSmartQueriesDocument, options);
        }
export type CodegenGeneratedCwMulticallSmartQueriesQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesLazyQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>;
export function refetchCodegenGeneratedCwMulticallSmartQueriesQuery(variables: ICodegenGeneratedCwMulticallSmartQueriesQueryVariables) {
      return { query: CodegenGeneratedCwMulticallSmartQueriesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryAllPoolsPaginationQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryAllPoolsPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryAllPoolsPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryAllPoolsPaginationQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_all_pools_limit: // value for 'factory_all_pools_limit'
 *      factory_all_pools_offset: // value for 'factory_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryAllPoolsPaginationQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>(CodegenGeneratedFactoryAllPoolsPaginationDocument, options);
      }
export function useCodegenGeneratedFactoryAllPoolsPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>(CodegenGeneratedFactoryAllPoolsPaginationDocument, options);
        }
export type CodegenGeneratedFactoryAllPoolsPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPaginationQuery>;
export type CodegenGeneratedFactoryAllPoolsPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPaginationLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>;
export function refetchCodegenGeneratedFactoryAllPoolsPaginationQuery(variables: ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables) {
      return { query: CodegenGeneratedFactoryAllPoolsPaginationDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryAllPoolsPoolsPairQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryAllPoolsPoolsPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryAllPoolsPoolsPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryAllPoolsPoolsPairQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_all_pools_limit: // value for 'factory_all_pools_limit'
 *      factory_all_pools_offset: // value for 'factory_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryAllPoolsPoolsPairQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>(CodegenGeneratedFactoryAllPoolsPoolsPairDocument, options);
      }
export function useCodegenGeneratedFactoryAllPoolsPoolsPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>(CodegenGeneratedFactoryAllPoolsPoolsPairDocument, options);
        }
export type CodegenGeneratedFactoryAllPoolsPoolsPairQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsPairQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsPairLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsPairQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>;
export function refetchCodegenGeneratedFactoryAllPoolsPoolsPairQuery(variables: ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables) {
      return { query: CodegenGeneratedFactoryAllPoolsPoolsPairDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryAllPoolsPoolsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryAllPoolsPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryAllPoolsPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryAllPoolsPoolsQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_all_pools_limit: // value for 'factory_all_pools_limit'
 *      factory_all_pools_offset: // value for 'factory_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryAllPoolsPoolsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>(CodegenGeneratedFactoryAllPoolsPoolsDocument, options);
      }
export function useCodegenGeneratedFactoryAllPoolsPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>(CodegenGeneratedFactoryAllPoolsPoolsDocument, options);
        }
export type CodegenGeneratedFactoryAllPoolsPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>;
export function refetchCodegenGeneratedFactoryAllPoolsPoolsQuery(variables: ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables) {
      return { query: CodegenGeneratedFactoryAllPoolsPoolsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryAllPoolsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryAllPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryAllPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryAllPoolsQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_all_pools_limit: // value for 'factory_all_pools_limit'
 *      factory_all_pools_offset: // value for 'factory_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryAllPoolsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>(CodegenGeneratedFactoryAllPoolsDocument, options);
      }
export function useCodegenGeneratedFactoryAllPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>(CodegenGeneratedFactoryAllPoolsDocument, options);
        }
export type CodegenGeneratedFactoryAllPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsQuery>;
export type CodegenGeneratedFactoryAllPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>;
export function refetchCodegenGeneratedFactoryAllPoolsQuery(variables: ICodegenGeneratedFactoryAllPoolsQueryVariables) {
      return { query: CodegenGeneratedFactoryAllPoolsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryAllTokensPaginationQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryAllTokensPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryAllTokensPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryAllTokensPaginationQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_all_tokens_limit: // value for 'factory_all_tokens_limit'
 *      factory_all_tokens_offset: // value for 'factory_all_tokens_offset'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryAllTokensPaginationQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>(CodegenGeneratedFactoryAllTokensPaginationDocument, options);
      }
export function useCodegenGeneratedFactoryAllTokensPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>(CodegenGeneratedFactoryAllTokensPaginationDocument, options);
        }
export type CodegenGeneratedFactoryAllTokensPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensPaginationQuery>;
export type CodegenGeneratedFactoryAllTokensPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensPaginationLazyQuery>;
export type CodegenGeneratedFactoryAllTokensPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>;
export function refetchCodegenGeneratedFactoryAllTokensPaginationQuery(variables: ICodegenGeneratedFactoryAllTokensPaginationQueryVariables) {
      return { query: CodegenGeneratedFactoryAllTokensPaginationDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryAllTokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryAllTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryAllTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryAllTokensQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_all_tokens_limit: // value for 'factory_all_tokens_limit'
 *      factory_all_tokens_offset: // value for 'factory_all_tokens_offset'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryAllTokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>(CodegenGeneratedFactoryAllTokensDocument, options);
      }
export function useCodegenGeneratedFactoryAllTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>(CodegenGeneratedFactoryAllTokensDocument, options);
        }
export type CodegenGeneratedFactoryAllTokensQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensQuery>;
export type CodegenGeneratedFactoryAllTokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensLazyQuery>;
export type CodegenGeneratedFactoryAllTokensQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>;
export function refetchCodegenGeneratedFactoryAllTokensQuery(variables: ICodegenGeneratedFactoryAllTokensQueryVariables) {
      return { query: CodegenGeneratedFactoryAllTokensDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryAllowedDenomsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryAllowedDenomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryAllowedDenomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryAllowedDenomsQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_allowed_denoms_token_id: // value for 'factory_allowed_denoms_token_id'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryAllowedDenomsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>(CodegenGeneratedFactoryAllowedDenomsDocument, options);
      }
export function useCodegenGeneratedFactoryAllowedDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>(CodegenGeneratedFactoryAllowedDenomsDocument, options);
        }
export type CodegenGeneratedFactoryAllowedDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllowedDenomsQuery>;
export type CodegenGeneratedFactoryAllowedDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllowedDenomsLazyQuery>;
export type CodegenGeneratedFactoryAllowedDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>;
export function refetchCodegenGeneratedFactoryAllowedDenomsQuery(variables: ICodegenGeneratedFactoryAllowedDenomsQueryVariables) {
      return { query: CodegenGeneratedFactoryAllowedDenomsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryEscrowQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryEscrowQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryEscrowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryEscrowQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_escrow_token_id: // value for 'factory_escrow_token_id'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryEscrowQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>(CodegenGeneratedFactoryEscrowDocument, options);
      }
export function useCodegenGeneratedFactoryEscrowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>(CodegenGeneratedFactoryEscrowDocument, options);
        }
export type CodegenGeneratedFactoryEscrowQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryEscrowQuery>;
export type CodegenGeneratedFactoryEscrowLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryEscrowLazyQuery>;
export type CodegenGeneratedFactoryEscrowQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>;
export function refetchCodegenGeneratedFactoryEscrowQuery(variables: ICodegenGeneratedFactoryEscrowQueryVariables) {
      return { query: CodegenGeneratedFactoryEscrowDocument, variables: variables }
    }
export const CodegenGeneratedFactoryGetLptokenAddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS($chain_uid: String!, $factory_get_LpToken_address_vlp_address: String!) {
  factory(chain_uid: $chain_uid) {
    get_LpToken_address(vlp_address: $factory_get_LpToken_address_vlp_address) {
      token_address
    }
  }
}
    `;

/**
 * __useCodegenGeneratedFactoryGetLptokenAddressQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryGetLptokenAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryGetLptokenAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryGetLptokenAddressQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_get_LpToken_address_vlp_address: // value for 'factory_get_LpToken_address_vlp_address'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryGetLptokenAddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>(CodegenGeneratedFactoryGetLptokenAddressDocument, options);
      }
export function useCodegenGeneratedFactoryGetLptokenAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>(CodegenGeneratedFactoryGetLptokenAddressDocument, options);
        }
export type CodegenGeneratedFactoryGetLptokenAddressQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryGetLptokenAddressQuery>;
export type CodegenGeneratedFactoryGetLptokenAddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryGetLptokenAddressLazyQuery>;
export type CodegenGeneratedFactoryGetLptokenAddressQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>;
export function refetchCodegenGeneratedFactoryGetLptokenAddressQuery(variables: ICodegenGeneratedFactoryGetLptokenAddressQueryVariables) {
      return { query: CodegenGeneratedFactoryGetLptokenAddressDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>(CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument, options);
      }
export function useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>(CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument, options);
        }
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsLazyQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>;
export function refetchCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables) {
      return { query: CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>(CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument, options);
      }
export function useCodegenGeneratedFactoryPartnerFeesCollectedTotalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>(CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument, options);
        }
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalLazyQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>;
export function refetchCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables) {
      return { query: CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryPartnerFeesCollectedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryPartnerFeesCollectedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryPartnerFeesCollectedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryPartnerFeesCollectedQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryPartnerFeesCollectedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>(CodegenGeneratedFactoryPartnerFeesCollectedDocument, options);
      }
export function useCodegenGeneratedFactoryPartnerFeesCollectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>(CodegenGeneratedFactoryPartnerFeesCollectedDocument, options);
        }
export type CodegenGeneratedFactoryPartnerFeesCollectedQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedLazyQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>;
export function refetchCodegenGeneratedFactoryPartnerFeesCollectedQuery(variables: ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables) {
      return { query: CodegenGeneratedFactoryPartnerFeesCollectedDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryStateQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>(CodegenGeneratedFactoryStateDocument, options);
      }
export function useCodegenGeneratedFactoryStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>(CodegenGeneratedFactoryStateDocument, options);
        }
export type CodegenGeneratedFactoryStateQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryStateQuery>;
export type CodegenGeneratedFactoryStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryStateLazyQuery>;
export type CodegenGeneratedFactoryStateQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>;
export function refetchCodegenGeneratedFactoryStateQuery(variables: ICodegenGeneratedFactoryStateQueryVariables) {
      return { query: CodegenGeneratedFactoryStateDocument, variables: variables }
    }
export const CodegenGeneratedFactoryVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_VLP($chain_uid: String!, $factory_vlp_pair: PairInput) {
  factory(chain_uid: $chain_uid) {
    vlp(pair: $factory_vlp_pair)
  }
}
    `;

/**
 * __useCodegenGeneratedFactoryVlpQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryVlpQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryVlpQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryVlpQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *      factory_vlp_pair: // value for 'factory_vlp_pair'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryVlpQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>(CodegenGeneratedFactoryVlpDocument, options);
      }
export function useCodegenGeneratedFactoryVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>(CodegenGeneratedFactoryVlpDocument, options);
        }
export type CodegenGeneratedFactoryVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryVlpQuery>;
export type CodegenGeneratedFactoryVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryVlpLazyQuery>;
export type CodegenGeneratedFactoryVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>;
export function refetchCodegenGeneratedFactoryVlpQuery(variables: ICodegenGeneratedFactoryVlpQueryVariables) {
      return { query: CodegenGeneratedFactoryVlpDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedFactoryQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedFactoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedFactoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedFactoryQuery({
 *   variables: {
 *      chain_uid: // value for 'chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedFactoryQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>(CodegenGeneratedFactoryDocument, options);
      }
export function useCodegenGeneratedFactoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>(CodegenGeneratedFactoryDocument, options);
        }
export type CodegenGeneratedFactoryQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryQuery>;
export type CodegenGeneratedFactoryLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryLazyQuery>;
export type CodegenGeneratedFactoryQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>;
export function refetchCodegenGeneratedFactoryQuery(variables: ICodegenGeneratedFactoryQueryVariables) {
      return { query: CodegenGeneratedFactoryDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolFeesCollectedBreakdownQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolFeesCollectedBreakdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolFeesCollectedBreakdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolFeesCollectedBreakdownQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedPoolFeesCollectedBreakdownQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>(CodegenGeneratedPoolFeesCollectedBreakdownDocument, options);
      }
export function useCodegenGeneratedPoolFeesCollectedBreakdownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>(CodegenGeneratedPoolFeesCollectedBreakdownDocument, options);
        }
export type CodegenGeneratedPoolFeesCollectedBreakdownQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedBreakdownQuery>;
export type CodegenGeneratedPoolFeesCollectedBreakdownLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedBreakdownLazyQuery>;
export type CodegenGeneratedPoolFeesCollectedBreakdownQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>;
export function refetchCodegenGeneratedPoolFeesCollectedBreakdownQuery(variables?: ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables) {
      return { query: CodegenGeneratedPoolFeesCollectedBreakdownDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolFeesCollectedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolFeesCollectedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolFeesCollectedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolFeesCollectedQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedPoolFeesCollectedQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>(CodegenGeneratedPoolFeesCollectedDocument, options);
      }
export function useCodegenGeneratedPoolFeesCollectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>(CodegenGeneratedPoolFeesCollectedDocument, options);
        }
export type CodegenGeneratedPoolFeesCollectedQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedQuery>;
export type CodegenGeneratedPoolFeesCollectedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedLazyQuery>;
export type CodegenGeneratedPoolFeesCollectedQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>;
export function refetchCodegenGeneratedPoolFeesCollectedQuery(variables?: ICodegenGeneratedPoolFeesCollectedQueryVariables) {
      return { query: CodegenGeneratedPoolFeesCollectedDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolMyPoolsPairQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolMyPoolsPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolMyPoolsPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolMyPoolsPairQuery({
 *   variables: {
 *      pool_my_pools_chain_uid: // value for 'pool_my_pools_chain_uid'
 *      pool_my_pools_user_address: // value for 'pool_my_pools_user_address'
 *   },
 * });
 */
export function useCodegenGeneratedPoolMyPoolsPairQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>(CodegenGeneratedPoolMyPoolsPairDocument, options);
      }
export function useCodegenGeneratedPoolMyPoolsPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>(CodegenGeneratedPoolMyPoolsPairDocument, options);
        }
export type CodegenGeneratedPoolMyPoolsPairQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsPairQuery>;
export type CodegenGeneratedPoolMyPoolsPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsPairLazyQuery>;
export type CodegenGeneratedPoolMyPoolsPairQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>;
export function refetchCodegenGeneratedPoolMyPoolsPairQuery(variables: ICodegenGeneratedPoolMyPoolsPairQueryVariables) {
      return { query: CodegenGeneratedPoolMyPoolsPairDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolMyPoolsUserQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolMyPoolsUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolMyPoolsUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolMyPoolsUserQuery({
 *   variables: {
 *      pool_my_pools_chain_uid: // value for 'pool_my_pools_chain_uid'
 *      pool_my_pools_user_address: // value for 'pool_my_pools_user_address'
 *   },
 * });
 */
export function useCodegenGeneratedPoolMyPoolsUserQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>(CodegenGeneratedPoolMyPoolsUserDocument, options);
      }
export function useCodegenGeneratedPoolMyPoolsUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>(CodegenGeneratedPoolMyPoolsUserDocument, options);
        }
export type CodegenGeneratedPoolMyPoolsUserQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsUserQuery>;
export type CodegenGeneratedPoolMyPoolsUserLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsUserLazyQuery>;
export type CodegenGeneratedPoolMyPoolsUserQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>;
export function refetchCodegenGeneratedPoolMyPoolsUserQuery(variables: ICodegenGeneratedPoolMyPoolsUserQueryVariables) {
      return { query: CodegenGeneratedPoolMyPoolsUserDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolMyPoolsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolMyPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolMyPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolMyPoolsQuery({
 *   variables: {
 *      pool_my_pools_chain_uid: // value for 'pool_my_pools_chain_uid'
 *      pool_my_pools_user_address: // value for 'pool_my_pools_user_address'
 *   },
 * });
 */
export function useCodegenGeneratedPoolMyPoolsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>(CodegenGeneratedPoolMyPoolsDocument, options);
      }
export function useCodegenGeneratedPoolMyPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>(CodegenGeneratedPoolMyPoolsDocument, options);
        }
export type CodegenGeneratedPoolMyPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsQuery>;
export type CodegenGeneratedPoolMyPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsLazyQuery>;
export type CodegenGeneratedPoolMyPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>;
export function refetchCodegenGeneratedPoolMyPoolsQuery(variables: ICodegenGeneratedPoolMyPoolsQueryVariables) {
      return { query: CodegenGeneratedPoolMyPoolsDocument, variables: variables }
    }
export const CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
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

/**
 * __useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery({
 *   variables: {
 *      pool_token_pair_with_liquidity_limit: // value for 'pool_token_pair_with_liquidity_limit'
 *      pool_token_pair_with_liquidity_offset: // value for 'pool_token_pair_with_liquidity_offset'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export function useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument, options);
      }
export function useCodegenGeneratedPoolTokenPairWithLiquidityPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument, options);
        }
export type CodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityPaginationLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>;
export function refetchCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables) {
      return { query: CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument, variables: variables }
    }
export const CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
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

/**
 * __useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery({
 *   variables: {
 *      pool_token_pair_with_liquidity_limit: // value for 'pool_token_pair_with_liquidity_limit'
 *      pool_token_pair_with_liquidity_offset: // value for 'pool_token_pair_with_liquidity_offset'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export function useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument, options);
      }
export function useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument, options);
        }
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>;
export function refetchCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables) {
      return { query: CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument, variables: variables }
    }
export const CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
      token: $pool_token_pair_with_liquidity_token
    ) {
      results {
        apr
        created_at
        pair {
          token_1
          token_2
        }
        tags
        total_liquidity
        vlp
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery({
 *   variables: {
 *      pool_token_pair_with_liquidity_limit: // value for 'pool_token_pair_with_liquidity_limit'
 *      pool_token_pair_with_liquidity_offset: // value for 'pool_token_pair_with_liquidity_offset'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export function useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument, options);
      }
export function useCodegenGeneratedPoolTokenPairWithLiquidityResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument, options);
        }
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>;
export function refetchCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables) {
      return { query: CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument, variables: variables }
    }
export const CodegenGeneratedPoolTokenPairWithLiquidityDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
      token: $pool_token_pair_with_liquidity_token
    ) {
      pagination {
        limit
        offset
        total_count
      }
      results {
        apr
        created_at
        pair {
          token_1
          token_2
        }
        tags
        total_liquidity
        vlp
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedPoolTokenPairWithLiquidityQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolTokenPairWithLiquidityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolTokenPairWithLiquidityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolTokenPairWithLiquidityQuery({
 *   variables: {
 *      pool_token_pair_with_liquidity_limit: // value for 'pool_token_pair_with_liquidity_limit'
 *      pool_token_pair_with_liquidity_offset: // value for 'pool_token_pair_with_liquidity_offset'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export function useCodegenGeneratedPoolTokenPairWithLiquidityQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityDocument, options);
      }
export function useCodegenGeneratedPoolTokenPairWithLiquidityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>(CodegenGeneratedPoolTokenPairWithLiquidityDocument, options);
        }
export type CodegenGeneratedPoolTokenPairWithLiquidityQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>;
export function refetchCodegenGeneratedPoolTokenPairWithLiquidityQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables) {
      return { query: CodegenGeneratedPoolTokenPairWithLiquidityDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>(CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument, options);
      }
export function useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>(CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument, options);
        }
export type CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery>;
export type CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursLazyQuery>;
export type CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>;
export function refetchCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery(variables?: ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables) {
      return { query: CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolVolumeQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolVolumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolVolumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolVolumeQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedPoolVolumeQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>(CodegenGeneratedPoolVolumeDocument, options);
      }
export function useCodegenGeneratedPoolVolumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>(CodegenGeneratedPoolVolumeDocument, options);
        }
export type CodegenGeneratedPoolVolumeQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeQuery>;
export type CodegenGeneratedPoolVolumeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeLazyQuery>;
export type CodegenGeneratedPoolVolumeQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>;
export function refetchCodegenGeneratedPoolVolumeQuery(variables?: ICodegenGeneratedPoolVolumeQueryVariables) {
      return { query: CodegenGeneratedPoolVolumeDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedPoolQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedPoolQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedPoolQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>(CodegenGeneratedPoolDocument, options);
      }
export function useCodegenGeneratedPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>(CodegenGeneratedPoolDocument, options);
        }
export type CodegenGeneratedPoolQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolQuery>;
export type CodegenGeneratedPoolLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolLazyQuery>;
export type CodegenGeneratedPoolQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>;
export function refetchCodegenGeneratedPoolQuery(variables?: ICodegenGeneratedPoolQueryVariables) {
      return { query: CodegenGeneratedPoolDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterAllChainsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterAllChainsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterAllChainsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterAllChainsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedRouterAllChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>(CodegenGeneratedRouterAllChainsDocument, options);
      }
export function useCodegenGeneratedRouterAllChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>(CodegenGeneratedRouterAllChainsDocument, options);
        }
export type CodegenGeneratedRouterAllChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllChainsQuery>;
export type CodegenGeneratedRouterAllChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllChainsLazyQuery>;
export type CodegenGeneratedRouterAllChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>;
export function refetchCodegenGeneratedRouterAllChainsQuery(variables?: ICodegenGeneratedRouterAllChainsQueryVariables) {
      return { query: CodegenGeneratedRouterAllChainsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterAllEscrowsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterAllEscrowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterAllEscrowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterAllEscrowsQuery({
 *   variables: {
 *      router_all_escrows_limit: // value for 'router_all_escrows_limit'
 *      router_all_escrows_max: // value for 'router_all_escrows_max'
 *      router_all_escrows_min: // value for 'router_all_escrows_min'
 *      router_all_escrows_skip: // value for 'router_all_escrows_skip'
 *   },
 * });
 */
export function useCodegenGeneratedRouterAllEscrowsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>(CodegenGeneratedRouterAllEscrowsDocument, options);
      }
export function useCodegenGeneratedRouterAllEscrowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>(CodegenGeneratedRouterAllEscrowsDocument, options);
        }
export type CodegenGeneratedRouterAllEscrowsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllEscrowsQuery>;
export type CodegenGeneratedRouterAllEscrowsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllEscrowsLazyQuery>;
export type CodegenGeneratedRouterAllEscrowsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>;
export function refetchCodegenGeneratedRouterAllEscrowsQuery(variables?: ICodegenGeneratedRouterAllEscrowsQueryVariables) {
      return { query: CodegenGeneratedRouterAllEscrowsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterAllTokensQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterAllTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterAllTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterAllTokensQuery({
 *   variables: {
 *      router_all_tokens_limit: // value for 'router_all_tokens_limit'
 *      router_all_tokens_max: // value for 'router_all_tokens_max'
 *      router_all_tokens_min: // value for 'router_all_tokens_min'
 *      router_all_tokens_skip: // value for 'router_all_tokens_skip'
 *   },
 * });
 */
export function useCodegenGeneratedRouterAllTokensQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>(CodegenGeneratedRouterAllTokensDocument, options);
      }
export function useCodegenGeneratedRouterAllTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>(CodegenGeneratedRouterAllTokensDocument, options);
        }
export type CodegenGeneratedRouterAllTokensQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllTokensQuery>;
export type CodegenGeneratedRouterAllTokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllTokensLazyQuery>;
export type CodegenGeneratedRouterAllTokensQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>;
export function refetchCodegenGeneratedRouterAllTokensQuery(variables?: ICodegenGeneratedRouterAllTokensQueryVariables) {
      return { query: CodegenGeneratedRouterAllTokensDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterAllVlpsVlpsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterAllVlpsVlpsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterAllVlpsVlpsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterAllVlpsVlpsQuery({
 *   variables: {
 *      router_all_vlps_limit: // value for 'router_all_vlps_limit'
 *      router_all_vlps_max: // value for 'router_all_vlps_max'
 *      router_all_vlps_min: // value for 'router_all_vlps_min'
 *      router_all_vlps_skip: // value for 'router_all_vlps_skip'
 *   },
 * });
 */
export function useCodegenGeneratedRouterAllVlpsVlpsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>(CodegenGeneratedRouterAllVlpsVlpsDocument, options);
      }
export function useCodegenGeneratedRouterAllVlpsVlpsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>(CodegenGeneratedRouterAllVlpsVlpsDocument, options);
        }
export type CodegenGeneratedRouterAllVlpsVlpsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsVlpsQuery>;
export type CodegenGeneratedRouterAllVlpsVlpsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsVlpsLazyQuery>;
export type CodegenGeneratedRouterAllVlpsVlpsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>;
export function refetchCodegenGeneratedRouterAllVlpsVlpsQuery(variables?: ICodegenGeneratedRouterAllVlpsVlpsQueryVariables) {
      return { query: CodegenGeneratedRouterAllVlpsVlpsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterAllVlpsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterAllVlpsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterAllVlpsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterAllVlpsQuery({
 *   variables: {
 *      router_all_vlps_limit: // value for 'router_all_vlps_limit'
 *      router_all_vlps_max: // value for 'router_all_vlps_max'
 *      router_all_vlps_min: // value for 'router_all_vlps_min'
 *      router_all_vlps_skip: // value for 'router_all_vlps_skip'
 *   },
 * });
 */
export function useCodegenGeneratedRouterAllVlpsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>(CodegenGeneratedRouterAllVlpsDocument, options);
      }
export function useCodegenGeneratedRouterAllVlpsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>(CodegenGeneratedRouterAllVlpsDocument, options);
        }
export type CodegenGeneratedRouterAllVlpsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsQuery>;
export type CodegenGeneratedRouterAllVlpsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsLazyQuery>;
export type CodegenGeneratedRouterAllVlpsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>;
export function refetchCodegenGeneratedRouterAllVlpsQuery(variables?: ICodegenGeneratedRouterAllVlpsQueryVariables) {
      return { query: CodegenGeneratedRouterAllVlpsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterChainChainChainTypeIbcQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterChainChainChainTypeIbcQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterChainChainChainTypeIbcQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterChainChainChainTypeIbcQuery({
 *   variables: {
 *      router_chain_chain_uid: // value for 'router_chain_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedRouterChainChainChainTypeIbcQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>(CodegenGeneratedRouterChainChainChainTypeIbcDocument, options);
      }
export function useCodegenGeneratedRouterChainChainChainTypeIbcLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>(CodegenGeneratedRouterChainChainChainTypeIbcDocument, options);
        }
export type CodegenGeneratedRouterChainChainChainTypeIbcQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeIbcQuery>;
export type CodegenGeneratedRouterChainChainChainTypeIbcLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeIbcLazyQuery>;
export type CodegenGeneratedRouterChainChainChainTypeIbcQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>;
export function refetchCodegenGeneratedRouterChainChainChainTypeIbcQuery(variables: ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables) {
      return { query: CodegenGeneratedRouterChainChainChainTypeIbcDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterChainChainChainTypeQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterChainChainChainTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterChainChainChainTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterChainChainChainTypeQuery({
 *   variables: {
 *      router_chain_chain_uid: // value for 'router_chain_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedRouterChainChainChainTypeQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>(CodegenGeneratedRouterChainChainChainTypeDocument, options);
      }
export function useCodegenGeneratedRouterChainChainChainTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>(CodegenGeneratedRouterChainChainChainTypeDocument, options);
        }
export type CodegenGeneratedRouterChainChainChainTypeQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeQuery>;
export type CodegenGeneratedRouterChainChainChainTypeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeLazyQuery>;
export type CodegenGeneratedRouterChainChainChainTypeQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>;
export function refetchCodegenGeneratedRouterChainChainChainTypeQuery(variables: ICodegenGeneratedRouterChainChainChainTypeQueryVariables) {
      return { query: CodegenGeneratedRouterChainChainChainTypeDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterChainChainQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterChainChainQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterChainChainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterChainChainQuery({
 *   variables: {
 *      router_chain_chain_uid: // value for 'router_chain_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedRouterChainChainQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>(CodegenGeneratedRouterChainChainDocument, options);
      }
export function useCodegenGeneratedRouterChainChainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>(CodegenGeneratedRouterChainChainDocument, options);
        }
export type CodegenGeneratedRouterChainChainQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainQuery>;
export type CodegenGeneratedRouterChainChainLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainLazyQuery>;
export type CodegenGeneratedRouterChainChainQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>;
export function refetchCodegenGeneratedRouterChainChainQuery(variables: ICodegenGeneratedRouterChainChainQueryVariables) {
      return { query: CodegenGeneratedRouterChainChainDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterChainQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterChainQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterChainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterChainQuery({
 *   variables: {
 *      router_chain_chain_uid: // value for 'router_chain_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedRouterChainQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>(CodegenGeneratedRouterChainDocument, options);
      }
export function useCodegenGeneratedRouterChainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>(CodegenGeneratedRouterChainDocument, options);
        }
export type CodegenGeneratedRouterChainQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainQuery>;
export type CodegenGeneratedRouterChainLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainLazyQuery>;
export type CodegenGeneratedRouterChainQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>;
export function refetchCodegenGeneratedRouterChainQuery(variables: ICodegenGeneratedRouterChainQueryVariables) {
      return { query: CodegenGeneratedRouterChainDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterEscrowsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterEscrowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterEscrowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterEscrowsQuery({
 *   variables: {
 *      router_escrows_limit: // value for 'router_escrows_limit'
 *      router_escrows_max: // value for 'router_escrows_max'
 *      router_escrows_min: // value for 'router_escrows_min'
 *      router_escrows_skip: // value for 'router_escrows_skip'
 *      router_escrows_token: // value for 'router_escrows_token'
 *   },
 * });
 */
export function useCodegenGeneratedRouterEscrowsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>(CodegenGeneratedRouterEscrowsDocument, options);
      }
export function useCodegenGeneratedRouterEscrowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>(CodegenGeneratedRouterEscrowsDocument, options);
        }
export type CodegenGeneratedRouterEscrowsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterEscrowsQuery>;
export type CodegenGeneratedRouterEscrowsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterEscrowsLazyQuery>;
export type CodegenGeneratedRouterEscrowsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>;
export function refetchCodegenGeneratedRouterEscrowsQuery(variables: ICodegenGeneratedRouterEscrowsQueryVariables) {
      return { query: CodegenGeneratedRouterEscrowsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery({
 *   variables: {
 *      router_simulate_release_escrow_amount: // value for 'router_simulate_release_escrow_amount'
 *      router_simulate_release_escrow_cross_chain_addresses: // value for 'router_simulate_release_escrow_cross_chain_addresses'
 *      router_simulate_release_escrow_token: // value for 'router_simulate_release_escrow_token'
 *   },
 * });
 */
export function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument, options);
      }
export function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument, options);
        }
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>;
export function refetchCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables) {
      return { query: CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery({
 *   variables: {
 *      router_simulate_release_escrow_amount: // value for 'router_simulate_release_escrow_amount'
 *      router_simulate_release_escrow_cross_chain_addresses: // value for 'router_simulate_release_escrow_cross_chain_addresses'
 *      router_simulate_release_escrow_token: // value for 'router_simulate_release_escrow_token'
 *   },
 * });
 */
export function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument, options);
      }
export function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument, options);
        }
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>;
export function refetchCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables) {
      return { query: CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery({
 *   variables: {
 *      router_simulate_release_escrow_amount: // value for 'router_simulate_release_escrow_amount'
 *      router_simulate_release_escrow_cross_chain_addresses: // value for 'router_simulate_release_escrow_cross_chain_addresses'
 *      router_simulate_release_escrow_token: // value for 'router_simulate_release_escrow_token'
 *   },
 * });
 */
export function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument, options);
      }
export function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument, options);
        }
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>;
export function refetchCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables) {
      return { query: CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterSimulateReleaseEscrowQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterSimulateReleaseEscrowQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterSimulateReleaseEscrowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterSimulateReleaseEscrowQuery({
 *   variables: {
 *      router_simulate_release_escrow_amount: // value for 'router_simulate_release_escrow_amount'
 *      router_simulate_release_escrow_cross_chain_addresses: // value for 'router_simulate_release_escrow_cross_chain_addresses'
 *      router_simulate_release_escrow_token: // value for 'router_simulate_release_escrow_token'
 *   },
 * });
 */
export function useCodegenGeneratedRouterSimulateReleaseEscrowQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowDocument, options);
      }
export function useCodegenGeneratedRouterSimulateReleaseEscrowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>(CodegenGeneratedRouterSimulateReleaseEscrowDocument, options);
        }
export type CodegenGeneratedRouterSimulateReleaseEscrowQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>;
export function refetchCodegenGeneratedRouterSimulateReleaseEscrowQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables) {
      return { query: CodegenGeneratedRouterSimulateReleaseEscrowDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterSimulateSwapQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterSimulateSwapQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterSimulateSwapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterSimulateSwapQuery({
 *   variables: {
 *      router_simulate_swap_amount_in: // value for 'router_simulate_swap_amount_in'
 *      router_simulate_swap_asset_in: // value for 'router_simulate_swap_asset_in'
 *      router_simulate_swap_asset_out: // value for 'router_simulate_swap_asset_out'
 *      router_simulate_swap_min_amount_out: // value for 'router_simulate_swap_min_amount_out'
 *      router_simulate_swap_swaps: // value for 'router_simulate_swap_swaps'
 *   },
 * });
 */
export function useCodegenGeneratedRouterSimulateSwapQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>(CodegenGeneratedRouterSimulateSwapDocument, options);
      }
export function useCodegenGeneratedRouterSimulateSwapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>(CodegenGeneratedRouterSimulateSwapDocument, options);
        }
export type CodegenGeneratedRouterSimulateSwapQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateSwapQuery>;
export type CodegenGeneratedRouterSimulateSwapLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateSwapLazyQuery>;
export type CodegenGeneratedRouterSimulateSwapQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>;
export function refetchCodegenGeneratedRouterSimulateSwapQuery(variables: ICodegenGeneratedRouterSimulateSwapQueryVariables) {
      return { query: CodegenGeneratedRouterSimulateSwapDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedRouterStateQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>(CodegenGeneratedRouterStateDocument, options);
      }
export function useCodegenGeneratedRouterStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>(CodegenGeneratedRouterStateDocument, options);
        }
export type CodegenGeneratedRouterStateQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterStateQuery>;
export type CodegenGeneratedRouterStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterStateLazyQuery>;
export type CodegenGeneratedRouterStateQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>;
export function refetchCodegenGeneratedRouterStateQuery(variables?: ICodegenGeneratedRouterStateQueryVariables) {
      return { query: CodegenGeneratedRouterStateDocument, variables: variables }
    }
export const CodegenGeneratedRouterTokenDenomsDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS_DENOMS($router_token_denoms_token: String!) {
  router {
    token_denoms(token: $router_token_denoms_token) {
      denoms {
        chain_uid
        token_type {
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
  }
}
    `;

/**
 * __useCodegenGeneratedRouterTokenDenomsDenomsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterTokenDenomsDenomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterTokenDenomsDenomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterTokenDenomsDenomsQuery({
 *   variables: {
 *      router_token_denoms_token: // value for 'router_token_denoms_token'
 *   },
 * });
 */
export function useCodegenGeneratedRouterTokenDenomsDenomsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>(CodegenGeneratedRouterTokenDenomsDenomsDocument, options);
      }
export function useCodegenGeneratedRouterTokenDenomsDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>(CodegenGeneratedRouterTokenDenomsDenomsDocument, options);
        }
export type CodegenGeneratedRouterTokenDenomsDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsDenomsQuery>;
export type CodegenGeneratedRouterTokenDenomsDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsDenomsLazyQuery>;
export type CodegenGeneratedRouterTokenDenomsDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>;
export function refetchCodegenGeneratedRouterTokenDenomsDenomsQuery(variables: ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables) {
      return { query: CodegenGeneratedRouterTokenDenomsDenomsDocument, variables: variables }
    }
export const CodegenGeneratedRouterTokenDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS($router_token_denoms_token: String!) {
  router {
    token_denoms(token: $router_token_denoms_token) {
      denoms {
        chain_uid
        token_type {
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
  }
}
    `;

/**
 * __useCodegenGeneratedRouterTokenDenomsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterTokenDenomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterTokenDenomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterTokenDenomsQuery({
 *   variables: {
 *      router_token_denoms_token: // value for 'router_token_denoms_token'
 *   },
 * });
 */
export function useCodegenGeneratedRouterTokenDenomsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>(CodegenGeneratedRouterTokenDenomsDocument, options);
      }
export function useCodegenGeneratedRouterTokenDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>(CodegenGeneratedRouterTokenDenomsDocument, options);
        }
export type CodegenGeneratedRouterTokenDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsQuery>;
export type CodegenGeneratedRouterTokenDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsLazyQuery>;
export type CodegenGeneratedRouterTokenDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>;
export function refetchCodegenGeneratedRouterTokenDenomsQuery(variables: ICodegenGeneratedRouterTokenDenomsQueryVariables) {
      return { query: CodegenGeneratedRouterTokenDenomsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterTokenPairsFromVlpQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterTokenPairsFromVlpQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterTokenPairsFromVlpQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterTokenPairsFromVlpQuery({
 *   variables: {
 *      router_token_pairs_from_vlp_vlp: // value for 'router_token_pairs_from_vlp_vlp'
 *   },
 * });
 */
export function useCodegenGeneratedRouterTokenPairsFromVlpQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>(CodegenGeneratedRouterTokenPairsFromVlpDocument, options);
      }
export function useCodegenGeneratedRouterTokenPairsFromVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>(CodegenGeneratedRouterTokenPairsFromVlpDocument, options);
        }
export type CodegenGeneratedRouterTokenPairsFromVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenPairsFromVlpQuery>;
export type CodegenGeneratedRouterTokenPairsFromVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenPairsFromVlpLazyQuery>;
export type CodegenGeneratedRouterTokenPairsFromVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>;
export function refetchCodegenGeneratedRouterTokenPairsFromVlpQuery(variables: ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables) {
      return { query: CodegenGeneratedRouterTokenPairsFromVlpDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterVlpQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterVlpQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterVlpQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterVlpQuery({
 *   variables: {
 *      router_vlp_pair: // value for 'router_vlp_pair'
 *   },
 * });
 */
export function useCodegenGeneratedRouterVlpQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>(CodegenGeneratedRouterVlpDocument, options);
      }
export function useCodegenGeneratedRouterVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>(CodegenGeneratedRouterVlpDocument, options);
        }
export type CodegenGeneratedRouterVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterVlpQuery>;
export type CodegenGeneratedRouterVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterVlpLazyQuery>;
export type CodegenGeneratedRouterVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>;
export function refetchCodegenGeneratedRouterVlpQuery(variables?: ICodegenGeneratedRouterVlpQueryVariables) {
      return { query: CodegenGeneratedRouterVlpDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedRouterQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedRouterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedRouterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedRouterQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedRouterQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>(CodegenGeneratedRouterDocument, options);
      }
export function useCodegenGeneratedRouterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>(CodegenGeneratedRouterDocument, options);
        }
export type CodegenGeneratedRouterQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterQuery>;
export type CodegenGeneratedRouterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterLazyQuery>;
export type CodegenGeneratedRouterQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>;
export function refetchCodegenGeneratedRouterQuery(variables?: ICodegenGeneratedRouterQueryVariables) {
      return { query: CodegenGeneratedRouterDocument, variables: variables }
    }
export const CodegenGeneratedTokenAllDexesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_ALL_DEXES($token_all_dexes_limit: Int, $token_all_dexes_offset: Int) {
  token {
    all_dexes(limit: $token_all_dexes_limit, offset: $token_all_dexes_offset) {
      bg_color
      chain_uid
      dex_name
      display_name
      fg_color
      logo
    }
  }
}
    `;

/**
 * __useCodegenGeneratedTokenAllDexesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenAllDexesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenAllDexesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenAllDexesQuery({
 *   variables: {
 *      token_all_dexes_limit: // value for 'token_all_dexes_limit'
 *      token_all_dexes_offset: // value for 'token_all_dexes_offset'
 *   },
 * });
 */
export function useCodegenGeneratedTokenAllDexesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>(CodegenGeneratedTokenAllDexesDocument, options);
      }
export function useCodegenGeneratedTokenAllDexesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>(CodegenGeneratedTokenAllDexesDocument, options);
        }
export type CodegenGeneratedTokenAllDexesQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenAllDexesQuery>;
export type CodegenGeneratedTokenAllDexesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenAllDexesLazyQuery>;
export type CodegenGeneratedTokenAllDexesQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>;
export function refetchCodegenGeneratedTokenAllDexesQuery(variables?: ICodegenGeneratedTokenAllDexesQueryVariables) {
      return { query: CodegenGeneratedTokenAllDexesDocument, variables: variables }
    }
export const CodegenGeneratedTokenDexMetadataDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_DEX_METADATA($token_dex_metadata_dex: String!) {
  token {
    dex_metadata(dex: $token_dex_metadata_dex) {
      bg_color
      chain_uid
      dex_name
      display_name
      fg_color
      logo
    }
  }
}
    `;

/**
 * __useCodegenGeneratedTokenDexMetadataQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenDexMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenDexMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenDexMetadataQuery({
 *   variables: {
 *      token_dex_metadata_dex: // value for 'token_dex_metadata_dex'
 *   },
 * });
 */
export function useCodegenGeneratedTokenDexMetadataQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>(CodegenGeneratedTokenDexMetadataDocument, options);
      }
export function useCodegenGeneratedTokenDexMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>(CodegenGeneratedTokenDexMetadataDocument, options);
        }
export type CodegenGeneratedTokenDexMetadataQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenDexMetadataQuery>;
export type CodegenGeneratedTokenDexMetadataLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenDexMetadataLazyQuery>;
export type CodegenGeneratedTokenDexMetadataQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>;
export function refetchCodegenGeneratedTokenDexMetadataQuery(variables: ICodegenGeneratedTokenDexMetadataQueryVariables) {
      return { query: CodegenGeneratedTokenDexMetadataDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTokenGetAllFaucetsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenGetAllFaucetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenGetAllFaucetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenGetAllFaucetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedTokenGetAllFaucetsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>(CodegenGeneratedTokenGetAllFaucetsDocument, options);
      }
export function useCodegenGeneratedTokenGetAllFaucetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>(CodegenGeneratedTokenGetAllFaucetsDocument, options);
        }
export type CodegenGeneratedTokenGetAllFaucetsQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenGetAllFaucetsQuery>;
export type CodegenGeneratedTokenGetAllFaucetsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenGetAllFaucetsLazyQuery>;
export type CodegenGeneratedTokenGetAllFaucetsQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>;
export function refetchCodegenGeneratedTokenGetAllFaucetsQuery(variables?: ICodegenGeneratedTokenGetAllFaucetsQueryVariables) {
      return { query: CodegenGeneratedTokenGetAllFaucetsDocument, variables: variables }
    }
export const CodegenGeneratedTokenTokenDenomsDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS_DENOMS($token_token_denoms_chain_uid: [String!], $token_token_denoms_denom: String, $token_token_denoms_token_id: String) {
  token {
    token_denoms(
      chain_uid: $token_token_denoms_chain_uid
      denom: $token_token_denoms_denom
      token_id: $token_token_denoms_token_id
    ) {
      denoms {
        chain_uid
        token_type {
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
  }
}
    `;

/**
 * __useCodegenGeneratedTokenTokenDenomsDenomsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenTokenDenomsDenomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenTokenDenomsDenomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenTokenDenomsDenomsQuery({
 *   variables: {
 *      token_token_denoms_chain_uid: // value for 'token_token_denoms_chain_uid'
 *      token_token_denoms_denom: // value for 'token_token_denoms_denom'
 *      token_token_denoms_token_id: // value for 'token_token_denoms_token_id'
 *   },
 * });
 */
export function useCodegenGeneratedTokenTokenDenomsDenomsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>(CodegenGeneratedTokenTokenDenomsDenomsDocument, options);
      }
export function useCodegenGeneratedTokenTokenDenomsDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>(CodegenGeneratedTokenTokenDenomsDenomsDocument, options);
        }
export type CodegenGeneratedTokenTokenDenomsDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsDenomsQuery>;
export type CodegenGeneratedTokenTokenDenomsDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsDenomsLazyQuery>;
export type CodegenGeneratedTokenTokenDenomsDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>;
export function refetchCodegenGeneratedTokenTokenDenomsDenomsQuery(variables?: ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables) {
      return { query: CodegenGeneratedTokenTokenDenomsDenomsDocument, variables: variables }
    }
export const CodegenGeneratedTokenTokenDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS($token_token_denoms_chain_uid: [String!], $token_token_denoms_denom: String, $token_token_denoms_token_id: String) {
  token {
    token_denoms(
      chain_uid: $token_token_denoms_chain_uid
      denom: $token_token_denoms_denom
      token_id: $token_token_denoms_token_id
    ) {
      denoms {
        chain_uid
        token_type {
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
      token_id
    }
  }
}
    `;

/**
 * __useCodegenGeneratedTokenTokenDenomsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenTokenDenomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenTokenDenomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenTokenDenomsQuery({
 *   variables: {
 *      token_token_denoms_chain_uid: // value for 'token_token_denoms_chain_uid'
 *      token_token_denoms_denom: // value for 'token_token_denoms_denom'
 *      token_token_denoms_token_id: // value for 'token_token_denoms_token_id'
 *   },
 * });
 */
export function useCodegenGeneratedTokenTokenDenomsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>(CodegenGeneratedTokenTokenDenomsDocument, options);
      }
export function useCodegenGeneratedTokenTokenDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>(CodegenGeneratedTokenTokenDenomsDocument, options);
        }
export type CodegenGeneratedTokenTokenDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsQuery>;
export type CodegenGeneratedTokenTokenDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsLazyQuery>;
export type CodegenGeneratedTokenTokenDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>;
export function refetchCodegenGeneratedTokenTokenDenomsQuery(variables?: ICodegenGeneratedTokenTokenDenomsQueryVariables) {
      return { query: CodegenGeneratedTokenTokenDenomsDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTokenTokenLiquiditiesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenTokenLiquiditiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenTokenLiquiditiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenTokenLiquiditiesQuery({
 *   variables: {
 *      token_token_liquidities_limit: // value for 'token_token_liquidities_limit'
 *      token_token_liquidities_page: // value for 'token_token_liquidities_page'
 *   },
 * });
 */
export function useCodegenGeneratedTokenTokenLiquiditiesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>(CodegenGeneratedTokenTokenLiquiditiesDocument, options);
      }
export function useCodegenGeneratedTokenTokenLiquiditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>(CodegenGeneratedTokenTokenLiquiditiesDocument, options);
        }
export type CodegenGeneratedTokenTokenLiquiditiesQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquiditiesQuery>;
export type CodegenGeneratedTokenTokenLiquiditiesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquiditiesLazyQuery>;
export type CodegenGeneratedTokenTokenLiquiditiesQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>;
export function refetchCodegenGeneratedTokenTokenLiquiditiesQuery(variables: ICodegenGeneratedTokenTokenLiquiditiesQueryVariables) {
      return { query: CodegenGeneratedTokenTokenLiquiditiesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTokenTokenLiquidityQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenTokenLiquidityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenTokenLiquidityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenTokenLiquidityQuery({
 *   variables: {
 *      token_token_liquidity_token: // value for 'token_token_liquidity_token'
 *   },
 * });
 */
export function useCodegenGeneratedTokenTokenLiquidityQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>(CodegenGeneratedTokenTokenLiquidityDocument, options);
      }
export function useCodegenGeneratedTokenTokenLiquidityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>(CodegenGeneratedTokenTokenLiquidityDocument, options);
        }
export type CodegenGeneratedTokenTokenLiquidityQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquidityQuery>;
export type CodegenGeneratedTokenTokenLiquidityLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquidityLazyQuery>;
export type CodegenGeneratedTokenTokenLiquidityQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>;
export function refetchCodegenGeneratedTokenTokenLiquidityQuery(variables: ICodegenGeneratedTokenTokenLiquidityQueryVariables) {
      return { query: CodegenGeneratedTokenTokenLiquidityDocument, variables: variables }
    }
export const CodegenGeneratedTokenTokenMetadataByIdDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID($token_token_metadata_by_id_token_id: String!, $token_token_metadata_by_id_verified: Boolean) {
  token {
    token_metadata_by_id(
      token_id: $token_token_metadata_by_id_token_id
      verified: $token_token_metadata_by_id_verified
    ) {
      chain_uids
      coinDecimal
      description
      dex
      displayName
      image
      price
      price_change_7d
      price_change_24h
      tags
      tokenId
      total_volume
      total_volume_24h
    }
  }
}
    `;

/**
 * __useCodegenGeneratedTokenTokenMetadataByIdQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenTokenMetadataByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenTokenMetadataByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenTokenMetadataByIdQuery({
 *   variables: {
 *      token_token_metadata_by_id_token_id: // value for 'token_token_metadata_by_id_token_id'
 *      token_token_metadata_by_id_verified: // value for 'token_token_metadata_by_id_verified'
 *   },
 * });
 */
export function useCodegenGeneratedTokenTokenMetadataByIdQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>(CodegenGeneratedTokenTokenMetadataByIdDocument, options);
      }
export function useCodegenGeneratedTokenTokenMetadataByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>(CodegenGeneratedTokenTokenMetadataByIdDocument, options);
        }
export type CodegenGeneratedTokenTokenMetadataByIdQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadataByIdQuery>;
export type CodegenGeneratedTokenTokenMetadataByIdLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadataByIdLazyQuery>;
export type CodegenGeneratedTokenTokenMetadataByIdQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>;
export function refetchCodegenGeneratedTokenTokenMetadataByIdQuery(variables: ICodegenGeneratedTokenTokenMetadataByIdQueryVariables) {
      return { query: CodegenGeneratedTokenTokenMetadataByIdDocument, variables: variables }
    }
export const CodegenGeneratedTokenTokenMetadatasDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS($token_token_metadatas_chain_uids: [String!], $token_token_metadatas_dex: [String!], $token_token_metadatas_limit: Int, $token_token_metadatas_offset: Int, $token_token_metadatas_show_volume: Boolean, $token_token_metadatas_verified: Boolean) {
  token {
    token_metadatas(
      chain_uids: $token_token_metadatas_chain_uids
      dex: $token_token_metadatas_dex
      limit: $token_token_metadatas_limit
      offset: $token_token_metadatas_offset
      show_volume: $token_token_metadatas_show_volume
      verified: $token_token_metadatas_verified
    ) {
      chain_uids
      coinDecimal
      description
      dex
      displayName
      image
      price
      price_change_7d
      price_change_24h
      tags
      tokenId
      total_volume
      total_volume_24h
    }
  }
}
    `;

/**
 * __useCodegenGeneratedTokenTokenMetadatasQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenTokenMetadatasQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenTokenMetadatasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenTokenMetadatasQuery({
 *   variables: {
 *      token_token_metadatas_chain_uids: // value for 'token_token_metadatas_chain_uids'
 *      token_token_metadatas_dex: // value for 'token_token_metadatas_dex'
 *      token_token_metadatas_limit: // value for 'token_token_metadatas_limit'
 *      token_token_metadatas_offset: // value for 'token_token_metadatas_offset'
 *      token_token_metadatas_show_volume: // value for 'token_token_metadatas_show_volume'
 *      token_token_metadatas_verified: // value for 'token_token_metadatas_verified'
 *   },
 * });
 */
export function useCodegenGeneratedTokenTokenMetadatasQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>(CodegenGeneratedTokenTokenMetadatasDocument, options);
      }
export function useCodegenGeneratedTokenTokenMetadatasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>(CodegenGeneratedTokenTokenMetadatasDocument, options);
        }
export type CodegenGeneratedTokenTokenMetadatasQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadatasQuery>;
export type CodegenGeneratedTokenTokenMetadatasLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadatasLazyQuery>;
export type CodegenGeneratedTokenTokenMetadatasQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>;
export function refetchCodegenGeneratedTokenTokenMetadatasQuery(variables?: ICodegenGeneratedTokenTokenMetadatasQueryVariables) {
      return { query: CodegenGeneratedTokenTokenMetadatasDocument, variables: variables }
    }
export const CodegenGeneratedTokenTokensMetadataDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKENS_METADATA($token_tokens_metadata_token_ids: [String!]!, $token_tokens_metadata_verified: Boolean) {
  token {
    tokens_metadata(
      token_ids: $token_tokens_metadata_token_ids
      verified: $token_tokens_metadata_verified
    ) {
      chain_uids
      coinDecimal
      description
      dex
      displayName
      image
      price
      price_change_7d
      price_change_24h
      tags
      tokenId
      total_volume
      total_volume_24h
    }
  }
}
    `;

/**
 * __useCodegenGeneratedTokenTokensMetadataQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenTokensMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenTokensMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenTokensMetadataQuery({
 *   variables: {
 *      token_tokens_metadata_token_ids: // value for 'token_tokens_metadata_token_ids'
 *      token_tokens_metadata_verified: // value for 'token_tokens_metadata_verified'
 *   },
 * });
 */
export function useCodegenGeneratedTokenTokensMetadataQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>(CodegenGeneratedTokenTokensMetadataDocument, options);
      }
export function useCodegenGeneratedTokenTokensMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>(CodegenGeneratedTokenTokensMetadataDocument, options);
        }
export type CodegenGeneratedTokenTokensMetadataQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokensMetadataQuery>;
export type CodegenGeneratedTokenTokensMetadataLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokensMetadataLazyQuery>;
export type CodegenGeneratedTokenTokensMetadataQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>;
export function refetchCodegenGeneratedTokenTokensMetadataQuery(variables: ICodegenGeneratedTokenTokensMetadataQueryVariables) {
      return { query: CodegenGeneratedTokenTokensMetadataDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedTokenQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedTokenQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>(CodegenGeneratedTokenDocument, options);
      }
export function useCodegenGeneratedTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>(CodegenGeneratedTokenDocument, options);
        }
export type CodegenGeneratedTokenQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenQuery>;
export type CodegenGeneratedTokenLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenLazyQuery>;
export type CodegenGeneratedTokenQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>;
export function refetchCodegenGeneratedTokenQuery(variables?: ICodegenGeneratedTokenQueryVariables) {
      return { query: CodegenGeneratedTokenDocument, variables: variables }
    }
export const CodegenGeneratedVcoinBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_BALANCE($vcoin_balance_balance_key: BalanceKeyInput) {
  vcoin {
    balance(balance_key: $vcoin_balance_balance_key) {
      amount
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVcoinBalanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVcoinBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVcoinBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVcoinBalanceQuery({
 *   variables: {
 *      vcoin_balance_balance_key: // value for 'vcoin_balance_balance_key'
 *   },
 * });
 */
export function useCodegenGeneratedVcoinBalanceQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>(CodegenGeneratedVcoinBalanceDocument, options);
      }
export function useCodegenGeneratedVcoinBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>(CodegenGeneratedVcoinBalanceDocument, options);
        }
export type CodegenGeneratedVcoinBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinBalanceQuery>;
export type CodegenGeneratedVcoinBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinBalanceLazyQuery>;
export type CodegenGeneratedVcoinBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>;
export function refetchCodegenGeneratedVcoinBalanceQuery(variables?: ICodegenGeneratedVcoinBalanceQueryVariables) {
      return { query: CodegenGeneratedVcoinBalanceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedVcoinStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVcoinStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVcoinStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVcoinStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedVcoinStateQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>(CodegenGeneratedVcoinStateDocument, options);
      }
export function useCodegenGeneratedVcoinStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>(CodegenGeneratedVcoinStateDocument, options);
        }
export type CodegenGeneratedVcoinStateQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinStateQuery>;
export type CodegenGeneratedVcoinStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinStateLazyQuery>;
export type CodegenGeneratedVcoinStateQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>;
export function refetchCodegenGeneratedVcoinStateQuery(variables?: ICodegenGeneratedVcoinStateQueryVariables) {
      return { query: CodegenGeneratedVcoinStateDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedVcoinUserBalanceBalancesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVcoinUserBalanceBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVcoinUserBalanceBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVcoinUserBalanceBalancesQuery({
 *   variables: {
 *      vcoin_user_balance_user: // value for 'vcoin_user_balance_user'
 *   },
 * });
 */
export function useCodegenGeneratedVcoinUserBalanceBalancesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>(CodegenGeneratedVcoinUserBalanceBalancesDocument, options);
      }
export function useCodegenGeneratedVcoinUserBalanceBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>(CodegenGeneratedVcoinUserBalanceBalancesDocument, options);
        }
export type CodegenGeneratedVcoinUserBalanceBalancesQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceBalancesQuery>;
export type CodegenGeneratedVcoinUserBalanceBalancesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceBalancesLazyQuery>;
export type CodegenGeneratedVcoinUserBalanceBalancesQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>;
export function refetchCodegenGeneratedVcoinUserBalanceBalancesQuery(variables?: ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables) {
      return { query: CodegenGeneratedVcoinUserBalanceBalancesDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedVcoinUserBalanceQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVcoinUserBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVcoinUserBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVcoinUserBalanceQuery({
 *   variables: {
 *      vcoin_user_balance_user: // value for 'vcoin_user_balance_user'
 *   },
 * });
 */
export function useCodegenGeneratedVcoinUserBalanceQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>(CodegenGeneratedVcoinUserBalanceDocument, options);
      }
export function useCodegenGeneratedVcoinUserBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>(CodegenGeneratedVcoinUserBalanceDocument, options);
        }
export type CodegenGeneratedVcoinUserBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceQuery>;
export type CodegenGeneratedVcoinUserBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceLazyQuery>;
export type CodegenGeneratedVcoinUserBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>;
export function refetchCodegenGeneratedVcoinUserBalanceQuery(variables?: ICodegenGeneratedVcoinUserBalanceQueryVariables) {
      return { query: CodegenGeneratedVcoinUserBalanceDocument, variables: variables }
    }
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

/**
 * __useCodegenGeneratedVcoinQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVcoinQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVcoinQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVcoinQuery({
 *   variables: {
 *   },
 * });
 */
export function useCodegenGeneratedVcoinQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>(CodegenGeneratedVcoinDocument, options);
      }
export function useCodegenGeneratedVcoinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>(CodegenGeneratedVcoinDocument, options);
        }
export type CodegenGeneratedVcoinQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinQuery>;
export type CodegenGeneratedVcoinLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinLazyQuery>;
export type CodegenGeneratedVcoinQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>;
export function refetchCodegenGeneratedVcoinQuery(variables?: ICodegenGeneratedVcoinQueryVariables) {
      return { query: CodegenGeneratedVcoinDocument, variables: variables }
    }
export const CodegenGeneratedVlpAllPoolsPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpAllPoolsPaginationQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpAllPoolsPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpAllPoolsPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpAllPoolsPaginationQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *      vlp_all_pools_limit: // value for 'vlp_all_pools_limit'
 *      vlp_all_pools_offset: // value for 'vlp_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedVlpAllPoolsPaginationQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>(CodegenGeneratedVlpAllPoolsPaginationDocument, options);
      }
export function useCodegenGeneratedVlpAllPoolsPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>(CodegenGeneratedVlpAllPoolsPaginationDocument, options);
        }
export type CodegenGeneratedVlpAllPoolsPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPaginationQuery>;
export type CodegenGeneratedVlpAllPoolsPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPaginationLazyQuery>;
export type CodegenGeneratedVlpAllPoolsPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>;
export function refetchCodegenGeneratedVlpAllPoolsPaginationQuery(variables?: ICodegenGeneratedVlpAllPoolsPaginationQueryVariables) {
      return { query: CodegenGeneratedVlpAllPoolsPaginationDocument, variables: variables }
    }
export const CodegenGeneratedVlpAllPoolsPoolsPoolDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpAllPoolsPoolsPoolQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpAllPoolsPoolsPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpAllPoolsPoolsPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpAllPoolsPoolsPoolQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *      vlp_all_pools_limit: // value for 'vlp_all_pools_limit'
 *      vlp_all_pools_offset: // value for 'vlp_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedVlpAllPoolsPoolsPoolQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>(CodegenGeneratedVlpAllPoolsPoolsPoolDocument, options);
      }
export function useCodegenGeneratedVlpAllPoolsPoolsPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>(CodegenGeneratedVlpAllPoolsPoolsPoolDocument, options);
        }
export type CodegenGeneratedVlpAllPoolsPoolsPoolQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsPoolQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsPoolLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsPoolLazyQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsPoolQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>;
export function refetchCodegenGeneratedVlpAllPoolsPoolsPoolQuery(variables?: ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables) {
      return { query: CodegenGeneratedVlpAllPoolsPoolsPoolDocument, variables: variables }
    }
export const CodegenGeneratedVlpAllPoolsPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpAllPoolsPoolsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpAllPoolsPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpAllPoolsPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpAllPoolsPoolsQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *      vlp_all_pools_limit: // value for 'vlp_all_pools_limit'
 *      vlp_all_pools_offset: // value for 'vlp_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedVlpAllPoolsPoolsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>(CodegenGeneratedVlpAllPoolsPoolsDocument, options);
      }
export function useCodegenGeneratedVlpAllPoolsPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>(CodegenGeneratedVlpAllPoolsPoolsDocument, options);
        }
export type CodegenGeneratedVlpAllPoolsPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsLazyQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>;
export function refetchCodegenGeneratedVlpAllPoolsPoolsQuery(variables?: ICodegenGeneratedVlpAllPoolsPoolsQueryVariables) {
      return { query: CodegenGeneratedVlpAllPoolsPoolsDocument, variables: variables }
    }
export const CodegenGeneratedVlpAllPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpAllPoolsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpAllPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpAllPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpAllPoolsQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *      vlp_all_pools_limit: // value for 'vlp_all_pools_limit'
 *      vlp_all_pools_offset: // value for 'vlp_all_pools_offset'
 *   },
 * });
 */
export function useCodegenGeneratedVlpAllPoolsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>(CodegenGeneratedVlpAllPoolsDocument, options);
      }
export function useCodegenGeneratedVlpAllPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>(CodegenGeneratedVlpAllPoolsDocument, options);
        }
export type CodegenGeneratedVlpAllPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsQuery>;
export type CodegenGeneratedVlpAllPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsLazyQuery>;
export type CodegenGeneratedVlpAllPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>;
export function refetchCodegenGeneratedVlpAllPoolsQuery(variables?: ICodegenGeneratedVlpAllPoolsQueryVariables) {
      return { query: CodegenGeneratedVlpAllPoolsDocument, variables: variables }
    }
export const CodegenGeneratedVlpFeeRecipientDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_FEE_RECIPIENT($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    fee {
      recipient {
        address
        chain_uid
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpFeeRecipientQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpFeeRecipientQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpFeeRecipientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpFeeRecipientQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpFeeRecipientQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>(CodegenGeneratedVlpFeeRecipientDocument, options);
      }
export function useCodegenGeneratedVlpFeeRecipientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>(CodegenGeneratedVlpFeeRecipientDocument, options);
        }
export type CodegenGeneratedVlpFeeRecipientQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeRecipientQuery>;
export type CodegenGeneratedVlpFeeRecipientLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeRecipientLazyQuery>;
export type CodegenGeneratedVlpFeeRecipientQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>;
export function refetchCodegenGeneratedVlpFeeRecipientQuery(variables?: ICodegenGeneratedVlpFeeRecipientQueryVariables) {
      return { query: CodegenGeneratedVlpFeeRecipientDocument, variables: variables }
    }
export const CodegenGeneratedVlpFeeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_FEE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpFeeQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpFeeQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpFeeQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>(CodegenGeneratedVlpFeeDocument, options);
      }
export function useCodegenGeneratedVlpFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>(CodegenGeneratedVlpFeeDocument, options);
        }
export type CodegenGeneratedVlpFeeQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeQuery>;
export type CodegenGeneratedVlpFeeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeLazyQuery>;
export type CodegenGeneratedVlpFeeQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>;
export function refetchCodegenGeneratedVlpFeeQuery(variables?: ICodegenGeneratedVlpFeeQueryVariables) {
      return { query: CodegenGeneratedVlpFeeDocument, variables: variables }
    }
export const CodegenGeneratedVlpLiquidityPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    liquidity {
      pair {
        token_1
        token_2
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpLiquidityPairQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpLiquidityPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpLiquidityPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpLiquidityPairQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpLiquidityPairQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>(CodegenGeneratedVlpLiquidityPairDocument, options);
      }
export function useCodegenGeneratedVlpLiquidityPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>(CodegenGeneratedVlpLiquidityPairDocument, options);
        }
export type CodegenGeneratedVlpLiquidityPairQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityPairQuery>;
export type CodegenGeneratedVlpLiquidityPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityPairLazyQuery>;
export type CodegenGeneratedVlpLiquidityPairQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>;
export function refetchCodegenGeneratedVlpLiquidityPairQuery(variables?: ICodegenGeneratedVlpLiquidityPairQueryVariables) {
      return { query: CodegenGeneratedVlpLiquidityPairDocument, variables: variables }
    }
export const CodegenGeneratedVlpLiquidityDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_LIQUIDITY($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpLiquidityQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpLiquidityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpLiquidityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpLiquidityQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpLiquidityQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>(CodegenGeneratedVlpLiquidityDocument, options);
      }
export function useCodegenGeneratedVlpLiquidityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>(CodegenGeneratedVlpLiquidityDocument, options);
        }
export type CodegenGeneratedVlpLiquidityQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityQuery>;
export type CodegenGeneratedVlpLiquidityLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityLazyQuery>;
export type CodegenGeneratedVlpLiquidityQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>;
export function refetchCodegenGeneratedVlpLiquidityQuery(variables?: ICodegenGeneratedVlpLiquidityQueryVariables) {
      return { query: CodegenGeneratedVlpLiquidityDocument, variables: variables }
    }
export const CodegenGeneratedVlpPoolDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POOL($contract: String, $pair: PairInput, $vlp_pool_chain_uid: String!) {
  vlp(contract: $contract, pair: $pair) {
    pool(chain_uid: $vlp_pool_chain_uid) {
      lp_shares
      reserve_1
      reserve_2
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpPoolQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpPoolQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *      vlp_pool_chain_uid: // value for 'vlp_pool_chain_uid'
 *   },
 * });
 */
export function useCodegenGeneratedVlpPoolQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>(CodegenGeneratedVlpPoolDocument, options);
      }
export function useCodegenGeneratedVlpPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>(CodegenGeneratedVlpPoolDocument, options);
        }
export type CodegenGeneratedVlpPoolQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpPoolQuery>;
export type CodegenGeneratedVlpPoolLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpPoolLazyQuery>;
export type CodegenGeneratedVlpPoolQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>;
export function refetchCodegenGeneratedVlpPoolQuery(variables: ICodegenGeneratedVlpPoolQueryVariables) {
      return { query: CodegenGeneratedVlpPoolDocument, variables: variables }
    }
export const CodegenGeneratedVlpStateFeeRecipientDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpStateFeeRecipientQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpStateFeeRecipientQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpStateFeeRecipientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpStateFeeRecipientQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpStateFeeRecipientQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>(CodegenGeneratedVlpStateFeeRecipientDocument, options);
      }
export function useCodegenGeneratedVlpStateFeeRecipientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>(CodegenGeneratedVlpStateFeeRecipientDocument, options);
        }
export type CodegenGeneratedVlpStateFeeRecipientQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeRecipientQuery>;
export type CodegenGeneratedVlpStateFeeRecipientLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeRecipientLazyQuery>;
export type CodegenGeneratedVlpStateFeeRecipientQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>;
export function refetchCodegenGeneratedVlpStateFeeRecipientQuery(variables?: ICodegenGeneratedVlpStateFeeRecipientQueryVariables) {
      return { query: CodegenGeneratedVlpStateFeeRecipientDocument, variables: variables }
    }
export const CodegenGeneratedVlpStateFeeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_FEE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpStateFeeQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpStateFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpStateFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpStateFeeQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpStateFeeQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>(CodegenGeneratedVlpStateFeeDocument, options);
      }
export function useCodegenGeneratedVlpStateFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>(CodegenGeneratedVlpStateFeeDocument, options);
        }
export type CodegenGeneratedVlpStateFeeQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeQuery>;
export type CodegenGeneratedVlpStateFeeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeLazyQuery>;
export type CodegenGeneratedVlpStateFeeQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>;
export function refetchCodegenGeneratedVlpStateFeeQuery(variables?: ICodegenGeneratedVlpStateFeeQueryVariables) {
      return { query: CodegenGeneratedVlpStateFeeDocument, variables: variables }
    }
export const CodegenGeneratedVlpStatePairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_PAIR($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      pair {
        token_1
        token_2
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpStatePairQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpStatePairQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpStatePairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpStatePairQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpStatePairQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>(CodegenGeneratedVlpStatePairDocument, options);
      }
export function useCodegenGeneratedVlpStatePairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>(CodegenGeneratedVlpStatePairDocument, options);
        }
export type CodegenGeneratedVlpStatePairQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePairQuery>;
export type CodegenGeneratedVlpStatePairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePairLazyQuery>;
export type CodegenGeneratedVlpStatePairQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>;
export function refetchCodegenGeneratedVlpStatePairQuery(variables?: ICodegenGeneratedVlpStatePairQueryVariables) {
      return { query: CodegenGeneratedVlpStatePairDocument, variables: variables }
    }
export const CodegenGeneratedVlpStatePoolConfigStableDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_STABLE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      pool_config {
        stable {
          amp_factor
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpStatePoolConfigStableQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpStatePoolConfigStableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpStatePoolConfigStableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpStatePoolConfigStableQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpStatePoolConfigStableQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>(CodegenGeneratedVlpStatePoolConfigStableDocument, options);
      }
export function useCodegenGeneratedVlpStatePoolConfigStableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>(CodegenGeneratedVlpStatePoolConfigStableDocument, options);
        }
export type CodegenGeneratedVlpStatePoolConfigStableQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigStableQuery>;
export type CodegenGeneratedVlpStatePoolConfigStableLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigStableLazyQuery>;
export type CodegenGeneratedVlpStatePoolConfigStableQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>;
export function refetchCodegenGeneratedVlpStatePoolConfigStableQuery(variables?: ICodegenGeneratedVlpStatePoolConfigStableQueryVariables) {
      return { query: CodegenGeneratedVlpStatePoolConfigStableDocument, variables: variables }
    }
export const CodegenGeneratedVlpStatePoolConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      pool_config {
        constant_product
        stable {
          amp_factor
        }
      }
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpStatePoolConfigQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpStatePoolConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpStatePoolConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpStatePoolConfigQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpStatePoolConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>(CodegenGeneratedVlpStatePoolConfigDocument, options);
      }
export function useCodegenGeneratedVlpStatePoolConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>(CodegenGeneratedVlpStatePoolConfigDocument, options);
        }
export type CodegenGeneratedVlpStatePoolConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigQuery>;
export type CodegenGeneratedVlpStatePoolConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigLazyQuery>;
export type CodegenGeneratedVlpStatePoolConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>;
export function refetchCodegenGeneratedVlpStatePoolConfigQuery(variables?: ICodegenGeneratedVlpStatePoolConfigQueryVariables) {
      return { query: CodegenGeneratedVlpStatePoolConfigDocument, variables: variables }
    }
export const CodegenGeneratedVlpStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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
      pool_config {
        constant_product
        stable {
          amp_factor
        }
      }
      router
      total_lp_tokens
      vcoin
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpStateQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpStateQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpStateQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>(CodegenGeneratedVlpStateDocument, options);
      }
export function useCodegenGeneratedVlpStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>(CodegenGeneratedVlpStateDocument, options);
        }
export type CodegenGeneratedVlpStateQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateQuery>;
export type CodegenGeneratedVlpStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateLazyQuery>;
export type CodegenGeneratedVlpStateQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>;
export function refetchCodegenGeneratedVlpStateQuery(variables?: ICodegenGeneratedVlpStateQueryVariables) {
      return { query: CodegenGeneratedVlpStateDocument, variables: variables }
    }
export const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument, options);
      }
export function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument, options);
        }
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>;
export function refetchCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables) {
      return { query: CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument, variables: variables }
    }
export const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument, options);
      }
export function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument, options);
        }
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>;
export function refetchCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables) {
      return { query: CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument, variables: variables }
    }
export const CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument, options);
      }
export function useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument, options);
        }
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>;
export function refetchCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables) {
      return { query: CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument, variables: variables }
    }
export const CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument, options);
      }
export function useCodegenGeneratedVlpTotalFeesCollectedLpFeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument, options);
        }
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>;
export function refetchCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables) {
      return { query: CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument, variables: variables }
    }
export const CodegenGeneratedVlpTotalFeesCollectedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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

/**
 * __useCodegenGeneratedVlpTotalFeesCollectedQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpTotalFeesCollectedQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpTotalFeesCollectedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpTotalFeesCollectedQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpTotalFeesCollectedQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedDocument, options);
      }
export function useCodegenGeneratedVlpTotalFeesCollectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedDocument, options);
        }
export type CodegenGeneratedVlpTotalFeesCollectedQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>;
export function refetchCodegenGeneratedVlpTotalFeesCollectedQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedQueryVariables) {
      return { query: CodegenGeneratedVlpTotalFeesCollectedDocument, variables: variables }
    }
export const CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM($contract: String, $pair: PairInput, $vlp_total_fees_collected_per_denom_denom: String!) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected_per_denom(denom: $vlp_total_fees_collected_per_denom_denom) {
      euclid_fees
      lp_fees
    }
  }
}
    `;

/**
 * __useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *      vlp_total_fees_collected_per_denom_denom: // value for 'vlp_total_fees_collected_per_denom_denom'
 *   },
 * });
 */
export function useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument, options);
      }
export function useCodegenGeneratedVlpTotalFeesCollectedPerDenomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>(CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument, options);
        }
export type CodegenGeneratedVlpTotalFeesCollectedPerDenomQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedPerDenomLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedPerDenomLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedPerDenomQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>;
export function refetchCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery(variables: ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables) {
      return { query: CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument, variables: variables }
    }
export const CodegenGeneratedVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
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
      pool_config {
        constant_product
        stable {
          amp_factor
        }
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

/**
 * __useCodegenGeneratedVlpQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedVlpQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedVlpQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedVlpQuery({
 *   variables: {
 *      contract: // value for 'contract'
 *      pair: // value for 'pair'
 *   },
 * });
 */
export function useCodegenGeneratedVlpQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>(CodegenGeneratedVlpDocument, options);
      }
export function useCodegenGeneratedVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>(CodegenGeneratedVlpDocument, options);
        }
export type CodegenGeneratedVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpQuery>;
export type CodegenGeneratedVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLazyQuery>;
export type CodegenGeneratedVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>;
export function refetchCodegenGeneratedVlpQuery(variables?: ICodegenGeneratedVlpQueryVariables) {
      return { query: CodegenGeneratedVlpDocument, variables: variables }
    }