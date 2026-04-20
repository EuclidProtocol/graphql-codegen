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
  /** Address and Chain UID of the user */
  cross_chain_user?: InputMaybe<ICrossChainUserInput>;
  /** Token ID of the token */
  token_id?: InputMaybe<Scalars['String']['input']>;
};

export type IConcentratedPoolParamsInput = {
  /** The fee tier in basis points. */
  fee_tier_bps: Scalars['Int']['input'];
  /** The tick spacing for the pool. */
  tick_spacing: Scalars['Int']['input'];
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
  /** Optional pool type to route through a specific pool. The pair is derived from token_in/token_out in alphabetical order. */
  pool_type?: InputMaybe<IPoolTypeInput>;
  token_in: Scalars['String']['input'];
  token_out: Scalars['String']['input'];
};

export type IPairInput = {
  token_1?: InputMaybe<Scalars['String']['input']>;
  token_2?: InputMaybe<Scalars['String']['input']>;
};

/** Input for specifying a pool key (pair + pool type). */
export type IPoolKeyInput = {
  /** The token pair for the pool. */
  pair: IPairInput;
  /** The pool type. */
  pool_type: IPoolTypeInput;
};

/** Input for specifying the pool type when querying. */
export type IPoolTypeInput = {
  /** Set for concentrated pool with fee_tier_bps and tick_spacing. */
  concentrated?: InputMaybe<IConcentratedPoolParamsInput>;
  /** Set to {} for constant product pool. */
  constant_product?: InputMaybe<Scalars['JSON']['input']>;
  /** Set to {} for stable pool. */
  stable?: InputMaybe<Scalars['JSON']['input']>;
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
  /** contract address of pool. */
  vlp_address?: InputMaybe<Scalars['String']['input']>;
};

export type ICodegenGeneratedChainsAllChainsQueryVariables = Exact<{
  chains_all_chains_show_all_chains?: InputMaybe<Scalars['Boolean']['input']>;
  chains_all_chains_type?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsAllChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_chains: Array<{ __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, id: string, logo: string, token_factory_address: string, type: string }> } };

export type ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', native_currency: { __typename?: 'NativeCurrency', decimals: number, id: string, name: string, symbol: string } }> } };

export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string>, id: string } } }> } };

export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', id: string, default: { __typename?: 'RPCConfig', http: Array<string>, id: string } } }> } };

export type ICodegenGeneratedChainsAllEvmChainsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsAllEvmChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', chain_id: string, chain_uid: string, explorer_url: string, id: string, name: string, native_currency: { __typename?: 'NativeCurrency', decimals: number, id: string, name: string, symbol: string }, rpc_urls: { __typename?: 'RPCUrls', id: string, default: { __typename?: 'RPCConfig', http: Array<string>, id: string } } }> } };

export type ICodegenGeneratedChainsChainConfigQueryVariables = Exact<{
  chains_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsChainConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', chain_config: { __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, id: string, logo: string, token_factory_address: string, type: string } } };

export type ICodegenGeneratedChainsContractsQueryVariables = Exact<{
  chains_contracts_chainUId?: InputMaybe<Scalars['String']['input']>;
  chains_contracts_type?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsContractsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', contracts: Array<{ __typename?: 'Contract', ChainUID: string, ContractAddress: string, Type: string, id: string }> } };

export type ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', native_currency: { __typename?: 'NativeCurrency', decimals: number, id: string, name: string, symbol: string } } } };

export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', default: { __typename?: 'RPCConfig', http: Array<string>, id: string } } } } };

export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', rpc_urls: { __typename?: 'RPCUrls', id: string, default: { __typename?: 'RPCConfig', http: Array<string>, id: string } } } } };

export type ICodegenGeneratedChainsEvmChainConfigQueryVariables = Exact<{
  chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsEvmChainConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', evm_chain_config: { __typename?: 'EVMChainConfig', chain_id: string, chain_uid: string, explorer_url: string, id: string, name: string, native_currency: { __typename?: 'NativeCurrency', decimals: number, id: string, name: string, symbol: string }, rpc_urls: { __typename?: 'RPCUrls', id: string, default: { __typename?: 'RPCConfig', http: Array<string>, id: string } } } } };

export type ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string, id: string } } } };

export type ICodegenGeneratedChainsKeplrConfigBip44QueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigBip44Query = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', bip44: { __typename?: 'Bip44', coinType: number, id: string } } } };

export type ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigCurrenciesQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', currencies: Array<{ __typename?: 'Currencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, id: string }> } } };

export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', feeCurrencies: Array<{ __typename?: 'FeeCurrencies', gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, id: string, low: number } }> } } };

export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', feeCurrencies: Array<{ __typename?: 'FeeCurrencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, id: string, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, id: string, low: number } }> } } };

export type ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigGaspricestepQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, id: string, low: number } } } };

export type ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', stakeCurrency: { __typename?: 'StakeCurrency', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, id: string } } } };

export type ICodegenGeneratedChainsKeplrConfigQueryVariables = Exact<{
  chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
  chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedChainsKeplrConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', keplr_config: { __typename?: 'Keplr', chainID: string, chainName: string, coinType: number, explorer_url: string, features: Array<string>, id: string, rest: string, rpc: string, bech32Config: { __typename?: 'Bech32Config', bech32PrefixAccAddr: string, bech32PrefixAccPub: string, bech32PrefixConsAddr: string, bech32PrefixConsPub: string, bech32PrefixValAddr: string, bech32PrefixValPub: string, id: string }, bip44: { __typename?: 'Bip44', coinType: number, id: string }, currencies: Array<{ __typename?: 'Currencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, id: string }>, feeCurrencies: Array<{ __typename?: 'FeeCurrencies', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, id: string, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, id: string, low: number } }>, gasPriceStep: { __typename?: 'GasPriceStep', average: number, high: number, id: string, low: number }, stakeCurrency: { __typename?: 'StakeCurrency', coinDecimals: number, coinDenom: string, coinGeckoID: string, coinMinimalDenom: string, id: string } } } };

export type ICodegenGeneratedChainsRouterConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsRouterConfigQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', router_config: { __typename?: 'RouterConfig', chain_uid: string, contract_address: string, explorer_url: string, id: string, logo: string, type: string } } };

export type ICodegenGeneratedChainsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedChainsQuery = { __typename?: 'Query', chains: { __typename?: 'Chains', all_evm_chains: Array<{ __typename?: 'EVMChainConfig', chain_id: string, chain_uid: string, explorer_url: string, id: string, name: string, native_currency: { __typename?: 'NativeCurrency', decimals: number, id: string, name: string, symbol: string }, rpc_urls: { __typename?: 'RPCUrls', id: string, default: { __typename?: 'RPCConfig', http: Array<string>, id: string } } }>, router_config: { __typename?: 'RouterConfig', chain_uid: string, contract_address: string, explorer_url: string, id: string, logo: string, type: string } } };

export type ICodegenGeneratedClaimClaimSenderQueryVariables = Exact<{
  claim_claim_claim_id: Scalars['Int']['input'];
}>;


export type ICodegenGeneratedClaimClaimSenderQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claim: { __typename?: 'ClaimerResponse', sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } };

export type ICodegenGeneratedClaimClaimQueryVariables = Exact<{
  claim_claim_claim_id: Scalars['Int']['input'];
}>;


export type ICodegenGeneratedClaimClaimQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claim: { __typename?: 'ClaimerResponse', amount: string, claim_group_id: string, claim_id: string, claimer: string, id: string, pseudo_claim_id: string, status: string, token: string, sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } };

export type ICodegenGeneratedClaimClaimByPsuedoClaimIdSenderQueryVariables = Exact<{
  claim_claim_by_psuedo_claim_id_psuedo_claim_id: Scalars['String']['input'];
}>;


export type ICodegenGeneratedClaimClaimByPsuedoClaimIdSenderQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claim_by_psuedo_claim_id: { __typename?: 'ClaimerResponseWithStatus', sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } };

export type ICodegenGeneratedClaimClaimByPsuedoClaimIdQueryVariables = Exact<{
  claim_claim_by_psuedo_claim_id_psuedo_claim_id: Scalars['String']['input'];
}>;


export type ICodegenGeneratedClaimClaimByPsuedoClaimIdQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claim_by_psuedo_claim_id: { __typename?: 'ClaimerResponseWithStatus', amount: string, claim_group_id: string, claim_id: string, claimer: string, id: string, pseudo_claim_id: string, status: string, token: string, sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } };

export type ICodegenGeneratedClaimClaimsByClaimerPubKeySenderQueryVariables = Exact<{
  claim_claims_by_claimer_pub_Key_claimer_pub_key: Scalars['String']['input'];
  claim_claims_by_claimer_pub_Key_limit?: InputMaybe<Scalars['Int']['input']>;
  claim_claims_by_claimer_pub_Key_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedClaimClaimsByClaimerPubKeySenderQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claims_by_claimer_pub_Key: Array<{ __typename?: 'ClaimerResponse', sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimClaimsByClaimerPubKeyQueryVariables = Exact<{
  claim_claims_by_claimer_pub_Key_claimer_pub_key: Scalars['String']['input'];
  claim_claims_by_claimer_pub_Key_limit?: InputMaybe<Scalars['Int']['input']>;
  claim_claims_by_claimer_pub_Key_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedClaimClaimsByClaimerPubKeyQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claims_by_claimer_pub_Key: Array<{ __typename?: 'ClaimerResponse', amount: string, claim_group_id: string, claim_id: string, claimer: string, id: string, pseudo_claim_id: string, status: string, token: string, sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimClaimsByEmailSenderQueryVariables = Exact<{
  claim_claims_by_email_email: Scalars['String']['input'];
  claim_claims_by_email_limit?: InputMaybe<Scalars['Int']['input']>;
  claim_claims_by_email_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedClaimClaimsByEmailSenderQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claims_by_email: Array<{ __typename?: 'ClaimerResponseWithStatus', sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimClaimsByEmailQueryVariables = Exact<{
  claim_claims_by_email_email: Scalars['String']['input'];
  claim_claims_by_email_limit?: InputMaybe<Scalars['Int']['input']>;
  claim_claims_by_email_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedClaimClaimsByEmailQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', claims_by_email: Array<{ __typename?: 'ClaimerResponseWithStatus', amount: string, claim_group_id: string, claim_id: string, claimer: string, id: string, pseudo_claim_id: string, status: string, token: string, sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimSenderClaimsSenderQueryVariables = Exact<{
  claim_sender_claims_limit: Scalars['Int']['input'];
  claim_sender_claims_offset: Scalars['Int']['input'];
  claim_sender_claims_sender: ICrossChainUserInput;
}>;


export type ICodegenGeneratedClaimSenderClaimsSenderQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', sender_claims: Array<{ __typename?: 'ClaimerResponse', sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimSenderClaimsQueryVariables = Exact<{
  claim_sender_claims_limit: Scalars['Int']['input'];
  claim_sender_claims_offset: Scalars['Int']['input'];
  claim_sender_claims_sender: ICrossChainUserInput;
}>;


export type ICodegenGeneratedClaimSenderClaimsQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', sender_claims: Array<{ __typename?: 'ClaimerResponse', amount: string, claim_group_id: string, claim_id: string, claimer: string, id: string, pseudo_claim_id: string, status: string, token: string, sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimStateQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedClaimStateQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', state: { __typename?: 'ClaimState', admin: string, chain_uid: string, factory_address: string, id: string, vcoin_address: string } } };

export type ICodegenGeneratedClaimUserClaimsSenderQueryVariables = Exact<{
  claim_user_claims_limit?: InputMaybe<Scalars['Int']['input']>;
  claim_user_claims_offset?: InputMaybe<Scalars['Int']['input']>;
  claim_user_claims_public_secret: Scalars['String']['input'];
}>;


export type ICodegenGeneratedClaimUserClaimsSenderQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', user_claims: Array<{ __typename?: 'ClaimerResponse', sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimUserClaimsQueryVariables = Exact<{
  claim_user_claims_limit?: InputMaybe<Scalars['Int']['input']>;
  claim_user_claims_offset?: InputMaybe<Scalars['Int']['input']>;
  claim_user_claims_public_secret: Scalars['String']['input'];
}>;


export type ICodegenGeneratedClaimUserClaimsQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', user_claims: Array<{ __typename?: 'ClaimerResponse', amount: string, claim_group_id: string, claim_id: string, claimer: string, id: string, pseudo_claim_id: string, status: string, token: string, sender: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedClaimQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedClaimQuery = { __typename?: 'Query', claim: { __typename?: 'ClaimQueries', state: { __typename?: 'ClaimState', admin: string, chain_uid: string, factory_address: string, id: string, vcoin_address: string } } };

export type ICodegenGeneratedCwBalanceQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  contract: Scalars['String']['input'];
  cw_balance_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedCwBalanceQuery = { __typename?: 'Query', cw: { __typename?: 'Cw', balance: { __typename?: 'Balance', balance: string, id: string } } };

export type ICodegenGeneratedCwTokenInfoQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedCwTokenInfoQuery = { __typename?: 'Query', cw: { __typename?: 'Cw', token_info: { __typename?: 'TokenInfo', decimals: number, id: string, name: string, symbol: string, total_supply: string } } };

export type ICodegenGeneratedCwQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  contract: Scalars['String']['input'];
}>;


export type ICodegenGeneratedCwQuery = { __typename?: 'Query', cw: { __typename?: 'Cw', token_info: { __typename?: 'TokenInfo', decimals: number, id: string, name: string, symbol: string, total_supply: string } } };

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


export type ICodegenGeneratedFactoryAllPoolsPaginationQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllPoolsPoolsPairQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', pools: Array<{ __typename?: 'PairsInPool', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllPoolsPoolsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', pools: Array<{ __typename?: 'PairsInPool', id: string, vlp: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedFactoryAllPoolsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllPoolsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_pools: { __typename?: 'AllPoolsResponse', id: string, pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number }, pools: Array<{ __typename?: 'PairsInPool', id: string, vlp: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedFactoryAllTokensPaginationQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_tokens_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllTokensPaginationQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_tokens: { __typename?: 'AllTokens', pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedFactoryAllTokensQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
  factory_all_tokens_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedFactoryAllTokensQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', all_tokens: { __typename?: 'AllTokens', id: string, tokens: Array<string>, pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedFactoryAllowedDenomsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_allowed_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedFactoryAllowedDenomsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', allowed_denoms: Array<{ __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any }> } };

export type ICodegenGeneratedFactoryEscrowQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_escrow_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedFactoryEscrowQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', escrow: { __typename?: 'EscrowResponse', escrow_address: string, id: string, denoms: Array<{ __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any }> } } };

export type ICodegenGeneratedFactoryGetLptokenAddressQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_get_LpToken_address_vlp_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryGetLptokenAddressQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', get_LpToken_address: { __typename?: 'LpTokenAddr', id: string, token_address: string } } };

export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', total: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', total: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryPartnerFeesCollectedQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', id: string, total: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedFactoryPositionTokenContractQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryPositionTokenContractQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', position_token_contract: { __typename?: 'PositionTokenContractResponse', contract_address: string, id: string } } };

export type ICodegenGeneratedFactoryStateQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryStateQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', state: { __typename?: 'ContractStateOfFactory', admin: string, chain_uid: string, hub_channel: string, id: string, router_contract: string } } };

export type ICodegenGeneratedFactoryUserPositionsPositionsPairQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_user_positions_owner: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryUserPositionsPositionsPairQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', user_positions: { __typename?: 'UserPositionsResponse', positions: Array<{ __typename?: 'UserPosition', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedFactoryUserPositionsPositionsPositionDetailQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_user_positions_owner: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryUserPositionsPositionsPositionDetailQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', user_positions: { __typename?: 'UserPositionsResponse', positions: Array<{ __typename?: 'UserPosition', position_detail: { __typename?: 'PositionResponse', chain_uid: string, fee_growth_inside_0_last_x128: string, fee_growth_inside_1_last_x128: string, id: string, liquidity: string, lower_tick_index: number, position_id: string, tokens_owed_0: string, tokens_owed_1: string, upper_tick_index: number } }> } } };

export type ICodegenGeneratedFactoryUserPositionsPositionsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_user_positions_owner: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryUserPositionsPositionsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', user_positions: { __typename?: 'UserPositionsResponse', positions: Array<{ __typename?: 'UserPosition', id: string, liquidity: string, token_id: string, vlp_address: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, position_detail: { __typename?: 'PositionResponse', chain_uid: string, fee_growth_inside_0_last_x128: string, fee_growth_inside_1_last_x128: string, id: string, liquidity: string, lower_tick_index: number, position_id: string, tokens_owed_0: string, tokens_owed_1: string, upper_tick_index: number } }> } } };

export type ICodegenGeneratedFactoryUserPositionsQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_user_positions_owner: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryUserPositionsQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', user_positions: { __typename?: 'UserPositionsResponse', id: string, positions: Array<{ __typename?: 'UserPosition', id: string, liquidity: string, token_id: string, vlp_address: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, position_detail: { __typename?: 'PositionResponse', chain_uid: string, fee_growth_inside_0_last_x128: string, fee_growth_inside_1_last_x128: string, id: string, liquidity: string, lower_tick_index: number, position_id: string, tokens_owed_0: string, tokens_owed_1: string, upper_tick_index: number } }> } } };

export type ICodegenGeneratedFactoryVlpQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
  factory_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedFactoryVlpQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', vlp: string } };

export type ICodegenGeneratedFactoryQueryVariables = Exact<{
  chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedFactoryQuery = { __typename?: 'Query', factory: { __typename?: 'Factory', partner_fees_collected: { __typename?: 'PartnerFeesCollected', id: string, total: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } }, position_token_contract: { __typename?: 'PositionTokenContractResponse', contract_address: string, id: string }, state: { __typename?: 'ContractStateOfFactory', admin: string, chain_uid: string, hub_channel: string, id: string, router_contract: string } } };

export type ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolFeesCollectedBreakdownQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', fees_collected: { __typename?: 'FeesResponse', breakdown: Array<{ __typename?: 'FeeBreakdown', id: string, token1: string, token2: string, total_fee: number }> } } };

export type ICodegenGeneratedPoolFeesCollectedQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolFeesCollectedQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', fees_collected: { __typename?: 'FeesResponse', id: string, total_overall: number, breakdown: Array<{ __typename?: 'FeeBreakdown', id: string, token1: string, token2: string, total_fee: number }> } } };

export type ICodegenGeneratedPoolMyPoolsPairQueryVariables = Exact<{
  pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
  pool_my_pools_user_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedPoolMyPoolsPairQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', my_pools: Array<{ __typename?: 'MyPools', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } };

export type ICodegenGeneratedPoolMyPoolsUserQueryVariables = Exact<{
  pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
  pool_my_pools_user_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedPoolMyPoolsUserQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', my_pools: Array<{ __typename?: 'MyPools', user: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedPoolMyPoolsQueryVariables = Exact<{
  pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
  pool_my_pools_user_address: Scalars['String']['input'];
}>;


export type ICodegenGeneratedPoolMyPoolsQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', my_pools: Array<{ __typename?: 'MyPools', height: string, id: string, vlp: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }> } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', apr: string, created_at: string, id: string, tags: Array<string>, total_liquidity: string, vlp: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables = Exact<{
  pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
  pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
  pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
  pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
  pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedPoolTokenPairWithLiquidityQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', token_pair_with_liquidity: { __typename?: 'TokenPairWithLiquidityPaginated', id: string, pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number }, results: Array<{ __typename?: 'TokenPairWithLiquidityResponse', apr: string, created_at: string, id: string, tags: Array<string>, total_liquidity: string, vlp: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }> } } };

export type ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', volume: { __typename?: 'VolumeResponse', volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', id: string, pair: string, volume: string }> } } };

export type ICodegenGeneratedPoolVolumeQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolVolumeQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', volume: { __typename?: 'VolumeResponse', id: string, total_liquidity: string, total_volume: string, volume_24hours: string, volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', id: string, pair: string, volume: string }> } } };

export type ICodegenGeneratedPoolVolumeClickhouseVolumeBreakdown_24HoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolVolumeClickhouseVolumeBreakdown_24HoursQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', volume_clickhouse: { __typename?: 'VolumeResponse', volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', id: string, pair: string, volume: string }> } } };

export type ICodegenGeneratedPoolVolumeClickhouseQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolVolumeClickhouseQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', volume_clickhouse: { __typename?: 'VolumeResponse', id: string, total_liquidity: string, total_volume: string, volume_24hours: string, volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', id: string, pair: string, volume: string }> } } };

export type ICodegenGeneratedPoolQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedPoolQuery = { __typename?: 'Query', pool: { __typename?: 'PoolQueries', fees_collected: { __typename?: 'FeesResponse', id: string, total_overall: number, breakdown: Array<{ __typename?: 'FeeBreakdown', id: string, token1: string, token2: string, total_fee: number }> }, volume: { __typename?: 'VolumeResponse', id: string, total_liquidity: string, total_volume: string, volume_24hours: string, volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', id: string, pair: string, volume: string }> }, volume_clickhouse: { __typename?: 'VolumeResponse', id: string, total_liquidity: string, total_volume: string, volume_24hours: string, volume_breakdown_24hours: Array<{ __typename?: 'VolumeBreakdown', id: string, pair: string, volume: string }> } } };

export type ICodegenGeneratedRouterAllChainsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedRouterAllChainsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_chains: Array<{ __typename?: 'Chain', chain_id: string, chain_uid: string, factory_address: string, id: string }> } };

export type ICodegenGeneratedRouterAllEscrowsQueryVariables = Exact<{
  router_all_escrows_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_escrows_max?: InputMaybe<Scalars['String']['input']>;
  router_all_escrows_min?: InputMaybe<Scalars['String']['input']>;
  router_all_escrows_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllEscrowsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_escrows: Array<{ __typename?: 'AllEscrowsResponse', balance: string, chain_uid: string, id: string, token: string }> } };

export type ICodegenGeneratedRouterAllTokensQueryVariables = Exact<{
  router_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_tokens_max?: InputMaybe<Scalars['String']['input']>;
  router_all_tokens_min?: InputMaybe<Scalars['String']['input']>;
  router_all_tokens_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllTokensQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_tokens: { __typename?: 'TokenArray', id: string, tokens: Array<string> } } };

export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPairQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPairQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', vlps: Array<{ __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } }> } } };

export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeConcentratedQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeConcentratedQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', vlps: Array<{ __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } }> } } };

export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', vlps: Array<{ __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } }> } } };

export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsVlpsPoolKeyQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', vlps: Array<{ __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } }> } } };

export type ICodegenGeneratedRouterAllVlpsVlpsQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsVlpsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', vlps: Array<{ __typename?: 'VlpWithTokenPair', id: string, token_1: string, token_2: string, vlp: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } }> } } };

export type ICodegenGeneratedRouterAllVlpsQueryVariables = Exact<{
  router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
  router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedRouterAllVlpsQuery = { __typename?: 'Query', router: { __typename?: 'Router', all_vlps: { __typename?: 'AllVlps', id: string, vlps: Array<{ __typename?: 'VlpWithTokenPair', id: string, token_1: string, token_2: string, vlp: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } }> } } };

export type ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainChainChainTypeIbcQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain: { __typename?: 'ChainAndFactoryInfo', chain_type: { __typename?: 'ChainType', ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string, id: string } } } } } };

export type ICodegenGeneratedRouterChainChainChainTypeQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainChainChainTypeQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain: { __typename?: 'ChainAndFactoryInfo', chain_type: { __typename?: 'ChainType', id: string, ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string, id: string } } } } } };

export type ICodegenGeneratedRouterChainChainQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainChainQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain: { __typename?: 'ChainAndFactoryInfo', factory: string, factory_chain_id: string, id: string, chain_type: { __typename?: 'ChainType', id: string, ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string, id: string } } } } } };

export type ICodegenGeneratedRouterChainQueryVariables = Exact<{
  router_chain_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterChainQuery = { __typename?: 'Query', router: { __typename?: 'Router', chain: { __typename?: 'ChainResponse', chain_uid: string, id: string, chain: { __typename?: 'ChainAndFactoryInfo', factory: string, factory_chain_id: string, id: string, chain_type: { __typename?: 'ChainType', id: string, ibc: { __typename?: 'Ibc', from_factory_channel: string, from_hub_channel: string, id: string } } } } } };

export type ICodegenGeneratedRouterEscrowsQueryVariables = Exact<{
  router_escrows_limit?: InputMaybe<Scalars['Int']['input']>;
  router_escrows_max?: InputMaybe<Scalars['String']['input']>;
  router_escrows_min?: InputMaybe<Scalars['String']['input']>;
  router_escrows_skip?: InputMaybe<Scalars['Int']['input']>;
  router_escrows_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterEscrowsQuery = { __typename?: 'Query', router: { __typename?: 'Router', escrows: Array<{ __typename?: 'Escrow', balance: string, chain_id: string, chain_uid: string, id: string }> } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', release_amounts: Array<{ __typename?: 'ReleaseAmounts', cross_chain_user: { __typename?: 'CrossChainUserWithLimit', user: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } }> } } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', release_amounts: Array<{ __typename?: 'ReleaseAmounts', cross_chain_user: { __typename?: 'CrossChainUserWithLimit', id: string, limit: string, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } }> } } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', release_amounts: Array<{ __typename?: 'ReleaseAmounts', amount: string, id: string, cross_chain_user: { __typename?: 'CrossChainUserWithLimit', id: string, limit: string, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } }> } } };

export type ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables = Exact<{
  router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
  router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
  router_simulate_release_escrow_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterSimulateReleaseEscrowQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_release_escrow: { __typename?: 'SimulateReleaseEscrow', id: string, remaining_amount: string, release_amounts: Array<{ __typename?: 'ReleaseAmounts', amount: string, id: string, cross_chain_user: { __typename?: 'CrossChainUserWithLimit', id: string, limit: string, user: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } }> } } };

export type ICodegenGeneratedRouterSimulateSwapQueryVariables = Exact<{
  router_simulate_swap_amount_in: Scalars['String']['input'];
  router_simulate_swap_asset_in: Scalars['String']['input'];
  router_simulate_swap_asset_out: Scalars['String']['input'];
  router_simulate_swap_min_amount_out: Scalars['String']['input'];
  router_simulate_swap_swaps?: InputMaybe<Array<INextSwapPair> | INextSwapPair>;
}>;


export type ICodegenGeneratedRouterSimulateSwapQuery = { __typename?: 'Query', router: { __typename?: 'Router', simulate_swap: { __typename?: 'TokenOut', amount_out: string, asset_out: string, id: string } } };

export type ICodegenGeneratedRouterStateQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedRouterStateQuery = { __typename?: 'Query', router: { __typename?: 'Router', state: { __typename?: 'ContractStateOfRouter', admin: string, concentrated_vlp_code_id: number, constant_product_vlp_code_id: number, id: string, locked: boolean, stable_vlp_code_id: number, virtual_balance_address: string } } };

export type ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables = Exact<{
  router_token_denoms_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenDenomsDenomsQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_denoms: { __typename?: 'TokenDenomsResponse', denoms: Array<{ __typename?: 'TokenDenomWithChainType', chain_type: string, chain_uid: string, id: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> } } };

export type ICodegenGeneratedRouterTokenDenomsQueryVariables = Exact<{
  router_token_denoms_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenDenomsQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_denoms: { __typename?: 'TokenDenomsResponse', id: string, denoms: Array<{ __typename?: 'TokenDenomWithChainType', chain_type: string, chain_uid: string, id: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> } } };

export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPairQueryVariables = Exact<{
  router_token_pairs_from_vlp_vlp: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPairQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_pairs_from_vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } } } };

export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeConcentratedQueryVariables = Exact<{
  router_token_pairs_from_vlp_vlp: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeConcentratedQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_pairs_from_vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeQueryVariables = Exact<{
  router_token_pairs_from_vlp_vlp: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_pairs_from_vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyQueryVariables = Exact<{
  router_token_pairs_from_vlp_vlp: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_pairs_from_vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables = Exact<{
  router_token_pairs_from_vlp_vlp: Scalars['String']['input'];
}>;


export type ICodegenGeneratedRouterTokenPairsFromVlpQuery = { __typename?: 'Query', router: { __typename?: 'Router', token_pairs_from_vlp: { __typename?: 'VlpWithTokenPair', id: string, token_1: string, token_2: string, vlp: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterVlpPoolKeyPairQueryVariables = Exact<{
  router_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedRouterVlpPoolKeyPairQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } } } };

export type ICodegenGeneratedRouterVlpPoolKeyPoolTypeConcentratedQueryVariables = Exact<{
  router_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedRouterVlpPoolKeyPoolTypeConcentratedQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterVlpPoolKeyPoolTypeQueryVariables = Exact<{
  router_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedRouterVlpPoolKeyPoolTypeQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterVlpPoolKeyQueryVariables = Exact<{
  router_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedRouterVlpPoolKeyQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp: { __typename?: 'VlpWithTokenPair', pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterVlpQueryVariables = Exact<{
  router_vlp_pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedRouterVlpQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp: { __typename?: 'VlpWithTokenPair', id: string, token_1: string, token_2: string, vlp: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedRouterVlpByPoolKeyPoolTypeConcentratedQueryVariables = Exact<{
  router_vlp_by_pool_key_pool_key: IPoolKeyInput;
}>;


export type ICodegenGeneratedRouterVlpByPoolKeyPoolTypeConcentratedQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp_by_pool_key: { __typename?: 'PoolKeyVlpResponse', pool_type: { __typename?: 'PoolTypeOutput', concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } };

export type ICodegenGeneratedRouterVlpByPoolKeyPoolTypeQueryVariables = Exact<{
  router_vlp_by_pool_key_pool_key: IPoolKeyInput;
}>;


export type ICodegenGeneratedRouterVlpByPoolKeyPoolTypeQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp_by_pool_key: { __typename?: 'PoolKeyVlpResponse', pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } };

export type ICodegenGeneratedRouterVlpByPoolKeyQueryVariables = Exact<{
  router_vlp_by_pool_key_pool_key: IPoolKeyInput;
}>;


export type ICodegenGeneratedRouterVlpByPoolKeyQuery = { __typename?: 'Query', router: { __typename?: 'Router', vlp_by_pool_key: { __typename?: 'PoolKeyVlpResponse', id: string, token_1: string, token_2: string, vlp: string, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } };

export type ICodegenGeneratedRouterQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedRouterQuery = { __typename?: 'Query', router: { __typename?: 'Router', id: string, all_chains: Array<{ __typename?: 'Chain', chain_id: string, chain_uid: string, factory_address: string, id: string }>, state: { __typename?: 'ContractStateOfRouter', admin: string, concentrated_vlp_code_id: number, constant_product_vlp_code_id: number, id: string, locked: boolean, stable_vlp_code_id: number, virtual_balance_address: string } } };

export type ICodegenGeneratedTokenAllDexesQueryVariables = Exact<{
  token_all_dexes_limit?: InputMaybe<Scalars['Int']['input']>;
  token_all_dexes_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedTokenAllDexesQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', all_dexes: Array<{ __typename?: 'DexMetadata', bg_color: string, chain_uid: string, dex_name: string, display_name: string, fg_color: string, id: string, logo: string }> } };

export type ICodegenGeneratedTokenChainsForTokenLaunchQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedTokenChainsForTokenLaunchQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', chains_for_token_launch: Array<{ __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, id: string, logo: string, token_factory_address: string, type: string }> } };

export type ICodegenGeneratedTokenDexMetadataQueryVariables = Exact<{
  token_dex_metadata_dex: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTokenDexMetadataQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', dex_metadata: { __typename?: 'DexMetadata', bg_color: string, chain_uid: string, dex_name: string, display_name: string, fg_color: string, id: string, logo: string } } };

export type ICodegenGeneratedTokenGetAllFaucetsQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedTokenGetAllFaucetsQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', get_all_faucets: Array<{ __typename?: 'Faucet', faucet_link: string, id: string, token: string }> } };

export type ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables = Exact<{
  token_token_denoms_chain_uids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
  token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedTokenTokenDenomsDenomsQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_denoms: Array<{ __typename?: 'TokenDenomWithTokenIdResponse', denoms: Array<{ __typename?: 'TokenDenomWithChainType', chain_type: string, chain_uid: string, id: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> }> } };

export type ICodegenGeneratedTokenTokenDenomsQueryVariables = Exact<{
  token_token_denoms_chain_uids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
  token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type ICodegenGeneratedTokenTokenDenomsQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_denoms: Array<{ __typename?: 'TokenDenomWithTokenIdResponse', id: string, token_id: string, denoms: Array<{ __typename?: 'TokenDenomWithChainType', chain_type: string, chain_uid: string, id: string, token_type: { __typename?: 'NativeTokenType', native: { __typename?: 'NativeToken', denom: string } } | { __typename?: 'SmartTokenType', smart: { __typename?: 'SmartToken', contract_address: string } } | { __typename?: 'VoucherTokenType', voucher: any } }> }> } };

export type ICodegenGeneratedTokenTokenLiquiditiesQueryVariables = Exact<{
  token_token_liquidities_limit: Scalars['Int']['input'];
  token_token_liquidities_page: Scalars['Int']['input'];
}>;


export type ICodegenGeneratedTokenTokenLiquiditiesQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_liquidities: Array<{ __typename?: 'TokenLiquidity', id: string, token: string, total_liquidity: string, total_volume: string }> } };

export type ICodegenGeneratedTokenTokenLiquidityQueryVariables = Exact<{
  token_token_liquidity_token: Scalars['String']['input'];
}>;


export type ICodegenGeneratedTokenTokenLiquidityQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_liquidity: { __typename?: 'TokenLiquidity', id: string, token: string, total_liquidity: string, total_volume: string } } };

export type ICodegenGeneratedTokenTokenMetadataByIdQueryVariables = Exact<{
  token_token_metadata_by_id_token_id: Scalars['String']['input'];
  token_token_metadata_by_id_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedTokenTokenMetadataByIdQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_metadata_by_id: { __typename?: 'Metadata', chain_type: Array<string>, chain_uids: Array<string>, coinDecimal: number, created_at: string, description: string, dex: Array<string>, displayName: string, id: string, image: string, is_price_from_oracle: boolean, is_verified: boolean, min_swap_value: number, oracle_price: string, price: string, price_change_7d: number, price_change_24h: number, social: any, tags: Array<string>, tokenId: string, total_volume: number, total_volume_24h: number } } };

export type ICodegenGeneratedTokenTokenMetadatasQueryVariables = Exact<{
  token_token_metadatas_chain_uids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_metadatas_dex?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  token_token_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
  token_token_metadatas_offset?: InputMaybe<Scalars['Int']['input']>;
  token_token_metadatas_search?: InputMaybe<Scalars['String']['input']>;
  token_token_metadatas_show_volume?: InputMaybe<Scalars['Boolean']['input']>;
  token_token_metadatas_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedTokenTokenMetadatasQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', token_metadatas: Array<{ __typename?: 'Metadata', chain_type: Array<string>, chain_uids: Array<string>, coinDecimal: number, created_at: string, description: string, dex: Array<string>, displayName: string, id: string, image: string, is_price_from_oracle: boolean, is_verified: boolean, min_swap_value: number, oracle_price: string, price: string, price_change_7d: number, price_change_24h: number, social: any, tags: Array<string>, tokenId: string, total_volume: number, total_volume_24h: number }> } };

export type ICodegenGeneratedTokenTokensMetadataQueryVariables = Exact<{
  token_tokens_metadata_token_ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
  token_tokens_metadata_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ICodegenGeneratedTokenTokensMetadataQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', tokens_metadata: Array<{ __typename?: 'Metadata', chain_type: Array<string>, chain_uids: Array<string>, coinDecimal: number, created_at: string, description: string, dex: Array<string>, displayName: string, id: string, image: string, is_price_from_oracle: boolean, is_verified: boolean, min_swap_value: number, oracle_price: string, price: string, price_change_7d: number, price_change_24h: number, social: any, tags: Array<string>, tokenId: string, total_volume: number, total_volume_24h: number }> } };

export type ICodegenGeneratedTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedTokenQuery = { __typename?: 'Query', token: { __typename?: 'TokenQueries', chains_for_token_launch: Array<{ __typename?: 'ChainConfig', chain_id: string, chain_uid: string, display_name: string, explorer_url: string, factory_address: string, id: string, logo: string, token_factory_address: string, type: string }>, get_all_faucets: Array<{ __typename?: 'Faucet', faucet_link: string, id: string, token: string }> } };

export type ICodegenGeneratedVcoinBalanceQueryVariables = Exact<{
  vcoin_balance_balance_key?: InputMaybe<IBalanceKeyInput>;
}>;


export type ICodegenGeneratedVcoinBalanceQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', balance: { __typename?: 'VcoinBalance', amount: string, id: string } } };

export type ICodegenGeneratedVcoinStateQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedVcoinStateQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', state: { __typename?: 'ContractStateOfVcoin', admin: string, id: string, router: string } } };

export type ICodegenGeneratedVcoinUnifiedUserBalanceBalancesQueryVariables = Exact<{
  vcoin_unified_user_balance_address: Scalars['String']['input'];
  vcoin_unified_user_balance_chain_uids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  vcoin_unified_user_balance_limit?: InputMaybe<Scalars['Int']['input']>;
  vcoin_unified_user_balance_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVcoinUnifiedUserBalanceBalancesQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', unified_user_balance: Array<{ __typename?: 'VcoinBalanceResponse', balances: Array<{ __typename?: 'VcoinBalanceUserResponse', amount: string, id: string, token_id: string }> }> } };

export type ICodegenGeneratedVcoinUnifiedUserBalanceQueryVariables = Exact<{
  vcoin_unified_user_balance_address: Scalars['String']['input'];
  vcoin_unified_user_balance_chain_uids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  vcoin_unified_user_balance_limit?: InputMaybe<Scalars['Int']['input']>;
  vcoin_unified_user_balance_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVcoinUnifiedUserBalanceQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', unified_user_balance: Array<{ __typename?: 'VcoinBalanceResponse', chain_uid: string, id: string, balances: Array<{ __typename?: 'VcoinBalanceUserResponse', amount: string, id: string, token_id: string }> }> } };

export type ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables = Exact<{
  vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>;


export type ICodegenGeneratedVcoinUserBalanceBalancesQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', user_balance: { __typename?: 'VcoinBalanceResponse', balances: Array<{ __typename?: 'VcoinBalanceUserResponse', amount: string, id: string, token_id: string }> } } };

export type ICodegenGeneratedVcoinUserBalanceQueryVariables = Exact<{
  vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>;


export type ICodegenGeneratedVcoinUserBalanceQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', user_balance: { __typename?: 'VcoinBalanceResponse', chain_uid: string, id: string, balances: Array<{ __typename?: 'VcoinBalanceUserResponse', amount: string, id: string, token_id: string }> } } };

export type ICodegenGeneratedVcoinQueryVariables = Exact<{ [key: string]: never; }>;


export type ICodegenGeneratedVcoinQuery = { __typename?: 'Query', vcoin: { __typename?: 'Vcoin', state: { __typename?: 'ContractStateOfVcoin', admin: string, id: string, router: string } } };

export type ICodegenGeneratedVlpAllPoolsPaginationQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPaginationQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number } } } };

export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPairQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } } }> } } };

export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeConcentratedQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeConcentratedQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } }> } } };

export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } }> } } };

export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } }> } } };

export type ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsPoolQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', pool: { __typename?: 'Pool', id: string, lp_shares: string, reserve_1: string, reserve_2: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } }> } } };

export type ICodegenGeneratedVlpAllPoolsPoolsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsPoolsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', pools: Array<{ __typename?: 'Pools', chain_uid: string, id: string, pool: { __typename?: 'Pool', id: string, lp_shares: string, reserve_1: string, reserve_2: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } }> } } };

export type ICodegenGeneratedVlpAllPoolsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpAllPoolsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', all_pools: { __typename?: 'PoolsResponse', id: string, pagination: { __typename?: 'PaginationInfo', id: string, limit: number, offset: number, total_count: number }, pools: Array<{ __typename?: 'Pools', chain_uid: string, id: string, pool: { __typename?: 'Pool', id: string, lp_shares: string, reserve_1: string, reserve_2: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } }> } } };

export type ICodegenGeneratedVlpFeeRecipientQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpFeeRecipientQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } };

export type ICodegenGeneratedVlpFeeQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpFeeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, id: string, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } };

export type ICodegenGeneratedVlpLiquidityPairQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpLiquidityPairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', liquidity: { __typename?: 'Liquidity', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpLiquidityQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpLiquidityQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', liquidity: { __typename?: 'Liquidity', id: string, token_1_reserve: string, token_2_reserve: string, total_lp_tokens: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpMigrationStatusQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpMigrationStatusQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', migration_status: { __typename?: 'MigrationStatusResponse', active_liquidity: string, id: string, migrated_at: number, mode: string, positions_migrated: number, revision: number, source_version: string, total_liquidity: string } } };

export type ICodegenGeneratedVlpObserveQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_observe_seconds_agos: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type ICodegenGeneratedVlpObserveQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', observe: { __typename?: 'ObserveResponse', id: string, seconds_per_liquidity_cumulative_x128s: Array<string>, tick_cumulatives: Array<string> } } };

export type ICodegenGeneratedVlpPoolPoolKeyPairQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_pool_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPoolPoolKeyPairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } } } };

export type ICodegenGeneratedVlpPoolPoolKeyPoolTypeConcentratedQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_pool_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPoolPoolKeyPoolTypeConcentratedQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedVlpPoolPoolKeyPoolTypeQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_pool_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPoolPoolKeyPoolTypeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedVlpPoolPoolKeyQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_pool_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPoolPoolKeyQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', pool: { __typename?: 'Pool', pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedVlpPoolQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_pool_chain_uid: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPoolQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', pool: { __typename?: 'Pool', id: string, lp_shares: string, reserve_1: string, reserve_2: string, pool_key: { __typename?: 'PoolKeyOutput', id: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_type: { __typename?: 'PoolTypeOutput', constant_product: any, id: string, stable: any, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } } };

export type ICodegenGeneratedVlpPositionQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_position_position_id: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpPositionQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', position: { __typename?: 'PositionResponse', chain_uid: string, fee_growth_inside_0_last_x128: string, fee_growth_inside_1_last_x128: string, id: string, liquidity: string, lower_tick_index: number, position_id: string, tokens_owed_0: string, tokens_owed_1: string, upper_tick_index: number } } };

export type ICodegenGeneratedVlpProtocolFeesQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpProtocolFeesQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', protocol_fees: { __typename?: 'ProtocolFeesResponse', amount_0: string, amount_1: string, id: string } } };

export type ICodegenGeneratedVlpSlot0QueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpSlot0Query = { __typename?: 'Query', vlp: { __typename?: 'Vlp', slot0: { __typename?: 'Slot0Response', fee_growth_global_0_x128: string, fee_growth_global_1_x128: string, id: string, liquidity: string, observation_cardinality: number, observation_cardinality_next: number, observation_index: number, sqrt_price_x96: string, tick: number } } };

export type ICodegenGeneratedVlpStateFeeRecipientQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStateFeeRecipientQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', fee: { __typename?: 'FeeInfo', recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } } };

export type ICodegenGeneratedVlpStateFeeQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStateFeeQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, id: string, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } } } } };

export type ICodegenGeneratedVlpStatePairQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStatePairQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } } } };

export type ICodegenGeneratedVlpStatePoolConfigConcentratedQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStatePoolConfigConcentratedQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pool_config: { __typename?: 'PoolConfig', concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number } } } } };

export type ICodegenGeneratedVlpStatePoolConfigStableQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStatePoolConfigStableQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pool_config: { __typename?: 'PoolConfig', stable: { __typename?: 'StablePoolConfig', amp_factor: string, id: string } } } } };

export type ICodegenGeneratedVlpStatePoolConfigQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStatePoolConfigQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', pool_config: { __typename?: 'PoolConfig', constant_product: any, id: string, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number }, stable: { __typename?: 'StablePoolConfig', amp_factor: string, id: string } } } } };

export type ICodegenGeneratedVlpStateQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpStateQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', state: { __typename?: 'ContractStateOfVlp', admin: string, id: string, last_updated: number, router: string, total_lp_tokens: string, vcoin: string, fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, id: string, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_config: { __typename?: 'PoolConfig', constant_product: any, id: string, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number }, stable: { __typename?: 'StablePoolConfig', amp_factor: string, id: string } } } } };

export type ICodegenGeneratedVlpTickQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_tick_index: Scalars['Int']['input'];
}>;


export type ICodegenGeneratedVlpTickQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', tick: { __typename?: 'TickResponse', fee_growth_outside_0_x128: string, fee_growth_outside_1_x128: string, id: string, index: number, initialized: boolean, liquidity_gross: string, liquidity_net: string } } };

export type ICodegenGeneratedVlpTicksTicksQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_ticks_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_ticks_start_after?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpTicksTicksQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', ticks: { __typename?: 'TicksResponse', ticks: Array<{ __typename?: 'TickResponse', fee_growth_outside_0_x128: string, fee_growth_outside_1_x128: string, id: string, index: number, initialized: boolean, liquidity_gross: string, liquidity_net: string }> } } };

export type ICodegenGeneratedVlpTicksQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_ticks_limit?: InputMaybe<Scalars['Int']['input']>;
  vlp_ticks_start_after?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ICodegenGeneratedVlpTicksQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', ticks: { __typename?: 'TicksResponse', id: string, ticks: Array<{ __typename?: 'TickResponse', fee_growth_outside_0_x128: string, fee_growth_outside_1_x128: string, id: string, index: number, initialized: boolean, liquidity_gross: string, liquidity_net: string }> } } };

export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', euclid_fees: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', lp_fees: { __typename?: 'DenomFees', totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', lp_fees: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected: { __typename?: 'TotalFeesCollected', id: string, euclid_fees: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> }, lp_fees: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };

export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
  vlp_total_fees_collected_per_denom_denom: Scalars['String']['input'];
}>;


export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', total_fees_collected_per_denom: { __typename?: 'TotalFeesPerDenomResponse', euclid_fees: string, id: string, lp_fees: string } } };

export type ICodegenGeneratedVlpQueryVariables = Exact<{
  contract?: InputMaybe<Scalars['String']['input']>;
  pair?: InputMaybe<IPairInput>;
}>;


export type ICodegenGeneratedVlpQuery = { __typename?: 'Query', vlp: { __typename?: 'Vlp', fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, id: string, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }, liquidity: { __typename?: 'Liquidity', id: string, token_1_reserve: string, token_2_reserve: string, total_lp_tokens: string, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string } }, migration_status: { __typename?: 'MigrationStatusResponse', active_liquidity: string, id: string, migrated_at: number, mode: string, positions_migrated: number, revision: number, source_version: string, total_liquidity: string }, protocol_fees: { __typename?: 'ProtocolFeesResponse', amount_0: string, amount_1: string, id: string }, slot0: { __typename?: 'Slot0Response', fee_growth_global_0_x128: string, fee_growth_global_1_x128: string, id: string, liquidity: string, observation_cardinality: number, observation_cardinality_next: number, observation_index: number, sqrt_price_x96: string, tick: number }, state: { __typename?: 'ContractStateOfVlp', admin: string, id: string, last_updated: number, router: string, total_lp_tokens: string, vcoin: string, fee: { __typename?: 'FeeInfo', euclid_fee_bps: number, id: string, lp_fee_bps: number, recipient: { __typename?: 'CrossChainUser', address: string, chain_uid: string, id: string } }, pair: { __typename?: 'Pair', id: string, token_1: string, token_2: string }, pool_config: { __typename?: 'PoolConfig', constant_product: any, id: string, concentrated: { __typename?: 'ConcentratedPoolParams', fee_tier_bps: number, id: string, tick_spacing: number }, stable: { __typename?: 'StablePoolConfig', amp_factor: string, id: string } } }, total_fees_collected: { __typename?: 'TotalFeesCollected', id: string, euclid_fees: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> }, lp_fees: { __typename?: 'DenomFees', id: string, totals: Array<{ __typename?: 'Denomination', amount: string, denom: string, id: string }> } } } };


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
      id
      logo
      token_factory_address
      type
    }
  }
}
    `;
export const CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_NATIVE_CURRENCY {
  chains {
    all_evm_chains {
      native_currency {
        decimals
        id
        name
        symbol
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS_DEFAULT {
  chains {
    all_evm_chains {
      rpc_urls {
        default {
          http
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS {
  chains {
    all_evm_chains {
      rpc_urls {
        default {
          http
          id
        }
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedChainsAllEvmChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS {
  chains {
    all_evm_chains {
      chain_id
      chain_uid
      explorer_url
      id
      name
      native_currency {
        decimals
        id
        name
        symbol
      }
      rpc_urls {
        default {
          http
          id
        }
        id
      }
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
      id
      logo
      token_factory_address
      type
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
      id
    }
  }
}
    `;
export const CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_NATIVE_CURRENCY($chains_evm_chain_config_chain_id: String, $chains_evm_chain_config_chain_uid: String) {
  chains {
    evm_chain_config(
      chain_id: $chains_evm_chain_config_chain_id
      chain_uid: $chains_evm_chain_config_chain_uid
    ) {
      native_currency {
        decimals
        id
        name
        symbol
      }
    }
  }
}
    `;
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
          id
        }
      }
    }
  }
}
    `;
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
          id
        }
        id
      }
    }
  }
}
    `;
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
      id
      name
      native_currency {
        decimals
        id
        name
        symbol
      }
      rpc_urls {
        default {
          http
          id
        }
        id
      }
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
        id
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
        id
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
        id
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
          id
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
          id
          low
        }
        id
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
        id
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
        id
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
        id
      }
      bip44 {
        coinType
        id
      }
      chainID
      chainName
      coinType
      currencies {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
        id
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
          id
          low
        }
        id
      }
      gasPriceStep {
        average
        high
        id
        low
      }
      id
      rest
      rpc
      stakeCurrency {
        coinDecimals
        coinDenom
        coinGeckoID
        coinMinimalDenom
        id
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
      id
      logo
      type
    }
  }
}
    `;
export const CodegenGeneratedChainsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CHAINS {
  chains {
    all_evm_chains {
      chain_id
      chain_uid
      explorer_url
      id
      name
      native_currency {
        decimals
        id
        name
        symbol
      }
      rpc_urls {
        default {
          http
          id
        }
        id
      }
    }
    router_config {
      chain_uid
      contract_address
      explorer_url
      id
      logo
      type
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimSenderDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIM_SENDER($claim_claim_claim_id: Int!) {
  claim {
    claim(claim_id: $claim_claim_claim_id) {
      sender {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIM($claim_claim_claim_id: Int!) {
  claim {
    claim(claim_id: $claim_claim_claim_id) {
      amount
      claim_group_id
      claim_id
      claimer
      id
      pseudo_claim_id
      sender {
        address
        chain_uid
        id
      }
      status
      token
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimByPsuedoClaimIdSenderDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID_SENDER($claim_claim_by_psuedo_claim_id_psuedo_claim_id: String!) {
  claim {
    claim_by_psuedo_claim_id(
      psuedo_claim_id: $claim_claim_by_psuedo_claim_id_psuedo_claim_id
    ) {
      sender {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimByPsuedoClaimIdDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID($claim_claim_by_psuedo_claim_id_psuedo_claim_id: String!) {
  claim {
    claim_by_psuedo_claim_id(
      psuedo_claim_id: $claim_claim_by_psuedo_claim_id_psuedo_claim_id
    ) {
      amount
      claim_group_id
      claim_id
      claimer
      id
      pseudo_claim_id
      sender {
        address
        chain_uid
        id
      }
      status
      token
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimsByClaimerPubKeySenderDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY_SENDER($claim_claims_by_claimer_pub_Key_claimer_pub_key: String!, $claim_claims_by_claimer_pub_Key_limit: Int, $claim_claims_by_claimer_pub_Key_offset: Int) {
  claim {
    claims_by_claimer_pub_Key(
      claimer_pub_key: $claim_claims_by_claimer_pub_Key_claimer_pub_key
      limit: $claim_claims_by_claimer_pub_Key_limit
      offset: $claim_claims_by_claimer_pub_Key_offset
    ) {
      sender {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimsByClaimerPubKeyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY($claim_claims_by_claimer_pub_Key_claimer_pub_key: String!, $claim_claims_by_claimer_pub_Key_limit: Int, $claim_claims_by_claimer_pub_Key_offset: Int) {
  claim {
    claims_by_claimer_pub_Key(
      claimer_pub_key: $claim_claims_by_claimer_pub_Key_claimer_pub_key
      limit: $claim_claims_by_claimer_pub_Key_limit
      offset: $claim_claims_by_claimer_pub_Key_offset
    ) {
      amount
      claim_group_id
      claim_id
      claimer
      id
      pseudo_claim_id
      sender {
        address
        chain_uid
        id
      }
      status
      token
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimsByEmailSenderDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL_SENDER($claim_claims_by_email_email: String!, $claim_claims_by_email_limit: Int, $claim_claims_by_email_offset: Int) {
  claim {
    claims_by_email(
      email: $claim_claims_by_email_email
      limit: $claim_claims_by_email_limit
      offset: $claim_claims_by_email_offset
    ) {
      sender {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedClaimClaimsByEmailDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL($claim_claims_by_email_email: String!, $claim_claims_by_email_limit: Int, $claim_claims_by_email_offset: Int) {
  claim {
    claims_by_email(
      email: $claim_claims_by_email_email
      limit: $claim_claims_by_email_limit
      offset: $claim_claims_by_email_offset
    ) {
      amount
      claim_group_id
      claim_id
      claimer
      id
      pseudo_claim_id
      sender {
        address
        chain_uid
        id
      }
      status
      token
    }
  }
}
    `;
export const CodegenGeneratedClaimSenderClaimsSenderDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS_SENDER($claim_sender_claims_limit: Int!, $claim_sender_claims_offset: Int!, $claim_sender_claims_sender: CrossChainUserInput!) {
  claim {
    sender_claims(
      limit: $claim_sender_claims_limit
      offset: $claim_sender_claims_offset
      sender: $claim_sender_claims_sender
    ) {
      sender {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedClaimSenderClaimsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS($claim_sender_claims_limit: Int!, $claim_sender_claims_offset: Int!, $claim_sender_claims_sender: CrossChainUserInput!) {
  claim {
    sender_claims(
      limit: $claim_sender_claims_limit
      offset: $claim_sender_claims_offset
      sender: $claim_sender_claims_sender
    ) {
      amount
      claim_group_id
      claim_id
      claimer
      id
      pseudo_claim_id
      sender {
        address
        chain_uid
        id
      }
      status
      token
    }
  }
}
    `;
export const CodegenGeneratedClaimStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_STATE {
  claim {
    state {
      admin
      chain_uid
      factory_address
      id
      vcoin_address
    }
  }
}
    `;
export const CodegenGeneratedClaimUserClaimsSenderDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_USER_CLAIMS_SENDER($claim_user_claims_limit: Int, $claim_user_claims_offset: Int, $claim_user_claims_public_secret: String!) {
  claim {
    user_claims(
      limit: $claim_user_claims_limit
      offset: $claim_user_claims_offset
      public_secret: $claim_user_claims_public_secret
    ) {
      sender {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedClaimUserClaimsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM_USER_CLAIMS($claim_user_claims_limit: Int, $claim_user_claims_offset: Int, $claim_user_claims_public_secret: String!) {
  claim {
    user_claims(
      limit: $claim_user_claims_limit
      offset: $claim_user_claims_offset
      public_secret: $claim_user_claims_public_secret
    ) {
      amount
      claim_group_id
      claim_id
      claimer
      id
      pseudo_claim_id
      sender {
        address
        chain_uid
        id
      }
      status
      token
    }
  }
}
    `;
export const CodegenGeneratedClaimDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CLAIM {
  claim {
    state {
      admin
      chain_uid
      factory_address
      id
      vcoin_address
    }
  }
}
    `;
export const CodegenGeneratedCwBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_BALANCE($chain_uid: String!, $contract: String!, $cw_balance_address: String!) {
  cw(chain_uid: $chain_uid, contract: $contract) {
    balance(address: $cw_balance_address) {
      balance
      id
    }
  }
}
    `;
export const CodegenGeneratedCwTokenInfoDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_CW_TOKEN_INFO($chain_uid: String!, $contract: String!) {
  cw(chain_uid: $chain_uid, contract: $contract) {
    token_info {
      decimals
      id
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
      id
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
        id
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
          id
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
        id
        pair {
          id
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
      id
      pagination {
        id
        limit
        offset
        total_count
      }
      pools {
        id
        pair {
          id
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
        id
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
      id
      pagination {
        id
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
      id
    }
  }
}
    `;
export const CodegenGeneratedFactoryGetLptokenAddressDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS($chain_uid: String!, $factory_get_LpToken_address_vlp_address: String!) {
  factory(chain_uid: $chain_uid) {
    get_LpToken_address(vlp_address: $factory_get_LpToken_address_vlp_address) {
      id
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
          id
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
        id
        totals {
          amount
          denom
          id
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
      id
      total {
        id
        totals {
          amount
          denom
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryPositionTokenContractDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_POSITION_TOKEN_CONTRACT($chain_uid: String!) {
  factory(chain_uid: $chain_uid) {
    position_token_contract {
      contract_address
      id
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
      id
      router_contract
    }
  }
}
    `;
export const CodegenGeneratedFactoryUserPositionsPositionsPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS_PAIR($chain_uid: String!, $factory_user_positions_owner: String!) {
  factory(chain_uid: $chain_uid) {
    user_positions(owner: $factory_user_positions_owner) {
      positions {
        pair {
          id
          token_1
          token_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryUserPositionsPositionsPositionDetailDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS_POSITION_DETAIL($chain_uid: String!, $factory_user_positions_owner: String!) {
  factory(chain_uid: $chain_uid) {
    user_positions(owner: $factory_user_positions_owner) {
      positions {
        position_detail {
          chain_uid
          fee_growth_inside_0_last_x128
          fee_growth_inside_1_last_x128
          id
          liquidity
          lower_tick_index
          position_id
          tokens_owed_0
          tokens_owed_1
          upper_tick_index
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryUserPositionsPositionsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS($chain_uid: String!, $factory_user_positions_owner: String!) {
  factory(chain_uid: $chain_uid) {
    user_positions(owner: $factory_user_positions_owner) {
      positions {
        id
        liquidity
        pair {
          id
          token_1
          token_2
        }
        position_detail {
          chain_uid
          fee_growth_inside_0_last_x128
          fee_growth_inside_1_last_x128
          id
          liquidity
          lower_tick_index
          position_id
          tokens_owed_0
          tokens_owed_1
          upper_tick_index
        }
        token_id
        vlp_address
      }
    }
  }
}
    `;
export const CodegenGeneratedFactoryUserPositionsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_FACTORY_USER_POSITIONS($chain_uid: String!, $factory_user_positions_owner: String!) {
  factory(chain_uid: $chain_uid) {
    user_positions(owner: $factory_user_positions_owner) {
      id
      positions {
        id
        liquidity
        pair {
          id
          token_1
          token_2
        }
        position_detail {
          chain_uid
          fee_growth_inside_0_last_x128
          fee_growth_inside_1_last_x128
          id
          liquidity
          lower_tick_index
          position_id
          tokens_owed_0
          tokens_owed_1
          upper_tick_index
        }
        token_id
        vlp_address
      }
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
      id
      total {
        id
        totals {
          amount
          denom
          id
        }
      }
    }
    position_token_contract {
      contract_address
      id
    }
    state {
      admin
      chain_uid
      hub_channel
      id
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
        id
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
        id
        token1
        token2
        total_fee
      }
      id
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
        id
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
        id
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
      id
      pair {
        id
        token_1
        token_2
      }
      user {
        address
        chain_uid
        id
      }
      vlp
    }
  }
}
    `;
export const CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_only_show_verified: Boolean, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      only_show_verified: $pool_token_pair_with_liquidity_only_show_verified
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
      token: $pool_token_pair_with_liquidity_token
    ) {
      pagination {
        id
        limit
        offset
        total_count
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_only_show_verified: Boolean, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      only_show_verified: $pool_token_pair_with_liquidity_only_show_verified
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
      token: $pool_token_pair_with_liquidity_token
    ) {
      results {
        pair {
          id
          token_1
          token_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_only_show_verified: Boolean, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      only_show_verified: $pool_token_pair_with_liquidity_only_show_verified
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
      token: $pool_token_pair_with_liquidity_token
    ) {
      results {
        apr
        created_at
        id
        pair {
          id
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
export const CodegenGeneratedPoolTokenPairWithLiquidityDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY($pool_token_pair_with_liquidity_limit: Int, $pool_token_pair_with_liquidity_offset: Int, $pool_token_pair_with_liquidity_only_show_verified: Boolean, $pool_token_pair_with_liquidity_sort_by: TokenPairSortBy, $pool_token_pair_with_liquidity_sort_order: SortOrder, $pool_token_pair_with_liquidity_token: String) {
  pool {
    token_pair_with_liquidity(
      limit: $pool_token_pair_with_liquidity_limit
      offset: $pool_token_pair_with_liquidity_offset
      only_show_verified: $pool_token_pair_with_liquidity_only_show_verified
      sort_by: $pool_token_pair_with_liquidity_sort_by
      sort_order: $pool_token_pair_with_liquidity_sort_order
      token: $pool_token_pair_with_liquidity_token
    ) {
      id
      pagination {
        id
        limit
        offset
        total_count
      }
      results {
        apr
        created_at
        id
        pair {
          id
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
export const CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_VOLUME_VOLUME_BREAKDOWN_24HOURS {
  pool {
    volume {
      volume_breakdown_24hours {
        id
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
      id
      total_liquidity
      total_volume
      volume_24hours
      volume_breakdown_24hours {
        id
        pair
        volume
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolVolumeClickhouseVolumeBreakdown_24HoursDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_VOLUME_CLICKHOUSE_VOLUME_BREAKDOWN_24HOURS {
  pool {
    volume_clickhouse {
      volume_breakdown_24hours {
        id
        pair
        volume
      }
    }
  }
}
    `;
export const CodegenGeneratedPoolVolumeClickhouseDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_POOL_VOLUME_CLICKHOUSE {
  pool {
    volume_clickhouse {
      id
      total_liquidity
      total_volume
      volume_24hours
      volume_breakdown_24hours {
        id
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
        id
        token1
        token2
        total_fee
      }
      id
      total_overall
    }
    volume {
      id
      total_liquidity
      total_volume
      volume_24hours
      volume_breakdown_24hours {
        id
        pair
        volume
      }
    }
    volume_clickhouse {
      id
      total_liquidity
      total_volume
      volume_24hours
      volume_breakdown_24hours {
        id
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
      id
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
      id
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
      id
      tokens
    }
  }
}
    `;
export const CodegenGeneratedRouterAllVlpsVlpsPoolKeyPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_PAIR($router_all_vlps_limit: Int, $router_all_vlps_max: [String], $router_all_vlps_min: [String], $router_all_vlps_skip: Int) {
  router {
    all_vlps(
      limit: $router_all_vlps_limit
      max: $router_all_vlps_max
      min: $router_all_vlps_min
      skip: $router_all_vlps_skip
    ) {
      vlps {
        pool_key {
          pair {
            id
            token_1
            token_2
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeConcentratedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_POOL_TYPE_CONCENTRATED($router_all_vlps_limit: Int, $router_all_vlps_max: [String], $router_all_vlps_min: [String], $router_all_vlps_skip: Int) {
  router {
    all_vlps(
      limit: $router_all_vlps_limit
      max: $router_all_vlps_max
      min: $router_all_vlps_min
      skip: $router_all_vlps_skip
    ) {
      vlps {
        pool_key {
          pool_type {
            concentrated {
              fee_tier_bps
              id
              tick_spacing
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_POOL_TYPE($router_all_vlps_limit: Int, $router_all_vlps_max: [String], $router_all_vlps_min: [String], $router_all_vlps_skip: Int) {
  router {
    all_vlps(
      limit: $router_all_vlps_limit
      max: $router_all_vlps_max
      min: $router_all_vlps_min
      skip: $router_all_vlps_skip
    ) {
      vlps {
        pool_key {
          pool_type {
            concentrated {
              fee_tier_bps
              id
              tick_spacing
            }
            constant_product
            id
            stable
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterAllVlpsVlpsPoolKeyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY($router_all_vlps_limit: Int, $router_all_vlps_max: [String], $router_all_vlps_min: [String], $router_all_vlps_skip: Int) {
  router {
    all_vlps(
      limit: $router_all_vlps_limit
      max: $router_all_vlps_max
      min: $router_all_vlps_min
      skip: $router_all_vlps_skip
    ) {
      vlps {
        pool_key {
          id
          pair {
            id
            token_1
            token_2
          }
          pool_type {
            concentrated {
              fee_tier_bps
              id
              tick_spacing
            }
            constant_product
            id
            stable
          }
        }
      }
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
        id
        pool_key {
          id
          pair {
            id
            token_1
            token_2
          }
          pool_type {
            concentrated {
              fee_tier_bps
              id
              tick_spacing
            }
            constant_product
            id
            stable
          }
        }
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
      id
      vlps {
        id
        pool_key {
          id
          pair {
            id
            token_1
            token_2
          }
          pool_type {
            concentrated {
              fee_tier_bps
              id
              tick_spacing
            }
            constant_product
            id
            stable
          }
        }
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
            id
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
            id
          }
          id
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
            id
          }
          id
        }
        factory
        factory_chain_id
        id
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
            id
          }
          id
        }
        factory
        factory_chain_id
        id
      }
      chain_uid
      id
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
      id
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
            id
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
          id
          limit
          user {
            address
            chain_uid
            id
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
          id
          limit
          user {
            address
            chain_uid
            id
          }
        }
        id
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
      id
      release_amounts {
        amount
        cross_chain_user {
          id
          limit
          user {
            address
            chain_uid
            id
          }
        }
        id
      }
      remaining_amount
    }
  }
}
    `;
export const CodegenGeneratedRouterSimulateSwapDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_SIMULATE_SWAP($router_simulate_swap_amount_in: String!, $router_simulate_swap_asset_in: String!, $router_simulate_swap_asset_out: String!, $router_simulate_swap_min_amount_out: String!, $router_simulate_swap_swaps: [NextSwapPair!]) {
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
      id
    }
  }
}
    `;
export const CodegenGeneratedRouterStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_STATE {
  router {
    state {
      admin
      concentrated_vlp_code_id
      constant_product_vlp_code_id
      id
      locked
      stable_vlp_code_id
      virtual_balance_address
    }
  }
}
    `;
export const CodegenGeneratedRouterTokenDenomsDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS_DENOMS($router_token_denoms_token: String!) {
  router {
    token_denoms(token: $router_token_denoms_token) {
      denoms {
        chain_type
        chain_uid
        id
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
export const CodegenGeneratedRouterTokenDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS($router_token_denoms_token: String!) {
  router {
    token_denoms(token: $router_token_denoms_token) {
      denoms {
        chain_type
        chain_uid
        id
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
      id
    }
  }
}
    `;
export const CodegenGeneratedRouterTokenPairsFromVlpPoolKeyPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_PAIR($router_token_pairs_from_vlp_vlp: String!) {
  router {
    token_pairs_from_vlp(vlp: $router_token_pairs_from_vlp_vlp) {
      pool_key {
        pair {
          id
          token_1
          token_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeConcentratedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_POOL_TYPE_CONCENTRATED($router_token_pairs_from_vlp_vlp: String!) {
  router {
    token_pairs_from_vlp(vlp: $router_token_pairs_from_vlp_vlp) {
      pool_key {
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_POOL_TYPE($router_token_pairs_from_vlp_vlp: String!) {
  router {
    token_pairs_from_vlp(vlp: $router_token_pairs_from_vlp_vlp) {
      pool_key {
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterTokenPairsFromVlpPoolKeyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY($router_token_pairs_from_vlp_vlp: String!) {
  router {
    token_pairs_from_vlp(vlp: $router_token_pairs_from_vlp_vlp) {
      pool_key {
        id
        pair {
          id
          token_1
          token_2
        }
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterTokenPairsFromVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP($router_token_pairs_from_vlp_vlp: String!) {
  router {
    token_pairs_from_vlp(vlp: $router_token_pairs_from_vlp_vlp) {
      id
      pool_key {
        id
        pair {
          id
          token_1
          token_2
        }
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
      token_1
      token_2
      vlp
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpPoolKeyPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_PAIR($router_vlp_pair: PairInput) {
  router {
    vlp(pair: $router_vlp_pair) {
      pool_key {
        pair {
          id
          token_1
          token_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpPoolKeyPoolTypeConcentratedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_POOL_TYPE_CONCENTRATED($router_vlp_pair: PairInput) {
  router {
    vlp(pair: $router_vlp_pair) {
      pool_key {
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpPoolKeyPoolTypeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_POOL_TYPE($router_vlp_pair: PairInput) {
  router {
    vlp(pair: $router_vlp_pair) {
      pool_key {
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpPoolKeyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY($router_vlp_pair: PairInput) {
  router {
    vlp(pair: $router_vlp_pair) {
      pool_key {
        id
        pair {
          id
          token_1
          token_2
        }
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP($router_vlp_pair: PairInput) {
  router {
    vlp(pair: $router_vlp_pair) {
      id
      pool_key {
        id
        pair {
          id
          token_1
          token_2
        }
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
      token_1
      token_2
      vlp
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpByPoolKeyPoolTypeConcentratedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY_POOL_TYPE_CONCENTRATED($router_vlp_by_pool_key_pool_key: PoolKeyInput!) {
  router {
    vlp_by_pool_key(pool_key: $router_vlp_by_pool_key_pool_key) {
      pool_type {
        concentrated {
          fee_tier_bps
          id
          tick_spacing
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpByPoolKeyPoolTypeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY_POOL_TYPE($router_vlp_by_pool_key_pool_key: PoolKeyInput!) {
  router {
    vlp_by_pool_key(pool_key: $router_vlp_by_pool_key_pool_key) {
      pool_type {
        concentrated {
          fee_tier_bps
          id
          tick_spacing
        }
        constant_product
        id
        stable
      }
    }
  }
}
    `;
export const CodegenGeneratedRouterVlpByPoolKeyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY($router_vlp_by_pool_key_pool_key: PoolKeyInput!) {
  router {
    vlp_by_pool_key(pool_key: $router_vlp_by_pool_key_pool_key) {
      id
      pool_type {
        concentrated {
          fee_tier_bps
          id
          tick_spacing
        }
        constant_product
        id
        stable
      }
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
      id
    }
    id
    state {
      admin
      concentrated_vlp_code_id
      constant_product_vlp_code_id
      id
      locked
      stable_vlp_code_id
      virtual_balance_address
    }
  }
}
    `;
export const CodegenGeneratedTokenAllDexesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_ALL_DEXES($token_all_dexes_limit: Int, $token_all_dexes_offset: Int) {
  token {
    all_dexes(limit: $token_all_dexes_limit, offset: $token_all_dexes_offset) {
      bg_color
      chain_uid
      dex_name
      display_name
      fg_color
      id
      logo
    }
  }
}
    `;
export const CodegenGeneratedTokenChainsForTokenLaunchDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_CHAINS_FOR_TOKEN_LAUNCH {
  token {
    chains_for_token_launch {
      chain_id
      chain_uid
      display_name
      explorer_url
      factory_address
      id
      logo
      token_factory_address
      type
    }
  }
}
    `;
export const CodegenGeneratedTokenDexMetadataDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_DEX_METADATA($token_dex_metadata_dex: String!) {
  token {
    dex_metadata(dex: $token_dex_metadata_dex) {
      bg_color
      chain_uid
      dex_name
      display_name
      fg_color
      id
      logo
    }
  }
}
    `;
export const CodegenGeneratedTokenGetAllFaucetsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS {
  token {
    get_all_faucets {
      faucet_link
      id
      token
    }
  }
}
    `;
export const CodegenGeneratedTokenTokenDenomsDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS_DENOMS($token_token_denoms_chain_uids: [String!], $token_token_denoms_denom: String, $token_token_denoms_token_id: String) {
  token {
    token_denoms(
      chain_uids: $token_token_denoms_chain_uids
      denom: $token_token_denoms_denom
      token_id: $token_token_denoms_token_id
    ) {
      denoms {
        chain_type
        chain_uid
        id
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
export const CodegenGeneratedTokenTokenDenomsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS($token_token_denoms_chain_uids: [String!], $token_token_denoms_denom: String, $token_token_denoms_token_id: String) {
  token {
    token_denoms(
      chain_uids: $token_token_denoms_chain_uids
      denom: $token_token_denoms_denom
      token_id: $token_token_denoms_token_id
    ) {
      denoms {
        chain_type
        chain_uid
        id
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
      id
      token_id
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
      id
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
      id
      token
      total_liquidity
      total_volume
    }
  }
}
    `;
export const CodegenGeneratedTokenTokenMetadataByIdDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID($token_token_metadata_by_id_token_id: String!, $token_token_metadata_by_id_verified: Boolean) {
  token {
    token_metadata_by_id(
      token_id: $token_token_metadata_by_id_token_id
      verified: $token_token_metadata_by_id_verified
    ) {
      chain_type
      chain_uids
      coinDecimal
      created_at
      description
      dex
      displayName
      id
      image
      is_price_from_oracle
      is_verified
      min_swap_value
      oracle_price
      price
      price_change_7d
      price_change_24h
      social
      tags
      tokenId
      total_volume
      total_volume_24h
    }
  }
}
    `;
export const CodegenGeneratedTokenTokenMetadatasDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS($token_token_metadatas_chain_uids: [String!], $token_token_metadatas_dex: [String!], $token_token_metadatas_limit: Int, $token_token_metadatas_offset: Int, $token_token_metadatas_search: String, $token_token_metadatas_show_volume: Boolean, $token_token_metadatas_verified: Boolean) {
  token {
    token_metadatas(
      chain_uids: $token_token_metadatas_chain_uids
      dex: $token_token_metadatas_dex
      limit: $token_token_metadatas_limit
      offset: $token_token_metadatas_offset
      search: $token_token_metadatas_search
      show_volume: $token_token_metadatas_show_volume
      verified: $token_token_metadatas_verified
    ) {
      chain_type
      chain_uids
      coinDecimal
      created_at
      description
      dex
      displayName
      id
      image
      is_price_from_oracle
      is_verified
      min_swap_value
      oracle_price
      price
      price_change_7d
      price_change_24h
      social
      tags
      tokenId
      total_volume
      total_volume_24h
    }
  }
}
    `;
export const CodegenGeneratedTokenTokensMetadataDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN_TOKENS_METADATA($token_tokens_metadata_token_ids: [String!]!, $token_tokens_metadata_verified: Boolean) {
  token {
    tokens_metadata(
      token_ids: $token_tokens_metadata_token_ids
      verified: $token_tokens_metadata_verified
    ) {
      chain_type
      chain_uids
      coinDecimal
      created_at
      description
      dex
      displayName
      id
      image
      is_price_from_oracle
      is_verified
      min_swap_value
      oracle_price
      price
      price_change_7d
      price_change_24h
      social
      tags
      tokenId
      total_volume
      total_volume_24h
    }
  }
}
    `;
export const CodegenGeneratedTokenDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_TOKEN {
  token {
    chains_for_token_launch {
      chain_id
      chain_uid
      display_name
      explorer_url
      factory_address
      id
      logo
      token_factory_address
      type
    }
    get_all_faucets {
      faucet_link
      id
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
      id
    }
  }
}
    `;
export const CodegenGeneratedVcoinStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_STATE {
  vcoin {
    state {
      admin
      id
      router
    }
  }
}
    `;
export const CodegenGeneratedVcoinUnifiedUserBalanceBalancesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_UNIFIED_USER_BALANCE_BALANCES($vcoin_unified_user_balance_address: String!, $vcoin_unified_user_balance_chain_uids: [String], $vcoin_unified_user_balance_limit: Int, $vcoin_unified_user_balance_offset: Int) {
  vcoin {
    unified_user_balance(
      address: $vcoin_unified_user_balance_address
      chain_uids: $vcoin_unified_user_balance_chain_uids
      limit: $vcoin_unified_user_balance_limit
      offset: $vcoin_unified_user_balance_offset
    ) {
      balances {
        amount
        id
        token_id
      }
    }
  }
}
    `;
export const CodegenGeneratedVcoinUnifiedUserBalanceDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN_UNIFIED_USER_BALANCE($vcoin_unified_user_balance_address: String!, $vcoin_unified_user_balance_chain_uids: [String], $vcoin_unified_user_balance_limit: Int, $vcoin_unified_user_balance_offset: Int) {
  vcoin {
    unified_user_balance(
      address: $vcoin_unified_user_balance_address
      chain_uids: $vcoin_unified_user_balance_chain_uids
      limit: $vcoin_unified_user_balance_limit
      offset: $vcoin_unified_user_balance_offset
    ) {
      balances {
        amount
        id
        token_id
      }
      chain_uid
      id
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
        id
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
        id
        token_id
      }
      chain_uid
      id
    }
  }
}
    `;
export const CodegenGeneratedVcoinDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VCOIN {
  vcoin {
    state {
      admin
      id
      router
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPaginationDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pagination {
        id
        limit
        offset
        total_count
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_PAIR($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        pool {
          pool_key {
            pair {
              id
              token_1
              token_2
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeConcentratedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_POOL_TYPE_CONCENTRATED($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        pool {
          pool_key {
            pool_type {
              concentrated {
                fee_tier_bps
                id
                tick_spacing
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_POOL_TYPE($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        pool {
          pool_key {
            pool_type {
              concentrated {
                fee_tier_bps
                id
                tick_spacing
              }
              constant_product
              id
              stable
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        pool {
          pool_key {
            id
            pair {
              id
              token_1
              token_2
            }
            pool_type {
              concentrated {
                fee_tier_bps
                id
                tick_spacing
              }
              constant_product
              id
              stable
            }
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsPoolDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        pool {
          id
          lp_shares
          pool_key {
            id
            pair {
              id
              token_1
              token_2
            }
            pool_type {
              concentrated {
                fee_tier_bps
                id
                tick_spacing
              }
              constant_product
              id
              stable
            }
          }
          reserve_1
          reserve_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      pools {
        chain_uid
        id
        pool {
          id
          lp_shares
          pool_key {
            id
            pair {
              id
              token_1
              token_2
            }
            pool_type {
              concentrated {
                fee_tier_bps
                id
                tick_spacing
              }
              constant_product
              id
              stable
            }
          }
          reserve_1
          reserve_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpAllPoolsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_ALL_POOLS($contract: String, $pair: PairInput, $vlp_all_pools_limit: Int, $vlp_all_pools_offset: Int) {
  vlp(contract: $contract, pair: $pair) {
    all_pools(limit: $vlp_all_pools_limit, offset: $vlp_all_pools_offset) {
      id
      pagination {
        id
        limit
        offset
        total_count
      }
      pools {
        chain_uid
        id
        pool {
          id
          lp_shares
          pool_key {
            id
            pair {
              id
              token_1
              token_2
            }
            pool_type {
              concentrated {
                fee_tier_bps
                id
                tick_spacing
              }
              constant_product
              id
              stable
            }
          }
          reserve_1
          reserve_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpFeeRecipientDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_FEE_RECIPIENT($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    fee {
      recipient {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpFeeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_FEE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    fee {
      euclid_fee_bps
      id
      lp_fee_bps
      recipient {
        address
        chain_uid
        id
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpLiquidityPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    liquidity {
      pair {
        id
        token_1
        token_2
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpLiquidityDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_LIQUIDITY($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    liquidity {
      id
      pair {
        id
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
export const CodegenGeneratedVlpMigrationStatusDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_MIGRATION_STATUS($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    migration_status {
      active_liquidity
      id
      migrated_at
      mode
      positions_migrated
      revision
      source_version
      total_liquidity
    }
  }
}
    `;
export const CodegenGeneratedVlpObserveDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_OBSERVE($contract: String, $pair: PairInput, $vlp_observe_seconds_agos: [Int!]!) {
  vlp(contract: $contract, pair: $pair) {
    observe(seconds_agos: $vlp_observe_seconds_agos) {
      id
      seconds_per_liquidity_cumulative_x128s
      tick_cumulatives
    }
  }
}
    `;
export const CodegenGeneratedVlpPoolPoolKeyPairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POOL_POOL_KEY_PAIR($contract: String, $pair: PairInput, $vlp_pool_chain_uid: String!) {
  vlp(contract: $contract, pair: $pair) {
    pool(chain_uid: $vlp_pool_chain_uid) {
      pool_key {
        pair {
          id
          token_1
          token_2
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpPoolPoolKeyPoolTypeConcentratedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POOL_POOL_KEY_POOL_TYPE_CONCENTRATED($contract: String, $pair: PairInput, $vlp_pool_chain_uid: String!) {
  vlp(contract: $contract, pair: $pair) {
    pool(chain_uid: $vlp_pool_chain_uid) {
      pool_key {
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpPoolPoolKeyPoolTypeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POOL_POOL_KEY_POOL_TYPE($contract: String, $pair: PairInput, $vlp_pool_chain_uid: String!) {
  vlp(contract: $contract, pair: $pair) {
    pool(chain_uid: $vlp_pool_chain_uid) {
      pool_key {
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpPoolPoolKeyDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POOL_POOL_KEY($contract: String, $pair: PairInput, $vlp_pool_chain_uid: String!) {
  vlp(contract: $contract, pair: $pair) {
    pool(chain_uid: $vlp_pool_chain_uid) {
      pool_key {
        id
        pair {
          id
          token_1
          token_2
        }
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpPoolDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POOL($contract: String, $pair: PairInput, $vlp_pool_chain_uid: String!) {
  vlp(contract: $contract, pair: $pair) {
    pool(chain_uid: $vlp_pool_chain_uid) {
      id
      lp_shares
      pool_key {
        id
        pair {
          id
          token_1
          token_2
        }
        pool_type {
          concentrated {
            fee_tier_bps
            id
            tick_spacing
          }
          constant_product
          id
          stable
        }
      }
      reserve_1
      reserve_2
    }
  }
}
    `;
export const CodegenGeneratedVlpPositionDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_POSITION($contract: String, $pair: PairInput, $vlp_position_position_id: String!) {
  vlp(contract: $contract, pair: $pair) {
    position(position_id: $vlp_position_position_id) {
      chain_uid
      fee_growth_inside_0_last_x128
      fee_growth_inside_1_last_x128
      id
      liquidity
      lower_tick_index
      position_id
      tokens_owed_0
      tokens_owed_1
      upper_tick_index
    }
  }
}
    `;
export const CodegenGeneratedVlpProtocolFeesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_PROTOCOL_FEES($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    protocol_fees {
      amount_0
      amount_1
      id
    }
  }
}
    `;
export const CodegenGeneratedVlpSlot0Document = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_SLOT0($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    slot0 {
      fee_growth_global_0_x128
      fee_growth_global_1_x128
      id
      liquidity
      observation_cardinality
      observation_cardinality_next
      observation_index
      sqrt_price_x96
      tick
    }
  }
}
    `;
export const CodegenGeneratedVlpStateFeeRecipientDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      fee {
        recipient {
          address
          chain_uid
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStateFeeDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_FEE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      fee {
        euclid_fee_bps
        id
        lp_fee_bps
        recipient {
          address
          chain_uid
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStatePairDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_PAIR($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      pair {
        id
        token_1
        token_2
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStatePoolConfigConcentratedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_CONCENTRATED($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      pool_config {
        concentrated {
          fee_tier_bps
          id
          tick_spacing
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStatePoolConfigStableDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_STABLE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      pool_config {
        stable {
          amp_factor
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStatePoolConfigDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      pool_config {
        concentrated {
          fee_tier_bps
          id
          tick_spacing
        }
        constant_product
        id
        stable {
          amp_factor
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpStateDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_STATE($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    state {
      admin
      fee {
        euclid_fee_bps
        id
        lp_fee_bps
        recipient {
          address
          chain_uid
          id
        }
      }
      id
      last_updated
      pair {
        id
        token_1
        token_2
      }
      pool_config {
        concentrated {
          fee_tier_bps
          id
          tick_spacing
        }
        constant_product
        id
        stable {
          amp_factor
          id
        }
      }
      router
      total_lp_tokens
      vcoin
    }
  }
}
    `;
export const CodegenGeneratedVlpTickDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TICK($contract: String, $pair: PairInput, $vlp_tick_index: Int!) {
  vlp(contract: $contract, pair: $pair) {
    tick(index: $vlp_tick_index) {
      fee_growth_outside_0_x128
      fee_growth_outside_1_x128
      id
      index
      initialized
      liquidity_gross
      liquidity_net
    }
  }
}
    `;
export const CodegenGeneratedVlpTicksTicksDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TICKS_TICKS($contract: String, $pair: PairInput, $vlp_ticks_limit: Int, $vlp_ticks_start_after: Int) {
  vlp(contract: $contract, pair: $pair) {
    ticks(limit: $vlp_ticks_limit, start_after: $vlp_ticks_start_after) {
      ticks {
        fee_growth_outside_0_x128
        fee_growth_outside_1_x128
        id
        index
        initialized
        liquidity_gross
        liquidity_net
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTicksDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TICKS($contract: String, $pair: PairInput, $vlp_ticks_limit: Int, $vlp_ticks_start_after: Int) {
  vlp(contract: $contract, pair: $pair) {
    ticks(limit: $vlp_ticks_limit, start_after: $vlp_ticks_start_after) {
      id
      ticks {
        fee_growth_outside_0_x128
        fee_growth_outside_1_x128
        id
        index
        initialized
        liquidity_gross
        liquidity_net
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected {
      euclid_fees {
        totals {
          amount
          denom
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected {
      euclid_fees {
        id
        totals {
          amount
          denom
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected {
      lp_fees {
        totals {
          amount
          denom
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected {
      lp_fees {
        id
        totals {
          amount
          denom
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected {
      euclid_fees {
        id
        totals {
          amount
          denom
          id
        }
      }
      id
      lp_fees {
        id
        totals {
          amount
          denom
          id
        }
      }
    }
  }
}
    `;
export const CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM($contract: String, $pair: PairInput, $vlp_total_fees_collected_per_denom_denom: String!) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected_per_denom(denom: $vlp_total_fees_collected_per_denom_denom) {
      euclid_fees
      id
      lp_fees
    }
  }
}
    `;
export const CodegenGeneratedVlpDocument = /*#__PURE__*/ gql`
    query CODEGEN_GENERATED_VLP($contract: String, $pair: PairInput) {
  vlp(contract: $contract, pair: $pair) {
    fee {
      euclid_fee_bps
      id
      lp_fee_bps
      recipient {
        address
        chain_uid
        id
      }
    }
    liquidity {
      id
      pair {
        id
        token_1
        token_2
      }
      token_1_reserve
      token_2_reserve
      total_lp_tokens
    }
    migration_status {
      active_liquidity
      id
      migrated_at
      mode
      positions_migrated
      revision
      source_version
      total_liquidity
    }
    protocol_fees {
      amount_0
      amount_1
      id
    }
    slot0 {
      fee_growth_global_0_x128
      fee_growth_global_1_x128
      id
      liquidity
      observation_cardinality
      observation_cardinality_next
      observation_index
      sqrt_price_x96
      tick
    }
    state {
      admin
      fee {
        euclid_fee_bps
        id
        lp_fee_bps
        recipient {
          address
          chain_uid
          id
        }
      }
      id
      last_updated
      pair {
        id
        token_1
        token_2
      }
      pool_config {
        concentrated {
          fee_tier_bps
          id
          tick_spacing
        }
        constant_product
        id
        stable {
          amp_factor
          id
        }
      }
      router
      total_lp_tokens
      vcoin
    }
    total_fees_collected {
      euclid_fees {
        id
        totals {
          amount
          denom
          id
        }
      }
      id
      lp_fees {
        id
        totals {
          amount
          denom
          id
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
    CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_NATIVE_CURRENCY(variables?: ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery>(CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_NATIVE_CURRENCY', 'query');
    },
    CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS_DEFAULT(variables?: ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery>(CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS_DEFAULT', 'query');
    },
    CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS(variables?: ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery>(CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS', 'query');
    },
    CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS(variables?: ICodegenGeneratedChainsAllEvmChainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsAllEvmChainsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsAllEvmChainsQuery>(CodegenGeneratedChainsAllEvmChainsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS', 'query');
    },
    CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG(variables?: ICodegenGeneratedChainsChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsChainConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsChainConfigQuery>(CodegenGeneratedChainsChainConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG', 'query');
    },
    CODEGEN_GENERATED_CHAINS_CONTRACTS(variables?: ICodegenGeneratedChainsContractsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsContractsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsContractsQuery>(CodegenGeneratedChainsContractsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_CONTRACTS', 'query');
    },
    CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_NATIVE_CURRENCY(variables?: ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery>(CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_NATIVE_CURRENCY', 'query');
    },
    CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS_DEFAULT(variables?: ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery>(CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS_DEFAULT', 'query');
    },
    CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS(variables?: ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery>(CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS', 'query');
    },
    CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG(variables?: ICodegenGeneratedChainsEvmChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsEvmChainConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedChainsEvmChainConfigQuery>(CodegenGeneratedChainsEvmChainConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG', 'query');
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
    CODEGEN_GENERATED_CLAIM_CLAIM_SENDER(variables: ICodegenGeneratedClaimClaimSenderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimSenderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimSenderQuery>(CodegenGeneratedClaimClaimSenderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIM_SENDER', 'query');
    },
    CODEGEN_GENERATED_CLAIM_CLAIM(variables: ICodegenGeneratedClaimClaimQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimQuery>(CodegenGeneratedClaimClaimDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIM', 'query');
    },
    CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID_SENDER(variables: ICodegenGeneratedClaimClaimByPsuedoClaimIdSenderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimByPsuedoClaimIdSenderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimByPsuedoClaimIdSenderQuery>(CodegenGeneratedClaimClaimByPsuedoClaimIdSenderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID_SENDER', 'query');
    },
    CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID(variables: ICodegenGeneratedClaimClaimByPsuedoClaimIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimByPsuedoClaimIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimByPsuedoClaimIdQuery>(CodegenGeneratedClaimClaimByPsuedoClaimIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID', 'query');
    },
    CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY_SENDER(variables: ICodegenGeneratedClaimClaimsByClaimerPubKeySenderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimsByClaimerPubKeySenderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimsByClaimerPubKeySenderQuery>(CodegenGeneratedClaimClaimsByClaimerPubKeySenderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY_SENDER', 'query');
    },
    CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY(variables: ICodegenGeneratedClaimClaimsByClaimerPubKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimsByClaimerPubKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimsByClaimerPubKeyQuery>(CodegenGeneratedClaimClaimsByClaimerPubKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY', 'query');
    },
    CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL_SENDER(variables: ICodegenGeneratedClaimClaimsByEmailSenderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimsByEmailSenderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimsByEmailSenderQuery>(CodegenGeneratedClaimClaimsByEmailSenderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL_SENDER', 'query');
    },
    CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL(variables: ICodegenGeneratedClaimClaimsByEmailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimClaimsByEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimClaimsByEmailQuery>(CodegenGeneratedClaimClaimsByEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL', 'query');
    },
    CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS_SENDER(variables: ICodegenGeneratedClaimSenderClaimsSenderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimSenderClaimsSenderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimSenderClaimsSenderQuery>(CodegenGeneratedClaimSenderClaimsSenderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS_SENDER', 'query');
    },
    CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS(variables: ICodegenGeneratedClaimSenderClaimsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimSenderClaimsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimSenderClaimsQuery>(CodegenGeneratedClaimSenderClaimsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS', 'query');
    },
    CODEGEN_GENERATED_CLAIM_STATE(variables?: ICodegenGeneratedClaimStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimStateQuery>(CodegenGeneratedClaimStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_STATE', 'query');
    },
    CODEGEN_GENERATED_CLAIM_USER_CLAIMS_SENDER(variables: ICodegenGeneratedClaimUserClaimsSenderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimUserClaimsSenderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimUserClaimsSenderQuery>(CodegenGeneratedClaimUserClaimsSenderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_USER_CLAIMS_SENDER', 'query');
    },
    CODEGEN_GENERATED_CLAIM_USER_CLAIMS(variables: ICodegenGeneratedClaimUserClaimsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimUserClaimsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimUserClaimsQuery>(CodegenGeneratedClaimUserClaimsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM_USER_CLAIMS', 'query');
    },
    CODEGEN_GENERATED_CLAIM(variables?: ICodegenGeneratedClaimQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedClaimQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedClaimQuery>(CodegenGeneratedClaimDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_CLAIM', 'query');
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
    CODEGEN_GENERATED_FACTORY_POSITION_TOKEN_CONTRACT(variables: ICodegenGeneratedFactoryPositionTokenContractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryPositionTokenContractQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryPositionTokenContractQuery>(CodegenGeneratedFactoryPositionTokenContractDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_POSITION_TOKEN_CONTRACT', 'query');
    },
    CODEGEN_GENERATED_FACTORY_STATE(variables: ICodegenGeneratedFactoryStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryStateQuery>(CodegenGeneratedFactoryStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_STATE', 'query');
    },
    CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS_PAIR(variables: ICodegenGeneratedFactoryUserPositionsPositionsPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryUserPositionsPositionsPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryUserPositionsPositionsPairQuery>(CodegenGeneratedFactoryUserPositionsPositionsPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS_PAIR', 'query');
    },
    CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS_POSITION_DETAIL(variables: ICodegenGeneratedFactoryUserPositionsPositionsPositionDetailQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryUserPositionsPositionsPositionDetailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryUserPositionsPositionsPositionDetailQuery>(CodegenGeneratedFactoryUserPositionsPositionsPositionDetailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS_POSITION_DETAIL', 'query');
    },
    CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS(variables: ICodegenGeneratedFactoryUserPositionsPositionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryUserPositionsPositionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryUserPositionsPositionsQuery>(CodegenGeneratedFactoryUserPositionsPositionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_USER_POSITIONS_POSITIONS', 'query');
    },
    CODEGEN_GENERATED_FACTORY_USER_POSITIONS(variables: ICodegenGeneratedFactoryUserPositionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryUserPositionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedFactoryUserPositionsQuery>(CodegenGeneratedFactoryUserPositionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_FACTORY_USER_POSITIONS', 'query');
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
    CODEGEN_GENERATED_POOL_VOLUME_CLICKHOUSE_VOLUME_BREAKDOWN_24HOURS(variables?: ICodegenGeneratedPoolVolumeClickhouseVolumeBreakdown_24HoursQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolVolumeClickhouseVolumeBreakdown_24HoursQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolVolumeClickhouseVolumeBreakdown_24HoursQuery>(CodegenGeneratedPoolVolumeClickhouseVolumeBreakdown_24HoursDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_VOLUME_CLICKHOUSE_VOLUME_BREAKDOWN_24HOURS', 'query');
    },
    CODEGEN_GENERATED_POOL_VOLUME_CLICKHOUSE(variables?: ICodegenGeneratedPoolVolumeClickhouseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolVolumeClickhouseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedPoolVolumeClickhouseQuery>(CodegenGeneratedPoolVolumeClickhouseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_POOL_VOLUME_CLICKHOUSE', 'query');
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
    CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_PAIR(variables?: ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPairQuery>(CodegenGeneratedRouterAllVlpsVlpsPoolKeyPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_PAIR', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_POOL_TYPE_CONCENTRATED(variables?: ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeConcentratedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeConcentratedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeConcentratedQuery>(CodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeConcentratedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_POOL_TYPE_CONCENTRATED', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_POOL_TYPE(variables?: ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeQuery>(CodegenGeneratedRouterAllVlpsVlpsPoolKeyPoolTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY_POOL_TYPE', 'query');
    },
    CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY(variables?: ICodegenGeneratedRouterAllVlpsVlpsPoolKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterAllVlpsVlpsPoolKeyQuery>(CodegenGeneratedRouterAllVlpsVlpsPoolKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS_POOL_KEY', 'query');
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
    CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS_DENOMS(variables: ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenDenomsDenomsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenDenomsDenomsQuery>(CodegenGeneratedRouterTokenDenomsDenomsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS_DENOMS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS(variables: ICodegenGeneratedRouterTokenDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenDenomsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenDenomsQuery>(CodegenGeneratedRouterTokenDenomsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS', 'query');
    },
    CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_PAIR(variables: ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPairQuery>(CodegenGeneratedRouterTokenPairsFromVlpPoolKeyPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_PAIR', 'query');
    },
    CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_POOL_TYPE_CONCENTRATED(variables: ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeConcentratedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeConcentratedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeConcentratedQuery>(CodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeConcentratedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_POOL_TYPE_CONCENTRATED', 'query');
    },
    CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_POOL_TYPE(variables: ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeQuery>(CodegenGeneratedRouterTokenPairsFromVlpPoolKeyPoolTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY_POOL_TYPE', 'query');
    },
    CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY(variables: ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenPairsFromVlpPoolKeyQuery>(CodegenGeneratedRouterTokenPairsFromVlpPoolKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP_POOL_KEY', 'query');
    },
    CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP(variables: ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenPairsFromVlpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterTokenPairsFromVlpQuery>(CodegenGeneratedRouterTokenPairsFromVlpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_PAIR(variables?: ICodegenGeneratedRouterVlpPoolKeyPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpPoolKeyPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpPoolKeyPairQuery>(CodegenGeneratedRouterVlpPoolKeyPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_PAIR', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_POOL_TYPE_CONCENTRATED(variables?: ICodegenGeneratedRouterVlpPoolKeyPoolTypeConcentratedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpPoolKeyPoolTypeConcentratedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpPoolKeyPoolTypeConcentratedQuery>(CodegenGeneratedRouterVlpPoolKeyPoolTypeConcentratedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_POOL_TYPE_CONCENTRATED', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_POOL_TYPE(variables?: ICodegenGeneratedRouterVlpPoolKeyPoolTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpPoolKeyPoolTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpPoolKeyPoolTypeQuery>(CodegenGeneratedRouterVlpPoolKeyPoolTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY_POOL_TYPE', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY(variables?: ICodegenGeneratedRouterVlpPoolKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpPoolKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpPoolKeyQuery>(CodegenGeneratedRouterVlpPoolKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP_POOL_KEY', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP(variables?: ICodegenGeneratedRouterVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpQuery>(CodegenGeneratedRouterVlpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY_POOL_TYPE_CONCENTRATED(variables: ICodegenGeneratedRouterVlpByPoolKeyPoolTypeConcentratedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpByPoolKeyPoolTypeConcentratedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpByPoolKeyPoolTypeConcentratedQuery>(CodegenGeneratedRouterVlpByPoolKeyPoolTypeConcentratedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY_POOL_TYPE_CONCENTRATED', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY_POOL_TYPE(variables: ICodegenGeneratedRouterVlpByPoolKeyPoolTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpByPoolKeyPoolTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpByPoolKeyPoolTypeQuery>(CodegenGeneratedRouterVlpByPoolKeyPoolTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY_POOL_TYPE', 'query');
    },
    CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY(variables: ICodegenGeneratedRouterVlpByPoolKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpByPoolKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterVlpByPoolKeyQuery>(CodegenGeneratedRouterVlpByPoolKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER_VLP_BY_POOL_KEY', 'query');
    },
    CODEGEN_GENERATED_ROUTER(variables?: ICodegenGeneratedRouterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedRouterQuery>(CodegenGeneratedRouterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_ROUTER', 'query');
    },
    CODEGEN_GENERATED_TOKEN_ALL_DEXES(variables?: ICodegenGeneratedTokenAllDexesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenAllDexesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenAllDexesQuery>(CodegenGeneratedTokenAllDexesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_ALL_DEXES', 'query');
    },
    CODEGEN_GENERATED_TOKEN_CHAINS_FOR_TOKEN_LAUNCH(variables?: ICodegenGeneratedTokenChainsForTokenLaunchQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenChainsForTokenLaunchQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenChainsForTokenLaunchQuery>(CodegenGeneratedTokenChainsForTokenLaunchDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_CHAINS_FOR_TOKEN_LAUNCH', 'query');
    },
    CODEGEN_GENERATED_TOKEN_DEX_METADATA(variables: ICodegenGeneratedTokenDexMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenDexMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenDexMetadataQuery>(CodegenGeneratedTokenDexMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_DEX_METADATA', 'query');
    },
    CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS(variables?: ICodegenGeneratedTokenGetAllFaucetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenGetAllFaucetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenGetAllFaucetsQuery>(CodegenGeneratedTokenGetAllFaucetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS', 'query');
    },
    CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS_DENOMS(variables?: ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenDenomsDenomsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenTokenDenomsDenomsQuery>(CodegenGeneratedTokenTokenDenomsDenomsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS_DENOMS', 'query');
    },
    CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS(variables?: ICodegenGeneratedTokenTokenDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenDenomsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenTokenDenomsQuery>(CodegenGeneratedTokenTokenDenomsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS', 'query');
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
    CODEGEN_GENERATED_TOKEN_TOKENS_METADATA(variables: ICodegenGeneratedTokenTokensMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokensMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedTokenTokensMetadataQuery>(CodegenGeneratedTokenTokensMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_TOKEN_TOKENS_METADATA', 'query');
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
    CODEGEN_GENERATED_VCOIN_UNIFIED_USER_BALANCE_BALANCES(variables: ICodegenGeneratedVcoinUnifiedUserBalanceBalancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinUnifiedUserBalanceBalancesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVcoinUnifiedUserBalanceBalancesQuery>(CodegenGeneratedVcoinUnifiedUserBalanceBalancesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VCOIN_UNIFIED_USER_BALANCE_BALANCES', 'query');
    },
    CODEGEN_GENERATED_VCOIN_UNIFIED_USER_BALANCE(variables: ICodegenGeneratedVcoinUnifiedUserBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinUnifiedUserBalanceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVcoinUnifiedUserBalanceQuery>(CodegenGeneratedVcoinUnifiedUserBalanceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VCOIN_UNIFIED_USER_BALANCE', 'query');
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
    CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION(variables?: ICodegenGeneratedVlpAllPoolsPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPaginationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPaginationQuery>(CodegenGeneratedVlpAllPoolsPaginationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_PAIR(variables?: ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPairQuery>(CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_PAIR', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_POOL_TYPE_CONCENTRATED(variables?: ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeConcentratedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeConcentratedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeConcentratedQuery>(CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeConcentratedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_POOL_TYPE_CONCENTRATED', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_POOL_TYPE(variables?: ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeQuery>(CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyPoolTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY_POOL_TYPE', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY(variables?: ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyQuery>(CodegenGeneratedVlpAllPoolsPoolsPoolPoolKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL_POOL_KEY', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL(variables?: ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery>(CodegenGeneratedVlpAllPoolsPoolsPoolDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS(variables?: ICodegenGeneratedVlpAllPoolsPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsPoolsQuery>(CodegenGeneratedVlpAllPoolsPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS', 'query');
    },
    CODEGEN_GENERATED_VLP_ALL_POOLS(variables?: ICodegenGeneratedVlpAllPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpAllPoolsQuery>(CodegenGeneratedVlpAllPoolsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_ALL_POOLS', 'query');
    },
    CODEGEN_GENERATED_VLP_FEE_RECIPIENT(variables?: ICodegenGeneratedVlpFeeRecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpFeeRecipientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpFeeRecipientQuery>(CodegenGeneratedVlpFeeRecipientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_FEE_RECIPIENT', 'query');
    },
    CODEGEN_GENERATED_VLP_FEE(variables?: ICodegenGeneratedVlpFeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpFeeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpFeeQuery>(CodegenGeneratedVlpFeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_FEE', 'query');
    },
    CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR(variables?: ICodegenGeneratedVlpLiquidityPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpLiquidityPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpLiquidityPairQuery>(CodegenGeneratedVlpLiquidityPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR', 'query');
    },
    CODEGEN_GENERATED_VLP_LIQUIDITY(variables?: ICodegenGeneratedVlpLiquidityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpLiquidityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpLiquidityQuery>(CodegenGeneratedVlpLiquidityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_LIQUIDITY', 'query');
    },
    CODEGEN_GENERATED_VLP_MIGRATION_STATUS(variables?: ICodegenGeneratedVlpMigrationStatusQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpMigrationStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpMigrationStatusQuery>(CodegenGeneratedVlpMigrationStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_MIGRATION_STATUS', 'query');
    },
    CODEGEN_GENERATED_VLP_OBSERVE(variables: ICodegenGeneratedVlpObserveQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpObserveQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpObserveQuery>(CodegenGeneratedVlpObserveDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_OBSERVE', 'query');
    },
    CODEGEN_GENERATED_VLP_POOL_POOL_KEY_PAIR(variables: ICodegenGeneratedVlpPoolPoolKeyPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPoolPoolKeyPairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpPoolPoolKeyPairQuery>(CodegenGeneratedVlpPoolPoolKeyPairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_POOL_POOL_KEY_PAIR', 'query');
    },
    CODEGEN_GENERATED_VLP_POOL_POOL_KEY_POOL_TYPE_CONCENTRATED(variables: ICodegenGeneratedVlpPoolPoolKeyPoolTypeConcentratedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPoolPoolKeyPoolTypeConcentratedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpPoolPoolKeyPoolTypeConcentratedQuery>(CodegenGeneratedVlpPoolPoolKeyPoolTypeConcentratedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_POOL_POOL_KEY_POOL_TYPE_CONCENTRATED', 'query');
    },
    CODEGEN_GENERATED_VLP_POOL_POOL_KEY_POOL_TYPE(variables: ICodegenGeneratedVlpPoolPoolKeyPoolTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPoolPoolKeyPoolTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpPoolPoolKeyPoolTypeQuery>(CodegenGeneratedVlpPoolPoolKeyPoolTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_POOL_POOL_KEY_POOL_TYPE', 'query');
    },
    CODEGEN_GENERATED_VLP_POOL_POOL_KEY(variables: ICodegenGeneratedVlpPoolPoolKeyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPoolPoolKeyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpPoolPoolKeyQuery>(CodegenGeneratedVlpPoolPoolKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_POOL_POOL_KEY', 'query');
    },
    CODEGEN_GENERATED_VLP_POOL(variables: ICodegenGeneratedVlpPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPoolQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpPoolQuery>(CodegenGeneratedVlpPoolDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_POOL', 'query');
    },
    CODEGEN_GENERATED_VLP_POSITION(variables: ICodegenGeneratedVlpPositionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPositionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpPositionQuery>(CodegenGeneratedVlpPositionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_POSITION', 'query');
    },
    CODEGEN_GENERATED_VLP_PROTOCOL_FEES(variables?: ICodegenGeneratedVlpProtocolFeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpProtocolFeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpProtocolFeesQuery>(CodegenGeneratedVlpProtocolFeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_PROTOCOL_FEES', 'query');
    },
    CODEGEN_GENERATED_VLP_SLOT0(variables?: ICodegenGeneratedVlpSlot0QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpSlot0Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpSlot0Query>(CodegenGeneratedVlpSlot0Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_SLOT0', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT(variables?: ICodegenGeneratedVlpStateFeeRecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateFeeRecipientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStateFeeRecipientQuery>(CodegenGeneratedVlpStateFeeRecipientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_FEE(variables?: ICodegenGeneratedVlpStateFeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateFeeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStateFeeQuery>(CodegenGeneratedVlpStateFeeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_FEE', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_PAIR(variables?: ICodegenGeneratedVlpStatePairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStatePairQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStatePairQuery>(CodegenGeneratedVlpStatePairDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_PAIR', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_CONCENTRATED(variables?: ICodegenGeneratedVlpStatePoolConfigConcentratedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStatePoolConfigConcentratedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStatePoolConfigConcentratedQuery>(CodegenGeneratedVlpStatePoolConfigConcentratedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_CONCENTRATED', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_STABLE(variables?: ICodegenGeneratedVlpStatePoolConfigStableQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStatePoolConfigStableQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStatePoolConfigStableQuery>(CodegenGeneratedVlpStatePoolConfigStableDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_STABLE', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG(variables?: ICodegenGeneratedVlpStatePoolConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStatePoolConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStatePoolConfigQuery>(CodegenGeneratedVlpStatePoolConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG', 'query');
    },
    CODEGEN_GENERATED_VLP_STATE(variables?: ICodegenGeneratedVlpStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpStateQuery>(CodegenGeneratedVlpStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_STATE', 'query');
    },
    CODEGEN_GENERATED_VLP_TICK(variables: ICodegenGeneratedVlpTickQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTickQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTickQuery>(CodegenGeneratedVlpTickDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TICK', 'query');
    },
    CODEGEN_GENERATED_VLP_TICKS_TICKS(variables?: ICodegenGeneratedVlpTicksTicksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTicksTicksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTicksTicksQuery>(CodegenGeneratedVlpTicksTicksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TICKS_TICKS', 'query');
    },
    CODEGEN_GENERATED_VLP_TICKS(variables?: ICodegenGeneratedVlpTicksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTicksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTicksQuery>(CodegenGeneratedVlpTicksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TICKS', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS(variables?: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES(variables?: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery>(CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS(variables?: ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery>(CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES(variables?: ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery>(CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED(variables?: ICodegenGeneratedVlpTotalFeesCollectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedQuery>(CodegenGeneratedVlpTotalFeesCollectedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED', 'query');
    },
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM(variables: ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery>(CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM', 'query');
    },
    CODEGEN_GENERATED_VLP(variables?: ICodegenGeneratedVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ICodegenGeneratedVlpQuery>(CodegenGeneratedVlpDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CODEGEN_GENERATED_VLP', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;