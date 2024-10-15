import { StrictTypedTypePolicies } from "./src/apollo-helpers";
export * from './src/apollo-helpers'
export * from "./src/types"


/**
 * TypePolicies for Apollo Client.
 * This will help in managing cache properly.
 */
const TypePolicy: StrictTypedTypePolicies = {
    Query: {
        fields: {
            factory: {
                keyArgs: ["chain_uid"],
                merge: true
            },
            vlp: {
                keyArgs: ["contract"],
                merge: true,
            },
            cw: {
                keyArgs: ['contract', 'chain_uid'],
                merge: true
            },
            router: {
                merge: true
            },
            cw_multicall: {
                keyArgs: ['chain_uid'],
                merge: true
            }
        },
        merge: true,
    },
    Chains: {
        fields: {
            chain_config: {
                keyArgs: ['chain_uid', 'chain_id']
            },
            keplr_config: {
                keyArgs: ['chain_id', 'chain_uid']
            }
        },
        merge: true,
    },
    Factory: {
        fields: {
            escrow: {
                keyArgs: ["token_id"],
            },
        },
        merge: true,
    },
    Vlp: {
        merge: true,
        fields: {
            'pool': {
                keyArgs: ['chain_uid']
            }
        }
    },
    Cw: {
        merge: true,
        fields: {
            balance: {
                keyArgs: ['address']
            }
        }
    },
    TokenQueries: {
        fields: {
            token_metadata_by_id: {
                keyArgs: ["token_id"],
            },
        },
        merge: true,
    },
    Vcoin: {
        fields: {
            balance: {
                keyArgs: ['balance_key', 'token_id']
            }
        },
        merge: true,
    },
    ChainConfig: {
        keyFields: ['chain_uid']
    },
    Keplr: {
        keyFields: ['chainID']
    },
    EscrowResponse: {
        keyFields: ["escrow_address"],
    },
    Metadata: {
        keyFields: ["tokenId"],
    },
    VlpWithTokenPair: {
        keyFields: ['vlp']
    }
}

export default TypePolicy;