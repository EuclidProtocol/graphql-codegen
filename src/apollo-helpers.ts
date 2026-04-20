import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AllEscrowsResponseKeySpecifier = ('balance' | 'chain_uid' | 'id' | 'token' | AllEscrowsResponseKeySpecifier)[];
export type AllEscrowsResponseFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllPoolsResponseKeySpecifier = ('id' | 'pagination' | 'pools' | AllPoolsResponseKeySpecifier)[];
export type AllPoolsResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	pools?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllTokensKeySpecifier = ('id' | 'pagination' | 'tokens' | AllTokensKeySpecifier)[];
export type AllTokensFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AllVlpsKeySpecifier = ('id' | 'vlps' | AllVlpsKeySpecifier)[];
export type AllVlpsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	vlps?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BalanceKeySpecifier = ('balance' | 'id' | BalanceKeySpecifier)[];
export type BalanceFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BalanceKeyKeySpecifier = ('address' | 'chain_id' | 'id' | 'token_id' | BalanceKeyKeySpecifier)[];
export type BalanceKeyFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Bech32ConfigKeySpecifier = ('bech32PrefixAccAddr' | 'bech32PrefixAccPub' | 'bech32PrefixConsAddr' | 'bech32PrefixConsPub' | 'bech32PrefixValAddr' | 'bech32PrefixValPub' | 'id' | Bech32ConfigKeySpecifier)[];
export type Bech32ConfigFieldPolicy = {
	bech32PrefixAccAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixAccPub?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixConsAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixConsPub?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixValAddr?: FieldPolicy<any> | FieldReadFunction<any>,
	bech32PrefixValPub?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Bip44KeySpecifier = ('coinType' | 'id' | Bip44KeySpecifier)[];
export type Bip44FieldPolicy = {
	coinType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainKeySpecifier = ('chain_id' | 'chain_uid' | 'factory_address' | 'id' | ChainKeySpecifier)[];
export type ChainFieldPolicy = {
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainAndFactoryInfoKeySpecifier = ('chain_type' | 'factory' | 'factory_chain_id' | 'id' | ChainAndFactoryInfoKeySpecifier)[];
export type ChainAndFactoryInfoFieldPolicy = {
	chain_type?: FieldPolicy<any> | FieldReadFunction<any>,
	factory?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainConfigKeySpecifier = ('chain_id' | 'chain_uid' | 'display_name' | 'explorer_url' | 'factory_address' | 'id' | 'logo' | 'token_factory_address' | 'type' | ChainConfigKeySpecifier)[];
export type ChainConfigFieldPolicy = {
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	explorer_url?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	token_factory_address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainDetailKeySpecifier = ('factory' | 'factory_chain_id' | 'from_factory_channel' | 'from_hub_channel' | 'id' | ChainDetailKeySpecifier)[];
export type ChainDetailFieldPolicy = {
	factory?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	from_factory_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	from_hub_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainResponseKeySpecifier = ('chain' | 'chain_uid' | 'id' | ChainResponseKeySpecifier)[];
export type ChainResponseFieldPolicy = {
	chain?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainTypeKeySpecifier = ('ibc' | 'id' | ChainTypeKeySpecifier)[];
export type ChainTypeFieldPolicy = {
	ibc?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainsKeySpecifier = ('all_chains' | 'all_evm_chains' | 'chain_config' | 'contracts' | 'evm_chain_config' | 'keplr_config' | 'router_config' | ChainsKeySpecifier)[];
export type ChainsFieldPolicy = {
	all_chains?: FieldPolicy<any> | FieldReadFunction<any>,
	all_evm_chains?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_config?: FieldPolicy<any> | FieldReadFunction<any>,
	contracts?: FieldPolicy<any> | FieldReadFunction<any>,
	evm_chain_config?: FieldPolicy<any> | FieldReadFunction<any>,
	keplr_config?: FieldPolicy<any> | FieldReadFunction<any>,
	router_config?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChainsResponseKeySpecifier = ('chains' | 'id' | ChainsResponseKeySpecifier)[];
export type ChainsResponseFieldPolicy = {
	chains?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClaimQueriesKeySpecifier = ('claim' | 'claim_by_psuedo_claim_id' | 'claims_by_claimer_pub_Key' | 'claims_by_email' | 'sender_claims' | 'state' | 'user_claims' | ClaimQueriesKeySpecifier)[];
export type ClaimQueriesFieldPolicy = {
	claim?: FieldPolicy<any> | FieldReadFunction<any>,
	claim_by_psuedo_claim_id?: FieldPolicy<any> | FieldReadFunction<any>,
	claims_by_claimer_pub_Key?: FieldPolicy<any> | FieldReadFunction<any>,
	claims_by_email?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_claims?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	user_claims?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClaimStateKeySpecifier = ('admin' | 'chain_uid' | 'factory_address' | 'id' | 'vcoin_address' | ClaimStateKeySpecifier)[];
export type ClaimStateFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	factory_address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	vcoin_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClaimerResponseKeySpecifier = ('amount' | 'claim_group_id' | 'claim_id' | 'claimer' | 'id' | 'pseudo_claim_id' | 'sender' | 'status' | 'token' | ClaimerResponseKeySpecifier)[];
export type ClaimerResponseFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	claim_group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	claim_id?: FieldPolicy<any> | FieldReadFunction<any>,
	claimer?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pseudo_claim_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClaimerResponseWithStatusKeySpecifier = ('amount' | 'claim_group_id' | 'claim_id' | 'claimer' | 'id' | 'pseudo_claim_id' | 'sender' | 'status' | 'token' | ClaimerResponseWithStatusKeySpecifier)[];
export type ClaimerResponseWithStatusFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	claim_group_id?: FieldPolicy<any> | FieldReadFunction<any>,
	claim_id?: FieldPolicy<any> | FieldReadFunction<any>,
	claimer?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pseudo_claim_id?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClpPositionInfoResponseKeySpecifier = ('id' | 'position' | 'vlp_address' | ClpPositionInfoResponseKeySpecifier)[];
export type ClpPositionInfoResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConcentratedPoolParamsKeySpecifier = ('fee_tier_bps' | 'id' | 'tick_spacing' | ConcentratedPoolParamsKeySpecifier)[];
export type ConcentratedPoolParamsFieldPolicy = {
	fee_tier_bps?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tick_spacing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractKeySpecifier = ('ChainUID' | 'ContractAddress' | 'Type' | 'id' | ContractKeySpecifier)[];
export type ContractFieldPolicy = {
	ChainUID?: FieldPolicy<any> | FieldReadFunction<any>,
	ContractAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	Type?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfFactoryKeySpecifier = ('admin' | 'chain_uid' | 'hub_channel' | 'id' | 'router_contract' | ContractStateOfFactoryKeySpecifier)[];
export type ContractStateOfFactoryFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	hub_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	router_contract?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfRouterKeySpecifier = ('admin' | 'concentrated_vlp_code_id' | 'constant_product_vlp_code_id' | 'id' | 'locked' | 'stable_vlp_code_id' | 'virtual_balance_address' | ContractStateOfRouterKeySpecifier)[];
export type ContractStateOfRouterFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	concentrated_vlp_code_id?: FieldPolicy<any> | FieldReadFunction<any>,
	constant_product_vlp_code_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	stable_vlp_code_id?: FieldPolicy<any> | FieldReadFunction<any>,
	virtual_balance_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfVcoinKeySpecifier = ('admin' | 'id' | 'router' | ContractStateOfVcoinKeySpecifier)[];
export type ContractStateOfVcoinFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	router?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContractStateOfVlpKeySpecifier = ('admin' | 'fee' | 'id' | 'last_updated' | 'pair' | 'pool_config' | 'router' | 'total_lp_tokens' | 'vcoin' | ContractStateOfVlpKeySpecifier)[];
export type ContractStateOfVlpFieldPolicy = {
	admin?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_updated?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	pool_config?: FieldPolicy<any> | FieldReadFunction<any>,
	router?: FieldPolicy<any> | FieldReadFunction<any>,
	total_lp_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	vcoin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrossChainUserKeySpecifier = ('address' | 'chain_uid' | 'id' | CrossChainUserKeySpecifier)[];
export type CrossChainUserFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CrossChainUserWithLimitKeySpecifier = ('id' | 'limit' | 'user' | CrossChainUserWithLimitKeySpecifier)[];
export type CrossChainUserWithLimitFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrenciesKeySpecifier = ('coinDecimals' | 'coinDenom' | 'coinGeckoID' | 'coinMinimalDenom' | 'id' | CurrenciesKeySpecifier)[];
export type CurrenciesFieldPolicy = {
	coinDecimals?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	coinGeckoID?: FieldPolicy<any> | FieldReadFunction<any>,
	coinMinimalDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CwKeySpecifier = ('balance' | 'token_info' | CwKeySpecifier)[];
export type CwFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	token_info?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DenomFeesKeySpecifier = ('id' | 'totals' | DenomFeesKeySpecifier)[];
export type DenomFeesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	totals?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DenominationKeySpecifier = ('amount' | 'denom' | 'id' | DenominationKeySpecifier)[];
export type DenominationFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	denom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DexMetadataKeySpecifier = ('bg_color' | 'chain_uid' | 'dex_name' | 'display_name' | 'fg_color' | 'id' | 'logo' | DexMetadataKeySpecifier)[];
export type DexMetadataFieldPolicy = {
	bg_color?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	dex_name?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fg_color?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EVMChainConfigKeySpecifier = ('chain_id' | 'chain_uid' | 'explorer_url' | 'id' | 'name' | 'native_currency' | 'rpc_urls' | EVMChainConfigKeySpecifier)[];
export type EVMChainConfigFieldPolicy = {
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	explorer_url?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	native_currency?: FieldPolicy<any> | FieldReadFunction<any>,
	rpc_urls?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EscrowKeySpecifier = ('balance' | 'chain_id' | 'chain_uid' | 'id' | EscrowKeySpecifier)[];
export type EscrowFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_id?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EscrowResponseKeySpecifier = ('denoms' | 'escrow_address' | 'id' | EscrowResponseKeySpecifier)[];
export type EscrowResponseFieldPolicy = {
	denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	escrow_address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactoryKeySpecifier = ('all_pools' | 'all_tokens' | 'allowed_denoms' | 'escrow' | 'get_LpToken_address' | 'partner_fees_collected' | 'position_token_contract' | 'state' | 'user_positions' | 'vlp' | FactoryKeySpecifier)[];
export type FactoryFieldPolicy = {
	all_pools?: FieldPolicy<any> | FieldReadFunction<any>,
	all_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	allowed_denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	escrow?: FieldPolicy<any> | FieldReadFunction<any>,
	get_LpToken_address?: FieldPolicy<any> | FieldReadFunction<any>,
	partner_fees_collected?: FieldPolicy<any> | FieldReadFunction<any>,
	position_token_contract?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	user_positions?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FaucetKeySpecifier = ('faucet_link' | 'id' | 'token' | FaucetKeySpecifier)[];
export type FaucetFieldPolicy = {
	faucet_link?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeBreakdownKeySpecifier = ('id' | 'token1' | 'token2' | 'total_fee' | FeeBreakdownKeySpecifier)[];
export type FeeBreakdownFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token1?: FieldPolicy<any> | FieldReadFunction<any>,
	token2?: FieldPolicy<any> | FieldReadFunction<any>,
	total_fee?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeCurrenciesKeySpecifier = ('coinDecimals' | 'coinDenom' | 'coinGeckoID' | 'coinMinimalDenom' | 'gasPriceStep' | 'id' | FeeCurrenciesKeySpecifier)[];
export type FeeCurrenciesFieldPolicy = {
	coinDecimals?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	coinGeckoID?: FieldPolicy<any> | FieldReadFunction<any>,
	coinMinimalDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	gasPriceStep?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeInfoKeySpecifier = ('euclid_fee_bps' | 'id' | 'lp_fee_bps' | 'recipient' | FeeInfoKeySpecifier)[];
export type FeeInfoFieldPolicy = {
	euclid_fee_bps?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lp_fee_bps?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeesResponseKeySpecifier = ('breakdown' | 'id' | 'total_overall' | FeesResponseKeySpecifier)[];
export type FeesResponseFieldPolicy = {
	breakdown?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	total_overall?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GasPriceStepKeySpecifier = ('average' | 'high' | 'id' | 'low' | GasPriceStepKeySpecifier)[];
export type GasPriceStepFieldPolicy = {
	average?: FieldPolicy<any> | FieldReadFunction<any>,
	high?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	low?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IbcKeySpecifier = ('from_factory_channel' | 'from_hub_channel' | 'id' | IbcKeySpecifier)[];
export type IbcFieldPolicy = {
	from_factory_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	from_hub_channel?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeplrKeySpecifier = ('bech32Config' | 'bip44' | 'chainID' | 'chainName' | 'coinType' | 'currencies' | 'explorer_url' | 'features' | 'feeCurrencies' | 'gasPriceStep' | 'id' | 'rest' | 'rpc' | 'stakeCurrency' | KeplrKeySpecifier)[];
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
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	rest?: FieldPolicy<any> | FieldReadFunction<any>,
	rpc?: FieldPolicy<any> | FieldReadFunction<any>,
	stakeCurrency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityKeySpecifier = ('id' | 'pair' | 'token_1_reserve' | 'token_2_reserve' | 'total_lp_tokens' | LiquidityKeySpecifier)[];
export type LiquidityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	token_1_reserve?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2_reserve?: FieldPolicy<any> | FieldReadFunction<any>,
	total_lp_tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LiquidityDBKeySpecifier = ('id' | 'token_1_liquidity' | 'token_2_liquidity' | LiquidityDBKeySpecifier)[];
export type LiquidityDBFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_1_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2_liquidity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LpTokenAddrKeySpecifier = ('id' | 'token_address' | LpTokenAddrKeySpecifier)[];
export type LpTokenAddrFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MetadataKeySpecifier = ('chain_type' | 'chain_uids' | 'coinDecimal' | 'created_at' | 'description' | 'dex' | 'displayName' | 'id' | 'image' | 'is_price_from_oracle' | 'is_verified' | 'min_swap_value' | 'oracle_price' | 'price' | 'price_change_7d' | 'price_change_24h' | 'social' | 'tags' | 'tokenId' | 'total_volume' | 'total_volume_24h' | MetadataKeySpecifier)[];
export type MetadataFieldPolicy = {
	chain_type?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uids?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDecimal?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dex?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	is_price_from_oracle?: FieldPolicy<any> | FieldReadFunction<any>,
	is_verified?: FieldPolicy<any> | FieldReadFunction<any>,
	min_swap_value?: FieldPolicy<any> | FieldReadFunction<any>,
	oracle_price?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	price_change_7d?: FieldPolicy<any> | FieldReadFunction<any>,
	price_change_24h?: FieldPolicy<any> | FieldReadFunction<any>,
	social?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenId?: FieldPolicy<any> | FieldReadFunction<any>,
	total_volume?: FieldPolicy<any> | FieldReadFunction<any>,
	total_volume_24h?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MigrationStatusResponseKeySpecifier = ('active_liquidity' | 'id' | 'migrated_at' | 'mode' | 'positions_migrated' | 'revision' | 'source_version' | 'total_liquidity' | MigrationStatusResponseKeySpecifier)[];
export type MigrationStatusResponseFieldPolicy = {
	active_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	migrated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	positions_migrated?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	source_version?: FieldPolicy<any> | FieldReadFunction<any>,
	total_liquidity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MultiQueryKeySpecifier = ('raw_queries' | 'smart_queries' | MultiQueryKeySpecifier)[];
export type MultiQueryFieldPolicy = {
	raw_queries?: FieldPolicy<any> | FieldReadFunction<any>,
	smart_queries?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MyPoolsKeySpecifier = ('height' | 'id' | 'pair' | 'user' | 'vlp' | MyPoolsKeySpecifier)[];
export type MyPoolsFieldPolicy = {
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NativeKeySpecifier = ('denom' | 'id' | NativeKeySpecifier)[];
export type NativeFieldPolicy = {
	denom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NativeCurrencyKeySpecifier = ('decimals' | 'id' | 'name' | 'symbol' | NativeCurrencyKeySpecifier)[];
export type NativeCurrencyFieldPolicy = {
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NativeTokenKeySpecifier = ('denom' | NativeTokenKeySpecifier)[];
export type NativeTokenFieldPolicy = {
	denom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NativeTokenTypeKeySpecifier = ('native' | NativeTokenTypeKeySpecifier)[];
export type NativeTokenTypeFieldPolicy = {
	native?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObserveResponseKeySpecifier = ('id' | 'seconds_per_liquidity_cumulative_x128s' | 'tick_cumulatives' | ObserveResponseKeySpecifier)[];
export type ObserveResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seconds_per_liquidity_cumulative_x128s?: FieldPolicy<any> | FieldReadFunction<any>,
	tick_cumulatives?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginationInfoKeySpecifier = ('id' | 'limit' | 'offset' | 'total_count' | PaginationInfoKeySpecifier)[];
export type PaginationInfoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	limit?: FieldPolicy<any> | FieldReadFunction<any>,
	offset?: FieldPolicy<any> | FieldReadFunction<any>,
	total_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PairKeySpecifier = ('id' | 'token_1' | 'token_2' | PairKeySpecifier)[];
export type PairFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_1?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PairsInPoolKeySpecifier = ('id' | 'pair' | 'vlp' | PairsInPoolKeySpecifier)[];
export type PairsInPoolFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PartnerFeesCollectedKeySpecifier = ('id' | 'total' | PartnerFeesCollectedKeySpecifier)[];
export type PartnerFeesCollectedFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolKeySpecifier = ('id' | 'lp_shares' | 'pool_key' | 'reserve_1' | 'reserve_2' | PoolKeySpecifier)[];
export type PoolFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lp_shares?: FieldPolicy<any> | FieldReadFunction<any>,
	pool_key?: FieldPolicy<any> | FieldReadFunction<any>,
	reserve_1?: FieldPolicy<any> | FieldReadFunction<any>,
	reserve_2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolConfigKeySpecifier = ('concentrated' | 'constant_product' | 'id' | 'stable' | PoolConfigKeySpecifier)[];
export type PoolConfigFieldPolicy = {
	concentrated?: FieldPolicy<any> | FieldReadFunction<any>,
	constant_product?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolKeyOutputKeySpecifier = ('id' | 'pair' | 'pool_type' | PoolKeyOutputKeySpecifier)[];
export type PoolKeyOutputFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	pool_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolKeyVlpResponseKeySpecifier = ('id' | 'pool_type' | 'token_1' | 'token_2' | 'vlp' | PoolKeyVlpResponseKeySpecifier)[];
export type PoolKeyVlpResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pool_type?: FieldPolicy<any> | FieldReadFunction<any>,
	token_1?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolQueriesKeySpecifier = ('fees_collected' | 'my_pools' | 'token_pair_with_liquidity' | 'volume' | 'volume_clickhouse' | PoolQueriesKeySpecifier)[];
export type PoolQueriesFieldPolicy = {
	fees_collected?: FieldPolicy<any> | FieldReadFunction<any>,
	my_pools?: FieldPolicy<any> | FieldReadFunction<any>,
	token_pair_with_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>,
	volume_clickhouse?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolTypeOutputKeySpecifier = ('concentrated' | 'constant_product' | 'id' | 'stable' | PoolTypeOutputKeySpecifier)[];
export type PoolTypeOutputFieldPolicy = {
	concentrated?: FieldPolicy<any> | FieldReadFunction<any>,
	constant_product?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolsKeySpecifier = ('chain_uid' | 'id' | 'pool' | PoolsKeySpecifier)[];
export type PoolsFieldPolicy = {
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pool?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PoolsResponseKeySpecifier = ('id' | 'pagination' | 'pools' | PoolsResponseKeySpecifier)[];
export type PoolsResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	pools?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionResponseKeySpecifier = ('chain_uid' | 'fee_growth_inside_0_last_x128' | 'fee_growth_inside_1_last_x128' | 'id' | 'liquidity' | 'lower_tick_index' | 'position_id' | 'tokens_owed_0' | 'tokens_owed_1' | 'upper_tick_index' | PositionResponseKeySpecifier)[];
export type PositionResponseFieldPolicy = {
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_growth_inside_0_last_x128?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_growth_inside_1_last_x128?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	lower_tick_index?: FieldPolicy<any> | FieldReadFunction<any>,
	position_id?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_owed_0?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_owed_1?: FieldPolicy<any> | FieldReadFunction<any>,
	upper_tick_index?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionTokenContractResponseKeySpecifier = ('contract_address' | 'id' | PositionTokenContractResponseKeySpecifier)[];
export type PositionTokenContractResponseFieldPolicy = {
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProtocolFeesResponseKeySpecifier = ('amount_0' | 'amount_1' | 'id' | ProtocolFeesResponseKeySpecifier)[];
export type ProtocolFeesResponseFieldPolicy = {
	amount_0?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_1?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('chains' | 'claim' | 'cw' | 'cw_multicall' | 'factory' | 'pool' | 'router' | 'token' | 'vcoin' | 'vlp' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	chains?: FieldPolicy<any> | FieldReadFunction<any>,
	claim?: FieldPolicy<any> | FieldReadFunction<any>,
	cw?: FieldPolicy<any> | FieldReadFunction<any>,
	cw_multicall?: FieldPolicy<any> | FieldReadFunction<any>,
	factory?: FieldPolicy<any> | FieldReadFunction<any>,
	pool?: FieldPolicy<any> | FieldReadFunction<any>,
	router?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	vcoin?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RPCConfigKeySpecifier = ('http' | 'id' | RPCConfigKeySpecifier)[];
export type RPCConfigFieldPolicy = {
	http?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RPCUrlsKeySpecifier = ('default' | 'id' | RPCUrlsKeySpecifier)[];
export type RPCUrlsFieldPolicy = {
	default?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RawQueryResponseKeySpecifier = ('results' | RawQueryResponseKeySpecifier)[];
export type RawQueryResponseFieldPolicy = {
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReleaseAmountsKeySpecifier = ('amount' | 'cross_chain_user' | 'id' | ReleaseAmountsKeySpecifier)[];
export type ReleaseAmountsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	cross_chain_user?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResultAndErrorKeySpecifier = ('error' | 'success' | ResultAndErrorKeySpecifier)[];
export type ResultAndErrorFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouterKeySpecifier = ('all_chains' | 'all_escrows' | 'all_tokens' | 'all_vlps' | 'chain' | 'clp_position_info' | 'escrows' | 'id' | 'simulate_release_escrow' | 'simulate_swap' | 'state' | 'token_denoms' | 'token_pairs_from_vlp' | 'vlp' | 'vlp_by_pool_key' | RouterKeySpecifier)[];
export type RouterFieldPolicy = {
	all_chains?: FieldPolicy<any> | FieldReadFunction<any>,
	all_escrows?: FieldPolicy<any> | FieldReadFunction<any>,
	all_tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	all_vlps?: FieldPolicy<any> | FieldReadFunction<any>,
	chain?: FieldPolicy<any> | FieldReadFunction<any>,
	clp_position_info?: FieldPolicy<any> | FieldReadFunction<any>,
	escrows?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	simulate_release_escrow?: FieldPolicy<any> | FieldReadFunction<any>,
	simulate_swap?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	token_denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	token_pairs_from_vlp?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp_by_pool_key?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouterConfigKeySpecifier = ('chain_uid' | 'contract_address' | 'explorer_url' | 'id' | 'logo' | 'type' | RouterConfigKeySpecifier)[];
export type RouterConfigFieldPolicy = {
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>,
	explorer_url?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimulateReleaseEscrowKeySpecifier = ('id' | 'release_amounts' | 'remaining_amount' | SimulateReleaseEscrowKeySpecifier)[];
export type SimulateReleaseEscrowFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	release_amounts?: FieldPolicy<any> | FieldReadFunction<any>,
	remaining_amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Slot0ResponseKeySpecifier = ('fee_growth_global_0_x128' | 'fee_growth_global_1_x128' | 'id' | 'liquidity' | 'observation_cardinality' | 'observation_cardinality_next' | 'observation_index' | 'sqrt_price_x96' | 'tick' | Slot0ResponseKeySpecifier)[];
export type Slot0ResponseFieldPolicy = {
	fee_growth_global_0_x128?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_growth_global_1_x128?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	observation_cardinality?: FieldPolicy<any> | FieldReadFunction<any>,
	observation_cardinality_next?: FieldPolicy<any> | FieldReadFunction<any>,
	observation_index?: FieldPolicy<any> | FieldReadFunction<any>,
	sqrt_price_x96?: FieldPolicy<any> | FieldReadFunction<any>,
	tick?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmartTokenKeySpecifier = ('contract_address' | SmartTokenKeySpecifier)[];
export type SmartTokenFieldPolicy = {
	contract_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmartTokenTypeKeySpecifier = ('smart' | SmartTokenTypeKeySpecifier)[];
export type SmartTokenTypeFieldPolicy = {
	smart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StablePoolConfigKeySpecifier = ('amp_factor' | 'id' | StablePoolConfigKeySpecifier)[];
export type StablePoolConfigFieldPolicy = {
	amp_factor?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StakeCurrencyKeySpecifier = ('coinDecimals' | 'coinDenom' | 'coinGeckoID' | 'coinMinimalDenom' | 'id' | StakeCurrencyKeySpecifier)[];
export type StakeCurrencyFieldPolicy = {
	coinDecimals?: FieldPolicy<any> | FieldReadFunction<any>,
	coinDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	coinGeckoID?: FieldPolicy<any> | FieldReadFunction<any>,
	coinMinimalDenom?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TickResponseKeySpecifier = ('fee_growth_outside_0_x128' | 'fee_growth_outside_1_x128' | 'id' | 'index' | 'initialized' | 'liquidity_gross' | 'liquidity_net' | TickResponseKeySpecifier)[];
export type TickResponseFieldPolicy = {
	fee_growth_outside_0_x128?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_growth_outside_1_x128?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	initialized?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidity_gross?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidity_net?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TicksResponseKeySpecifier = ('id' | 'ticks' | TicksResponseKeySpecifier)[];
export type TicksResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ticks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenArrayKeySpecifier = ('id' | 'tokens' | TokenArrayKeySpecifier)[];
export type TokenArrayFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenDenomKeySpecifier = ('chain_uid' | 'id' | 'token_type' | TokenDenomKeySpecifier)[];
export type TokenDenomFieldPolicy = {
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenDenomWithChainTypeKeySpecifier = ('chain_type' | 'chain_uid' | 'id' | 'token_type' | TokenDenomWithChainTypeKeySpecifier)[];
export type TokenDenomWithChainTypeFieldPolicy = {
	chain_type?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenDenomWithTokenIdResponseKeySpecifier = ('denoms' | 'id' | 'token_id' | TokenDenomWithTokenIdResponseKeySpecifier)[];
export type TokenDenomWithTokenIdResponseFieldPolicy = {
	denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenDenomsResponseKeySpecifier = ('denoms' | 'id' | TokenDenomsResponseKeySpecifier)[];
export type TokenDenomsResponseFieldPolicy = {
	denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenIdKeySpecifier = ('id' | TokenIdKeySpecifier)[];
export type TokenIdFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenInfoKeySpecifier = ('decimals' | 'id' | 'name' | 'symbol' | 'total_supply' | TokenInfoKeySpecifier)[];
export type TokenInfoFieldPolicy = {
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>,
	total_supply?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenLiquidityKeySpecifier = ('id' | 'token' | 'total_liquidity' | 'total_volume' | TokenLiquidityKeySpecifier)[];
export type TokenLiquidityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	total_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	total_volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenOutKeySpecifier = ('amount_out' | 'asset_out' | 'id' | TokenOutKeySpecifier)[];
export type TokenOutFieldPolicy = {
	amount_out?: FieldPolicy<any> | FieldReadFunction<any>,
	asset_out?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenPairWithLiquidityPaginatedKeySpecifier = ('id' | 'pagination' | 'results' | TokenPairWithLiquidityPaginatedKeySpecifier)[];
export type TokenPairWithLiquidityPaginatedFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pagination?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenPairWithLiquidityResponseKeySpecifier = ('apr' | 'created_at' | 'id' | 'pair' | 'tags' | 'total_liquidity' | 'vlp' | TokenPairWithLiquidityResponseKeySpecifier)[];
export type TokenPairWithLiquidityResponseFieldPolicy = {
	apr?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	total_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenQueriesKeySpecifier = ('all_dexes' | 'chains_for_token_launch' | 'dex_metadata' | 'get_all_faucets' | 'token_denoms' | 'token_liquidities' | 'token_liquidity' | 'token_metadata_by_id' | 'token_metadatas' | 'tokens_metadata' | TokenQueriesKeySpecifier)[];
export type TokenQueriesFieldPolicy = {
	all_dexes?: FieldPolicy<any> | FieldReadFunction<any>,
	chains_for_token_launch?: FieldPolicy<any> | FieldReadFunction<any>,
	dex_metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	get_all_faucets?: FieldPolicy<any> | FieldReadFunction<any>,
	token_denoms?: FieldPolicy<any> | FieldReadFunction<any>,
	token_liquidities?: FieldPolicy<any> | FieldReadFunction<any>,
	token_liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	token_metadata_by_id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_metadatas?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens_metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TotalFeesCollectedKeySpecifier = ('euclid_fees' | 'id' | 'lp_fees' | TotalFeesCollectedKeySpecifier)[];
export type TotalFeesCollectedFieldPolicy = {
	euclid_fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lp_fees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TotalFeesPerDenomResponseKeySpecifier = ('euclid_fees' | 'id' | 'lp_fees' | TotalFeesPerDenomResponseKeySpecifier)[];
export type TotalFeesPerDenomResponseFieldPolicy = {
	euclid_fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lp_fees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPositionKeySpecifier = ('id' | 'liquidity' | 'pair' | 'position_detail' | 'token_id' | 'vlp_address' | UserPositionKeySpecifier)[];
export type UserPositionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	position_detail?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPositionsResponseKeySpecifier = ('id' | 'positions' | UserPositionsResponseKeySpecifier)[];
export type UserPositionsResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinKeySpecifier = ('balance' | 'state' | 'unified_user_balance' | 'user_balance' | VcoinKeySpecifier)[];
export type VcoinFieldPolicy = {
	balance?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	unified_user_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	user_balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinBalanceKeySpecifier = ('amount' | 'id' | VcoinBalanceKeySpecifier)[];
export type VcoinBalanceFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinBalanceResponseKeySpecifier = ('balances' | 'chain_uid' | 'id' | VcoinBalanceResponseKeySpecifier)[];
export type VcoinBalanceResponseFieldPolicy = {
	balances?: FieldPolicy<any> | FieldReadFunction<any>,
	chain_uid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VcoinBalanceUserResponseKeySpecifier = ('amount' | 'id' | 'token_id' | VcoinBalanceUserResponseKeySpecifier)[];
export type VcoinBalanceUserResponseFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	token_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VlpKeySpecifier = ('all_pools' | 'fee' | 'liquidity' | 'migration_status' | 'observe' | 'pool' | 'position' | 'protocol_fees' | 'slot0' | 'state' | 'tick' | 'ticks' | 'total_fees_collected' | 'total_fees_collected_per_denom' | VlpKeySpecifier)[];
export type VlpFieldPolicy = {
	all_pools?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	liquidity?: FieldPolicy<any> | FieldReadFunction<any>,
	migration_status?: FieldPolicy<any> | FieldReadFunction<any>,
	observe?: FieldPolicy<any> | FieldReadFunction<any>,
	pool?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	protocol_fees?: FieldPolicy<any> | FieldReadFunction<any>,
	slot0?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	tick?: FieldPolicy<any> | FieldReadFunction<any>,
	ticks?: FieldPolicy<any> | FieldReadFunction<any>,
	total_fees_collected?: FieldPolicy<any> | FieldReadFunction<any>,
	total_fees_collected_per_denom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VlpWithTokenPairKeySpecifier = ('id' | 'pool_key' | 'token_1' | 'token_2' | 'vlp' | VlpWithTokenPairKeySpecifier)[];
export type VlpWithTokenPairFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pool_key?: FieldPolicy<any> | FieldReadFunction<any>,
	token_1?: FieldPolicy<any> | FieldReadFunction<any>,
	token_2?: FieldPolicy<any> | FieldReadFunction<any>,
	vlp?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VolumeBreakdownKeySpecifier = ('id' | 'pair' | 'volume' | VolumeBreakdownKeySpecifier)[];
export type VolumeBreakdownFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pair?: FieldPolicy<any> | FieldReadFunction<any>,
	volume?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VolumeResponseKeySpecifier = ('id' | 'total_liquidity' | 'total_volume' | 'volume_24hours' | 'volume_breakdown_24hours' | VolumeResponseKeySpecifier)[];
export type VolumeResponseFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
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
	ClaimQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClaimQueriesKeySpecifier | (() => undefined | ClaimQueriesKeySpecifier),
		fields?: ClaimQueriesFieldPolicy,
	},
	ClaimState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClaimStateKeySpecifier | (() => undefined | ClaimStateKeySpecifier),
		fields?: ClaimStateFieldPolicy,
	},
	ClaimerResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClaimerResponseKeySpecifier | (() => undefined | ClaimerResponseKeySpecifier),
		fields?: ClaimerResponseFieldPolicy,
	},
	ClaimerResponseWithStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClaimerResponseWithStatusKeySpecifier | (() => undefined | ClaimerResponseWithStatusKeySpecifier),
		fields?: ClaimerResponseWithStatusFieldPolicy,
	},
	ClpPositionInfoResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClpPositionInfoResponseKeySpecifier | (() => undefined | ClpPositionInfoResponseKeySpecifier),
		fields?: ClpPositionInfoResponseFieldPolicy,
	},
	ConcentratedPoolParams?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConcentratedPoolParamsKeySpecifier | (() => undefined | ConcentratedPoolParamsKeySpecifier),
		fields?: ConcentratedPoolParamsFieldPolicy,
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
	DexMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DexMetadataKeySpecifier | (() => undefined | DexMetadataKeySpecifier),
		fields?: DexMetadataFieldPolicy,
	},
	EVMChainConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EVMChainConfigKeySpecifier | (() => undefined | EVMChainConfigKeySpecifier),
		fields?: EVMChainConfigFieldPolicy,
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
	Faucet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FaucetKeySpecifier | (() => undefined | FaucetKeySpecifier),
		fields?: FaucetFieldPolicy,
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
	MigrationStatusResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MigrationStatusResponseKeySpecifier | (() => undefined | MigrationStatusResponseKeySpecifier),
		fields?: MigrationStatusResponseFieldPolicy,
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
	NativeCurrency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NativeCurrencyKeySpecifier | (() => undefined | NativeCurrencyKeySpecifier),
		fields?: NativeCurrencyFieldPolicy,
	},
	NativeToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NativeTokenKeySpecifier | (() => undefined | NativeTokenKeySpecifier),
		fields?: NativeTokenFieldPolicy,
	},
	NativeTokenType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NativeTokenTypeKeySpecifier | (() => undefined | NativeTokenTypeKeySpecifier),
		fields?: NativeTokenTypeFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	ObserveResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObserveResponseKeySpecifier | (() => undefined | ObserveResponseKeySpecifier),
		fields?: ObserveResponseFieldPolicy,
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
	PoolConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolConfigKeySpecifier | (() => undefined | PoolConfigKeySpecifier),
		fields?: PoolConfigFieldPolicy,
	},
	PoolKeyOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolKeyOutputKeySpecifier | (() => undefined | PoolKeyOutputKeySpecifier),
		fields?: PoolKeyOutputFieldPolicy,
	},
	PoolKeyVlpResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolKeyVlpResponseKeySpecifier | (() => undefined | PoolKeyVlpResponseKeySpecifier),
		fields?: PoolKeyVlpResponseFieldPolicy,
	},
	PoolQueries?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolQueriesKeySpecifier | (() => undefined | PoolQueriesKeySpecifier),
		fields?: PoolQueriesFieldPolicy,
	},
	PoolTypeOutput?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolTypeOutputKeySpecifier | (() => undefined | PoolTypeOutputKeySpecifier),
		fields?: PoolTypeOutputFieldPolicy,
	},
	Pools?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolsKeySpecifier | (() => undefined | PoolsKeySpecifier),
		fields?: PoolsFieldPolicy,
	},
	PoolsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PoolsResponseKeySpecifier | (() => undefined | PoolsResponseKeySpecifier),
		fields?: PoolsResponseFieldPolicy,
	},
	PositionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionResponseKeySpecifier | (() => undefined | PositionResponseKeySpecifier),
		fields?: PositionResponseFieldPolicy,
	},
	PositionTokenContractResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionTokenContractResponseKeySpecifier | (() => undefined | PositionTokenContractResponseKeySpecifier),
		fields?: PositionTokenContractResponseFieldPolicy,
	},
	ProtocolFeesResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProtocolFeesResponseKeySpecifier | (() => undefined | ProtocolFeesResponseKeySpecifier),
		fields?: ProtocolFeesResponseFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RPCConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RPCConfigKeySpecifier | (() => undefined | RPCConfigKeySpecifier),
		fields?: RPCConfigFieldPolicy,
	},
	RPCUrls?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RPCUrlsKeySpecifier | (() => undefined | RPCUrlsKeySpecifier),
		fields?: RPCUrlsFieldPolicy,
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
	Slot0Response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Slot0ResponseKeySpecifier | (() => undefined | Slot0ResponseKeySpecifier),
		fields?: Slot0ResponseFieldPolicy,
	},
	SmartToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmartTokenKeySpecifier | (() => undefined | SmartTokenKeySpecifier),
		fields?: SmartTokenFieldPolicy,
	},
	SmartTokenType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmartTokenTypeKeySpecifier | (() => undefined | SmartTokenTypeKeySpecifier),
		fields?: SmartTokenTypeFieldPolicy,
	},
	StablePoolConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StablePoolConfigKeySpecifier | (() => undefined | StablePoolConfigKeySpecifier),
		fields?: StablePoolConfigFieldPolicy,
	},
	StakeCurrency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StakeCurrencyKeySpecifier | (() => undefined | StakeCurrencyKeySpecifier),
		fields?: StakeCurrencyFieldPolicy,
	},
	TickResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TickResponseKeySpecifier | (() => undefined | TickResponseKeySpecifier),
		fields?: TickResponseFieldPolicy,
	},
	TicksResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TicksResponseKeySpecifier | (() => undefined | TicksResponseKeySpecifier),
		fields?: TicksResponseFieldPolicy,
	},
	TokenArray?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenArrayKeySpecifier | (() => undefined | TokenArrayKeySpecifier),
		fields?: TokenArrayFieldPolicy,
	},
	TokenDenom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenDenomKeySpecifier | (() => undefined | TokenDenomKeySpecifier),
		fields?: TokenDenomFieldPolicy,
	},
	TokenDenomWithChainType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenDenomWithChainTypeKeySpecifier | (() => undefined | TokenDenomWithChainTypeKeySpecifier),
		fields?: TokenDenomWithChainTypeFieldPolicy,
	},
	TokenDenomWithTokenIdResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenDenomWithTokenIdResponseKeySpecifier | (() => undefined | TokenDenomWithTokenIdResponseKeySpecifier),
		fields?: TokenDenomWithTokenIdResponseFieldPolicy,
	},
	TokenDenomsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenDenomsResponseKeySpecifier | (() => undefined | TokenDenomsResponseKeySpecifier),
		fields?: TokenDenomsResponseFieldPolicy,
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
	TokenPairWithLiquidityPaginated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenPairWithLiquidityPaginatedKeySpecifier | (() => undefined | TokenPairWithLiquidityPaginatedKeySpecifier),
		fields?: TokenPairWithLiquidityPaginatedFieldPolicy,
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
	UserPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPositionKeySpecifier | (() => undefined | UserPositionKeySpecifier),
		fields?: UserPositionFieldPolicy,
	},
	UserPositionsResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPositionsResponseKeySpecifier | (() => undefined | UserPositionsResponseKeySpecifier),
		fields?: UserPositionsResponseFieldPolicy,
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