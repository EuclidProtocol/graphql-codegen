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
export type IAllEscrowsResponse = {
    __typename?: 'AllEscrowsResponse';
    balance: Scalars['String']['output'];
    chain_uid: Scalars['String']['output'];
    token: Scalars['String']['output'];
};
export type IAllPoolsResponse = {
    __typename?: 'AllPoolsResponse';
    pagination: Maybe<IPaginationInfo>;
    pools: Maybe<Array<Maybe<IPairsInPool>>>;
};
export type IAllTokens = {
    __typename?: 'AllTokens';
    pagination: Maybe<IPaginationInfo>;
    tokens: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type IAllVlps = {
    __typename?: 'AllVlps';
    vlps: Array<Maybe<IVlpWithTokenPair>>;
};
export type IBalance = {
    __typename?: 'Balance';
    balance: Scalars['String']['output'];
};
export type IBalanceKey = {
    __typename?: 'BalanceKey';
    address: Maybe<Scalars['String']['output']>;
    chain_id: Maybe<Scalars['String']['output']>;
    token_id: Maybe<Scalars['String']['output']>;
};
export type IBalanceKeyInput = {
    cross_chain_user?: InputMaybe<ICrossChainUserInput>;
    token_id?: InputMaybe<Scalars['String']['input']>;
};
export type IBech32Config = {
    __typename?: 'Bech32Config';
    bech32PrefixAccAddr: Maybe<Scalars['String']['output']>;
    bech32PrefixAccPub: Maybe<Scalars['String']['output']>;
    bech32PrefixConsAddr: Maybe<Scalars['String']['output']>;
    bech32PrefixConsPub: Maybe<Scalars['String']['output']>;
    bech32PrefixValAddr: Maybe<Scalars['String']['output']>;
    bech32PrefixValPub: Maybe<Scalars['String']['output']>;
};
export type IBip44 = {
    __typename?: 'Bip44';
    coinType: Maybe<Scalars['Int']['output']>;
};
export type IChain = {
    __typename?: 'Chain';
    chain_id: Scalars['String']['output'];
    chain_uid: Scalars['String']['output'];
    factory_address: Scalars['String']['output'];
};
export type IChainAndFactoryInfo = {
    __typename?: 'ChainAndFactoryInfo';
    chain_type: Maybe<IChainType>;
    factory: Maybe<Scalars['String']['output']>;
    factory_chain_id: Maybe<Scalars['String']['output']>;
};
export type IChainConfig = {
    __typename?: 'ChainConfig';
    chain_id: Scalars['String']['output'];
    chain_uid: Scalars['String']['output'];
    display_name: Scalars['String']['output'];
    explorer_url: Scalars['String']['output'];
    factory_address: Scalars['String']['output'];
    logo: Scalars['String']['output'];
    token_factory_address: Maybe<Scalars['String']['output']>;
    type: Scalars['String']['output'];
};
export type IChainDetail = {
    __typename?: 'ChainDetail';
    factory: Maybe<Scalars['String']['output']>;
    factory_chain_id: Maybe<Scalars['String']['output']>;
    from_factory_channel: Maybe<Scalars['String']['output']>;
    from_hub_channel: Maybe<Scalars['String']['output']>;
};
export type IChainResponse = {
    __typename?: 'ChainResponse';
    chain: Maybe<IChainAndFactoryInfo>;
    chain_uid: Maybe<Scalars['String']['output']>;
};
export type IChainType = {
    __typename?: 'ChainType';
    ibc: Maybe<IIbc>;
};
export type IChains = {
    __typename?: 'Chains';
    all_chains: Array<IChainConfig>;
    all_evm_chains: Array<IEvmChainConfig>;
    chain_config: Maybe<IChainConfig>;
    contracts: Array<IContract>;
    evm_chain_config: Maybe<IEvmChainConfig>;
    keplr_config: Maybe<IKeplr>;
    router_config: Maybe<IRouterConfig>;
};
export type IChainsAllChainsArgs = {
    show_all_chains?: InputMaybe<Scalars['Boolean']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
};
export type IChainsChainConfigArgs = {
    chain_id?: InputMaybe<Scalars['String']['input']>;
    chain_uid?: InputMaybe<Scalars['String']['input']>;
};
export type IChainsContractsArgs = {
    chainUId?: InputMaybe<Scalars['String']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
};
export type IChainsEvmChainConfigArgs = {
    chain_id?: InputMaybe<Scalars['String']['input']>;
    chain_uid?: InputMaybe<Scalars['String']['input']>;
};
export type IChainsKeplrConfigArgs = {
    chain_id?: InputMaybe<Scalars['String']['input']>;
    chain_uid?: InputMaybe<Scalars['String']['input']>;
};
export type IChainsResponse = {
    __typename?: 'ChainsResponse';
    chains: Array<Maybe<IChain>>;
};
export type IClaimQueries = {
    __typename?: 'ClaimQueries';
    claim: Maybe<IClaimerResponse>;
    claims_by_claimer_pub_Key: Array<Maybe<IClaimerResponse>>;
    claims_by_email: Array<Maybe<IClaimerResponse>>;
    sender_claims: Array<Maybe<IClaimerResponse>>;
    state: Maybe<IClaimState>;
    user_claims: Array<Maybe<IClaimerResponse>>;
};
export type IClaimQueriesClaimArgs = {
    claim_id: Scalars['Int']['input'];
};
export type IClaimQueriesClaimsByClaimerPubKeyArgs = {
    claimer_pub_key: Scalars['String']['input'];
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type IClaimQueriesClaimsByEmailArgs = {
    email: Scalars['String']['input'];
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type IClaimQueriesSenderClaimsArgs = {
    limit: Scalars['Int']['input'];
    offset: Scalars['Int']['input'];
    sender: ICrossChainUserInput;
};
export type IClaimQueriesUserClaimsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    public_secret: Scalars['String']['input'];
};
export type IClaimState = {
    __typename?: 'ClaimState';
    admin: Scalars['String']['output'];
    chain_uid: Scalars['String']['output'];
    factory_address: Scalars['String']['output'];
    vcoin_address: Scalars['String']['output'];
};
export type IClaimerResponse = {
    __typename?: 'ClaimerResponse';
    amount: Scalars['String']['output'];
    claim_group_id: Scalars['String']['output'];
    claim_id: Scalars['String']['output'];
    claimer: Scalars['String']['output'];
    pseudo_claim_id: Scalars['String']['output'];
    sender: ICrossChainUser;
    token: Scalars['String']['output'];
};
export type IContract = {
    __typename?: 'Contract';
    ChainUID: Maybe<Scalars['String']['output']>;
    ContractAddress: Maybe<Scalars['String']['output']>;
    Type: Maybe<Scalars['String']['output']>;
};
export type IContractStateOfFactory = {
    __typename?: 'ContractStateOfFactory';
    admin: Maybe<Scalars['String']['output']>;
    chain_uid: Maybe<Scalars['String']['output']>;
    hub_channel: Maybe<Scalars['String']['output']>;
    router_contract: Maybe<Scalars['String']['output']>;
};
export type IContractStateOfRouter = {
    __typename?: 'ContractStateOfRouter';
    admin: Maybe<Scalars['String']['output']>;
    virtual_balance_address: Maybe<Scalars['String']['output']>;
    vlp_code_id: Maybe<Scalars['Int']['output']>;
};
export type IContractStateOfVcoin = {
    __typename?: 'ContractStateOfVcoin';
    admin: Maybe<Scalars['String']['output']>;
    router: Maybe<Scalars['String']['output']>;
};
export type IContractStateOfVlp = {
    __typename?: 'ContractStateOfVlp';
    admin: Maybe<Scalars['String']['output']>;
    fee: Maybe<IFeeInfo>;
    last_updated: Maybe<Scalars['Int']['output']>;
    pair: Maybe<IPair>;
    pool_config: Maybe<IPoolConfig>;
    router: Maybe<Scalars['String']['output']>;
    total_lp_tokens: Maybe<Scalars['String']['output']>;
    vcoin: Maybe<Scalars['String']['output']>;
};
export type ICrossChainUser = {
    __typename?: 'CrossChainUser';
    address: Maybe<Scalars['String']['output']>;
    chain_uid: Maybe<Scalars['String']['output']>;
};
export type ICrossChainUserInput = {
    address?: InputMaybe<Scalars['String']['input']>;
    chain_uid?: InputMaybe<Scalars['String']['input']>;
};
export type ICrossChainUserWithLimit = {
    __typename?: 'CrossChainUserWithLimit';
    limit: Maybe<Scalars['String']['output']>;
    user: ICrossChainUser;
};
export type ICrossChainUserWithLimitInput = {
    limit?: InputMaybe<Scalars['String']['input']>;
    user: ICrossChainUserInput;
};
export type ICurrencies = {
    __typename?: 'Currencies';
    coinDecimals: Maybe<Scalars['Int']['output']>;
    coinDenom: Maybe<Scalars['String']['output']>;
    coinGeckoID: Maybe<Scalars['String']['output']>;
    coinMinimalDenom: Maybe<Scalars['String']['output']>;
};
export type ICw = {
    __typename?: 'Cw';
    balance: Maybe<IBalance>;
    token_info: Maybe<ITokenInfo>;
};
export type ICwBalanceArgs = {
    address: Scalars['String']['input'];
};
export type IDenomFees = {
    __typename?: 'DenomFees';
    totals: Array<IDenomination>;
};
export type IDenomination = {
    __typename?: 'Denomination';
    amount: Scalars['String']['output'];
    denom: Scalars['String']['output'];
};
export type IDexMetadata = {
    __typename?: 'DexMetadata';
    bg_color: Scalars['String']['output'];
    chain_uid: Scalars['String']['output'];
    dex_name: Scalars['String']['output'];
    display_name: Scalars['String']['output'];
    fg_color: Scalars['String']['output'];
    logo: Scalars['String']['output'];
};
export type IEvmChainConfig = {
    __typename?: 'EVMChainConfig';
    chain_id: Maybe<Scalars['String']['output']>;
    chain_uid: Maybe<Scalars['String']['output']>;
    explorer_url: Maybe<Scalars['String']['output']>;
    name: Scalars['String']['output'];
    native_currency: INativeCurrency;
    rpc_urls: IRpcUrls;
};
export type IEscrow = {
    __typename?: 'Escrow';
    balance: Scalars['String']['output'];
    chain_id: Scalars['String']['output'];
    chain_uid: Scalars['String']['output'];
};
export type IEscrowResponse = {
    __typename?: 'EscrowResponse';
    denoms: Array<Maybe<ITokenType>>;
    escrow_address: Scalars['String']['output'];
};
export type IFactory = {
    __typename?: 'Factory';
    all_pools: Maybe<IAllPoolsResponse>;
    all_tokens: Maybe<IAllTokens>;
    allowed_denoms: Maybe<Array<Maybe<ITokenType>>>;
    escrow: Maybe<IEscrowResponse>;
    get_LpToken_address: Maybe<ILpTokenAddr>;
    partner_fees_collected: Maybe<IPartnerFeesCollected>;
    state: Maybe<IContractStateOfFactory>;
    vlp: Maybe<Scalars['String']['output']>;
};
export type IFactoryAllPoolsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type IFactoryAllTokensArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type IFactoryAllowedDenomsArgs = {
    token_id?: InputMaybe<Scalars['String']['input']>;
};
export type IFactoryEscrowArgs = {
    token_id?: InputMaybe<Scalars['String']['input']>;
};
export type IFactoryGetLpTokenAddressArgs = {
    vlp_address: Scalars['String']['input'];
};
export type IFactoryVlpArgs = {
    pair?: InputMaybe<IPairInput>;
};
export type IFaucet = {
    __typename?: 'Faucet';
    faucet_link: Maybe<Scalars['String']['output']>;
    token: Maybe<Scalars['String']['output']>;
};
export type IFeeBreakdown = {
    __typename?: 'FeeBreakdown';
    token1: Scalars['String']['output'];
    token2: Scalars['String']['output'];
    total_fee: Scalars['Float']['output'];
};
export type IFeeCurrencies = {
    __typename?: 'FeeCurrencies';
    coinDecimals: Maybe<Scalars['Int']['output']>;
    coinDenom: Maybe<Scalars['String']['output']>;
    coinGeckoID: Maybe<Scalars['String']['output']>;
    coinMinimalDenom: Maybe<Scalars['String']['output']>;
    gasPriceStep: IGasPriceStep;
};
export type IFeeInfo = {
    __typename?: 'FeeInfo';
    euclid_fee_bps: Maybe<Scalars['Int']['output']>;
    lp_fee_bps: Maybe<Scalars['Int']['output']>;
    recipient: Maybe<ICrossChainUser>;
};
export type IFeesResponse = {
    __typename?: 'FeesResponse';
    breakdown: Array<IFeeBreakdown>;
    total_overall: Scalars['Float']['output'];
};
export type IGasPriceStep = {
    __typename?: 'GasPriceStep';
    average: Maybe<Scalars['Float']['output']>;
    high: Maybe<Scalars['Float']['output']>;
    low: Maybe<Scalars['Float']['output']>;
};
export type IIbc = {
    __typename?: 'Ibc';
    from_factory_channel: Maybe<Scalars['String']['output']>;
    from_hub_channel: Maybe<Scalars['String']['output']>;
};
export type IKeplr = {
    __typename?: 'Keplr';
    bech32Config: Maybe<IBech32Config>;
    bip44: Maybe<IBip44>;
    chainID: Maybe<Scalars['String']['output']>;
    chainName: Maybe<Scalars['String']['output']>;
    coinType: Maybe<Scalars['Int']['output']>;
    currencies: Array<Maybe<ICurrencies>>;
    explorer_url: Maybe<Scalars['String']['output']>;
    features: Array<Maybe<Scalars['String']['output']>>;
    feeCurrencies: Array<Maybe<IFeeCurrencies>>;
    gasPriceStep: IGasPriceStep;
    rest: Maybe<Scalars['String']['output']>;
    rpc: Maybe<Scalars['String']['output']>;
    stakeCurrency: IStakeCurrency;
};
export type ILiquidity = {
    __typename?: 'Liquidity';
    pair: Maybe<IPair>;
    token_1_reserve: Maybe<Scalars['String']['output']>;
    token_2_reserve: Maybe<Scalars['String']['output']>;
    total_lp_tokens: Maybe<Scalars['String']['output']>;
};
export type ILiquidityDb = {
    __typename?: 'LiquidityDB';
    token_1_liquidity: Maybe<Scalars['Int']['output']>;
    token_2_liquidity: Maybe<Scalars['Int']['output']>;
};
export type ILpTokenAddr = {
    __typename?: 'LpTokenAddr';
    token_address: Scalars['String']['output'];
};
export type IMetadata = {
    __typename?: 'Metadata';
    chain_uids: Maybe<Array<Scalars['String']['output']>>;
    coinDecimal: Scalars['Int']['output'];
    description: Scalars['String']['output'];
    dex: Maybe<Array<Scalars['String']['output']>>;
    displayName: Scalars['String']['output'];
    image: Scalars['String']['output'];
    is_verified: Scalars['Boolean']['output'];
    min_swap_value: Scalars['Float']['output'];
    price: Scalars['String']['output'];
    price_change_7d: Scalars['Float']['output'];
    price_change_24h: Scalars['Float']['output'];
    social: Scalars['JSON']['output'];
    tags: Maybe<Array<Scalars['String']['output']>>;
    tokenId: Scalars['String']['output'];
    total_volume: Scalars['Float']['output'];
    total_volume_24h: Scalars['Float']['output'];
};
export type IMultiQuery = {
    __typename?: 'MultiQuery';
    raw_queries: IRawQueryResponse;
    smart_queries: IRawQueryResponse;
};
export type IMultiQueryRawQueriesArgs = {
    queries: Array<IRawQueryInput>;
};
export type IMultiQuerySmartQueriesArgs = {
    queries: Array<ISmartQueryInput>;
};
export type IMyPools = {
    __typename?: 'MyPools';
    height: Maybe<Scalars['String']['output']>;
    pair: Maybe<IPair>;
    user: Maybe<ICrossChainUser>;
    vlp: Maybe<Scalars['String']['output']>;
};
export type INative = {
    __typename?: 'Native';
    denom: Maybe<Scalars['String']['output']>;
};
export type INativeCurrency = {
    __typename?: 'NativeCurrency';
    decimals: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    symbol: Scalars['String']['output'];
};
export type INativeToken = {
    __typename?: 'NativeToken';
    denom: Scalars['String']['output'];
};
export type INativeTokenType = {
    __typename?: 'NativeTokenType';
    native: Maybe<INativeToken>;
};
export type INextSwapPair = {
    token_in: Scalars['String']['input'];
    token_out: Scalars['String']['input'];
};
export type IPaginationInfo = {
    __typename?: 'PaginationInfo';
    limit: Maybe<Scalars['Int']['output']>;
    offset: Maybe<Scalars['Int']['output']>;
    total_count: Maybe<Scalars['Int']['output']>;
};
export type IPair = {
    __typename?: 'Pair';
    token_1: Maybe<Scalars['String']['output']>;
    token_2: Maybe<Scalars['String']['output']>;
};
export type IPairInput = {
    token_1?: InputMaybe<Scalars['String']['input']>;
    token_2?: InputMaybe<Scalars['String']['input']>;
};
export type IPairsInPool = {
    __typename?: 'PairsInPool';
    pair: Maybe<IPair>;
    vlp: Maybe<Scalars['String']['output']>;
};
export type IPartnerFeesCollected = {
    __typename?: 'PartnerFeesCollected';
    total: Maybe<IDenomFees>;
};
export type IPool = {
    __typename?: 'Pool';
    lp_shares: Maybe<Scalars['String']['output']>;
    reserve_1: Maybe<Scalars['String']['output']>;
    reserve_2: Maybe<Scalars['String']['output']>;
};
export type IPoolConfig = {
    __typename?: 'PoolConfig';
    constant_product: Maybe<Scalars['JSON']['output']>;
    stable: Maybe<IStablePoolConfig>;
};
export type IPoolQueries = {
    __typename?: 'PoolQueries';
    fees_collected: Maybe<IFeesResponse>;
    my_pools: Array<IMyPools>;
    token_pair_with_liquidity: ITokenPairWithLiquidityPaginated;
    volume: Maybe<IVolumeResponse>;
};
export type IPoolQueriesMyPoolsArgs = {
    chain_uid?: InputMaybe<Scalars['String']['input']>;
    user_address: Scalars['String']['input'];
};
export type IPoolQueriesTokenPairWithLiquidityArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    only_show_verified?: InputMaybe<Scalars['Boolean']['input']>;
    sort_by?: InputMaybe<ITokenPairSortBy>;
    sort_order?: InputMaybe<ISortOrder>;
    token?: InputMaybe<Scalars['String']['input']>;
};
export type IPools = {
    __typename?: 'Pools';
    chain_uid: Maybe<Scalars['String']['output']>;
    pool: Maybe<IPool>;
};
export type IPoolsResponse = {
    __typename?: 'PoolsResponse';
    pagination: Maybe<IPaginationInfo>;
    pools: Array<Maybe<IPools>>;
};
export type IQuery = {
    __typename?: 'Query';
    chains: Maybe<IChains>;
    claim: Maybe<IClaimQueries>;
    cw: Maybe<ICw>;
    cw_multicall: Maybe<IMultiQuery>;
    factory: Maybe<IFactory>;
    pool: Maybe<IPoolQueries>;
    router: Maybe<IRouter>;
    token: Maybe<ITokenQueries>;
    vcoin: Maybe<IVcoin>;
    vlp: Maybe<IVlp>;
};
export type IQueryCwArgs = {
    chain_uid: Scalars['String']['input'];
    contract: Scalars['String']['input'];
};
export type IQueryCwMulticallArgs = {
    chain_uid: Scalars['String']['input'];
};
export type IQueryFactoryArgs = {
    chain_uid: Scalars['String']['input'];
};
export type IQueryVlpArgs = {
    contract?: InputMaybe<Scalars['String']['input']>;
    pair?: InputMaybe<IPairInput>;
};
export type IRpcConfig = {
    __typename?: 'RPCConfig';
    http: Array<Scalars['String']['output']>;
};
export type IRpcUrls = {
    __typename?: 'RPCUrls';
    default: IRpcConfig;
};
export type IRawQueryInput = {
    rawQuery: Scalars['JSON']['input'];
};
export type IRawQueryResponse = {
    __typename?: 'RawQueryResponse';
    results: Array<Maybe<IResultAndError>>;
};
export type IReleaseAmounts = {
    __typename?: 'ReleaseAmounts';
    amount: Maybe<Scalars['String']['output']>;
    cross_chain_user: Maybe<ICrossChainUserWithLimit>;
};
export type IResultAndError = {
    __typename?: 'ResultAndError';
    error: Maybe<Scalars['String']['output']>;
    success: Maybe<Scalars['JSON']['output']>;
};
export type IRouter = {
    __typename?: 'Router';
    all_chains: Array<IChain>;
    all_escrows: Array<IAllEscrowsResponse>;
    all_tokens: Maybe<ITokenArray>;
    all_vlps: Maybe<IAllVlps>;
    chain: Maybe<IChainResponse>;
    escrows: Array<IEscrow>;
    simulate_release_escrow: Maybe<ISimulateReleaseEscrow>;
    simulate_swap: Maybe<ITokenOut>;
    state: Maybe<IContractStateOfRouter>;
    token_denoms: ITokenDenomsResponse;
    token_pairs_from_vlp: Maybe<IVlpWithTokenPair>;
    vlp: Maybe<IVlpWithTokenPair>;
};
export type IRouterAllEscrowsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    max?: InputMaybe<Scalars['String']['input']>;
    min?: InputMaybe<Scalars['String']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};
export type IRouterAllTokensArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    max?: InputMaybe<Scalars['String']['input']>;
    min?: InputMaybe<Scalars['String']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};
export type IRouterAllVlpsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    max?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    min?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    skip?: InputMaybe<Scalars['Int']['input']>;
};
export type IRouterChainArgs = {
    chain_uid: Scalars['String']['input'];
};
export type IRouterEscrowsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    max?: InputMaybe<Scalars['String']['input']>;
    min?: InputMaybe<Scalars['String']['input']>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    token: Scalars['String']['input'];
};
export type IRouterSimulateReleaseEscrowArgs = {
    amount?: InputMaybe<Scalars['Int']['input']>;
    cross_chain_addresses?: InputMaybe<Array<InputMaybe<ICrossChainUserWithLimitInput>>>;
    token: Scalars['String']['input'];
};
export type IRouterSimulateSwapArgs = {
    amount_in: Scalars['String']['input'];
    asset_in: Scalars['String']['input'];
    asset_out: Scalars['String']['input'];
    min_amount_out: Scalars['String']['input'];
    swaps?: InputMaybe<Array<Scalars['String']['input']>>;
};
export type IRouterTokenDenomsArgs = {
    token: Scalars['String']['input'];
};
export type IRouterTokenPairsFromVlpArgs = {
    vlp: Scalars['String']['input'];
};
export type IRouterVlpArgs = {
    pair?: InputMaybe<IPairInput>;
};
export type IRouterConfig = {
    __typename?: 'RouterConfig';
    chain_uid: Maybe<Scalars['String']['output']>;
    contract_address: Maybe<Scalars['String']['output']>;
    explorer_url: Scalars['String']['output'];
    logo: Maybe<Scalars['String']['output']>;
    type: Maybe<Scalars['String']['output']>;
};
export type ISimulateReleaseEscrow = {
    __typename?: 'SimulateReleaseEscrow';
    release_amounts: Array<Maybe<IReleaseAmounts>>;
    remaining_amount: Maybe<Scalars['String']['output']>;
};
export type ISmartQueryInput = {
    contract_address: Scalars['String']['input'];
    msg: Scalars['JSON']['input'];
};
export type ISmartToken = {
    __typename?: 'SmartToken';
    contract_address: Scalars['String']['output'];
};
export type ISmartTokenType = {
    __typename?: 'SmartTokenType';
    smart: Maybe<ISmartToken>;
};
export declare enum ISortOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export type IStablePoolConfig = {
    __typename?: 'StablePoolConfig';
    amp_factor: Maybe<Scalars['String']['output']>;
};
export type IStakeCurrency = {
    __typename?: 'StakeCurrency';
    coinDecimals: Scalars['Int']['output'];
    coinDenom: Scalars['String']['output'];
    coinGeckoID: Scalars['String']['output'];
    coinMinimalDenom: Scalars['String']['output'];
};
export type ITokenArray = {
    __typename?: 'TokenArray';
    tokens: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type ITokenDenom = {
    __typename?: 'TokenDenom';
    chain_uid: Scalars['String']['output'];
    token_type: ITokenType;
};
export type ITokenDenomWithTokenIdResponse = {
    __typename?: 'TokenDenomWithTokenIdResponse';
    denoms: Array<Maybe<ITokenDenom>>;
    token_id: Scalars['String']['output'];
};
export type ITokenDenomsResponse = {
    __typename?: 'TokenDenomsResponse';
    denoms: Maybe<Array<Maybe<ITokenDenom>>>;
};
export type ITokenId = {
    __typename?: 'TokenId';
    id: Maybe<Scalars['String']['output']>;
};
export type ITokenInfo = {
    __typename?: 'TokenInfo';
    decimals: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    symbol: Scalars['String']['output'];
    total_supply: Scalars['String']['output'];
};
export type ITokenLiquidity = {
    __typename?: 'TokenLiquidity';
    token: Scalars['String']['output'];
    total_liquidity: Scalars['String']['output'];
    total_volume: Scalars['String']['output'];
};
export type ITokenOut = {
    __typename?: 'TokenOut';
    amount_out: Maybe<Scalars['String']['output']>;
    asset_out: Maybe<Scalars['String']['output']>;
};
export declare enum ITokenPairSortBy {
    CREATED_AT = "CREATED_AT",
    TOTAL_LIQUIDITY = "TOTAL_LIQUIDITY"
}
export type ITokenPairWithLiquidityPaginated = {
    __typename?: 'TokenPairWithLiquidityPaginated';
    pagination: Maybe<IPaginationInfo>;
    results: Maybe<Array<Maybe<ITokenPairWithLiquidityResponse>>>;
};
export type ITokenPairWithLiquidityResponse = {
    __typename?: 'TokenPairWithLiquidityResponse';
    apr: Scalars['String']['output'];
    created_at: Scalars['String']['output'];
    pair: IPair;
    tags: Array<Scalars['String']['output']>;
    total_liquidity: Scalars['String']['output'];
    vlp: Scalars['String']['output'];
};
export type ITokenQueries = {
    __typename?: 'TokenQueries';
    all_dexes: Array<IDexMetadata>;
    chains_for_token_launch: Maybe<Array<Maybe<IChainConfig>>>;
    dex_metadata: IDexMetadata;
    get_all_faucets: Array<IFaucet>;
    token_denoms: Array<ITokenDenomWithTokenIdResponse>;
    token_liquidities: Array<ITokenLiquidity>;
    token_liquidity: Maybe<ITokenLiquidity>;
    token_metadata_by_id: IMetadata;
    token_metadatas: Array<Maybe<IMetadata>>;
    tokens_metadata: Array<IMetadata>;
};
export type ITokenQueriesAllDexesArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type ITokenQueriesDexMetadataArgs = {
    dex: Scalars['String']['input'];
};
export type ITokenQueriesTokenDenomsArgs = {
    chain_uid?: InputMaybe<Array<Scalars['String']['input']>>;
    denom?: InputMaybe<Scalars['String']['input']>;
    token_id?: InputMaybe<Scalars['String']['input']>;
};
export type ITokenQueriesTokenLiquiditiesArgs = {
    limit: Scalars['Int']['input'];
    page: Scalars['Int']['input'];
};
export type ITokenQueriesTokenLiquidityArgs = {
    token: Scalars['String']['input'];
};
export type ITokenQueriesTokenMetadataByIdArgs = {
    token_id: Scalars['String']['input'];
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ITokenQueriesTokenMetadatasArgs = {
    chain_uids?: InputMaybe<Array<Scalars['String']['input']>>;
    dex?: InputMaybe<Array<Scalars['String']['input']>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
    search?: InputMaybe<Scalars['String']['input']>;
    show_volume?: InputMaybe<Scalars['Boolean']['input']>;
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ITokenQueriesTokensMetadataArgs = {
    token_ids: Array<Scalars['String']['input']>;
    verified?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ITokenType = INativeTokenType | ISmartTokenType | IVoucherTokenType;
export type ITotalFeesCollected = {
    __typename?: 'TotalFeesCollected';
    euclid_fees: IDenomFees;
    lp_fees: IDenomFees;
};
export type ITotalFeesPerDenomResponse = {
    __typename?: 'TotalFeesPerDenomResponse';
    euclid_fees: Scalars['String']['output'];
    lp_fees: Scalars['String']['output'];
};
export type IVcoin = {
    __typename?: 'Vcoin';
    balance: Maybe<IVcoinBalance>;
    state: Maybe<IContractStateOfVcoin>;
    user_balance: Maybe<IVcoinBalanceResponse>;
};
export type IVcoinBalanceArgs = {
    balance_key?: InputMaybe<IBalanceKeyInput>;
};
export type IVcoinUserBalanceArgs = {
    user?: InputMaybe<ICrossChainUserInput>;
};
export type IVcoinBalance = {
    __typename?: 'VcoinBalance';
    amount: Maybe<Scalars['String']['output']>;
};
export type IVcoinBalanceResponse = {
    __typename?: 'VcoinBalanceResponse';
    balances: Array<Maybe<IVcoinBalanceUserResponse>>;
};
export type IVcoinBalanceUserResponse = {
    __typename?: 'VcoinBalanceUserResponse';
    amount: Maybe<Scalars['String']['output']>;
    token_id: Maybe<Scalars['String']['output']>;
};
export type IVlp = {
    __typename?: 'Vlp';
    all_pools: Maybe<IPoolsResponse>;
    fee: Maybe<IFeeInfo>;
    liquidity: Maybe<ILiquidity>;
    pool: Maybe<IPool>;
    state: Maybe<IContractStateOfVlp>;
    total_fees_collected: Maybe<ITotalFeesCollected>;
    total_fees_collected_per_denom: Maybe<ITotalFeesPerDenomResponse>;
};
export type IVlpAllPoolsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type IVlpPoolArgs = {
    chain_uid: Scalars['String']['input'];
};
export type IVlpTotalFeesCollectedPerDenomArgs = {
    denom: Scalars['String']['input'];
};
export type IVlpWithTokenPair = {
    __typename?: 'VlpWithTokenPair';
    token_1: Maybe<Scalars['String']['output']>;
    token_2: Maybe<Scalars['String']['output']>;
    vlp: Maybe<Scalars['String']['output']>;
};
export type IVlps = {
    vlp_address?: InputMaybe<Scalars['String']['input']>;
};
export type IVolumeBreakdown = {
    __typename?: 'VolumeBreakdown';
    pair: Scalars['String']['output'];
    volume: Scalars['String']['output'];
};
export type IVolumeResponse = {
    __typename?: 'VolumeResponse';
    total_liquidity: Scalars['String']['output'];
    total_volume: Scalars['String']['output'];
    volume_24hours: Scalars['String']['output'];
    volume_breakdown_24hours: Array<IVolumeBreakdown>;
};
export type IVoucherTokenType = {
    __typename?: 'VoucherTokenType';
    voucher: Scalars['JSON']['output'];
};
