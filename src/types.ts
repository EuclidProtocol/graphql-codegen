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

export type IAllEscrowsResponse = {
  __typename?: 'AllEscrowsResponse';
  /** The current amount of tokens held in the escrow. */
  balance: Scalars['String']['output'];
  /** The UID of the chain that hosts the escrow. */
  chain_uid: Scalars['String']['output'];
  /** The token Id for the token stored in the escrow. */
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
  /** The list of tokens. */
  tokens: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type IAllVlps = {
  __typename?: 'AllVlps';
  /** Array of VLPs */
  vlps: Array<Maybe<IVlpWithTokenPair>>;
};

export type IBalance = {
  __typename?: 'Balance';
  /** The number of LP tokens held by the user. */
  balance: Scalars['String']['output'];
};

export type IBalanceKey = {
  __typename?: 'BalanceKey';
  address: Maybe<Scalars['String']['output']>;
  chain_id: Maybe<Scalars['String']['output']>;
  token_id: Maybe<Scalars['String']['output']>;
};

export type IBalanceKeyInput = {
  /** Address and Chain UID of the user */
  cross_chain_user?: InputMaybe<ICrossChainUserInput>;
  /** Token ID of the token */
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
  /** The chain Id of the above chain UID. */
  chain_id: Scalars['String']['output'];
  /** The chain UID we have queried. */
  chain_uid: Scalars['String']['output'];
  /** The contract address of factory. */
  factory_address: Scalars['String']['output'];
};

export type IChainAndFactoryInfo = {
  __typename?: 'ChainAndFactoryInfo';
  /** IBC information used by the chain (Cosmos Chains Only). */
  chain_type: Maybe<IChainType>;
  /** The contract address of the factory. */
  factory: Maybe<Scalars['String']['output']>;
  /** The chain Id of the config used by the factory. */
  factory_chain_id: Maybe<Scalars['String']['output']>;
};

export type IChainConfig = {
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
  /** The logo URL or path used in the UI. */
  logo: Scalars['String']['output'];
  /** The contract address for the token factory on this chain. */
  token_factory_address: Maybe<Scalars['String']['output']>;
  /** The ecosystem the chain belongs to such as 'EVM' or 'Cosmwasm'. */
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
  /** Detailed information about the chain. */
  chain: Maybe<IChainAndFactoryInfo>;
  /** The unique identifier (UID) of the chain. */
  chain_uid: Maybe<Scalars['String']['output']>;
};

export type IChainType = {
  __typename?: 'ChainType';
  ibc: Maybe<IIbc>;
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

export type IChainsResponse = {
  __typename?: 'ChainsResponse';
  chains: Array<Maybe<IChain>>;
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
  status: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type IClaimerResponseWithStatus = {
  __typename?: 'ClaimerResponseWithStatus';
  amount: Scalars['String']['output'];
  claim_group_id: Scalars['String']['output'];
  claim_id: Scalars['String']['output'];
  claimer: Scalars['String']['output'];
  pseudo_claim_id: Scalars['String']['output'];
  sender: ICrossChainUser;
  status: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type IContract = {
  __typename?: 'Contract';
  /** The unique identifier of the chain where the contract is deployed. */
  ChainUID: Maybe<Scalars['String']['output']>;
  /** The address of the contract on the blockchain. */
  ContractAddress: Maybe<Scalars['String']['output']>;
  /** The type of the contract. */
  Type: Maybe<Scalars['String']['output']>;
};

export type IContractStateOfFactory = {
  __typename?: 'ContractStateOfFactory';
  /** The admin address of the factory. */
  admin: Maybe<Scalars['String']['output']>;
  /** The unique identifier (UID) of the chain. */
  chain_uid: Maybe<Scalars['String']['output']>;
  /** The hub channel used by the factory. */
  hub_channel: Maybe<Scalars['String']['output']>;
  /** The address of the router contract. */
  router_contract: Maybe<Scalars['String']['output']>;
};

export type IContractStateOfRouter = {
  __typename?: 'ContractStateOfRouter';
  /** The admin address of the router. */
  admin: Maybe<Scalars['String']['output']>;
  /** The address of the VBalance contract. */
  virtual_balance_address: Maybe<Scalars['String']['output']>;
  /** The code ID of the VLP. */
  vlp_code_id: Maybe<Scalars['Int']['output']>;
};

export type IContractStateOfVcoin = {
  __typename?: 'ContractStateOfVcoin';
  /** The address of the admin of virtual Balance contract. */
  admin: Maybe<Scalars['String']['output']>;
  /** The contract address of the router. */
  router: Maybe<Scalars['String']['output']>;
};

export type IContractStateOfVlp = {
  __typename?: 'ContractStateOfVlp';
  /** The admin address of VLP */
  admin: Maybe<Scalars['String']['output']>;
  /** The fee structure of VLP */
  fee: Maybe<IFeeInfo>;
  /** Timestamp of last update */
  last_updated: Maybe<Scalars['Int']['output']>;
  /** The token pair of VLP */
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

export type ICrossChainUser = {
  __typename?: 'CrossChainUser';
  /** Address of the user on the specified chain. */
  address: Scalars['String']['output'];
  /** Unique identifier for the chain. */
  chain_uid: Scalars['String']['output'];
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
  /** Queries the amount of CW20 tokens (LP tokens) held by the specified user for the specified address and chain. */
  balance: Maybe<IBalance>;
  /** Queries token information for the specified CW20 address and chain. */
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
  /** The total of fees collected for the above denomination. */
  amount: Scalars['String']['output'];
  /** The denomination of the token. */
  denom: Scalars['String']['output'];
};

export type IDexMetadata = {
  __typename?: 'DexMetadata';
  /** The background color used for the DEX. */
  bg_color: Scalars['String']['output'];
  /** The chain UID associated with the DEX */
  chain_uid: Scalars['String']['output'];
  /** The name of DEX */
  dex_name: Scalars['String']['output'];
  /** The human-readable name of the DEX */
  display_name: Scalars['String']['output'];
  /** The forground color used for the DEX. */
  fg_color: Scalars['String']['output'];
  /** The URL of DEX's logo image. */
  logo: Scalars['String']['output'];
};

export type IEvmChainConfig = {
  __typename?: 'EVMChainConfig';
  /** The identifier of the EVM chain. */
  chain_id: Maybe<Scalars['String']['output']>;
  /** The unique UID (usually same as the name) for the chain used for integration purposes. */
  chain_uid: Maybe<Scalars['String']['output']>;
  /** The URL for the blockchain explorer associated with this chain. */
  explorer_url: Maybe<Scalars['String']['output']>;
  /** The common name of the chain. */
  name: Scalars['String']['output'];
  /** Details about the chain's native currency. */
  native_currency: INativeCurrency;
  /** The RPC URL configuration for connecting to the chain. */
  rpc_urls: IRpcUrls;
};

export type IEscrow = {
  __typename?: 'Escrow';
  /** The current amount of tokens held in the escrow. */
  balance: Scalars['String']['output'];
  /** The Id of the chain that has an escrow for the specified token. */
  chain_id: Scalars['String']['output'];
  /** The UID of the chain that has an escrow for the specified token. */
  chain_uid: Scalars['String']['output'];
};

export type IEscrowResponse = {
  __typename?: 'EscrowResponse';
  /** The denominations associated with the escrow. */
  denoms: Array<Maybe<ITokenType>>;
  /** The contract address of the escrow contract. */
  escrow_address: Scalars['String']['output'];
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

export type IFaucet = {
  __typename?: 'Faucet';
  /** The URL link to the faucet for obtaining testnet tokens. */
  faucet_link: Maybe<Scalars['String']['output']>;
  /** The identifier of the token associated with the faucet. */
  token: Scalars['String']['output'];
};

export type IFeeBreakdown = {
  __typename?: 'FeeBreakdown';
  /** The first token in the pair. */
  token1: Scalars['String']['output'];
  /** The second token in the pair. */
  token2: Scalars['String']['output'];
  /** The total fee collected for this pair in USD. */
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
  /** The Euclid fee in basis points. */
  euclid_fee_bps: Scalars['Int']['output'];
  /** The liquidity provider fee in basis points. */
  lp_fee_bps: Scalars['Int']['output'];
  /** The recipient details of the fees. */
  recipient: ICrossChainUser;
};

export type IFeesResponse = {
  __typename?: 'FeesResponse';
  /** A breakdown of the fees collected for each token pair. */
  breakdown: Array<IFeeBreakdown>;
  /** The total fees collected overall in USD from all pools. */
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
  /** The IBC channel from the factory to the router. */
  from_factory_channel: Maybe<Scalars['String']['output']>;
  /** The IBC channel from the router to the chain. */
  from_hub_channel: Maybe<Scalars['String']['output']>;
};

export type IKeplr = {
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
  /** The REST URL for the chain. */
  rest: Maybe<Scalars['String']['output']>;
  /** The RPC URL for the chain. */
  rpc: Maybe<Scalars['String']['output']>;
  /** The staking currency details. */
  stakeCurrency: IStakeCurrency;
};

export type ILiquidity = {
  __typename?: 'Liquidity';
  /** The token pair information. */
  pair: IPair;
  /** The reserve amount of the first token */
  token_1_reserve: Scalars['String']['output'];
  /** The reserve amount of the second token */
  token_2_reserve: Scalars['String']['output'];
  /** The total amount of liquidity provider tokens */
  total_lp_tokens: Scalars['String']['output'];
};

export type ILiquidityDb = {
  __typename?: 'LiquidityDB';
  token_1_liquidity: Maybe<Scalars['Int']['output']>;
  token_2_liquidity: Maybe<Scalars['Int']['output']>;
};

export type ILpTokenAddr = {
  __typename?: 'LpTokenAddr';
  /** The contract address of the LP token for the specified VLP. */
  token_address: Scalars['String']['output'];
};

export type IMetadata = {
  __typename?: 'Metadata';
  /** Types of chain the token is available on. */
  chain_type: Array<Scalars['String']['output']>;
  /** List of chain identifiers the token is available on. */
  chain_uids: Maybe<Array<Scalars['String']['output']>>;
  /** Number of decimal places for the token. */
  coinDecimal: Scalars['Int']['output'];
  /** Date of creation of token. */
  created_at: Scalars['String']['output'];
  /** Token description. */
  description: Scalars['String']['output'];
  /** List of DEXs where the token is traded. */
  dex: Maybe<Array<Scalars['String']['output']>>;
  /** Human-readable token name. */
  displayName: Scalars['String']['output'];
  /** Image URL for the token icon. */
  image: Scalars['String']['output'];
  /** Indicates whether the token is verified. */
  is_verified: Scalars['Boolean']['output'];
  /** Minimum value required for swapping the token. */
  min_swap_value: Scalars['Float']['output'];
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
  /** The block height when the pool was created. */
  height: Scalars['String']['output'];
  /** The pair of tokens in the pool. */
  pair: Maybe<IPair>;
  /** The user details associated with the pool. */
  user: Maybe<ICrossChainUser>;
  /** The contract address of the VLPD of the pool. */
  vlp: Maybe<Scalars['String']['output']>;
};

export type INative = {
  __typename?: 'Native';
  denom: Maybe<Scalars['String']['output']>;
};

export type INativeCurrency = {
  __typename?: 'NativeCurrency';
  /** The number of decimal places for the native currency. */
  decimals: Scalars['Int']['output'];
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
  token_in: Scalars['String']['input'];
  token_out: Scalars['String']['input'];
};

export type IPaginationInfo = {
  __typename?: 'PaginationInfo';
  /** The number of items returned in this page. */
  limit: Maybe<Scalars['Int']['output']>;
  /** The number of items skipped before the first item in this page. */
  offset: Maybe<Scalars['Int']['output']>;
  /** Total number of items in the collection. */
  total_count: Maybe<Scalars['Int']['output']>;
};

export type IPair = {
  __typename?: 'Pair';
  /** The first token in the pair. */
  token_1: Maybe<Scalars['String']['output']>;
  /** The second token in the pair. */
  token_2: Maybe<Scalars['String']['output']>;
};

export type IPairInput = {
  token_1?: InputMaybe<Scalars['String']['input']>;
  token_2?: InputMaybe<Scalars['String']['input']>;
};

export type IPairsInPool = {
  __typename?: 'PairsInPool';
  pair: Maybe<IPair>;
  /** The contract address of the VLP for the pair. */
  vlp: Maybe<Scalars['String']['output']>;
};

export type IPartnerFeesCollected = {
  __typename?: 'PartnerFeesCollected';
  total: Maybe<IDenomFees>;
};

export type IPool = {
  __typename?: 'Pool';
  /** The number of liquidity provider shares */
  lp_shares: Scalars['String']['output'];
  /** The reserve amount of the first token */
  reserve_1: Maybe<Scalars['String']['output']>;
  /** The reserve amount of the second token */
  reserve_2: Scalars['String']['output'];
};

export type IPoolConfig = {
  __typename?: 'PoolConfig';
  /** Constant Product Pool Configuration */
  constant_product: Maybe<Scalars['JSON']['output']>;
  /** Stable Pool Configuration */
  stable: IStablePoolConfig;
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

export type IPools = {
  __typename?: 'Pools';
  /** The unique identifier of the chain. */
  chain_uid: Scalars['String']['output'];
  /** Detailed information about the pool. */
  pool: IPool;
};

export type IPoolsResponse = {
  __typename?: 'PoolsResponse';
  /** Pagination information for the query. */
  pagination: Maybe<IPaginationInfo>;
  pools: Array<Maybe<IPools>>;
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
  /** The amount of tokens to release. */
  amount: Maybe<Scalars['String']['output']>;
  /** The address and limit for the receiving address of the funds. */
  cross_chain_user: Maybe<ICrossChainUserWithLimit>;
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
  /** The unique identifier (UID) of the chain. */
  chain_uid: Scalars['String']['output'];
  /** The address of the router contract. */
  contract_address: Scalars['String']['output'];
  /** The URL of the blockchain explorer for the VSL. */
  explorer_url: Scalars['String']['output'];
  /** The URL or reference to the logo of the VSL chain. */
  logo: Maybe<Scalars['String']['output']>;
  /** The type of smart contract which is always 'router' in this query. */
  type: Maybe<Scalars['String']['output']>;
};

export type ISimulateReleaseEscrow = {
  __typename?: 'SimulateReleaseEscrow';
  /** Array of release amounts. */
  release_amounts: Array<Maybe<IReleaseAmounts>>;
  /** Any remaining tokens after the escrow releases. */
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
  /** The smart contract address of token. */
  smart: Maybe<ISmartToken>;
};

export enum ISortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type IStablePoolConfig = {
  __typename?: 'StablePoolConfig';
  /** Amplication factor for stable pool */
  amp_factor: Scalars['String']['output'];
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
  /** The UID of the chain. */
  chain_uid: Scalars['String']['output'];
  /** The type of token (Native, Smart, or Voucher). */
  token_type: ITokenType;
};

export type ITokenDenomWithChainType = {
  __typename?: 'TokenDenomWithChainType';
  /** The type of chain. */
  chain_type: Scalars['String']['output'];
  /** The UID of the chain. */
  chain_uid: Scalars['String']['output'];
  /** The type of token (Native, Smart, or Voucher). */
  token_type: ITokenType;
};

export type ITokenDenomWithTokenIdResponse = {
  __typename?: 'TokenDenomWithTokenIdResponse';
  denoms: Array<Maybe<ITokenDenomWithChainType>>;
  /** Optional filter to match a specific token identifier. */
  token_id: Scalars['String']['output'];
};

export type ITokenDenomsResponse = {
  __typename?: 'TokenDenomsResponse';
  /** The list of token representations across different chains. */
  denoms: Maybe<Array<Maybe<ITokenDenomWithChainType>>>;
};

export type ITokenId = {
  __typename?: 'TokenId';
  id: Maybe<Scalars['String']['output']>;
};

export type ITokenInfo = {
  __typename?: 'TokenInfo';
  /** The numbe of decimal places of token */
  decimals: Scalars['Int']['output'];
  /** The name of the token. */
  name: Scalars['String']['output'];
  /** The symbol of the token. */
  symbol: Scalars['String']['output'];
  /** The total supply of the token. */
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
  /** The amount of the output asset received from the swap. Returned in micro units. */
  amount_out: Maybe<Scalars['String']['output']>;
  /** The identifier of the output asset. */
  asset_out: Maybe<Scalars['String']['output']>;
};

export enum ITokenPairSortBy {
  CREATED_AT = 'CREATED_AT',
  TOTAL_LIQUIDITY = 'TOTAL_LIQUIDITY'
}

export type ITokenPairWithLiquidityPaginated = {
  __typename?: 'TokenPairWithLiquidityPaginated';
  pagination: Maybe<IPaginationInfo>;
  results: Maybe<Array<Maybe<ITokenPairWithLiquidityResponse>>>;
};

export type ITokenPairWithLiquidityResponse = {
  __typename?: 'TokenPairWithLiquidityResponse';
  /** The APR (Annual Percentage Rate) for providing liquidity to the pool. */
  apr: Scalars['String']['output'];
  /** Timestamp of when the pool was created. */
  created_at: Scalars['String']['output'];
  /** Token Pair */
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

export type ITotalFeesCollected = {
  __typename?: 'TotalFeesCollected';
  /** Total EUCLID fees collected */
  euclid_fees: IDenomFees;
  /** Total LP fees collected */
  lp_fees: IDenomFees;
};

export type ITotalFeesPerDenomResponse = {
  __typename?: 'TotalFeesPerDenomResponse';
  /** Total EUCLID fees collected */
  euclid_fees: Scalars['String']['output'];
  /** Total LP fees collected */
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

export type IVcoinBalance = {
  __typename?: 'VcoinBalance';
  /** The amount of virtual tokens in the balance for the specified user. */
  amount: Maybe<Scalars['String']['output']>;
};

export type IVcoinBalanceResponse = {
  __typename?: 'VcoinBalanceResponse';
  balances: Array<Maybe<IVcoinBalanceUserResponse>>;
  chain_uid: Scalars['String']['output'];
};

export type IVcoinBalanceUserResponse = {
  __typename?: 'VcoinBalanceUserResponse';
  amount: Maybe<Scalars['String']['output']>;
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
  /** Queries the LP reserves and shares for the specified VLP on the specified chain. */
  pool: Maybe<IPool>;
  /** Queries the state of a VLP contract. */
  state: Maybe<IContractStateOfVlp>;
  /** Queries the total amount of fees collected by the specifeid VLP. */
  total_fees_collected: Maybe<ITotalFeesCollected>;
  /** Queries the total amount of fees collected by the VLP for the specified token denomination. */
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

export type IVolumeBreakdown = {
  __typename?: 'VolumeBreakdown';
  pair: Scalars['String']['output'];
  volume: Scalars['String']['output'];
};

export type IVolumeResponse = {
  __typename?: 'VolumeResponse';
  /** The total liquidity in USD. */
  total_liquidity: Scalars['String']['output'];
  /** The total volume in USD. */
  total_volume: Scalars['String']['output'];
  /** The total volume over the past 24 hours in USD. */
  volume_24hours: Scalars['String']['output'];
  /** A breakdown of the volume by token pairs over the past 24 hours. */
  volume_breakdown_24hours: Array<IVolumeBreakdown>;
};

export type IVoucherTokenType = {
  __typename?: 'VoucherTokenType';
  /** The voucher denomination string. */
  voucher: Scalars['JSON']['output'];
};
