import { StrictTypedTypePolicies } from "./src/apollo-helpers";
export * from './src/apollo-helpers';
export * from "./src/types";
/**
 * TypePolicies for Apollo Client.
 * This will help in managing cache properly.
 */
declare const TypePolicy: StrictTypedTypePolicies;
export default TypePolicy;
