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
export type IAllEscrowsResponse = INode & {
    __typename?: 'AllEscrowsResponse';
    /** The current amount of tokens held in the escrow. */
    balance: Scalars['String']['output'];
    /** The UID of the chain that hosts the escrow. */
    chain_uid: Scalars['String']['output'];
    /** Globally unique identifier: AllEscrowsResponse:{chain_uid}:{token} */
    id: Scalars['ID']['output'];
    /** The token Id for the token stored in the escrow. */
    token: Scalars['String']['output'];
};
export type IAllPoolsResponse = INode & {
    __typename?: 'AllPoolsResponse';
    /** Globally unique identifier: AllPoolsResponse:singleton */
    id: Scalars['ID']['output'];
    pagination: Maybe<IPaginationInfo>;
    pools: Maybe<Array<Maybe<IPairsInPool>>>;
};
export type IAllTokens = INode & {
    __typename?: 'AllTokens';
    /** Globally unique identifier: AllTokens:singleton */
    id: Scalars['ID']['output'];
    pagination: Maybe<IPaginationInfo>;
    /** The list of tokens. */
    tokens: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type IAllVlps = INode & {
    __typename?: 'AllVlps';
    /** Globally unique identifier: AllVlps:singleton */
    id: Scalars['ID']['output'];
    /** Array of VLPs */
    vlps: Array<Maybe<IVlpWithTokenPair>>;
};
export type IBalance = INode & {
    __typename?: 'Balance';
    balance: Scalars['String']['output'];
    /** Globally unique identifier: Balance:singleton */
    id: Scalars['ID']['output'];
};
export type IBalanceKey = INode & {
    __typename?: 'BalanceKey';
    address: Maybe<Scalars['String']['output']>;
    chain_id: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: BalanceKey:{chain_id}:{address}:{token_id} */
    id: Scalars['ID']['output'];
    token_id: Maybe<Scalars['String']['output']>;
};
export type IBalanceKeyInput = {
    /** Address and Chain UID of the user */
    cross_chain_user?: InputMaybe<ICrossChainUserInput>;
    /** Token ID of the token */
    token_id?: InputMaybe<Scalars['String']['input']>;
};
export type IBech32Config = INode & {
    __typename?: 'Bech32Config';
    bech32PrefixAccAddr: Maybe<Scalars['String']['output']>;
    bech32PrefixAccPub: Maybe<Scalars['String']['output']>;
    bech32PrefixConsAddr: Maybe<Scalars['String']['output']>;
    bech32PrefixConsPub: Maybe<Scalars['String']['output']>;
    bech32PrefixValAddr: Maybe<Scalars['String']['output']>;
    bech32PrefixValPub: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: Bech32Config:{bech32PrefixAccAddr} */
    id: Scalars['ID']['output'];
};
export type IBip44 = INode & {
    __typename?: 'Bip44';
    coinType: Maybe<Scalars['Int']['output']>;
    /** Globally unique identifier: Bip44:{coinType} */
    id: Scalars['ID']['output'];
};
export type IChain = INode & {
    __typename?: 'Chain';
    /** The chain Id of the above chain UID. */
    chain_id: Scalars['String']['output'];
    /** The chain UID we have queried. */
    chain_uid: Scalars['String']['output'];
    /** The contract address of factory. */
    factory_address: Scalars['String']['output'];
    /** Globally unique identifier: Chain:{chain_uid} */
    id: Scalars['ID']['output'];
};
export type IChainAndFactoryInfo = INode & {
    __typename?: 'ChainAndFactoryInfo';
    /** IBC information used by the chain (Cosmos Chains Only). */
    chain_type: Maybe<IChainType>;
    /** The contract address of the factory. */
    factory: Maybe<Scalars['String']['output']>;
    /** The chain Id of the config used by the factory. */
    factory_chain_id: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: ChainAndFactoryInfo:{factory_chain_id} */
    id: Scalars['ID']['output'];
};
export type IChainConfig = INode & {
    __typename?: 'ChainConfig';
    /** The chain ID used in the protocol. */
    chain_id: Scalars['String']['output'];
    /** The unique identifier (UID) of the chain. */
    chain_uid: Scalars['String']['output'];
    /** A user-friendly name for the chain. */
    display_name: Scalars['String']['output'];
    /** A URL to the block explorer for this chain. */
    explorer_url: Scalars['String']['output'];
    /** The contract address of the main factory on that chain. */
    factory_address: Scalars['String']['output'];
    /** Globally unique identifier: ChainConfig:{chain_uid} */
    id: Scalars['ID']['output'];
    /** The logo URL or path used in the UI. */
    logo: Scalars['String']['output'];
    /** The contract address for the token factory on this chain. */
    token_factory_address: Maybe<Scalars['String']['output']>;
    /** The ecosystem the chain belongs to such as 'EVM' or 'Cosmwasm'. */
    type: Scalars['String']['output'];
};
export type IChainDetail = INode & {
    __typename?: 'ChainDetail';
    factory: Maybe<Scalars['String']['output']>;
    factory_chain_id: Maybe<Scalars['String']['output']>;
    from_factory_channel: Maybe<Scalars['String']['output']>;
    from_hub_channel: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: ChainDetail:{factory_chain_id} */
    id: Scalars['ID']['output'];
};
export type IChainResponse = INode & {
    __typename?: 'ChainResponse';
    /** Detailed information about the chain. */
    chain: Maybe<IChainAndFactoryInfo>;
    /** The unique identifier (UID) of the chain. */
    chain_uid: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: ChainResponse:{chain_uid} */
    id: Scalars['ID']['output'];
};
export type IChainType = INode & {
    __typename?: 'ChainType';
    ibc: Maybe<IIbc>;
    /** Globally unique identifier: ChainType:singleton */
    id: Scalars['ID']['output'];
};
export type IChains = {
    __typename?: 'Chains';
    /** Queries information for each chain integrated with Euclid. */
    all_chains: Array<IChainConfig>;
    /** Queries information on the Keplr config for the specified chain Id and UID. */
    all_evm_chains: Array<IEvmChainConfig>;
    /** Queries information for the specified Cosmos chain. */
    chain_config: Maybe<IChainConfig>;
    /** Queries contract information for the specified chain ID and type. */
    contracts: Array<IContract>;
    /** Queries information on the Keplr config for the specified chain Id and UID. */
    evm_chain_config: Maybe<IEvmChainConfig>;
    /** Queries information on the Keplr config for the specified chain Id and UID. */
    keplr_config: Maybe<IKeplr>;
    /** Queries information on the router contract and virtual settlement layer. */
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
export type IChainsResponse = INode & {
    __typename?: 'ChainsResponse';
    chains: Array<Maybe<IChain>>;
    /** Globally unique identifier: ChainsResponse:singleton */
    id: Scalars['ID']['output'];
};
export type IClaimQueries = {
    __typename?: 'ClaimQueries';
    claim: Maybe<IClaimerResponse>;
    claim_by_psuedo_claim_id: Maybe<IClaimerResponseWithStatus>;
    claims_by_claimer_pub_Key: Array<Maybe<IClaimerResponse>>;
    claims_by_email: Array<Maybe<IClaimerResponseWithStatus>>;
    sender_claims: Array<Maybe<IClaimerResponse>>;
    state: Maybe<IClaimState>;
    user_claims: Array<Maybe<IClaimerResponse>>;
};
export type IClaimQueriesClaimArgs = {
    claim_id: Scalars['Int']['input'];
};
export type IClaimQueriesClaimByPsuedoClaimIdArgs = {
    psuedo_claim_id: Scalars['String']['input'];
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
export type IClaimState = INode & {
    __typename?: 'ClaimState';
    admin: Scalars['String']['output'];
    chain_uid: Scalars['String']['output'];
    factory_address: Scalars['String']['output'];
    /** Globally unique identifier: ClaimState:{chain_uid} */
    id: Scalars['ID']['output'];
    vcoin_address: Scalars['String']['output'];
};
export type IClaimerResponse = INode & {
    __typename?: 'ClaimerResponse';
    amount: Scalars['String']['output'];
    claim_group_id: Scalars['String']['output'];
    claim_id: Scalars['String']['output'];
    claimer: Scalars['String']['output'];
    /** Globally unique identifier: ClaimerResponse:{claim_id} */
    id: Scalars['ID']['output'];
    pseudo_claim_id: Scalars['String']['output'];
    sender: ICrossChainUser;
    status: Scalars['String']['output'];
    token: Scalars['String']['output'];
};
export type IClaimerResponseWithStatus = INode & {
    __typename?: 'ClaimerResponseWithStatus';
    amount: Scalars['String']['output'];
    claim_group_id: Scalars['String']['output'];
    claim_id: Scalars['String']['output'];
    claimer: Scalars['String']['output'];
    /** Globally unique identifier: ClaimerResponseWithStatus:{claim_id} */
    id: Scalars['ID']['output'];
    pseudo_claim_id: Scalars['String']['output'];
    sender: ICrossChainUser;
    status: Scalars['String']['output'];
    token: Scalars['String']['output'];
};
/** Parameters specific to concentrated liquidity pools. */
export type IConcentratedPoolParams = INode & {
    __typename?: 'ConcentratedPoolParams';
    /** The fee tier in basis points. */
    fee_tier_bps: Scalars['Int']['output'];
    /** Globally unique identifier: ConcentratedPoolParams:{fee_tier_bps}:{tick_spacing} */
    id: Scalars['ID']['output'];
    /** The tick spacing for the pool. */
    tick_spacing: Scalars['Int']['output'];
};
export type IConcentratedPoolParamsInput = {
    /** The fee tier in basis points. */
    fee_tier_bps: Scalars['Int']['input'];
    /** The tick spacing for the pool. */
    tick_spacing: Scalars['Int']['input'];
};
export type IContract = INode & {
    __typename?: 'Contract';
    /** The unique identifier of the chain where the contract is deployed. */
    ChainUID: Maybe<Scalars['String']['output']>;
    /** The address of the contract on the blockchain. */
    ContractAddress: Maybe<Scalars['String']['output']>;
    /** The type of the contract. */
    Type: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: Contract:{ChainUID}:{ContractAddress} */
    id: Scalars['ID']['output'];
};
export type IContractStateOfFactory = INode & {
    __typename?: 'ContractStateOfFactory';
    /** The admin address of the factory. */
    admin: Maybe<Scalars['String']['output']>;
    /** The unique identifier (UID) of the chain. */
    chain_uid: Maybe<Scalars['String']['output']>;
    /** The hub channel used by the factory. */
    hub_channel: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: ContractStateOfFactory:{chain_uid} */
    id: Scalars['ID']['output'];
    /** The address of the router contract. */
    router_contract: Maybe<Scalars['String']['output']>;
};
export type IContractStateOfRouter = INode & {
    __typename?: 'ContractStateOfRouter';
    /** The admin address of the router. */
    admin: Maybe<Scalars['String']['output']>;
    /** Code ID for concentrated VLP. */
    concentrated_vlp_code_id: Maybe<Scalars['Int']['output']>;
    /** Code ID for constant product VLP. */
    constant_product_vlp_code_id: Maybe<Scalars['Int']['output']>;
    /** Globally unique identifier: ContractStateOfRouter:singleton */
    id: Scalars['ID']['output'];
    /** Whether the router is locked. */
    locked: Maybe<Scalars['Boolean']['output']>;
    /** Code ID for stable VLP. */
    stable_vlp_code_id: Maybe<Scalars['Int']['output']>;
    /** The address of the VBalance contract. */
    virtual_balance_address: Maybe<Scalars['String']['output']>;
};
export type IContractStateOfVcoin = INode & {
    __typename?: 'ContractStateOfVcoin';
    /** The address of the admin of virtual Balance contract. */
    admin: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: ContractStateOfVcoin:singleton */
    id: Scalars['ID']['output'];
    router: Maybe<Scalars['String']['output']>;
};
export type IContractStateOfVlp = INode & {
    __typename?: 'ContractStateOfVlp';
    /** The admin address of VLP */
    admin: Maybe<Scalars['String']['output']>;
    /** The fee structure of VLP */
    fee: Maybe<IFeeInfo>;
    /** Globally unique identifier: ContractStateOfVlp:{vlp_address} */
    id: Scalars['ID']['output'];
    /** Timestamp of last update */
    last_updated: Maybe<Scalars['Int']['output']>;
    pair: Maybe<IPair>;
    /** Pool Configuration(token denoms) */
    pool_config: Maybe<IPoolConfig>;
    /** The router contract address */
    router: Maybe<Scalars['String']['output']>;
    /** Total LP tokens issued */
    total_lp_tokens: Maybe<Scalars['String']['output']>;
    /** Virtual balance token address */
    vcoin: Maybe<Scalars['String']['output']>;
};
export type ICrossChainUser = INode & {
    __typename?: 'CrossChainUser';
    address: Maybe<Scalars['String']['output']>;
    chain_uid: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: CrossChainUser:{chain_uid}:{address} */
    id: Scalars['ID']['output'];
};
export type ICrossChainUserInput = {
    address?: InputMaybe<Scalars['String']['input']>;
    chain_uid?: InputMaybe<Scalars['String']['input']>;
};
export type ICrossChainUserWithLimit = INode & {
    __typename?: 'CrossChainUserWithLimit';
    /** Globally unique identifier: CrossChainUserWithLimit:{user.address} */
    id: Scalars['ID']['output'];
    limit: Maybe<Scalars['String']['output']>;
    user: ICrossChainUser;
};
export type ICrossChainUserWithLimitInput = {
    limit?: InputMaybe<Scalars['String']['input']>;
    user: ICrossChainUserInput;
};
export type ICurrencies = INode & {
    __typename?: 'Currencies';
    coinDecimals: Maybe<Scalars['Int']['output']>;
    coinDenom: Maybe<Scalars['String']['output']>;
    coinGeckoID: Maybe<Scalars['String']['output']>;
    coinMinimalDenom: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: Currencies:{coinMinimalDenom} */
    id: Scalars['ID']['output'];
};
export type ICw = {
    __typename?: 'Cw';
    /** Queries the amount of CW20 tokens (LP tokens) held by the specified user for the specified address and chain. */
    balance: Maybe<IBalance>;
    /** Queries token information for the specified CW20 address and chain. */
    token_info: Maybe<ITokenInfo>;
};
export type ICwBalanceArgs = {
    address: Scalars['String']['input'];
};
export type IDenomFees = INode & {
    __typename?: 'DenomFees';
    /** Globally unique identifier: DenomFees:singleton */
    id: Scalars['ID']['output'];
    totals: Array<IDenomination>;
};
export type IDenomination = INode & {
    __typename?: 'Denomination';
    /** The total of fees collected for the above denomination. */
    amount: Scalars['String']['output'];
    /** The denomination of the token. */
    denom: Scalars['String']['output'];
    /** Globally unique identifier: Denomination:{denom} */
    id: Scalars['ID']['output'];
};
export type IDexMetadata = INode & {
    __typename?: 'DexMetadata';
    bg_color: Scalars['String']['output'];
    /** The chain UID associated with the DEX */
    chain_uid: Scalars['String']['output'];
    /** The name of DEX */
    dex_name: Scalars['String']['output'];
    /** The human-readable name of the DEX */
    display_name: Scalars['String']['output'];
    /** The forground color used for the DEX. */
    fg_color: Scalars['String']['output'];
    /** Globally unique identifier: DexMetadata:{dex_name} */
    id: Scalars['ID']['output'];
    /** The URL of DEX's logo image. */
    logo: Scalars['String']['output'];
};
export type IEvmChainConfig = INode & {
    __typename?: 'EVMChainConfig';
    /** The identifier of the EVM chain. */
    chain_id: Maybe<Scalars['String']['output']>;
    /** The unique UID (usually same as the name) for the chain used for integration purposes. */
    chain_uid: Maybe<Scalars['String']['output']>;
    /** The URL for the blockchain explorer associated with this chain. */
    explorer_url: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: EVMChainConfig:{chain_uid} */
    id: Scalars['ID']['output'];
    /** The common name of the chain. */
    name: Scalars['String']['output'];
    /** Details about the chain's native currency. */
    native_currency: INativeCurrency;
    /** The RPC URL configuration for connecting to the chain. */
    rpc_urls: IRpcUrls;
};
export type IEscrow = INode & {
    __typename?: 'Escrow';
    /** The current amount of tokens held in the escrow. */
    balance: Scalars['String']['output'];
    /** The Id of the chain that has an escrow for the specified token. */
    chain_id: Scalars['String']['output'];
    /** The UID of the chain that has an escrow for the specified token. */
    chain_uid: Scalars['String']['output'];
    /** Globally unique identifier: Escrow:{chain_uid}:{token} */
    id: Scalars['ID']['output'];
};
export type IEscrowResponse = INode & {
    __typename?: 'EscrowResponse';
    /** The denominations associated with the escrow. */
    denoms: Array<Maybe<ITokenType>>;
    /** The contract address of the escrow contract. */
    escrow_address: Scalars['String']['output'];
    /** Globally unique identifier: EscrowResponse:{escrow_address} */
    id: Scalars['ID']['output'];
};
export type IFactory = {
    __typename?: 'Factory';
    /** Queries all pool information associated with a specified factory for a specific chain UID. It includes details about each pool, including the token pairs involved and their respective VLP address. */
    all_pools: Maybe<IAllPoolsResponse>;
    /** Queries all tokens associated with a factory contract for a specific chain UID. */
    all_tokens: Maybe<IAllTokens>;
    /** Queries the available denominations for the specified token Id found on the specified chain. */
    allowed_denoms: Maybe<Array<Maybe<ITokenType>>>;
    /** Queries escrow information for a factory contract on a specified blockchain, including the escrow address and details about the denominations. */
    escrow: Maybe<IEscrowResponse>;
    /** Queries the contract address for the LP token of the specified VLP on the specified chain. */
    get_LpToken_address: Maybe<ILpTokenAddr>;
    /** Queries the total amount of fees collected from swaps on the specified chain. Returns fees for all denoms. */
    partner_fees_collected: Maybe<IPartnerFeesCollected>;
    /** Queries the state information of a factory contract on a specified blockchain. It includes details about the factory's ID, chain ID, router contract, hub channel, and admin. */
    state: Maybe<IContractStateOfFactory>;
    /** Queries the VLP address for a specified token pair on the specified chain. */
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
export type IFaucet = INode & {
    __typename?: 'Faucet';
    faucet_link: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: Faucet:{token} */
    id: Scalars['ID']['output'];
    token: Maybe<Scalars['String']['output']>;
};
export type IFeeBreakdown = INode & {
    __typename?: 'FeeBreakdown';
    /** Globally unique identifier: FeeBreakdown:{token1}:{token2} */
    id: Scalars['ID']['output'];
    token1: Scalars['String']['output'];
    /** The second token in the pair. */
    token2: Scalars['String']['output'];
    /** The total fee collected for this pair in USD. */
    total_fee: Scalars['Float']['output'];
};
export type IFeeCurrencies = INode & {
    __typename?: 'FeeCurrencies';
    coinDecimals: Maybe<Scalars['Int']['output']>;
    coinDenom: Maybe<Scalars['String']['output']>;
    coinGeckoID: Maybe<Scalars['String']['output']>;
    coinMinimalDenom: Maybe<Scalars['String']['output']>;
    gasPriceStep: IGasPriceStep;
    /** Globally unique identifier: FeeCurrencies:{coinMinimalDenom} */
    id: Scalars['ID']['output'];
};
export type IFeeInfo = INode & {
    __typename?: 'FeeInfo';
    euclid_fee_bps: Maybe<Scalars['Int']['output']>;
    /** Globally unique identifier: FeeInfo:{lp_fee_bps}:{euclid_fee_bps} */
    id: Scalars['ID']['output'];
    lp_fee_bps: Maybe<Scalars['Int']['output']>;
    recipient: Maybe<ICrossChainUser>;
};
export type IFeesResponse = INode & {
    __typename?: 'FeesResponse';
    /** A breakdown of the fees collected for each token pair. */
    breakdown: Array<IFeeBreakdown>;
    /** Globally unique identifier: FeesResponse:singleton */
    id: Scalars['ID']['output'];
    total_overall: Scalars['Float']['output'];
};
export type IGasPriceStep = INode & {
    __typename?: 'GasPriceStep';
    average: Maybe<Scalars['Float']['output']>;
    high: Maybe<Scalars['Float']['output']>;
    /** Globally unique identifier: GasPriceStep:{low}:{average}:{high} */
    id: Scalars['ID']['output'];
    low: Maybe<Scalars['Float']['output']>;
};
export type IIbc = INode & {
    __typename?: 'Ibc';
    /** The IBC channel from the factory to the router. */
    from_factory_channel: Maybe<Scalars['String']['output']>;
    /** The IBC channel from the router to the chain. */
    from_hub_channel: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: Ibc:{from_hub_channel} */
    id: Scalars['ID']['output'];
};
export type IKeplr = INode & {
    __typename?: 'Keplr';
    /** The bech32 configuration for the chain. */
    bech32Config: Maybe<IBech32Config>;
    /** The bip44 configuration for the chain. */
    bip44: Maybe<IBip44>;
    /** The identifier of the chain. */
    chainID: Maybe<Scalars['String']['output']>;
    /** The name of the chain. */
    chainName: Maybe<Scalars['String']['output']>;
    /** BIP44 coin type for address derivation. */
    coinType: Maybe<Scalars['Int']['output']>;
    /** The currencies supported by the chain. */
    currencies: Array<Maybe<ICurrencies>>;
    /** The URL to the blockchain explorer for config */
    explorer_url: Maybe<Scalars['String']['output']>;
    /** Indicate the features supported by this chain. Ex, cosmwasm, secretwasm ... */
    features: Array<Maybe<Scalars['String']['output']>>;
    /** The fee currencies details. */
    feeCurrencies: Array<Maybe<IFeeCurrencies>>;
    /** The gas price steps for the chain. */
    gasPriceStep: IGasPriceStep;
    /** Globally unique identifier: Keplr:{chainID} */
    id: Scalars['ID']['output'];
    /** The REST URL for the chain. */
    rest: Maybe<Scalars['String']['output']>;
    /** The RPC URL for the chain. */
    rpc: Maybe<Scalars['String']['output']>;
    /** The staking currency details. */
    stakeCurrency: IStakeCurrency;
};
export type ILiquidity = INode & {
    __typename?: 'Liquidity';
    /** Globally unique identifier: Liquidity:{token_1}:{token_2} */
    id: Scalars['ID']['output'];
    pair: Maybe<IPair>;
    token_1_reserve: Maybe<Scalars['String']['output']>;
    token_2_reserve: Maybe<Scalars['String']['output']>;
    total_lp_tokens: Maybe<Scalars['String']['output']>;
};
export type ILiquidityDb = INode & {
    __typename?: 'LiquidityDB';
    /** Globally unique identifier: LiquidityDB:singleton */
    id: Scalars['ID']['output'];
    token_1_liquidity: Maybe<Scalars['Int']['output']>;
    token_2_liquidity: Maybe<Scalars['Int']['output']>;
};
export type ILpTokenAddr = INode & {
    __typename?: 'LpTokenAddr';
    /** Globally unique identifier: LpTokenAddr:{token_address} */
    id: Scalars['ID']['output'];
    /** The contract address of the LP token for the specified VLP. */
    token_address: Scalars['String']['output'];
};
export type IMetadata = INode & {
    __typename?: 'Metadata';
    /** Types of chain the token is available on. */
    chain_type: Array<Scalars['String']['output']>;
    /** List of chain identifiers the token is available on. */
    chain_uids: Maybe<Array<Scalars['String']['output']>>;
    coinDecimal: Scalars['Int']['output'];
    /** Date of creation of token. */
    created_at: Scalars['String']['output'];
    /** Token description. */
    description: Scalars['String']['output'];
    /** List of DEXs where the token is traded. */
    dex: Maybe<Array<Scalars['String']['output']>>;
    /** Human-readable token name. */
    displayName: Scalars['String']['output'];
    /** Globally unique identifier: Metadata:{tokenId} */
    id: Scalars['ID']['output'];
    /** Image URL for the token icon. */
    image: Scalars['String']['output'];
    /** Indicates whether the price is from the oracle. */
    is_price_from_oracle: Scalars['Boolean']['output'];
    /** Indicates whether the token is verified. */
    is_verified: Scalars['Boolean']['output'];
    /** Minimum value required for swapping the token. */
    min_swap_value: Scalars['Float']['output'];
    /** The price from the oracle. */
    oracle_price: Scalars['String']['output'];
    /** Current price of the token. */
    price: Scalars['String']['output'];
    /** Percentage change in price over the last 7 days. */
    price_change_7d: Scalars['Float']['output'];
    /** Percentage change in price over the last 24 hours. */
    price_change_24h: Scalars['Float']['output'];
    /** Social metadata (e.g., links to Twitter, Discord, etc.). */
    social: Scalars['JSON']['output'];
    /** Any associated tags (e.g., 'unverified'). */
    tags: Maybe<Array<Scalars['String']['output']>>;
    /** Unique token ID used internally. */
    tokenId: Scalars['String']['output'];
    /** Total trading volume of the token. */
    total_volume: Scalars['Float']['output'];
    /** 24-hour trading volume of the token. */
    total_volume_24h: Scalars['Float']['output'];
};
/** Migration status for a concentrated liquidity pool. */
export type IMigrationStatusResponse = INode & {
    __typename?: 'MigrationStatusResponse';
    /** Currently active liquidity. */
    active_liquidity: Scalars['String']['output'];
    /** Globally unique identifier: MigrationStatusResponse:{contract} */
    id: Scalars['ID']['output'];
    /** Timestamp of migration. */
    migrated_at: Scalars['Int']['output'];
    /** Migration mode. */
    mode: Scalars['String']['output'];
    /** Number of positions migrated. */
    positions_migrated: Scalars['Int']['output'];
    /** Contract revision version. */
    revision: Scalars['Int']['output'];
    /** Source/previous version identifier. */
    source_version: Scalars['String']['output'];
    /** Total liquidity. */
    total_liquidity: Scalars['String']['output'];
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
export type IMyPools = INode & {
    __typename?: 'MyPools';
    height: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: MyPools:{vlp}:{user.address} */
    id: Scalars['ID']['output'];
    /** The pair of tokens in the pool. */
    pair: Maybe<IPair>;
    /** The user details associated with the pool. */
    user: Maybe<ICrossChainUser>;
    vlp: Maybe<Scalars['String']['output']>;
};
export type INative = INode & {
    __typename?: 'Native';
    denom: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: Native:{denom} */
    id: Scalars['ID']['output'];
};
export type INativeCurrency = INode & {
    __typename?: 'NativeCurrency';
    /** The number of decimal places for the native currency. */
    decimals: Scalars['Int']['output'];
    /** Globally unique identifier: NativeCurrency:{symbol} */
    id: Scalars['ID']['output'];
    /** The name of the native currency. */
    name: Scalars['String']['output'];
    /** The symbol of the native currency. */
    symbol: Scalars['String']['output'];
};
export type INativeToken = {
    __typename?: 'NativeToken';
    denom: Scalars['String']['output'];
};
export type INativeTokenType = {
    __typename?: 'NativeTokenType';
    /** The native token's denom. */
    native: Maybe<INativeToken>;
};
export type INextSwapPair = {
    /** Optional pool type to route through a specific pool. The pair is derived from token_in/token_out in alphabetical order. */
    pool_type?: InputMaybe<IPoolTypeInput>;
    token_in: Scalars['String']['input'];
    token_out: Scalars['String']['input'];
};
/**
 * Node interface for caching support.
 * All cacheable types should implement this interface.
 */
export type INode = {
    /**
     * Globally unique identifier for this object.
     * Format: {TypeName}:{unique_key}
     */
    id: Scalars['ID']['output'];
};
/** Time-weighted average price observation data. */
export type IObserveResponse = INode & {
    __typename?: 'ObserveResponse';
    /** Globally unique identifier: ObserveResponse:{contract} */
    id: Scalars['ID']['output'];
    /** Cumulative seconds per liquidity at each requested time (Q128.128). */
    seconds_per_liquidity_cumulative_x128s: Array<Scalars['String']['output']>;
    /** Cumulative tick values at each requested time. */
    tick_cumulatives: Array<Scalars['String']['output']>;
};
export type IPaginationInfo = INode & {
    __typename?: 'PaginationInfo';
    /** Globally unique identifier: PaginationInfo:{offset}:{limit} */
    id: Scalars['ID']['output'];
    /** The number of items returned in this page. */
    limit: Maybe<Scalars['Int']['output']>;
    /** The number of items skipped before the first item in this page. */
    offset: Maybe<Scalars['Int']['output']>;
    total_count: Maybe<Scalars['Int']['output']>;
};
export type IPair = INode & {
    __typename?: 'Pair';
    /** Globally unique identifier: Pair:{token_1}:{token_2} */
    id: Scalars['ID']['output'];
    /** The first token in the pair. */
    token_1: Maybe<Scalars['String']['output']>;
    /** The second token in the pair. */
    token_2: Maybe<Scalars['String']['output']>;
};
export type IPairInput = {
    token_1?: InputMaybe<Scalars['String']['input']>;
    token_2?: InputMaybe<Scalars['String']['input']>;
};
export type IPairsInPool = INode & {
    __typename?: 'PairsInPool';
    /** Globally unique identifier: PairsInPool:{vlp} */
    id: Scalars['ID']['output'];
    pair: Maybe<IPair>;
    /** The contract address of the VLP for the pair. */
    vlp: Maybe<Scalars['String']['output']>;
};
export type IPartnerFeesCollected = INode & {
    __typename?: 'PartnerFeesCollected';
    /** Globally unique identifier: PartnerFeesCollected:singleton */
    id: Scalars['ID']['output'];
    total: Maybe<IDenomFees>;
};
export type IPool = INode & {
    __typename?: 'Pool';
    /** Globally unique identifier: Pool:{chain_uid}:{vlp_address} */
    id: Scalars['ID']['output'];
    /** The number of liquidity provider shares */
    lp_shares: Scalars['String']['output'];
    /** Pool key for concentrated pools (pair + pool type). Null for non-concentrated pools. */
    pool_key: Maybe<IPoolKeyOutput>;
    reserve_1: Maybe<Scalars['String']['output']>;
    /** The reserve amount of the second token */
    reserve_2: Scalars['String']['output'];
};
export type IPoolConfig = INode & {
    __typename?: 'PoolConfig';
    /** Concentrated pool configuration. Set if this is a concentrated liquidity pool. */
    concentrated: Maybe<IConcentratedPoolParams>;
    constant_product: Maybe<Scalars['JSON']['output']>;
    /** Globally unique identifier: PoolConfig:singleton */
    id: Scalars['ID']['output'];
    stable: Maybe<IStablePoolConfig>;
};
/** Input for specifying a pool key (pair + pool type). */
export type IPoolKeyInput = {
    /** The token pair for the pool. */
    pair: IPairInput;
    /** The pool type. */
    pool_type: IPoolTypeInput;
};
/** Pool key output containing pair and pool type information. */
export type IPoolKeyOutput = INode & {
    __typename?: 'PoolKeyOutput';
    /** Globally unique identifier: PoolKeyOutput:{token_1}:{token_2} */
    id: Scalars['ID']['output'];
    pair: Maybe<IPair>;
    pool_type: Maybe<IPoolTypeOutput>;
};
/** Response type for VLP lookup by pool key. */
export type IPoolKeyVlpResponse = INode & {
    __typename?: 'PoolKeyVlpResponse';
    /** Globally unique identifier: PoolKeyVlpResponse:{vlp} */
    id: Scalars['ID']['output'];
    /** The pool type. */
    pool_type: Maybe<IPoolTypeOutput>;
    /** The pool key used for lookup. */
    token_1: Maybe<Scalars['String']['output']>;
    /** The second token in the pair. */
    token_2: Maybe<Scalars['String']['output']>;
    /** The VLP contract address. */
    vlp: Scalars['String']['output'];
};
export type IPoolQueries = {
    __typename?: 'PoolQueries';
    /** Queries the total amount of fees collected by Euclid pools in USD. */
    fees_collected: Maybe<IFeesResponse>;
    /** Queries information of the pools created by the specified user. */
    my_pools: Array<IMyPools>;
    /** Queries all the token pair pools, their VLP address, liquidity amount, and APR (Annual Percentage Rate). You can filter by a token ID, verified pools, and sort the results. */
    token_pair_with_liquidity: ITokenPairWithLiquidityPaginated;
    /** Queries the total and daily volume of transactions and swaps in dollars (USD) on the Eulcid layer. */
    volume: Maybe<IVolumeResponse>;
    volume_clickhouse: Maybe<IVolumeResponse>;
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
/** Input for specifying the pool type when querying. */
export type IPoolTypeInput = {
    /** Set for concentrated pool with fee_tier_bps and tick_spacing. */
    concentrated?: InputMaybe<IConcentratedPoolParamsInput>;
    /** Set to {} for constant product pool. */
    constant_product?: InputMaybe<Scalars['JSON']['input']>;
    /** Set to {} for stable pool. */
    stable?: InputMaybe<Scalars['JSON']['input']>;
};
/** The pool type for a VLP. Only one of these fields will be set. */
export type IPoolTypeOutput = INode & {
    __typename?: 'PoolTypeOutput';
    /** Set if this is a concentrated liquidity pool. */
    concentrated: Maybe<IConcentratedPoolParams>;
    /** Set if this is a constant product pool. */
    constant_product: Maybe<Scalars['JSON']['output']>;
    /** Globally unique identifier: PoolTypeOutput:singleton */
    id: Scalars['ID']['output'];
    /** Set if this is a stable pool. */
    stable: Maybe<Scalars['JSON']['output']>;
};
export type IPools = INode & {
    __typename?: 'Pools';
    chain_uid: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: Pools:{chain_uid} */
    id: Scalars['ID']['output'];
    pool: Maybe<IPool>;
};
export type IPoolsResponse = INode & {
    __typename?: 'PoolsResponse';
    /** Globally unique identifier: PoolsResponse:singleton */
    id: Scalars['ID']['output'];
    /** Pagination information for the query. */
    pagination: Maybe<IPaginationInfo>;
    pools: Array<Maybe<IPools>>;
};
/** Position data for a concentrated liquidity pool. */
export type IPositionResponse = INode & {
    __typename?: 'PositionResponse';
    /** The chain where this position exists. */
    chain_uid: Scalars['String']['output'];
    /** Fee growth inside the position for token 0 (Q128.128). */
    fee_growth_inside_0_last_x128: Scalars['String']['output'];
    /** Fee growth inside the position for token 1 (Q128.128). */
    fee_growth_inside_1_last_x128: Scalars['String']['output'];
    /** Globally unique identifier: PositionResponse:{contract}:{position_id} */
    id: Scalars['ID']['output'];
    /** The liquidity amount in this position. */
    liquidity: Scalars['String']['output'];
    /** The lower tick boundary of the position. */
    lower_tick_index: Scalars['Int']['output'];
    /** The position identifier. */
    position_id: Scalars['String']['output'];
    /** Uncollected fees in token 0. */
    tokens_owed_0: Scalars['String']['output'];
    /** Uncollected fees in token 1. */
    tokens_owed_1: Scalars['String']['output'];
    /** The upper tick boundary of the position. */
    upper_tick_index: Scalars['Int']['output'];
};
/** Protocol fees accumulated for a concentrated liquidity pool. */
export type IProtocolFeesResponse = INode & {
    __typename?: 'ProtocolFeesResponse';
    /** Protocol fees accumulated for token0. */
    amount_0: Scalars['String']['output'];
    /** Protocol fees accumulated for token1. */
    amount_1: Scalars['String']['output'];
    /** Globally unique identifier: ProtocolFeesResponse:singleton */
    id: Scalars['ID']['output'];
};
export type IQuery = {
    __typename?: 'Query';
    /** Chains queries */
    chains: Maybe<IChains>;
    /** Claim Txns related queries */
    claim: Maybe<IClaimQueries>;
    /** CW and ERC20 contracts queries */
    cw: Maybe<ICw>;
    /** Multicall queries (Cosmos only) */
    cw_multicall: Maybe<IMultiQuery>;
    /** Factory related queries */
    factory: Maybe<IFactory>;
    /** Pools related queries */
    pool: Maybe<IPoolQueries>;
    /** Router queries */
    router: Maybe<IRouter>;
    /** Token related queries */
    token: Maybe<ITokenQueries>;
    /** Voucher related queries */
    vcoin: Maybe<IVcoin>;
    /** Vlp related queries */
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
export type IRpcConfig = INode & {
    __typename?: 'RPCConfig';
    http: Array<Scalars['String']['output']>;
    /** Globally unique identifier: RPCConfig:singleton */
    id: Scalars['ID']['output'];
};
export type IRpcUrls = INode & {
    __typename?: 'RPCUrls';
    default: IRpcConfig;
    /** Globally unique identifier: RPCUrls:singleton */
    id: Scalars['ID']['output'];
};
export type IRawQueryInput = {
    rawQuery: Scalars['JSON']['input'];
};
export type IRawQueryResponse = {
    __typename?: 'RawQueryResponse';
    results: Array<Maybe<IResultAndError>>;
};
export type IReleaseAmounts = INode & {
    __typename?: 'ReleaseAmounts';
    /** The amount of tokens to release. */
    amount: Maybe<Scalars['String']['output']>;
    /** The address and limit for the receiving address of the funds. */
    cross_chain_user: Maybe<ICrossChainUserWithLimit>;
    /** Globally unique identifier: ReleaseAmounts:{amount} */
    id: Scalars['ID']['output'];
};
export type IResultAndError = {
    __typename?: 'ResultAndError';
    error: Maybe<Scalars['String']['output']>;
    success: Maybe<Scalars['JSON']['output']>;
};
export type IRouter = {
    __typename?: 'Router';
    /** Queries all chain info within the router contract. */
    all_chains: Array<IChain>;
    /** Queries all escrows for their chain UID, token, and total balance. */
    all_escrows: Array<IAllEscrowsResponse>;
    /** Queries all the tokens availabe in the Euclid layer. */
    all_tokens: Maybe<ITokenArray>;
    /** Queries all the VLP contract addresses and specifies the tokens for each. */
    all_vlps: Maybe<IAllVlps>;
    /** Queries information about a specific chain within the router contract, including details about the factory chain ID, factory address, and channels. */
    chain: Maybe<IChainResponse>;
    /** Queries the chain UID that contain an escrow with the specified token. Returns information on the escrow if found. */
    escrows: Array<IEscrow>;
    id: Scalars['ID']['output'];
    /** Simulates the release of funds from an escrow. */
    simulate_release_escrow: Maybe<ISimulateReleaseEscrow>;
    /** Simulates a swap operation and returns the amount to be received for the swap. */
    simulate_swap: Maybe<ITokenOut>;
    /** Queries state information for the router. */
    state: Maybe<IContractStateOfRouter>;
    /** Queries the token pair for the specified VLP address. */
    token_denoms: ITokenDenomsResponse;
    /** Queries the token pair for the specified VLP address. */
    token_pairs_from_vlp: Maybe<IVlpWithTokenPair>;
    /** Queries the VLP contract address for the specified token pair. */
    vlp: Maybe<IVlpWithTokenPair>;
    /**
     * Queries the VLP contract address for a specific pool key (pair + pool type).
     * Used for looking up concentrated liquidity pools by their full key.
     */
    vlp_by_pool_key: Maybe<IPoolKeyVlpResponse>;
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
    swaps?: InputMaybe<Array<INextSwapPair>>;
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
export type IRouterVlpByPoolKeyArgs = {
    pool_key: IPoolKeyInput;
};
export type IRouterConfig = INode & {
    __typename?: 'RouterConfig';
    /** The unique identifier (UID) of the chain. */
    chain_uid: Scalars['String']['output'];
    /** The address of the router contract. */
    contract_address: Scalars['String']['output'];
    /** The URL of the blockchain explorer for the VSL. */
    explorer_url: Scalars['String']['output'];
    /** Globally unique identifier: RouterConfig:{contract_address} */
    id: Scalars['ID']['output'];
    /** The URL or reference to the logo of the VSL chain. */
    logo: Maybe<Scalars['String']['output']>;
    /** The type of smart contract which is always 'router' in this query. */
    type: Maybe<Scalars['String']['output']>;
};
export type ISimulateReleaseEscrow = INode & {
    __typename?: 'SimulateReleaseEscrow';
    /** Globally unique identifier: SimulateReleaseEscrow:singleton */
    id: Scalars['ID']['output'];
    /** Array of release amounts. */
    release_amounts: Array<Maybe<IReleaseAmounts>>;
    /** Any remaining tokens after the escrow releases. */
    remaining_amount: Maybe<Scalars['String']['output']>;
};
/** Slot0 data for concentrated liquidity pools - current price, tick, and observation state. */
export type ISlot0Response = INode & {
    __typename?: 'Slot0Response';
    /** The global fee growth of token0 as a Q128.128 fixed-point number. */
    fee_growth_global_0_x128: Scalars['String']['output'];
    /** The global fee growth of token1 as a Q128.128 fixed-point number. */
    fee_growth_global_1_x128: Scalars['String']['output'];
    /** Globally unique identifier: Slot0Response:singleton */
    id: Scalars['ID']['output'];
    /** The current in-range liquidity. */
    liquidity: Scalars['String']['output'];
    /** The current maximum number of observations stored. */
    observation_cardinality: Scalars['Int']['output'];
    /** The next maximum number of observations to store. */
    observation_cardinality_next: Scalars['Int']['output'];
    /** The index of the most recently written observation. */
    observation_index: Scalars['Int']['output'];
    /** The current sqrt price as a Q64.96 fixed-point number. */
    sqrt_price_x96: Scalars['String']['output'];
    /** The current tick. */
    tick: Scalars['Int']['output'];
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
    /** The smart contract address of token. */
    smart: Maybe<ISmartToken>;
};
export declare enum ISortOrder {
    ASC = "ASC",
    DESC = "DESC"
}
export type IStablePoolConfig = INode & {
    __typename?: 'StablePoolConfig';
    amp_factor: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: StablePoolConfig:{amp_factor} */
    id: Scalars['ID']['output'];
};
export type IStakeCurrency = INode & {
    __typename?: 'StakeCurrency';
    coinDecimals: Scalars['Int']['output'];
    coinDenom: Scalars['String']['output'];
    coinGeckoID: Scalars['String']['output'];
    coinMinimalDenom: Scalars['String']['output'];
    /** Globally unique identifier: StakeCurrency:{coinMinimalDenom} */
    id: Scalars['ID']['output'];
};
/** Tick data for a concentrated liquidity pool. */
export type ITickResponse = INode & {
    __typename?: 'TickResponse';
    /** Accumulated fee outside this tick for token 0 (Q128.128). */
    fee_growth_outside_0_x128: Scalars['String']['output'];
    /** Accumulated fee outside this tick for token 1 (Q128.128). */
    fee_growth_outside_1_x128: Scalars['String']['output'];
    /** Globally unique identifier: TickResponse:{contract}:{index} */
    id: Scalars['ID']['output'];
    /** The tick index. */
    index: Scalars['Int']['output'];
    /** Whether this tick has been initialized. */
    initialized: Scalars['Boolean']['output'];
    /** Total liquidity referenced at this tick. */
    liquidity_gross: Scalars['String']['output'];
    /** Net change in liquidity when crossing this tick. */
    liquidity_net: Scalars['String']['output'];
};
/** Paginated tick data response. */
export type ITicksResponse = INode & {
    __typename?: 'TicksResponse';
    /** Globally unique identifier: TicksResponse:{contract} */
    id: Scalars['ID']['output'];
    /** Array of tick data. */
    ticks: Array<ITickResponse>;
};
export type ITokenArray = INode & {
    __typename?: 'TokenArray';
    /** Globally unique identifier: TokenArray:singleton */
    id: Scalars['ID']['output'];
    tokens: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type ITokenDenom = INode & {
    __typename?: 'TokenDenom';
    /** The UID of the chain. */
    chain_uid: Scalars['String']['output'];
    /** Globally unique identifier: TokenDenom:{chain_uid} */
    id: Scalars['ID']['output'];
    /** The type of token (Native, Smart, or Voucher). */
    token_type: ITokenType;
};
export type ITokenDenomWithChainType = INode & {
    __typename?: 'TokenDenomWithChainType';
    /** The type of chain. */
    chain_type: Scalars['String']['output'];
    /** The UID of the chain. */
    chain_uid: Scalars['String']['output'];
    /** Globally unique identifier: TokenDenomWithChainType:{chain_uid} */
    id: Scalars['ID']['output'];
    /** The type of token (Native, Smart, or Voucher). */
    token_type: ITokenType;
};
export type ITokenDenomWithTokenIdResponse = INode & {
    __typename?: 'TokenDenomWithTokenIdResponse';
    denoms: Array<Maybe<ITokenDenomWithChainType>>;
    /** Globally unique identifier: TokenDenomWithTokenIdResponse:{token_id} */
    id: Scalars['ID']['output'];
    /** Optional filter to match a specific token identifier. */
    token_id: Scalars['String']['output'];
};
export type ITokenDenomsResponse = INode & {
    __typename?: 'TokenDenomsResponse';
    /** The list of token representations across different chains. */
    denoms: Maybe<Array<Maybe<ITokenDenomWithChainType>>>;
    /** Globally unique identifier: TokenDenomsResponse:singleton */
    id: Scalars['ID']['output'];
};
export type ITokenId = INode & {
    __typename?: 'TokenId';
    /** Globally unique identifier: TokenId:{id} */
    id: Scalars['ID']['output'];
};
export type ITokenInfo = INode & {
    __typename?: 'TokenInfo';
    decimals: Scalars['Int']['output'];
    /** Globally unique identifier: TokenInfo:{symbol} */
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    symbol: Scalars['String']['output'];
    total_supply: Scalars['String']['output'];
};
export type ITokenLiquidity = INode & {
    __typename?: 'TokenLiquidity';
    /** Globally unique identifier: TokenLiquidity:{token} */
    id: Scalars['ID']['output'];
    token: Scalars['String']['output'];
    total_liquidity: Scalars['String']['output'];
    total_volume: Scalars['String']['output'];
};
export type ITokenOut = INode & {
    __typename?: 'TokenOut';
    /** The amount of the output asset received from the swap. Returned in micro units. */
    amount_out: Maybe<Scalars['String']['output']>;
    /** The identifier of the output asset. */
    asset_out: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: TokenOut:{asset_out} */
    id: Scalars['ID']['output'];
};
export declare enum ITokenPairSortBy {
    CREATED_AT = "CREATED_AT",
    TOTAL_LIQUIDITY = "TOTAL_LIQUIDITY"
}
export type ITokenPairWithLiquidityPaginated = INode & {
    __typename?: 'TokenPairWithLiquidityPaginated';
    /** Globally unique identifier: TokenPairWithLiquidityPaginated:singleton */
    id: Scalars['ID']['output'];
    pagination: Maybe<IPaginationInfo>;
    results: Maybe<Array<Maybe<ITokenPairWithLiquidityResponse>>>;
};
export type ITokenPairWithLiquidityResponse = INode & {
    __typename?: 'TokenPairWithLiquidityResponse';
    /** The APR (Annual Percentage Rate) for providing liquidity to the pool. */
    apr: Scalars['String']['output'];
    /** Timestamp of when the pool was created. */
    created_at: Scalars['String']['output'];
    /** Globally unique identifier: TokenPairWithLiquidity:{vlp} */
    id: Scalars['ID']['output'];
    pair: IPair;
    /** Optional tags or labels associated with the pool. */
    tags: Array<Scalars['String']['output']>;
    /** The total liquidity of the pool. */
    total_liquidity: Scalars['String']['output'];
    /** The VLP contract address that hosts this pool. */
    vlp: Scalars['String']['output'];
};
export type ITokenQueries = {
    __typename?: 'TokenQueries';
    /** Queries a paginated list of all DEXes supported by the Euclid Protocol. Each DEX includes chain ID, name, logo, and styling metadata. */
    all_dexes: Array<IDexMetadata>;
    chains_for_token_launch: Maybe<Array<Maybe<IChainConfig>>>;
    /** Queries the information on the specified Dex's logo. */
    dex_metadata: IDexMetadata;
    /** Queries the link to the faucet for testnet for the chains integrated with euclid. */
    get_all_faucets: Array<IFaucet>;
    /** Queries the available token denoms for the specified token Id on the specified chains. */
    token_denoms: Array<ITokenDenomWithTokenIdResponse>;
    /** Queries the total amount of liquidity available for tokens. */
    token_liquidities: Array<ITokenLiquidity>;
    /** Queries the total amount of liquidity available for the specified token. */
    token_liquidity: Maybe<ITokenLiquidity>;
    /** Queries token metadata information for the specified token Id. */
    token_metadata_by_id: IMetadata;
    /** Queries a list of tokens and their metadata, including price, volume, tags, DEX listings, and more. Supports filters like verification, chains, DEXs, and text search. */
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
    chain_uids?: InputMaybe<Array<Scalars['String']['input']>>;
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
/** The type of token (Native, Smart, or Voucher). */
export type ITokenType = INativeTokenType | ISmartTokenType | IVoucherTokenType;
export type ITotalFeesCollected = INode & {
    __typename?: 'TotalFeesCollected';
    /** Total EUCLID fees collected */
    euclid_fees: IDenomFees;
    /** Globally unique identifier: TotalFeesCollected:singleton */
    id: Scalars['ID']['output'];
    lp_fees: IDenomFees;
};
export type ITotalFeesPerDenomResponse = INode & {
    __typename?: 'TotalFeesPerDenomResponse';
    /** Total EUCLID fees collected */
    euclid_fees: Scalars['String']['output'];
    /** Globally unique identifier: TotalFeesPerDenomResponse:singleton */
    id: Scalars['ID']['output'];
    lp_fees: Scalars['String']['output'];
};
export type IVcoin = {
    __typename?: 'Vcoin';
    /** Queries the the balance information for a token on the spcified chain. Only for voucher tokens */
    balance: Maybe<IVcoinBalance>;
    /** Queries the state for the virtual balance contract. */
    state: Maybe<IContractStateOfVcoin>;
    unified_user_balance: Maybe<Array<IVcoinBalanceResponse>>;
    /** Queries the virtual token balance of the specified user address on the specified chain. */
    user_balance: Maybe<IVcoinBalanceResponse>;
};
export type IVcoinBalanceArgs = {
    balance_key?: InputMaybe<IBalanceKeyInput>;
};
export type IVcoinUnifiedUserBalanceArgs = {
    address: Scalars['String']['input'];
    chain_uids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type IVcoinUserBalanceArgs = {
    user?: InputMaybe<ICrossChainUserInput>;
};
export type IVcoinBalance = INode & {
    __typename?: 'VcoinBalance';
    amount: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: VcoinBalance:{amount} */
    id: Scalars['ID']['output'];
};
export type IVcoinBalanceResponse = INode & {
    __typename?: 'VcoinBalanceResponse';
    balances: Array<Maybe<IVcoinBalanceUserResponse>>;
    chain_uid: Scalars['String']['output'];
    /** Globally unique identifier: VcoinBalanceResponse:{chain_uid} */
    id: Scalars['ID']['output'];
};
export type IVcoinBalanceUserResponse = INode & {
    __typename?: 'VcoinBalanceUserResponse';
    amount: Maybe<Scalars['String']['output']>;
    /** Globally unique identifier: VcoinBalanceUserResponse:{token_id} */
    id: Scalars['ID']['output'];
    token_id: Maybe<Scalars['String']['output']>;
};
export type IVlp = {
    __typename?: 'Vlp';
    /** Queries all the LP reserves and shares on all the chains for the specified VLP. */
    all_pools: Maybe<IPoolsResponse>;
    /** Queries the fees and fee recipients for the specified VLP. */
    fee: Maybe<IFeeInfo>;
    /** Queries liquidity information for the specified VLP address. */
    liquidity: Maybe<ILiquidity>;
    /** Queries migration status for a concentrated liquidity pool. */
    migration_status: Maybe<IMigrationStatusResponse>;
    /** Queries time-weighted average price observations for a concentrated liquidity pool. */
    observe: Maybe<IObserveResponse>;
    /** Queries the LP reserves and shares for the specified VLP on the specified chain. */
    pool: Maybe<IPool>;
    /** Queries a specific position in a concentrated liquidity pool. */
    position: Maybe<IPositionResponse>;
    /** Queries accumulated protocol fees for concentrated liquidity pools. */
    protocol_fees: Maybe<IProtocolFeesResponse>;
    /** Queries slot0 data for concentrated liquidity pools (current price, tick, liquidity, fee growth). */
    slot0: Maybe<ISlot0Response>;
    /** Queries the state of a VLP contract. */
    state: Maybe<IContractStateOfVlp>;
    /** Queries tick data at a specific index in a concentrated liquidity pool. */
    tick: Maybe<ITickResponse>;
    /** Queries multiple ticks with pagination in a concentrated liquidity pool. */
    ticks: Maybe<ITicksResponse>;
    /** Queries the total amount of fees collected by the specifeid VLP. */
    total_fees_collected: Maybe<ITotalFeesCollected>;
    /** Queries the total amount of fees collected by the VLP for the specified token denomination. */
    total_fees_collected_per_denom: Maybe<ITotalFeesPerDenomResponse>;
};
export type IVlpAllPoolsArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    offset?: InputMaybe<Scalars['Int']['input']>;
};
export type IVlpObserveArgs = {
    seconds_agos: Array<Scalars['Int']['input']>;
};
export type IVlpPoolArgs = {
    chain_uid: Scalars['String']['input'];
};
export type IVlpPositionArgs = {
    position_id: Scalars['String']['input'];
};
export type IVlpTickArgs = {
    index: Scalars['Int']['input'];
};
export type IVlpTicksArgs = {
    limit?: InputMaybe<Scalars['Int']['input']>;
    start_after?: InputMaybe<Scalars['Int']['input']>;
};
export type IVlpTotalFeesCollectedPerDenomArgs = {
    denom: Scalars['String']['input'];
};
export type IVlpWithTokenPair = INode & {
    __typename?: 'VlpWithTokenPair';
    /** Globally unique identifier: VlpWithTokenPair:{vlp} */
    id: Scalars['ID']['output'];
    /** The pool key for concentrated liquidity pools. Null for constant product/stable pools. */
    pool_key: Maybe<IPoolKeyOutput>;
    /** The token Id of the first token in the pool. */
    token_1: Maybe<Scalars['String']['output']>;
    /** The token Id of the second token in the pool. */
    token_2: Maybe<Scalars['String']['output']>;
    /** The VLP contract address. */
    vlp: Maybe<Scalars['String']['output']>;
};
export type IVlps = {
    /** contract address of pool. */
    vlp_address?: InputMaybe<Scalars['String']['input']>;
};
export type IVolumeBreakdown = INode & {
    __typename?: 'VolumeBreakdown';
    /** Globally unique identifier: VolumeBreakdown:{pair} */
    id: Scalars['ID']['output'];
    pair: Scalars['String']['output'];
    volume: Scalars['String']['output'];
};
export type IVolumeResponse = INode & {
    __typename?: 'VolumeResponse';
    /** Globally unique identifier: VolumeResponse:singleton */
    id: Scalars['ID']['output'];
    /** The total liquidity in USD. */
    total_liquidity: Scalars['String']['output'];
    /** The total volume in USD. */
    total_volume: Scalars['String']['output'];
    volume_24hours: Scalars['String']['output'];
    /** A breakdown of the volume by token pairs over the past 24 hours. */
    volume_breakdown_24hours: Array<IVolumeBreakdown>;
};
export type IVoucherTokenType = {
    __typename?: 'VoucherTokenType';
    /** The voucher denomination string. */
    voucher: Scalars['JSON']['output'];
};
