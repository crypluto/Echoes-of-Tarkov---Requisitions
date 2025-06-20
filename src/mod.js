"use strict";
/* eslint-disable @typescript-eslint/naming-convention */
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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const Traders_1 = require("C:/snapshot/project/obj/models/enums/Traders");
// WTT / Viper Item Imports
const WTTInstanceManager_1 = require("./WTTInstanceManager");
const EpicsEdits_1 = require("./EpicsEdits");
const CustomItemService_1 = require("./CustomItemService");
const CustomAssortSchemeService_1 = require("./CustomAssortSchemeService");
const CustomWeaponPresets_1 = require("./CustomWeaponPresets");
// Trader Imports
const References_1 = require("./Refs/References");
const TraderTemplate_1 = require("./Trader/TraderTemplate");
const Utils_1 = require("./Refs/Utils");
const baseJson = __importStar(require("../db/base.json"));
const questAssort = __importStar(require("../db/questassort.json"));
class EchoesOfTarkovMod {
    modName = "Echoes of Tarkov - Requisitions & hoser";
    version;
    debug = false;
    // WTT-related Services
    Instance = new WTTInstanceManager_1.WTTInstanceManager();
    customItemService = new CustomItemService_1.CustomItemService();
    customAssortSchemeService = new CustomAssortSchemeService_1.CustomAssortSchemeService();
    customWeaponPresets = new CustomWeaponPresets_1.CustomWeaponPresets();
    epicItemClass = new EpicsEdits_1.epicItemClass();
    // Trader-related Services
    ref = new References_1.References();
    preSptLoad(container) {
        // WTT Initializations
        this.Instance.preSptLoad(container, this.modName);
        this.Instance.debug = this.debug;
        this.getVersionFromJson();
        this.customItemService.preSptLoad(this.Instance);
        this.customAssortSchemeService.preSptLoad(this.Instance);
        this.customWeaponPresets.preSptLoad(this.Instance);
        this.epicItemClass.preSptLoad(this.Instance);
        // Trader Initializations
        this.ref.preSptLoad(container);
        const ragfair = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const traderConfig = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const traderUtils = new Utils_1.TraderUtils();
        const traderData = new TraderTemplate_1.TraderData(traderConfig, this.ref, traderUtils);
        traderData.registerProfileImage();
        traderData.setupTraderUpdateTime();
        // Register hoser for Ragfair
        Traders_1.Traders[baseJson._id] = baseJson._id;
        ragfair.traders[baseJson._id] = true;
    }
    postDBLoad(container) {
        // WTT Initializations
        this.Instance.postDBLoad(container);
        console.log(`\x1b[94m[Echoes of Tarkov] \x1b[93m Requisitions Loaded | Got something I'm supposed to deliver - your hands only.`);
        console.log(`\x1b[94m[Echoes of Tarkov] \x1b[93m Hoser Loaded        | Don’t ask for a discount. You want magic, you pay sorcerer prices.`);
        this.customItemService.postDBLoad();
        this.customAssortSchemeService.postDBLoad();
        this.customWeaponPresets.postDBLoad();
        this.epicItemClass.postDBLoad();
        // Trader Setup
        this.ref.postDBLoad(container);
        const traderConfig = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const traderUtils = new Utils_1.TraderUtils();
        const traderData = new TraderTemplate_1.TraderData(traderConfig, this.ref, traderUtils);
        traderData.pushTrader();
        this.ref.tables.traders[baseJson._id].questassort = questAssort;
        traderData.addTraderToLocales(this.ref.tables, baseJson.name, "Hoser", baseJson.nickname, baseJson.location, "Hoser is a profit-driven ex-Canadian combat engineer turned black market mod dealer, selling high-end gun parts to anyone with the cash—no loyalties, no questions.");
    }
    getVersionFromJson() {
        const packageJsonPath = path.join(__dirname, "../package.json");
        fs.readFile(packageJsonPath, "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            const jsonData = JSON.parse(data);
            this.version = jsonData.version;
        });
    }
}
module.exports = { mod: new EchoesOfTarkovMod() };
//# sourceMappingURL=mod.js.map