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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderData = void 0;
const Utils_1 = require("../Refs/Utils");
const baseJson = __importStar(require("../../db/base.json"));
const assortJson = __importStar(require("../../db/assort.json"));
class TraderData {
    traderConfig;
    ref;
    traderHelper;
    mod;
    constructor(traderConfig, ref, traderHelper) {
        this.traderConfig = traderConfig;
        this.ref = ref;
        this.traderHelper = traderHelper;
        this.mod = "Echoes-of-Tarkov---Requisitions";
    }
    registerProfileImage() {
        const imageFilepath = `./${this.ref.preSptModLoader.getModPath(this.mod)}res`;
        this.ref.imageRouter.addRoute(baseJson.avatar.replace(".png", ""), `${imageFilepath}/hoser.png`);
    }
    setupTraderUpdateTime() {
        this.traderHelper.setTraderUpdateTime(this.traderConfig, baseJson, 1800, 7200);
    }
    pushTrader() {
        this.traderHelper = new Utils_1.TraderUtils();
        this.traderHelper.addTraderToDb(baseJson, assortJson, this.ref.tables, this.ref.jsonUtil);
    }
    addTraderToLocales(tables, fullName, firstName, nickName, location, description) {
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}
exports.TraderData = TraderData;
//# sourceMappingURL=TraderTemplate.js.map