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
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
// WTT imports
const WTTInstanceManager_1 = require("./WTTInstanceManager");
const EpicsEdits_1 = require("./EpicsEdits");
// Boss imports
const CustomItemService_1 = require("./CustomItemService");
// Custom Trader Assort Items
const CustomAssortSchemeService_1 = require("./CustomAssortSchemeService");
const CustomWeaponPresets_1 = require("./CustomWeaponPresets");
class AAAViperItems {
    Instance = new WTTInstanceManager_1.WTTInstanceManager();
    version;
    modName = "AAAViperItems";
    config;
    //#region CustomBosses
    customItemService = new CustomItemService_1.CustomItemService();
    epicItemClass = new EpicsEdits_1.epicItemClass();
    //#endregion
    customAssortSchemeService = new CustomAssortSchemeService_1.CustomAssortSchemeService();
    customWeaponPresets = new CustomWeaponPresets_1.CustomWeaponPresets();
    debug = false;
    preSptLoad(container) {
        this.Instance.preSptLoad(container, this.modName);
        this.Instance.debug = this.debug;
        this.getVersionFromJson();
        this.customItemService.preSptLoad(this.Instance);
        this.customAssortSchemeService.preSptLoad(this.Instance);
        this.customWeaponPresets.preSptLoad(this.Instance);
        this.epicItemClass.preSptLoad(this.Instance);
    }
    postDBLoad(container) {
        this.Instance.postDBLoad(container);
        this.customItemService.postDBLoad();
        this.customAssortSchemeService.postDBLoad();
        this.customWeaponPresets.postDBLoad();
        this.epicItemClass.postDBLoad();
        // Inject bg.png override
        const imageRouter = container.resolve("ImageRouter");
        const imagePath = path.resolve(__dirname, "../assets/images/launcher/bg.png");
        if (fs.existsSync(imagePath)) {
            this.Instance.logger.log("Overriding launcher background with custom bg.png", LogTextColor_1.LogTextColor.MAGENTA);
            imageRouter.addRoute("/files/launcher/bg", imagePath);
        }
        else {
            this.Instance.logger.warning("Custom bg.png not found at expected path: " + imagePath);
        }
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
module.exports = { mod: new AAAViperItems() };
//# sourceMappingURL=mod.js.map