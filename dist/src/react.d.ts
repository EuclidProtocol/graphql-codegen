import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    JSON: {
        input: any;
        output: any;
    };
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
export declare enum ISortOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum ITokenPairSortBy {
    CREATED_AT = "CREATED_AT",
    TOTAL_LIQUIDITY = "TOTAL_LIQUIDITY"
}
export type IVlps = {
    vlp_address?: InputMaybe<Scalars['String']['input']>;
};
export type ICodegenGeneratedChainsAllChainsQueryVariables = Exact<{
    chains_all_chains_show_all_chains?: InputMaybe<Scalars['Boolean']['input']>;
    chains_all_chains_type?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsAllChainsQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        all_chains: Array<{
            __typename?: 'ChainConfig';
            chain_id: string;
            chain_uid: string;
            display_name: string;
            explorer_url: string;
            factory_address: string;
            logo: string;
            token_factory_address: string;
            type: string;
        }>;
    };
};
export type ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        all_evm_chains: Array<{
            __typename?: 'EVMChainConfig';
            native_currency: {
                __typename?: 'NativeCurrency';
                decimals: number;
                name: string;
                symbol: string;
            };
        }>;
    };
};
export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        all_evm_chains: Array<{
            __typename?: 'EVMChainConfig';
            rpc_urls: {
                __typename?: 'RPCUrls';
                default: {
                    __typename?: 'RPCConfig';
                    http: Array<string>;
                };
            };
        }>;
    };
};
export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        all_evm_chains: Array<{
            __typename?: 'EVMChainConfig';
            rpc_urls: {
                __typename?: 'RPCUrls';
                default: {
                    __typename?: 'RPCConfig';
                    http: Array<string>;
                };
            };
        }>;
    };
};
export type ICodegenGeneratedChainsAllEvmChainsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainsAllEvmChainsQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        all_evm_chains: Array<{
            __typename?: 'EVMChainConfig';
            chain_id: string;
            chain_uid: string;
            explorer_url: string;
            name: string;
            native_currency: {
                __typename?: 'NativeCurrency';
                decimals: number;
                name: string;
                symbol: string;
            };
            rpc_urls: {
                __typename?: 'RPCUrls';
                default: {
                    __typename?: 'RPCConfig';
                    http: Array<string>;
                };
            };
        }>;
    };
};
export type ICodegenGeneratedChainsChainConfigQueryVariables = Exact<{
    chains_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsChainConfigQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        chain_config: {
            __typename?: 'ChainConfig';
            chain_id: string;
            chain_uid: string;
            display_name: string;
            explorer_url: string;
            factory_address: string;
            logo: string;
            token_factory_address: string;
            type: string;
        };
    };
};
export type ICodegenGeneratedChainsContractsQueryVariables = Exact<{
    chains_contracts_chainUId?: InputMaybe<Scalars['String']['input']>;
    chains_contracts_type?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsContractsQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        contracts: Array<{
            __typename?: 'Contract';
            ChainUID: string;
            ContractAddress: string;
            Type: string;
        }>;
    };
};
export type ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables = Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        evm_chain_config: {
            __typename?: 'EVMChainConfig';
            native_currency: {
                __typename?: 'NativeCurrency';
                decimals: number;
                name: string;
                symbol: string;
            };
        };
    };
};
export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables = Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        evm_chain_config: {
            __typename?: 'EVMChainConfig';
            rpc_urls: {
                __typename?: 'RPCUrls';
                default: {
                    __typename?: 'RPCConfig';
                    http: Array<string>;
                };
            };
        };
    };
};
export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables = Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        evm_chain_config: {
            __typename?: 'EVMChainConfig';
            rpc_urls: {
                __typename?: 'RPCUrls';
                default: {
                    __typename?: 'RPCConfig';
                    http: Array<string>;
                };
            };
        };
    };
};
export type ICodegenGeneratedChainsEvmChainConfigQueryVariables = Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsEvmChainConfigQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        evm_chain_config: {
            __typename?: 'EVMChainConfig';
            chain_id: string;
            chain_uid: string;
            explorer_url: string;
            name: string;
            native_currency: {
                __typename?: 'NativeCurrency';
                decimals: number;
                name: string;
                symbol: string;
            };
            rpc_urls: {
                __typename?: 'RPCUrls';
                default: {
                    __typename?: 'RPCConfig';
                    http: Array<string>;
                };
            };
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccAddr: string;
                bech32PrefixAccPub: string;
                bech32PrefixConsAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixValPub: string;
            };
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigBip44QueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigBip44Query = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigCurrenciesQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            currencies: Array<{
                __typename?: 'Currencies';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoID: string;
                coinMinimalDenom: string;
            }>;
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            feeCurrencies: Array<{
                __typename?: 'FeeCurrencies';
                gasPriceStep: {
                    __typename?: 'GasPriceStep';
                    average: number;
                    high: number;
                    low: number;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            feeCurrencies: Array<{
                __typename?: 'FeeCurrencies';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoID: string;
                coinMinimalDenom: string;
                gasPriceStep: {
                    __typename?: 'GasPriceStep';
                    average: number;
                    high: number;
                    low: number;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigGaspricestepQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                high: number;
                low: number;
            };
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            stakeCurrency: {
                __typename?: 'StakeCurrency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoID: string;
                coinMinimalDenom: string;
            };
        };
    };
};
export type ICodegenGeneratedChainsKeplrConfigQueryVariables = Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars['String']['input']>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedChainsKeplrConfigQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        keplr_config: {
            __typename?: 'Keplr';
            chainID: string;
            chainName: string;
            coinType: number;
            explorer_url: string;
            features: Array<string>;
            rest: string;
            rpc: string;
            bech32Config: {
                __typename?: 'Bech32Config';
                bech32PrefixAccAddr: string;
                bech32PrefixAccPub: string;
                bech32PrefixConsAddr: string;
                bech32PrefixConsPub: string;
                bech32PrefixValAddr: string;
                bech32PrefixValPub: string;
            };
            bip44: {
                __typename?: 'Bip44';
                coinType: number;
            };
            currencies: Array<{
                __typename?: 'Currencies';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoID: string;
                coinMinimalDenom: string;
            }>;
            feeCurrencies: Array<{
                __typename?: 'FeeCurrencies';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoID: string;
                coinMinimalDenom: string;
                gasPriceStep: {
                    __typename?: 'GasPriceStep';
                    average: number;
                    high: number;
                    low: number;
                };
            }>;
            gasPriceStep: {
                __typename?: 'GasPriceStep';
                average: number;
                high: number;
                low: number;
            };
            stakeCurrency: {
                __typename?: 'StakeCurrency';
                coinDecimals: number;
                coinDenom: string;
                coinGeckoID: string;
                coinMinimalDenom: string;
            };
        };
    };
};
export type ICodegenGeneratedChainsRouterConfigQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainsRouterConfigQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        router_config: {
            __typename?: 'RouterConfig';
            chain_uid: string;
            contract_address: string;
            explorer_url: string;
            logo: string;
            type: string;
        };
    };
};
export type ICodegenGeneratedChainsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedChainsQuery = {
    __typename?: 'Query';
    chains: {
        __typename?: 'Chains';
        all_evm_chains: Array<{
            __typename?: 'EVMChainConfig';
            chain_id: string;
            chain_uid: string;
            explorer_url: string;
            name: string;
            native_currency: {
                __typename?: 'NativeCurrency';
                decimals: number;
                name: string;
                symbol: string;
            };
            rpc_urls: {
                __typename?: 'RPCUrls';
                default: {
                    __typename?: 'RPCConfig';
                    http: Array<string>;
                };
            };
        }>;
        router_config: {
            __typename?: 'RouterConfig';
            chain_uid: string;
            contract_address: string;
            explorer_url: string;
            logo: string;
            type: string;
        };
    };
};
export type ICodegenGeneratedClaimUserClaimsQueryVariables = Exact<{
    claim_user_claims_pubKey: Scalars['String']['input'];
}>;
export type ICodegenGeneratedClaimUserClaimsQuery = {
    __typename?: 'Query';
    claim: {
        __typename?: 'ClaimQueries';
        user_claims: Array<string>;
    };
};
export type ICodegenGeneratedCwBalanceQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    contract: Scalars['String']['input'];
    cw_balance_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedCwBalanceQuery = {
    __typename?: 'Query';
    cw: {
        __typename?: 'Cw';
        balance: {
            __typename?: 'Balance';
            balance: string;
        };
    };
};
export type ICodegenGeneratedCwTokenInfoQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    contract: Scalars['String']['input'];
}>;
export type ICodegenGeneratedCwTokenInfoQuery = {
    __typename?: 'Query';
    cw: {
        __typename?: 'Cw';
        token_info: {
            __typename?: 'TokenInfo';
            decimals: number;
            name: string;
            symbol: string;
            total_supply: string;
        };
    };
};
export type ICodegenGeneratedCwQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    contract: Scalars['String']['input'];
}>;
export type ICodegenGeneratedCwQuery = {
    __typename?: 'Query';
    cw: {
        __typename?: 'Cw';
        token_info: {
            __typename?: 'TokenInfo';
            decimals: number;
            name: string;
            symbol: string;
            total_supply: string;
        };
    };
};
export type ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>;
export type ICodegenGeneratedCwMulticallRawQueriesResultsQuery = {
    __typename?: 'Query';
    cw_multicall: {
        __typename?: 'MultiQuery';
        raw_queries: {
            __typename?: 'RawQueryResponse';
            results: Array<{
                __typename?: 'ResultAndError';
                error: string;
                success: any;
            }>;
        };
    };
};
export type ICodegenGeneratedCwMulticallRawQueriesQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>;
export type ICodegenGeneratedCwMulticallRawQueriesQuery = {
    __typename?: 'Query';
    cw_multicall: {
        __typename?: 'MultiQuery';
        raw_queries: {
            __typename?: 'RawQueryResponse';
            results: Array<{
                __typename?: 'ResultAndError';
                error: string;
                success: any;
            }>;
        };
    };
};
export type ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>;
export type ICodegenGeneratedCwMulticallSmartQueriesResultsQuery = {
    __typename?: 'Query';
    cw_multicall: {
        __typename?: 'MultiQuery';
        smart_queries: {
            __typename?: 'RawQueryResponse';
            results: Array<{
                __typename?: 'ResultAndError';
                error: string;
                success: any;
            }>;
        };
    };
};
export type ICodegenGeneratedCwMulticallSmartQueriesQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>;
export type ICodegenGeneratedCwMulticallSmartQueriesQuery = {
    __typename?: 'Query';
    cw_multicall: {
        __typename?: 'MultiQuery';
        smart_queries: {
            __typename?: 'RawQueryResponse';
            results: Array<{
                __typename?: 'ResultAndError';
                error: string;
                success: any;
            }>;
        };
    };
};
export type ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedFactoryAllPoolsPaginationQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        all_pools: {
            __typename?: 'AllPoolsResponse';
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
        };
    };
};
export type ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedFactoryAllPoolsPoolsPairQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        all_pools: {
            __typename?: 'AllPoolsResponse';
            pools: Array<{
                __typename?: 'PairsInPool';
                pair: {
                    __typename?: 'Pair';
                    token_1: string;
                    token_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedFactoryAllPoolsPoolsQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        all_pools: {
            __typename?: 'AllPoolsResponse';
            pools: Array<{
                __typename?: 'PairsInPool';
                vlp: string;
                pair: {
                    __typename?: 'Pair';
                    token_1: string;
                    token_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedFactoryAllPoolsQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    factory_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedFactoryAllPoolsQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        all_pools: {
            __typename?: 'AllPoolsResponse';
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
            pools: Array<{
                __typename?: 'PairsInPool';
                vlp: string;
                pair: {
                    __typename?: 'Pair';
                    token_1: string;
                    token_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedFactoryAllTokensPaginationQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
    factory_all_tokens_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedFactoryAllTokensPaginationQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        all_tokens: {
            __typename?: 'AllTokens';
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
        };
    };
};
export type ICodegenGeneratedFactoryAllTokensQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
    factory_all_tokens_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedFactoryAllTokensQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        all_tokens: {
            __typename?: 'AllTokens';
            tokens: Array<string>;
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
        };
    };
};
export type ICodegenGeneratedFactoryAllowedDenomsQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_allowed_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedFactoryAllowedDenomsQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        allowed_denoms: Array<{
            __typename?: 'NativeTokenType';
            native: {
                __typename?: 'NativeToken';
                denom: string;
            };
        } | {
            __typename?: 'SmartTokenType';
            smart: {
                __typename?: 'SmartToken';
                contract_address: string;
            };
        } | {
            __typename?: 'VoucherTokenType';
            voucher: any;
        }>;
    };
};
export type ICodegenGeneratedFactoryEscrowQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_escrow_token_id?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedFactoryEscrowQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        escrow: {
            __typename?: 'EscrowResponse';
            escrow_address: string;
            denoms: Array<{
                __typename?: 'NativeTokenType';
                native: {
                    __typename?: 'NativeToken';
                    denom: string;
                };
            } | {
                __typename?: 'SmartTokenType';
                smart: {
                    __typename?: 'SmartToken';
                    contract_address: string;
                };
            } | {
                __typename?: 'VoucherTokenType';
                voucher: any;
            }>;
        };
    };
};
export type ICodegenGeneratedFactoryGetLptokenAddressQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_get_LpToken_address_vlp_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedFactoryGetLptokenAddressQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        get_LpToken_address: {
            __typename?: 'LpTokenAddr';
            token_address: string;
        };
    };
};
export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        partner_fees_collected: {
            __typename?: 'PartnerFeesCollected';
            total: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        partner_fees_collected: {
            __typename?: 'PartnerFeesCollected';
            total: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedFactoryPartnerFeesCollectedQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        partner_fees_collected: {
            __typename?: 'PartnerFeesCollected';
            total: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedFactoryStateQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedFactoryStateQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        state: {
            __typename?: 'ContractStateOfFactory';
            admin: string;
            chain_uid: string;
            hub_channel: string;
            router_contract: string;
        };
    };
};
export type ICodegenGeneratedFactoryVlpQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
    factory_vlp_pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedFactoryVlpQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        vlp: string;
    };
};
export type ICodegenGeneratedFactoryQueryVariables = Exact<{
    chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedFactoryQuery = {
    __typename?: 'Query';
    factory: {
        __typename?: 'Factory';
        partner_fees_collected: {
            __typename?: 'PartnerFeesCollected';
            total: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
        state: {
            __typename?: 'ContractStateOfFactory';
            admin: string;
            chain_uid: string;
            hub_channel: string;
            router_contract: string;
        };
    };
};
export type ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedPoolFeesCollectedBreakdownQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        fees_collected: {
            __typename?: 'FeesResponse';
            breakdown: Array<{
                __typename?: 'FeeBreakdown';
                token1: string;
                token2: string;
                total_fee: number;
            }>;
        };
    };
};
export type ICodegenGeneratedPoolFeesCollectedQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedPoolFeesCollectedQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        fees_collected: {
            __typename?: 'FeesResponse';
            total_overall: number;
            breakdown: Array<{
                __typename?: 'FeeBreakdown';
                token1: string;
                token2: string;
                total_fee: number;
            }>;
        };
    };
};
export type ICodegenGeneratedPoolMyPoolsPairQueryVariables = Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
    pool_my_pools_user_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedPoolMyPoolsPairQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        my_pools: Array<{
            __typename?: 'MyPools';
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
        }>;
    };
};
export type ICodegenGeneratedPoolMyPoolsUserQueryVariables = Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
    pool_my_pools_user_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedPoolMyPoolsUserQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        my_pools: Array<{
            __typename?: 'MyPools';
            user: {
                __typename?: 'CrossChainUser';
                address: string;
                amount: string;
                chain_uid: string;
            };
        }>;
    };
};
export type ICodegenGeneratedPoolMyPoolsQueryVariables = Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars['String']['input']>;
    pool_my_pools_user_address: Scalars['String']['input'];
}>;
export type ICodegenGeneratedPoolMyPoolsQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        my_pools: Array<{
            __typename?: 'MyPools';
            height: string;
            vlp: string;
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
            user: {
                __typename?: 'CrossChainUser';
                address: string;
                amount: string;
                chain_uid: string;
            };
        }>;
    };
};
export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables = Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        token_pair_with_liquidity: {
            __typename?: 'TokenPairWithLiquidityPaginated';
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
        };
    };
};
export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables = Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        token_pair_with_liquidity: {
            __typename?: 'TokenPairWithLiquidityPaginated';
            results: Array<{
                __typename?: 'TokenPairWithLiquidityResponse';
                pair: {
                    __typename?: 'Pair';
                    token_1: string;
                    token_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables = Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        token_pair_with_liquidity: {
            __typename?: 'TokenPairWithLiquidityPaginated';
            results: Array<{
                __typename?: 'TokenPairWithLiquidityResponse';
                apr: string;
                created_at: string;
                tags: Array<string>;
                total_liquidity: string;
                vlp: string;
                pair: {
                    __typename?: 'Pair';
                    token_1: string;
                    token_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables = Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedPoolTokenPairWithLiquidityQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        token_pair_with_liquidity: {
            __typename?: 'TokenPairWithLiquidityPaginated';
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
            results: Array<{
                __typename?: 'TokenPairWithLiquidityResponse';
                apr: string;
                created_at: string;
                tags: Array<string>;
                total_liquidity: string;
                vlp: string;
                pair: {
                    __typename?: 'Pair';
                    token_1: string;
                    token_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        volume: {
            __typename?: 'VolumeResponse';
            volume_breakdown_24hours: Array<{
                __typename?: 'VolumeBreakdown';
                pair: string;
                volume: string;
            }>;
        };
    };
};
export type ICodegenGeneratedPoolVolumeQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedPoolVolumeQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        volume: {
            __typename?: 'VolumeResponse';
            total_liquidity: string;
            total_volume: string;
            volume_24hours: string;
            volume_breakdown_24hours: Array<{
                __typename?: 'VolumeBreakdown';
                pair: string;
                volume: string;
            }>;
        };
    };
};
export type ICodegenGeneratedPoolQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedPoolQuery = {
    __typename?: 'Query';
    pool: {
        __typename?: 'PoolQueries';
        fees_collected: {
            __typename?: 'FeesResponse';
            total_overall: number;
            breakdown: Array<{
                __typename?: 'FeeBreakdown';
                token1: string;
                token2: string;
                total_fee: number;
            }>;
        };
        volume: {
            __typename?: 'VolumeResponse';
            total_liquidity: string;
            total_volume: string;
            volume_24hours: string;
            volume_breakdown_24hours: Array<{
                __typename?: 'VolumeBreakdown';
                pair: string;
                volume: string;
            }>;
        };
    };
};
export type ICodegenGeneratedRouterAllChainsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedRouterAllChainsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        all_chains: Array<{
            __typename?: 'Chain';
            chain_id: string;
            chain_uid: string;
            factory_address: string;
        }>;
    };
};
export type ICodegenGeneratedRouterAllEscrowsQueryVariables = Exact<{
    router_all_escrows_limit?: InputMaybe<Scalars['Int']['input']>;
    router_all_escrows_max?: InputMaybe<Scalars['String']['input']>;
    router_all_escrows_min?: InputMaybe<Scalars['String']['input']>;
    router_all_escrows_skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedRouterAllEscrowsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        all_escrows: Array<{
            __typename?: 'AllEscrowsResponse';
            balance: string;
            chain_uid: string;
            token: string;
        }>;
    };
};
export type ICodegenGeneratedRouterAllTokensQueryVariables = Exact<{
    router_all_tokens_limit?: InputMaybe<Scalars['Int']['input']>;
    router_all_tokens_max?: InputMaybe<Scalars['String']['input']>;
    router_all_tokens_min?: InputMaybe<Scalars['String']['input']>;
    router_all_tokens_skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedRouterAllTokensQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        all_tokens: {
            __typename?: 'TokenArray';
            tokens: Array<string>;
        };
    };
};
export type ICodegenGeneratedRouterAllVlpsVlpsQueryVariables = Exact<{
    router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
    router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
    router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
    router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedRouterAllVlpsVlpsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        all_vlps: {
            __typename?: 'AllVlps';
            vlps: Array<{
                __typename?: 'VlpWithTokenPair';
                token_1: string;
                token_2: string;
                vlp: string;
            }>;
        };
    };
};
export type ICodegenGeneratedRouterAllVlpsQueryVariables = Exact<{
    router_all_vlps_limit?: InputMaybe<Scalars['Int']['input']>;
    router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
    router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
    router_all_vlps_skip?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedRouterAllVlpsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        all_vlps: {
            __typename?: 'AllVlps';
            vlps: Array<{
                __typename?: 'VlpWithTokenPair';
                token_1: string;
                token_2: string;
                vlp: string;
            }>;
        };
    };
};
export type ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables = Exact<{
    router_chain_chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterChainChainChainTypeIbcQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        chain: {
            __typename?: 'ChainResponse';
            chain: {
                __typename?: 'ChainAndFactoryInfo';
                chain_type: {
                    __typename?: 'ChainType';
                    ibc: {
                        __typename?: 'Ibc';
                        from_factory_channel: string;
                        from_hub_channel: string;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedRouterChainChainChainTypeQueryVariables = Exact<{
    router_chain_chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterChainChainChainTypeQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        chain: {
            __typename?: 'ChainResponse';
            chain: {
                __typename?: 'ChainAndFactoryInfo';
                chain_type: {
                    __typename?: 'ChainType';
                    ibc: {
                        __typename?: 'Ibc';
                        from_factory_channel: string;
                        from_hub_channel: string;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedRouterChainChainQueryVariables = Exact<{
    router_chain_chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterChainChainQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        chain: {
            __typename?: 'ChainResponse';
            chain: {
                __typename?: 'ChainAndFactoryInfo';
                factory: string;
                factory_chain_id: string;
                chain_type: {
                    __typename?: 'ChainType';
                    ibc: {
                        __typename?: 'Ibc';
                        from_factory_channel: string;
                        from_hub_channel: string;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedRouterChainQueryVariables = Exact<{
    router_chain_chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterChainQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        chain: {
            __typename?: 'ChainResponse';
            chain_uid: string;
            chain: {
                __typename?: 'ChainAndFactoryInfo';
                factory: string;
                factory_chain_id: string;
                chain_type: {
                    __typename?: 'ChainType';
                    ibc: {
                        __typename?: 'Ibc';
                        from_factory_channel: string;
                        from_hub_channel: string;
                    };
                };
            };
        };
    };
};
export type ICodegenGeneratedRouterEscrowsQueryVariables = Exact<{
    router_escrows_limit?: InputMaybe<Scalars['Int']['input']>;
    router_escrows_max?: InputMaybe<Scalars['String']['input']>;
    router_escrows_min?: InputMaybe<Scalars['String']['input']>;
    router_escrows_skip?: InputMaybe<Scalars['Int']['input']>;
    router_escrows_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterEscrowsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        escrows: Array<{
            __typename?: 'Escrow';
            balance: string;
            chain_id: string;
            chain_uid: string;
        }>;
    };
};
export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables = Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        simulate_release_escrow: {
            __typename?: 'SimulateReleaseEscrow';
            release_amounts: Array<{
                __typename?: 'ReleaseAmounts';
                cross_chain_user: {
                    __typename?: 'CrossChainUserWithLimit';
                    user: {
                        __typename?: 'CrossChainUser';
                        address: string;
                        amount: string;
                        chain_uid: string;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables = Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        simulate_release_escrow: {
            __typename?: 'SimulateReleaseEscrow';
            release_amounts: Array<{
                __typename?: 'ReleaseAmounts';
                cross_chain_user: {
                    __typename?: 'CrossChainUserWithLimit';
                    limit: string;
                    user: {
                        __typename?: 'CrossChainUser';
                        address: string;
                        amount: string;
                        chain_uid: string;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables = Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        simulate_release_escrow: {
            __typename?: 'SimulateReleaseEscrow';
            release_amounts: Array<{
                __typename?: 'ReleaseAmounts';
                amount: string;
                cross_chain_user: {
                    __typename?: 'CrossChainUserWithLimit';
                    limit: string;
                    user: {
                        __typename?: 'CrossChainUser';
                        address: string;
                        amount: string;
                        chain_uid: string;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables = Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars['Int']['input']>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterSimulateReleaseEscrowQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        simulate_release_escrow: {
            __typename?: 'SimulateReleaseEscrow';
            remaining_amount: string;
            release_amounts: Array<{
                __typename?: 'ReleaseAmounts';
                amount: string;
                cross_chain_user: {
                    __typename?: 'CrossChainUserWithLimit';
                    limit: string;
                    user: {
                        __typename?: 'CrossChainUser';
                        address: string;
                        amount: string;
                        chain_uid: string;
                    };
                };
            }>;
        };
    };
};
export type ICodegenGeneratedRouterSimulateSwapQueryVariables = Exact<{
    router_simulate_swap_amount_in: Scalars['String']['input'];
    router_simulate_swap_asset_in: Scalars['String']['input'];
    router_simulate_swap_asset_out: Scalars['String']['input'];
    router_simulate_swap_min_amount_out: Scalars['String']['input'];
    router_simulate_swap_swaps?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;
export type ICodegenGeneratedRouterSimulateSwapQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        simulate_swap: {
            __typename?: 'TokenOut';
            amount_out: string;
            asset_out: string;
        };
    };
};
export type ICodegenGeneratedRouterStateQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedRouterStateQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        state: {
            __typename?: 'ContractStateOfRouter';
            admin: string;
            virtual_balance_address: string;
            vlp_code_id: number;
        };
    };
};
export type ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables = Exact<{
    router_token_denoms_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterTokenDenomsDenomsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        token_denoms: {
            __typename?: 'TokenDenomsResponse';
            denoms: Array<{
                __typename?: 'TokenDenom';
                chain_uid: string;
                token_type: {
                    __typename?: 'NativeTokenType';
                    native: {
                        __typename?: 'NativeToken';
                        denom: string;
                    };
                } | {
                    __typename?: 'SmartTokenType';
                    smart: {
                        __typename?: 'SmartToken';
                        contract_address: string;
                    };
                } | {
                    __typename?: 'VoucherTokenType';
                    voucher: any;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedRouterTokenDenomsQueryVariables = Exact<{
    router_token_denoms_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterTokenDenomsQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        token_denoms: {
            __typename?: 'TokenDenomsResponse';
            denoms: Array<{
                __typename?: 'TokenDenom';
                chain_uid: string;
                token_type: {
                    __typename?: 'NativeTokenType';
                    native: {
                        __typename?: 'NativeToken';
                        denom: string;
                    };
                } | {
                    __typename?: 'SmartTokenType';
                    smart: {
                        __typename?: 'SmartToken';
                        contract_address: string;
                    };
                } | {
                    __typename?: 'VoucherTokenType';
                    voucher: any;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables = Exact<{
    router_token_pairs_from_vlp_vlp: Scalars['String']['input'];
}>;
export type ICodegenGeneratedRouterTokenPairsFromVlpQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        token_pairs_from_vlp: {
            __typename?: 'VlpWithTokenPair';
            token_1: string;
            token_2: string;
            vlp: string;
        };
    };
};
export type ICodegenGeneratedRouterVlpQueryVariables = Exact<{
    router_vlp_pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedRouterVlpQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        vlp: {
            __typename?: 'VlpWithTokenPair';
            token_1: string;
            token_2: string;
            vlp: string;
        };
    };
};
export type ICodegenGeneratedRouterQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedRouterQuery = {
    __typename?: 'Query';
    router: {
        __typename?: 'Router';
        all_chains: Array<{
            __typename?: 'Chain';
            chain_id: string;
            chain_uid: string;
            factory_address: string;
        }>;
        state: {
            __typename?: 'ContractStateOfRouter';
            admin: string;
            virtual_balance_address: string;
            vlp_code_id: number;
        };
    };
};
export type ICodegenGeneratedTokenAllDexesQueryVariables = Exact<{
    token_all_dexes_limit?: InputMaybe<Scalars['Int']['input']>;
    token_all_dexes_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedTokenAllDexesQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        all_dexes: Array<{
            __typename?: 'DexMetadata';
            bg_color: string;
            chain_uid: string;
            dex_name: string;
            display_name: string;
            fg_color: string;
            logo: string;
        }>;
    };
};
export type ICodegenGeneratedTokenChainsForTokenLaunchQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedTokenChainsForTokenLaunchQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        chains_for_token_launch: Array<{
            __typename?: 'ChainConfig';
            chain_id: string;
            chain_uid: string;
            display_name: string;
            explorer_url: string;
            factory_address: string;
            logo: string;
            token_factory_address: string;
            type: string;
        }>;
    };
};
export type ICodegenGeneratedTokenDexMetadataQueryVariables = Exact<{
    token_dex_metadata_dex: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTokenDexMetadataQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        dex_metadata: {
            __typename?: 'DexMetadata';
            bg_color: string;
            chain_uid: string;
            dex_name: string;
            display_name: string;
            fg_color: string;
            logo: string;
        };
    };
};
export type ICodegenGeneratedTokenGetAllFaucetsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedTokenGetAllFaucetsQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        get_all_faucets: Array<{
            __typename?: 'Faucet';
            faucet_link: string;
            token: string;
        }>;
    };
};
export type ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables = Exact<{
    token_token_denoms_chain_uid?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
    token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
    token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedTokenTokenDenomsDenomsQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_denoms: Array<{
            __typename?: 'TokenDenomWithTokenIdResponse';
            denoms: Array<{
                __typename?: 'TokenDenom';
                chain_uid: string;
                token_type: {
                    __typename?: 'NativeTokenType';
                    native: {
                        __typename?: 'NativeToken';
                        denom: string;
                    };
                } | {
                    __typename?: 'SmartTokenType';
                    smart: {
                        __typename?: 'SmartToken';
                        contract_address: string;
                    };
                } | {
                    __typename?: 'VoucherTokenType';
                    voucher: any;
                };
            }>;
        }>;
    };
};
export type ICodegenGeneratedTokenTokenDenomsQueryVariables = Exact<{
    token_token_denoms_chain_uid?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
    token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
    token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedTokenTokenDenomsQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_denoms: Array<{
            __typename?: 'TokenDenomWithTokenIdResponse';
            token_id: string;
            denoms: Array<{
                __typename?: 'TokenDenom';
                chain_uid: string;
                token_type: {
                    __typename?: 'NativeTokenType';
                    native: {
                        __typename?: 'NativeToken';
                        denom: string;
                    };
                } | {
                    __typename?: 'SmartTokenType';
                    smart: {
                        __typename?: 'SmartToken';
                        contract_address: string;
                    };
                } | {
                    __typename?: 'VoucherTokenType';
                    voucher: any;
                };
            }>;
        }>;
    };
};
export type ICodegenGeneratedTokenTokenLiquiditiesQueryVariables = Exact<{
    token_token_liquidities_limit: Scalars['Int']['input'];
    token_token_liquidities_page: Scalars['Int']['input'];
}>;
export type ICodegenGeneratedTokenTokenLiquiditiesQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_liquidities: Array<{
            __typename?: 'TokenLiquidity';
            token: string;
            total_liquidity: string;
            total_volume: string;
        }>;
    };
};
export type ICodegenGeneratedTokenTokenLiquidityQueryVariables = Exact<{
    token_token_liquidity_token: Scalars['String']['input'];
}>;
export type ICodegenGeneratedTokenTokenLiquidityQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_liquidity: {
            __typename?: 'TokenLiquidity';
            token: string;
            total_liquidity: string;
            total_volume: string;
        };
    };
};
export type ICodegenGeneratedTokenTokenMetadataByIdQueryVariables = Exact<{
    token_token_metadata_by_id_token_id: Scalars['String']['input'];
    token_token_metadata_by_id_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;
export type ICodegenGeneratedTokenTokenMetadataByIdQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_metadata_by_id: {
            __typename?: 'Metadata';
            chain_uids: Array<string>;
            coinDecimal: number;
            description: string;
            dex: Array<string>;
            displayName: string;
            image: string;
            is_verified: boolean;
            min_swap_value: number;
            price: string;
            price_change_7d: number;
            price_change_24h: number;
            social: any;
            tags: Array<string>;
            tokenId: string;
            total_volume: number;
            total_volume_24h: number;
        };
    };
};
export type ICodegenGeneratedTokenTokenMetadatasQueryVariables = Exact<{
    token_token_metadatas_chain_uids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
    token_token_metadatas_dex?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
    token_token_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
    token_token_metadatas_offset?: InputMaybe<Scalars['Int']['input']>;
    token_token_metadatas_search?: InputMaybe<Scalars['String']['input']>;
    token_token_metadatas_show_volume?: InputMaybe<Scalars['Boolean']['input']>;
    token_token_metadatas_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;
export type ICodegenGeneratedTokenTokenMetadatasQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_metadatas: Array<{
            __typename?: 'Metadata';
            chain_uids: Array<string>;
            coinDecimal: number;
            description: string;
            dex: Array<string>;
            displayName: string;
            image: string;
            is_verified: boolean;
            min_swap_value: number;
            price: string;
            price_change_7d: number;
            price_change_24h: number;
            social: any;
            tags: Array<string>;
            tokenId: string;
            total_volume: number;
            total_volume_24h: number;
        }>;
    };
};
export type ICodegenGeneratedTokenTokensMetadataQueryVariables = Exact<{
    token_tokens_metadata_token_ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
    token_tokens_metadata_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;
export type ICodegenGeneratedTokenTokensMetadataQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        tokens_metadata: Array<{
            __typename?: 'Metadata';
            chain_uids: Array<string>;
            coinDecimal: number;
            description: string;
            dex: Array<string>;
            displayName: string;
            image: string;
            is_verified: boolean;
            min_swap_value: number;
            price: string;
            price_change_7d: number;
            price_change_24h: number;
            social: any;
            tags: Array<string>;
            tokenId: string;
            total_volume: number;
            total_volume_24h: number;
        }>;
    };
};
export type ICodegenGeneratedTokenQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedTokenQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        chains_for_token_launch: Array<{
            __typename?: 'ChainConfig';
            chain_id: string;
            chain_uid: string;
            display_name: string;
            explorer_url: string;
            factory_address: string;
            logo: string;
            token_factory_address: string;
            type: string;
        }>;
        get_all_faucets: Array<{
            __typename?: 'Faucet';
            faucet_link: string;
            token: string;
        }>;
    };
};
export type ICodegenGeneratedVcoinBalanceQueryVariables = Exact<{
    vcoin_balance_balance_key?: InputMaybe<IBalanceKeyInput>;
}>;
export type ICodegenGeneratedVcoinBalanceQuery = {
    __typename?: 'Query';
    vcoin: {
        __typename?: 'Vcoin';
        balance: {
            __typename?: 'VcoinBalance';
            amount: string;
        };
    };
};
export type ICodegenGeneratedVcoinStateQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedVcoinStateQuery = {
    __typename?: 'Query';
    vcoin: {
        __typename?: 'Vcoin';
        state: {
            __typename?: 'ContractStateOfVcoin';
            admin: string;
            router: string;
        };
    };
};
export type ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables = Exact<{
    vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>;
export type ICodegenGeneratedVcoinUserBalanceBalancesQuery = {
    __typename?: 'Query';
    vcoin: {
        __typename?: 'Vcoin';
        user_balance: {
            __typename?: 'VcoinBalanceResponse';
            balances: Array<{
                __typename?: 'VcoinBalanceUserResponse';
                amount: string;
                token_id: string;
            }>;
        };
    };
};
export type ICodegenGeneratedVcoinUserBalanceQueryVariables = Exact<{
    vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>;
export type ICodegenGeneratedVcoinUserBalanceQuery = {
    __typename?: 'Query';
    vcoin: {
        __typename?: 'Vcoin';
        user_balance: {
            __typename?: 'VcoinBalanceResponse';
            balances: Array<{
                __typename?: 'VcoinBalanceUserResponse';
                amount: string;
                token_id: string;
            }>;
        };
    };
};
export type ICodegenGeneratedVcoinQueryVariables = Exact<{
    [key: string]: never;
}>;
export type ICodegenGeneratedVcoinQuery = {
    __typename?: 'Query';
    vcoin: {
        __typename?: 'Vcoin';
        state: {
            __typename?: 'ContractStateOfVcoin';
            admin: string;
            router: string;
        };
    };
};
export type ICodegenGeneratedVlpAllPoolsPaginationQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedVlpAllPoolsPaginationQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        all_pools: {
            __typename?: 'PoolsResponse';
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
        };
    };
};
export type ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedVlpAllPoolsPoolsPoolQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        all_pools: {
            __typename?: 'PoolsResponse';
            pools: Array<{
                __typename?: 'Pools';
                pool: {
                    __typename?: 'Pool';
                    lp_shares: string;
                    reserve_1: string;
                    reserve_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedVlpAllPoolsPoolsQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedVlpAllPoolsPoolsQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        all_pools: {
            __typename?: 'PoolsResponse';
            pools: Array<{
                __typename?: 'Pools';
                chain_uid: string;
                pool: {
                    __typename?: 'Pool';
                    lp_shares: string;
                    reserve_1: string;
                    reserve_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedVlpAllPoolsQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars['Int']['input']>;
    vlp_all_pools_offset?: InputMaybe<Scalars['Int']['input']>;
}>;
export type ICodegenGeneratedVlpAllPoolsQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        all_pools: {
            __typename?: 'PoolsResponse';
            pagination: {
                __typename?: 'PaginationInfo';
                limit: number;
                offset: number;
                total_count: number;
            };
            pools: Array<{
                __typename?: 'Pools';
                chain_uid: string;
                pool: {
                    __typename?: 'Pool';
                    lp_shares: string;
                    reserve_1: string;
                    reserve_2: string;
                };
            }>;
        };
    };
};
export type ICodegenGeneratedVlpFeeRecipientQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpFeeRecipientQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        fee: {
            __typename?: 'FeeInfo';
            recipient: {
                __typename?: 'CrossChainUser';
                address: string;
                amount: string;
                chain_uid: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpFeeQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpFeeQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        fee: {
            __typename?: 'FeeInfo';
            euclid_fee_bps: number;
            lp_fee_bps: number;
            recipient: {
                __typename?: 'CrossChainUser';
                address: string;
                amount: string;
                chain_uid: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpLiquidityPairQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpLiquidityPairQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        liquidity: {
            __typename?: 'Liquidity';
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpLiquidityQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpLiquidityQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        liquidity: {
            __typename?: 'Liquidity';
            token_1_reserve: string;
            token_2_reserve: string;
            total_lp_tokens: string;
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpPoolQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
    vlp_pool_chain_uid: Scalars['String']['input'];
}>;
export type ICodegenGeneratedVlpPoolQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        pool: {
            __typename?: 'Pool';
            lp_shares: string;
            reserve_1: string;
            reserve_2: string;
        };
    };
};
export type ICodegenGeneratedVlpStateFeeRecipientQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpStateFeeRecipientQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        state: {
            __typename?: 'ContractStateOfVlp';
            fee: {
                __typename?: 'FeeInfo';
                recipient: {
                    __typename?: 'CrossChainUser';
                    address: string;
                    amount: string;
                    chain_uid: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedVlpStateFeeQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpStateFeeQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        state: {
            __typename?: 'ContractStateOfVlp';
            fee: {
                __typename?: 'FeeInfo';
                euclid_fee_bps: number;
                lp_fee_bps: number;
                recipient: {
                    __typename?: 'CrossChainUser';
                    address: string;
                    amount: string;
                    chain_uid: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedVlpStatePairQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpStatePairQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        state: {
            __typename?: 'ContractStateOfVlp';
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpStatePoolConfigStableQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpStatePoolConfigStableQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        state: {
            __typename?: 'ContractStateOfVlp';
            pool_config: {
                __typename?: 'PoolConfig';
                stable: {
                    __typename?: 'StablePoolConfig';
                    amp_factor: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedVlpStatePoolConfigQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpStatePoolConfigQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        state: {
            __typename?: 'ContractStateOfVlp';
            pool_config: {
                __typename?: 'PoolConfig';
                constant_product: any;
                stable: {
                    __typename?: 'StablePoolConfig';
                    amp_factor: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedVlpStateQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpStateQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        state: {
            __typename?: 'ContractStateOfVlp';
            admin: string;
            last_updated: number;
            router: string;
            total_lp_tokens: string;
            vcoin: string;
            fee: {
                __typename?: 'FeeInfo';
                euclid_fee_bps: number;
                lp_fee_bps: number;
                recipient: {
                    __typename?: 'CrossChainUser';
                    address: string;
                    amount: string;
                    chain_uid: string;
                };
            };
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
            pool_config: {
                __typename?: 'PoolConfig';
                constant_product: any;
                stable: {
                    __typename?: 'StablePoolConfig';
                    amp_factor: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        total_fees_collected: {
            __typename?: 'TotalFeesCollected';
            euclid_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        total_fees_collected: {
            __typename?: 'TotalFeesCollected';
            euclid_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        total_fees_collected: {
            __typename?: 'TotalFeesCollected';
            lp_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        total_fees_collected: {
            __typename?: 'TotalFeesCollected';
            lp_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedVlpTotalFeesCollectedQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpTotalFeesCollectedQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        total_fees_collected: {
            __typename?: 'TotalFeesCollected';
            euclid_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
            lp_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
    vlp_total_fees_collected_per_denom_denom: Scalars['String']['input'];
}>;
export type ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        total_fees_collected_per_denom: {
            __typename?: 'TotalFeesPerDenomResponse';
            euclid_fees: string;
            lp_fees: string;
        };
    };
};
export type ICodegenGeneratedVlpQueryVariables = Exact<{
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
}>;
export type ICodegenGeneratedVlpQuery = {
    __typename?: 'Query';
    vlp: {
        __typename?: 'Vlp';
        fee: {
            __typename?: 'FeeInfo';
            euclid_fee_bps: number;
            lp_fee_bps: number;
            recipient: {
                __typename?: 'CrossChainUser';
                address: string;
                amount: string;
                chain_uid: string;
            };
        };
        liquidity: {
            __typename?: 'Liquidity';
            token_1_reserve: string;
            token_2_reserve: string;
            total_lp_tokens: string;
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
        };
        state: {
            __typename?: 'ContractStateOfVlp';
            admin: string;
            last_updated: number;
            router: string;
            total_lp_tokens: string;
            vcoin: string;
            fee: {
                __typename?: 'FeeInfo';
                euclid_fee_bps: number;
                lp_fee_bps: number;
                recipient: {
                    __typename?: 'CrossChainUser';
                    address: string;
                    amount: string;
                    chain_uid: string;
                };
            };
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
            pool_config: {
                __typename?: 'PoolConfig';
                constant_product: any;
                stable: {
                    __typename?: 'StablePoolConfig';
                    amp_factor: string;
                };
            };
        };
        total_fees_collected: {
            __typename?: 'TotalFeesCollected';
            euclid_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
            lp_fees: {
                __typename?: 'DenomFees';
                totals: Array<{
                    __typename?: 'Denomination';
                    amount: string;
                    denom: string;
                }>;
            };
        };
    };
};
export declare const CodegenGeneratedChainsAllChainsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsAllChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsAllChainsQuery, Exact<{
    chains_all_chains_show_all_chains?: InputMaybe<Scalars["Boolean"]["input"]>;
    chains_all_chains_type?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsAllChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsAllChainsQuery, Exact<{
    chains_all_chains_show_all_chains?: InputMaybe<Scalars["Boolean"]["input"]>;
    chains_all_chains_type?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsAllChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllChainsQuery>;
export type CodegenGeneratedChainsAllChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllChainsLazyQuery>;
export type CodegenGeneratedChainsAllChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllChainsQuery, ICodegenGeneratedChainsAllChainsQueryVariables>;
export declare function refetchCodegenGeneratedChainsAllChainsQuery(variables?: ICodegenGeneratedChainsAllChainsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_all_chains_show_all_chains?: InputMaybe<Scalars["Boolean"]["input"]>;
        chains_all_chains_type?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainsAllEvmChainsNativeCurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery>;
export type CodegenGeneratedChainsAllEvmChainsNativeCurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsNativeCurrencyLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery, ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables>;
export declare function refetchCodegenGeneratedChainsAllEvmChainsNativeCurrencyQuery(variables?: ICodegenGeneratedChainsAllEvmChainsNativeCurrencyQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables>;
export declare function refetchCodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQuery(variables?: ICodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainsAllEvmChainsRpcUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsRpcUrlsLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsRpcUrlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsRpcUrlsQuery, ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables>;
export declare function refetchCodegenGeneratedChainsAllEvmChainsRpcUrlsQuery(variables?: ICodegenGeneratedChainsAllEvmChainsRpcUrlsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainsAllEvmChainsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsAllEvmChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainsAllEvmChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsAllEvmChainsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainsAllEvmChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsQuery>;
export type CodegenGeneratedChainsAllEvmChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsAllEvmChainsLazyQuery>;
export type CodegenGeneratedChainsAllEvmChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsAllEvmChainsQuery, ICodegenGeneratedChainsAllEvmChainsQueryVariables>;
export declare function refetchCodegenGeneratedChainsAllEvmChainsQuery(variables?: ICodegenGeneratedChainsAllEvmChainsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainsChainConfigDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsChainConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsChainConfigQuery, Exact<{
    chains_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsChainConfigQuery, Exact<{
    chains_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsChainConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsChainConfigQuery>;
export type CodegenGeneratedChainsChainConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsChainConfigLazyQuery>;
export type CodegenGeneratedChainsChainConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsChainConfigQuery, ICodegenGeneratedChainsChainConfigQueryVariables>;
export declare function refetchCodegenGeneratedChainsChainConfigQuery(variables?: ICodegenGeneratedChainsChainConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsContractsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsContractsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsContractsQuery, Exact<{
    chains_contracts_chainUId?: InputMaybe<Scalars["String"]["input"]>;
    chains_contracts_type?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsContractsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsContractsQuery, Exact<{
    chains_contracts_chainUId?: InputMaybe<Scalars["String"]["input"]>;
    chains_contracts_type?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsContractsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsContractsQuery>;
export type CodegenGeneratedChainsContractsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsContractsLazyQuery>;
export type CodegenGeneratedChainsContractsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsContractsQuery, ICodegenGeneratedChainsContractsQueryVariables>;
export declare function refetchCodegenGeneratedChainsContractsQuery(variables?: ICodegenGeneratedChainsContractsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_contracts_chainUId?: InputMaybe<Scalars["String"]["input"]>;
        chains_contracts_type?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsEvmChainConfigNativeCurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery>;
export type CodegenGeneratedChainsEvmChainConfigNativeCurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigNativeCurrencyLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery, ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables>;
export declare function refetchCodegenGeneratedChainsEvmChainConfigNativeCurrencyQuery(variables?: ICodegenGeneratedChainsEvmChainConfigNativeCurrencyQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables>;
export declare function refetchCodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQuery(variables?: ICodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsEvmChainConfigRpcUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigRpcUrlsLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigRpcUrlsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigRpcUrlsQuery, ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables>;
export declare function refetchCodegenGeneratedChainsEvmChainConfigRpcUrlsQuery(variables?: ICodegenGeneratedChainsEvmChainConfigRpcUrlsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsEvmChainConfigDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsEvmChainConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsEvmChainConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsEvmChainConfigQuery, Exact<{
    chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsEvmChainConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigQuery>;
export type CodegenGeneratedChainsEvmChainConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsEvmChainConfigLazyQuery>;
export type CodegenGeneratedChainsEvmChainConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsEvmChainConfigQuery, ICodegenGeneratedChainsEvmChainConfigQueryVariables>;
export declare function refetchCodegenGeneratedChainsEvmChainConfigQuery(variables?: ICodegenGeneratedChainsEvmChainConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_evm_chain_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_evm_chain_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigBech32ConfigDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigBech32ConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigBech32ConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBech32ConfigQuery>;
export type CodegenGeneratedChainsKeplrConfigBech32ConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBech32ConfigLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigBech32ConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery, ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigBech32ConfigQuery(variables?: ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigBip44Document: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigBip44Query(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigBip44Query, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigBip44LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigBip44Query, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigBip44QueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBip44Query>;
export type CodegenGeneratedChainsKeplrConfigBip44LazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigBip44LazyQuery>;
export type CodegenGeneratedChainsKeplrConfigBip44QueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigBip44Query, ICodegenGeneratedChainsKeplrConfigBip44QueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigBip44Query(variables?: ICodegenGeneratedChainsKeplrConfigBip44QueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigCurrenciesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigCurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigCurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigCurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigCurrenciesQuery>;
export type CodegenGeneratedChainsKeplrConfigCurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigCurrenciesLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigCurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery, ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigCurrenciesQuery(variables?: ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigFeecurrenciesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigFeecurrenciesLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigFeecurrenciesQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery, ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigFeecurrenciesQuery(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigGaspricestepDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigGaspricestepQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigGaspricestepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigGaspricestepQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigGaspricestepQuery>;
export type CodegenGeneratedChainsKeplrConfigGaspricestepLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigGaspricestepLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigGaspricestepQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery, ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigGaspricestepQuery(variables?: ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigStakecurrencyDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigStakecurrencyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigStakecurrencyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigStakecurrencyQuery>;
export type CodegenGeneratedChainsKeplrConfigStakecurrencyLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigStakecurrencyLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigStakecurrencyQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery, ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigStakecurrencyQuery(variables?: ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsKeplrConfigDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsKeplrConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedChainsKeplrConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsKeplrConfigQuery, Exact<{
    chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
    chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedChainsKeplrConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigQuery>;
export type CodegenGeneratedChainsKeplrConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsKeplrConfigLazyQuery>;
export type CodegenGeneratedChainsKeplrConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsKeplrConfigQuery, ICodegenGeneratedChainsKeplrConfigQueryVariables>;
export declare function refetchCodegenGeneratedChainsKeplrConfigQuery(variables?: ICodegenGeneratedChainsKeplrConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chains_keplr_config_chain_id?: InputMaybe<Scalars["String"]["input"]>;
        chains_keplr_config_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedChainsRouterConfigDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsRouterConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsRouterConfigQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainsRouterConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsRouterConfigQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainsRouterConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsRouterConfigQuery>;
export type CodegenGeneratedChainsRouterConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsRouterConfigLazyQuery>;
export type CodegenGeneratedChainsRouterConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsRouterConfigQuery, ICodegenGeneratedChainsRouterConfigQueryVariables>;
export declare function refetchCodegenGeneratedChainsRouterConfigQuery(variables?: ICodegenGeneratedChainsRouterConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedChainsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedChainsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedChainsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsQuery>;
export type CodegenGeneratedChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedChainsLazyQuery>;
export type CodegenGeneratedChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedChainsQuery, ICodegenGeneratedChainsQueryVariables>;
export declare function refetchCodegenGeneratedChainsQuery(variables?: ICodegenGeneratedChainsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedClaimUserClaimsDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedClaimUserClaimsQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedClaimUserClaimsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedClaimUserClaimsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedClaimUserClaimsQuery({
 *   variables: {
 *      claim_user_claims_pubKey: // value for 'claim_user_claims_pubKey'
 *   },
 * });
 */
export declare function useCodegenGeneratedClaimUserClaimsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedClaimUserClaimsQuery, ICodegenGeneratedClaimUserClaimsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedClaimUserClaimsQuery, Exact<{
    claim_user_claims_pubKey: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedClaimUserClaimsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedClaimUserClaimsQuery, ICodegenGeneratedClaimUserClaimsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedClaimUserClaimsQuery, Exact<{
    claim_user_claims_pubKey: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedClaimUserClaimsQueryHookResult = ReturnType<typeof useCodegenGeneratedClaimUserClaimsQuery>;
export type CodegenGeneratedClaimUserClaimsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedClaimUserClaimsLazyQuery>;
export type CodegenGeneratedClaimUserClaimsQueryResult = Apollo.QueryResult<ICodegenGeneratedClaimUserClaimsQuery, ICodegenGeneratedClaimUserClaimsQueryVariables>;
export declare function refetchCodegenGeneratedClaimUserClaimsQuery(variables: ICodegenGeneratedClaimUserClaimsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        claim_user_claims_pubKey: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedCwBalanceDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedCwBalanceQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedCwBalanceQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    contract: Scalars["String"]["input"];
    cw_balance_address: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedCwBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedCwBalanceQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    contract: Scalars["String"]["input"];
    cw_balance_address: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedCwBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedCwBalanceQuery>;
export type CodegenGeneratedCwBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwBalanceLazyQuery>;
export type CodegenGeneratedCwBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedCwBalanceQuery, ICodegenGeneratedCwBalanceQueryVariables>;
export declare function refetchCodegenGeneratedCwBalanceQuery(variables: ICodegenGeneratedCwBalanceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        contract: Scalars["String"]["input"];
        cw_balance_address: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedCwTokenInfoDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedCwTokenInfoQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>): Apollo.QueryResult<ICodegenGeneratedCwTokenInfoQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    contract: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedCwTokenInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedCwTokenInfoQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    contract: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedCwTokenInfoQueryHookResult = ReturnType<typeof useCodegenGeneratedCwTokenInfoQuery>;
export type CodegenGeneratedCwTokenInfoLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwTokenInfoLazyQuery>;
export type CodegenGeneratedCwTokenInfoQueryResult = Apollo.QueryResult<ICodegenGeneratedCwTokenInfoQuery, ICodegenGeneratedCwTokenInfoQueryVariables>;
export declare function refetchCodegenGeneratedCwTokenInfoQuery(variables: ICodegenGeneratedCwTokenInfoQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        contract: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedCwDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedCwQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>): Apollo.QueryResult<ICodegenGeneratedCwQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    contract: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedCwLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedCwQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    contract: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedCwQueryHookResult = ReturnType<typeof useCodegenGeneratedCwQuery>;
export type CodegenGeneratedCwLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwLazyQuery>;
export type CodegenGeneratedCwQueryResult = Apollo.QueryResult<ICodegenGeneratedCwQuery, ICodegenGeneratedCwQueryVariables>;
export declare function refetchCodegenGeneratedCwQuery(variables: ICodegenGeneratedCwQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        contract: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedCwMulticallRawQueriesResultsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedCwMulticallRawQueriesResultsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>>;
export declare function useCodegenGeneratedCwMulticallRawQueriesResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>>;
export type CodegenGeneratedCwMulticallRawQueriesResultsQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesResultsQuery>;
export type CodegenGeneratedCwMulticallRawQueriesResultsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesResultsLazyQuery>;
export type CodegenGeneratedCwMulticallRawQueriesResultsQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallRawQueriesResultsQuery, ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables>;
export declare function refetchCodegenGeneratedCwMulticallRawQueriesResultsQuery(variables: ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
    }>;
};
export declare const CodegenGeneratedCwMulticallRawQueriesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedCwMulticallRawQueriesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedCwMulticallRawQueriesQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>>;
export declare function useCodegenGeneratedCwMulticallRawQueriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedCwMulticallRawQueriesQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
}>>;
export type CodegenGeneratedCwMulticallRawQueriesQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesQuery>;
export type CodegenGeneratedCwMulticallRawQueriesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallRawQueriesLazyQuery>;
export type CodegenGeneratedCwMulticallRawQueriesQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallRawQueriesQuery, ICodegenGeneratedCwMulticallRawQueriesQueryVariables>;
export declare function refetchCodegenGeneratedCwMulticallRawQueriesQuery(variables: ICodegenGeneratedCwMulticallRawQueriesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        cw_multicall_raw_queries_queries: Array<IRawQueryInput> | IRawQueryInput;
    }>;
};
export declare const CodegenGeneratedCwMulticallSmartQueriesResultsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedCwMulticallSmartQueriesResultsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>>;
export declare function useCodegenGeneratedCwMulticallSmartQueriesResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>>;
export type CodegenGeneratedCwMulticallSmartQueriesResultsQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesResultsQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesResultsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesResultsLazyQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesResultsQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery, ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables>;
export declare function refetchCodegenGeneratedCwMulticallSmartQueriesResultsQuery(variables: ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
    }>;
};
export declare const CodegenGeneratedCwMulticallSmartQueriesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedCwMulticallSmartQueriesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedCwMulticallSmartQueriesQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>>;
export declare function useCodegenGeneratedCwMulticallSmartQueriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedCwMulticallSmartQueriesQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
}>>;
export type CodegenGeneratedCwMulticallSmartQueriesQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedCwMulticallSmartQueriesLazyQuery>;
export type CodegenGeneratedCwMulticallSmartQueriesQueryResult = Apollo.QueryResult<ICodegenGeneratedCwMulticallSmartQueriesQuery, ICodegenGeneratedCwMulticallSmartQueriesQueryVariables>;
export declare function refetchCodegenGeneratedCwMulticallSmartQueriesQuery(variables: ICodegenGeneratedCwMulticallSmartQueriesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        cw_multicall_smart_queries_queries: Array<ISmartQueryInput> | ISmartQueryInput;
    }>;
};
export declare const CodegenGeneratedFactoryAllPoolsPaginationDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryAllPoolsPaginationQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPaginationQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryAllPoolsPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryAllPoolsPaginationQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedFactoryAllPoolsPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPaginationQuery>;
export type CodegenGeneratedFactoryAllPoolsPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPaginationLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPaginationQuery, ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables>;
export declare function refetchCodegenGeneratedFactoryAllPoolsPaginationQuery(variables: ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryAllPoolsPoolsPairDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryAllPoolsPoolsPairQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryAllPoolsPoolsPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedFactoryAllPoolsPoolsPairQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsPairQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsPairLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsPairQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery, ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables>;
export declare function refetchCodegenGeneratedFactoryAllPoolsPoolsPairQuery(variables: ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryAllPoolsPoolsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryAllPoolsPoolsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPoolsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryAllPoolsPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryAllPoolsPoolsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedFactoryAllPoolsPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsPoolsLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsPoolsQuery, ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables>;
export declare function refetchCodegenGeneratedFactoryAllPoolsPoolsQuery(variables: ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryAllPoolsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryAllPoolsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryAllPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryAllPoolsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedFactoryAllPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsQuery>;
export type CodegenGeneratedFactoryAllPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllPoolsLazyQuery>;
export type CodegenGeneratedFactoryAllPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllPoolsQuery, ICodegenGeneratedFactoryAllPoolsQueryVariables>;
export declare function refetchCodegenGeneratedFactoryAllPoolsQuery(variables: ICodegenGeneratedFactoryAllPoolsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        factory_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryAllTokensPaginationDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryAllTokensPaginationQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryAllTokensPaginationQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_tokens_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryAllTokensPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryAllTokensPaginationQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_tokens_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedFactoryAllTokensPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensPaginationQuery>;
export type CodegenGeneratedFactoryAllTokensPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensPaginationLazyQuery>;
export type CodegenGeneratedFactoryAllTokensPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllTokensPaginationQuery, ICodegenGeneratedFactoryAllTokensPaginationQueryVariables>;
export declare function refetchCodegenGeneratedFactoryAllTokensPaginationQuery(variables: ICodegenGeneratedFactoryAllTokensPaginationQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
        factory_all_tokens_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryAllTokensDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryAllTokensQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryAllTokensQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_tokens_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryAllTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryAllTokensQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
    factory_all_tokens_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedFactoryAllTokensQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensQuery>;
export type CodegenGeneratedFactoryAllTokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllTokensLazyQuery>;
export type CodegenGeneratedFactoryAllTokensQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllTokensQuery, ICodegenGeneratedFactoryAllTokensQueryVariables>;
export declare function refetchCodegenGeneratedFactoryAllTokensQuery(variables: ICodegenGeneratedFactoryAllTokensQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
        factory_all_tokens_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryAllowedDenomsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryAllowedDenomsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryAllowedDenomsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_allowed_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryAllowedDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryAllowedDenomsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_allowed_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedFactoryAllowedDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllowedDenomsQuery>;
export type CodegenGeneratedFactoryAllowedDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryAllowedDenomsLazyQuery>;
export type CodegenGeneratedFactoryAllowedDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryAllowedDenomsQuery, ICodegenGeneratedFactoryAllowedDenomsQueryVariables>;
export declare function refetchCodegenGeneratedFactoryAllowedDenomsQuery(variables: ICodegenGeneratedFactoryAllowedDenomsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_allowed_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryEscrowDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryEscrowQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryEscrowQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_escrow_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedFactoryEscrowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryEscrowQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_escrow_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedFactoryEscrowQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryEscrowQuery>;
export type CodegenGeneratedFactoryEscrowLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryEscrowLazyQuery>;
export type CodegenGeneratedFactoryEscrowQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryEscrowQuery, ICodegenGeneratedFactoryEscrowQueryVariables>;
export declare function refetchCodegenGeneratedFactoryEscrowQuery(variables: ICodegenGeneratedFactoryEscrowQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_escrow_token_id?: InputMaybe<Scalars["String"]["input"]>;
    }>;
};
export declare const CodegenGeneratedFactoryGetLptokenAddressDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryGetLptokenAddressQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryGetLptokenAddressQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_get_LpToken_address_vlp_address: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedFactoryGetLptokenAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryGetLptokenAddressQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_get_LpToken_address_vlp_address: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedFactoryGetLptokenAddressQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryGetLptokenAddressQuery>;
export type CodegenGeneratedFactoryGetLptokenAddressLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryGetLptokenAddressLazyQuery>;
export type CodegenGeneratedFactoryGetLptokenAddressQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryGetLptokenAddressQuery, ICodegenGeneratedFactoryGetLptokenAddressQueryVariables>;
export declare function refetchCodegenGeneratedFactoryGetLptokenAddressQuery(variables: ICodegenGeneratedFactoryGetLptokenAddressQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_get_LpToken_address_vlp_address: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsLazyQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables>;
export declare function refetchCodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedFactoryPartnerFeesCollectedTotalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedTotalLazyQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedTotalQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery, ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables>;
export declare function refetchCodegenGeneratedFactoryPartnerFeesCollectedTotalQuery(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedFactoryPartnerFeesCollectedDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryPartnerFeesCollectedQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedFactoryPartnerFeesCollectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedFactoryPartnerFeesCollectedQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryPartnerFeesCollectedLazyQuery>;
export type CodegenGeneratedFactoryPartnerFeesCollectedQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryPartnerFeesCollectedQuery, ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables>;
export declare function refetchCodegenGeneratedFactoryPartnerFeesCollectedQuery(variables: ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedFactoryStateDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryStateQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryStateQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedFactoryStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryStateQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedFactoryStateQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryStateQuery>;
export type CodegenGeneratedFactoryStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryStateLazyQuery>;
export type CodegenGeneratedFactoryStateQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryStateQuery, ICodegenGeneratedFactoryStateQueryVariables>;
export declare function refetchCodegenGeneratedFactoryStateQuery(variables: ICodegenGeneratedFactoryStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedFactoryVlpDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryVlpQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryVlpQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_vlp_pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedFactoryVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryVlpQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
    factory_vlp_pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedFactoryVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryVlpQuery>;
export type CodegenGeneratedFactoryVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryVlpLazyQuery>;
export type CodegenGeneratedFactoryVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryVlpQuery, ICodegenGeneratedFactoryVlpQueryVariables>;
export declare function refetchCodegenGeneratedFactoryVlpQuery(variables: ICodegenGeneratedFactoryVlpQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
        factory_vlp_pair?: InputMaybe<IPairInput>;
    }>;
};
export declare const CodegenGeneratedFactoryDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedFactoryQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>): Apollo.QueryResult<ICodegenGeneratedFactoryQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedFactoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedFactoryQuery, Exact<{
    chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedFactoryQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryQuery>;
export type CodegenGeneratedFactoryLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedFactoryLazyQuery>;
export type CodegenGeneratedFactoryQueryResult = Apollo.QueryResult<ICodegenGeneratedFactoryQuery, ICodegenGeneratedFactoryQueryVariables>;
export declare function refetchCodegenGeneratedFactoryQuery(variables: ICodegenGeneratedFactoryQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedPoolFeesCollectedBreakdownDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolFeesCollectedBreakdownQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedPoolFeesCollectedBreakdownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedPoolFeesCollectedBreakdownQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedBreakdownQuery>;
export type CodegenGeneratedPoolFeesCollectedBreakdownLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedBreakdownLazyQuery>;
export type CodegenGeneratedPoolFeesCollectedBreakdownQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolFeesCollectedBreakdownQuery, ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables>;
export declare function refetchCodegenGeneratedPoolFeesCollectedBreakdownQuery(variables?: ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedPoolFeesCollectedDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolFeesCollectedQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolFeesCollectedQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedPoolFeesCollectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolFeesCollectedQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedPoolFeesCollectedQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedQuery>;
export type CodegenGeneratedPoolFeesCollectedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolFeesCollectedLazyQuery>;
export type CodegenGeneratedPoolFeesCollectedQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolFeesCollectedQuery, ICodegenGeneratedPoolFeesCollectedQueryVariables>;
export declare function refetchCodegenGeneratedPoolFeesCollectedQuery(variables?: ICodegenGeneratedPoolFeesCollectedQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedPoolMyPoolsPairDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolMyPoolsPairQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsPairQuery, Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    pool_my_pools_user_address: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedPoolMyPoolsPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolMyPoolsPairQuery, Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    pool_my_pools_user_address: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedPoolMyPoolsPairQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsPairQuery>;
export type CodegenGeneratedPoolMyPoolsPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsPairLazyQuery>;
export type CodegenGeneratedPoolMyPoolsPairQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsPairQuery, ICodegenGeneratedPoolMyPoolsPairQueryVariables>;
export declare function refetchCodegenGeneratedPoolMyPoolsPairQuery(variables: ICodegenGeneratedPoolMyPoolsPairQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
        pool_my_pools_user_address: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedPoolMyPoolsUserDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolMyPoolsUserQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsUserQuery, Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    pool_my_pools_user_address: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedPoolMyPoolsUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolMyPoolsUserQuery, Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    pool_my_pools_user_address: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedPoolMyPoolsUserQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsUserQuery>;
export type CodegenGeneratedPoolMyPoolsUserLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsUserLazyQuery>;
export type CodegenGeneratedPoolMyPoolsUserQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsUserQuery, ICodegenGeneratedPoolMyPoolsUserQueryVariables>;
export declare function refetchCodegenGeneratedPoolMyPoolsUserQuery(variables: ICodegenGeneratedPoolMyPoolsUserQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
        pool_my_pools_user_address: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedPoolMyPoolsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolMyPoolsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsQuery, Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    pool_my_pools_user_address: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedPoolMyPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolMyPoolsQuery, Exact<{
    pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
    pool_my_pools_user_address: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedPoolMyPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsQuery>;
export type CodegenGeneratedPoolMyPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolMyPoolsLazyQuery>;
export type CodegenGeneratedPoolMyPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolMyPoolsQuery, ICodegenGeneratedPoolMyPoolsQueryVariables>;
export declare function refetchCodegenGeneratedPoolMyPoolsQuery(variables: ICodegenGeneratedPoolMyPoolsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        pool_my_pools_chain_uid?: InputMaybe<Scalars["String"]["input"]>;
        pool_my_pools_user_address: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument: Apollo.DocumentNode;
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
 *      pool_token_pair_with_liquidity_only_show_verified: // value for 'pool_token_pair_with_liquidity_only_show_verified'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityPaginationLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery, ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables>;
export declare function refetchCodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
        pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
        pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
        pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument: Apollo.DocumentNode;
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
 *      pool_token_pair_with_liquidity_only_show_verified: // value for 'pool_token_pair_with_liquidity_only_show_verified'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsPairLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables>;
export declare function refetchCodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
        pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
        pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
        pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument: Apollo.DocumentNode;
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
 *      pool_token_pair_with_liquidity_only_show_verified: // value for 'pool_token_pair_with_liquidity_only_show_verified'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityResultsLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityResultsQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery, ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables>;
export declare function refetchCodegenGeneratedPoolTokenPairWithLiquidityResultsQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
        pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
        pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
        pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedPoolTokenPairWithLiquidityDocument: Apollo.DocumentNode;
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
 *      pool_token_pair_with_liquidity_only_show_verified: // value for 'pool_token_pair_with_liquidity_only_show_verified'
 *      pool_token_pair_with_liquidity_sort_by: // value for 'pool_token_pair_with_liquidity_sort_by'
 *      pool_token_pair_with_liquidity_sort_order: // value for 'pool_token_pair_with_liquidity_sort_order'
 *      pool_token_pair_with_liquidity_token: // value for 'pool_token_pair_with_liquidity_token'
 *   },
 * });
 */
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedPoolTokenPairWithLiquidityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
    pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
    pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
    pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedPoolTokenPairWithLiquidityQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolTokenPairWithLiquidityLazyQuery>;
export type CodegenGeneratedPoolTokenPairWithLiquidityQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolTokenPairWithLiquidityQuery, ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables>;
export declare function refetchCodegenGeneratedPoolTokenPairWithLiquidityQuery(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars["Int"]["input"]>;
        pool_token_pair_with_liquidity_only_show_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
        pool_token_pair_with_liquidity_sort_by?: InputMaybe<ITokenPairSortBy>;
        pool_token_pair_with_liquidity_sort_order?: InputMaybe<ISortOrder>;
        pool_token_pair_with_liquidity_token?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery>;
export type CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursLazyQuery>;
export type CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery, ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables>;
export declare function refetchCodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery(variables?: ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedPoolVolumeDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolVolumeQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolVolumeQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedPoolVolumeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolVolumeQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedPoolVolumeQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeQuery>;
export type CodegenGeneratedPoolVolumeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolVolumeLazyQuery>;
export type CodegenGeneratedPoolVolumeQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolVolumeQuery, ICodegenGeneratedPoolVolumeQueryVariables>;
export declare function refetchCodegenGeneratedPoolVolumeQuery(variables?: ICodegenGeneratedPoolVolumeQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedPoolDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedPoolQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>): Apollo.QueryResult<ICodegenGeneratedPoolQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedPoolQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedPoolQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolQuery>;
export type CodegenGeneratedPoolLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedPoolLazyQuery>;
export type CodegenGeneratedPoolQueryResult = Apollo.QueryResult<ICodegenGeneratedPoolQuery, ICodegenGeneratedPoolQueryVariables>;
export declare function refetchCodegenGeneratedPoolQuery(variables?: ICodegenGeneratedPoolQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedRouterAllChainsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterAllChainsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterAllChainsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedRouterAllChainsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterAllChainsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedRouterAllChainsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllChainsQuery>;
export type CodegenGeneratedRouterAllChainsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllChainsLazyQuery>;
export type CodegenGeneratedRouterAllChainsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllChainsQuery, ICodegenGeneratedRouterAllChainsQueryVariables>;
export declare function refetchCodegenGeneratedRouterAllChainsQuery(variables?: ICodegenGeneratedRouterAllChainsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedRouterAllEscrowsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterAllEscrowsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterAllEscrowsQuery, Exact<{
    router_all_escrows_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_escrows_max?: InputMaybe<Scalars["String"]["input"]>;
    router_all_escrows_min?: InputMaybe<Scalars["String"]["input"]>;
    router_all_escrows_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedRouterAllEscrowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterAllEscrowsQuery, Exact<{
    router_all_escrows_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_escrows_max?: InputMaybe<Scalars["String"]["input"]>;
    router_all_escrows_min?: InputMaybe<Scalars["String"]["input"]>;
    router_all_escrows_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedRouterAllEscrowsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllEscrowsQuery>;
export type CodegenGeneratedRouterAllEscrowsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllEscrowsLazyQuery>;
export type CodegenGeneratedRouterAllEscrowsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllEscrowsQuery, ICodegenGeneratedRouterAllEscrowsQueryVariables>;
export declare function refetchCodegenGeneratedRouterAllEscrowsQuery(variables?: ICodegenGeneratedRouterAllEscrowsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_all_escrows_limit?: InputMaybe<Scalars["Int"]["input"]>;
        router_all_escrows_max?: InputMaybe<Scalars["String"]["input"]>;
        router_all_escrows_min?: InputMaybe<Scalars["String"]["input"]>;
        router_all_escrows_skip?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedRouterAllTokensDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterAllTokensQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterAllTokensQuery, Exact<{
    router_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_tokens_max?: InputMaybe<Scalars["String"]["input"]>;
    router_all_tokens_min?: InputMaybe<Scalars["String"]["input"]>;
    router_all_tokens_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedRouterAllTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterAllTokensQuery, Exact<{
    router_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_tokens_max?: InputMaybe<Scalars["String"]["input"]>;
    router_all_tokens_min?: InputMaybe<Scalars["String"]["input"]>;
    router_all_tokens_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedRouterAllTokensQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllTokensQuery>;
export type CodegenGeneratedRouterAllTokensLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllTokensLazyQuery>;
export type CodegenGeneratedRouterAllTokensQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllTokensQuery, ICodegenGeneratedRouterAllTokensQueryVariables>;
export declare function refetchCodegenGeneratedRouterAllTokensQuery(variables?: ICodegenGeneratedRouterAllTokensQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_all_tokens_limit?: InputMaybe<Scalars["Int"]["input"]>;
        router_all_tokens_max?: InputMaybe<Scalars["String"]["input"]>;
        router_all_tokens_min?: InputMaybe<Scalars["String"]["input"]>;
        router_all_tokens_skip?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedRouterAllVlpsVlpsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterAllVlpsVlpsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterAllVlpsVlpsQuery, Exact<{
    router_all_vlps_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedRouterAllVlpsVlpsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterAllVlpsVlpsQuery, Exact<{
    router_all_vlps_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedRouterAllVlpsVlpsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsVlpsQuery>;
export type CodegenGeneratedRouterAllVlpsVlpsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsVlpsLazyQuery>;
export type CodegenGeneratedRouterAllVlpsVlpsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllVlpsVlpsQuery, ICodegenGeneratedRouterAllVlpsVlpsQueryVariables>;
export declare function refetchCodegenGeneratedRouterAllVlpsVlpsQuery(variables?: ICodegenGeneratedRouterAllVlpsVlpsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_all_vlps_limit?: InputMaybe<Scalars["Int"]["input"]>;
        router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
        router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
        router_all_vlps_skip?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedRouterAllVlpsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterAllVlpsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterAllVlpsQuery, Exact<{
    router_all_vlps_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedRouterAllVlpsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterAllVlpsQuery, Exact<{
    router_all_vlps_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
    router_all_vlps_skip?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedRouterAllVlpsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsQuery>;
export type CodegenGeneratedRouterAllVlpsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterAllVlpsLazyQuery>;
export type CodegenGeneratedRouterAllVlpsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterAllVlpsQuery, ICodegenGeneratedRouterAllVlpsQueryVariables>;
export declare function refetchCodegenGeneratedRouterAllVlpsQuery(variables?: ICodegenGeneratedRouterAllVlpsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_all_vlps_limit?: InputMaybe<Scalars["Int"]["input"]>;
        router_all_vlps_max?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
        router_all_vlps_min?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>;
        router_all_vlps_skip?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedRouterChainChainChainTypeIbcDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterChainChainChainTypeIbcQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterChainChainChainTypeIbcLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterChainChainChainTypeIbcQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeIbcQuery>;
export type CodegenGeneratedRouterChainChainChainTypeIbcLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeIbcLazyQuery>;
export type CodegenGeneratedRouterChainChainChainTypeIbcQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainChainChainTypeIbcQuery, ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables>;
export declare function refetchCodegenGeneratedRouterChainChainChainTypeIbcQuery(variables: ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_chain_chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterChainChainChainTypeDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterChainChainChainTypeQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterChainChainChainTypeQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterChainChainChainTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterChainChainChainTypeQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterChainChainChainTypeQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeQuery>;
export type CodegenGeneratedRouterChainChainChainTypeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainChainTypeLazyQuery>;
export type CodegenGeneratedRouterChainChainChainTypeQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainChainChainTypeQuery, ICodegenGeneratedRouterChainChainChainTypeQueryVariables>;
export declare function refetchCodegenGeneratedRouterChainChainChainTypeQuery(variables: ICodegenGeneratedRouterChainChainChainTypeQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_chain_chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterChainChainDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterChainChainQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterChainChainQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterChainChainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterChainChainQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterChainChainQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainQuery>;
export type CodegenGeneratedRouterChainChainLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainChainLazyQuery>;
export type CodegenGeneratedRouterChainChainQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainChainQuery, ICodegenGeneratedRouterChainChainQueryVariables>;
export declare function refetchCodegenGeneratedRouterChainChainQuery(variables: ICodegenGeneratedRouterChainChainQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_chain_chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterChainDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterChainQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterChainQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterChainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterChainQuery, Exact<{
    router_chain_chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterChainQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainQuery>;
export type CodegenGeneratedRouterChainLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterChainLazyQuery>;
export type CodegenGeneratedRouterChainQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterChainQuery, ICodegenGeneratedRouterChainQueryVariables>;
export declare function refetchCodegenGeneratedRouterChainQuery(variables: ICodegenGeneratedRouterChainQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_chain_chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterEscrowsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterEscrowsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterEscrowsQuery, Exact<{
    router_escrows_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_escrows_max?: InputMaybe<Scalars["String"]["input"]>;
    router_escrows_min?: InputMaybe<Scalars["String"]["input"]>;
    router_escrows_skip?: InputMaybe<Scalars["Int"]["input"]>;
    router_escrows_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterEscrowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterEscrowsQuery, Exact<{
    router_escrows_limit?: InputMaybe<Scalars["Int"]["input"]>;
    router_escrows_max?: InputMaybe<Scalars["String"]["input"]>;
    router_escrows_min?: InputMaybe<Scalars["String"]["input"]>;
    router_escrows_skip?: InputMaybe<Scalars["Int"]["input"]>;
    router_escrows_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterEscrowsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterEscrowsQuery>;
export type CodegenGeneratedRouterEscrowsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterEscrowsLazyQuery>;
export type CodegenGeneratedRouterEscrowsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterEscrowsQuery, ICodegenGeneratedRouterEscrowsQueryVariables>;
export declare function refetchCodegenGeneratedRouterEscrowsQuery(variables: ICodegenGeneratedRouterEscrowsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_escrows_limit?: InputMaybe<Scalars["Int"]["input"]>;
        router_escrows_max?: InputMaybe<Scalars["String"]["input"]>;
        router_escrows_min?: InputMaybe<Scalars["String"]["input"]>;
        router_escrows_skip?: InputMaybe<Scalars["Int"]["input"]>;
        router_escrows_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables>;
export declare function refetchCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
        router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
        router_simulate_release_escrow_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables>;
export declare function refetchCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
        router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
        router_simulate_release_escrow_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery, ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables>;
export declare function refetchCodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
        router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
        router_simulate_release_escrow_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterSimulateReleaseEscrowDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterSimulateReleaseEscrowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, Exact<{
    router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
    router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
    router_simulate_release_escrow_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterSimulateReleaseEscrowQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateReleaseEscrowLazyQuery>;
export type CodegenGeneratedRouterSimulateReleaseEscrowQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateReleaseEscrowQuery, ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables>;
export declare function refetchCodegenGeneratedRouterSimulateReleaseEscrowQuery(variables: ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_simulate_release_escrow_amount?: InputMaybe<Scalars["Int"]["input"]>;
        router_simulate_release_escrow_cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>> | InputMaybe<ICrossChainUserWithLimitInput>>;
        router_simulate_release_escrow_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterSimulateSwapDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterSimulateSwapQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterSimulateSwapQuery, Exact<{
    router_simulate_swap_amount_in: Scalars["String"]["input"];
    router_simulate_swap_asset_in: Scalars["String"]["input"];
    router_simulate_swap_asset_out: Scalars["String"]["input"];
    router_simulate_swap_min_amount_out: Scalars["String"]["input"];
    router_simulate_swap_swaps?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedRouterSimulateSwapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterSimulateSwapQuery, Exact<{
    router_simulate_swap_amount_in: Scalars["String"]["input"];
    router_simulate_swap_asset_in: Scalars["String"]["input"];
    router_simulate_swap_asset_out: Scalars["String"]["input"];
    router_simulate_swap_min_amount_out: Scalars["String"]["input"];
    router_simulate_swap_swaps?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedRouterSimulateSwapQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateSwapQuery>;
export type CodegenGeneratedRouterSimulateSwapLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterSimulateSwapLazyQuery>;
export type CodegenGeneratedRouterSimulateSwapQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterSimulateSwapQuery, ICodegenGeneratedRouterSimulateSwapQueryVariables>;
export declare function refetchCodegenGeneratedRouterSimulateSwapQuery(variables: ICodegenGeneratedRouterSimulateSwapQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_simulate_swap_amount_in: Scalars["String"]["input"];
        router_simulate_swap_asset_in: Scalars["String"]["input"];
        router_simulate_swap_asset_out: Scalars["String"]["input"];
        router_simulate_swap_min_amount_out: Scalars["String"]["input"];
        router_simulate_swap_swaps?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    }>;
};
export declare const CodegenGeneratedRouterStateDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterStateQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterStateQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedRouterStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterStateQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedRouterStateQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterStateQuery>;
export type CodegenGeneratedRouterStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterStateLazyQuery>;
export type CodegenGeneratedRouterStateQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterStateQuery, ICodegenGeneratedRouterStateQueryVariables>;
export declare function refetchCodegenGeneratedRouterStateQuery(variables?: ICodegenGeneratedRouterStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedRouterTokenDenomsDenomsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterTokenDenomsDenomsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterTokenDenomsDenomsQuery, Exact<{
    router_token_denoms_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterTokenDenomsDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterTokenDenomsDenomsQuery, Exact<{
    router_token_denoms_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterTokenDenomsDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsDenomsQuery>;
export type CodegenGeneratedRouterTokenDenomsDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsDenomsLazyQuery>;
export type CodegenGeneratedRouterTokenDenomsDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterTokenDenomsDenomsQuery, ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables>;
export declare function refetchCodegenGeneratedRouterTokenDenomsDenomsQuery(variables: ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_token_denoms_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterTokenDenomsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterTokenDenomsQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterTokenDenomsQuery, Exact<{
    router_token_denoms_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterTokenDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterTokenDenomsQuery, Exact<{
    router_token_denoms_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterTokenDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsQuery>;
export type CodegenGeneratedRouterTokenDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenDenomsLazyQuery>;
export type CodegenGeneratedRouterTokenDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterTokenDenomsQuery, ICodegenGeneratedRouterTokenDenomsQueryVariables>;
export declare function refetchCodegenGeneratedRouterTokenDenomsQuery(variables: ICodegenGeneratedRouterTokenDenomsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_token_denoms_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterTokenPairsFromVlpDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterTokenPairsFromVlpQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterTokenPairsFromVlpQuery, Exact<{
    router_token_pairs_from_vlp_vlp: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedRouterTokenPairsFromVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterTokenPairsFromVlpQuery, Exact<{
    router_token_pairs_from_vlp_vlp: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedRouterTokenPairsFromVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenPairsFromVlpQuery>;
export type CodegenGeneratedRouterTokenPairsFromVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterTokenPairsFromVlpLazyQuery>;
export type CodegenGeneratedRouterTokenPairsFromVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterTokenPairsFromVlpQuery, ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables>;
export declare function refetchCodegenGeneratedRouterTokenPairsFromVlpQuery(variables: ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_token_pairs_from_vlp_vlp: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedRouterVlpDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterVlpQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterVlpQuery, Exact<{
    router_vlp_pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedRouterVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterVlpQuery, Exact<{
    router_vlp_pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedRouterVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterVlpQuery>;
export type CodegenGeneratedRouterVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterVlpLazyQuery>;
export type CodegenGeneratedRouterVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterVlpQuery, ICodegenGeneratedRouterVlpQueryVariables>;
export declare function refetchCodegenGeneratedRouterVlpQuery(variables?: ICodegenGeneratedRouterVlpQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        router_vlp_pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedRouterDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedRouterQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>): Apollo.QueryResult<ICodegenGeneratedRouterQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedRouterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedRouterQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedRouterQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterQuery>;
export type CodegenGeneratedRouterLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedRouterLazyQuery>;
export type CodegenGeneratedRouterQueryResult = Apollo.QueryResult<ICodegenGeneratedRouterQuery, ICodegenGeneratedRouterQueryVariables>;
export declare function refetchCodegenGeneratedRouterQuery(variables?: ICodegenGeneratedRouterQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedTokenAllDexesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenAllDexesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenAllDexesQuery, Exact<{
    token_all_dexes_limit?: InputMaybe<Scalars["Int"]["input"]>;
    token_all_dexes_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedTokenAllDexesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenAllDexesQuery, Exact<{
    token_all_dexes_limit?: InputMaybe<Scalars["Int"]["input"]>;
    token_all_dexes_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedTokenAllDexesQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenAllDexesQuery>;
export type CodegenGeneratedTokenAllDexesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenAllDexesLazyQuery>;
export type CodegenGeneratedTokenAllDexesQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenAllDexesQuery, ICodegenGeneratedTokenAllDexesQueryVariables>;
export declare function refetchCodegenGeneratedTokenAllDexesQuery(variables?: ICodegenGeneratedTokenAllDexesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_all_dexes_limit?: InputMaybe<Scalars["Int"]["input"]>;
        token_all_dexes_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedTokenChainsForTokenLaunchDocument: Apollo.DocumentNode;
/**
 * __useCodegenGeneratedTokenChainsForTokenLaunchQuery__
 *
 * To run a query within a React component, call `useCodegenGeneratedTokenChainsForTokenLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodegenGeneratedTokenChainsForTokenLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodegenGeneratedTokenChainsForTokenLaunchQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCodegenGeneratedTokenChainsForTokenLaunchQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenChainsForTokenLaunchQuery, ICodegenGeneratedTokenChainsForTokenLaunchQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenChainsForTokenLaunchQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedTokenChainsForTokenLaunchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenChainsForTokenLaunchQuery, ICodegenGeneratedTokenChainsForTokenLaunchQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenChainsForTokenLaunchQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedTokenChainsForTokenLaunchQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenChainsForTokenLaunchQuery>;
export type CodegenGeneratedTokenChainsForTokenLaunchLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenChainsForTokenLaunchLazyQuery>;
export type CodegenGeneratedTokenChainsForTokenLaunchQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenChainsForTokenLaunchQuery, ICodegenGeneratedTokenChainsForTokenLaunchQueryVariables>;
export declare function refetchCodegenGeneratedTokenChainsForTokenLaunchQuery(variables?: ICodegenGeneratedTokenChainsForTokenLaunchQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedTokenDexMetadataDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenDexMetadataQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenDexMetadataQuery, Exact<{
    token_dex_metadata_dex: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedTokenDexMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenDexMetadataQuery, Exact<{
    token_dex_metadata_dex: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedTokenDexMetadataQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenDexMetadataQuery>;
export type CodegenGeneratedTokenDexMetadataLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenDexMetadataLazyQuery>;
export type CodegenGeneratedTokenDexMetadataQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenDexMetadataQuery, ICodegenGeneratedTokenDexMetadataQueryVariables>;
export declare function refetchCodegenGeneratedTokenDexMetadataQuery(variables: ICodegenGeneratedTokenDexMetadataQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_dex_metadata_dex: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedTokenGetAllFaucetsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenGetAllFaucetsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenGetAllFaucetsQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedTokenGetAllFaucetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenGetAllFaucetsQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedTokenGetAllFaucetsQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenGetAllFaucetsQuery>;
export type CodegenGeneratedTokenGetAllFaucetsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenGetAllFaucetsLazyQuery>;
export type CodegenGeneratedTokenGetAllFaucetsQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenGetAllFaucetsQuery, ICodegenGeneratedTokenGetAllFaucetsQueryVariables>;
export declare function refetchCodegenGeneratedTokenGetAllFaucetsQuery(variables?: ICodegenGeneratedTokenGetAllFaucetsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedTokenTokenDenomsDenomsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenTokenDenomsDenomsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenTokenDenomsDenomsQuery, Exact<{
    token_token_denoms_chain_uid?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_denoms_denom?: InputMaybe<Scalars["String"]["input"]>;
    token_token_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedTokenTokenDenomsDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenTokenDenomsDenomsQuery, Exact<{
    token_token_denoms_chain_uid?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_denoms_denom?: InputMaybe<Scalars["String"]["input"]>;
    token_token_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedTokenTokenDenomsDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsDenomsQuery>;
export type CodegenGeneratedTokenTokenDenomsDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsDenomsLazyQuery>;
export type CodegenGeneratedTokenTokenDenomsDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenDenomsDenomsQuery, ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables>;
export declare function refetchCodegenGeneratedTokenTokenDenomsDenomsQuery(variables?: ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_token_denoms_chain_uid?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
        token_token_denoms_denom?: InputMaybe<Scalars["String"]["input"]>;
        token_token_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedTokenTokenDenomsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenTokenDenomsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenTokenDenomsQuery, Exact<{
    token_token_denoms_chain_uid?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_denoms_denom?: InputMaybe<Scalars["String"]["input"]>;
    token_token_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export declare function useCodegenGeneratedTokenTokenDenomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenTokenDenomsQuery, Exact<{
    token_token_denoms_chain_uid?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_denoms_denom?: InputMaybe<Scalars["String"]["input"]>;
    token_token_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
}>>;
export type CodegenGeneratedTokenTokenDenomsQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsQuery>;
export type CodegenGeneratedTokenTokenDenomsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenDenomsLazyQuery>;
export type CodegenGeneratedTokenTokenDenomsQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenDenomsQuery, ICodegenGeneratedTokenTokenDenomsQueryVariables>;
export declare function refetchCodegenGeneratedTokenTokenDenomsQuery(variables?: ICodegenGeneratedTokenTokenDenomsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_token_denoms_chain_uid?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
        token_token_denoms_denom?: InputMaybe<Scalars["String"]["input"]>;
        token_token_denoms_token_id?: InputMaybe<Scalars["String"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedTokenTokenLiquiditiesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenTokenLiquiditiesQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenTokenLiquiditiesQuery, Exact<{
    token_token_liquidities_limit: Scalars["Int"]["input"];
    token_token_liquidities_page: Scalars["Int"]["input"];
}>>;
export declare function useCodegenGeneratedTokenTokenLiquiditiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenTokenLiquiditiesQuery, Exact<{
    token_token_liquidities_limit: Scalars["Int"]["input"];
    token_token_liquidities_page: Scalars["Int"]["input"];
}>>;
export type CodegenGeneratedTokenTokenLiquiditiesQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquiditiesQuery>;
export type CodegenGeneratedTokenTokenLiquiditiesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquiditiesLazyQuery>;
export type CodegenGeneratedTokenTokenLiquiditiesQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenLiquiditiesQuery, ICodegenGeneratedTokenTokenLiquiditiesQueryVariables>;
export declare function refetchCodegenGeneratedTokenTokenLiquiditiesQuery(variables: ICodegenGeneratedTokenTokenLiquiditiesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_token_liquidities_limit: Scalars["Int"]["input"];
        token_token_liquidities_page: Scalars["Int"]["input"];
    }>;
};
export declare const CodegenGeneratedTokenTokenLiquidityDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenTokenLiquidityQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenTokenLiquidityQuery, Exact<{
    token_token_liquidity_token: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedTokenTokenLiquidityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenTokenLiquidityQuery, Exact<{
    token_token_liquidity_token: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedTokenTokenLiquidityQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquidityQuery>;
export type CodegenGeneratedTokenTokenLiquidityLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenLiquidityLazyQuery>;
export type CodegenGeneratedTokenTokenLiquidityQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenLiquidityQuery, ICodegenGeneratedTokenTokenLiquidityQueryVariables>;
export declare function refetchCodegenGeneratedTokenTokenLiquidityQuery(variables: ICodegenGeneratedTokenTokenLiquidityQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_token_liquidity_token: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedTokenTokenMetadataByIdDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenTokenMetadataByIdQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenTokenMetadataByIdQuery, Exact<{
    token_token_metadata_by_id_token_id: Scalars["String"]["input"];
    token_token_metadata_by_id_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
}>>;
export declare function useCodegenGeneratedTokenTokenMetadataByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenTokenMetadataByIdQuery, Exact<{
    token_token_metadata_by_id_token_id: Scalars["String"]["input"];
    token_token_metadata_by_id_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
}>>;
export type CodegenGeneratedTokenTokenMetadataByIdQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadataByIdQuery>;
export type CodegenGeneratedTokenTokenMetadataByIdLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadataByIdLazyQuery>;
export type CodegenGeneratedTokenTokenMetadataByIdQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenMetadataByIdQuery, ICodegenGeneratedTokenTokenMetadataByIdQueryVariables>;
export declare function refetchCodegenGeneratedTokenTokenMetadataByIdQuery(variables: ICodegenGeneratedTokenTokenMetadataByIdQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_token_metadata_by_id_token_id: Scalars["String"]["input"];
        token_token_metadata_by_id_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    }>;
};
export declare const CodegenGeneratedTokenTokenMetadatasDocument: Apollo.DocumentNode;
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
 *      token_token_metadatas_search: // value for 'token_token_metadatas_search'
 *      token_token_metadatas_show_volume: // value for 'token_token_metadatas_show_volume'
 *      token_token_metadatas_verified: // value for 'token_token_metadatas_verified'
 *   },
 * });
 */
export declare function useCodegenGeneratedTokenTokenMetadatasQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenTokenMetadatasQuery, Exact<{
    token_token_metadatas_chain_uids?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_metadatas_dex?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_metadatas_limit?: InputMaybe<Scalars["Int"]["input"]>;
    token_token_metadatas_offset?: InputMaybe<Scalars["Int"]["input"]>;
    token_token_metadatas_search?: InputMaybe<Scalars["String"]["input"]>;
    token_token_metadatas_show_volume?: InputMaybe<Scalars["Boolean"]["input"]>;
    token_token_metadatas_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
}>>;
export declare function useCodegenGeneratedTokenTokenMetadatasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenTokenMetadatasQuery, Exact<{
    token_token_metadatas_chain_uids?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_metadatas_dex?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
    token_token_metadatas_limit?: InputMaybe<Scalars["Int"]["input"]>;
    token_token_metadatas_offset?: InputMaybe<Scalars["Int"]["input"]>;
    token_token_metadatas_search?: InputMaybe<Scalars["String"]["input"]>;
    token_token_metadatas_show_volume?: InputMaybe<Scalars["Boolean"]["input"]>;
    token_token_metadatas_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
}>>;
export type CodegenGeneratedTokenTokenMetadatasQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadatasQuery>;
export type CodegenGeneratedTokenTokenMetadatasLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokenMetadatasLazyQuery>;
export type CodegenGeneratedTokenTokenMetadatasQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokenMetadatasQuery, ICodegenGeneratedTokenTokenMetadatasQueryVariables>;
export declare function refetchCodegenGeneratedTokenTokenMetadatasQuery(variables?: ICodegenGeneratedTokenTokenMetadatasQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_token_metadatas_chain_uids?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
        token_token_metadatas_dex?: InputMaybe<Array<Scalars["String"]["input"]> | Scalars["String"]["input"]>;
        token_token_metadatas_limit?: InputMaybe<Scalars["Int"]["input"]>;
        token_token_metadatas_offset?: InputMaybe<Scalars["Int"]["input"]>;
        token_token_metadatas_search?: InputMaybe<Scalars["String"]["input"]>;
        token_token_metadatas_show_volume?: InputMaybe<Scalars["Boolean"]["input"]>;
        token_token_metadatas_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedTokenTokensMetadataDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenTokensMetadataQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenTokensMetadataQuery, Exact<{
    token_tokens_metadata_token_ids: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
    token_tokens_metadata_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
}>>;
export declare function useCodegenGeneratedTokenTokensMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenTokensMetadataQuery, Exact<{
    token_tokens_metadata_token_ids: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
    token_tokens_metadata_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
}>>;
export type CodegenGeneratedTokenTokensMetadataQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokensMetadataQuery>;
export type CodegenGeneratedTokenTokensMetadataLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenTokensMetadataLazyQuery>;
export type CodegenGeneratedTokenTokensMetadataQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenTokensMetadataQuery, ICodegenGeneratedTokenTokensMetadataQueryVariables>;
export declare function refetchCodegenGeneratedTokenTokensMetadataQuery(variables: ICodegenGeneratedTokenTokensMetadataQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        token_tokens_metadata_token_ids: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
        token_tokens_metadata_verified?: InputMaybe<Scalars["Boolean"]["input"]>;
    }>;
};
export declare const CodegenGeneratedTokenDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedTokenQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>): Apollo.QueryResult<ICodegenGeneratedTokenQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedTokenQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedTokenQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenQuery>;
export type CodegenGeneratedTokenLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedTokenLazyQuery>;
export type CodegenGeneratedTokenQueryResult = Apollo.QueryResult<ICodegenGeneratedTokenQuery, ICodegenGeneratedTokenQueryVariables>;
export declare function refetchCodegenGeneratedTokenQuery(variables?: ICodegenGeneratedTokenQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedVcoinBalanceDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVcoinBalanceQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVcoinBalanceQuery, Exact<{
    vcoin_balance_balance_key?: InputMaybe<IBalanceKeyInput>;
}>>;
export declare function useCodegenGeneratedVcoinBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVcoinBalanceQuery, Exact<{
    vcoin_balance_balance_key?: InputMaybe<IBalanceKeyInput>;
}>>;
export type CodegenGeneratedVcoinBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinBalanceQuery>;
export type CodegenGeneratedVcoinBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinBalanceLazyQuery>;
export type CodegenGeneratedVcoinBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinBalanceQuery, ICodegenGeneratedVcoinBalanceQueryVariables>;
export declare function refetchCodegenGeneratedVcoinBalanceQuery(variables?: ICodegenGeneratedVcoinBalanceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        vcoin_balance_balance_key?: InputMaybe<IBalanceKeyInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVcoinStateDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVcoinStateQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVcoinStateQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedVcoinStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVcoinStateQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedVcoinStateQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinStateQuery>;
export type CodegenGeneratedVcoinStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinStateLazyQuery>;
export type CodegenGeneratedVcoinStateQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinStateQuery, ICodegenGeneratedVcoinStateQueryVariables>;
export declare function refetchCodegenGeneratedVcoinStateQuery(variables?: ICodegenGeneratedVcoinStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedVcoinUserBalanceBalancesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVcoinUserBalanceBalancesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVcoinUserBalanceBalancesQuery, Exact<{
    vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>>;
export declare function useCodegenGeneratedVcoinUserBalanceBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVcoinUserBalanceBalancesQuery, Exact<{
    vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>>;
export type CodegenGeneratedVcoinUserBalanceBalancesQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceBalancesQuery>;
export type CodegenGeneratedVcoinUserBalanceBalancesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceBalancesLazyQuery>;
export type CodegenGeneratedVcoinUserBalanceBalancesQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinUserBalanceBalancesQuery, ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables>;
export declare function refetchCodegenGeneratedVcoinUserBalanceBalancesQuery(variables?: ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVcoinUserBalanceDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVcoinUserBalanceQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVcoinUserBalanceQuery, Exact<{
    vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>>;
export declare function useCodegenGeneratedVcoinUserBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVcoinUserBalanceQuery, Exact<{
    vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
}>>;
export type CodegenGeneratedVcoinUserBalanceQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceQuery>;
export type CodegenGeneratedVcoinUserBalanceLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinUserBalanceLazyQuery>;
export type CodegenGeneratedVcoinUserBalanceQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinUserBalanceQuery, ICodegenGeneratedVcoinUserBalanceQueryVariables>;
export declare function refetchCodegenGeneratedVcoinUserBalanceQuery(variables?: ICodegenGeneratedVcoinUserBalanceQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        vcoin_user_balance_user?: InputMaybe<ICrossChainUserInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVcoinDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVcoinQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVcoinQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCodegenGeneratedVcoinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVcoinQuery, Exact<{
    [key: string]: never;
}>>;
export type CodegenGeneratedVcoinQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinQuery>;
export type CodegenGeneratedVcoinLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVcoinLazyQuery>;
export type CodegenGeneratedVcoinQueryResult = Apollo.QueryResult<ICodegenGeneratedVcoinQuery, ICodegenGeneratedVcoinQueryVariables>;
export declare function refetchCodegenGeneratedVcoinQuery(variables?: ICodegenGeneratedVcoinQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        [key: string]: never;
    }> | undefined;
};
export declare const CodegenGeneratedVlpAllPoolsPaginationDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpAllPoolsPaginationQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPaginationQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedVlpAllPoolsPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpAllPoolsPaginationQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedVlpAllPoolsPaginationQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPaginationQuery>;
export type CodegenGeneratedVlpAllPoolsPaginationLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPaginationLazyQuery>;
export type CodegenGeneratedVlpAllPoolsPaginationQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPaginationQuery, ICodegenGeneratedVlpAllPoolsPaginationQueryVariables>;
export declare function refetchCodegenGeneratedVlpAllPoolsPaginationQuery(variables?: ICodegenGeneratedVlpAllPoolsPaginationQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
        vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpAllPoolsPoolsPoolDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpAllPoolsPoolsPoolQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedVlpAllPoolsPoolsPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedVlpAllPoolsPoolsPoolQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsPoolQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsPoolLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsPoolLazyQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsPoolQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery, ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables>;
export declare function refetchCodegenGeneratedVlpAllPoolsPoolsPoolQuery(variables?: ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
        vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpAllPoolsPoolsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpAllPoolsPoolsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPoolsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedVlpAllPoolsPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpAllPoolsPoolsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedVlpAllPoolsPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsPoolsLazyQuery>;
export type CodegenGeneratedVlpAllPoolsPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsPoolsQuery, ICodegenGeneratedVlpAllPoolsPoolsQueryVariables>;
export declare function refetchCodegenGeneratedVlpAllPoolsPoolsQuery(variables?: ICodegenGeneratedVlpAllPoolsPoolsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
        vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpAllPoolsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpAllPoolsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export declare function useCodegenGeneratedVlpAllPoolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpAllPoolsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
    vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
}>>;
export type CodegenGeneratedVlpAllPoolsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsQuery>;
export type CodegenGeneratedVlpAllPoolsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpAllPoolsLazyQuery>;
export type CodegenGeneratedVlpAllPoolsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpAllPoolsQuery, ICodegenGeneratedVlpAllPoolsQueryVariables>;
export declare function refetchCodegenGeneratedVlpAllPoolsQuery(variables?: ICodegenGeneratedVlpAllPoolsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
        vlp_all_pools_limit?: InputMaybe<Scalars["Int"]["input"]>;
        vlp_all_pools_offset?: InputMaybe<Scalars["Int"]["input"]>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpFeeRecipientDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpFeeRecipientQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpFeeRecipientQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpFeeRecipientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpFeeRecipientQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpFeeRecipientQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeRecipientQuery>;
export type CodegenGeneratedVlpFeeRecipientLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeRecipientLazyQuery>;
export type CodegenGeneratedVlpFeeRecipientQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpFeeRecipientQuery, ICodegenGeneratedVlpFeeRecipientQueryVariables>;
export declare function refetchCodegenGeneratedVlpFeeRecipientQuery(variables?: ICodegenGeneratedVlpFeeRecipientQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpFeeDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpFeeQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpFeeQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpFeeQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpFeeQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeQuery>;
export type CodegenGeneratedVlpFeeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpFeeLazyQuery>;
export type CodegenGeneratedVlpFeeQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpFeeQuery, ICodegenGeneratedVlpFeeQueryVariables>;
export declare function refetchCodegenGeneratedVlpFeeQuery(variables?: ICodegenGeneratedVlpFeeQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpLiquidityPairDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpLiquidityPairQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpLiquidityPairQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpLiquidityPairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpLiquidityPairQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpLiquidityPairQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityPairQuery>;
export type CodegenGeneratedVlpLiquidityPairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityPairLazyQuery>;
export type CodegenGeneratedVlpLiquidityPairQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpLiquidityPairQuery, ICodegenGeneratedVlpLiquidityPairQueryVariables>;
export declare function refetchCodegenGeneratedVlpLiquidityPairQuery(variables?: ICodegenGeneratedVlpLiquidityPairQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpLiquidityDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpLiquidityQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpLiquidityQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpLiquidityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpLiquidityQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpLiquidityQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityQuery>;
export type CodegenGeneratedVlpLiquidityLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLiquidityLazyQuery>;
export type CodegenGeneratedVlpLiquidityQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpLiquidityQuery, ICodegenGeneratedVlpLiquidityQueryVariables>;
export declare function refetchCodegenGeneratedVlpLiquidityQuery(variables?: ICodegenGeneratedVlpLiquidityQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpPoolDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpPoolQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpPoolQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_pool_chain_uid: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedVlpPoolLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpPoolQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_pool_chain_uid: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedVlpPoolQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpPoolQuery>;
export type CodegenGeneratedVlpPoolLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpPoolLazyQuery>;
export type CodegenGeneratedVlpPoolQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpPoolQuery, ICodegenGeneratedVlpPoolQueryVariables>;
export declare function refetchCodegenGeneratedVlpPoolQuery(variables: ICodegenGeneratedVlpPoolQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
        vlp_pool_chain_uid: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedVlpStateFeeRecipientDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpStateFeeRecipientQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpStateFeeRecipientQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpStateFeeRecipientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpStateFeeRecipientQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpStateFeeRecipientQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeRecipientQuery>;
export type CodegenGeneratedVlpStateFeeRecipientLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeRecipientLazyQuery>;
export type CodegenGeneratedVlpStateFeeRecipientQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStateFeeRecipientQuery, ICodegenGeneratedVlpStateFeeRecipientQueryVariables>;
export declare function refetchCodegenGeneratedVlpStateFeeRecipientQuery(variables?: ICodegenGeneratedVlpStateFeeRecipientQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpStateFeeDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpStateFeeQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpStateFeeQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpStateFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpStateFeeQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpStateFeeQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeQuery>;
export type CodegenGeneratedVlpStateFeeLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateFeeLazyQuery>;
export type CodegenGeneratedVlpStateFeeQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStateFeeQuery, ICodegenGeneratedVlpStateFeeQueryVariables>;
export declare function refetchCodegenGeneratedVlpStateFeeQuery(variables?: ICodegenGeneratedVlpStateFeeQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpStatePairDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpStatePairQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpStatePairQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpStatePairLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpStatePairQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpStatePairQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePairQuery>;
export type CodegenGeneratedVlpStatePairLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePairLazyQuery>;
export type CodegenGeneratedVlpStatePairQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStatePairQuery, ICodegenGeneratedVlpStatePairQueryVariables>;
export declare function refetchCodegenGeneratedVlpStatePairQuery(variables?: ICodegenGeneratedVlpStatePairQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpStatePoolConfigStableDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpStatePoolConfigStableQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpStatePoolConfigStableQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpStatePoolConfigStableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpStatePoolConfigStableQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpStatePoolConfigStableQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigStableQuery>;
export type CodegenGeneratedVlpStatePoolConfigStableLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigStableLazyQuery>;
export type CodegenGeneratedVlpStatePoolConfigStableQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStatePoolConfigStableQuery, ICodegenGeneratedVlpStatePoolConfigStableQueryVariables>;
export declare function refetchCodegenGeneratedVlpStatePoolConfigStableQuery(variables?: ICodegenGeneratedVlpStatePoolConfigStableQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpStatePoolConfigDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpStatePoolConfigQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpStatePoolConfigQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpStatePoolConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpStatePoolConfigQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpStatePoolConfigQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigQuery>;
export type CodegenGeneratedVlpStatePoolConfigLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStatePoolConfigLazyQuery>;
export type CodegenGeneratedVlpStatePoolConfigQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStatePoolConfigQuery, ICodegenGeneratedVlpStatePoolConfigQueryVariables>;
export declare function refetchCodegenGeneratedVlpStatePoolConfigQuery(variables?: ICodegenGeneratedVlpStatePoolConfigQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpStateDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpStateQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpStateQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpStateQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpStateQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateQuery>;
export type CodegenGeneratedVlpStateLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpStateLazyQuery>;
export type CodegenGeneratedVlpStateQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpStateQuery, ICodegenGeneratedVlpStateQueryVariables>;
export declare function refetchCodegenGeneratedVlpStateQuery(variables?: ICodegenGeneratedVlpStateQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables>;
export declare function refetchCodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedEuclidFeesLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables>;
export declare function refetchCodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables>;
export declare function refetchCodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpTotalFeesCollectedLpFeesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLpFeesLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLpFeesQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery, ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables>;
export declare function refetchCodegenGeneratedVlpTotalFeesCollectedLpFeesQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpTotalFeesCollectedDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpTotalFeesCollectedQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpTotalFeesCollectedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpTotalFeesCollectedQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpTotalFeesCollectedQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedQuery, ICodegenGeneratedVlpTotalFeesCollectedQueryVariables>;
export declare function refetchCodegenGeneratedVlpTotalFeesCollectedQuery(variables?: ICodegenGeneratedVlpTotalFeesCollectedQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
export declare const CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery(baseOptions: Apollo.QueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_total_fees_collected_per_denom_denom: Scalars["String"]["input"];
}>>;
export declare function useCodegenGeneratedVlpTotalFeesCollectedPerDenomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
    vlp_total_fees_collected_per_denom_denom: Scalars["String"]["input"];
}>>;
export type CodegenGeneratedVlpTotalFeesCollectedPerDenomQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedPerDenomLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpTotalFeesCollectedPerDenomLazyQuery>;
export type CodegenGeneratedVlpTotalFeesCollectedPerDenomQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery, ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables>;
export declare function refetchCodegenGeneratedVlpTotalFeesCollectedPerDenomQuery(variables: ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
        vlp_total_fees_collected_per_denom_denom: Scalars["String"]["input"];
    }>;
};
export declare const CodegenGeneratedVlpDocument: Apollo.DocumentNode;
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
export declare function useCodegenGeneratedVlpQuery(baseOptions?: Apollo.QueryHookOptions<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>): Apollo.QueryResult<ICodegenGeneratedVlpQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export declare function useCodegenGeneratedVlpLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>): Apollo.LazyQueryResultTuple<ICodegenGeneratedVlpQuery, Exact<{
    contract?: InputMaybe<Scalars["String"]["input"]>;
    pair?: InputMaybe<IPairInput>;
}>>;
export type CodegenGeneratedVlpQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpQuery>;
export type CodegenGeneratedVlpLazyQueryHookResult = ReturnType<typeof useCodegenGeneratedVlpLazyQuery>;
export type CodegenGeneratedVlpQueryResult = Apollo.QueryResult<ICodegenGeneratedVlpQuery, ICodegenGeneratedVlpQueryVariables>;
export declare function refetchCodegenGeneratedVlpQuery(variables?: ICodegenGeneratedVlpQueryVariables): {
    query: Apollo.DocumentNode;
    variables: Exact<{
        contract?: InputMaybe<Scalars["String"]["input"]>;
        pair?: InputMaybe<IPairInput>;
    }> | undefined;
};
