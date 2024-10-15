"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./src/apollo-helpers"), exports);
__exportStar(require("./src/types"), exports);
/**
 * TypePolicies for Apollo Client.
 * This will help in managing cache properly.
 */
const TypePolicy = {
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
};
exports.default = TypePolicy;
