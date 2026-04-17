"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenPairSortBy = exports.ISortOrder = void 0;
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
