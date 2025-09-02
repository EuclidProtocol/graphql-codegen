"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodegenGeneratedFactoryAllTokensDocument = exports.CodegenGeneratedFactoryAllTokensPaginationDocument = exports.CodegenGeneratedFactoryAllPoolsDocument = exports.CodegenGeneratedFactoryAllPoolsPoolsDocument = exports.CodegenGeneratedFactoryAllPoolsPoolsPairDocument = exports.CodegenGeneratedFactoryAllPoolsPaginationDocument = exports.CodegenGeneratedCwMulticallSmartQueriesDocument = exports.CodegenGeneratedCwMulticallSmartQueriesResultsDocument = exports.CodegenGeneratedCwMulticallRawQueriesDocument = exports.CodegenGeneratedCwMulticallRawQueriesResultsDocument = exports.CodegenGeneratedCwDocument = exports.CodegenGeneratedCwTokenInfoDocument = exports.CodegenGeneratedCwBalanceDocument = exports.CodegenGeneratedClaimDocument = exports.CodegenGeneratedClaimUserClaimsDocument = exports.CodegenGeneratedClaimUserClaimsSenderDocument = exports.CodegenGeneratedClaimStateDocument = exports.CodegenGeneratedClaimSenderClaimsDocument = exports.CodegenGeneratedClaimSenderClaimsSenderDocument = exports.CodegenGeneratedClaimClaimsByEmailDocument = exports.CodegenGeneratedClaimClaimsByEmailSenderDocument = exports.CodegenGeneratedClaimClaimsByClaimerPubKeyDocument = exports.CodegenGeneratedClaimClaimsByClaimerPubKeySenderDocument = exports.CodegenGeneratedClaimClaimByPsuedoClaimIdDocument = exports.CodegenGeneratedClaimClaimByPsuedoClaimIdSenderDocument = exports.CodegenGeneratedClaimClaimDocument = exports.CodegenGeneratedClaimClaimSenderDocument = exports.CodegenGeneratedChainsDocument = exports.CodegenGeneratedChainsRouterConfigDocument = exports.CodegenGeneratedChainsKeplrConfigDocument = exports.CodegenGeneratedChainsKeplrConfigStakecurrencyDocument = exports.CodegenGeneratedChainsKeplrConfigGaspricestepDocument = exports.CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument = exports.CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument = exports.CodegenGeneratedChainsKeplrConfigCurrenciesDocument = exports.CodegenGeneratedChainsKeplrConfigBip44Document = exports.CodegenGeneratedChainsKeplrConfigBech32ConfigDocument = exports.CodegenGeneratedChainsEvmChainConfigDocument = exports.CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument = exports.CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument = exports.CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument = exports.CodegenGeneratedChainsContractsDocument = exports.CodegenGeneratedChainsChainConfigDocument = exports.CodegenGeneratedChainsAllEvmChainsDocument = exports.CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument = exports.CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument = exports.CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument = exports.CodegenGeneratedChainsAllChainsDocument = exports.ITokenPairSortBy = exports.ISortOrder = void 0;
exports.CodegenGeneratedTokenTokenLiquidityDocument = exports.CodegenGeneratedTokenTokenLiquiditiesDocument = exports.CodegenGeneratedTokenTokenDenomsDocument = exports.CodegenGeneratedTokenTokenDenomsDenomsDocument = exports.CodegenGeneratedTokenGetAllFaucetsDocument = exports.CodegenGeneratedTokenDexMetadataDocument = exports.CodegenGeneratedTokenChainsForTokenLaunchDocument = exports.CodegenGeneratedTokenAllDexesDocument = exports.CodegenGeneratedRouterDocument = exports.CodegenGeneratedRouterVlpDocument = exports.CodegenGeneratedRouterTokenPairsFromVlpDocument = exports.CodegenGeneratedRouterTokenDenomsDocument = exports.CodegenGeneratedRouterTokenDenomsDenomsDocument = exports.CodegenGeneratedRouterStateDocument = exports.CodegenGeneratedRouterSimulateSwapDocument = exports.CodegenGeneratedRouterSimulateReleaseEscrowDocument = exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument = exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument = exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument = exports.CodegenGeneratedRouterEscrowsDocument = exports.CodegenGeneratedRouterChainDocument = exports.CodegenGeneratedRouterChainChainDocument = exports.CodegenGeneratedRouterChainChainChainTypeDocument = exports.CodegenGeneratedRouterChainChainChainTypeIbcDocument = exports.CodegenGeneratedRouterAllVlpsDocument = exports.CodegenGeneratedRouterAllVlpsVlpsDocument = exports.CodegenGeneratedRouterAllTokensDocument = exports.CodegenGeneratedRouterAllEscrowsDocument = exports.CodegenGeneratedRouterAllChainsDocument = exports.CodegenGeneratedPoolDocument = exports.CodegenGeneratedPoolVolumeDocument = exports.CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument = exports.CodegenGeneratedPoolTokenPairWithLiquidityDocument = exports.CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument = exports.CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument = exports.CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument = exports.CodegenGeneratedPoolMyPoolsDocument = exports.CodegenGeneratedPoolMyPoolsUserDocument = exports.CodegenGeneratedPoolMyPoolsPairDocument = exports.CodegenGeneratedPoolFeesCollectedDocument = exports.CodegenGeneratedPoolFeesCollectedBreakdownDocument = exports.CodegenGeneratedFactoryDocument = exports.CodegenGeneratedFactoryVlpDocument = exports.CodegenGeneratedFactoryStateDocument = exports.CodegenGeneratedFactoryPartnerFeesCollectedDocument = exports.CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument = exports.CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument = exports.CodegenGeneratedFactoryGetLptokenAddressDocument = exports.CodegenGeneratedFactoryEscrowDocument = exports.CodegenGeneratedFactoryAllowedDenomsDocument = void 0;
exports.CodegenGeneratedVlpDocument = exports.CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument = exports.CodegenGeneratedVlpTotalFeesCollectedDocument = exports.CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument = exports.CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument = exports.CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument = exports.CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument = exports.CodegenGeneratedVlpStateDocument = exports.CodegenGeneratedVlpStatePoolConfigDocument = exports.CodegenGeneratedVlpStatePoolConfigStableDocument = exports.CodegenGeneratedVlpStatePairDocument = exports.CodegenGeneratedVlpStateFeeDocument = exports.CodegenGeneratedVlpStateFeeRecipientDocument = exports.CodegenGeneratedVlpPoolDocument = exports.CodegenGeneratedVlpLiquidityDocument = exports.CodegenGeneratedVlpLiquidityPairDocument = exports.CodegenGeneratedVlpFeeDocument = exports.CodegenGeneratedVlpFeeRecipientDocument = exports.CodegenGeneratedVlpAllPoolsDocument = exports.CodegenGeneratedVlpAllPoolsPoolsDocument = exports.CodegenGeneratedVlpAllPoolsPoolsPoolDocument = exports.CodegenGeneratedVlpAllPoolsPaginationDocument = exports.CodegenGeneratedVcoinDocument = exports.CodegenGeneratedVcoinUserBalanceDocument = exports.CodegenGeneratedVcoinUserBalanceBalancesDocument = exports.CodegenGeneratedVcoinStateDocument = exports.CodegenGeneratedVcoinBalanceDocument = exports.CodegenGeneratedTokenDocument = exports.CodegenGeneratedTokenTokensMetadataDocument = exports.CodegenGeneratedTokenTokenMetadatasDocument = exports.CodegenGeneratedTokenTokenMetadataByIdDocument = void 0;
exports.getSdk = getSdk;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var ISortOrder;
(function (ISortOrder) {
    ISortOrder["ASC"] = "ASC";
    ISortOrder["DESC"] = "DESC";
})(ISortOrder || (exports.ISortOrder = ISortOrder = {}));
var ITokenPairSortBy;
(function (ITokenPairSortBy) {
    ITokenPairSortBy["CREATED_AT"] = "CREATED_AT";
    ITokenPairSortBy["TOTAL_LIQUIDITY"] = "TOTAL_LIQUIDITY";
})(ITokenPairSortBy || (exports.ITokenPairSortBy = ITokenPairSortBy = {}));
exports.CodegenGeneratedChainsAllChainsDocument = (0, graphql_tag_1.default) `
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
      token_factory_address
      type
    }
  }
}
    `;
exports.CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsAllEvmChainsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsChainConfigDocument = (0, graphql_tag_1.default) `
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
      token_factory_address
      type
    }
  }
}
    `;
exports.CodegenGeneratedChainsContractsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsEvmChainConfigDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigBech32ConfigDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigBip44Document = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigCurrenciesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigGaspricestepDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigStakecurrencyDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsKeplrConfigDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsRouterConfigDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedChainsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedClaimClaimSenderDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CLAIM_CLAIM_SENDER($claim_claim_claim_id: Int!) {
  claim {
    claim(claim_id: $claim_claim_claim_id) {
      sender {
        address
        chain_uid
      }
    }
  }
}
    `;
exports.CodegenGeneratedClaimClaimDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CLAIM_CLAIM($claim_claim_claim_id: Int!) {
  claim {
    claim(claim_id: $claim_claim_claim_id) {
      amount
      claim_group_id
      claim_id
      claimer
      pseudo_claim_id
      sender {
        address
        chain_uid
      }
      status
      token
    }
  }
}
    `;
exports.CodegenGeneratedClaimClaimByPsuedoClaimIdSenderDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID_SENDER($claim_claim_by_psuedo_claim_id_psuedo_claim_id: String!) {
  claim {
    claim_by_psuedo_claim_id(
      psuedo_claim_id: $claim_claim_by_psuedo_claim_id_psuedo_claim_id
    ) {
      sender {
        address
        chain_uid
      }
    }
  }
}
    `;
exports.CodegenGeneratedClaimClaimByPsuedoClaimIdDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID($claim_claim_by_psuedo_claim_id_psuedo_claim_id: String!) {
  claim {
    claim_by_psuedo_claim_id(
      psuedo_claim_id: $claim_claim_by_psuedo_claim_id_psuedo_claim_id
    ) {
      amount
      claim_group_id
      claim_id
      claimer
      pseudo_claim_id
      sender {
        address
        chain_uid
      }
      status
      token
    }
  }
}
    `;
exports.CodegenGeneratedClaimClaimsByClaimerPubKeySenderDocument = (0, graphql_tag_1.default) `
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
      }
    }
  }
}
    `;
exports.CodegenGeneratedClaimClaimsByClaimerPubKeyDocument = (0, graphql_tag_1.default) `
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
      pseudo_claim_id
      sender {
        address
        chain_uid
      }
      status
      token
    }
  }
}
    `;
exports.CodegenGeneratedClaimClaimsByEmailSenderDocument = (0, graphql_tag_1.default) `
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
      }
    }
  }
}
    `;
exports.CodegenGeneratedClaimClaimsByEmailDocument = (0, graphql_tag_1.default) `
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
      pseudo_claim_id
      sender {
        address
        chain_uid
      }
      status
      token
    }
  }
}
    `;
exports.CodegenGeneratedClaimSenderClaimsSenderDocument = (0, graphql_tag_1.default) `
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
      }
    }
  }
}
    `;
exports.CodegenGeneratedClaimSenderClaimsDocument = (0, graphql_tag_1.default) `
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
      pseudo_claim_id
      sender {
        address
        chain_uid
      }
      status
      token
    }
  }
}
    `;
exports.CodegenGeneratedClaimStateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CLAIM_STATE {
  claim {
    state {
      admin
      chain_uid
      factory_address
      vcoin_address
    }
  }
}
    `;
exports.CodegenGeneratedClaimUserClaimsSenderDocument = (0, graphql_tag_1.default) `
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
      }
    }
  }
}
    `;
exports.CodegenGeneratedClaimUserClaimsDocument = (0, graphql_tag_1.default) `
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
      pseudo_claim_id
      sender {
        address
        chain_uid
      }
      status
      token
    }
  }
}
    `;
exports.CodegenGeneratedClaimDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CLAIM {
  claim {
    state {
      admin
      chain_uid
      factory_address
      vcoin_address
    }
  }
}
    `;
exports.CodegenGeneratedCwBalanceDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_CW_BALANCE($chain_uid: String!, $contract: String!, $cw_balance_address: String!) {
  cw(chain_uid: $chain_uid, contract: $contract) {
    balance(address: $cw_balance_address) {
      balance
    }
  }
}
    `;
exports.CodegenGeneratedCwTokenInfoDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedCwDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedCwMulticallRawQueriesResultsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedCwMulticallRawQueriesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedCwMulticallSmartQueriesResultsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedCwMulticallSmartQueriesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryAllPoolsPaginationDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryAllPoolsPoolsPairDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryAllPoolsPoolsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryAllPoolsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryAllTokensPaginationDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryAllTokensDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryAllowedDenomsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryEscrowDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryGetLptokenAddressDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS($chain_uid: String!, $factory_get_LpToken_address_vlp_address: String!) {
  factory(chain_uid: $chain_uid) {
    get_LpToken_address(vlp_address: $factory_get_LpToken_address_vlp_address) {
      token_address
    }
  }
}
    `;
exports.CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryPartnerFeesCollectedDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryStateDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedFactoryVlpDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_FACTORY_VLP($chain_uid: String!, $factory_vlp_pair: PairInput) {
  factory(chain_uid: $chain_uid) {
    vlp(pair: $factory_vlp_pair)
  }
}
    `;
exports.CodegenGeneratedFactoryDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolFeesCollectedBreakdownDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolFeesCollectedDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolMyPoolsPairDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolMyPoolsUserDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolMyPoolsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument = (0, graphql_tag_1.default) `
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
        limit
        offset
        total_count
      }
    }
  }
}
    `;
exports.CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument = (0, graphql_tag_1.default) `
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
          token_1
          token_2
        }
      }
    }
  }
}
    `;
exports.CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolTokenPairWithLiquidityDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolVolumeDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedPoolDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterAllChainsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterAllEscrowsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterAllTokensDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterAllVlpsVlpsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterAllVlpsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterChainChainChainTypeIbcDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterChainChainChainTypeDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterChainChainDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterChainDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterEscrowsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterSimulateReleaseEscrowDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterSimulateSwapDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterStateDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterTokenDenomsDenomsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterTokenDenomsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterTokenPairsFromVlpDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterVlpDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedRouterDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedTokenAllDexesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedTokenChainsForTokenLaunchDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TOKEN_CHAINS_FOR_TOKEN_LAUNCH {
  token {
    chains_for_token_launch {
      chain_id
      chain_uid
      display_name
      explorer_url
      factory_address
      logo
      token_factory_address
      type
    }
  }
}
    `;
exports.CodegenGeneratedTokenDexMetadataDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedTokenGetAllFaucetsDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS {
  token {
    get_all_faucets {
      faucet_link
      token
    }
  }
}
    `;
exports.CodegenGeneratedTokenTokenDenomsDenomsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedTokenTokenDenomsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedTokenTokenLiquiditiesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedTokenTokenLiquidityDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedTokenTokenMetadataByIdDocument = (0, graphql_tag_1.default) `
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
      is_verified
      min_swap_value
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
exports.CodegenGeneratedTokenTokenMetadatasDocument = (0, graphql_tag_1.default) `
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
      chain_uids
      coinDecimal
      description
      dex
      displayName
      image
      is_verified
      min_swap_value
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
exports.CodegenGeneratedTokenTokensMetadataDocument = (0, graphql_tag_1.default) `
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
      is_verified
      min_swap_value
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
exports.CodegenGeneratedTokenDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_TOKEN {
  token {
    chains_for_token_launch {
      chain_id
      chain_uid
      display_name
      explorer_url
      factory_address
      logo
      token_factory_address
      type
    }
    get_all_faucets {
      faucet_link
      token
    }
  }
}
    `;
exports.CodegenGeneratedVcoinBalanceDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_VCOIN_BALANCE($vcoin_balance_balance_key: BalanceKeyInput) {
  vcoin {
    balance(balance_key: $vcoin_balance_balance_key) {
      amount
    }
  }
}
    `;
exports.CodegenGeneratedVcoinStateDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_VCOIN_STATE {
  vcoin {
    state {
      admin
      router
    }
  }
}
    `;
exports.CodegenGeneratedVcoinUserBalanceBalancesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVcoinUserBalanceDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVcoinDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_VCOIN {
  vcoin {
    state {
      admin
      router
    }
  }
}
    `;
exports.CodegenGeneratedVlpAllPoolsPaginationDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpAllPoolsPoolsPoolDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpAllPoolsPoolsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpAllPoolsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpFeeRecipientDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpFeeDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpLiquidityPairDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpLiquidityDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpPoolDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpStateFeeRecipientDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpStateFeeDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpStatePairDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpStatePoolConfigStableDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpStatePoolConfigDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpStateDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpTotalFeesCollectedDocument = (0, graphql_tag_1.default) `
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
exports.CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument = (0, graphql_tag_1.default) `
    query CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM($contract: String, $pair: PairInput, $vlp_total_fees_collected_per_denom_denom: String!) {
  vlp(contract: $contract, pair: $pair) {
    total_fees_collected_per_denom(denom: $vlp_total_fees_collected_per_denom_denom) {
      euclid_fees
      lp_fees
    }
  }
}
    `;
exports.CodegenGeneratedVlpDocument = (0, graphql_tag_1.default) `
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
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        CODEGEN_GENERATED_CHAINS_ALL_CHAINS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsAllChainsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_ALL_CHAINS', 'query');
        },
        CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_NATIVE_CURRENCY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsAllEvmChainsNativeCurrencyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_NATIVE_CURRENCY', 'query');
        },
        CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS_DEFAULT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsAllEvmChainsRpcUrlsDefaultDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS_DEFAULT', 'query');
        },
        CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsAllEvmChainsRpcUrlsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS_RPC_URLS', 'query');
        },
        CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsAllEvmChainsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_ALL_EVM_CHAINS', 'query');
        },
        CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsChainConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_CHAIN_CONFIG', 'query');
        },
        CODEGEN_GENERATED_CHAINS_CONTRACTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsContractsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_CONTRACTS', 'query');
        },
        CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_NATIVE_CURRENCY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsEvmChainConfigNativeCurrencyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_NATIVE_CURRENCY', 'query');
        },
        CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS_DEFAULT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsEvmChainConfigRpcUrlsDefaultDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS_DEFAULT', 'query');
        },
        CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsEvmChainConfigRpcUrlsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG_RPC_URLS', 'query');
        },
        CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsEvmChainConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_EVM_CHAIN_CONFIG', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BECH32CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigBech32ConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BECH32CONFIG', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BIP44(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigBip44Document, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_BIP44', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_CURRENCIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigCurrenciesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_CURRENCIES', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES_GASPRICESTEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigFeecurrenciesGaspricestepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES_GASPRICESTEP', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigFeecurrenciesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_FEECURRENCIES', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_GASPRICESTEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigGaspricestepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_GASPRICESTEP', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_STAKECURRENCY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigStakecurrencyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG_STAKECURRENCY', 'query');
        },
        CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsKeplrConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_KEPLR_CONFIG', 'query');
        },
        CODEGEN_GENERATED_CHAINS_ROUTER_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsRouterConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS_ROUTER_CONFIG', 'query');
        },
        CODEGEN_GENERATED_CHAINS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedChainsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CHAINS', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIM_SENDER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimSenderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIM_SENDER', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIM(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIM', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID_SENDER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimByPsuedoClaimIdSenderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID_SENDER', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimByPsuedoClaimIdDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIM_BY_PSUEDO_CLAIM_ID', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY_SENDER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimsByClaimerPubKeySenderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY_SENDER', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimsByClaimerPubKeyDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_CLAIMER_PUB_KEY', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL_SENDER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimsByEmailSenderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL_SENDER', 'query');
        },
        CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimClaimsByEmailDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_CLAIMS_BY_EMAIL', 'query');
        },
        CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS_SENDER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimSenderClaimsSenderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS_SENDER', 'query');
        },
        CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimSenderClaimsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_SENDER_CLAIMS', 'query');
        },
        CODEGEN_GENERATED_CLAIM_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_STATE', 'query');
        },
        CODEGEN_GENERATED_CLAIM_USER_CLAIMS_SENDER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimUserClaimsSenderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_USER_CLAIMS_SENDER', 'query');
        },
        CODEGEN_GENERATED_CLAIM_USER_CLAIMS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimUserClaimsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM_USER_CLAIMS', 'query');
        },
        CODEGEN_GENERATED_CLAIM(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedClaimDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CLAIM', 'query');
        },
        CODEGEN_GENERATED_CW_BALANCE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedCwBalanceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CW_BALANCE', 'query');
        },
        CODEGEN_GENERATED_CW_TOKEN_INFO(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedCwTokenInfoDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CW_TOKEN_INFO', 'query');
        },
        CODEGEN_GENERATED_CW(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedCwDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CW', 'query');
        },
        CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES_RESULTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedCwMulticallRawQueriesResultsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES_RESULTS', 'query');
        },
        CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedCwMulticallRawQueriesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CW_MULTICALL_RAW_QUERIES', 'query');
        },
        CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES_RESULTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedCwMulticallSmartQueriesResultsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES_RESULTS', 'query');
        },
        CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedCwMulticallSmartQueriesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_CW_MULTICALL_SMART_QUERIES', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ALL_POOLS_PAGINATION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryAllPoolsPaginationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS_PAGINATION', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS_PAIR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryAllPoolsPoolsPairDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS_PAIR', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryAllPoolsPoolsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS_POOLS', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ALL_POOLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryAllPoolsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ALL_POOLS', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ALL_TOKENS_PAGINATION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryAllTokensPaginationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ALL_TOKENS_PAGINATION', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ALL_TOKENS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryAllTokensDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ALL_TOKENS', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ALLOWED_DENOMS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryAllowedDenomsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ALLOWED_DENOMS', 'query');
        },
        CODEGEN_GENERATED_FACTORY_ESCROW(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryEscrowDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_ESCROW', 'query');
        },
        CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryGetLptokenAddressDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_GET_LPTOKEN_ADDRESS', 'query');
        },
        CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL_TOTALS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryPartnerFeesCollectedTotalTotalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL_TOTALS', 'query');
        },
        CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryPartnerFeesCollectedTotalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED_TOTAL', 'query');
        },
        CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryPartnerFeesCollectedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_PARTNER_FEES_COLLECTED', 'query');
        },
        CODEGEN_GENERATED_FACTORY_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_STATE', 'query');
        },
        CODEGEN_GENERATED_FACTORY_VLP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryVlpDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY_VLP', 'query');
        },
        CODEGEN_GENERATED_FACTORY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedFactoryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_FACTORY', 'query');
        },
        CODEGEN_GENERATED_POOL_FEES_COLLECTED_BREAKDOWN(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolFeesCollectedBreakdownDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_FEES_COLLECTED_BREAKDOWN', 'query');
        },
        CODEGEN_GENERATED_POOL_FEES_COLLECTED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolFeesCollectedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_FEES_COLLECTED', 'query');
        },
        CODEGEN_GENERATED_POOL_MY_POOLS_PAIR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolMyPoolsPairDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_MY_POOLS_PAIR', 'query');
        },
        CODEGEN_GENERATED_POOL_MY_POOLS_USER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolMyPoolsUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_MY_POOLS_USER', 'query');
        },
        CODEGEN_GENERATED_POOL_MY_POOLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolMyPoolsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_MY_POOLS', 'query');
        },
        CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolTokenPairWithLiquidityPaginationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_PAGINATION', 'query');
        },
        CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolTokenPairWithLiquidityResultsPairDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS_PAIR', 'query');
        },
        CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolTokenPairWithLiquidityResultsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY_RESULTS', 'query');
        },
        CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolTokenPairWithLiquidityDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_TOKEN_PAIR_WITH_LIQUIDITY', 'query');
        },
        CODEGEN_GENERATED_POOL_VOLUME_VOLUME_BREAKDOWN_24HOURS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolVolumeVolumeBreakdown_24HoursDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_VOLUME_VOLUME_BREAKDOWN_24HOURS', 'query');
        },
        CODEGEN_GENERATED_POOL_VOLUME(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolVolumeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL_VOLUME', 'query');
        },
        CODEGEN_GENERATED_POOL(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedPoolDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_POOL', 'query');
        },
        CODEGEN_GENERATED_ROUTER_ALL_CHAINS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterAllChainsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_ALL_CHAINS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_ALL_ESCROWS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterAllEscrowsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_ALL_ESCROWS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_ALL_TOKENS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterAllTokensDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_ALL_TOKENS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterAllVlpsVlpsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS_VLPS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_ALL_VLPS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterAllVlpsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_ALL_VLPS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE_IBC(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterChainChainChainTypeIbcDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE_IBC', 'query');
        },
        CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterChainChainChainTypeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN_CHAIN_TYPE', 'query');
        },
        CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterChainChainDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_CHAIN_CHAIN', 'query');
        },
        CODEGEN_GENERATED_ROUTER_CHAIN(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterChainDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_CHAIN', 'query');
        },
        CODEGEN_GENERATED_ROUTER_ESCROWS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterEscrowsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_ESCROWS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER_USER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER_USER', 'query');
        },
        CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsCrossChainUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS_CROSS_CHAIN_USER', 'query');
        },
        CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterSimulateReleaseEscrowReleaseAmountsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW_RELEASE_AMOUNTS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterSimulateReleaseEscrowDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_SIMULATE_RELEASE_ESCROW', 'query');
        },
        CODEGEN_GENERATED_ROUTER_SIMULATE_SWAP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterSimulateSwapDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_SIMULATE_SWAP', 'query');
        },
        CODEGEN_GENERATED_ROUTER_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_STATE', 'query');
        },
        CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS_DENOMS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterTokenDenomsDenomsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS_DENOMS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterTokenDenomsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_TOKEN_DENOMS', 'query');
        },
        CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterTokenPairsFromVlpDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_TOKEN_PAIRS_FROM_VLP', 'query');
        },
        CODEGEN_GENERATED_ROUTER_VLP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterVlpDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER_VLP', 'query');
        },
        CODEGEN_GENERATED_ROUTER(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedRouterDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_ROUTER', 'query');
        },
        CODEGEN_GENERATED_TOKEN_ALL_DEXES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenAllDexesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_ALL_DEXES', 'query');
        },
        CODEGEN_GENERATED_TOKEN_CHAINS_FOR_TOKEN_LAUNCH(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenChainsForTokenLaunchDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_CHAINS_FOR_TOKEN_LAUNCH', 'query');
        },
        CODEGEN_GENERATED_TOKEN_DEX_METADATA(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenDexMetadataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_DEX_METADATA', 'query');
        },
        CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenGetAllFaucetsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_GET_ALL_FAUCETS', 'query');
        },
        CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS_DENOMS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenTokenDenomsDenomsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS_DENOMS', 'query');
        },
        CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenTokenDenomsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_TOKEN_DENOMS', 'query');
        },
        CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITIES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenTokenLiquiditiesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITIES', 'query');
        },
        CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenTokenLiquidityDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_TOKEN_LIQUIDITY', 'query');
        },
        CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenTokenMetadataByIdDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_TOKEN_METADATA_BY_ID', 'query');
        },
        CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenTokenMetadatasDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_TOKEN_METADATAS', 'query');
        },
        CODEGEN_GENERATED_TOKEN_TOKENS_METADATA(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenTokensMetadataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN_TOKENS_METADATA', 'query');
        },
        CODEGEN_GENERATED_TOKEN(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_TOKEN', 'query');
        },
        CODEGEN_GENERATED_VCOIN_BALANCE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVcoinBalanceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VCOIN_BALANCE', 'query');
        },
        CODEGEN_GENERATED_VCOIN_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVcoinStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VCOIN_STATE', 'query');
        },
        CODEGEN_GENERATED_VCOIN_USER_BALANCE_BALANCES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVcoinUserBalanceBalancesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VCOIN_USER_BALANCE_BALANCES', 'query');
        },
        CODEGEN_GENERATED_VCOIN_USER_BALANCE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVcoinUserBalanceDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VCOIN_USER_BALANCE', 'query');
        },
        CODEGEN_GENERATED_VCOIN(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVcoinDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VCOIN', 'query');
        },
        CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpAllPoolsPaginationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_ALL_POOLS_PAGINATION', 'query');
        },
        CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpAllPoolsPoolsPoolDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS_POOL', 'query');
        },
        CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpAllPoolsPoolsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_ALL_POOLS_POOLS', 'query');
        },
        CODEGEN_GENERATED_VLP_ALL_POOLS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpAllPoolsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_ALL_POOLS', 'query');
        },
        CODEGEN_GENERATED_VLP_FEE_RECIPIENT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpFeeRecipientDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_FEE_RECIPIENT', 'query');
        },
        CODEGEN_GENERATED_VLP_FEE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpFeeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_FEE', 'query');
        },
        CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpLiquidityPairDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_LIQUIDITY_PAIR', 'query');
        },
        CODEGEN_GENERATED_VLP_LIQUIDITY(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpLiquidityDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_LIQUIDITY', 'query');
        },
        CODEGEN_GENERATED_VLP_POOL(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpPoolDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_POOL', 'query');
        },
        CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpStateFeeRecipientDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_STATE_FEE_RECIPIENT', 'query');
        },
        CODEGEN_GENERATED_VLP_STATE_FEE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpStateFeeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_STATE_FEE', 'query');
        },
        CODEGEN_GENERATED_VLP_STATE_PAIR(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpStatePairDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_STATE_PAIR', 'query');
        },
        CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_STABLE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpStatePoolConfigStableDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG_STABLE', 'query');
        },
        CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpStatePoolConfigDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_STATE_POOL_CONFIG', 'query');
        },
        CODEGEN_GENERATED_VLP_STATE(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpStateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_STATE', 'query');
        },
        CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpTotalFeesCollectedEuclidFeesTotalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES_TOTALS', 'query');
        },
        CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpTotalFeesCollectedEuclidFeesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_EUCLID_FEES', 'query');
        },
        CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpTotalFeesCollectedLpFeesTotalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES_TOTALS', 'query');
        },
        CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpTotalFeesCollectedLpFeesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_LP_FEES', 'query');
        },
        CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpTotalFeesCollectedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED', 'query');
        },
        CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpTotalFeesCollectedPerDenomDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP_TOTAL_FEES_COLLECTED_PER_DENOM', 'query');
        },
        CODEGEN_GENERATED_VLP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CodegenGeneratedVlpDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'CODEGEN_GENERATED_VLP', 'query');
        }
    };
}
