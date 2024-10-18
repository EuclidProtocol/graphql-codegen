import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AllEscrowsResponseKeySpecifier = ('balance' | 'chain_uid' | 'token' | AllEscrowsResponseKeySpecifier)[];
export type AllEscrowsResponseFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllPoolsResponseKeySpecifier = ('pagination' | 'pools' | AllPoolsResponseKeySpecifier)[];
export type AllPoolsResponseFieldPolicy = {
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	pools?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllTokensKeySpecifier = ('pagination' | 'tokens' | AllTokensKeySpecifier)[];
export type AllTokensFieldPolicy = {
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllVlpsKeySpecifier = ('vlps' | AllVlpsKeySpecifier)[];
export type AllVlpsFieldPolicy = {
	vlps?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BalanceKeySpecifier = ('balance' | BalanceKeySpecifier)[];
export type BalanceFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BalanceKeyKeySpecifier = ('address' | 'chain_id' | 'token_id' | BalanceKeyKeySpecifier)[];
export type BalanceKeyFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Bech32ConfigKeySpecifier = ('bech32PrefixAccAddr' | 'bech32PrefixAccPub' | 'bech32PrefixConsAddr' | 'bech32PrefixConsPub' | 'bech32PrefixValAddr' | 'bech32PrefixValPub' | Bech32ConfigKeySpecifier)[];
export type Bech32ConfigFieldPolicy = {
	bech32PrefixAccAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixAccPub?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixConsAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixConsPub?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixValAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixValPub?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Bip44KeySpecifier = ('coinType' | Bip44KeySpecifier)[];
export type Bip44FieldPolicy = {
	coinType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainKeySpecifier = ('chain_id' | 'chain_uid' | 'factory_address' | ChainKeySpecifier)[];
export type ChainFieldPolicy = {
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainAndFactoryInfoKeySpecifier = ('chain_type' | 'factory' | 'factory_chain_id' | ChainAndFactoryInfoKeySpecifier)[];
export type ChainAndFactoryInfoFieldPolicy = {
	chain_type?: FieldPolicy<any> | FieldReadFunction<any>,
	factory?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_chain_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainConfigKeySpecifier = ('chain_id' | 'chain_uid' | 'display_name' | 'explorer_url' | 'factory_address' | 'logo' | ChainConfigKeySpecifier)[];
export type ChainConfigFieldPolicy = {
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	explorer_url?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_address?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainDetailKeySpecifier = ('factory' | 'factory_chain_id' | 'from_factory_channel' | 'from_hub_channel' | ChainDetailKeySpecifier)[];
export type ChainDetailFieldPolicy = {
	factory?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	from_factory_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	from_hub_channel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainResponseKeySpecifier = ('chain' | 'chain_uid' | ChainResponseKeySpecifier)[];
export type ChainResponseFieldPolicy = {
	chain?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainTypeKeySpecifier = ('ibc' | ChainTypeKeySpecifier)[];
export type ChainTypeFieldPolicy = {
	ibc?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainsKeySpecifier = ('all_chains' | 'chain_config' | 'contracts' | 'keplr_config' | 'router_config' | ChainsKeySpecifier)[];
export type ChainsFieldPolicy = {
	all_chains?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_config?: FieldPolicy<any> | FieldReadFunction<any>,
	contracts?: FieldPolicy<any> | FieldReadFunction<any>,
	keplr_config?: FieldPolicy<any> | FieldReadFunction<any>,
	router_config?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainsResponseKeySpecifier = ('chains' | ChainsResponseKeySpecifier)[];
export type ChainsResponseFieldPolicy = {
	chains?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractKeySpecifier = ('ChainUID' | 'ContractAddress' | 'Type' | ContractKeySpecifier)[];
export type ContractFieldPolicy = {
	ChainUID?: FieldPolicy<any> | FieldReadFunction<any>,
	ContractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	Type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfFactoryKeySpecifier = ('admin' | 'chain_uid' | 'hub_channel' | 'router_contract' | ContractStateOfFactoryKeySpecifier)[];
export type ContractStateOfFactoryFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	hub_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	router_contract?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfRouterKeySpecifier = ('admin' | 'virtual_balance_address' | 'vlp_code_id' | ContractStateOfRouterKeySpecifier)[];
export type ContractStateOfRouterFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	virtual_balance_address?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp_code_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfVcoinKeySpecifier = ('admin' | 'router' | ContractStateOfVcoinKeySpecifier)[];
export type ContractStateOfVcoinFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	router?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfVlpKeySpecifier = ('admin' | 'fee' | 'last_updated' | 'pair' | 'router' | 'total_lp_tokens' | 'vcoin' | ContractStateOfVlpKeySpecifier)[];
export type ContractStateOfVlpFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	last_updated?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	router?: FieldPolicy<any> | FieldReadFunction<any>,
	total_lp_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	vcoin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrossChainUserKeySpecifier = ('address' | 'chain_uid' | CrossChainUserKeySpecifier)[];
export type CrossChainUserFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrossChainUserWithLimitKeySpecifier = ('limit' | 'user' | CrossChainUserWithLimitKeySpecifier)[];
export type CrossChainUserWithLimitFieldPolicy = {
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrenciesKeySpecifier = ('coinDecimals' | 'coinDenom' | 'coinGeckoID' | 'coinMinimalDenom' | CurrenciesKeySpecifier)[];
export type CurrenciesFieldPolicy = {
	coinDecimals?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	coinGeckoID?: FieldPolicy<any> | FieldReadFunction<any>,
	coinMinimalDenom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CwKeySpecifier = ('balance' | 'token_info' | CwKeySpecifier)[];
export type CwFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	token_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DenomFeesKeySpecifier = ('totals' | DenomFeesKeySpecifier)[];
export type DenomFeesFieldPolicy = {
	totals?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DenominationKeySpecifier = ('amount' | 'denom' | DenominationKeySpecifier)[];
export type DenominationFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	denom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EscrowKeySpecifier = ('balance' | 'chain_id' | 'chain_uid' | EscrowKeySpecifier)[];
export type EscrowFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EscrowResponseKeySpecifier = ('denoms' | 'escrow_address' | EscrowResponseKeySpecifier)[];
export type EscrowResponseFieldPolicy = {
	denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	escrow_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactoryKeySpecifier = ('all_pools' | 'all_tokens' | 'allowed_denoms' | 'escrow' | 'get_LpToken_address' | 'partner_fees_collected' | 'state' | 'vlp' | FactoryKeySpecifier)[];
export type FactoryFieldPolicy = {
	all_pools?: FieldPolicy<any> | FieldReadFunction<any>,
	all_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	allowed_denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	escrow?: FieldPolicy<any> | FieldReadFunction<any>,
	get_LpToken_address?: FieldPolicy<any> | FieldReadFunction<any>,
	partner_fees_collected?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeBreakdownKeySpecifier = ('token1' | 'token2' | 'total_fee' | FeeBreakdownKeySpecifier)[];
export type FeeBreakdownFieldPolicy = {
	token1?: FieldPolicy<any> | FieldReadFunction<any>,
	token2?: FieldPolicy<any> | FieldReadFunction<any>,
	total_fee?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeCurrenciesKeySpecifier = ('coinDecimals' | 'coinDenom' | 'coinGeckoID' | 'coinMinimalDenom' | 'gasPriceStep' | FeeCurrenciesKeySpecifier)[];
export type FeeCurrenciesFieldPolicy = {
	coinDecimals?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	coinGeckoID?: FieldPolicy<any> | FieldReadFunction<any>,
	coinMinimalDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	gasPriceStep?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeInfoKeySpecifier = ('euclid_fee_bps' | 'lp_fee_bps' | 'recipient' | FeeInfoKeySpecifier)[];
export type FeeInfoFieldPolicy = {
	euclid_fee_bps?: FieldPolicy<any> | FieldReadFunction<any>,
	lp_fee_bps?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeesResponseKeySpecifier = ('breakdown' | 'total_overall' | FeesResponseKeySpecifier)[];
export type FeesResponseFieldPolicy = {
	breakdown?: FieldPolicy<any> | FieldReadFunction<any>,
	total_overall?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GasPriceStepKeySpecifier = ('average' | 'high' | 'low' | GasPriceStepKeySpecifier)[];
export type GasPriceStepFieldPolicy = {
	average?: FieldPolicy<any> | FieldReadFunction<any>,
	high?: FieldPolicy<any> | FieldReadFunction<any>,
	low?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IbcKeySpecifier = ('from_factory_channel' | 'from_hub_channel' | IbcKeySpecifier)[];
export type IbcFieldPolicy = {
	from_factory_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	from_hub_channel?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeplrKeySpecifier = ('bech32Config' | 'bip44' | 'chainID' | 'chainName' | 'coinType' | 'currencies' | 'explorer_url' | 'features' | 'feeCurrencies' | 'gasPriceStep' | 'rest' | 'rpc' | 'stakeCurrency' | KeplrKeySpecifier)[];
export type KeplrFieldPolicy = {
	bech32Config?: FieldPolicy<any> | FieldReadFunction<any>,
	bip44?: FieldPolicy<any> | FieldReadFunction<any>,
	chainID?: FieldPolicy<any> | FieldReadFunction<any>,
	chainName?: FieldPolicy<any> | FieldReadFunction<any>,
	coinType?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	explorer_url?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	feeCurrencies?: FieldPolicy<any> | FieldReadFunction<any>,
	gasPriceStep?: FieldPolicy<any> | FieldReadFunction<any>,
	rest?: FieldPolicy<any> | FieldReadFunction<any>,
	rpc?: FieldPolicy<any> | FieldReadFunction<any>,
	stakeCurrency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityKeySpecifier = ('pair' | 'token_1_reserve' | 'token_2_reserve' | 'total_lp_tokens' | LiquidityKeySpecifier)[];
export type LiquidityFieldPolicy = {
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	token_1_reserve?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2_reserve?: FieldPolicy<any> | FieldReadFunction<any>,
	total_lp_tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityDBKeySpecifier = ('token_1_liquidity' | 'token_2_liquidity' | LiquidityDBKeySpecifier)[];
export type LiquidityDBFieldPolicy = {
	token_1_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2_liquidity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LpTokenAddrKeySpecifier = ('token_address' | LpTokenAddrKeySpecifier)[];
export type LpTokenAddrFieldPolicy = {
	token_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataKeySpecifier = ('coinDecimal' | 'description' | 'displayName' | 'image' | 'price' | 'tokenId' | MetadataKeySpecifier)[];
export type MetadataFieldPolicy = {
	coinDecimal?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MultiQueryKeySpecifier = ('raw_queries' | 'smart_queries' | MultiQueryKeySpecifier)[];
export type MultiQueryFieldPolicy = {
	raw_queries?: FieldPolicy<any> | FieldReadFunction<any>,
	smart_queries?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MyPoolsKeySpecifier = ('height' | 'pair' | 'user' | 'vlp' | MyPoolsKeySpecifier)[];
export type MyPoolsFieldPolicy = {
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NativeKeySpecifier = ('denom' | NativeKeySpecifier)[];
export type NativeFieldPolicy = {
	denom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NativeTokenKeySpecifier = ('denom' | NativeTokenKeySpecifier)[];
export type NativeTokenFieldPolicy = {
	denom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NativeTokenTypeKeySpecifier = ('native' | NativeTokenTypeKeySpecifier)[];
export type NativeTokenTypeFieldPolicy = {
	native?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationInfoKeySpecifier = ('limit' | 'offset' | 'total_count' | PaginationInfoKeySpecifier)[];
export type PaginationInfoFieldPolicy = {
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PairKeySpecifier = ('token_1' | 'token_2' | PairKeySpecifier)[];
export type PairFieldPolicy = {
	token_1?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PairsInPoolKeySpecifier = ('pair' | 'vlp' | PairsInPoolKeySpecifier)[];
export type PairsInPoolFieldPolicy = {
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerFeesCollectedKeySpecifier = ('total' | PartnerFeesCollectedKeySpecifier)[];
export type PartnerFeesCollectedFieldPolicy = {
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolKeySpecifier = ('lp_shares' | 'reserve_1' | 'reserve_2' | PoolKeySpecifier)[];
export type PoolFieldPolicy = {
	lp_shares?: FieldPolicy<any> | FieldReadFunction<any>,
	reserve_1?: FieldPolicy<any> | FieldReadFunction<any>,
	reserve_2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolQueriesKeySpecifier = ('fees_collected' | 'my_pools' | 'token_liquidities' | 'token_liquidity' | 'token_pair_with_liquidity' | 'volume' | PoolQueriesKeySpecifier)[];
export type PoolQueriesFieldPolicy = {
	fees_collected?: FieldPolicy<any> | FieldReadFunction<any>,
	my_pools?: FieldPolicy<any> | FieldReadFunction<any>,
	token_liquidities?: FieldPolicy<any> | FieldReadFunction<any>,
	token_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	token_pair_with_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolsKeySpecifier = ('chain_uid' | 'pool' | PoolsKeySpecifier)[];
export type PoolsFieldPolicy = {
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	pool?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolsResponseKeySpecifier = ('pagination' | 'pools' | PoolsResponseKeySpecifier)[];
export type PoolsResponseFieldPolicy = {
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	pools?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('chains' | 'cw' | 'cw_multicall' | 'factory' | 'pool' | 'router' | 'token' | 'vcoin' | 'vlp' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	chains?: FieldPolicy<any> | FieldReadFunction<any>,
	cw?: FieldPolicy<any> | FieldReadFunction<any>,
	cw_multicall?: FieldPolicy<any> | FieldReadFunction<any>,
	factory?: FieldPolicy<any> | FieldReadFunction<any>,
	pool?: FieldPolicy<any> | FieldReadFunction<any>,
	router?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	vcoin?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RawQueryResponseKeySpecifier = ('results' | RawQueryResponseKeySpecifier)[];
export type RawQueryResponseFieldPolicy = {
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseAmountsKeySpecifier = ('amount' | 'cross_chain_user' | ReleaseAmountsKeySpecifier)[];
export type ReleaseAmountsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	cross_chain_user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResultAndErrorKeySpecifier = ('error' | 'success' | ResultAndErrorKeySpecifier)[];
export type ResultAndErrorFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouterKeySpecifier = ('all_chains' | 'all_escrows' | 'all_tokens' | 'all_vlps' | 'chain' | 'escrows' | 'simulate_release_escrow' | 'simulate_swap' | 'state' | 'token_pairs_from_vlp' | 'vlp' | RouterKeySpecifier)[];
export type RouterFieldPolicy = {
	all_chains?: FieldPolicy<any> | FieldReadFunction<any>,
	all_escrows?: FieldPolicy<any> | FieldReadFunction<any>,
	all_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	all_vlps?: FieldPolicy<any> | FieldReadFunction<any>,
	chain?: FieldPolicy<any> | FieldReadFunction<any>,
	escrows?: FieldPolicy<any> | FieldReadFunction<any>,
	simulate_release_escrow?: FieldPolicy<any> | FieldReadFunction<any>,
	simulate_swap?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	token_pairs_from_vlp?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouterConfigKeySpecifier = ('chain_uid' | 'contract_address' | 'explorer_url' | 'logo' | 'type' | RouterConfigKeySpecifier)[];
export type RouterConfigFieldPolicy = {
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	explorer_url?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimulateReleaseEscrowKeySpecifier = ('release_amounts' | 'remaining_amount' | SimulateReleaseEscrowKeySpecifier)[];
export type SimulateReleaseEscrowFieldPolicy = {
	release_amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmartTokenKeySpecifier = ('contract_address' | SmartTokenKeySpecifier)[];
export type SmartTokenFieldPolicy = {
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmartTokenTypeKeySpecifier = ('smart' | SmartTokenTypeKeySpecifier)[];
export type SmartTokenTypeFieldPolicy = {
	smart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StakeCurrencyKeySpecifier = ('coinDecimals' | 'coinDenom' | 'coinGeckoID' | 'coinMinimalDenom' | StakeCurrencyKeySpecifier)[];
export type StakeCurrencyFieldPolicy = {
	coinDecimals?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	coinGeckoID?: FieldPolicy<any> | FieldReadFunction<any>,
	coinMinimalDenom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenArrayKeySpecifier = ('tokens' | TokenArrayKeySpecifier)[];
export type TokenArrayFieldPolicy = {
	tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenIdKeySpecifier = ('id' | TokenIdKeySpecifier)[];
export type TokenIdFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenInfoKeySpecifier = ('decimals' | 'name' | 'symbol' | 'total_supply' | TokenInfoKeySpecifier)[];
export type TokenInfoFieldPolicy = {
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	total_supply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenLiquidityKeySpecifier = ('token' | 'total_liquidity' | TokenLiquidityKeySpecifier)[];
export type TokenLiquidityFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	total_liquidity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenOutKeySpecifier = ('amount_out' | 'asset_out' | TokenOutKeySpecifier)[];
export type TokenOutFieldPolicy = {
	amount_out?: FieldPolicy<any> | FieldReadFunction<any>,
	asset_out?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenPairWithLiquidityResponseKeySpecifier = ('apr' | 'pair' | 'total_liquidity' | 'vlp' | TokenPairWithLiquidityResponseKeySpecifier)[];
export type TokenPairWithLiquidityResponseFieldPolicy = {
	apr?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	total_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenQueriesKeySpecifier = ('token_metadata_by_id' | 'token_metadatas' | TokenQueriesKeySpecifier)[];
export type TokenQueriesFieldPolicy = {
	token_metadata_by_id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_metadatas?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TotalFeesCollectedKeySpecifier = ('euclid_fees' | 'lp_fees' | TotalFeesCollectedKeySpecifier)[];
export type TotalFeesCollectedFieldPolicy = {
	euclid_fees?: FieldPolicy<any> | FieldReadFunction<any>,
	lp_fees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TotalFeesPerDenomResponseKeySpecifier = ('euclid_fees' | 'lp_fees' | TotalFeesPerDenomResponseKeySpecifier)[];
export type TotalFeesPerDenomResponseFieldPolicy = {
	euclid_fees?: FieldPolicy<any> | FieldReadFunction<any>,
	lp_fees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinKeySpecifier = ('balance' | 'state' | 'user_balance' | VcoinKeySpecifier)[];
export type VcoinFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	user_balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinBalanceKeySpecifier = ('amount' | VcoinBalanceKeySpecifier)[];
export type VcoinBalanceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinBalanceResponseKeySpecifier = ('balances' | VcoinBalanceResponseKeySpecifier)[];
export type VcoinBalanceResponseFieldPolicy = {
	balances?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinBalanceUserResponseKeySpecifier = ('amount' | 'token_id' | VcoinBalanceUserResponseKeySpecifier)[];
export type VcoinBalanceUserResponseFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VlpKeySpecifier = ('all_pools' | 'fee' | 'liquidity' | 'pool' | 'state' | 'total_fees_collected' | 'total_fees_collected_per_denom' | VlpKeySpecifier)[];
export type VlpFieldPolicy = {
	all_pools?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	pool?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	total_fees_collected?: FieldPolicy<any> | FieldReadFunction<any>,
	total_fees_collected_per_denom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VlpWithTokenPairKeySpecifier = ('token_1' | 'token_2' | 'vlp' | VlpWithTokenPairKeySpecifier)[];
export type VlpWithTokenPairFieldPolicy = {
	token_1?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VolumeBreakdownKeySpecifier = ('pair' | 'volume' | VolumeBreakdownKeySpecifier)[];
export type VolumeBreakdownFieldPolicy = {
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VolumeResponseKeySpecifier = ('total_liquidity' | 'total_volume' | 'volume_24hours' | 'volume_breakdown_24hours' | VolumeResponseKeySpecifier)[];
export type VolumeResponseFieldPolicy = {
	total_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	total_volume?: FieldPolicy<any> | FieldReadFunction<any>,
	volume_24hours?: FieldPolicy<any> | FieldReadFunction<any>,
	volume_breakdown_24hours?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoucherTokenTypeKeySpecifier = ('voucher' | VoucherTokenTypeKeySpecifier)[];
export type VoucherTokenTypeFieldPolicy = {
	voucher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AllEscrowsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllEscrowsResponseKeySpecifier | (() => undefined | AllEscrowsResponseKeySpecifier),
		fields?: AllEscrowsResponseFieldPolicy,
	},
	AllPoolsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllPoolsResponseKeySpecifier | (() => undefined | AllPoolsResponseKeySpecifier),
		fields?: AllPoolsResponseFieldPolicy,
	},
	AllTokens?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllTokensKeySpecifier | (() => undefined | AllTokensKeySpecifier),
		fields?: AllTokensFieldPolicy,
	},
	AllVlps?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AllVlpsKeySpecifier | (() => undefined | AllVlpsKeySpecifier),
		fields?: AllVlpsFieldPolicy,
	},
	Balance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BalanceKeySpecifier | (() => undefined | BalanceKeySpecifier),
		fields?: BalanceFieldPolicy,
	},
	BalanceKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BalanceKeyKeySpecifier | (() => undefined | BalanceKeyKeySpecifier),
		fields?: BalanceKeyFieldPolicy,
	},
	Bech32Config?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Bech32ConfigKeySpecifier | (() => undefined | Bech32ConfigKeySpecifier),
		fields?: Bech32ConfigFieldPolicy,
	},
	Bip44?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Bip44KeySpecifier | (() => undefined | Bip44KeySpecifier),
		fields?: Bip44FieldPolicy,
	},
	Chain?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainKeySpecifier | (() => undefined | ChainKeySpecifier),
		fields?: ChainFieldPolicy,
	},
	ChainAndFactoryInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainAndFactoryInfoKeySpecifier | (() => undefined | ChainAndFactoryInfoKeySpecifier),
		fields?: ChainAndFactoryInfoFieldPolicy,
	},
	ChainConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainConfigKeySpecifier | (() => undefined | ChainConfigKeySpecifier),
		fields?: ChainConfigFieldPolicy,
	},
	ChainDetail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainDetailKeySpecifier | (() => undefined | ChainDetailKeySpecifier),
		fields?: ChainDetailFieldPolicy,
	},
	ChainResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainResponseKeySpecifier | (() => undefined | ChainResponseKeySpecifier),
		fields?: ChainResponseFieldPolicy,
	},
	ChainType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainTypeKeySpecifier | (() => undefined | ChainTypeKeySpecifier),
		fields?: ChainTypeFieldPolicy,
	},
	Chains?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainsKeySpecifier | (() => undefined | ChainsKeySpecifier),
		fields?: ChainsFieldPolicy,
	},
	ChainsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChainsResponseKeySpecifier | (() => undefined | ChainsResponseKeySpecifier),
		fields?: ChainsResponseFieldPolicy,
	},
	Contract?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractKeySpecifier | (() => undefined | ContractKeySpecifier),
		fields?: ContractFieldPolicy,
	},
	ContractStateOfFactory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractStateOfFactoryKeySpecifier | (() => undefined | ContractStateOfFactoryKeySpecifier),
		fields?: ContractStateOfFactoryFieldPolicy,
	},
	ContractStateOfRouter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractStateOfRouterKeySpecifier | (() => undefined | ContractStateOfRouterKeySpecifier),
		fields?: ContractStateOfRouterFieldPolicy,
	},
	ContractStateOfVcoin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractStateOfVcoinKeySpecifier | (() => undefined | ContractStateOfVcoinKeySpecifier),
		fields?: ContractStateOfVcoinFieldPolicy,
	},
	ContractStateOfVlp?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContractStateOfVlpKeySpecifier | (() => undefined | ContractStateOfVlpKeySpecifier),
		fields?: ContractStateOfVlpFieldPolicy,
	},
	CrossChainUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CrossChainUserKeySpecifier | (() => undefined | CrossChainUserKeySpecifier),
		fields?: CrossChainUserFieldPolicy,
	},
	CrossChainUserWithLimit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CrossChainUserWithLimitKeySpecifier | (() => undefined | CrossChainUserWithLimitKeySpecifier),
		fields?: CrossChainUserWithLimitFieldPolicy,
	},
	Currencies?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrenciesKeySpecifier | (() => undefined | CurrenciesKeySpecifier),
		fields?: CurrenciesFieldPolicy,
	},
	Cw?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CwKeySpecifier | (() => undefined | CwKeySpecifier),
		fields?: CwFieldPolicy,
	},
	DenomFees?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DenomFeesKeySpecifier | (() => undefined | DenomFeesKeySpecifier),
		fields?: DenomFeesFieldPolicy,
	},
	Denomination?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DenominationKeySpecifier | (() => undefined | DenominationKeySpecifier),
		fields?: DenominationFieldPolicy,
	},
	Escrow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EscrowKeySpecifier | (() => undefined | EscrowKeySpecifier),
		fields?: EscrowFieldPolicy,
	},
	EscrowResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EscrowResponseKeySpecifier | (() => undefined | EscrowResponseKeySpecifier),
		fields?: EscrowResponseFieldPolicy,
	},
	Factory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactoryKeySpecifier | (() => undefined | FactoryKeySpecifier),
		fields?: FactoryFieldPolicy,
	},
	FeeBreakdown?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeBreakdownKeySpecifier | (() => undefined | FeeBreakdownKeySpecifier),
		fields?: FeeBreakdownFieldPolicy,
	},
	FeeCurrencies?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeCurrenciesKeySpecifier | (() => undefined | FeeCurrenciesKeySpecifier),
		fields?: FeeCurrenciesFieldPolicy,
	},
	FeeInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeInfoKeySpecifier | (() => undefined | FeeInfoKeySpecifier),
		fields?: FeeInfoFieldPolicy,
	},
	FeesResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeesResponseKeySpecifier | (() => undefined | FeesResponseKeySpecifier),
		fields?: FeesResponseFieldPolicy,
	},
	GasPriceStep?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GasPriceStepKeySpecifier | (() => undefined | GasPriceStepKeySpecifier),
		fields?: GasPriceStepFieldPolicy,
	},
	Ibc?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IbcKeySpecifier | (() => undefined | IbcKeySpecifier),
		fields?: IbcFieldPolicy,
	},
	Keplr?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeplrKeySpecifier | (() => undefined | KeplrKeySpecifier),
		fields?: KeplrFieldPolicy,
	},
	Liquidity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiquidityKeySpecifier | (() => undefined | LiquidityKeySpecifier),
		fields?: LiquidityFieldPolicy,
	},
	LiquidityDB?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LiquidityDBKeySpecifier | (() => undefined | LiquidityDBKeySpecifier),
		fields?: LiquidityDBFieldPolicy,
	},
	LpTokenAddr?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LpTokenAddrKeySpecifier | (() => undefined | LpTokenAddrKeySpecifier),
		fields?: LpTokenAddrFieldPolicy,
	},
	Metadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MetadataKeySpecifier | (() => undefined | MetadataKeySpecifier),
		fields?: MetadataFieldPolicy,
	},
	MultiQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MultiQueryKeySpecifier | (() => undefined | MultiQueryKeySpecifier),
		fields?: MultiQueryFieldPolicy,
	},
	MyPools?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MyPoolsKeySpecifier | (() => undefined | MyPoolsKeySpecifier),
		fields?: MyPoolsFieldPolicy,
	},
	Native?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NativeKeySpecifier | (() => undefined | NativeKeySpecifier),
		fields?: NativeFieldPolicy,
	},
	NativeToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NativeTokenKeySpecifier | (() => undefined | NativeTokenKeySpecifier),
		fields?: NativeTokenFieldPolicy,
	},
	NativeTokenType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NativeTokenTypeKeySpecifier | (() => undefined | NativeTokenTypeKeySpecifier),
		fields?: NativeTokenTypeFieldPolicy,
	},
	PaginationInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginationInfoKeySpecifier | (() => undefined | PaginationInfoKeySpecifier),
		fields?: PaginationInfoFieldPolicy,
	},
	Pair?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PairKeySpecifier | (() => undefined | PairKeySpecifier),
		fields?: PairFieldPolicy,
	},
	PairsInPool?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PairsInPoolKeySpecifier | (() => undefined | PairsInPoolKeySpecifier),
		fields?: PairsInPoolFieldPolicy,
	},
	PartnerFeesCollected?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PartnerFeesCollectedKeySpecifier | (() => undefined | PartnerFeesCollectedKeySpecifier),
		fields?: PartnerFeesCollectedFieldPolicy,
	},
	Pool?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolKeySpecifier | (() => undefined | PoolKeySpecifier),
		fields?: PoolFieldPolicy,
	},
	PoolQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolQueriesKeySpecifier | (() => undefined | PoolQueriesKeySpecifier),
		fields?: PoolQueriesFieldPolicy,
	},
	Pools?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolsKeySpecifier | (() => undefined | PoolsKeySpecifier),
		fields?: PoolsFieldPolicy,
	},
	PoolsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolsResponseKeySpecifier | (() => undefined | PoolsResponseKeySpecifier),
		fields?: PoolsResponseFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RawQueryResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RawQueryResponseKeySpecifier | (() => undefined | RawQueryResponseKeySpecifier),
		fields?: RawQueryResponseFieldPolicy,
	},
	ReleaseAmounts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReleaseAmountsKeySpecifier | (() => undefined | ReleaseAmountsKeySpecifier),
		fields?: ReleaseAmountsFieldPolicy,
	},
	ResultAndError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResultAndErrorKeySpecifier | (() => undefined | ResultAndErrorKeySpecifier),
		fields?: ResultAndErrorFieldPolicy,
	},
	Router?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouterKeySpecifier | (() => undefined | RouterKeySpecifier),
		fields?: RouterFieldPolicy,
	},
	RouterConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouterConfigKeySpecifier | (() => undefined | RouterConfigKeySpecifier),
		fields?: RouterConfigFieldPolicy,
	},
	SimulateReleaseEscrow?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimulateReleaseEscrowKeySpecifier | (() => undefined | SimulateReleaseEscrowKeySpecifier),
		fields?: SimulateReleaseEscrowFieldPolicy,
	},
	SmartToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmartTokenKeySpecifier | (() => undefined | SmartTokenKeySpecifier),
		fields?: SmartTokenFieldPolicy,
	},
	SmartTokenType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmartTokenTypeKeySpecifier | (() => undefined | SmartTokenTypeKeySpecifier),
		fields?: SmartTokenTypeFieldPolicy,
	},
	StakeCurrency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StakeCurrencyKeySpecifier | (() => undefined | StakeCurrencyKeySpecifier),
		fields?: StakeCurrencyFieldPolicy,
	},
	TokenArray?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenArrayKeySpecifier | (() => undefined | TokenArrayKeySpecifier),
		fields?: TokenArrayFieldPolicy,
	},
	TokenId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenIdKeySpecifier | (() => undefined | TokenIdKeySpecifier),
		fields?: TokenIdFieldPolicy,
	},
	TokenInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenInfoKeySpecifier | (() => undefined | TokenInfoKeySpecifier),
		fields?: TokenInfoFieldPolicy,
	},
	TokenLiquidity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenLiquidityKeySpecifier | (() => undefined | TokenLiquidityKeySpecifier),
		fields?: TokenLiquidityFieldPolicy,
	},
	TokenOut?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenOutKeySpecifier | (() => undefined | TokenOutKeySpecifier),
		fields?: TokenOutFieldPolicy,
	},
	TokenPairWithLiquidityResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenPairWithLiquidityResponseKeySpecifier | (() => undefined | TokenPairWithLiquidityResponseKeySpecifier),
		fields?: TokenPairWithLiquidityResponseFieldPolicy,
	},
	TokenQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenQueriesKeySpecifier | (() => undefined | TokenQueriesKeySpecifier),
		fields?: TokenQueriesFieldPolicy,
	},
	TotalFeesCollected?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TotalFeesCollectedKeySpecifier | (() => undefined | TotalFeesCollectedKeySpecifier),
		fields?: TotalFeesCollectedFieldPolicy,
	},
	TotalFeesPerDenomResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TotalFeesPerDenomResponseKeySpecifier | (() => undefined | TotalFeesPerDenomResponseKeySpecifier),
		fields?: TotalFeesPerDenomResponseFieldPolicy,
	},
	Vcoin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VcoinKeySpecifier | (() => undefined | VcoinKeySpecifier),
		fields?: VcoinFieldPolicy,
	},
	VcoinBalance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VcoinBalanceKeySpecifier | (() => undefined | VcoinBalanceKeySpecifier),
		fields?: VcoinBalanceFieldPolicy,
	},
	VcoinBalanceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VcoinBalanceResponseKeySpecifier | (() => undefined | VcoinBalanceResponseKeySpecifier),
		fields?: VcoinBalanceResponseFieldPolicy,
	},
	VcoinBalanceUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VcoinBalanceUserResponseKeySpecifier | (() => undefined | VcoinBalanceUserResponseKeySpecifier),
		fields?: VcoinBalanceUserResponseFieldPolicy,
	},
	Vlp?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VlpKeySpecifier | (() => undefined | VlpKeySpecifier),
		fields?: VlpFieldPolicy,
	},
	VlpWithTokenPair?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VlpWithTokenPairKeySpecifier | (() => undefined | VlpWithTokenPairKeySpecifier),
		fields?: VlpWithTokenPairFieldPolicy,
	},
	VolumeBreakdown?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VolumeBreakdownKeySpecifier | (() => undefined | VolumeBreakdownKeySpecifier),
		fields?: VolumeBreakdownFieldPolicy,
	},
	VolumeResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VolumeResponseKeySpecifier | (() => undefined | VolumeResponseKeySpecifier),
		fields?: VolumeResponseFieldPolicy,
	},
	VoucherTokenType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoucherTokenTypeKeySpecifier | (() => undefined | VoucherTokenTypeKeySpecifier),
		fields?: VoucherTokenTypeFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;