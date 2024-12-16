import type { GraphQLClient } from 'graphql-request';
import type { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
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
export type IVlps = {
    vlp_address?: InputMaybe<Scalars['String']['input']>;
};
export type ICodegenGeneratedChainsAllChainsQueryVariables = Exact<{
    chains_all_chains_show_all_chains?: InputMaybe<Scalars['Boolean']['input']>;
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
                chain_uid: string;
            };
        }>;
    };
};
export type ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables = Exact<{
    pool_token_pair_with_liquidity_limit?: InputMaybe<Scalars['Int']['input']>;
    pool_token_pair_with_liquidity_offset?: InputMaybe<Scalars['Int']['input']>;
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
            dex_name: string;
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
    token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
    token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedTokenTokenDenomsDenomsQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_denoms: {
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
        };
    };
};
export type ICodegenGeneratedTokenTokenDenomsQueryVariables = Exact<{
    token_token_denoms_denom?: InputMaybe<Scalars['String']['input']>;
    token_token_denoms_token_id?: InputMaybe<Scalars['String']['input']>;
}>;
export type ICodegenGeneratedTokenTokenDenomsQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_denoms: {
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
        };
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
            coinDecimal: number;
            description: string;
            dex: Array<string>;
            displayName: string;
            image: string;
            price: string;
            tokenId: string;
        };
    };
};
export type ICodegenGeneratedTokenTokenMetadatasQueryVariables = Exact<{
    token_token_metadatas_dex?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
    token_token_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
    token_token_metadatas_offset?: InputMaybe<Scalars['Int']['input']>;
    token_token_metadatas_verified?: InputMaybe<Scalars['Boolean']['input']>;
}>;
export type ICodegenGeneratedTokenTokenMetadatasQuery = {
    __typename?: 'Query';
    token: {
        __typename?: 'TokenQueries';
        token_metadatas: Array<{
            __typename?: 'Metadata';
            coinDecimal: number;
            description: string;
            dex: Array<string>;
            displayName: string;
            image: string;
            price: string;
            tokenId: string;
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
                chain_uid: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpFeeQueryVariables = Exact<{
    contract: Scalars['String']['input'];
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
                chain_uid: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpLiquidityPairQueryVariables = Exact<{
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
                    chain_uid: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedVlpStateFeeQueryVariables = Exact<{
    contract: Scalars['String']['input'];
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
                    chain_uid: string;
                };
            };
        };
    };
};
export type ICodegenGeneratedVlpStatePairQueryVariables = Exact<{
    contract: Scalars['String']['input'];
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
export type ICodegenGeneratedVlpStateQueryVariables = Exact<{
    contract: Scalars['String']['input'];
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
                    chain_uid: string;
                };
            };
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
            };
        };
    };
};
export type ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables = Exact<{
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
    contract: Scalars['String']['input'];
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
                    chain_uid: string;
                };
            };
            pair: {
                __typename?: 'Pair';
                token_1: string;
                token_2: string;
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
export declare const CodegenGeneratedChainsAllChainsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsChainConfigDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsContractsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigBech32ConfigDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigBip44Document: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigCurrenciesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigGaspricestepDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigStakecurrencyDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsKeplrConfigDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsRouterConfigDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedChainsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedCwBalanceDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedCwTokenInfoDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedCwDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedCwMulticallRawQueriesResultsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedCwMulticallRawQueriesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedCwMulticallSmartQueriesResultsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedCwMulticallSmartQueriesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryAllPoolsPaginationDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryAllPoolsPoolsPairDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryAllPoolsPoolsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryAllPoolsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryAllTokensPaginationDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryAllTokensDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryAllowedDenomsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryEscrowDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryGetLptokenAddressDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryPartnerFeesCollectedDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryStateDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryVlpDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedFactoryDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolFeesCollectedBreakdownDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolFeesCollectedDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolMyPoolsPairDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolMyPoolsUserDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolMyPoolsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolTokenPairWithLiquidityDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolVolumeDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedPoolDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterAllChainsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterAllEscrowsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterAllTokensDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterAllVlpsVlpsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterAllVlpsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterChainChainChainTypeIbcDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterChainChainChainTypeDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterChainChainDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterChainDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterEscrowsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterSimulateReleaseEscrowDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterSimulateSwapDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterStateDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterTokenDenomsDenomsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterTokenDenomsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterTokenPairsFromVlpDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterVlpDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedRouterDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenDexMetadataDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenGetAllFaucetsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenTokenDenomsDenomsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenTokenDenomsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenTokenLiquiditiesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenTokenLiquidityDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenTokenMetadataByIdDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenTokenMetadatasDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedTokenDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVcoinBalanceDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVcoinStateDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVcoinUserBalanceBalancesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVcoinUserBalanceDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVcoinDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpAllPoolsPaginationDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpAllPoolsPoolsPoolDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpAllPoolsPoolsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpAllPoolsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpFeeRecipientDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpFeeDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpLiquidityPairDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpLiquidityDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpPoolDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpStateFeeRecipientDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpStateFeeDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpStatePairDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpStateDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpTotalFeesCollectedDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument: import("graphql").DocumentNode;
export declare const CodegenGeneratedVlpDocument: import("graphql").DocumentNode;
export type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    CODEGEN_GENERATED_CHAINS_ALL_CHAINS(variables?: ICodegenGeneratedChainsAllChainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsAllChainsQuery>;
    CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG(variables?: ICodegenGeneratedChainsChainConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsChainConfigQuery>;
    CODEGEN_GENERATED_CHAINS_CONTRACTS(variables?: ICodegenGeneratedChainsContractsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsContractsQuery>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BECH32CONFIG(variables?: ICodegenGeneratedChainsKeplrConfigBech32ConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigBech32ConfigQuery>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BIP44(variables?: ICodegenGeneratedChainsKeplrConfigBip44QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigBip44Query>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_CURRENCIES(variables?: ICodegenGeneratedChainsKeplrConfigCurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigCurrenciesQuery>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES_GASPRICESTEP(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepQuery>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES(variables?: ICodegenGeneratedChainsKeplrConfigFeecurrenciesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigFeecurrenciesQuery>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_GASPRICESTEP(variables?: ICodegenGeneratedChainsKeplrConfigGaspricestepQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigGaspricestepQuery>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_STAKECURRENCY(variables?: ICodegenGeneratedChainsKeplrConfigStakecurrencyQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigStakecurrencyQuery>;
    CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG(variables?: ICodegenGeneratedChainsKeplrConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsKeplrConfigQuery>;
    CODEGEN_GENERATED_CHAINS_ROUTER_CONFIG(variables?: ICodegenGeneratedChainsRouterConfigQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsRouterConfigQuery>;
    CODEGEN_GENERATED_CHAINS(variables?: ICodegenGeneratedChainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedChainsQuery>;
    CODEGEN_GENERATED_CW_BALANCE(variables: ICodegenGeneratedCwBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwBalanceQuery>;
    CODEGEN_GENERATED_CW_TOKEN_INFO(variables: ICodegenGeneratedCwTokenInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwTokenInfoQuery>;
    CODEGEN_GENERATED_CW(variables: ICodegenGeneratedCwQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwQuery>;
    CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES_RESULTS(variables: ICodegenGeneratedCwMulticallRawQueriesResultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallRawQueriesResultsQuery>;
    CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES(variables: ICodegenGeneratedCwMulticallRawQueriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallRawQueriesQuery>;
    CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES_RESULTS(variables: ICodegenGeneratedCwMulticallSmartQueriesResultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallSmartQueriesResultsQuery>;
    CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES(variables: ICodegenGeneratedCwMulticallSmartQueriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedCwMulticallSmartQueriesQuery>;
    CODEGEN_GENERATED_FACTORY_ALL_POOLS_PAGINATION(variables: ICodegenGeneratedFactoryAllPoolsPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsPaginationQuery>;
    CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS_PAIR(variables: ICodegenGeneratedFactoryAllPoolsPoolsPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsPoolsPairQuery>;
    CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS(variables: ICodegenGeneratedFactoryAllPoolsPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsPoolsQuery>;
    CODEGEN_GENERATED_FACTORY_ALL_POOLS(variables: ICodegenGeneratedFactoryAllPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllPoolsQuery>;
    CODEGEN_GENERATED_FACTORY_ALL_TOKENS_PAGINATION(variables: ICodegenGeneratedFactoryAllTokensPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllTokensPaginationQuery>;
    CODEGEN_GENERATED_FACTORY_ALL_TOKENS(variables: ICodegenGeneratedFactoryAllTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllTokensQuery>;
    CODEGEN_GENERATED_FACTORY_ALLOWED_DENOMS(variables: ICodegenGeneratedFactoryAllowedDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryAllowedDenomsQuery>;
    CODEGEN_GENERATED_FACTORY_ESCROW(variables: ICodegenGeneratedFactoryEscrowQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryEscrowQuery>;
    CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS(variables: ICodegenGeneratedFactoryGetLptokenAddressQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryGetLptokenAddressQuery>;
    CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL_TOTALS(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsQuery>;
    CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL(variables: ICodegenGeneratedFactoryPartnerFeesCollectedTotalQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryPartnerFeesCollectedTotalQuery>;
    CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED(variables: ICodegenGeneratedFactoryPartnerFeesCollectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryPartnerFeesCollectedQuery>;
    CODEGEN_GENERATED_FACTORY_STATE(variables: ICodegenGeneratedFactoryStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryStateQuery>;
    CODEGEN_GENERATED_FACTORY_VLP(variables: ICodegenGeneratedFactoryVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryVlpQuery>;
    CODEGEN_GENERATED_FACTORY(variables: ICodegenGeneratedFactoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedFactoryQuery>;
    CODEGEN_GENERATED_POOL_FEES_COLLECTED_BREAKDOWN(variables?: ICodegenGeneratedPoolFeesCollectedBreakdownQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolFeesCollectedBreakdownQuery>;
    CODEGEN_GENERATED_POOL_FEES_COLLECTED(variables?: ICodegenGeneratedPoolFeesCollectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolFeesCollectedQuery>;
    CODEGEN_GENERATED_POOL_MY_POOLS_PAIR(variables: ICodegenGeneratedPoolMyPoolsPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolMyPoolsPairQuery>;
    CODEGEN_GENERATED_POOL_MY_POOLS_USER(variables: ICodegenGeneratedPoolMyPoolsUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolMyPoolsUserQuery>;
    CODEGEN_GENERATED_POOL_MY_POOLS(variables: ICodegenGeneratedPoolMyPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolMyPoolsQuery>;
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityPaginationQuery>;
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityResultsPairQuery>;
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityResultsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityResultsQuery>;
    CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY(variables?: ICodegenGeneratedPoolTokenPairWithLiquidityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolTokenPairWithLiquidityQuery>;
    CODEGEN_GENERATED_POOL_VOLUME_VOLUME_BREAKDOWN_24HOURS(variables?: ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolVolumeVolumeBreakdown_24HoursQuery>;
    CODEGEN_GENERATED_POOL_VOLUME(variables?: ICodegenGeneratedPoolVolumeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolVolumeQuery>;
    CODEGEN_GENERATED_POOL(variables?: ICodegenGeneratedPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedPoolQuery>;
    CODEGEN_GENERATED_ROUTER_ALL_CHAINS(variables?: ICodegenGeneratedRouterAllChainsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllChainsQuery>;
    CODEGEN_GENERATED_ROUTER_ALL_ESCROWS(variables?: ICodegenGeneratedRouterAllEscrowsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllEscrowsQuery>;
    CODEGEN_GENERATED_ROUTER_ALL_TOKENS(variables?: ICodegenGeneratedRouterAllTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllTokensQuery>;
    CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS(variables?: ICodegenGeneratedRouterAllVlpsVlpsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsVlpsQuery>;
    CODEGEN_GENERATED_ROUTER_ALL_VLPS(variables?: ICodegenGeneratedRouterAllVlpsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterAllVlpsQuery>;
    CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE_IBC(variables: ICodegenGeneratedRouterChainChainChainTypeIbcQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainChainChainTypeIbcQuery>;
    CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE(variables: ICodegenGeneratedRouterChainChainChainTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainChainChainTypeQuery>;
    CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN(variables: ICodegenGeneratedRouterChainChainQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainChainQuery>;
    CODEGEN_GENERATED_ROUTER_CHAIN(variables: ICodegenGeneratedRouterChainQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterChainQuery>;
    CODEGEN_GENERATED_ROUTER_ESCROWS(variables: ICodegenGeneratedRouterEscrowsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterEscrowsQuery>;
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER_USER(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserQuery>;
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserQuery>;
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS(variables: ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsQuery>;
    CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW(variables: ICodegenGeneratedRouterSimulateReleaseEscrowQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateReleaseEscrowQuery>;
    CODEGEN_GENERATED_ROUTER_SIMULATE_SWAP(variables: ICodegenGeneratedRouterSimulateSwapQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterSimulateSwapQuery>;
    CODEGEN_GENERATED_ROUTER_STATE(variables?: ICodegenGeneratedRouterStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterStateQuery>;
    CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS_DENOMS(variables: ICodegenGeneratedRouterTokenDenomsDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenDenomsDenomsQuery>;
    CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS(variables: ICodegenGeneratedRouterTokenDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenDenomsQuery>;
    CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP(variables: ICodegenGeneratedRouterTokenPairsFromVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterTokenPairsFromVlpQuery>;
    CODEGEN_GENERATED_ROUTER_VLP(variables?: ICodegenGeneratedRouterVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterVlpQuery>;
    CODEGEN_GENERATED_ROUTER(variables?: ICodegenGeneratedRouterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedRouterQuery>;
    CODEGEN_GENERATED_TOKEN_DEX_METADATA(variables: ICodegenGeneratedTokenDexMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenDexMetadataQuery>;
    CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS(variables?: ICodegenGeneratedTokenGetAllFaucetsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenGetAllFaucetsQuery>;
    CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS_DENOMS(variables?: ICodegenGeneratedTokenTokenDenomsDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenDenomsDenomsQuery>;
    CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS(variables?: ICodegenGeneratedTokenTokenDenomsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenDenomsQuery>;
    CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITIES(variables: ICodegenGeneratedTokenTokenLiquiditiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenLiquiditiesQuery>;
    CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITY(variables: ICodegenGeneratedTokenTokenLiquidityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenLiquidityQuery>;
    CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID(variables: ICodegenGeneratedTokenTokenMetadataByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenMetadataByIdQuery>;
    CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS(variables?: ICodegenGeneratedTokenTokenMetadatasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenTokenMetadatasQuery>;
    CODEGEN_GENERATED_TOKEN(variables?: ICodegenGeneratedTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedTokenQuery>;
    CODEGEN_GENERATED_VCOIN_BALANCE(variables?: ICodegenGeneratedVcoinBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinBalanceQuery>;
    CODEGEN_GENERATED_VCOIN_STATE(variables?: ICodegenGeneratedVcoinStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinStateQuery>;
    CODEGEN_GENERATED_VCOIN_USER_BALANCE_BALANCES(variables?: ICodegenGeneratedVcoinUserBalanceBalancesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinUserBalanceBalancesQuery>;
    CODEGEN_GENERATED_VCOIN_USER_BALANCE(variables?: ICodegenGeneratedVcoinUserBalanceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinUserBalanceQuery>;
    CODEGEN_GENERATED_VCOIN(variables?: ICodegenGeneratedVcoinQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVcoinQuery>;
    CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION(variables: ICodegenGeneratedVlpAllPoolsPaginationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPaginationQuery>;
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL(variables: ICodegenGeneratedVlpAllPoolsPoolsPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsPoolQuery>;
    CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS(variables: ICodegenGeneratedVlpAllPoolsPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsPoolsQuery>;
    CODEGEN_GENERATED_VLP_ALL_POOLS(variables: ICodegenGeneratedVlpAllPoolsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpAllPoolsQuery>;
    CODEGEN_GENERATED_VLP_FEE_RECIPIENT(variables: ICodegenGeneratedVlpFeeRecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpFeeRecipientQuery>;
    CODEGEN_GENERATED_VLP_FEE(variables: ICodegenGeneratedVlpFeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpFeeQuery>;
    CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR(variables: ICodegenGeneratedVlpLiquidityPairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpLiquidityPairQuery>;
    CODEGEN_GENERATED_VLP_LIQUIDITY(variables: ICodegenGeneratedVlpLiquidityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpLiquidityQuery>;
    CODEGEN_GENERATED_VLP_POOL(variables: ICodegenGeneratedVlpPoolQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpPoolQuery>;
    CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT(variables: ICodegenGeneratedVlpStateFeeRecipientQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateFeeRecipientQuery>;
    CODEGEN_GENERATED_VLP_STATE_FEE(variables: ICodegenGeneratedVlpStateFeeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateFeeQuery>;
    CODEGEN_GENERATED_VLP_STATE_PAIR(variables: ICodegenGeneratedVlpStatePairQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStatePairQuery>;
    CODEGEN_GENERATED_VLP_STATE(variables: ICodegenGeneratedVlpStateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpStateQuery>;
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS(variables: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsQuery>;
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES(variables: ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedEuclidFeesQuery>;
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS(variables: ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsQuery>;
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES(variables: ICodegenGeneratedVlpTotalFeesCollectedLpFeesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedLpFeesQuery>;
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED(variables: ICodegenGeneratedVlpTotalFeesCollectedQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedQuery>;
    CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM(variables: ICodegenGeneratedVlpTotalFeesCollectedPerDenomQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpTotalFeesCollectedPerDenomQuery>;
    CODEGEN_GENERATED_VLP(variables: ICodegenGeneratedVlpQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ICodegenGeneratedVlpQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
