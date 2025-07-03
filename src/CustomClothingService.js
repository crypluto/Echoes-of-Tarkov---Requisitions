"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomClothingService = void 0;
const configConsts_1 = require("./references/configConsts");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
class CustomClothingService {
    instanceManager;
    preSptLoad(instanceManager) {
        this.instanceManager = instanceManager;
    }
    postDBLoad() {
        const clothingJsonsPath = node_path_1.default.join(__dirname, "../db/clothing");
        if (this.instanceManager.debug) {
            console.log(`Scanning directory for clothing JSON files: ${clothingJsonsPath}`);
        }
        const jsonFiles = node_fs_1.default.readdirSync(clothingJsonsPath).filter(file => file.endsWith(".json"));
        if (this.instanceManager.debug) {
            console.log(`Found ${jsonFiles.length} JSON file(s) in ${clothingJsonsPath}`);
        }
        for (const jsonFile of jsonFiles) {
            const filePath = node_path_1.default.join(clothingJsonsPath, jsonFile);
            if (this.instanceManager.debug) {
                console.log(`Processing file: ${jsonFile} at path: ${filePath}`);
            }
            try {
                // Read and parse the JSON file
                const clothingConfigs = this.readJsonFile(filePath);
                if (this.instanceManager.debug) {
                    console.log(`Parsed JSON content from ${jsonFile}:`, clothingConfigs);
                }
                // Process the parsed content
                for (const clothingConfig of clothingConfigs) {
                    if (this.instanceManager.debug) {
                        console.log("Processing clothing config:", clothingConfig);
                    }
                    try {
                        this.processClothingConfig(clothingConfig);
                        if (this.instanceManager.debug) {
                            console.log("Successfully processed clothing config:", clothingConfig);
                        }
                    }
                    catch (error) {
                        console.error(`Error processing config in ${jsonFile}:`, error);
                    }
                }
                if (this.instanceManager.debug) {
                    console.log(`Successfully processed all configs in ${jsonFile}.`);
                }
            }
            catch (error) {
                console.error(`Error reading or parsing ${jsonFile}:`, error);
            }
        }
    }
    processClothingConfig(clothingConfig) {
        if (this.instanceManager.debug) {
            console.log(`Processing config of type: ${clothingConfig.type}`);
        }
        if (clothingConfig.type === "top") {
            this.addTop(clothingConfig);
        }
        else if (clothingConfig.type === "bottom") {
            this.addBottom(clothingConfig);
        }
        else {
            console.error("Unknown config type:", clothingConfig.type);
        }
    }
    addSuiteToTrader(traderId, outfitId, suiteId, loyaltyLevel, profileLevel, standing, currencyId, price) {
        const traderIdFromEnum = configConsts_1.traderIDs[traderId] || traderId;
        const currencyIdFromEnum = configConsts_1.currencyIDs[currencyId] || currencyId;
        this.instanceManager.database.traders[traderIdFromEnum].base.customization_seller = true;
        if (!this.instanceManager.database.traders[traderIdFromEnum].suits) {
            this.instanceManager.database.traders[traderIdFromEnum].suits = [];
        }
        const newTraderOutfit = {
            "_id": outfitId,
            "tid": traderIdFromEnum,
            "suiteId": suiteId,
            "isActive": true,
            "isHiddenInPVE": false,
            "externalObtain": false,
            "internalObtain": false,
            "requirements": {
                "loyaltyLevel": loyaltyLevel,
                "profileLevel": profileLevel,
                "standing": standing,
                "skillRequirements": [],
                "questRequirements": [],
                "achievementRequirements": [],
                "itemRequirements": [
                    {
                        "id": null,
                        "type": "ItemRequirement",
                        "count": price,
                        "_tpl": currencyIdFromEnum,
                        "onlyFunctional": true
                    }
                ],
                "requiredTid": traderIdFromEnum
            }
        };
        if (this.instanceManager.debug) {
            console.log("Adding new trader outfit:", newTraderOutfit);
        }
        this.instanceManager.database.traders[traderIdFromEnum].suits.push(newTraderOutfit);
    }
    addTop(clothingConfig) {
        const { side, suiteId, topId, handsId, outfitId, topBundlePath, handsBundlePath, traderId, loyaltyLevel, profileLevel, standing, currencyId, price, watchPrefab, watchPosition, watchRotation } = clothingConfig;
        try {
            if (this.instanceManager.debug) {
                console.log("Adding top");
            }
            const DefaultWatchPrefab = {
                "path": "",
                "rcid": ""
            };
            const DefaultWatchPosition = {
                "x": 0,
                "y": 0,
                "z": 0
            };
            const DefaultWatchRotation = {
                "x": 0,
                "y": 0,
                "z": 0
            };
            const newTop = {
                "_id": topId,
                "_name": `${topId}_name`,
                "_parent": "5cc0868e14c02e000c6bea68",
                "_type": "Item",
                "_props": {
                    "Description": `${topId}_desc`,
                    "Name": `${topId}_name`,
                    "ShortName": `${topId}_shortName`,
                    "Side": [
                        "Usec"
                    ],
                    "BodyPart": "Body",
                    "IntegratedArmorVest": false,
                    "Prefab": {
                        "path": topBundlePath,
                        "rcid": ""
                    },
                    "WatchPosition": watchPosition ?? DefaultWatchPosition,
                    "WatchPrefab": watchPrefab ?? DefaultWatchPrefab,
                    "WatchRotation": watchRotation ?? DefaultWatchRotation
                },
                "_proto": "5cde95d97d6c8b647a3769b0"
            };
            if (this.instanceManager.debug) {
                console.log(`Added top for ${topId}:`, newTop);
            }
            this.instanceManager.database.templates.customization[topId] = newTop;
            // add hands
            if (this.instanceManager.debug) {
                console.log(`Adding hands for topId: ${topId}`);
            }
            const newHands = {
                "_id": handsId,
                "_name": `${handsId}_name`,
                "_parent": "5cc086a314c02e000c6bea69",
                "_type": "Item",
                "_props": {
                    "Description": `${handsId}_desc`,
                    "Name": `${handsId}_name`,
                    "ShortName": `${handsId}_shortName`,
                    "Side": [
                        "Usec"
                    ],
                    "BodyPart": "Hands",
                    "IntegratedArmorVest": false,
                    "Prefab": {
                        "path": handsBundlePath,
                        "rcid": ""
                    },
                    "WatchPosition": watchPosition ?? DefaultWatchPosition,
                    "WatchPrefab": watchPrefab ?? DefaultWatchPrefab,
                    "WatchRotation": watchRotation ?? DefaultWatchRotation
                },
                "_proto": "5cde95fa7d6c8b04737c2d13"
            };
            this.instanceManager.database.templates.customization[handsId] = newHands;
            if (this.instanceManager.debug) {
                console.log(`Added hands for ${handsId}:`, newHands);
            }
            const newSuite = {
                "_id": suiteId,
                "_name": `${suiteId}_name`,
                "_parent": "5cd944ca1388ce03a44dc2a4",
                "_type": "Item",
                "_props": {
                    "Description": "DefaultUsecUpperSuite",
                    "Name": "DefaultUsecUpperSuite",
                    "ShortName": "DefaultUsecUpperSuite",
                    "Side": side ?? ["Usec", "Bear", "Savage"],
                    "AvailableAsDefault": false,
                    "Game": [
                        "eft",
                        "arena"
                    ],
                    "Body": topId,
                    "Hands": handsId
                },
                "_proto": "5cde9ec17d6c8b04723cf479"
            };
            this.instanceManager.database.templates.customization[suiteId] = newSuite;
            if (this.instanceManager.debug) {
                console.log(`Added suite for ${suiteId}`, newSuite);
            }
            this.handleLocale(clothingConfig, suiteId);
            this.addSuiteToTrader(traderId, outfitId, suiteId, loyaltyLevel, profileLevel, standing, currencyId, price);
        }
        catch (error) {
            console.error(`Error adding top for outfitId: ${outfitId}:`, error);
        }
    }
    addBottom(clothingConfig) {
        const { side, bottomId, suiteId, outfitId, bottomBundlePath, traderId, loyaltyLevel, profileLevel, standing, currencyId, price } = clothingConfig;
        // add Bottom
        const newBottom = {
            "_id": bottomId,
            "_name": `${bottomId}_name`,
            "_parent": "5cc0869814c02e000a4cad94",
            "_type": "Item",
            "_props": {
                "Description": `${bottomId}_desc`,
                "Name": `${bottomId}_name`,
                "ShortName": `${bottomId}_shortName`,
                "Side": side ?? ["Usec", "Bear", "Savage"],
                "BodyPart": "Feet",
                "IntegratedArmorVest": false,
                "Prefab": {
                    "path": bottomBundlePath,
                    "rcid": ""
                },
                "WatchPosition": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "WatchPrefab": {
                    "path": "",
                    "rcid": ""
                },
                "WatchRotation": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                }
            },
            "_proto": "5cdea3c47d6c8b0475341734"
        };
        this.instanceManager.database.templates.customization[bottomId] = newBottom;
        const newSuite = {
            "_id": suiteId,
            "_name": `${suiteId}_name`,
            "_parent": "5cd944d01388ce000a659df9",
            "_type": "Item",
            "_props": {
                "Description": `${suiteId}_desc`,
                "Name": `${suiteId}_name`,
                "ShortName": `${suiteId}_shortName`,
                "Side": side ?? ["Usec", "Bear", "Savage"],
                "AvailableAsDefault": false,
                "Game": [
                    "eft",
                    "arena"
                ],
                "Feet": bottomId
            },
            "_proto": "5cd946231388ce000d572fe3"
        };
        // add suite
        this.instanceManager.database.templates.customization[suiteId] = newSuite;
        if (this.instanceManager.debug) {
            console.log(`Added suite for ${suiteId}`, newSuite);
        }
        this.handleLocale(clothingConfig, suiteId);
        this.addSuiteToTrader(traderId, outfitId, suiteId, loyaltyLevel, profileLevel, standing, currencyId, price);
    }
    handleLocale(clothingConfig, clothingId) {
        for (const localeID in this.instanceManager.database.locales.global) {
            if (this.instanceManager.debug) {
                console.log("Processing localeID:", localeID);
            }
            try {
                const itemName = `${clothingId} Name`;
                // Check if the locale exists, else fallback to 'en'
                const localeValue = clothingConfig.locales[localeID] || clothingConfig.locales["en"];
                if (localeValue && this.instanceManager.database.locales.global[localeID]) {
                    this.instanceManager.database.locales.global[localeID][itemName] = localeValue;
                }
            }
            catch (error) {
                console.error(`Error handling locale for ${localeID}: ${error}`);
            }
        }
    }
    readJsonFile(filePath) {
        const content = node_fs_1.default.readFileSync(filePath, "utf-8");
        try {
            const parsedContent = JSON.parse(content);
            if (this.instanceManager.debug) {
                console.log("Custom Clothing Service: Parsed JSON Content:", parsedContent); // Logging the parsed JSON content
            }
            return parsedContent;
        }
        catch (error) {
            console.error("Error parsing JSON content:", error);
            return null;
        }
    }
}
exports.CustomClothingService = CustomClothingService;
//# sourceMappingURL=CustomClothingService.js.map